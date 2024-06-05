import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Rent = ({ match }) => {
    const { id } = match.params;
    const [videos, setvid] = useState([]);
    const [tvdata, setTvData] = useState([]);

    useEffect(async () => {
        const apiUrl = process.env.REACT_APP_API_URL;
        await fetch(apiUrl+'/api/rent_video_list', {
            method: 'POST',
            body:JSON.stringify({'type_id':1,'is_home_page':1,'language_id':0}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then(function(response){ 
            return response.json()})
            .then(function(data)
            {
                let vid = data.video;
                let tv = data.tvshow;
                setTvData(tv);
                setvid(vid);

            }).catch(error => console.error('Error:', error)); 
    }, []);  
    return (
        <>
            <h3 style={{ color: 'white' }}>Rented Video</h3>
            <div className="scroll-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0px' }}>
                {videos.map((mtype, index) => (
                    <div key={index} className="card movie-card">
                        <Link to={'/detail/' + mtype.id}>
                            <h6 className="rent-price">{`₹ ${mtype.rent_price}`}</h6>
                            <img src={mtype.thumbnail} className="card-img-top" alt="..." id={mtype.id} style={{ width: '100%' }} />
                        </Link>
                    </div>
                ))}
            </div>

            <h3 style={{ color: 'white' }}>Rent Shows</h3>
            <div className="scroll-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0px' }}>
                {tvdata.map((mtype, index) => (
                    <div key={index} className="card movie-card">
                        <Link to={'/detail/' + mtype.id}>
                            <h6 className="rent-price">{`₹ ${mtype.rent_price}`}</h6>
                            <img src={mtype.thumbnail} className="card-img-top" alt="..." id={mtype.id} style={{ width: '100%' }} />
                        </Link>
                    </div>
                ))}
            </div>
        </>    
    );
};
export default Rent;
