import React from 'react'

import { Carousel } from "@material-tailwind/react";

const AnasayfaSlider = () => {
    return (
        <div className='h-[700px]'>
            <Carousel loop="true" className="">
                <img
                    src="https://www.djistoreturkiye.com/img/slider_settings/mic-2-banner_02.02.2024_dd2502f.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://www.djistoreturkiye.com/img/slider_settings/dji-action-4_08.11.2023_a6ca164.png"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://www.djistoreturkiye.com/img/slider_settings/dji-inspire-3_08.11.2023_b782408.png"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://www.djistoreturkiye.com/img/slider_settings/dji-pocket-3_08.11.2023_0460eba.png"
                    alt="image 4"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    )
}

export default AnasayfaSlider