import React from 'react'
import ChatDisplay from './ChatDisplay'
import ChatHeader from './ChatHeader'
import MatchDisplay from './MatchDisplay'
import MessageIcon from '@mui/icons-material/Message';
import "./ChatStyles/ChatContainer.css"
import ForumIcon from '@mui/icons-material/Forum';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';

function ChatContainer() {
    return (
        <div className='chat-container'>
            <div className='insideChatcont'>
                <ChatHeader />
            </div>
            <div className='optionbtndiv'>
                <button className='optbtn' ><JoinLeftIcon className='muiicon' /> Matches</button>
                <button className='optbtn' ><ForumIcon className='muiicon' /> Chat</button>
            </div>
            <div className='viewarea'>
                <div><MatchDisplay /></div>
                <div> <ChatDisplay /></div>
            </div>
        </div>
    )
}

export default ChatContainer