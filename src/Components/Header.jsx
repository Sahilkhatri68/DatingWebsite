import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav
                className="px-4 py-5 fixed border-b w-full bg-white"
                style={{ zIndex: 2 }}
            >
                <div className="sm:w-[520px] md:w-full lg:w-[1000px] xl:w-[1250px] m-auto flex items-center justify-between">
                    <div className="sm:w-[245px] lg:w-[345px] hidden md:block">
                        <a
                            className="ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
                            href="/"
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
                    </div>
                    <div className="hidden min-w-[345px] max-w-[345px] font-sans font-medium text-[#111827] border rounded-full lg:flex items-center justify-center h-[45px] shadow-sm hover:shadow-md m-auto">
                        <div className="mx-3"> <Link to="/login">Login</Link>   </div>
                        <div className="mx-3 border-l border-r px-2"><Link to="/register">Signup</Link> </div>
                        <div className="mx-3"><Link to="/subscribe">Subscribe</Link> </div>

                    </div>
                    <div className="w-full lg:hidden border rounded-full py-2 px-3 flex items-center justify-between shadow-xl hover:shadow-2xl">
                        <Link to="/slider">
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    className="bi bi-search mx-3"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                <div>
                                    <p className="font-sans text-[14px] leading-[20px] text-[#111827]">
                                        Find your Love
                                    </p>
                                    <ul className="flex text-[12px] text-[#6b7280] leading-[16px]">
                                        <li>Near &nbsp;&nbsp;&nbsp;&nbsp; </li>
                                        <li>Far  &nbsp;&nbsp;&nbsp;&nbsp; </li>
                                        <li>Wherever you want  &nbsp;&nbsp;&nbsp;&nbsp; </li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                        <Link to="/slider">
                            <div className="bg-[#4f46e5] flex items-center justify-center h-[30px] w-[30px] rounded-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart fill-white" viewBox="0 0 16 16">
                                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                                    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className="sm:w-[245px] lg:w-[345px] hidden md:block">
                        <div className="float-right flex items-center">
                            <Link to="/slider"> <div className="border py-2 px-4  font-sans font-medium text-[#111827] rounded-full hover:border-gray-400 mx-2 hidden xl:block">
                                Find your love

                            </div></Link>

                            <Link to="/profile">
                                <div className=" hover:bg-gray-200 h-[40px] w-[40px] flex items-center justify-center rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        fill="currentColor"
                                        className="bi bi-brightness-high"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </div></Link>
                            <div className=" hover:bg-gray-200 h-[40px] w-[40px] flex items-center justify-center rounded-full notifications_dropdown_link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="bi bi-bell"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                </svg>
                                <div className="h-[8px] w-[8px] bg-[#4f46e5] rounded-full relative top-[-10px] right-[5px]" />
                            </div>
                            <div className="h-[36px] w-[36px] rounded-full mx-1 profile_dropdown_link">
                                <img
                                    src="./images/Image-1.90baa8cc883db8970fda.png"
                                    alt=""
                                    className="rounded-full"
                                />
                            </div>
                            <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full menu_icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    fill="currentColor"
                                    className="bi bi-list"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* bottom menu  */}
            <nav
                className="bg-white px-4 md:hidden fixed bottom-0 w-full"
                style={{ zIndex: 2 }}
            >
                <div className="w-full sm:w-[520px] m-auto font-sans text-[#6b7280] font-normal text-[11px] leading-1 text-center bg-white py-2 flex justify-between">
                    <Link to="/">
                        <div className="w-[60px]">
                            <div className="w-full flex justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="bi bi-search fill-[#6b7280] mx-3 hover:fill-red-500"
                                    viewBox="0 0 16 16"
                                >
                                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                </svg>
                            </div>
                            <p className="mt-1">Explore</p>
                        </div></Link>
                    <div className="w-[60px]">
                        <div className="w-full flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-heart fill-[#6b7280] hover:fill-red-500"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                        <p className="mt-1">Wishlists</p>
                    </div>
                    <Link to="/login">
                        <div className="w-[60px]">
                            <div className="w-full flex justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="bi bi-person-circle fill-[#6b7280] hover:fill-red-500"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                    />
                                </svg>
                            </div>
                            <p className="mt-1">log In</p>
                        </div></Link>
                    <div className="w-[60px] menu_icon_bottom">
                        <div className="w-full flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-list fill-[#6b7280] hover:fill-red-500"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </div>
                        <p className="mt-1">Menu</p>
                    </div>
                </div>
            </nav >
            {/* sidebar */}
            < div
                className="sidebar bg-white shadow-2xl max-w-[384px] w-full h-[100vh] fixed left-[-100%] top-0 font-sans px-4 overflow-y-scroll"
                style={{ zIndex: 3 }
                }
            >
                <div className="close_icon absolute right-[15px] top-[15px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="currentColor"
                        className="bi bi-x"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <div className="mt-6 ml-2">
                    <a
                        className="ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
                        href="/"
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
                </div>
                <p className="text-[14px] leading-[20px] font-normal text-[#374151] mt-6">
                    Discover the most outstanding articles on all topics of life. Write your
                    stories and share them
                </p>
                <div className="my-5 flex justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center justify-center h-[36px] w-[36px] bg-slate-200 rounded-full mx-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-facebook fill-[#374151]"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-center h-[36px] w-[36px] bg-slate-200 rounded-full mx-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-twitter fill-[#374151]"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-center h-[36px] w-[36px] bg-slate-200 rounded-full mx-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-youtube fill-[#374151]"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                        </div>
                        <div className="flex items-center justify-center h-[36px] w-[36px] bg-slate-200 rounded-full mx-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                fill="currentColor"
                                className="bi bi-instagram fill-[#374151]"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" bg-gray-200 h-[45px] w-[45px] flex items-center justify-center rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            className="bi bi-brightness-high"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                    </div>
                </div>
                <hr />
                <ul className="w-full list-none font-medium text-[14px] leading-[20px] text-[#111827] my-5">
                    <li className="hover:bg-slate-100 p-2 rounded-md level1_li">
                        <div className="flex items-center justify-between">
                            <p>HOME</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </div>
                    </li>
                    <div className="h-[0px] w-full level1_content overflow-hidden pl-5">
                        <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Online Booking</a>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Real Estate</a>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Home - 3</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                        <div className="flex items-center justify-between">
                            <p>FIVE COLUMNS</p>
                        </div>
                    </li>
                    <li className="hover:bg-slate-100 p-2 rounded-md mb-2 level1_li">
                        <div className="flex items-center justify-between">
                            <p>LISTING PAGE</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </div>
                    </li>
                    <div className="h-[0px] w-full level1_content overflow-hidden pl-5">
                        <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                            <li className="hover:bg-slate-100 p-2 rounded-md level2_li">
                                <div className="flex items-center justify-between">
                                    <p>Stay listing</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={12}
                                        fill="currentColor"
                                        className="bi bi-chevron-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                            </li>
                            <div className="h-[0px] w-full level2_content overflow-hidden pl-5">
                                <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Stay page</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Stay page (map)</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Stay Detail</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <li className="hover:bg-slate-100 p-2 rounded-md level2_li">
                                <div className="flex items-center justify-between">
                                    <p>Experiences listing</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={12}
                                        fill="currentColor"
                                        className="bi bi-chevron-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                            </li>
                            <div className="h-[0px] w-full level2_content overflow-hidden pl-5">
                                <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Experiences page</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Experiences page (map)</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Experiences Detail</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <li className="hover:bg-slate-100 p-2 rounded-md level2_li">
                                <div className="flex items-center justify-between">
                                    <p>Cars listing</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={12}
                                        fill="currentColor"
                                        className="bi bi-chevron-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                            </li>
                            <div className="h-[0px] w-full level2_content overflow-hidden pl-5">
                                <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Cars page</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Cars page (map)</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Cars Detail</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <li className="hover:bg-slate-100 p-2 rounded-md level2_li">
                                <div className="flex items-center justify-between">
                                    <p>Real Estate Listings</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={12}
                                        fill="currentColor"
                                        className="bi bi-chevron-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                            </li>
                            <div className="h-[0px] w-full level2_content overflow-hidden pl-5">
                                <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Real Estate Listings</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Real Estate Maps</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <li className="hover:bg-slate-100 p-2 rounded-md">
                                <div className="flex items-center justify-between">
                                    <p>Flights listing</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <li className="hover:bg-slate-100 p-2 rounded-md  level1_li">
                        <div className="flex items-center justify-between">
                            <p>TEMPLATES</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </div>
                    </li>
                    <div className="h-[0px] w-full level1_content overflow-hidden pl-5">
                        <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                            <li className="hover:bg-slate-100 p-2 rounded-md level2_li">
                                <div className="flex items-center justify-between">
                                    <p>Add listing</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height={12}
                                        fill="currentColor"
                                        className="bi bi-chevron-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </div>
                            </li>
                            <div className="h-[0px] w-full level2_content overflow-hidden pl-5">
                                <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 1</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 2</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 3</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 4</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 5</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 6</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 7</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 8</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 9</a>
                                        </div>
                                    </li>
                                    <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                        <div className="flex items-center justify-between">
                                            <a>Add listings 10</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <li className="hover:bg-slate-100 p-2 rounded-md">
                                <div className="flex items-center justify-between">
                                    <p>Checkout</p>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md">
                                <div className="flex items-center justify-between">
                                    <p>Pay done</p>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md">
                                <div className="flex items-center justify-between">
                                    <p>Author page</p>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md">
                                <div className="flex items-center justify-between">
                                    <p>Account page</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <li className="hover:bg-slate-100 p-2 rounded-md my-2 level1_li">
                        <div className="flex items-center justify-between">
                            <p>OTHER PAGES</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                fill="currentColor"
                                className="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </div>
                    </li>
                    <div className="h-[0px] w-full level1_content overflow-hidden pl-5">
                        <ul className="w-full list-none my-5 font-medium text-[14px] leading-[20px] text-[#111827]">
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Blog Page</a>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Blog Single</a>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>About</a>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Contact Us</a>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <Link to="/login">Login</Link>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Signup</a>
                                </div>
                            </li>
                            <li className="hover:bg-slate-100 p-2 rounded-md my-2">
                                <div className="flex items-center justify-between">
                                    <a>Subscription</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </ul>
                <hr />
                <div className="flex my-5">
                    <div className="bg-[#4f46e5] p-3 rounded-full w-1/2 text-center text-white font-medium">
                        Get Template
                    </div>
                    <div className="flex items-center justify-center w-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-globe fill-[#374151] hover:fill-black"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                        </svg>
                        <p className="text-[#374151] hover:text-black">&nbsp;Language&nbsp;</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            fill="currentColor"
                            className="bi bi-chevron-down fill-[#374151] hover:fill-black"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </div>
                </div>
            </div >
            {/* dropdowns */}
            < div className="" >
                <div className="profile_dropdown bg-white p-4 shadow-xl hidden w-[250px] rounded-2xl absolute top-[100px] right-[80px]">
                    <ul className="list-none font-medium text-[14px] leading-[20px] text-[#374151] ">
                        <li className="hover:bg-slate-100 p-2 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-person-circle mr-3 fill-[#374151]"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                />
                            </svg>
                            <a>Account</a>
                        </li>
                        <li className="hover:bg-slate-100 p-2 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-chat-square-text fill-[#374151] mr-3"
                                viewBox="0 0 16 16"
                            >
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <a>Messages</a>
                        </li>
                        <li className="hover:bg-slate-100 p-2 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-heart fill-[#374151] mr-3"
                                viewBox="0 0 16 16"
                            >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <a>Wishlists</a>
                        </li>
                        <li className="hover:bg-slate-100 p-2 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-house-door fill-[#374151] mr-3"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                            </svg>
                            <a>Booking</a>
                        </li>
                        <hr />
                        <li className="hover:bg-slate-100 p-2 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-question-circle-fill fill-[#374151] mr-3"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                            </svg>
                            <a>Help</a>
                        </li>
                        <li className="hover:bg-slate-100 p-2 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="bi bi-box-arrow-right fill-[#374151] mr-3"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                />
                            </svg>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
                <div className="notifications_dropdown bg-white p-4 shadow-xl hidden w-[350px] rounded-2xl absolute top-[100px] right-[140px]">
                    <h1 className="font-sans font-semibold text-[20px] leading-[28px] text-[#374151]">
                        Notifications
                    </h1>
                    <div className="my-2 flex items-center hover:bg-slate-100 rounded-lg p-2">
                        <div className="w-[50px] h-[50px] rounded-full">
                            <img
                                src="./images/Image-1.90baa8cc883db8970fda.png"
                                alt=""
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <div className="font-sans px-4">
                            <p className="text-[14px] leading-[20px] font-medium text-[#111827]">
                                Eden Tuan
                            </p>
                            <p className="text-[14px] leading-[20px] font-normal text-[#6b7280]">
                                Measure actions your users take
                            </p>
                            <p className="text-[12px] leading-[16px] font-medium text-[#9ca3af]">
                                3 minutes ago
                            </p>
                        </div>
                        <div className="w-[8px] h-[8px] rounded-full bg-[#4f46e5]" />
                    </div>
                    <div className="my-2 flex items-center hover:bg-slate-100 rounded-lg p-2">
                        <div className="w-[50px] h-[50px] rounded-full">
                            <img
                                src="./images/Image-1.90baa8cc883db8970fda.png"
                                alt=""
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <div className="font-sans px-4">
                            <p className="text-[14px] leading-[20px] font-medium text-[#111827]">
                                Leo Messi
                            </p>
                            <p className="text-[14px] leading-[20px] font-normal text-[#6b7280]">
                                Create your own targeted content
                            </p>
                            <p className="text-[12px] leading-[16px] font-medium text-[#9ca3af]">
                                1 minute ago
                            </p>
                        </div>
                        <div className="w-[8px] h-[8px] rounded-full bg-[#4f46e5]" />
                    </div>
                    <div className="my-2 flex items-center hover:bg-slate-100 rounded-lg p-2">
                        <div className="w-[50px] h-[50px] rounded-full">
                            <img
                                src="./images/Image-1.90baa8cc883db8970fda.png"
                                alt=""
                                className="h-full w-full rounded-full"
                            />
                        </div>
                        <div className="font-sans px-4">
                            <p className="text-[14px] leading-[20px] font-medium text-[#111827]">
                                Leo Kante
                            </p>
                            <p className="text-[14px] leading-[20px] font-normal text-[#6b7280]">
                                Keep track of your growth
                            </p>
                            <p className="text-[12px] leading-[16px] font-medium text-[#9ca3af]">
                                3 minutes ago
                            </p>
                        </div>
                        <div className="w-[8px] h-[8px] rounded-full bg-[#4f46e5]" />
                    </div>
                </div>
            </div >
            {/* navbar end */}
        </div >
    )
}

export default Header