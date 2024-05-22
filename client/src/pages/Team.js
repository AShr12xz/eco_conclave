import React from 'react'
import {motion} from 'framer-motion'

function Team() {

    const variant = {
        entry : {
            opacity: [0,1], 
            transition:{
                duration:0.125,
                times:[0,1],
            }
        },
        exit : {
            opacity: [1,0], 
            transition:{
                duration:0.125,
                times:[0,1],
            }
        },
    }


    return (
        <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>
            <div>

                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="text-3xl font-bold title-font mb-3 text-orange-400 tracking-wide md:text-5xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>ARTHAMANTHAN TEAM</h1>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-32">
                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">

                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Founder / CEO
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Amil Evara
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Ebele Egbuna
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Support Consultant
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Maria Powers
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Director of sales
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Delia Pawelke
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Front-end Developer
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Tom Lowry
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Louise Donadieu
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Support Consultant
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Jeff Fisher
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Project Manager
                                </p>
                            </div>
                        </div>


                        <div class="text-center">
                            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto" src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Description" />
                            <div class="mt-2 sm:mt-4">
                                <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                                    Sophia Harrington
                                </h3>
                                <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                                    Project Manager
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
