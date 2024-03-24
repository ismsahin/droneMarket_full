import React from 'react'
import { Typography } from "@material-tailwind/react";

import drone_logo from '../../public/drone-logo.svg'

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-blue-600'>
      <footer className="w-full  p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
          <img className='h-32 cursor-pointer ms-14' src={drone_logo}  alt='Drone Market' />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; {currentYear} <a className='font-semibold text-lg text-white' href="/">Drone Market</a> All Rights Reserved.
        </Typography>
      </footer>
    </div>
  )
}

export default Footer