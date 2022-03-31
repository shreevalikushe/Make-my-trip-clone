import React from 'react'
import '../features/Trips/Trips.css'
import moment from 'moment';

export const BookingFlightCard = ({ item }) => {
    return (
        <div className='bookedFlightCard'>
            <div className='bookedImageSection'>
                <img src="https://promos.makemytrip.com/notification/xhdpi/df-116x116-09092021.jpg" alt="" />
            </div>
            <div className='bookedContentSection'>
                <div>
                    <p className="bookedHotelTitle">{item.name}</p>
                    <p className="bookedHotelSubTitle">{item.departure} - {item.arrival}</p>
                    <p className="bookedHotelSubTitle">{item.departure_time} - {item.arrival_time}</p>
                    <p className='bookedDate'>{item.stops}</p>
                    <div className="divider" />
                    <i class="uil uil-rupee-sign bookedHotelOffers">
                        {item.fare}
                    </i>
                    <p className='bookedDate'>Booked At:
                        <span className='bookedDateSpan'>{" " + moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
