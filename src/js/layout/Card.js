import React from 'react';

const Card = (props) => {

    const email = props.email ? <p className="text card__email">{props.email}</p> : null;
    const phone = props.phone ? <p className="text card__email">{props.phone }</p> : null;


    return (
        <div className={`card ${props.cardType}`}>
            <img src={props.image} alt="image" className="card__img"/>
            <div className="card__content">
                <h3 className="h3 card__heading">
                    {props.heading}
                </h3>
                <p className="text card__text">
                    {props.children}
                </p>
                {email}
                {phone}
            </div>
        </div>
    );
};

export default Card;