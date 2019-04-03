import React from 'react';
import Button from "./Button";
import Modal from "./Modal";
import Backdrop from "../layout/Backdrop";
import axios from 'axios';
import CONFIG from "../config";

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            positions: null,
            positionDefault: 'Loading...',
            phonePrefix: '+380',
            fileSizeLimit: 5000000,
            positionInput: '',
            telInput: '',
            emailInput: '',
            fileInput: 'Upload your photo',
            nameInput: ''
        };

        this.form = React.createRef();

        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.phoneFocus = this.phoneFocus.bind(this);

        this.selectHandle = this.selectHandle.bind(this);
        this.phoneHandle = this.phoneHandle.bind(this);
        this.photoHandle = this.photoHandle.bind(this);
        this.nameHandle = this.nameHandle.bind(this);
        this.emailHandle = this.emailHandle.bind(this);

        this.submitForm = this.submitForm.bind(this);



    }

    componentDidMount() {
        axios.get(`${CONFIG.restAPI}/positions`)
            .then((res) => {
                this.setState({
                    positions: res.data.positions
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    positionDefault: `Can't load positions`
                })
            })
    }

    nameHandle(e) {
        if (e.target.value) {
            this.setState({
                nameInput: e.target.value
            })
        }
    }

    selectHandle(event) {
        this.setState({
            positionInput: event.target.value
        });
    }

    showModal() {
        this.setState({
            isModalVisible: true
        })
    }

    hideModal() {
        this.setState({
            isModalVisible: false
        })
    }

    phoneHandle(e) {
        let nextVal = e.target.value;
        let min = this.state.phonePrefix.length;
        let max = e.target.minLength;

        if (nextVal.length >= min && nextVal.length <= max) {
            this.setState({
                telInput: nextVal

            })
        }
    }

    emailHandle(e) {
        if (e.target.value) {
            this.setState({
                emailInput: e.target.value
            })
        }
    }

    phoneFocus() {
        if (!this.state.telInput) {
            this.setState({
                telInput: this.state.phonePrefix
            })
        }
    }

    photoHandle(e) {
        if (window.File &&  window.FileReader) {
            let fileSize = e.target.files[0].size;
            if (fileSize > this.state.fileSizeLimit) {
                e.target.setCustomValidity('Max file size - 5 Mb');
            } else {
                this.setState({
                    fileInput: e.target.files[0].name
                })
            }
        }
    }

    updateUsers(url, params) {
        this.props.loadData(url, params);
    }

    submitForm(e) {
        e.preventDefault();

        let token = null;
        let data = new FormData(this.form.current);

        axios.get(`${CONFIG.restAPI}/token`)
            .then((res) => {
                console.log(res);
                token = res.data.token;

                axios.post(`${CONFIG.restAPI}/users`, data, {
                    headers: {'token': token}
                })
                    .then((response) => {
                        console.log(response);
                        this.updateUsers(`users`, {
                            page: 1,
                            count: 3
                        })
                    })
                    .catch((error) => {
                        console.log(error.response);
                    });

            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {

        let positions = this.state.positions;
        let options = null;

        if (positions) {
            options = positions.map((position) =>
                <option value={position.id}
                        key={position.id}>
                    {position.name}
                </option>
            )
        }

        return (
            <form action="" className="reg-form" ref={this.form} noValidate={false} onSubmit={this.submitForm}>
                <div className="reg-form__row">
                    <div className="reg-form__item">
                <span className="reg-form__label">
                    Name
                </span>
                        <input type="text"
                               name={'name'}
                               className="reg-form__input"
                               placeholder={`Your name`}
                               onBlur={this.nameHandle}
                               required={true}
                               minLength={2}
                               maxLength={60}
                               pattern={`^[A-Za-z]+\\s{0,1}[A-Za-z]+$`}/>
                    </div>
                    <div className="reg-form__item">
                <span className="reg-form__label">
                    Email
                </span>
                        <input type="email"
                               name={'email'}
                               required={true}
                               onChange={this.emailHandle}
                               className="reg-form__input"
                               placeholder={`Your email`}
                        />
                    </div>
                    <div className="reg-form__item">
                <span className="reg-form__label">
                    Phone
                </span>
                        <input type="tel"
                               name={'phone'}
                               required={true}
                               className="reg-form__input"
                               placeholder={`+38 (___) ___ __ __`}
                               pattern={'^(\\+380){1}[0-9]+$'}
                               minLength={13}
                               value={this.state.telInput}
                               onChange={this.phoneHandle}
                               onFocus={this.phoneFocus}

                        />
                    </div>
                </div>
                <div className="reg-form__row">
                    <div className="reg-form__item reg-form__item--custom-select">
                        <select value={this.state.positionInput}
                                required={true}
                                onChange={this.selectHandle}
                                className="reg-form__input reg-form__input--select"
                                name={'position_id'}>
                            <option value='' disabled>Select your position...</option>

                            {options}

                        </select>
                    </div>
                    <div className="reg-form__item reg-form__item--custom-upload">
                        <input type="file"
                               name={'photo'}
                               required={true}
                               id="formFile"
                               accept="image/jpeg"
                               onChange={this.photoHandle}
                               className="reg-form__input reg-form__input--file"/>
                        <label htmlFor="formFile" className="reg-form__input reg-form__file-label">
                            {this.state.fileInput}
                        </label>
                        <p className="text reg-form__tip">
                            File format jpg  up to 5 MB, the minimum size of 70x70px
                        </p>
                    </div>
                </div>
                <Button btnType={`btn-main reg-form__btn-signup`}
                        disabled={false}
                        type={`submit`}>
                    Sign up
                </Button>
                <Modal heading={`Congratulations`}
                       text={`You have successfully passed the registration`}
                       show={this.state.isModalVisible}
                />
                <Backdrop show={this.state.isModalVisible}
                          clicked={this.hideModal}/>
            </form>
        )
    }
}

export default Form;