import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import "../CSS/CarousalUI.css"

export const CarousalUI = () => {

    const [offers, setOffers] = useState(0)
    const slider0 = [
        "ALL OFFERS 1", "ALL OFFERS 2", "ALL OFFERS 3", "ALL OFFERS 4", "ALL OFFERS 5", "ALL OFFERS 6"
    ]
    const slider1 = [
        "FLIGHTS 1", "FLIGHTS 2", "FLIGHTS 3", "FLIGHTS 4", "FLIGHTS 5", "FLIGHTS 6"
    ]
    const slider2 = [
        "HOTELS 1", "HOTELS 2", "HOTELS 3", "HOTELS 4", "HOTELS 5", "HOTELS 6"
    ]

    const properties = {
        duration: 20000,
        transitionDuration: 500,
        canSwipe: false,
        autoPlay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <div className='left-arrow arrows'>
            <NavigateBefore style={{ color: '#008cff', fontSize: 30 }} />
        </div>,
        nextArrow: <div className='right-arrow arrows'>
            <NavigateNext style={{ color: '#008cff', fontSize: 30 }} />
        </div>
    }

    return (
        <div className='homeContainer'>
            <div className='sliderContainer'>
                <div className='sliderTitle'>
                    <h2>Offers</h2>
                    <div className='sliderLinks'>
                        <p
                            className="indLinks"
                            style={{ borderBottom: offers === 0 ? "3px solid #008cff" : "" }}
                            onClick={() => setOffers(0)}
                        >ALL OFFERS</p>
                        <p
                            className="indLinks"
                            onClick={() => setOffers(1)}
                            style={{ borderBottom: offers === 1 ? "3px solid #008cff" : "" }}
                        >FLIGHTS</p>
                        <p
                            className="indLinks"
                            onClick={() => setOffers(2)}
                            style={{ borderBottom: offers === 2 ? "3px solid #008cff" : "" }}
                        >HOTELS</p>
                    </div>
                </div>
                {offers === 0 ?
                    <Slide {...properties}>
                        {
                            slider0.map((item) => {
                                return (
                                    <div className="each-slide">
                                        <div className='ind-slide'>
                                            <p className="homeTitle">{item}</p>
                                        </div>
                                        <div className='ind-slide'>
                                            <p className="homeTitle">{item}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slide>
                    : offers === 1 ?
                        <Slide {...properties}>
                            {
                                slider1.map((item) => {
                                    return (
                                        <div className="each-slide">
                                            <div className='ind-slide'>
                                                <p className="homeTitle">{item}</p>
                                            </div>
                                            <div className='ind-slide'>
                                                <p className="homeTitle">{item}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slide>
                        : offers === 2 &&
                        <Slide {...properties}>
                            {
                                slider2.map((item) => {
                                    return (
                                        <div className="each-slide">
                                            <div className='ind-slide'>
                                                <p className="homeTitle">{item}</p>
                                            </div>
                                            <div className='ind-slide'>
                                                <p className="homeTitle">{item}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slide>
                }
            </div>
        </div>
    )
}
