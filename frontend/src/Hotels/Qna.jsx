import React from 'react'

import style_qna from "./Qna.module.css"

const Qna = () => {
  return (
   <>
    
    <div className={style_qna.container}>


     <div className={style_qna.top}>
           
           <div className={style_qna.left}>
                
                <h3> Q. How to book a hotel online with MakeMyTrip?</h3>

              <p>A. Booking a hotel online is easy through MakeMyTrip. All you need to do first is to download our app <br /> on your Android or iOS device or simply use your computer. On the app, tap on the Hotels section on  <br /> the top left corner and enter the details of the city, the area or the hotel. Fill out the check-in and <br /> check-out dates, along with the other details and tap Search. Use the Sort & Filter options so that you <br /> can book one as per your convenience. You can also choose hotels according to user reviews and <br /> ratings. The same follows on our site.</p>

           </div>

           <div className={style_qna.right}>
              
              <h4>Q. How to find the cheapest hotel deals in any city?</h4>

              <p>A. MakeMyTrip, being the best hotel-booking site in the country, offers several discounts on budget <br /> hotels as well. If you are looking for the cheapest hotels with amazing deals on  the app, you can tap on <br /> Sort & Filter option and drag down the Price option from Rs.0 to Rs.500 or from Rs.0 to Rs.1000. <br /> Choose from the various amenities you would need during your stay including access to Wi-Fi, <br />room service and in-house restaurants. The list will first show you the cheapest one on top. You can also <br /> sort by prices from Low to High, scroll down the list and find your preferred ones with great discounts.</p>

           </div>

     </div>

         <div className={style_qna.hr}></div>

     <div className={style_qna.botom}>

          <div className={style_qna.left}>

          <h4>Q. How to find the best hotels near me?</h4>
          <p>A. If you are travelling to a city for the first time and are looking for hotels in the best areas, it is easy <br /> to find them on our website and our app. Let’s say, you are going to Goa and planning to book one near <br /> the most happening beaches. Once you have hit the Search option, you will find a list of all the hotels <br /> in North Goa near the famed beach areas including Baga and Calangute. You can even find out which <br /> of the areas are ideal for couples and families. Similarly, if you are looking for booking hotels in <br /> Mumbai, you can either book ones that are near the city’s major business districts, tourist areas and <br /> transportation hubs.</p>

           </div>
           <div className={style_qna.left}>

           <h4>Q. Where can I find current deals and offers of MakeMyTrip?</h4>
           <p>A. MakeMyTrip offers plenty of deals and offers on luxury and budget hotels in India in all the cities, <br /> on a daily basis. However, these are available for a limited time and they are subject to change the <br /> next day. You can look for these deals while you are about to book the hotel after narrowing down <br /> your choices. On the app, you can check a property that has ‘MMT Exclusive Deal’ button below its <br /> discounted rate. By tapping on it, you would know how many offers are available.</p>
               
           </div>


     </div>
      



    </div>

   </>
  )
}

export default Qna