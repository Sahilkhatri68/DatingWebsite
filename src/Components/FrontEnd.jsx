import React, { useEffect, useState } from 'react';

import hero from "./images/hero.png"
import feat from "./images/feat.png"
import HIW1 from "./images/HIW1.png"
import HIW2 from "./images/HIW2.png"
import HIW3 from "./images/HIW3.png"
import author2 from "./images/author2.png"
import author3 from "./images/author3.png"
import author4 from "./images/author4.png"
import author5 from "./images/author5.png"
import author6 from "./images/author6.png"
import author7 from "./images/author7.png"
import author8 from "./images/author8.png"
import author9 from "./images/author9.png"
import explore6 from "./images/explore6.jpeg"
import explore5 from "./images/explore5.jpeg"
import explore7 from "./images/explore7.webp"
import explore8 from "./images/explore8.webp"
import explore4 from "./images/explore4.webp"
import ss from "./images/pexels-photo-739407.jpeg"
import why_did_u_chose_us from "./images/why_did_u_chose_us.png"
import join_our_newsletter from "./images/join_our_newsletter.png"
import best_western_cedars1 from "./images/best_western_cedars1.jpeg"
import best_western_cedars2 from "./images/best_western_cedars2.jpeg"
import best_western_cedars3 from "./images/best_western_cedars3.jpeg"
import best_western_cedars4 from "./images/best_western_cedars4.jpeg"
import { motion } from "framer-motion"

