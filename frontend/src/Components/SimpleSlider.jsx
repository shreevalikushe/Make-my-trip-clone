import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import "../CSS/SimpleCaro.css"

export const SimpleSlider = () => {

    const slider = [
        "Text 1", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6"
    ]

    const properties = {
        // duration: 20000,
        transitionDuration: 500,
        canSwipe: false,
        autoPlay: false,
        slidesToShow: 3,
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
                                <div className="each-simple-slide">
                                    <div className='simple-ind-slide'>
                                        <p className="homeTitle">{item}</p>
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
