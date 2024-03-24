import React from 'react'
import { Link } from "react-router-dom"
import DroneModel from "../../models/DroneModels"


export const SearchEkran: React.FC<{ drone: DroneModel }> = (props) => {
    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        {props.drone.img ?
                            <img src={props.drone.img}
                                width='123'
                                height='196'
                                alt='Drone'
                            />
                            :
                            <img src={('./../../images/air3.jpg')}
                                width='123'
                                height='196'
                                alt='Drone'
                            />
                        }
                    </div>
                    <div className='d-lg-none d-flex justify-content-center 
                        align-items-center'>
                        {props.drone.img ?
                            <img src={props.drone.img}
                                width='123'
                                height='196'
                                alt='Book'
                            />
                            :
                            <img src={('./../../images/air3.jpg')}
                                width='123'
                                height='196'
                                alt='Book'
                            />
                        }
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            {props.drone.marka}
                        </h5>
                        <h4>
                            {props.drone.title}
                        </h4>
                        <p className='card-text'>
                            {props.drone.description}
                        </p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <Link className='btn btn-md main-color text-white' to={`/checkout/${props.drone.id}`}>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}