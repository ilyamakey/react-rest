import React from 'react';
import Card from "../layout/Card";
import Navigation from "./Navigation";
import CONFIG from "../config";

const MobMenu = (props) => {

    let isVisible = props.isVisible ? 'mob-menu--visible' : '';
    let user = props.registeredUser;

    let userCard = user ? <Card cardType={`card--user`}
                            heading={user.name}
                            email={user.email}
                            image={user.photo}/>
                        : null;

    return (

        <section className={`mob-menu ${isVisible}`}>
            <a href="#" className="mob-menu__top">

                {userCard}

            </a>
            <Navigation navStyle={`nav--mobMenu`}
                        links={CONFIG.mainNav}
            />
        </section>
    );

};

export default MobMenu;