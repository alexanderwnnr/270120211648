import React from 'react'
import './profileHeader.css'

const profileHeader = () => {
    return (
        <div className="profileHeader">
            <div className="photo"></div>
            
                <div className="profileName">Вероника Ростова</div>
                <div className="profession">Менеджер по продажам</div>
                <div className="profileMessage">
                    <p>Подберу для вас самые лучшие предложения.<pre />Мои услуги абсолютно бесплатны.</p>
                </div>
            
        </div>
    )
}

export default profileHeader