import React from "react";
import EmailPicture from "../images/Icon.png"
import Mine from "../images/my-icon.jpg"


export default function Info(){
    return (
        <>
        <img src={Mine} alt="Profile_Picture" className="solopic"/>
        <div className="text-align-center info--content">
        <h2 className="info--fullname">Camille Monis</h2>
        <h4 className="info--position">Frontend Developer</h4>
        <h5 className="info--portfolio"><a href="https://camillemonis.live/" target="_blank" rel="noreferrer">camillemonis.live</a></h5>
        <a href ="mailto: byxllaeheh@gmail.com" className="info--myButton">
            <img src={EmailPicture} alt="email_icon" className="info--email-icon"/>
            Email</a>
        </div>
        </>
    )
}