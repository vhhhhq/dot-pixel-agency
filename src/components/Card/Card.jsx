import React from 'react'
import beautiful from '../../assets/beautiful.svg'
import Vector from '../../assets/Vector.svg'
import star from '../../assets/star.svg'
import mountains from '../../assets/mountains.svg'
import desert from '../../assets/desert.svg'
import './Card.scss'



const Card = () => {
  return (
    <div className='card-container'>
        <div className='card-content'>
            <div>
                <img className='img-card' src={beautiful} alt="" />
            </div>
            <div>
                <span>Moonlight Night</span>
            </div>
            <div className='card-block'>
                <img src={Vector} alt="" />
                <span>Canada</span>
                <span className='span-star'>
                    <img src={star} alt="" />
                    4.7
                </span>
            </div>
        </div>
        <div className='card-content'>
            <div>
                <img className='img-card' src={desert} alt="" />
            </div>
            <div>
                <span>Sahara Desert</span>
            </div>
            <div className='card-block'>
                <img src={Vector} alt="" />
                <span>Africa</span>
                <span className='span-star'>
                    <img src={star} alt="" />
                    4.9
                </span>
            </div>
        </div>
        <div className='card-content'>
            <div>
                <img className='img-card' src={mountains} alt="" />
            </div>
            <div>
                <span>Night Camping</span>
            </div>
            <div className='card-block'>
                <img src={Vector} alt="" />
                <span>New York</span>
                <span className='span-star'>
                    <img src={star} alt="" />
                    5.0
                </span>
            </div>
        </div>
    </div>
  )
}

export default Card