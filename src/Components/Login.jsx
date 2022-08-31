import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import facebook from "./images/facebook1.svg";
import twitter from "./images/twitter.svg";
import google from "./images/google.svg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"


function Login() {
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

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("");

    async function LoginPost() {
        const resp = await axios.post("http://localhost:4000/api/login", {
            username: username,
            password: password
        }).then((resp) => {
            console.log((resp.data))
            alert("login Success")
        }).catch((error) => {
            console.log(error)
            alert("login Error")

        })
    }


    async function CheckLogin() {
        const res = await axios.get("http://localhost:4000/api/login/checkLogin").then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        CheckLogin()
    }, [])

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, stiffness: 500 }}
            style={{
                width: "100%",
                height: "100%",
            }}
        >

            {/*Login*/}
            <div className="px-3 py-12">
                <div className="sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1250px] m-auto font-sans font-normal text-[14px] leading-[20px] ">
                    <div className="nc-PageLogin " data-nc-id="PageLogin">
                        <div className="container mb-24 lg:mb-32">
                            <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                                Login
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
                                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} >
                                    <label className="block">
                                        <span className="text-neutral-800 dark:text-neutral-200">
                                            Username
                                        </span>
                                        <input
                                            type="text"
                                            className="block w-full border bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                            placeholder="Username"
                                            name={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                                            Password
                                            <a className="text-sm" href="/chisfis/forgot-pass">
                                                Forgot password?
                                            </a>
                                        </span>
                                        <input
                                            type="password"
                                            className="block w-full border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                            name={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </label>
                                    <button
                                        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6   bg-[#6366f1] text-neutral-50"
                                        onClick={LoginPost}
                                    >
                                        Login
                                    </button>
                                </form>
                                <span className="block text-center text-neutral-700 dark:text-neutral-300">
                                    New user? <Link to="/register" style={{ color: "red" }}>Create an account</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </motion.div>
    )
}

export default Login