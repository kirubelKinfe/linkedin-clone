import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOptions.css'

import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

const HeaderOptions = ({ item, onClick }) => {
  const user = useSelector(selectUser)

  return (
    <div onClick={item.avatar && onClick} className='headerOption'>
      {item.icon && item.icon}
      {item.avatar && <Avatar className="headerOption__icon" src={user?.profileUrl}/> }
      <h1 className='headerOption__title'>{item.name}</h1>
    </div>

  )
}

export default HeaderOptions