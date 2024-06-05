import React, { useState, useEffect } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Link} from 'react-router-dom';

const Slideshow = ({ data }) =>{
    return(
        <>
        <div className="Slideshow" >
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                {data.map((type, index) => index === 0?
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active" aria-current="true" aria-label="Slide "></button>
                            :<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label="Slide "></button>
                        )}
                </div>
                <div class="carousel-inner">
                    {data.map((type, index) => index === 0?
                                <div className="carousel-item active">
                                    <Link to={'/detail/'+type.id} >
                                        <img src={type.full_width} height="500px" class="d-block w-100" alt="..."/>
                                    </Link>
                                </div>:
                                <div className="carousel-item ">
                                    <Link to={'/detail/'+type.id} >
                                        <img src={type.full_width} height="500px" class="d-block w-100" alt="..."/>
                                    </Link>
                                </div>
                        )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>       
        </>
    )
}


export default Slideshow;