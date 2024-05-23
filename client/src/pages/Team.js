import React from 'react'
import { motion } from 'framer-motion'
import ankit from './../assets/IMAGES/Ankit.jpg'
import ashish from './../assets/IMAGES/Ashish.jpg'
import adarsh from './../assets/IMAGES/Adarsh.jpg'
import sumit from './../assets/IMAGES/Sumit.jpg'
import poonam from './../assets/IMAGES/Poonam.jpg'
import shreyansh from './../assets/IMAGES/shreyansh.jpg'
import priyanshu from './../assets/IMAGES/Priyanshu.jpg'
import aditya from './../assets/IMAGES/Aditya.jpg'
import annem from './../assets/IMAGES/Annem.jpg'
import aryush from './../assets/IMAGES/Aryush.jpg'
import shrey from './../assets/IMAGES/Shrey.jpg'
import maanya from './../assets/IMAGES/Maanya.jpg'
import anubhav from './../assets/IMAGES/Anubhav.jpg'
import mokshya from './../assets/IMAGES/Mokshya.jpg'




function Team() {

    const variant = {
        entry: {
            opacity: [0, 1],
            transition: {
                duration: 0.125,
                times: [0, 1],
            }
        },
        exit: {
            opacity: [1, 0],
            transition: {
                duration: 0.125,
                times: [0, 1],
            }
        },
    }


    return (
        <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>
            <div className='min-h-screen'>

                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-3xl font-bold title-font mb-3 text-orange-400 tracking-wide md:text-5xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>ARTHAMANTHAN TEAM</h1>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-32">

                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={aryush} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Aryush Tripathi
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    FEBS Secretary
                                </p>
                            </div>
                        </div>



                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={ankit} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Ankit Singh
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Convenor
                                </p>
                            </div>
                        </div>

                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={shrey} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Shrey Jain
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Deputy Convenor
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={ashish} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Ashish Kumar Singh
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Digital and Technology Coordinator
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={poonam} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Poonam Kiran Patil
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Events and Competition Manager (Online)
                                </p>
                            </div>
                        </div>

            

                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={aditya} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Aditya Kumar Giri
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Events and Competition Manager (Offline)
                                </p>
                            </div>
                        </div>

                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={anubhav} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Anubhav Mishra
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Marketing and Publicity Manager
                                </p>
                            </div>
                        </div>

                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={annem} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Sidhartha Annem
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Media Head
                                </p>
                            </div>
                        </div>

                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={mokshya} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Mokshya Sahu
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Operation Manager
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={shreyansh} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Shreyansh Chaudhary
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Volunteer Coordinator
                                </p>
                            </div>
                        </div>

                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={maanya} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Maanya Falwaria
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Content and Communications Coordinator
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={priyanshu} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Priyanshu Gupta
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Finance and Sponsorship Manager
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={adarsh} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Adarsh Raj
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Finance and Sponsorship Manager
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src={sumit} alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Sumit Chaudhary
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Design and Creative Lead
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Team
