import React, { useContext } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import "../CSS/SimpleCaro.css"
import { ListenerContext } from '../Contexts/ListenerProvider';

export const SimpleSlider = () => {

    const slider = [
        {
            id: 1,
            image: 'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png',
            content: "Vande Bharat helpline : Call 0124-4628747 for international flight booking!"
        },
        {
            id: 2,
            image: 'https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png',
            content: "We are now available in हिंदी"
        },
        {
            id: 3,
            image: 'https://promos.makemytrip.com/Growth/Images/B2C/2x/ic_flight_covid_info_dt.png',
            content: "Flight booking impacted due to COVID-19?"
        },
        {
            id: 4,
            image: 'https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png',
            content: "Booking an international flight?"
        },
        {
            id: 5,
            image: 'https://promos.makemytrip.com/Growth/Images/B2C/2x/ic_flight_covid_info_dt.png',
            content: "Check international destinations open for Indians here, with their guidelines"
        }
    ]

    const { width } = useContext(ListenerContext);

    const properties = {
        // duration: 20000,
        transitionDuration: 500,
        canSwipe: false,
        autoPlay: false,
        slidesToShow: width > 1024 ? 3 : width < 575 ? 1 : 2,
        slidesToScroll: 1,
        prevArrow: <div className='simple-left-arrow arrows'>
            <NavigateBefore style={{ color: '#008cff', fontSize: 30 }} />
        </div>,
        nextArrow: <div className='simple-right-arrow arrows'>
            <NavigateNext style={{ color: '#008cff', fontSize: 30 }} />
        </div>
    }

    return (
        <div className='homeContainer'>
            <div className='simpleSliderContainer'>
                <Slide {...properties}>
                    {
                        slider.map((item) => {
                            return (
                                <div className="each-simple-slide" key={item.id}>
                                    <div className='simple-ind-slide'>
                                        <img src={item.image} alt="" />
                                        <p className="simpleCardContent">{item.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slide>
            </div>
        </div>
    )
}
