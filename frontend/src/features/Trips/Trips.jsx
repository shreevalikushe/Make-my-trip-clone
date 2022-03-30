import React from 'react'
import './Trips.css'
import { Work, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Trips = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='background' />
            <div className='myTripsContainer'>
                <div className='titleContainer'>
                    <div className='upcomingTrips'>
                        <div className='upcomingTripsContent'>
                            <Work style={{ color: '#52f4cd', marginRight: 10, fontSize: 25 }} />
                            <p>UPCOMING</p>
                        </div>
                        <div className="tripsUnderline" />
                    </div>
                    <div className='inputSection'>
                        <input type="text" className='tripsInput' placeholder='Search for a booking' />
                        <div className='search'>
                            <Search style={{ color: '#fff', fontSize: 25 }} />
                        </div>
                    </div>
                </div>
                <div className='tripsContainer'>
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
                </div>
            </div>
        </>
    )
}

