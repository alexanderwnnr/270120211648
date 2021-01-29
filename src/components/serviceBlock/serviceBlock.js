import React from 'react'
import './serviceBlock.css'

const ServiceBlock = () => {
    return (
        <div className="serviceBlock">
            <div className="header">Услуг</div>
            <div className="container">
                    <div className='booking'>
                        <div className="bookingProgressBar"></div>
                        <span>Ручное бронирование</span>
                    </div>
                    <div className='tour'>
                        <div className="tourProgressBar"></div>
                        <span>Пакетные туры</span>
                    </div>
                    <div className='hotels'>
                        <div className="hotelsProgressBar"></div>
                        <span>Отели</span>
                    </div>
                    <div className="bookingStat">11</div>
                    <div className="tourStat">3</div>
                    <div className="hotelsStat">1</div>
            </div>
            <div className="total">Всего</div>
            <div className="totalNum">15</div>
        </div>
    )
}
export default ServiceBlock