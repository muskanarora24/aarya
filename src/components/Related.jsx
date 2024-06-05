import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";

import { Link } from 'react-router-dom';

const Related = ({ data }) => {
    console.log(data)
    return (
        <>
            {data && data.length > 0 && (
                <div className="relatedVid">
                    <div class="scroll-container">
                        {data.map((type, index) => (
                            <div className="col-lg-2 col-md-12" style={{ display: 'inline-block' ,width: '256px'}} key={index}>
                                <div className="card movie-card" style={{backgroundColor:'#040714',width: '245px'}}>
                                <Link to={'/detail/'+type.id}>
                                    {type.thumbnail ? (
                                        <img src={type.thumbnail} className="card-img-top" alt="..." loading="lazy" style={{height:'330px',width: '245px'}}/>
                                    ) : (
                                        <img src={type.landscape} className="card-img-top" alt="Landscape" loading="lazy" style={{height:'330px',width: '245px'}}/>
                                    )}
                                    <h6 style={{color:'white'}}>{type.name.substring(0, 25)}</h6>                               
                                </Link>
                                </div>
                                {/* <h4>{type.name}</h4> */}
                            </div>
                            
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}


export default Related;
