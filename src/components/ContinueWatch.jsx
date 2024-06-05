import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import watch from '../images/watch3-icon.png';

const ContinueWatch = ({ data }) =>{
    return(
        <>
            {data && data.length > 0 && (
                <div className="relatedVid">
                    <div class="scroll-container">
                        <h4>Continue Watching</h4>
                        {data.map((type, index) => (
                            <div className="col-lg-2 col-md-12" style={{ display: 'inline-block' }} key={index}>
                                <div className="card movie-card" style={{backgroundColor:'#040714'}}>
                                    <Link to={'/detail/'+type.id}>
                                        <img src={watch} className="continue-play" alt="Play Icon"/>
                                        <img src={type.landscape} className="card-img-top" alt="..." loading="lazy" style={{height:'130px'}}/>
                                        <h6 style={{color:'white'}}>{type.name.substring(0, 25)}</h6>                               
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}


export default ContinueWatch;