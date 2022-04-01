import React from 'react'
import style_c from "./Card.module.css"
import mtripicon from "../images/mtripicon.jpg"
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoIosCheckmark } from 'react-icons/io';


const Card = () => {
  return (
    <>
       <div>

        <div className={style_c.container}>

              {/* top */}
              
              <div className={style_c.leftdiv}>

                <div className={style_c.bigimg}>
                <img src="https://r1imghtlak.mmtcdn.com/08c447de47af11ec90c60a58a9feac02.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,24&output-format=webp" alt="not found" />
                </div>

                <div className={style_c.smallimg}>
                   <img src="https://r1imghtlak.mmtcdn.com/bc3c4124802911ecab600a58a9feac02.jpg?&output-quality=75&downsize=583:388&output-format=webp" alt="not found" />
                   <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201908281743043183-f6b4184a690f11ebbc890242ac110004.jpg?&output-quality=75&downsize=583:388&output-format=webp" alt="not found" />
                   <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201908281743043183-e760a444692311ebb4870242ac110003.jpg?&output-quality=75&downsize=583:388&output-format=webp" alt="not found" />
                   <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201908281743043183-f8902bf4692311eba0370242ac110003.jpg?&output-quality=75&downsize=583:388&output-format=webp" alt="not found" />

                </div>
              

                   
              </div>

          {/* middle */}
              <div className={style_c.middlediv}>

                  
                 <div className={style_c.firstdiv}>
                         
                         <h2>Artist Cottage  </h2>

                         <div>
                         <div className={style_c.ratingdiv}>
                            
                            <img src={mtripicon} alt="not found" />
                             
                             <p> <b>4.3</b>/5 (Very Good) </p>

                         </div>

                          <p className={style_c.p_tagrating}> <b>6</b>  RATINGS</p>


                         </div>
                       
                 </div>

                  <span className={style_c.place_name}>Morjim</span>  

                   <span className={style_c.couple_friendly}>Couple Friendly</span>

                     <div className={style_c.checkdiv}>
                     <IoIosCheckmark className={style_c.check}/>
                     <span className={style_c.breakfast}>   Breakfast Included</span> 
                     </div>
                     

                  
              </div>

       {/* last div */}
              <div className={style_c.rightdiv}>

                     <div>
                    
                     </div>
                    <div className={style_c.cost}>

                    <p className={style_c.cutting_cost}> ₹ 326</p>

                    <span className={style_c.actuall_cost}> ₹ 258</span>

                    <p className={style_c.taxes_cost}> + 17 taxes & fees</p>

                    <p className={style_c.romm_cost}>Per Night for 2 Rooms</p>

                  </div>

              </div>

             
           

        </div>

        <div className={style_c.discount_container}>
             
             <span className={style_c.infoicon}  > <AiOutlineInfoCircle/> </span>

             <span className={style_c.discount_title}>Discount of INR 100 pre-applied on your 1st Homestay booking</span>
         </div>

      </div>

    </>
  )
}

export default Card