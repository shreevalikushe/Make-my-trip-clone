import React from 'react'
import { useNavigate } from 'react-router-dom'

export const EmptyCard = () => {
    const navigate = useNavigate()
    return (
        <div className='emptyTripsContainer'>
            <img src="https://imgak.mmtcdn.com/mima/images/Desktop/upcoming-empty.png" alt="" />
            <div className='tripsContent'>
                <p className='tripsTitle'>Looks empty, you've no upcoming bookings</p>
                <p className='tripsSubTitle'>When you book a trip, you will see your itinerary here.</p>
                <div className='tripsBtn' onClick={() => navigate("/")}>
                    <p>PLAN A TRIP</p>
                </div>
            </div>
        </div>
    )
}
