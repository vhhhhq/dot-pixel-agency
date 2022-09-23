import React from 'react'
import Logo from '../../assets/logo.svg'
import setting from '../../assets/setting.svg'
import search from '../../assets/search.svg'
import Vector from '../../assets/Vector.svg'
import notification from '../../assets/notification.svg'
import profile from '../../assets/profile.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
        <main className='content-header'>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div className='search-header'>
                <button>
                    <img src={search} alt="" />
                </button>
                <input type="search" name="search" id="search" placeholder='Search for places'/>
            </div>
            <div className='about-header'>
                <button className='button-about'>
                    <img src={setting} alt="" />
                </button>
            </div>
            <div className='location-header'>
                <div className='vector-header'>
                    <img src={Vector} alt="" />
                </div>
                <div>
                    <span>New York/ Dc</span>
                </div>
            </div>
            <div>
                <button className='button-notification'>
                    <img src={notification} alt="" />
                </button>
            </div>
            <div>
                <a href="#">
                    <img src={profile} alt="" />
                </a>
            </div>
        </main>
    </header>
  )
}

export default Header