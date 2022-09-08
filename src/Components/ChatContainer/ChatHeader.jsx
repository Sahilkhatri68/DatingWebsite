import React, { useEffect, useState } from 'react'
import "./ChatStyles/ChatHeader.css"
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import auth from "../images/author2.png";
import { Link } from 'react-router-dom';
import axios from 'axios';




function ChatHeader() {
    const [users, setUsers] = useState([])
    async function Getuser() {
        try {
            const resp = await axios.get("http://localhost:4000/api/profile", {
                withCredentials: true,
            });
            setUsers(resp.data);
            console.log(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Getuser();
    }, [])
    return (
        <div className='chatheaderdiv'>
            <div className='chatprofile'>
                <div className='profileimg'>
                    <img src={users.imageurl} alt="user" className='chatuserimg' />
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