import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from '../InputOption/InputOption'
import ImageIcon from '@material-ui/icons/Image'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import EventNoteIcon from '@material-ui/icons/EventNote'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import Post from '../Post/Post'
import { db } from '../../utils/firebaseDb'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import FlipMove from 'react-flip-move'

const Feed = () => {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
    )
  }, []);

  const sendPost = (e) => {
    e.preventDefault()

    db.collection('posts').add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.profileUrl || "",
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption
                    Icon={ImageIcon}
                    title="Photo"
                    color="#70B5F9"
                />
                <InputOption
                    Icon={SubscriptionsIcon}
                    title="Video"
                    color="#E7A33E"
                />
                <InputOption
                    Icon={EventNoteIcon}
                    title="Event"
                    color="#COCBCD"
                />
                <InputOption
                    Icon={CalendarViewDayIcon}
                    title="Write Article"
                    color="#7FC15E"
                />
            </div>
        </div>
        <FlipMove>
            {posts.map(({id, data: { name, description, message, photoUrl }}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
                
            ))
            }
        </FlipMove>
        
    </div>
  )
}

export default Feed