import React from 'react'
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import DroneModel from '../models/DroneModels';
import Returndrone from './Returndrone';

const SonCalismalar = () => {
  const [drones, setDrones] = useState({});

  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const baseUrl = new URL('http://localhost:3306/api/drones');
        const url = `${baseUrl}?page=0&size=9`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();
        const loadedDrones = responseData._embedded.drones.map(droneData => new DroneModel(droneData));

        setDrones(loadedDrones);
      } catch (error) {
        console.error('Error fetching drones:', error);
      }
    };

    fetchDrones();
  }, []);

  return (
    <div className='container mt-5' style={{ height: 550 }}>
      <div className='homepage-carousel-title'>
        <h3>Find your next "I stayed up too late reading" drone.</h3>
      </div>
      <div className='carousel carousel-dark slide mt-5 
                d-none d-lg-block' data-bs-interval='false'>

        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row d-flex justify-content-center align-items-center'>
              {/* {drone.slice(0, 3).map(drone => {
                return React.createElement(Returndrone, { drone: drone, key: drone.id });
              })} */}
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row d-flex justify-content-center align-items-center'>
              {/* {drones.slice(3, 6).map(drone => (
                <Returndrone drone={drone} key={drone.id} />
              ))} */}
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row d-flex justify-content-center align-items-center'>
              {/* {drones.slice(6, 9).map(drone => (
                <Returndrone drone={drone} key={drone.id} />
              ))} */}
            </div>
          </div>
        </div>
        <button className='carousel-control-prev' type='button'
        >
          <span className='carousel-control-prev-icon' ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button'
        >
          <span className='carousel-control-next-icon' ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

    </div>
  );
}

export default SonCalismalar