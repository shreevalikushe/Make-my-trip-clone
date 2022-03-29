import React from 'react'
import { SimpleSlider } from '../../Components/SimpleSlider'
import { CarousalUI } from '../../Components/CarousalUI'
import { FlightsCard } from '../../Components/FlightsCard'

export const Home = () => {
    return (
        <div className='container'>
            <SimpleSlider />
            <div style={{ marginTop: 50 }}>
                <CarousalUI />
            </div>
            <div style={{ marginTop: 50, paddingLeft: 100, paddingRight: 100 }}>
                <img src="https://mmt.servedbyadbutler.com/getad.img/;libID=3405582" style={{ width: "100%", height: "80%" }} />
            </div>
            <div style={{ marginTop: 50 }}>
                <FlightsCard />
            </div>
        </div>
    )
}
