import React, { useState, useEffect,useContext} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import logo from '../images/aaryaOtt.png'; 
import Language from './Language';
import { Link, NavLink} from 'react-router-dom';
import rent from '../images/rent.png';
import subscr from '../images/subscription.png'; 
import profile from '../images/profile-logo.png';
import logout from '../images/logout-logo.jpg'
import Login from './Login';
import { Contextone } from './Context';

const Navbar = () => {
    const [types, setTypes] = useState([]);

    const countercontext = useContext(Contextone);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await fetch(apiUrl+'/api/get_type', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                const data = await response.json();
                setTypes(data.result);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

     
        
    return (
        <>
            <div className="Navbar">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <Link to={'/'}>
                            <img src={logo} alt="" className="navbar-logo"/>
                        </Link>
                        <ul className='menu-bar-ul'>
                            <li>
                                <NavLink to={'/'} className="menu-bar">
                                    Home
                                </NavLink>
                            </li>
                            {types.map((type) => (
                                <li key={type.id}>
                                    <NavLink to={'/'+type.name+'/'+type.id} activeClassName="active-link" className="menu-bar">
                                        {type.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <Language />
                        
                        <Link to={'/Subscription'} >
                            <img src={subscr} alt="" className="rent-logo" style={{marginLeft:'2px', marginRight: '2px', width:'20px'}}/>
                        </Link>
                        <Link to={'/Rent'} >
                            <img src={rent} alt="" className="rent-logo" style={{marginLeft:'10px', marginBottom:'-4px',}}/>
                        </Link>
                        
                        {countercontext.isLogged && !countercontext.name ? 
                            <>
                                <img src={profile} className="btn-img" onClick = {() => countercontext.setName(true)}
                                style={{ marginBottom: '15px', marginLeft: '8px', cursor: 'pointer', height:'20px',width:'20px'}}/>
                                {countercontext.isLogged &&
                                <GoogleOAuthProvider clientId="835422974724-4gfks276e35eouulgurm686bkp2vvgri.apps.googleusercontent.com">
                                    <Login />
                                 </GoogleOAuthProvider>
}
                            </> : 
                            <>
                                <img src={profile} className="btn-img" onClick = {() => countercontext.setIsLogged(true)}
                                style={{ marginBottom: '15px', marginLeft: '8px', cursor: 'pointer', height:'20px',width:'20px'}}/>
                                {countercontext.isLogged && <GoogleOAuthProvider clientId="835422974724-4gfks276e35eouulgurm686bkp2vvgri.apps.googleusercontent.com">
                                    <Login />
                                 </GoogleOAuthProvider>}
                            </> 
                        }

                        {countercontext.isArrow &&(
                            <div>  
                               <img src={logout} className="btn-img" onClick = {() => {countercontext.setIsLogged(false);
                                countercontext.setIsArrow(false);
                                localStorage.setItem('userid', '');
                                localStorage.setItem('userPhone', '');
                            }}
                                style={{ marginBottom: '15px', marginLeft: '8px', cursor: 'pointer', height:'20px',width:'20px'}}/>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
