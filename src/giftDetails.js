import React from "react";


function giftDetails(){
    return(
         <div>
             <form>
                 <div>
                  <label>name</label>
                  <input type="text" name="name" value={name} onChange={handleChange} />
                 </div>
             </form>
         </div>
    );

}

export default giftDetails;