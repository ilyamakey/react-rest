import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Contacts from "../components/Contacts";
import Social from "../components/Social";
import CONFIG from "../config";

const Footer = (props) => {
    return (
        <footer className="footer">
            <section className="footer-top container">
                <Logo logo={'logo--footer'}/>
                <Navigation links={props.nav} navStyle="nav--footer"/>
            </section>
            <section className="footer-bottom container">
                <Contacts emails={props.contacts.emails}
                          phones={props.contacts.phones}/>
                <Social social={CONFIG.social}/>
            </section>
            <p className="text footer__copy">&copy; abz.agency specially for the test task</p>
        </footer>
    );
};

export default Footer;