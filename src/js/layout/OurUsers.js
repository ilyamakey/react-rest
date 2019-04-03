import React from 'react';
import Card from "./Card";
import Button from "../components/Button";
import axios from 'axios';
import CONFIG from "../config";
import Registration from "./Registration";

class OurUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            preloadMessage: 'Loading...',
            isLastPage: false
        };

        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData(`users`, {
            page: 1,
            count: 3
        })
    }

    loadData(url = `users`, params = {}) {
        axios.get(`${CONFIG.restAPI}/${url}`, {
            params: {...params}
        })
            .then((res) => {
                let data = this.state.data;
                let updatedUsers = null;

                if (data) {
                    updatedUsers = [...data.users, ...res.data.users];
                    this.setState({
                        data: {
                            page: res.data.page,
                            users: updatedUsers
                        },
                        preloadMessage: 'Loading complete',
                        isLastPage: !res.data.links.next_url,
                    })
                } else {
                    this.setState({
                        data: res.data,
                        preloadMessage: 'Loading complete'
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    preloadMessage: 'Users loading failed. Try again later'
                })
            })
    }

    render () {
        let data = this.state.data;
        let userCards;

        if (data) {
            userCards = data.users.map((user) =>
                <Card image={user.photo}
                      heading={user.name}
                      email={user.email}
                      phone={user.phone}
                      key={user.id}
                      cardType={`card--user`}>
                    {user.position}
                </Card>
            )
        } else {
            userCards = <h3>{this.state.preloadMessage}</h3>
        }

        return (
            <section className="our-users container">
                <h2 className="h2 our-users__heading">
                    {this.props.heading}
                </h2>
                <h5 className="h5 our-users__heading--secondary">
                    {this.props.secondHeading}
                </h5>
                <div className="our-users__cards">

                    {userCards}

                </div>
                <Button disabled={this.state.isLastPage}
                        type={'button'}
                        btnType={'btn-main btn-main--optional our-users__btn-load'}
                        click={()=> {
                            this.loadData('users', {
                                page: this.state.data.page +1,
                                count: 6
                            })
                        }}>
                    Show more
                </Button>
                <Registration heading={CONFIG.registration.heading}
                              text={CONFIG.registration.text}
                              loadData={this.loadData}/>

            </section>
        )
    }
}

export default OurUsers;