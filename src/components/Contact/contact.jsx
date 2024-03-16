import React from "react"; 
import "./contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";
import { MdSos } from "react-icons/md";

const Contact = () => {
    return (
      <section className="c-wrapper">
        <div className="div paddings innerWidth flexCenter c-container" id="contact">
            <div className="c-left flexColStart">
                <span className="orangeText">Our Contact</span>
                <span className="primaryText">Easy to Reach Us</span>
                <span className="secondaryText">Providing you with the best services, at U-First, U-Matter!</span>
                {/* For our mode boxes we will use 2 row */}
                <div className="flexCenter contactModes">
                    {/* First Row */}
                    <div className="flexStart row">

                        {/* First mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">910-586-4585</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>


                        {/* second mode */}

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">910-586-4585</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                        
                        {/* Second Row */}
                        <div className="flexStart row">

                        {/* Third mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaVideo size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">910-586-4585</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>


                        {/* Fourth mode */}

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdSos size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Hotline</span>
                                    <span className="secondaryText">910-586-4585</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Hire Now</div>
                        </div>
                    </div>
                </div>









            </div>
            <div className = "flexCenter c-right">
                <div className="image-container">
                    <img className="img-contact" src="image.png" alt="contact" />

                </div>
            </div>
        </div>
      </section>
    )
}


export default Contact;