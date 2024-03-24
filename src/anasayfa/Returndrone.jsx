import React from 'react'
import { Link } from 'react-router-dom';

import DroneModel from '../models/DroneModels';



const Returndrone = (props) => {

  return (
    <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
      <div className='text-center'>
        {props.drone.img ?
          <img
            src={props.drone.img}
            width='151'
            height='233'
            alt="book"
          />
          :
          <img
            src={('./../../images/air3.jpg')}
            width='151'
            height='233'
            alt="book"
          />
        }
        <h6 className='mt-2'>{props.drone.title}</h6>
        <p>{props.drone.marka}</p>
        <Link className='btn main-color text-white' to={`checkout/${props.drone.id}`}>Reserve</Link>
      </div>
    </div>
  );
}

export default Returndrone;