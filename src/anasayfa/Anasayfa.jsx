import React from 'react'

import AnasayfaSlider from './AnasayfaSlider';
import SonCalismalar from './SonCalismalar';
import MusteriYorumlari from './MusteriYorumlari';
import Hizmetler from './Hizmetler';
import Guvencemiz from './Guvencemiz';

const Anasayfa = () => {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5,
                margin: 20,
            }}
        />
    );


    return (
        <div>
            <div className=''>
                <AnasayfaSlider />
                <SonCalismalar />
                <Guvencemiz />
                <Hizmetler />
                <MusteriYorumlari />

            </div>
        </div>
    )
}

export default Anasayfa