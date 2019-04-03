import React from 'react';
import Form from "../components/Form";

const Registration = (props) => {

    return (
        <section id={'register'} className="register">
            <h2 className="h2 register__heading">
                {props.heading}
            </h2>
            <p className="text--md register__text">
                {props.text}
            </p>
            <Form loadData={props.loadData}/>
        </section>
    )
};

export default Registration;