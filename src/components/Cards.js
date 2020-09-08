import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check this Out</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-6.png'
                            text='Rockford Fosgate P1 single loaded enclosure, powered by a JBL GX-A3001 mono amplifier'
                            label='Car Audio'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-4.png'
                            text='All in the details, Thinking of upgrading your wheels?'
                            label='Rotiform'
                            path='/products'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-1.png'
                            text='Our Mk7.5 Golf GTI on @air_lift_performance & cast @rotiform HUR'
                            label='Gallery'
                            path='/services'
                        />
                        <CardItem 
                            src='images/img-2.png'
                            text='Audi A4 on @air_lift_performance & cast @rotiform KPS'
                            label='Gallery'
                            path='/products'
                        />
                        <CardItem 
                            src='images/img-3.png'
                            text='M2 Competition on @air_lift_performance & cast @rotiform OZR⁠'
                            label='Gallery'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>       
        </div>
    )
}

export default Cards
