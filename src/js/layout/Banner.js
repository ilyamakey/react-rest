import React from 'react';
import Button from "../components/Button";
import CONFIG from "../config";

const Banner = () => (
    <div className="banner">
        <div className="container">
            <section className="banner__content">
                <h1 className="h1 banner__heading">{CONFIG.bannerHeading}</h1>
                <p className="text banner__text">{CONFIG.bannerText}</p>
                <a href={'#register'} className={'btn btn-main btn-main--signup'}>
                    Sign Up
                </a>
            </section>
        </div>
    </div>
);

export default Banner;