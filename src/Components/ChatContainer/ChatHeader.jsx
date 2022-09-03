import React from 'react'
import "./ChatStyles/ChatHeader.css"
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import auth from "../images/author2.png";
import { Link } from 'react-router-dom';

function ChatHeader() {
    return (
        <div className='chatheaderdiv'>
            <div className='chatprofile'>
                <div className='profileimg'>
                    <img src={auth} alt="user" className='chatuserimg' />
                </div>
                <div className='usernamechat' st>User</div>
                <Link to="/"> <div><IconButton  >
                    <LogoutIcon style={{ color: "white" }} />
                </IconButton></div></Link>
            </div>
        </div>
    )
}

export default ChatHeader