import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import linkedInLogo from '../../assets/linkedin-logo.png'

import { menu } from '../../utils/constants'
import HeaderOptions from '../HeaderOptions/HeaderOptions'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'
import { auth } from '../../utils/firebaseDb'
const Header = () => {
  const dispatch = useDispatch()

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut()
  }


  return (
    <div className='header'>
        <div className="header__left">
            <img 
                src={linkedInLogo}
                alt="logo" 
            />
            <div className="header__search">
                <SearchIcon />
                <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className='header__right'>
          {menu.map((item, i) => (
            <HeaderOptions key={`${item} ${i}`} item={item} onClick={logoutApp} />
          ))}
        </div>
    </div>
  )
}

export default Header