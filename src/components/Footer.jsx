import React from "react";
import "../styles/Footer.css"; 


let socialInformations = [
    {
        name: "GitHub",
        url: "https://github.com/thisal-d",
        icon: "/icons/social/github.png"
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/users/17652621/thisal",
        icon: "/icons/social/stack-overflow.png"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thisal-dilmith",
        icon: "/icons/social/linkedin.png"
    },
    {
        name: "FaceBook",
        url: "https://www.facebook.com/share/1DzcupqZCB/",
        icon: "/icons/social/facebook.png"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/thisal.rapa/  ",
        icon: "/icons/social/instagram.png"
    },
    
];

const Footer = () => (
    <footer>
        <section class="footer-head">
            <div>
                <p className="footer-title">
                    Who Am I
                </p>
            
                <div className="footer-main-container">
                    <div><p className="footer-social-title"> Wanna Know Who Am I ?</p></div>
                    <div class="footer-social-links-container">
                        {
                            socialInformations.map(
                                (socialInformation, index) => (
                                    <div key={index} className="footer-social-link-container">
                                        <a href={socialInformation.url} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                            <img src={socialInformation.icon} alt={socialInformation.name} className="footer-social-icon" />
                                            <p className="footer-social-name">{socialInformation.name}</p>
                                        </a>
                                    </div>
                                ) 
                            )
                        }
                    </div>

                    <div>
                        <img src="/images/profile.jpg" alt="Profile-Photo" className="footer-profile-image" />
                    </div>
                </div>
            </div>
        </section>
        <p className="footer-copyright-text">
                &copy; {new Date().getFullYear()} Thisal Dilmith • Who Am I. All rights reserved.
        </p>
    </footer>
);

export default Footer;