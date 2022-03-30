import React from 'react'
import styles from "./Hotel.module.css";

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
            </div>
        </div>
    )
}
