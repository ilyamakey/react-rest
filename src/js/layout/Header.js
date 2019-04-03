import React from 'react';
import Logo from '../components/Logo';
import Backdrop from "./Backdrop";
import MobMenu from "../components/MobMenu";
import axios from "axios";
import CONFIG from "../config";


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavVisible: false,
            registeredUser: null
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {

        this.setState({
                isNavVisible: !this.state.isNavVisible
            })
    }

    componentDidMount() {
        axios.get(`${CONFIG.restAPI}/users/1`)
            .then((res) => {
                this.setState({
                    registeredUser: res.data.user
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <header className="header container">
                <Logo logo={'logo--header'} />
                <MobMenu isVisible={this.state.isNavVisible}
                         registeredUser={this.state.registeredUser}
                />
                <button className="mob-toggle" onClick={this.toggleNav}>
                    <span className="mob-toggle__stick"></span>
                    <span className="mob-toggle__stick"></span>
                    <span className="mob-toggle__stick"></span>
                </button>
                <Backdrop show={this.state.isNavVisible} clicked={this.toggleNav}/>
            </header>

        )
    }
}

export default Header;