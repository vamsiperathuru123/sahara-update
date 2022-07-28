import React, { useState } from "react";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';



function SearchBar(){
    const [title,setTitle]=useState(' ');
    const searchUser =(e)=>{
       e.preventDefault()
       window.location.href=`https://www.amazon.in/s?k=${title}&crid=CQXLGAMTB55D&sprefix=laptops%2Caps%2C236&ref=nb_sb_noss_1`
    };


  return(
     <div className="header__search" >
       <form className="header__search" placeholder="search.."  onSubmit={searchUser}>
            <input type="text" placeholder="search.." value={title}     onChange={(e)=>setTitle(e.target.value)}  className="header__searchInput"/>
            <button className="search_button" type="submit" >
            <SearchIcon className="header__searchIcon" type="submit"  >Search</SearchIcon>
            </button>
       </form>    

     </div>

  );   
}
export default SearchBar;