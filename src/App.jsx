import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

import Nav from './navbar/Nav'
import Footer from './footer/Footer'
import Anasayfa from './anasayfa/Anasayfa'
import Searchpage from './search/Searchpage'
import Iletisim from './iletisim/Iletisim'
import Hesabim from './hesabim/Hesabim'
import Kaydol from './kayit/Kaydol'
import Giris from './kayit/Giris'

function App() {

  return (
    <>
      <div className='bg-blue-100'>
        <Nav />
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path='searchpage' element={<Searchpage />} />
          <Route path='iletisim' element={<Iletisim />} />
          <Route path='hesabim' element={<Hesabim />} />
          <Route path='kayitol' element={<Kaydol />} />
          <Route path='girisyap' element={<Giris />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
