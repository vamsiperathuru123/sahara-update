import React from 'react';
import './Navlinks.css';
import { Link } from 'react-router-dom';
import ViewMore from "./ViewMore";

    
      

function Navlinks(){
    
    return(
        <div className="navlinks">
            
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <Link to='/Home'>
                        Home
                    </Link>
                    <button className='V_button' pathname="today deals" onClick={() => {window.location.href="https://amzn.to/3Hjq6GZ"}} target="_blank" >
                        Todays Deals
                    </button>
                    <Link  to='/MObiles'>
                        Mobiles
                    </Link>
                    <Link to='/Laptops'>
                       Laptops
                    </Link>
                    <Link to ='/Televisions'>
                       Televisions
                    </Link>
                    <Link to='/Watches'>
                        Watches
                    </Link>
                   
                    <button className='V_button' pathname="popular sales" onClick={() => {window.location.href="https://amzn.to/34dYqWq"}} target="_blank" >
                       Popular Sales
                    </button>
                    
                    <Link to="/Gifts" >
                       Gifts
                    </Link>
                    
                   <ViewMore/>
                    
            

                </div>
                
            </div>
        </div>

    );
}
export default Navlinks;