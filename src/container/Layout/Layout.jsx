import React from 'react'
import Direction from '../../components/Direction/Direction'
import Discover from '../../components/Discover/Discover'
import Menu from '../../components/Menu/Menu'
import './Layout.scss'

const Layout = () => {
  return (
    <div className='layout'>
        <div className='content-layout'>
            <Menu/>
            <div className='block-layout'>
              <Discover/>
              <Direction/>
            </div>
        </div>
    </div>
  )
}

export default Layout