function FrontEnd() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        scrollToTop();
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


            {/* hotel, car & Experiences */}
            <div className="px-4 pt-[150px] pb-12">
                <div className="w-full m-auto sm:w-[600px] md:w-[720px] lg:w-[1000px] xl:w-[1250px] lg:flex">
                    <div className="w-full lg:w-1/2 pr-0 xl:pr-[110px]">
                        <h1 className="font-medium text-[36px] leading-[41px]  md:text-[48px] md:leading-[55px] xl:text-[72px] xl:leading-[82px] text-[#111827]">
                            Hotel, car &amp; experiences
                        </h1>
                        <p className="font-normal text-[18px] leading-[28px] text-[#6b7280] mt-12">
                            Accompanying us, you have a trip full of experiences. With Chisfis,
                            booking accommodation, resort villas, hotels
                        </p>
                        <a href="">
                            <div className="bg-[#4f46e5] py-3 px-4 w-[180px] font-medium text-[16px] leading-[24px] text-[#f9fafb] text-center rounded-full mt-12">
                                Start your search
                            </div>
                        </a>
                    </div>
                    <div className="w-full mt-12 lg:mt-0 lg:w-1/2">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
            {/* Heading of sections */}
            <div className="px-4 py-12">
                <div className="w-full m-auto  xl:w-[1250px]">
                    <h1 className="font-semibold text-[#111827] text-[30px] leading-[36px] md:text-[36px] md:leading-[40px] ">
                        Heading of sections
                    </h1>
                    <p className="font-normal text-[#6b7280] text-[16px] sm:text-[20px] sm:leading-[28px] leading-[24px] mt-2">
                        Descriptions for sections
                    </p>
                    <div className="my-12 wrapper w-full  bg-white z-1">
                        <div className="carousel owl-carousel w-full bg-white">
                            <div>
                                <div className="h-[325px]   bg-cover bg-center rounded-2xl hover:brightness-90 transition-all"   style={{backgroundImage: `url(${explore6})` }}/>
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    New York
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[325px]  bg-cover bg-center rounded-2xl hover:brightness-90 transition-all"   style={{backgroundImage: `url(${explore5})` }}/>
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Singapore
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[325px]   bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" style={{backgroundImage: `url(${explore7})` }}/>
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Paris
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[325px]   bg-cover bg-center rounded-2xl hover:brightness-90 transition-all"style={{backgroundImage: `url(${explore8})` }} />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    London
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[325px]   bg-cover bg-center rounded-2xl hover:brightness-90 transition-all"  style={{backgroundImage: `url(${explore4})` }}/>
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Tokyo
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[325px]   bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" style={{backgroundImage: `url(${explore4})` }} />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Maldives
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full m-auto sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px] lg:flex py-12">
                    <div className="w-full lg:w-3/5">
                        <img src={feat} alt="" />
                    </div>
                    <div className="w-full lg:w-2/5 pl-0 lg:pl-12">
                        <div>
                            <p className="text-[#9ca3af] text-[14] leading-[20px]">BENNIFITS</p>
                            <h1 className="text-[#111827] mt-5 text-[36px] leading-[40px] font-semibold">
                                Happening cities
                            </h1>
                        </div>
                        <div className="mt-12">
                            <p className="text-[#1e40af] font-medium text-[12px] leading-[16px] py-1 px-4 bg-[#dbeafe] inline rounded-full">
                                Advertising
                            </p>
                            <h1 className="text-[#111827] font-semibold text-[20px] leading-[28px] mt-4">
                                Cost-effective advertising
                            </h1>
                            <p className="font-normal text-[#6b7280] text-[16px] leading-[24px] mt-5">
                                With a free listing, you can advertise your rental with no upfront
                                costs
                            </p>
                        </div>
                        <div className="mt-12">
                            <p className="text-[#166534] font-medium text-[12px] leading-[16px] py-1 px-4 bg-[#dcfce7] inline rounded-full">
                                Exposure
                            </p>
                            <h1 className="text-[#111827] font-semibold text-[20px] leading-[28px] mt-4">
                                Reach millions with Chisfis
                            </h1>
                            <p className="font-normal text-[#6b7280] text-[16px] leading-[24px] mt-5">
                                Millions of people are searching for unique places to stay around
                                the world
                            </p>
                        </div>
                        <div className="mt-12">
                            <p className="text-[#991b1b] font-medium text-[12px] leading-[16px] py-1 px-4 bg-[#fee2e2] inline rounded-full">
                                Secure
                            </p>
                            <h1 className="text-[#111827] font-semibold text-[20px] leading-[28px] mt-4">
                                Secure and simple
                            </h1>
                            <p className="font-normal text-[#6b7280] text-[16px] leading-[24px] mt-5">
                                A Holiday Lettings listing gives you a secure and easy way to take
                                bookings and payments online
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Featured places to stay */}
            <div className="bg-[#f3f4f6] px-4 py-12 rounded-3xl">
                <div className="w-full m-auto sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px]">
                    <h1 className="font-semibold text-[30px] leading-[36px] text-[#111827] md:text-[36px] md:leading-[40px]">
                        Featured places to stay
                    </h1>
                    <p className="font-normal text-[#6b7280] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[28px] xl:text-[18px] xl:leading-[28px] mt-4">
                        Popular places to stay that Chisfis recommends for you
                    </p>
                    <div className="mt-10 flex items-center justify-between">
                        <ul className="flex font-medium text-[16px] leading-[16px]">
                            <li className="px-4 mx-2 py-2 text-white bg-[#115e59] rounded-full featured_places">
                                New York
                            </li>
                            <li className="px-4 mx-2 py-2 rounded-full featured_places">Tokyo</li>
                            <li className="px-4 mx-2 py-2 rounded-full featured_places">Paris</li>
                            <li className="px-4 mx-2 py-2 rounded-full featured_places">
                                London
                            </li>
                        </ul>
                        <div className="hidden items-center bg-white rounded-full px-5 py-[10px] border-white  hover:bg-[#f3f4f6] hover:border-black md:flex">
                            <p className="font-medium text-[#374151] leading-[16px] text-[16px] ">
                                View all
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="currentColor"
                                className="bi bi-arrow-right pl-2"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="lg:hidden xl:block">
                        <div className="w-full my-12 lg:flex">
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/best_western_cedars1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/best_western_cedars2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/best_western_cedars3.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/best_western_cedars4.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 10 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                Best Western Cedars...
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;1 Anzinger Court
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $26
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;4.8
                                                        </b>
                                                        (28)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/bell_by1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/bell_by2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/bell_by3.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/bell_by4.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl  ">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 6 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                Bell By Greene King Inns
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;32923 Judy Hill
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $250
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;4.4
                                                        </b>
                                                        (198)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/half_moon1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/half_moon2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/half_moon3.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/half_moon4.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 9 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                Half Moon, Sherborne By...
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;6731 Killdeer Park
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $278
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;3.6
                                                        </b>
                                                        (16)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/white_horse1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/white_horse2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/white_horse3.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/half_moon2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 7 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                White Horse Hotel By...
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;35 Sherman Park
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $40
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;4.8
                                                        </b>
                                                        (38)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full my-12 lg:flex">
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/ship_and_castle1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/ship_and_castle2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/ship_and_castle3.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/ship_and_castle4.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 3 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                Ship And Castle Hotel...
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;3 Crest Line Park
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $147
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;3.4
                                                        </b>
                                                        (340)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/The_windmill1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/The_windmill2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/The_windmill3.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/The_windmill4.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl  ">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 7 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                The Windmill Family &amp;...
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;55974 Waxwing Junction
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $90
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;3.8
                                                        </b>
                                                        (508)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/unicorn1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/unicorn2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/unicorn3.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/unicorn4.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 2 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                Unicorn Gunthorpe By...
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;79361 Chinook Place
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $282
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;3
                                                        </b>
                                                        (481)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3 h-full">
                                    <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                        <div className="">
                                            <div className="wrapper w-full rounded-3xl">
                                                <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                    <img
                                                        src="./images/holiday1.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                    <img
                                                        src="./images/holiday2.jpeg"
                                                        alt=""
                                                        className="rounded-3xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    fill="currentColor"
                                                    className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="px-4 pb-4 bg-white rounded-3xl">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                Entire cabin · 7 beds
                                            </p>
                                            <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                                Holiday Inn Express ...
                                            </h1>
                                            <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-geo-alt"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                &nbsp;6 Chive Avenue
                                            </p>
                                            <div className="flex justify-between mt-10">
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        $79
                                                    </b>
                                                    /night
                                                </p>
                                                <div className="flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-star-fill fill-[#ef4444]"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                        <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                            &nbsp;3.9
                                                        </b>
                                                        (188)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block xl:hidden">
                        <div className="my-5 flex">
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src={best_western_cedars1}
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src={best_western_cedars2}
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src={best_western_cedars3}
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src={best_western_cedars4}
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 10 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            Best Western Cedars...
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;1 Anzinger Court
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $26
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;4.8
                                                    </b>
                                                    (28)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src="./images/bell_by1.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/bell_by2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/bell_by3.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/bell_by4.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl  ">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 6 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            Bell By Greene King Inns
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;32923 Judy Hill
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $250
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;4.4
                                                    </b>
                                                    (198)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src="./images/half_moon1.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/half_moon2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/half_moon3.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/half_moon4.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 9 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            Half Moon, Sherborne By...
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;6731 Killdeer Park
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $278
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;3.6
                                                    </b>
                                                    (16)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 flex">
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src="./images/white_horse1.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/white_horse2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/white_horse3.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/half_moon2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 7 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            White Horse Hotel By...
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;35 Sherman Park
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $40
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;4.8
                                                    </b>
                                                    (38)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src="./images/ship_and_castle1.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/ship_and_castle2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/ship_and_castle3.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/ship_and_castle4.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 3 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            Ship And Castle Hotel...
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;3 Crest Line Park
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $147
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;3.4
                                                    </b>
                                                    (340)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src="./images/The_windmill1.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/The_windmill2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/The_windmill3.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/The_windmill4.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl  ">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 7 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            The Windmill Family &amp;...
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;55974 Waxwing Junction
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $90
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;3.8
                                                    </b>
                                                    (508)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-5 flex">
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src="./images/unicorn1.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/unicorn2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/unicorn3.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/unicorn4.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 2 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            Unicorn Gunthorpe By...
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;79361 Chinook Place
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $282
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;3
                                                    </b>
                                                    (481)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3 h-full">
                                <div className="rounded-3xl bg-white hover:shadow-xl h-full">
                                    <div className="">
                                        <div className="wrapper w-full rounded-3xl">
                                            <div className="carousel1 owl-carousel w-full bg-white rounded-3xl">
                                                <img
                                                    src="./images/holiday1.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                                <img
                                                    src="./images/holiday2.jpeg"
                                                    alt=""
                                                    className="rounded-3xl"
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[40px] w-[40px] flex items-center justify-center bg-slate-200 rounded-full relative float-right mr-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                fill="currentColor"
                                                className="bi bi-heart-fill hover:fill-red-600 z-1 fill-gray mt-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 bg-white rounded-3xl">
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            Entire cabin · 7 beds
                                        </p>
                                        <h1 className="font-medium text-[18px] leading-[28px] text-[#111827] my-1">
                                            Holiday Inn Express ...
                                        </h1>
                                        <p className="flex items-center font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-geo-alt"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            &nbsp;6 Chive Avenue
                                        </p>
                                        <div className="flex justify-between mt-10">
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                    $79
                                                </b>
                                                /night
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    className="bi bi-star-fill fill-[#ef4444]"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                <p className="font-normal text-[14px] leading-[20px] text-[#6b7280]">
                                                    <b className="font-semibold text-[16px] leading-[24px] text-[#111827]">
                                                        &nbsp;3.9
                                                    </b>
                                                    (188)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="bg-indigo-500 flex items-center text-white font-semibold px-5 py-[10px] rounded-full m-auto"
                        disabled=""
                    >
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx={12}
                                cy={12}
                                r={10}
                                stroke="currentColor"
                                strokeWidth={3}
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Show me more
                    </button>
                </div>
            </div>
            {/* How it work */}
            <div className="px-4 py-[80px] bg-[url('./images/VectorHIW.2a56b4d0aa5690494df25bc0b2bb3bf6.svg')] bg-no-repeat bg-center">
                <div className="w-full m-auto sm:w-[600px] md:w-[730px] lg:w-[980px] xl:w-[1250px]">
                    <h1 className="font-semibold text-[30px] leading-[36px] md:text-[36px] md:leading-[40px] text-[#111827] text-center">
                        How it work
                    </h1>
                    <p className="font-normal text-[16px] leading-[24px]  sm:text-[20px] sm:leading-[28px] text-[#6b7280] text-center mt-4">
                        Keep calm &amp; travel on
                    </p>
                    <div className="md:flex mt-[100px]">
                        <div className="md:w-1/3 my-12 md:my-0">
                            <div className="w-2/3 m-auto">
                                <img src={HIW1} alt="" />
                            </div>
                            <div className="w-4/5 m-auto mt-5">
                                <h1 className="font-semibold text-[30px] leading-[36px] md:text-[20px] md:leading-[28px] text-[#111827] text-center">
                                    Book &amp; relax
                                </h1>
                                <p className="font-semibold text-[16px] leading-[24px]  sm:text-[16px] sm:leading-[24px] text-[#6b7280] text-center mt-1">
                                    Let each trip be an inspirational journey, each room a peaceful
                                    space
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/3 my-12 md:my-0">
                            <div className="w-2/3 m-auto">
                                <img src={HIW2} alt="" />
                            </div>
                            <div className="w-4/5 m-auto mt-5">
                                <h1 className="font-semibold text-[30px] leading-[36px] md:text-[20px] md:leading-[28px] text-[#111827] text-center">
                                    Smart checklist
                                </h1>
                                <p className="font-semibold text-[16px] leading-[24px]  sm:text-[16px] sm:leading-[24px] text-[#6b7280] text-center mt-1">
                                    Let each trip be an inspirational journey, each room a peaceful
                                    space
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/3 my-12 md:my-0">
                            <div className="w-2/3 m-auto">
                                <img src={HIW3} alt="" />

                            </div>
                            <div className="w-4/5 m-auto mt-5">
                                <h1 className="font-semibold text-[30px] leading-[36px] md:text-[20px] md:leading-[28px] text-[#111827] text-center">
                                    Save more
                                </h1>
                                <p className="font-semibold text-[16px] leading-[24px]  sm:text-[16px] sm:leading-[24px] text-[#6b7280] text-center mt-1">
                                    Let each trip be an inspirational journey, each room a peaceful
                                    space
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Suggestions for discovery */}
            <div className="px-4 py-[70px] bg-[#fff7ed] rounded-3xl">
                <div className="w-full m-auto sm:w-[600px] md:w-[730px] lg:w-[980px] xl:w-[1250px]">
                    <h1 className="font-semibold text-[30px] leading-[36px] md:text-[36px] md:leading-[40px] text-[#111827] text-center">
                        Suggestions for discovery
                    </h1>
                    <p className="font-normal text-[16px] leading-[24px]  sm:text-[20px] sm:leading-[28px] text-[#6b7280] text-center mt-4">
                        Popular places to stay that Chisfis recommends for you
                    </p>
                    <div className="my-12 wrapper w-full">
                        <div className="carousel2 owl-carousel w-full">
                            <div className="text-center">
                                <div className="h-[325px] bg-[url('./images/suggestions1.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Enjoy the great cold
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="h-[325px] bg-[url('./images/suggestions2.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Sleep in a floating way
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="h-[325px] bg-[url('./images/suggestions3.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    In the billionaire's house
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="h-[325px] bg-[url('./images/suggestions4.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Cool in the deep forest
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Join our newsletter */}
            <div className="px-4 py-[70px]">
                <div className="w-full m-auto sm:w-[600px] md:w-[730px] lg:w-[980px] xl:w-[1250px] lg:flex items-center">
                    <div className="w-full lg:w-2/5">
                        <h2 className="font-semibold text-[30px] leading-[36px] md:text-[36px] md:leading-[40px] text-[#111827]">
                            Join our newsletter 🎉
                        </h2>
                        <p className="font-normal text-[16px] leading-[24px]  sm:text-[20px] sm:leading-[28px] text-[#6b7280] mt-4 mb-12">
                            Read and share new perspectives on just about any topic. Everyone’s
                            welcome.
                        </p>
                        <p className="font-medium text-[16px] leading-[24px] text-[#374151] flex  items-center my-2">
                            <b className="text-[12px] leading-[16px] text-[#1e40af] bg-[#dbeafe] rounded-full py-1 px-[10px]">
                                01
                            </b>
                            &nbsp;Get more discount
                        </p>
                        <p className="font-medium text-[16px] leading-[24px] text-[#374151]">
                            <b className="text-[12px] leading-[16px] text-[#991b1b] bg-[#fee2e2] rounded-full py-1 px-[10px]">
                                02
                            </b>
                            &nbsp;Get premium magazines
                        </p>
                        <div className="items-center p-1 border inline-flex rounded-full mt-12">
                            <input
                                type="email"
                                className="w-[200px] outline-none px-4 placeholder:font-medium"
                                placeholder="Enter your email"
                            />
                            <div className="h-[40px] w-[40px] flex items-center justify-center bg-[#4f46e5] rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="bi bi-arrow-right fill-white"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 mt-10 lg:mt-0">
                        <div className="w-[90%] m-auto">
                            <img src={join_our_newsletter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Top 10 author of the month */}
            <div className="px-4 py-[70px] bg-[#fff7ed] rounded-3xl">
                <div className="w-full m-auto sm:w-[600px] md:w-[730px] lg:w-[980px] xl:w-[1250px]">
                    <h1 className="font-semibold text-[30px] leading-[36px] md:text-[36px] md:leading-[40px] text-[#111827] text-center">
                        Top 10 author of the month
                    </h1>
                    <p className="font-normal text-[16px] leading-[24px]  sm:text-[20px] sm:leading-[28px] text-[#6b7280] text-center mt-4">
                        Rating based on customer reviews
                    </p>
                    <div className="my-12 hidden xl:block">
                        <div className="flex text-center">
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full bg-cover bg-center"  style={{backgroundImage: `url(${best_western_cedars1})` }}/>
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Truelock Alric
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author2})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Birrel Chariot
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author3})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Foulcher Nathanil
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full  bg-cover bg-center"  style={{backgroundImage: `url(${author4})` }}/>
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Falconar Agnes
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full  bg-cover bg-center" style={{backgroundImage: `url(${author5})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Tousy Vita
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-center">
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author6})` }}  />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Friar Donna
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author7})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Royal Sergei
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"style={{backgroundImage: `url(${author7})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Sleite Claudetta
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author8})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        pillifant vern
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/5 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author9})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Fones Mimi
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden lg:block xl:hidden text-center">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${best_western_cedars1})` }}/>
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Truelock Alric
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${author2})` }}/>
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Birrel Chariot
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${author3})` }}/>
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Foulcher Nathanil
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author4})` }} />
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Falconar Agnes
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author5})` }} />
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Tousy Vita
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author6})` }}  />
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Friar Donna
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${author7})` }}/>
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Royal Sergei
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full bg-[url('./images/author8.png')] bg-cover bg-center" />
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Sleite Claudetta
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 sm:flex">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${author8})` }}/>
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            pillifant vern
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                        <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author9})` }} />
                                        <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                            Fones Mimi
                                        </p>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            New York
                                        </p>
                                        <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                            <p>4.9</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                fill="currentColor"
                                                className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <div className="flex">
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${best_western_cedars1})` }}/>
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Truelock Alric
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author2})` }}/>
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Birrel Chariot
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author3})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Foulcher Nathanil
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"style={{backgroundImage: `url(${author4})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Falconar Agnes
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author5})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Tousy Vita
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full  bg-cover bg-center" style={{backgroundImage: `url(${author6})` }}  />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Friar Donna
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${author7})` }}/>
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Royal Sergei
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full bg-[url('./images/author8.png')] bg-cover bg-center" />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Sleite Claudetta
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author8})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        pillifant vern
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-1/3 p-3">
                                <div className="p-6 rounded-3xl hover:shadow-xl bg-white">
                                    <div className="w-[80px] h-[80px] m-auto rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${author9})` }} />
                                    <p className="font-medium text-[16px] leading-[24px] text-[#111827] mt-3">
                                        Fones Mimi
                                    </p>
                                    <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                        New York
                                    </p>
                                    <div className="inline-flex items-center py-[6px] px-5 bg-slate-100 rounded-full m-auto mt-3">
                                        <p>4.9</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={18}
                                            fill="currentColor"
                                            className="bi bi-star-fill fill-[#ca8a04] ml-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex m-auto w-[320px] font-medium text-[16px] leading-[24px] text-[#111827]">
                        <div className="py-2 px-5 border rounded-full bg-white hover:bg-slate-50">
                            Show me more
                        </div>
                        <div className="py-2 px-5 border rounded-full ml-5 bg-[#4f46e5] text-white hover:bg-[#3a32c5]">
                            Become a host
                        </div>
                    </div>
                </div>
            </div>
            {/* Explore nearby */}
            <div className="px-4 py-[80px]">
                <div className="w-full m-auto sm:w-[600px] md:w-[730px] lg:w-[980px] xl:w-[1250px]">
                    <h1 className="font-semibold text-[30px] leading-[36px] md:text-[36px] md:leading-[40px] text-[#111827] text-center">
                        Explore nearby
                    </h1>
                    <p className="font-normal text-[16px] leading-[24px]  sm:text-[20px] sm:leading-[28px] text-[#6b7280] text-center mt-4">
                        Discover great places near where you live
                    </p>
                    <div className="lg:hidden xl:block mt-12">
                        <div className="lg:flex">
                            <div className="sm:flex lg:w-1/2">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3">
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full   bg-cover bg-center"   style={{backgroundImage: `url(${explore6})` }}/>
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                1882
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                New York
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3">
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${explore5})` }} />
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                8288
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                Singapore
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex lg:w-1/2">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3"> 
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${explore7})` }} />
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                1882
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                Paris
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3">
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${explore8})` }} />
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                112
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                London
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex">
                            <div className="sm:flex lg:w-1/2">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3">
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full  bg-cover bg-center" style={{backgroundImage: `url(${explore4})` }} />
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                1882
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                Tokyo
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3">
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${explore4})` }}/>
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                8288
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                Maldives
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex lg:w-1/2">
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3">
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full   bg-cover bg-center"  style={{backgroundImage: `url(${explore4})` }}/>
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                1882
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                New York
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 p-3">
                                    <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                        <div className="py-3 pl-3">
                                            <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full   bg-cover bg-center" style={{backgroundImage: `url(${explore4})` }}/>
                                        </div>
                                        <div className="pl-4 w-full">
                                            <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                                112
                                            </p>
                                            <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                                Singapore
                                            </h1>
                                            <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                                19 minutes drive
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 hidden lg:block xl:hidden">
                        <div className="flex">
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full bg-[url('./images/explore1.webp')] bg-cover bg-center" />
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            1882
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            New York
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full  bg-cover bg-center" style={{backgroundImage: `url(${explore4})` }} />
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            8288
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            Singapore
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full  bg-cover bg-center"   style={{backgroundImage: `url(${explore7})` }}/>
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            1882
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            Paris
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full bg-cover bg-center"  style={{backgroundImage: `url(${explore7})` }} />
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            112
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            London
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full  bg-cover bg-center"style={{backgroundImage: `url(${explore4})` }} />
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            1882
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            Tokyo
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full  bg-cover bg-center" style={{backgroundImage: `url(${explore4})` }} />
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            8288
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            Maldives
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full bg-[url('./images/explore7.webp')] bg-cover bg-center" />
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            1882
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            New York
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 p-3">
                                <div className="p-2 bg-white hover:shadow-xl flex rounded-3xl border">
                                    <div className="py-3 pl-3">
                                        <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full  bg-cover bg-center"  style={{backgroundImage: `url(${explore4})` }}/>
                                    </div>
                                    <div className="pl-4 w-full">
                                        <p className="font-medium text-[12px] leading-[16px] text-[#1f2937] py-1 px-2 rounded-full bg-slate-100 inline float-right">
                                            112
                                        </p>
                                        <h1 className="mt-[36px] font-medium text-[16px] leading-[16px] text-[#111827]">
                                            Singapore
                                        </h1>
                                        <p className="font-normal text-[14px] leading-[20px] text-[#6b7280] mt-3">
                                            19 minutes drive
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why did you choose us? */}
            <div className="bg-[#f3f4f6] px-4 py-12 rounded-3xl">
                <div className="w-full m-auto sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px]">
                    <div className="lg:flex items-center">
                        <div className="w-full lg:w-2/5">
                            <a
                                className="ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
                                href="/chisfis/"
                            >
                                <svg
                                    className="w-full hidden dark:block fill-[#4f46e5] text-[#4f46e5]"
                                    viewBox="0 0 65 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z"
                                        fill="#4f46e5"
                                    />
                                    <path
                                        d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle cx={13} cy={15} r={4} fill="white" />
                                    <path
                                        d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z"
                                        fill="white"
                                    />
                                </svg>
                                <svg
                                    className="w-full block dark:hidden fill-[#4f46e5] text-[#4f46e5]"
                                    viewBox="0 0 65 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807"
                                        stroke="white"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <circle cx={13} cy={15} r={4} fill="white" />
                                    <path
                                        d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z"
                                        fill="#1F2937"
                                    />
                                </svg>
                            </a>
                            <h1 className="font-bold text-[30px] leading-[36px] md:text-[36px] md:leading-[40px] text-[#111827] mt-[50px]">
                                Why did you choose us?
                            </h1>
                            <p className="font-normal text-[16px] leading-[24px]  sm:text-[20px] sm:leading-[28px] text-[#6b7280]  mt-4 mb-12">
                                Accompanying us, you have a trip full of experiences. With Chisfis,
                                booking accommodation, resort villas, hotels, private houses,
                                apartments... becomes fast, convenient and easy.
                            </p>
                            <a href="">
                                <div className="px-5 py-2 rounded-full font-semibold text-white text-[16] leading-[24px] bg-[#4f46e5] inline">
                                    Become an author
                                </div>
                            </a>
                        </div>
                        <div className="w-full lg:w-3/5">
                            <div>
                                <img src={why_did_u_chose_us} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Explore by types of stays */}
            <div className="px-4 py-[100px] rounded-3xl">
                <div className="w-full m-auto sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px]">
                    <h1 className="font-semibold text-[30px] leading-[36px] text-[#111827] md:text-[36px] md:leading-[40px]">
                        Explore by types of stays
                    </h1>
                    <p className="font-normal text-[#6b7280] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[28px] xl:text-[18px] xl:leading-[28px] mt-4">
                        Explore houses based on 10 types of stays
                    </p>
                    <div className="my-12 wrapper w-full  bg-white z-1">
                        <div className="carousel owl-carousel w-full bg-white">
                            <div>
                                <div className="h-[160px] bg-[url('./images/types_of_stays5.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Nature House
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    17,288 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[160px] bg-[url('./images/types_of_stays4.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Wooden House
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    2,118 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[160px] bg-[url('./images/types_of_stays3.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Houseboat
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    36,612 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[160px] bg-[url('./images/types_of_stays2.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Farm House
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                            <div>
                                <div className="h-[160px] bg-[url('./images/types_of_stays1.jpeg')] bg-cover bg-center rounded-2xl hover:brightness-90 transition-all" />
                                <p className="font-medium text-[#111827] text-[18px] leading-[28px] my-2">
                                    Dome House
                                </p>
                                <p className="font-normal text-[#4b5563] text-[14px] leading-[20px]">
                                    188,288 properties
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 py-12">
                <div className="w-full m-auto sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px]">
                    <img src={ss} className="w-full" />
                </div>
            </div>

        </motion.div>

    )
}

export default FrontEnd

