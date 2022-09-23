import React from 'react'
import Card from '../Card/Card'
import './Discover.scss'


const Discover = () => {
  return (
    <div className='discover'>
      <div className='discover-title'>
        <span>Discover World</span>
      </div>
      <div className='discover-pages'>
        <a href="">Recommended</a>
        <a href="">Popular Places</a>
        <a href="">Trip’s</a>
      </div>
      <div className='discover-card'>
        <Card/>
      </div>
    </div>
  )
}

export default Discover