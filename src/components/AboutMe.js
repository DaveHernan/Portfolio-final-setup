import React from "react";
import pic from "../bikeup.jpg"


const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className ="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="author-picture" src={pic} alt="Author..."/>
                    </div>
               </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                <p className="about-wrapper__info-text">
                  Hi, I'm Dave. I like building things. I am a Full Stack Web Developer and a graduate of Robertson College, Canada. 
                    I'm striving to learn more so I am very open for opportunities and to give back to the community as well. 
                </p>
                <p className="about-wrapper__info-text">
                 I took this path because I want to help small enterprises to promote their businesses without worrying about spending too much or with high cost.
                   
                </p>
                <p className="about-wrapper__info-text">
                 One day, I had a project to make at home but when I tried to search for the things I needed, almost everything are out of stock on major stores nearby.
                     Then I went through some classified ads search engine and luckily, there's 1 post of a store that have most of the items I need. I called them and asked, 
                     <em>'Hey, do you have a website so I can check your inventory or things that you sell?', They replied 'unfortunately not, too much money needed for that' </em>
               </p>
                <p className="about-wrapper__info-text">
                So then, the idea of, <strong>'this is a way to give back to the community'</strong>  began.
                </p>              
                <p className="about-wrapper__info-text">
                My work experiences may not be that strong and related to programming nor graphic designing, but let's make you ideas become a reality. 
                </p>
                
                </div>
            </div>
        </div>
    )
}

export default AboutMe
