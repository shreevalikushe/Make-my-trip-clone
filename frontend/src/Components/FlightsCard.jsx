import React from 'react'
import "../CSS/FlightsCard.css"

export const FlightsCard = () => {
    return (
        <div className='mainContainer'>
            <div className='row'>
                <div className='indContainer'>
                    <img src="http://promos.makemytrip.com/images/50x50-Other-23052019.png" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Chennai Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
                <div className='indContainer'>
                    <img src="https://promos.makemytrip.com/store/GoaDT.JPG" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Goa Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
                <div className='indContainer'>
                    <img src="https://promos.makemytrip.com/store/MumbaiDT.JPG" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Mumbai Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='indContainer'>
                    <img src="http://promos.makemytrip.com/images/50x50-Ooty-23052019.png" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Hyderabad Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
                <div className='indContainer'>
                    <img src="https://promos.makemytrip.com/store/DelhiDT.JPG" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Delhi Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
                <div className='indContainer'>
                    <img src="https://promos.makemytrip.com/store/PuneDT.JPG" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Pune Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='indContainer'>
                    <img src="https://promos.makemytrip.com/store/SingaporeDT.JPG" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Kolkata Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
                <div className='indContainer'>
                    <img src="https://promos.makemytrip.com/store/BangaloreDT.JPG" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Bangalore Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
                <div className='indContainer'>
                    <img src="https://promos.makemytrip.com/store/JaipurDT.JPG" alt="" />
                    <div className='indCardContent'>
                        <p className='indCardTitle'>Jaipur Flights</p>
                        <p className='indCardLocation'>Via: <span className='span'>Delhi, Mumbai, Chennai, Ahmedabad</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
