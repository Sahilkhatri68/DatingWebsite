import React, { useEffect, useState } from 'react';

import "./Styles/Profile.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import u3 from "./images/u3.png"
import wavebg from "./images/wavebg.jpg"
import datingLogo from "./images/datingLogo.png"
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { motion } from "framer-motion"
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import EmptyProfile from './EmptyProfile';

function Profile() {
    let navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [])


    const [user, setUser] = useState([])
    async function Getuser() {
        try {
            const resp = await axios.get("http://localhost:4000/api/profile", {
                withCredentials: true,
            });
            setUser(resp.data);
            console.log(resp.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        Getuser();
    }, [])


    // check user 
    async function CheckUser() {
        try {
            const resp = await axios.post("http://localhost:4000/api/login/checklogin", {
                withCredentials: true,
            });
        } catch (error) {
            console.log(error)
        }
    }
    // logout function
    async function Userlogout() {
        try {
            const resp = await axios.get("http://localhost:4000/api/logout", {
                withCredentials: true,
            });
            console.log(resp.data);
            console.log("logout done ");
            navigate("/", { replace: true });

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />
            {user.length === 0 ? (<EmptyProfile />) : (<motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, stiffness: 500 }}
                style={{
                    width: "100%",
                    height: "100%",
                }}>
                <div className='maindiv'>
                    <div className="leftcontdiv">
                        <div className='logodiv'><img src={datingLogo} className="logomain" /></div>

                        <div className='itemsdiv'><div><EqualizerIcon className='muiicons' /></div> <div className='textstlye'>My Dashboard</div></div>
                        <div className='itemsdiv'><div><PersonIcon className='muiicons' /></div> <div className='textstlye'> Accounts</div></div>
                        <div className='itemsdiv'><div><PhoneIphoneIcon className='muiicons' /></div> <div className='textstlye'> My Mobile</div></div>
                        <div className='itemsdiv'><div><CurrencyRupeeIcon className='muiicons' /></div> <div className='textstlye'> My Payements</div></div>
                        <div className='itemsdiv'><div><GroupIcon className='muiicons' /></div> <div className='textstlye'> My Friends</div></div>
                        <div className='itemsdiv'><div><SupportAgentIcon className='muiicons' /></div> <div className='textstlye'>  Support</div></div>
                        <div className='itemsdiv'><div><SettingsIcon className='muiicons' /></div> <div className='textstlye'>  Settings</div></div>

                    </div>
                    <div className="rightcontdiv">
                        <div className='rightprofile'>
                            <div className="rightsidediv"><div className='head'>Profile Page</div> </div>
                            <div className="rightsidedivtwo"> <div> <NotificationsActiveIcon /> &nbsp;     </div> <div className="dropdown">
                                <button className="dropbtn">Hello <div className='spandiv'>{user.fullname}</div>  <ArrowDropDownIcon /> </button>
                                <div className="dropdown-content">
                                    <a href="#"><SettingsIcon /> Settings</a>
                                    <button style={{ height: 50 }} onClick={() => Userlogout()}><PowerSettingsNewIcon /> Logout</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="bottomdiv">
                            <div className='leftcard'>
                                <div className='imgdiv'>
                                    <img src={u3} alt='img' className='imguser'></img>
                                </div>
                                <div className='insidecard'>
                                    <div className='textdiv'>Number</div>
                                    <div className='righttextdiv'>{user.phone}</div>
                                </div>
                                <div className='insidecard'>
                                    <div className='textdiv'>Age</div>
                                    <div className='righttextdiv'>{user.age}</div>
                                </div>
                                <div className='insidecard'>
                                    <div className='textdiv'>Gender</div>
                                    <div className='righttextdiv'>{user.gender}</div>
                                </div>
                                <div className='insidecard'>
                                    <div className='textdiv'>City</div>
                                    <div className='righttextdiv'>{user.city}</div>
                                </div>
                                <div className='insidecard'>
                                    <div className='textdiv'>Country</div>
                                    <div className='righttextdiv'>{user.country}</div>
                                </div>
                                <div className='insidecard'>
                                    <div className='textdiv'>Email</div>
                                    <div className='righttextdiv'>{user.email}</div>
                                </div>
                                <Link to="/slider">
                                    <div className='insidecardbtn'>
                                        <button className='profilebtn'>Explore</button>
                                    </div></Link>
                            </div>
                            <div className='rightcard'>
                                <div className='forborder'>
                                    <div className='contcardbotm'>
                                        <div className='headstyle'>My Account</div>

                                    </div>
                                    <hr />
                                    <div className='bankActdiv'>
                                        <div>
                                            <div className='acchead'>Active Account</div>
                                            <div>HDFC XXXX 4545 XX23</div>
                                        </div>
                                        <div className='accDetdiv'>
                                            <button className='bankbtnchk'>Check</button>
                                        </div>
                                    </div>
                                    <div className='bankActdiv'>
                                        <div>
                                            <div className='acchead'>Active Account</div>
                                            <div>HDFC XXXX 4545 XX23</div>
                                        </div>
                                        <div className='accDetdiv'>
                                            <button className='bankbtnchk'>Check</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='contcardbotm'><div className='forborder'>
                                    <div className='contcardbotm'>
                                        <div className='headstyle'>My Bills</div>

                                    </div>
                                    <hr />
                                    <div className='bankActdiv'>
                                        <div className='rechargediv'>
                                            <div className='dot'> </div>
                                            <div className='itemrec'>Top-Up</div>
                                        </div>
                                        <div className='accDetdiv'>
                                            <button className='bankbtnchk'>Check</button>
                                        </div>
                                    </div>
                                    <div className='bankActdiv'>
                                        <div className='rechargediv'>
                                            <div className='dottwo'> </div>
                                            <div className='itemrec'>Top-Up</div>
                                        </div>
                                        <div className='accDetdiv'>
                                            <button className='bankbtnchk'>Check</button>
                                        </div>
                                    </div>
                                    <div className='bankActdiv'>
                                        <div className='rechargediv'>
                                            <div className='dot'> </div>
                                            <div className='itemrec'>Top-Up</div>
                                        </div>
                                        <div className='accDetdiv'>
                                            <button className='bankbtnchk'>Check</button>
                                        </div>
                                    </div>
                                    <div className='bankActdiv'>
                                        <div className='rechargediv'>
                                            <div className='dot'> </div>
                                            <div className='itemrec'>Top-Up</div>
                                        </div>
                                        <div className='accDetdiv'>
                                            <button className='bankbtnchk'>Check</button>
                                        </div>
                                    </div>
                                </div> </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>)}

            <Footer />
        </>
    )
}

export default Profile