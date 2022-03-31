import React, { useState } from 'react'
import './Trips.css'
import { Work, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Trips = () => {
    const navigate = useNavigate()
    const [select, setSelect] = useState(0);
    const [hotels, setHotels] = useState([]);
    const [flights, setFlights] = useState([]);
    return (
        <>
            <div className='background' />
            <div className='myTripsContainer'>
                <div className='titleContainer'>
                    <div className='upcomingTrips'>
                        <div className='upcomingTripsTabs'>
                            <div>
                                <div className='upcomingTripsContent' onClick={() => setSelect(0)}>
                                    <Work style={{ color: '#52f4cd', marginRight: 10, fontSize: 25 }} />
                                    <p>HOTELS</p>
                                </div>
                                {select === 0 && <div className="tripsUnderline" />}
                            </div>
                            <div className='upcomingTripsSecTab'>
                                <div className='upcomingTripsContent' onClick={() => setSelect(1)}>
                                    <Work style={{ color: '#52f4cd', marginRight: 10, fontSize: 25 }} />
                                    <p>FLIGHTS</p>
                                </div>
                                {select === 1 && <div className="tripsUnderline" />}
                            </div>
                        </div>
                    </div>
                    <div className='inputSection'>
                        <input type="text" className='tripsInput' placeholder='Search for a booking' />
                        <div className='search'>
                            <Search style={{ color: '#fff', fontSize: 25 }} />
                        </div>
                    </div>
                </div>
                <div className='tripsContainer'>
                    {select === 0 ?
                        <>
                            {hotels.length === 0 ?
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
                                :
                                <>
                                    <div className='bookedHotelCard'>
                                        <div className='bookedImageSection'>
                                            <img src="http://promos.makemytrip.com/images/50x50-Other-23052019.png" alt="" />
                                        </div>
                                        <div className='bookedContentSection'>
                                            <div>
                                                <p className="bookedHotelTitle">Radison Blu</p>
                                                <p className="bookedHotelSubTitle">New Delhi, India</p>
                                                <div className="divider" />
                                                <i class="uil uil-rupee-sign bookedHotelOffers">
                                                    6500
                                                </i>
                                                <p className='bookedDate'>Booked At</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bookedHotelCard'>
                                        <div className='bookedImageSection'>
                                            <img src="http://promos.makemytrip.com/images/50x50-Other-23052019.png" alt="" />
                                        </div>
                                        <div className='bookedContentSection'>
                                            <div>
                                                <p className="bookedHotelTitle">Radison Blu</p>
                                                <p className="bookedHotelSubTitle">New Delhi, India</p>
                                                <div className="divider" />
                                                <i class="uil uil-rupee-sign bookedHotelOffers">
                                                    6500
                                                </i>
                                                <p className='bookedDate'>Booked At</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </>
                        :
                        <>
                            {flights.length === 0 ?
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
                                :
                                <div className='bookedHotelCard'>
                                    <div className='bookedImageSection'>
                                        <img src="https://promos.makemytrip.com/notification/xhdpi/df-116x116-09092021.jpg" alt="" />
                                    </div>
                                    <div className='bookedContentSection'>
                                        <div>
                                            <p className="bookedHotelTitle">Indigo</p>
                                            <p className="bookedHotelSubTitle">New Delhi, India - Mumbai, India</p>
                                            <div className="divider" />
                                            <i class="uil uil-rupee-sign bookedHotelOffers">
                                                6500
                                            </i>
                                            <p className='bookedDate'>Booked At</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </>
    )
}

