import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"

import { Link } from 'react-router-dom'
import facebook from "./images/facebook1.svg";
import twitter from "./images/twitter.svg";
import google from "./images/google.svg";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Register() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
    }, [])


    let navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        navigate("/", { replace: true });
    }

    const [fullname, setFullname] = useState("");
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [imageurl, setImageurl] = useState("");



    const uploadFile = (url, file) => {
        let formData = new FormData();
        formData.append("uploadedFile", file);
        axios
            .post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((e) => {

                console.log(e.data.url)
                setImageurl(e.data.url)

            })
            .catch((e) => {

                console.log(e)
            });

    };
    const handleOnChange = (e) => {
        let url = `http://localhost:4000/api/imageupload`;
        let file = e.target.files[0];
        uploadFile(url, file);
        // getFileData();
    };
    async function Signup() {
        const res = await axios.post("http://localhost:4000/api/signup", {
            fullname: fullname,
            username: username,
            email: email,
            password: password,
            age: age,
            imageurl: imageurl,
            gender: gender,
            city: city,
            country: country,
            phone: phone


        }).then((res) => {
            console.log(res.data);
            Swal.fire(
                'Good job!',
                'Login Success!',
                'success'
            )
        }).catch((error) => {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Details / User Already exists',
            })
        })


        // upload file 

    }
    // console.log(gender)
    return (
        <>
            <Header />
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2, stiffness: 500 }}
                style={{
                    width: "100%",
                    height: "100%",
                }}> <div className="px-3 py-12">
                    <div className="sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1250px] m-auto font-sans font-normal text-[14px] leading-[20px] ">
                        <div className="nc-PageLogin " data-nc-id="PageLogin">
                            <div className="container mb-24 lg:mb-32">
                                <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                                    Sign Up
                                </h2>
                                <div className="max-w-md mx-auto space-y-6">
                                    <div className="grid gap-3">
                                        <a
                                            href="#"
                                            className="nc-will-change-transform flex w-full rounded-lg bg-[#f3f5ff] px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
                                        >
                                            <img
                                                className="flex-shrink-0"
                                                src={facebook}
                                                alt="Continue with Facebook"
                                            />
                                            <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                                                Continue with Facebook
                                            </h3>
                                        </a>
                                        <a
                                            href="#"
                                            className="nc-will-change-transform flex w-full rounded-lg bg-[#f3f5ff] px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
                                        >
                                            <img
                                                className="flex-shrink-0"
                                                src={twitter}
                                                alt="Continue with Twitter"
                                            />
                                            <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                                                Continue with Twitter
                                            </h3>
                                        </a>
                                        <a
                                            href="#"
                                            className="nc-will-change-transform flex w-full rounded-lg bg-[#f3f5ff] px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
                                        >
                                            <img
                                                className="flex-shrink-0"
                                                src={google}
                                                alt="Continue with Google"
                                            />
                                            <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                                                Continue with Google
                                            </h3>
                                        </a>
                                    </div>
                                    <div className="relative text-center">
                                        <span className="relative z-1 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
                                            OR
                                        </span>
                                        <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800 z-0"></div>
                                    </div>
                                    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                Full Name
                                            </span>
                                            <input
                                                type="text"
                                                className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder="Full Name"
                                                name={fullname}
                                                onChange={(e) => setFullname(e.target.value)}
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                Email address
                                            </span>
                                            <input
                                                type="email"
                                                className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder="example@example.com"
                                                name={email}
                                                onChange={(e) => setEmail(e.target.value)}

                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                Username
                                            </span>
                                            <input
                                                type="text"
                                                className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder="Username"
                                                name={username}
                                                onChange={(e) => setusername(e.target.value)}
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                Age
                                            </span>
                                            <input
                                                type="text"
                                                className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder="Age"
                                                name={age}
                                                onChange={(e) => setAge(e.target.value)}
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                Gender
                                            </span>
                                            <select id="cars" className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" name={gender} onChange={(e) => setGender(e.target.value)} >
                                                <option value="Others">Other</option>
                                                <option value="Female">Female</option>
                                                <option value="Male">Male</option>

                                            </select>
                                        </label>

                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                Phone Number
                                            </span>
                                            <input
                                                type="text"
                                                className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder="+91 XXXXXXXXXX"
                                                name={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                City
                                            </span>
                                            <input
                                                type="text"
                                                className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder="City"
                                                name={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-neutral-800 dark:text-neutral-200">
                                                Country
                                            </span>
                                            <input
                                                type="text"
                                                className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder="Country"
                                                name={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                                                Password
                                            </span>
                                            <input
                                                type="password"
                                                className="block w-full border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                placeholder='passowrd'
                                                name={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                                                Image
                                            </span>
                                            <input
                                                type="file"
                                                className="block w-full border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                // name={uploadedFile}


                                                onChange={handleOnChange}
                                            />
                                        </label>
                                        <button
                                            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6   bg-[#6366f1] text-neutral-50"
                                            onClick={() => Signup()}
                                        >
                                            Continue
                                        </button>
                                    </form>
                                    <span className="block text-center text-neutral-700 dark:text-neutral-300">
                                        Already have an account?
                                        <Link to="/login" style={{ color: "red" }}>Sign in</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>

    )
}

export default Register