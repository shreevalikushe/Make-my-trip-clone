import React from 'react'

import styleH from "./HeaderP.module.css"
import { FiChevronRight } from "react-icons/fi";

const HeaderP = () => {
  return (
   <>
     <div className={styleH.container}>
           
           {/* top */}

           <div className={styleH.topdiv}>

                 <p> <span>Home</span> <FiChevronRight className={styleH.gretericon}/>  Hotels and more in Goa  </p>
           </div>
         
         {/* middle */}
         <div>

         </div>

{/* botom */}
            <div>


            </div>

     </div> 


      
   </>
  )
}

export default HeaderP