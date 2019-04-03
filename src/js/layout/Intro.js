import React from 'react';
import Button from "../components/Button";

const Intro = (props) => (
    <section className="intro">
        <h2 className="h2 intro__heading">
            {props.mainHeading}
        </h2>
        <section className="intro-info">
            <img src={props.image} alt="man-pic" className="intro-info__img"/>
            <section className="intro-info__about">
                <h3 className="h3 intro-info__heading">
                    {props.secHeading}
                </h3>
                <p className="text intro-info__text">
                    {props.firstParagraph}
                </p>
                <p className="text intro-info__text">
                    {props.secondParagraph}
                </p>
                <Button disabled={false} type={'button'} btnType={'intro-info__btn'}>
                    Sign Up
                </Button>
            </section>
        </section>
    </section>
);

export default Intro;