import React from "react";
import mark from "../images/IMG_1340.jpg"

export default function Profile() {
    return(
        <div className="profile-card">
          <div className="new-profile">
            <img src={mark} alt="" className="image-profile"/>
            <h2>Mark Fenekayas</h2>
            <h3>Full-Stack Developer</h3>
            <h4>MAr Fen Website</h4>
            <btn>Email</btn>
            <btn>LinkedIn</btn>
            <h3>About</h3>
            <p></p>
            <h3>Interests</h3>
            <p></p>
            <footer></footer>
          </div>
        </div>
    )
}