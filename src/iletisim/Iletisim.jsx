import React from 'react'


import {
  Card,
  Input,
  Checkbox,
  Typography,
  Breadcrumbs,
} from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { TiHome } from "react-icons/ti";
import { MdInfoOutline } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { IoMdPhonePortrait } from "react-icons/io";
import { CgPhone } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

import { Routes, Route, Link, NavLink } from 'react-router-dom'

const Iletisim = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <div className='h-[90px] md:h-[150px] bg-center bg-gray-500 bg-[url("https://images.pexels.com/photos/163007/phone-old-year-built-1955-bakelite-163007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]' >
        <div className='bg-gray-900 bg-opacity-75 w-full mx-auto h-full '>
          <h1 className=' text-2xl lg:text-4xl text-center text-white font-bold pt-1 lg:pt-6'>
            İletişim</h1>
          <div className='flex justify-center w-full '>
            <Breadcrumbs className='text-center mt-1 lg:mt-4 hover:text-red-800 duration-300'>
              <Link to="/" className='font-bold  hover:shadow-xl hover:text-red-800 duration-300'>
                <TiHome className='text-xl' /></Link>
              <Link to="/iletisim" className='font-bold  hover:shadow-xl hover:text-red-800 duration-300'>
                İletişim</Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <div className=' min-h-96'>
        <div>
          <div className='xl:grid xl:grid-cols-2 lg:w-8/12 md:gap-6 container mx-auto'>
            <div className=' mx-4 '>
              <form id='contactForm' className=" mt-20 mx-auto bg-gray-800 rounded-2xl p-6">
                <div className="">
                  <div className="relative z-0 w-full mb-5 ">
                    <input type="text"


                      name='name'
                      id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required />
                    <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Soyad</label>
                  </div>

                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input type="email"


                    name='email'
                    id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                  <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email adresi</label>
                </div>


                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input name="number"


                      type="telefon" pattern="[0]{1}[0-9]{3}[0-9]{3}[0-9]{4}" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" " required />
                    <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tel no: (0532 593 03 84)</label>
                  </div>

                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label for="message" class="block mb-2 text-red-900 text-xl font-bold ">Mesaj</label>
                  <textarea name="message"

                    required id="message" rows="4" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Sorununuzu kısaca yazınız..."></textarea>
                </div>
                
                <button type="submit" className="realative mx-auto  w-full  text-white bg-lggray hover:bg-red-800 font-extrabold focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md  px-5 py-2.5 text-center">Mesaj Gönder</button>
                
                
              </form>



            </div>
            <div className='mx-4'>
              <div className=' min-h-96 my-20 '>
                <div className='text-2xl flex'>
                  <div className='text-5xl border border-black inline-block p-3 m-5 border-dashed rounded-full text-red-900 border-red-900'><FiMail /></div>
                  <div className='m-6'>
                    <div className='text-xl lg:text-2xl font-semiboldld'>EMAİL</div>
                    <div className='text-lg lg:text-xl'>info@keskinteknikservis.com</div>
                  </div>
                </div>
                <div className='text-2xl flex'>
                  <div className='text-5xl border border-black inline-block p-3 m-5 border-dashed rounded-full text-red-900 border-red-900'><CgPhone /></div>
                  <div className='m-6'>
                    <div className='text-xl lg:text-2xl font-semiboldld'>Telefon</div>
                    <div className='text-lg lg:text-xl'>0212 462 9792</div>
                  </div>
                </div>
                <div className='text-2xl flex'>
                  <div className='text-5xl border border-black inline-block p-3 m-5 border-dashed rounded-full text-red-900 border-red-900'><IoMdPhonePortrait /></div>
                  <div className='m-6'>
                    <div className='text-xl lg:text-2xl font-semiboldld'>Cep telefon</div>
                    <div className='text-lg lg:text-xl'>0532 593 03 84</div>
                  </div>
                </div>
                <div className='text-2xl inline flex'>
                  <div className=' text-5xl border border-black inline p-3 m-5 border-dashed rounded-full text-red-900 border-red-900'><FaLocationDot className=''/></div>
                  <div className='m-6'>
                    <div className='text-xl lg:text-2xl font-semiboldld'>Adres</div>
                    <div className='text-lg lg:text-xl'>Güneştepe, Necip Fazıl Kısakürek Cd. NO:134 Güngören/İstanbul</div>
                  </div>
                </div>

              </div>

            </div>
            <div className='col-span-2 mb-20 p-6'>
              <div className=''  >
                <div className=""><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.0549089862184!2d28.974388878624186!3d41.02285329493505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e8087f4bff%3A0x791b116c3a3c9bc3!2zS2VtYW5rZcWfIEthcmFtdXN0YWZhIFBhxZ9hLCBHw7xtcsO8ayBTay4sIDM0NDI1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1699781686079!5m2!1str!2str"
                  width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>



        </div>

      </div>
    </div>
  )
}

export default Iletisim