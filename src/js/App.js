import React from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Banner from "./layout/Banner";
import AboutMe from "./layout/AboutMe";
import Requirements from "./layout/Requirements";
import CONFIG from "./config";
import OurUsers from "./layout/OurUsers";
import Registration from "./layout/Registration";
import Footer from "./layout/Footer";

class App extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Header/>
                <main>
                    <Banner/>
                    <AboutMe/>
                    <Requirements heading={`General requirements for the test task`}
                                  image={`${CONFIG.imgPath}man-laptop-v1.svg`}
                                  text={CONFIG.requirements.text}/>

                    <OurUsers cards={CONFIG.ourUsers.users}
                              heading={CONFIG.ourUsers.heading}
                              secondHeading={CONFIG.ourUsers.secondHeading}/>

                    <Footer nav={CONFIG.footerNav} contacts={CONFIG.contacts}/>
                </main>
            </>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);