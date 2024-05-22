import React from 'react'

function About() {
    return (
        <div>
            <div className="flex mt-32 flex-col w-full mb-12">
                <h1 className="text-5xl text-center font-bold title-font mb-3 text-orange-400 tracking-wide md:text-5xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>ABOUT US</h1>

                <p className="text-white text-justify mt-8 text-lg md:text-xl px-6" style={{fontFamily: 'Montserrat'}}>Welcome to Arthamanthan: The Economics Conclave, organized by the Society of Finance, Economics and Business (FEBS) at IIT Bhubaneswar. Our mission is to contribute to the nation's progress by offering a platform for insightful discussions, stimulating competitions, and engaging events.
                <br /><br />
                Arthamanthan brings together thought leaders, industry experts, and passionate students to explore and debate the complexities of Indian Economics. Join us to delve into the dynamic world of economic theories, policies, and practices that shape our nation.
                <br /><br /> </p>
                <p className="text-white font-extrabold text-center mt-4 text-lg md:text-2xl px-6" style={{fontFamily: 'Montserrat'}}>Stay tuned for any forthcoming details !!</p>

            </div>

        </div>
    )
}

export default About
