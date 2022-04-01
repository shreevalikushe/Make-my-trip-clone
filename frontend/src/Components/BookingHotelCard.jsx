import React from 'react'
import '../features/Trips/Trips.css'
import moment from 'moment';

export const BookingHotelCard = ({ item }) => {
    return (
        <div className='bookedHotelCard'>
            <div className='bookedImageSection'>
                <img src={item.cover} alt="" />
            </div>
            <div className='bookedContentSection'>
                <div>
                    <p className="bookedHotelTitle">{item.name}</p>
                    <p className="bookedHotelSubTitle">{item.location}, {item.country}</p>
                    <div className="divider" />
                    <i class="uil uil-rupee-sign bookedHotelOffers">
                        {item.price}
                    </i>
                    <p className='bookedDate'>Booked At:
                        <span className='bookedDateSpan'>{" " + moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
