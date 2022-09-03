import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import Header from './Header';
import Footer from './Footer';

function Subscription() {
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
        }}>
        <>
          {/*Subscription*/}
          <div className="px-3 py-12    relative top-[100px]" style={{ paddingBottom: "200px" }}>
            <div className="sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1250px] m-auto font-sans font-normal text-[14px] leading-[20px] text-[#676f7b]">
              <h2 className="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center w-[330px] m-auto">
                <span className="mr-4 text-3xl md:text-4xl leading-none">💎</span>
                Subscription
              </h2>
              <p className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200 text-center">
                Pricing to fit the needs of any companies size.
              </p>
              <section className="text-neutral-600 text-sm md:text-base overflow-hidden mt-[50px]">
                <div className="grid lg:grid-cols-3 gap-5 xl:gap-8">
                  <div className="h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden border-neutral-100 dark:border-neutral-700 hover:border-[#6366f1]">
                    <div className="mb-8">
                      <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
                        Starter
                      </h3>
                      <h2 className="text-5xl leading-none flex items-center text-neutral-900 dark:text-neutral-300">
                        <span>$5</span>
                        <span className="text-lg ml-1 font-normal text-neutral-500">
                          /mo
                        </span>
                      </h2>
                    </div>
                    <nav className="space-y-4 mb-8">
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Automated Reporting
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Faster Processing
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Customizations
                        </span>
                      </li>
                    </nav>
                    <div className="flex flex-col mt-auto">
                      <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                        <span className="font-medium">Submit</span>
                      </button>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
                        {" "}
                        Literally you probably haven't heard of them jean shorts.
                      </p>
                    </div>
                  </div>
                  <div className="h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden border-primary-500 hover:border-[#6366f1]">
                    <span className="bg-primary-500 text-white px-3 py-1 tracking-widest text-xs absolute right-3 top-3 rounded-full z-10">
                      POPULAR
                    </span>
                    <div className="mb-8">
                      <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
                        Basic
                      </h3>
                      <h2 className="text-5xl leading-none flex items-center text-neutral-900 dark:text-neutral-300">
                        <span>$15</span>
                        <span className="text-lg ml-1 font-normal text-neutral-500">
                          /mo
                        </span>
                      </h2>
                    </div>
                    <nav className="space-y-4 mb-8">
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Everything in Starter
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          100 Builds
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Progress Reports
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Premium Support
                        </span>
                      </li>
                    </nav>
                    <div className="flex flex-col mt-auto">
                      <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 bg-[#6366f1]">
                        Submit
                      </button>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
                        {" "}
                        Literally you probably haven't heard of them jean shorts.
                      </p>
                    </div>
                  </div>
                  <div className="h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden border-neutral-100 dark:border-neutral-700 hover:border-[#6366f1]">
                    <div className="mb-8">
                      <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
                        Plus
                      </h3>
                      <h2 className="text-5xl leading-none flex items-center text-neutral-900 dark:text-neutral-300">
                        <span>$25</span>
                        <span className="text-lg ml-1 font-normal text-neutral-500">
                          /mo
                        </span>
                      </h2>
                    </div>
                    <nav className="space-y-4 mb-8">
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Everything in Basic
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Unlimited Builds
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Advanced Analytics
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Company Evaluations
                        </span>
                      </li>
                    </nav>
                    <div className="flex flex-col mt-auto">
                      <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                        <span className="font-medium">Submit</span>
                      </button>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
                        {" "}
                        Literally you probably haven't heard of them jean shorts.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>

      </motion.div>
      <Footer />
    </>

  )
}

export default Subscription