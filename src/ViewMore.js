import React,{useState} from "react";

import "./Navlinks.css";



function ViewMore(){
    const[show,setShow]=useState(false)
    const[show1,setShow1]=useState(false)
    const[show2,setShow2]=useState(true)
    const[show3,setShow3]=useState(false)
    const[show4,setShow4]=useState(false)
    const[show5,setShow5]=useState(false)
    const[show6,setShow6]=useState(false)
    const[show7,setShow7]=useState(false)
    const[show8,setShow8]=useState(false)
    const[show9,setShow9]=useState(false)
    return(
      <div>
         
        <div className="navlinks_n">
            
            <div className="navlinks__outer_n">
                <div className="navlinks__inner_n">
                   {show?<button className="V_button_c" onClick={()=>setShow1(!show1)}>Accessories</button>:null}
                        {show1?<button className='V_button_h' pathname="men" onClick={() => {window.location.href="https://amzn.to/3BPHJgh"}} target="_blank" >for Men</button>:null} 
                        {show1?<button className='V_button_h' pathname="women" onClick={() => {window.location.href="https://amzn.to/3LW10l7"}} target="_blank" >for Women</button>:null}
                        {show1?<button className='V_button_h' pathname="mobiles" onClick={() => {window.location.href="https://amzn.to/35ogCwM"}} target="_blank" >for Mobiles</button>:null}
                        {show1?<button className='V_button_h' pathname="laptops" onClick={() => {window.location.href="https://amzn.to/3sgISdO"}} target="_blank" >for Laptops</button>:null}
                        {show1?<button className='V_button_h' pathname="tv's" onClick={() => {window.location.href="https://amzn.to/3ssdCZz"}} target="_blank" >for TV's</button>:null}
                        {show1?<button className='V_button_h' pathname="cycles" onClick={() => {window.location.href="https://amzn.to/3vfiz9A"}} target="_blank" >for Cycles</button>:null}
                        {show1?<button className='V_button_h' pathname="bikes" onClick={() => {window.location.href="https://amzn.to/3IjeqFt"}} target="_blank" >for Bikes</button>:null}
                        {show1?<button className='V_button_h' pathname="cars" onClick={() => {window.location.href="https://amzn.to/35xNHqk"}} target="_blank" >for Cars</button>:null}


                   {show?<button className='V_button' pathname="pharmacy" onClick={() => {window.location.href="https://amzn.to/3Hyif8J"}} target="_blank">Amazon Pharmacy</button>:null}    
                   {show?<button className='V_button' pathname="appliances" onClick={() => {window.location.href="https://amzn.to/3Ho0OHE"}} target="_blank">Appliances for Home</button>:null}
                   {show?<button className='V_button' pathname="appa" onClick={() => {window.location.href="https://amzn.to/3t9dHjN"}} target="_blank">Apps & Games</button>:null}
                   {show?<button className='V_button' pathname="alexa" onClick={() => {window.location.href="https://amzn.to/3IoqS6K"}} target="_blank">Alexa Skills</button>:null}
                   {show?<button className='V_button' pathname="devices" onClick={() => {window.location.href="https://amzn.to/3tafjKc"}} target="_blank">Amazon Devices</button>:null}
                   {show?<button className='V_button' pathname="books" onClick={() => {window.location.href="https://amzn.to/353GJJN"}} target="_blank">Books</button>:null}
                   {show?<button className='V_button' pathname="beauty" onClick={() => {window.location.href="https://amzn.to/3BNYdWc"}} target="_blank">Beauty & Personal Care</button>:null}
                   {show?<button className='V_button' pathname="baby" onClick={() => {window.location.href="https://amzn.to/3M3HLpy"}} target="_blank">Baby</button>:null}
                  
                  
                   {show?<button className='V_button_c' onClick={()=>setShow7(!show7)} >Clothing</button>:null}
                             {show7?<button className='V_button_h' pathname="baby" onClick={() => {window.location.href="https://amzn.to/35hhrrH"}} target="_blank">for Women</button>:null}
                             {show7?<button className='V_button_h' pathname="baby" onClick={() => {window.location.href="https://amzn.to/3syPg00"}} target="_blank">for Men</button>:null}
                             {show7?<button className='V_button_h' pathname="baby" onClick={() => {window.location.href="https://amzn.to/3M3HLpy"}} target="_blank">for kids</button>:null}
                        
                  
                   {show?<button className='V_button' pathname="cameras" onClick={() => {window.location.href="https://amzn.to/35q9KPu"}} target="_blank">Cameras</button>:null}
                   
                   {show?<button className='V_button' pathname="deals" onClick={() => {window.location.href="https://amzn.to/3IhSudM"}} target="_blank">Deals</button>:null}
                   {show?<button className='V_button' pathname="electronis" onClick={() => {window.location.href="https://amzn.to/3vigtWt"}} target="_blank">Electronics</button>:null}
                   {show?<button className='V_button' pathname="fashion" onClick={() => {window.location.href="https://amzn.to/3hfnmj5"}} target="_blank">Fashion</button>:null}
                   {show?<button className='V_button' pathname="furniture" onClick={() => {window.location.href="https://amzn.to/3sn1YPA"}} target="_blank">Furniture</button>:null}
                  
                   {show?<button className="V_button_c" onClick={()=>setShow6(!show6)}>FootWear</button>:null}
                       {show6?<button className='V_button_h' pathname="cars" onClick={() => {window.location.href="https://amzn.to/3sypyZr"}} target="_blank" >for Men</button>:null}
                       {show6?<button className='V_button_h' pathname="cars" onClick={() => {window.location.href="https://amzn.to/3tmpYBE"}} target="_blank" >for Women</button>:null}           
                       {show6?<button className='V_button_h' pathname="cars" onClick={() => {window.location.href="https://amzn.to/3HFTE1r"}} target="_blank" >for kids</button>:null}
   
                   {show?<button className='V_button' pathname="groceries" onClick={() => {window.location.href="https://amzn.to/35t0mKP"}} target="_blank">Groceries</button>:null}
                   {show?<button className='V_button' pathname="garden" onClick={() => {window.location.href="https://amzn.to/3IpkGeN"}} target="_blank">Garden</button>:null}
                   {show?<button className='V_button' pathname="gourmet foods" onClick={() => {window.location.href="https://amzn.to/3JYP6Vt"}} target="_blank">Gourmet Foods</button>:null}
                   
                   {show4?<button className="V_button_1" onClick={()=>setShow(false)&setShow1(false)&setShow2(true)&setShow4(false)&setShow6(false)&setShow7(false)}>View less</button>:null}
                  {show4?<button className="V_button" onClick={()=>setShow3(true)&setShow4(false)&setShow5(true)}>ViewMore</button>:null}
                   
                   {show3?<button className='V_button' pathname="home" onClick={() => {window.location.href="https://amzn.to/3LZ7UWH"}} target="_blank">Home & Kitchen</button>:null}
                           
                        {show3?<button className="V_button_c" onClick={()=>setShow8(!show8)}>Hoodies</button>:null}
                           {show8?<button className='V_button_h' pathname="home" onClick={() => {window.location.href="https://amzn.to/3hz7eJs"}} target="_blank">for men</button>:null} 
                           {show8?<button className='V_button_h' pathname="home" onClick={() => {window.location.href="https://amzn.to/3McYgQi"}} target="_blank">for women</button>:null}
                           {show8?<button className='V_button_h' pathname="home" onClick={() => {window.location.href="https://amzn.to/346TD9j"}} target="_blank">for kids</button>:null}

                   {show3?<button className='V_button' pathname="home" onClick={() => {window.location.href="https://amzn.to/3hundZt"}} target="_blank">Headphones & Speakers</button>:null}
                   {show3?<button className='V_button' pathname="home" onClick={() => {window.location.href="https://amzn.to/36VQoma"}} target="_blank">Hometheatres</button>:null}
                   {show3?<button className='V_button' pathname="tools" onClick={() => {window.location.href="https://amzn.to/3vhRm6g"}} target="_blank">Home Tools</button>:null}
                   {show3?<button className='V_button' pathname="personal care" onClick={() => {window.location.href="https://amzn.to/3verfNH"}} target="_blank">Health,Houdehold & Personal Care</button>:null}
                   {show3?<button className='V_button' pathname="handbags" onClick={() => {window.location.href="https://amzn.to/3vjJJft"}} target="_blank">Handbags</button>:null}
                   {show3?<button className='V_button' pathname="jewellery" onClick={() => {window.location.href="https://amzn.to/3tc1afx"}} target="_blank">Jewellery</button>:null}
                   {show3?<button className='V_button' pathname="luxury beauty" onClick={() => {window.location.href="https://amzn.to/35aBY0X"}} target="_blank">Luxury Beauty</button>:null}
                   {show3?<button className='V_button' pathname="bags" onClick={() => {window.location.href="https://amzn.to/35aBY0X"}} target="_blank">Luggage Bags</button>:null}
                   {show3?<button className='V_button' pathname="musical instruments" onClick={() => {window.location.href="https://amzn.to/3BVazfh"}} target="_blank">Musical Instruments</button>:null}
                   {show3?<button className='V_button' pathname="office products" onClick={() => {window.location.href="https://amzn.to/3IoKtUj"}} target="_blank">Office Product</button>:null}
                   {show3?<button className='V_button' pathname="pet supplies" onClick={() => {window.location.href="https://amzn.to/3Hfc5tO"}} target="_blank">Pet Supplies</button>:null}
                   
                   
                   {show3?<button className='V_button_c' onClick={()=>setShow9(!show9)} >Sarees</button>:null}
                            {show9?<button className='V_button_h' pathname="pet supplies" onClick={() => {window.location.href="https://amzn.to/3Kevpt1"}} target="_blank">Cotton Sarees</button>:null}
                            {show9?<button className='V_button_h' pathname="pet supplies" onClick={() => {window.location.href="https://amzn.to/3hAamVF"}} target="_blank">Silk Sarees</button>:null}
                            {show9?<button className='V_button_h' pathname="pet supplies" onClick={() => {window.location.href="https://amzn.to/3Mxfs3g"}} target="_blank">KanchiPattu Sarees</button>:null}
                            {show9?<button className='V_button_h' pathname="pet supplies" onClick={() => {window.location.href="https://amzn.to/3hFXs8B"}} target="_blank">Casual Sarees</button>:null}
                   
                   {show3?<button className='V_button' pathname="shoes" onClick={() => {window.location.href="https://amzn.to/3MeomSV"}} target="_blank">Shoes</button>:null}
                   {show3?<button className='V_button' pathname="scientific" onClick={() => {window.location.href="https://amzn.to/3HsqL9e"}} target="_blank">Scientific</button>:null}
                   {show3?<button className='V_button' pathname="softwares" onClick={() => {window.location.href="https://amzn.to/3he7ptL"}} target="_blank">Softwares</button>:null} 
                   {show3?<button className='V_button' pathname="sports" onClick={() => {window.location.href="https://amzn.to/3JSQRDR"}} target="_blank">Sports</button>:null}
                   {show3?<button className='V_button' pathname="toys" onClick={() => {window.location.href="https://amzn.to/3slj0xn"}} target="_blank">RC Toy Cars</button>:null}



                   {show5?<button className="V_button_1" onClick={()=>setShow3(false)&setShow5(false)&setShow4(true)&setShow8(false)&setShow9(false)}>View less</button>:null}
                  {show2?<button className="V_button" onClick={()=>setShow(true)&setShow2(false)&setShow4(true)&setShow5(false)}>ViewMore</button>:null}
                  
                </div>
            </div>
        </div>
         
       
    
    </div>
    );
}
export default ViewMore;