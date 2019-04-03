import React from 'react';

const Contacts = (props) => {

    let emails = props.emails.map((email, index) =>
        <a href={`mailto:${email}`} key={index} className="contacts__item">
            {email}
        </a>
    );

    let phones = props.phones.map((phone, index) =>
        <a href={`mailto:${phone}`} key={index} className="contacts__item">
            {phone}
        </a>
    );

    return (
        <section className="contacts">
            {emails}
            {phones}
        </section>
    );
};

export default Contacts;