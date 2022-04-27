import React from "react";
import Facebook from "../images/Facebook-Icon.png"
import Github from "../images/GitHub-Icon.png"
import Instagram from "../images/Instagram-Icon.png"
import LinkedIn from "../images/Linkedin-Icon.png"
import Twitter from "../images/Twitter-Icon.png"


export default function SocMed(){
return (
   <footer>
      <div className="footer--content">
         <div className="footer--row">
            <a href="https://twitter.com/camsmns" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter-Icon"/></a>
            <a href="https://www.facebook.com/camsmyy/" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook-Icon"/></a>
            <a href="https://www.instagram.com/camsmy/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram-Icon"/></a>
            <a href="https://github.com/camsmy" target="_blank" rel="noreferrer"><img src={Github} alt="Github-Icon"/></a>
            <a href="https://www.linkedin.com/in/camillemonis/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn-Icon"/></a>
         </div>
      </div>
   </footer>
)
}