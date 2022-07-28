import React from "react";
import Marquee from "react-fast-marquee";
import './ScrollingText.css';

function ScrollingText(){
    return(
        <div className="scrolling__text">
            <Marquee speed='100' direction='right'>
                <strong className="scr1">SAHARA - THE OCEAN OF GADGETS</strong>
                

            </Marquee>
        </div>
        
        

    );
}
export default ScrollingText;