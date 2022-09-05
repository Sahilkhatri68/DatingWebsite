import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper";
import "./Slider.css";
import "swiper/css/effect-cards";
import "swiper/css/bundle";
import img1 from "../images/author1.png";
import img2 from "../images/author2.png";
import img3 from "../images/author3.png";
import img4 from "../images/author4.png";
import img5 from "../images/author5.png";
import TinderCard from "react-tinder-card";
import Header from '../Header';
import Footer from '../Footer';
import ChatContainer from '../ChatContainer/ChatContainer';
import { motion } from "framer-motion"
import EmptyProfile from '../EmptyProfile';

const db = [
    {
        name: 'Richard Hendricks',
        url: "https://www.whatsappimages.in/wp-content/uploads/2022/01/Girl-DP.jpg"
    },
    {
        name: 'Erlich Bachman',
        url: "https://files.oyebesmartest.com/uploads/large/115746029739uiloryvh4ixnjzyn32koejqjuxwsxqv9adrhibebh1odfecvtoktpc8edvfw90r73uympbifbhxit15f4gzybbzubq30nom18sl.jpg"
    },
    {
        name: 'Monica Hall',
        url: "https://i.pinimg.com/564x/d8/0f/c5/d80fc5ec67005483acc273535fa4d092.jpg"
    },
    {
        name: 'Jared Dunn',
        url: "https://i.pinimg.com/564x/e0/f1/fe/e0f1fe307e8d91b0c3f3d9b07b68254c.jpg"
    },
    {
        name: 'Dinesh Chugtai',
        url: "https://i.pinimg.com/564x/f6/88/e6/f688e6191c4c3d9431365921dc520631.jpg"
    }
]
function Slider() {
    const characters = db
    const [lastDirection, setLastDirection] = useState()
    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')

    }
    // animation 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [])


    // login check
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

    return (
        <>
            <div className='mainhd'>
                <Header />
            </div>
            <div className='righthd'>
                {user.length === 0 ? (<EmptyProfile />) : (<motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, stiffness: 500 }}
                    style={{
                        width: "100%",
                        height: "100%",
                    }} className='mainslideDiv'>
                    <div className='insidediv'>
                        <div className='chatcontpage'><ChatContainer /></div>
                        <div className='swiper-container'>
                            <div className='cardContainer'>
                                {characters.map((character) =>
                                    <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                            <h3>{character.name}</h3>
                                        </div>
                                    </TinderCard>
                                )}

                            </div>
                            <div className='swipe-info'>
                                {lastDirection ? <p>You Swiped {lastDirection}</p> : <p></p>}
                            </div>
                        </div>

                    </div>
                </motion.div>)}
            </div>
            <Footer />
        </>
    )
}

export default Slider