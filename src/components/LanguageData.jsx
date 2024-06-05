import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Moviecard from './Moviecard';

const LanguageData = ({ match }) => {
    const { id } = match.params;
    
    const [data, setdata] = useState([]);
    useEffect(async () => {
        const apiUrl = process.env.REACT_APP_API_URL;
        await fetch(apiUrl+'/api/section_list', {
            method: 'POST',
            body:JSON.stringify({'type_id':1,'is_home_page':1,'language_id':id}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then(function(response){ 
            return response.json()})
            .then(function(data)
            {
                let resp = data.result;
                console.log(resp)
                setdata(resp);
            }).catch(error => console.error('Error:', error)); 
    }, [id]);  
    return (
    <>
     <div className="home-body">
        <Moviecard data={data}/>  
     </div>
    </>
);
};

export default LanguageData;