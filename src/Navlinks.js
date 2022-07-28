import React from 'react';
import './Navlinks.css';

import ViewMore from "./ViewMore";

    
      

function Navlinks(){
    
    return(
        <div className="navlinks">
            
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <a href='/'>
                        Home
                    </a>
                    <button className='V_button' pathname="today deals" onClick={() => {window.location.href="https://amzn.to/3Hjq6GZ"}} target="_blank" >
                        Todays Deals
                    </button>
                    <a href='/MObiles'>
                        Mobiles
                    </a>
                    <a href='/Laptops'>
                       Laptops
                    </a>
                    <a href='/Televisions'>
                       Televisions
                    </a>
                    <a href='/Watches'>
                        Watches
                    </a>
                   
                    <button className='V_button' pathname="popular sales" onClick={() => {window.location.href="https://amzn.to/34dYqWq"}} target="_blank" >
                       Popular Sales
                    </button>
                    
                    <a href="/Gifts" >
                       Gifts
                    </a>
                    
                   <ViewMore/>
                    
            

                </div>
                
            </div>
        </div>

    );
}
export default Navlinks;