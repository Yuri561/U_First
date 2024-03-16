import React from 'react';
import './value.css';
import data from '../../utils/accordion.jsx';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState

} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md';

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left side  */}
                <div className="flexCenter v-left">
                    <div className="image-container">
                        <img className='value-img'src="value.jpg" alt="value" />
                    </div>
                </div>
                {/* Right side */}
                <div className="flexColStart v-right" id='value'>
                   <span className='orangeText'>Our Value</span>
                   <span className='primaryText'>What We Offer</span>
                   <span className='secondaryText'>
                    At U-First your needs is our needs
                    <br />
                    We offer a wide range of services to meet your needs
                    <br />
                    At U-First u-Matter!
                   </span>

                   <Accordion 
                   className='accordion'
                   allowZeroExpanded
                   allowMultipleExpanded={false}
                   preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                
                                return (
                                    <AccordionItem
                                    className='accordion-item'
                                    key={i}
                                    uuid={i}
                                    >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='btn-test flexCenter accordionButton'>
                                       
                                        
                                           <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText heading">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                                </div> 
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                    </AccordionItem>
                                )

                            })
                                
                        }


                    </Accordion>


                </div>


            </div>
    
        </section>
    );
};

export default Value;