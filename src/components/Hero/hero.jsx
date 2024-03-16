import React from 'react';
import './hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>
                            Unleash
                            <br /> Your Inner
                            <br />
                            Tech @ U-First
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Find a variety of technicians ready to be of service</span>
                        <span className="secondaryText">At U-first You truly Matter</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker className="search-icon" color="var(--blue)" size={25} />
                        <input type="text" style={{ width: "200px" }} /> 
                        <button className="button">Search</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={5000} duration={4} />
                                <span className="plus">+</span><br/>
                                <span className="secondaryText">Faster Service</span>
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={7000} duration={4} />
                                <span className="plus">+</span><br/>
                                <span className="secondaryText">Connected Members</span>
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={500} duration={4} />
                                <span className="plus">+</span><br/>
                                <span className="secondaryText">Reviews</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="hero.jpg" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
