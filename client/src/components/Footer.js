import React from 'react'
import logo from "./../assets/Economics Conclave.png"
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
      <footer className="flex flex-col text-white-600 body-font border-t-2 border-gray-800 mt-4 ">
        <div className="container px-5 sm:py-4 py-1 mx-auto flex items-center justify-center lg:flex-row flex-col">
          <a className="flex title-font font-medium text-gray-900" href="/">
            <img className="w-10 h-8" src={logo} alt="" />
            <span className="py-1 ml-3 sm:text-xl text-sm text-white">
              Economics Conclave
            </span>
          </a>

          <div className="text-center sm:text-xl text-sm text-gray-500 md:ml-4 lg:pl-4 lg:border-l-2 sm:border-gray-200 sm:mt-0 ">
            © 2024 Economics Conclave — All Rights Reserved
          </div>

          <div className="gap-3 lg:ml-auto flex md:mt-2 lg:mt-0 justify-center text-white items-center sm:justify-end sm:text-2xl text-sm pt-3 pt-md-0">
            <a href="https://www.instagram.com/arthamanthan.iitbbs/" target="#">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/arthamanthan/" target="#">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/arthamanthan" target="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer
