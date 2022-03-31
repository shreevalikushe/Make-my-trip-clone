import React from 'react'
import styles from "./Hotel.module.css";
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

export const Hotel = () => {
    return (
        <div className={styles.indHotelContainer}>
            <div className={styles.coverImg}>
                <img src="https://r1imghtlak.mmtcdn.com/ce8d200e236d11e88b5b025f77df004f.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=webp&downsize=1400:520&crop=1400:520" alt="" />
                <div className={styles.indHotelDetails}>
                    <div className={styles.indHotelCover}>
                        <img src="https://r1imghtlak.mmtcdn.com/1611e6802dd111e987330242ac110003.jpg?downsize=340:155&crop=340:155" alt="" />
                    </div>
                    <p className={styles.indHotelCardTitle}>Superior Charm City View</p>
                    <div className={styles.indHotelCardDetails}>
                        <div>
                            <p className={styles.indHotelCardAdults}>For 2 Adults</p>
                            <p className={styles.indHotelCardRefund}>Non-Refundable</p>
                            <p className={styles.indHotelCardRoom}>Room Only</p>
                        </div>
                        <div>
                            <p className={styles.indHotelCardDuration}>Per Night</p>
                            <p className={styles.indHotelCardCost}>6,480</p>
                        </div>
                    </div>
                    <div className={styles.indHotelCardBookBtn}>
                        <p>BOOK THIS NOW</p>
                    </div>
                </div>
                <div className={styles.indHotelContent}>
                    <div className={styles.ratingsSection}>
                        <div className={styles.ratingsView}>
                            <div className={styles.ratings}>
                                <p>4.6</p>
                            </div>
                            <p>Rated Excellent</p>
                        </div>
                        <div className={styles.cityView}>
                            <div className={styles.city}>
                                <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/map-bg-new.png" alt="" />
                            </div>
                            <p>Panjim</p>
                        </div>
                    </div>
                    <div className={styles.indHotelImgGallery}>
                        <p>Discover the Best of Luxury</p>
                        <div className={styles.indHotelImages}>
                            <img src="https://r1imghtlak.mmtcdn.com/1611e6802dd111e987330242ac110003.jpg?downsize=340:155&crop=340:155" alt="" />
                            <img src="https://r1imghtlak.mmtcdn.com/1611e6802dd111e987330242ac110003.jpg?downsize=340:155&crop=340:155" alt="" className={styles.indImg} />
                            <img src="https://r1imghtlak.mmtcdn.com/1611e6802dd111e987330242ac110003.jpg?downsize=340:155&crop=340:155" alt="" className={styles.indImg} />
                        </div>
                    </div>
                    <div className={styles.indHotelImgGallery}>
                        <p>Property Highlights</p>
                        <div className={styles.propertyHighlightsChart}>
                            <div className={styles.propertyHighlights}>
                                <CheckCircleOutlineOutlined style={{ color: '#4a4a4a', marginRight: 10, fontSize: 20 }} />
                                <p>300+ guests like you rated their stay Excellent</p>
                            </div>
                            <div className={styles.propertyHighlights}>
                                <CheckCircleOutlineOutlined style={{ color: '#4a4a4a', marginRight: 10, fontSize: 20 }} />
                                <p>Perfect for one-night stay!</p>
                            </div>
                            <div className={styles.propertyHighlights}>
                                <CheckCircleOutlineOutlined style={{ color: '#4a4a4a', marginRight: 10, fontSize: 20 }} />
                                <p>Relax with therapeutic treatments at Jiva Spa</p>
                            </div>
                            <div className={styles.propertyHighlights}>
                                <CheckCircleOutlineOutlined style={{ color: '#4a4a4a', marginRight: 10, fontSize: 20 }} />
                                <p>Awards & Accolades: Best Bar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
