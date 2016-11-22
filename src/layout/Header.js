import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <header className='clearfix'>
    <div className='float-left'>
      <a href='/' title='weber-shandwick'>
        <img src='/images/logo.png' alt='app-logo' className='app-logo' />
      </a>
    </div>
    <div className='float-right'>
      <div>
        <button className='btn btn-blue login' target='2'>Log in / Register</button>
      </div>
      <nav>
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
        <Link to='/projects' activeClassName='route--active'>
          Projects
        </Link>
        <Link to='/reports' activeClassName='route--active'>
          Reports
        </Link>
        <Link to='/about' activeClassName='route--active'>
          About
        </Link>
        <Link to='/profile' activeClassName='route--active'>
          Profile
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
