import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";


import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

const openPopupboxNetflix = () => {
    const content = (
    <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project...."/>
            <p>Lorem ipsum</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/DaveHernan/Portfolio.github.io.git")}>https://github.com/DaveHernan/Portfolio.github.io.git  </a>
    </>
)  
PopupboxManager.open({content})
}

const popupboxConfigNetflix = {
    titleBar: {
        enable: true,
        text: "Netflix Clone"
    },
    fadeIn: true,
    fadeInSpeed: 500
}
//City guide

    const openPopupboxCityGuide = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide...."/>
                <p>Lorem ipsum</p>
                <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/DaveHernan/Portfolio.github.io.git")}>https://github.com/DaveHernan/Portfolio.github.io.git  </a>
        </>
    )  
    PopupboxManager.open({content})
    }
    
    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "Netflix Clone"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div>
            <div className="portfolio-wrapper">
                <div className="container">
                        <h1 className="text-uppercase text0center py-5"> Portfolio </h1>
                            <div className="image-box-wrapper row justify-content-center">
                                <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                                <img className="portfolio-image" src={netflix} alt="Netflix Clone Project...."/>
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                            </div>
                            {/* - */}
                                <div className="portfolio-image-box"> onClick={popupboxConfigCityGuide}
                                <img className="portfolio-image" src={cityGuide} alt="City guide app Project...."/>
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                            </div>

                            {/* - */}
                                <div className="portfolio-image-box">
                                <img className="portfolio-image" src={portfolio} alt="Portfolio Project...."/>
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                            </div>

                            {/* - */}
                                <div className="portfolio-image-box">
                                <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project...."/>
                                <div className="overflow"></div>
                                <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                            </div>

                            </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />  
            <PopupboxContainer {...popupboxConfigCityGuide} />  
               </div>
    )
}

export default Portfolio
