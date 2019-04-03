import React from 'react';
import Card from "./Card";

const PersonalSkills = (props) => {
    return (
        <section className="personal-skills">
            <h2 className="h2 personal-skills__heading">
                {props.heading}
            </h2>
            <section className="personal-skills__list">
                <Card cardType={`personal-skills__card personal-skills__card--html`} heading={`I'm in love with HTML`} image={`\\img\\imgs\\html.svg`}>
                    Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
                </Card>
                <Card cardType={`personal-skills__card personal-skills__card--css`} heading={`CSS is my best friend`} image={`\\img\\imgs\\css.svg`}>
                    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.
                </Card>
                <Card heading={`JavaScript is my passion`}
                      image={`\\img\\imgs\\javascript.svg`}
                      cardType={`personal-skills__card personal-skills__card--js`}>
                    JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
                </Card>
            </section>
        </section>
    );
};

export default PersonalSkills;