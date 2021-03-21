import React from "react";
import netflix from "../images/netflix.png";
import cityguideapp from "../images/city-guide-app.png";
import mernblog from "../images/mern-blog.png";
import portfolio from "../images/portfolio.png";
import taskmanager from "../images/task-manager.png";

function Portfolio() {
    return (
        <div>
            <div className="portfolio-wrapper">
                <div className="container">
                        <h1 className="text-uppercase text0center py-5"> Portfolio </h1>
                            <div className="image-box-wrapper row justify-content-center">
                                <img className="portfolio-image" src={netflix} alt="Netflix Clone Project...."/>

                            </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
