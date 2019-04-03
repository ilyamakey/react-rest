import React from 'react';
import CONFIG from '../config';
import Intro from "./Intro";
import PersonalSkills from "./PersonalSkills";

const AboutMe = () => (
    <article className="about">
        <div className="container">
            <Intro image={`${CONFIG.imgPath}man-mobile.svg`}
                   mainHeading={`Let's get acquainted`}
                   secHeading={`I am cool frontend developer`}
                   firstParagraph={CONFIG.introText}
                   secondParagraph={CONFIG.introText2} />
            <PersonalSkills heading={`About my relationships with web-development`}/>
        </div>
    </article>
);

export default AboutMe;