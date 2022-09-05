import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "./Styles/Emptyprofile.css"
import pic from "./images/login.jpg"
import { motion } from "framer-motion"

function EmptyProfile() {
    return (
        <div>
            {/* <Header /> */}
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, stiffness: 500 }}
                style={{
                    width: "100%",
                    height: "100%",
                }} className='outrdiv'>
                <h1 className='headerempty'>Please <span className='spn'>Log-In</span>  to explore more </h1>
                <div className='imgindiv'>
                    <img src={pic} className="loginpic" />
                </div>
            </motion.div>
        </div>
    )
}

export default EmptyProfile