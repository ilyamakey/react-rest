import React from 'react';
import Button from "./Button";

const Modal = (props) => {

    return (
        props.show ?

            <div className="modal">
                <div className="modal__content">
                    <h4 className="h4 modal__heading">{props.heading}</h4>
                    <p className="text--md modal__text">{props.text}</p>
                </div>
                <Button btnType={`modal__btn`}
                        disabled={false}
                        type={`button`}>
                ok
                </Button>
            </div>

            : null
    )
};

export default Modal;