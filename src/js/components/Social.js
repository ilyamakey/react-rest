import React from 'react';

const Social = (props) => {

    let icons = props.social.map((icon) =>
        <a href={icon.href}
           className={`social__icon social__icon--${icon.name}`}
           key={icon.name}
        >
        </a>
    );

    return (
        <div className="social">
            {icons}
        </div>
    );
};

export default Social;