import React from "react";
import "../styles/Footer.css"; 


let socialInformations = [
    {
        name: "GitHub",
        url: "https://github.com/thisal-d",
        icon: "/icons/github.png"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thisal-dilmith",
        icon: "/icons/linkedin.png"
    },
    {
        name: "FaceBook",
        url: "https://www.facebook.com/share/1DzcupqZCB/",
        icon: "/icons/facebook.png"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/thisal.rapa/",
        icon: "/icons/instagram.png"
    }
];

const Footer = () => (
    <footer>
        <div>
            <p className="title">
                Who Am I
            </p>
           
            <div className="main-container">
                <div><p className="social-title"> Wanna Know Who Am I ?</p></div>
                <div>
                    {
                        socialInformations.map(
                            (socialInformation, index) => (
                                <div key={index} className="social-link-container">
                                    <a href={socialInformation.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <img src={socialInformation.icon} alt={socialInformation.name} className="social-icon" />
                                        <p className="social-name">{socialInformation.name}</p>
                                    </a>
                                </div>
                            ) 
                        )
                    }
                </div>

                <div>
                    <img src="/images/profile.jpg" alt="Profile-Photo" className="profile-image" />
                </div>
            </div>
        </div>
         <p className="copyright-text">
                &copy; {new Date().getFullYear()} Thisal Dilmith • Who Am I. All rights reserved.
        </p>
    </footer>
);

export default Footer;