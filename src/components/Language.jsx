import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/language.png'; 

const Language = () => {
    const [languages, setLanguages] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await fetch(apiUrl+'/api/get_language', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                const data = await response.json();
                setLanguages(data.result);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const handleLogoClick = ()=>{
        setShowDropdown(!showDropdown);
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return (
        <div>
            <img src={logo} alt="Logo" style={{width: '70%', cursor: 'pointer' ,marginRight: '0px',marginBottom : '10px'}} onClick={handleLogoClick} />
                <ul ref={dropdownRef} className={`dropdown-menu ${showDropdown ? 'show' : ''}`} style={{minWidth:'8%',height:'650%'}}>
                    {languages.map((type, index) => (
                        <li key={index}>
                            <Link to={'/Langauge/'+type.id} className="dropdown-item" onClick={handleLogoClick}>{type.name}</Link>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default Language;
