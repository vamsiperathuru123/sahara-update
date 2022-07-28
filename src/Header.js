import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import saharalogo from "./images/saharalogo.jpeg";





function Header(){
 

    
    return(
     <div>
        <nav className="header">
            <img className="header__logo"  alt="logo" src={saharalogo}/>
            <SearchBar/>
            
            
                {/*<div className="header__nav">
                            <Link to="/" className="header__link">
                                <div className="header__option">
                                    <span className="header__optionLineOne">Hello, User</span>
                                    <div className='signin_out'>
                                    <Link to="/login"  className="header__optionLineTwo">Sign in</Link>
                                    <Link to="/login"  className="header__optionLineTwo">Sign out</Link>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/" className="header__link"> 
                                <div className="header__option">
                                    <span className="header__optionLineOne">Returns</span>
                                    <span className="header__optionLineTwo">& orders</span>
                                </div>
                            </Link> 
                 </div>
                 */}
                   
                
            
            {/* <Link to="/checkout" className="header__link"> 
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__productCount">{basket?.length}</span>

                </div>
             </Link> */}
        
        </nav>
        {/*<nav className="header">
        <div className="header__nav">
                            <Link to="/" className="header__link">
                                <div className="header__option">
                                    <span className="header__optionLineOne">Hello, User</span>
                                    <div className='signin_out'>
                                    <Link to="/login"  className="header__optionLineTwo">Sign in</Link>
                                    <Link to="/login"  className="header__optionLineTwo">Sign out</Link>
                                    </div>
                                </div>
                            </Link>
                            
                 </div>
            
            </nav>*/}
    </div>
        
     
    );
}
export default Header;