import React from "react";

import './Video.css';
import saharahomevideo from "./videos/saharahomevideo.mp4";





function Video(){
    
  
    return(
       <div > 
        <div className="video"   >
               <video  className="video_n" muted autoPlay playsInline loop controls  preload="auto" >
                  <source type="video/mp4" src={saharahomevideo} />
                </video>
  
       </div>
       
       </div>
                
    );
}



export default Video;