import React from 'react'
import './profileHeader.css'

const profileHeader = () => {
    return (
        <div className="profileHeader">
            <img src="/images/photo.png" className="photo" alt="profile"></img>
            
                <div className="profileName">Вероника Ростова</div>
                <div className="profession">Менеджер по продажам</div>
                <div className="profileMessage">
                    <p>Подберу для вас самые лучшие предложения.<br />Мои услуги абсолютно бесплатны.</p>
                </div>
            
        </div>
    )
}

export default profileHeader