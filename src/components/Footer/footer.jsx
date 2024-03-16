import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* Left Side */}

                <div className="flexColStart f-left">
                    <img src="image.png" alt="Logo" width={120} />
                    <span className="secondaryText">
                        Our mission is to provide the best<br/> 
                        service to our customers and to make sure<br/>
                        that they are satisfied with our services.
                    </span>
                </div>
                    
                    {/* Right Side */}
                    <div className="flexColStart f-right">
                        <span className="orangeText primaryText">Quick Links</span>
                        <div className="flexCenter f-menu">
                        <span className="secondaryText">Home</span>
                        <span className="secondaryText">About</span>
                        <span className="secondaryText">Services</span>
                        <span className="secondaryText">Contact</span>

                        </div>
                    </div>
            </div>
        </section>
    );
}


export default Footer;