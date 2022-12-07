import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import background from '../../assets/background.jpg'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

const Sidebar = () => {

  const user = useSelector(selectUser)

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <div className="sidebar__hash">#</div>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src={background} alt='' />
            <Avatar className='sidebar__avatar' src={user.profileUrl}>{user.email[0]}</Avatar>
            <div className='sidebar__profile'>
              <h2>{user.displayName}</h2>
              <h4>{user.email}</h4> 
            </div>

        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who Viewed You</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
              <p>Views on post</p>
              <p className='sidebar__statNumber'>2,443</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('nextJs')}
            {recentItem('frontendDeveloper')}
            {recentItem('graphicDesigner')}
            {recentItem('coding')}
        </div>
    </div>
  )
}

export default Sidebar