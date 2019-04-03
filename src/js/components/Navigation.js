import React from 'react';

const Navigation = (props) => {

    const links = props.links.map((link, index) => (
        <a href={link} key={index} className={'nav__link'}>
            {link}
        </a>
    ));

    return (
        <nav className={`nav ${props.navStyle}`}>
            {links}
        </nav>
    );
};

export default Navigation;