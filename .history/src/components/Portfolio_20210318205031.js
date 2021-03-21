import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";

function Portfolio() {
    return (
        <div>
            <div className="portfolio-wrapper">
                <div className="container">
                        <h1 className="text-uppercase text0center py-5"> Portfolio </h1>
                            <div className="image-box-wrapper row justify-content-center">
                                <div className="portfolio-image-box">
                                <img className="portfolio-image" src={netflix} alt="Netflix Clone Project...."/>
                            </div>

                            {/* - */}

                                <div className="portfolio-image-box">
                                <img className="portfolio-image" src={cityGuide} alt="City guide app Project...."/>
                            </div>

                            {/* - */}

                                <div className="portfolio-image-box">
                                <img className="portfolio-image" src={portfolio} alt="Portfolio Project...."/>
                            </div>
                            {/* - */}

                                <div className="portfolio-image-box">
                                <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project...."/>
                            </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
