import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Kira from '../assets/kie.jpg'

export const menu = [
    {
        name: 'Home',
        icon: <HomeIcon />
    },
    {
        name: 'My Network',
        icon: <SupervisorAccountIcon />
    },
    {
        name: 'Jobs',
        icon: <BusinessCenterIcon />
    },
    {
        name: 'Messaging',
        icon: <ChatIcon />
    },
    {
        name: 'Notifications',
        icon: <NotificationsIcon />
    },
    {
        name: 'Me',
        avatar: <Kira />
    },
]

