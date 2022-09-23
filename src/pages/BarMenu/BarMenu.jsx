import React from 'react'
import './BarMenu.scss'
import home from '../../assets/home.svg'
import note from '../../assets/note.svg'
import moon from '../../assets/moon.svg'
import pro from '../../assets/pro.svg'
import microscope from '../../assets/microscope.svg'
import graph from '../../assets/graph.svg'
import sms from '../../assets/sms.svg'
import Settings from '../../assets/Settings.svg'
import logout from '../../assets/logout.svg'



import Dashboard from '../Dashboard/Dashboard'



const BarMenu = () => {
  return (
    <div className='barMenu'>
        <div className='menuBar-content'>
            <div className='menu-home'>
                <img src={home} alt="" />
            </div>
            <Dashboard/>
        </div>

        <div className='menu-bar'>
            <div>
                <a className='bar' href="">
                    <img src={note} alt="" />
                    <span>Note’s</span>
                </a>
            </div>
            <div>
                <a className='bar' href="">
                    <img src={moon} alt="" />
                    <span>Theme</span>
                </a>
            </div>
            <div>
                <a className='bar' href="">
                    <img src={pro} alt="" />
                    <span>Account</span>
                </a>
            </div>
            <div>
                <a className='bar' href="">
                    <img src={microscope} alt="" />
                    <span>Explore</span>
                </a>
            </div>
            <div>
                <a className='bar' href="">
                    <img src={graph} alt="" />
                    <span>Graph</span>
                </a>
            </div>
            <div>
                <a className='bar' href="">
                    <img src={sms} alt="" />
                    <span>Messages</span>
                </a>
            </div>
            <div>
                <a className='bar' href="">
                    <img src={Settings} alt="" />
                    <span>Setting</span>
                </a>
            </div>
        </div>
        <div className='menu-bar footer-menu'>
            <div className='menu-footer'>
                <img src={logout} alt="" />
                <span>Sign Out</span>
            </div>
        </div>
    </div>
  )
}

export default BarMenu