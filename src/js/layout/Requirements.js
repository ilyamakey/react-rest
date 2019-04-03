import React from 'react';
import CONFIG from "../config";

const Requirements = (props) => {

    let text = null;

    if (props.text) {

        text = props.text.map((text, index) => {
            return (
                <p className="text requirements__text" key={index}>
                    {text}
                </p>
            )
        })
    }

    return (
        <section className="requirements">
            <div className="container">
                <h2 className="h2 requirements__heading">
                    {props.heading}
                </h2>
                <section className="requirements__content">
                    <picture className="requirements__img">
                        <source srcSet={`${CONFIG.imgPath}/man-laptop-v2.svg`} media="(min-width: 768px)" />
                        <img src={props.image} alt="requirements-picture" className="requirements__img"/>
                    </picture>
                    <div className="requirements__paragraphs">
                        {text}
                    </div>
                </section>
            </div>
        </section>
    )
};

export default Requirements;

