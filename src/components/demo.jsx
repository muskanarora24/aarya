// import React, { useState, useEffect } from 'react';
// import logo from '../images/aaryaOtt.png'; 
// import {Link} from 'react-router-dom';
// import rent from '../images/rent.png';
// import subscr from '../images/subscription.png'; 

// import Language from './Language';
// import  Subscription from './Subscription';

// const Navbar = () =>{
//     const [types, setTypes] = useState([]);
//     useEffect(async () => {
//         await fetch('/api/get_type', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }
//             })
//             .then(function(response){ 
//             return response.json()})
//             .then(function(data)
//             {
//                 let resp = data.result;
//                 console.log("get");
//                 console.log(resp);
//                 setTypes(resp);
//             }).catch(error => console.error('Error:', error)); 
//     }, []);    
//     return(
//         <>
//             <div className="Navbar">
//             <nav className="navbar navbar-light">
//                 <div className="container-fluid">
//                         <Link to={'/home/1/1'}>
//                         <img src={logo} alt="" className="navbar-logo"/>
//                         </Link>
//                         <ul className='menu-bar-ul'>
//                     {types.map((type) => {
//                         return (
//                             <Link to={`/${type.name}/${type.id}`}>
//                             <li><a href='' key={type.id} className="menu-bar" >{type.name}</a></li>
//                             </Link>
//                         );
//                     })}
//                     </ul>
//                     <Language />
//                     <Link to={'/Subscription'} >
//                         <img src={subscr} alt="" className="rent-logo"/>
//                     </Link>
//                     <Link to={'/Rent'} >
//                         <img src={rent} alt="" className="rent-logo"/>
//                     </Link>
//                     <button className="navbar-btn btn btn-outline-secondary" style={{ marginBottom: '15px' }}>Login</button>
//                 </div>
//             </nav>
//             </div>
//         </>
//     )
// }

// export default Navbar;



// const Navbar = () =>{
//     const [types, setTypes] = useState([]);
//     useEffect(async () => {
//         await fetch('/api/get_type', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }
//             })
//             .then(function(response){ 
//             return response.json()})
//             .then(function(data)
//             {
//                 let resp = data.result;
//                 console.log("get");
//                 console.log(resp);
//                 setTypes(resp);
//             }).catch(error => console.error('Error:', error)); 
//     }, []);    
//     return(
//         <>
        {/* <Navba bg="dark" data-bs-theme="dark">
        <Container>
          <Navba.Brand href="#home">Navbar</Navba.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navba> */}
            {/* <div className="Navbar">
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                        <Link to={'/home/1/1'}>
                        <img src={logo} alt="" className="navbar-logo"/>
                        </Link>
                        <ul className='menu-bar-ul'>
                    {types.map((type) => {
                        return (
                            <Link to={'/home/'+type.id}>
                            <li><a href='' key={type.id} className="menu-bar" >{type.name}</a></li>
                            </Link>
                        );
                    })}
                    </ul>
                    <button className="navbar-btn btn btn-outline-secondary">Login</button>
                </div>
            </nav>
            </div> */}




            import React from 'react';
// import Recommend from './Recommend';
// import Newarrival from './Newarrival';
// import Originals from './Originals';
// import Trending from './Trending';
// import {Link} from 'react-router-dom';


// const Moviecard = ({ data }) =>{
//     return(
//         <>
//          {data.map((mtype, index) => (mtype.screen_layout === 'potrait_1' || mtype.screen_layout === 'potrait') && mtype.data ?
//          <div className="container-fluid">
//             <div className="row">
//                 <h4 className="movie-heading">{mtype.title}</h4>
//                     <div class="scroll-container">
//                         {mtype.data.map((movie, key) => {
//                             return (
//                                 <div className="col-lg-2 col-md-12" style={{ display: 'inline-block',width:'200px'}}>
//                                     <div className="card movie-card" style={{height:'260px'} }>
//                                         <Link to={'/detail/'+movie.id} >
//                                             <img src={movie.thumbnail} class="card-img-top" alt="..." id={movie.id} style={{height:'260px'} }/>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>               
//             </div>
//         </div>: (mtype.video_type == 3 || mtype.video_type == 6  || mtype.video_type == 4) && mtype.data ?
//          <div className="container-fluid">
//             <div className="row">
//             <h4 className="movie-heading">{mtype.title}</h4>
//                 <div class="scroll-container">
//                     {mtype.data.map((movie,key)=>{
//                         return(
//                             <div className="col-lg-2 col-md-12" style={{ display: 'inline-block' }}>
//                                 <div className="card movie-card">
//                                 <Link to={'/detail/'+movie.id} >
//                                     <img src={movie.image} class="card-img-top" alt="..." id={movie.id}/>
//                                 </Link>
//                                 </div> 
//                             </div>
//                             )
//                          })}
//                 </div>
//             </div>
//         </div>:
//         <div className="container-fluid">
//             <div className="row">
//             <h4 className="movie-heading">{mtype.title}</h4>
//                 <div class="scroll-container">
//                     {mtype.data.map((movie,key)=>{
//                         return(
//                         <div className="col-lg-2 col-md-12" style={{ display: 'inline-block' }}>
//                             <div className="card movie-card">
//                                 <Link to={'/detail/'+movie.id} >
//                                     <img src={movie.landscape} class="card-img-top" alt="..." id={movie.id}/>
//                                 </Link>
//                             </div> 
//                         </div>
                        
//                     )
//                     })}
//                 </div>
//             </div>
//     </div>
//             )}
            
//             {/* <Recommend />
//             <Newarrival />
//             <Originals />
//             <Trending /> */}
//         </>
//     )
// }

// export default Moviecard;



// import {React, useState} from 'react';
// import {Link} from 'react-router-dom';
// import logo from '../images/aaryaOtt.png'; 
// import { Tab, Nav, Card, Form, Button } from 'react-bootstrap';

// const Login = (props) => {
//     const [activeTab, setActiveTab] = useState("#phone");
//     const [click,setclick] = useState('none');
//     const [check,setCheck] = useState(0);
//     const handleTabClick = (eventKey) => {
//         setActiveTab(eventKey);
//     };
    
//     if(props.data != click && check == 0){
//       setclick(props.data);
//       setCheck(1)
//     }
//     const handleModalClose = () => {
//       setclick('none');
//       // setCheck(0)
//   };
//     console.log(click);
//     return (
//       <div className="modal" style={{ display: click, justifyContent: 'center', marginLeft: '50px'}}>
//             <div className="modal-dialog modal-dialog-centered ">
//                 <div className="modal-content" style={{ backgroundColor: '#202020', color: '#C8C8C8', width:'60%',height: '45vh'}}>
//                     <div className="modal-header">
//                         <h5 className="modal-title">Login</h5>
//                         <button type="button" id = "close-btn" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
//                     </div>
//                     <div className="modal-body">
//                         <Tab.Container activeKey={activeTab} onSelect={handleTabClick}>
//                             <Nav variant="pills" className="bg-light nav-pills rounded nav-fill mb-3">
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="#phone">Phone</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="#gmail">Mail</Nav.Link>
//                                 </Nav.Item>
//                             </Nav>
//                             <Tab.Content>
//                                 <Tab.Pane eventKey="#phone">
//                                     <Form>
//                                         <Form.Group className="mb-2">
//                                             <Form.Label><h6>Phone</h6></Form.Label>
//                                             <Form.Control type="text" placeholder="Enter your phone number" required  style={{ backgroundColor: '#202020',color:'white'}} id="holder"/>
//                                         </Form.Group>
//                                         <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'20px',backgroundColor:'#DC143C'}}>Confirm Login</Button>
//                                     </Form>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="#gmail">
//                                     <Form>
//                                         <Form.Group className="mb-2">
//                                             <Form.Label><h6>Email</h6></Form.Label>
//                                             <Form.Control type="email" placeholder="Enter your Mail" required  style={{ backgroundColor: '#202020', color:'white'}} id="holder"/>
//                                         </Form.Group>
//                                         <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'20px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
//                                     </Form>
//                                 </Tab.Pane>
//                             </Tab.Content>
//                         </Tab.Container>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




/*

import React, { useState, useEffect } from 'react';
import logo from '../images/aaryaOtt.png'; 
import {Link} from 'react-router-dom';
import rent from '../images/rent.png';
import subscr from '../images/subscription.png'; 
import Login from './Login';
import Language from './Language';
import  Subscription from './Subscription';

const Navbar = () =>{
    const [types, setTypes] = useState([]);
    const [click, setclick] = useState('none');
    
    useEffect(async () => {
        await fetch('/api/get_type', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then(function(response){ 
            return response.json()})
            .then(function(data)
            {
                let resp = data.result;
                console.log("get");
                console.log(resp);
                setTypes(resp);
            }).catch(error => console.error('Error:', error)); 
    }, []);    
    return(
        <>
            <div className="Navbar">
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                        <Link to={'/home/1/1'}>
                        <img src={logo} alt="" className="navbar-logo"/>
                        </Link>
                        <ul className='menu-bar-ul'>
                        <Link to={'/home/1/1'}>
                            <li><a href='' key={0} className="menu-bar" >Home</a></li>
                            </Link>
                        
                        
                    {types.map((type) => {
                        return (
                            
                            <Link to={'/'+type.name+'/'+type.id}>
                            <li><a href='' key={type.id} className="menu-bar" >{type.name}</a></li>
                            </Link>
                        );
                    })}
                    </ul>
                    <Language />
                    <Link to={'/Subscription'} >
                        <img src={subscr} alt="" className="rent-logo"/>
                    </Link>
                    <Link to={'/Rent'} >
                        <img src={rent} alt="" className="rent-logo"/>
                    </Link>
                    
                    <button class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-center" onClick ={()=>{setclick('block')}} style={{ marginBottom: '15px' }}>Login</button>
                    <Login data={click}/>

                    
                </div>
            </nav>
            </div>
            
        </>
    )
}

export default Navbar;

*/







// import React, { useState, useEffect } from 'react';
// import logo from '../images/aaryaOtt.png'; 
// import Language from './Language';
// import { Link } from 'react-router-dom';
// import rent from '../images/rent.png';
// import subscr from '../images/subscription.png'; 
// import { Tab, Nav, Form, Button } from 'react-bootstrap';

// const Navbar = () => {
//     const [types, setTypes] = useState([]);
//     const [click, setClick] = useState(false);
//     const [activeTab, setActiveTab] = useState("#phone");
//     const [phoneNumber, setPhoneNumber] = useState(""); // State to hold phone number

//     const toggleModal = () => {
//         setClick(!click);
//     }

//     const handleTabClick = (eventKey) => {
//         setActiveTab(eventKey);
//     };
    
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/api/get_type', {
//                     method: 'POST',
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                     }
//                 });
//                 const data = await response.json();
//                 setTypes(data.result);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     // Function to handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can do whatever you want with the phone number, like sending it to your backend
//         console.log('Phone number entered:', phoneNumber);
//         // Reset phone number state after submission if needed
//         setPhoneNumber("");
//     };

//     return (
//         <>
//             <div className="Navbar">
//                 <nav className="navbar navbar-light">
//                     <div className="container-fluid">
//                         <Link to={'/home/1/1'}>
//                             <img src={logo} alt="" className="navbar-logo"/>
//                         </Link>
//                         <ul className='menu-bar-ul'>
//                             <Link to={'/home/1/1'}>
//                                 <li><a href='' key={0} className="menu-bar" >Home</a></li>
//                             </Link>
//                             {types.map((type) => (
//                                 <Link to={'/'+type.name+'/'+type.id} key={type.id}>
//                                     <li><a href='' className="menu-bar">{type.name}</a></li>
//                                 </Link>
//                             ))}
//                         </ul>
//                         <Language />
//                         <Link to={'/Subscription'} >
//                             <img src={subscr} alt="" className="rent-logo"/>
//                         </Link>
//                         <Link to={'/Rent'} >
//                             <img src={rent} alt="" className="rent-logo"/>
//                         </Link>
//                         <button className="btn btn-primary waves-effect waves-light" onClick={toggleModal} style={{ marginBottom: '15px' }}>Login</button>
//                         {click && (
//                             <div className="modal" style={{ display: 'block', justifyContent: 'center', marginLeft: '50px'}}>
//                                 <div className="modal-dialog modal-dialog-centered ">
//                                     <div className="modal-content" style={{ backgroundColor: '#202020', color: '#C8C8C8', width:'60%',height: '45vh'}}>
//                                         <div className="modal-header">
//                                             <h5 className="modal-title">Login</h5>
//                                             <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
//                                         </div>
//                                         <div className="modal-body">
//                                             <Tab.Container activeKey={activeTab} onSelect={handleTabClick}>
//                                                 <Nav variant="pills" className="bg-light nav-pills rounded nav-fill mb-3">
//                                                     <Nav.Item>
//                                                         <Nav.Link eventKey="#phone">Phone</Nav.Link>
//                                                     </Nav.Item>
//                                                     <Nav.Item>
//                                                         <Nav.Link eventKey="#gmail">Mail</Nav.Link>
//                                                     </Nav.Item>
//                                                 </Nav>
//                                                 <Tab.Content>
//                                                     <Tab.Pane eventKey="#phone">
//                                                         <Form onSubmit={handleSubmit}>
//                                                             <Form.Group className="mb-2">
//                                                                 <Form.Label><h6>Phone</h6></Form.Label>
//                                                                 <Form.Control type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required style={{ backgroundColor: '#202020',color:'white'}} id="holder"/>
//                                                             </Form.Group>
//                                                             <div style={{textAlign:'center'}}>
//                                                                 <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
//                                                             </div>
//                                                         </Form>
//                                                     </Tab.Pane>
//                                                     <Tab.Pane eventKey="#gmail">
//                                                         <Form>
//                                                             <Form.Group className="mb-2">
//                                                                 <Form.Label><h6>Email</h6></Form.Label>
//                                                                 <Form.Control type="email" placeholder="Enter your Mail" required  style={{ backgroundColor: '#202020', color:'white'}} id="holder"/>
//                                                             </Form.Group>
//                                                         </Form>
//                                                     </Tab.Pane>
//                                                 </Tab.Content>
//                                             </Tab.Container>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom';
// import styled from "styled-components";
// import play from '../images/play-icon-black.png';
// import grp from '../images/group-icon.png';
// import Footer from './Footer/Footer.jsx';
// import {Link} from 'react-router-dom';
// import Related from './Related';
// import ClipLoader from "react-spinners/ClipLoader";


// function Detail(props){
//     const {id} = useParams();
//     const index = id-1;
//     const [detail, setDetail] = useState([]);
//     const [related, setRelated] = useState([]);
//     const [loading, setLoading] = useState(false);
//     useEffect(async () => {
//       setLoading(true);
//         await fetch('/api/section_detail', {
//             method: 'POST',
//             body:JSON.stringify({'type_id':1,'video_id':id,'upcoming_type':0,'video_type':1}),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }
//             })
//             .then(function(response){
//             return response.json()})
//             .then(function(data)
//             {
//               setDetail(data.result);
//               setRelated(data.get_related_video);
//             }).catch(error => console.error('Error:', error)); 
//     }, [id]);

//       function formatVideoDuration(durationInMillis) {
//         const totalSeconds = Math.floor(durationInMillis / 1000);

//         const minutes = Math.floor(totalSeconds / 60);
//         const seconds = totalSeconds % 60;

//         return `${minutes} minutes ${seconds} seconds`;
//       }

//       const formattedvideo = formatVideoDuration(detail.video_duration)
//       const releaseYear = new Date(detail.release_date).getFullYear();
//       // const getWidth = () => {
//       //   const textLength = detail.age_restriction ? detail.age_restriction.length : 0;
//       //   return `${textLength * 30}px`;
//       // };
      
//     return(
//       <>
//       <div>
//         {loading ? (
//           <ClipLoader
//             color={'#000000'}
//             loading={loading}
            
//             size={100}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         ) : (
//           <div className="container-fluid1">
//             <ContentMeta width="50%">
//               <SubTitle>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <h5 style={{ margin: '0', padding: '0' }}>{detail.name}</h5>
//                   <div style={{ marginLeft: '10px', border: '1px solid black', padding: '5px', backgroundColor: 'gray', borderRadius: '5px', minWidth: '50px' }}>
//                     <h5 style={{ margin: '0', padding: '0' }}>{detail.age_restriction}</h5>
//                   </div>
//                 </div>
//                 {releaseYear}
//                 <br />
//                 <br />
//                 {formattedvideo}
//                 <br />
//                 <br />
//                 Category : {detail.category_name}
//               </SubTitle>
//               <Controls>
//                 <Link to={{ pathname: '/player', state: detail.url_video_id }}>
//                   <Player>
//                     <img src={play} alt="" />
//                     <span>Watch Now</span>
//                   </Player>
//                 </Link>
//               </Controls>
//             </ContentMeta>
    
//             <Background>
//               <img alt="..." src={detail.full_width} />
//             </Background>
//             <ImageTitle>
//               {/* <img alt={detail.name} src={detail.thumbnail} height="400px" /> */}
//             </ImageTitle>
//           </div>
//         )}
//         <Related data={related} />
//       </div>
//     </>
    
//     )
// }


// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   img {
//     width: 100%;
//     height: 80%;
//     object-fit: cover;
//     opacity: 0.3;
//     // filter: blur(50px);
//     // -webkit-filter: blur(5px);
//   }
// `;


// const ImageTitle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center; 
//   position: relative; 
//   height: 30vw;
//   min-height: 170px;
//   margin-bottom: 25px;
//   padding-bottom: 24px; 
//   width: 100%;
//   img {
//     max-width: 600px;
//     min-width: 200px;
//     width: 75vw;
//     margin-bottom: 25px;
//     position: absolute; 
//     bottom: 0; 
//     border-radius: 20px;
//   }
// `;


// const ContentMeta = styled.div`
//   max-width: 874px;
//   margin-bottom: -110px;
//   margin-left: -101px; 
//   display: flex;
//   flex-direction: column;
//   align-items: center; 
// `;

// const Controls = styled.div`
//   align-items: center;
//   display: flex;
//   flex-flow: row nowrap;
//   margin-left : 45px;
//   min-height: 56px;
// `;

// const Player = styled.button`
//   font-size: 15px;
//   padding: 0px 114px; 
//   width: fit-content; 
//   margin : 0px 72px -100px 100px;
//   height: 56px;
//   border-radius: 4px;
//   cursor: pointer;
//   display: flex;
//   align-items: center; /* Align items vertically */
//   justify-content: center; /* Align items horizontally */
//   letter-spacing: 1.8px;
//   text-transform: uppercase;
//   background: rgb(249, 249, 249);
//   // border: none;
//   border-radius: 30px;
//   color: rgb(0, 0, 0);
//   img {
//     width: 32px;
//     margin-right: 8px; /* Add some right margin to separate the icon and text */
//   }
//   span {
//     white-space: nowrap; /* Prevent wrapping */
//   }
//   &:hover {
//     background: rgb(198, 198, 198);
//   }
//   @media (max-width: 768px) {
//     height: 45px;
//     padding: 0px 12px;
//     font-size: 12px;
//     img {
//       width: 25px;
//     }
//   }
// `;


// // const AddList = styled.div`
// //   margin-right: 16px;
// //   height: 44px;
// //   width: 44px;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   background-color: rgba(0, 0, 0, 0.6);
// //   border-radius: 50%;
// //   border: 2px solid white;
// //   cursor: pointer;
// //   span {
// //     background-color: rgb(249, 249, 249);
// //     display: inline-block;
// //     &:first-child {
// //       height: 2px;
// //       transform: translate(1px, 0px) rotate(0deg);
// //       width: 16px;
// //     }
// //     &:nth-child(2) {
// //       height: 16px;
// //       transform: translateX(-8px) rotate(0deg);
// //       width: 2px;
// //     }
// //   }
// // `;

// // const GroupWatch = styled.div`
// //   height: 44px;
// //   width: 44px;
// //   border-radius: 50%;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   cursor: pointer;
// //   background: white;
// //   div {
// //     height: 40px;
// //     width: 40px;
// //     background: rgb(0, 0, 0);
// //     border-radius: 50%;
// //     img {
// //       width: 100%;
// //     }
// //   }
// // `;

// const SubTitle = styled.div`
//   color: rgb(249, 249, 249);
//   font-size: 15px;
//   margin-bottom : 45px;
//   margin-right : -40px;
//   min-height: 20px;
//   text-align : center;
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const Description = styled.div`
//   line-height: 1.4;
//   font-size: 20px;
//   padding: 16px 0px;
//   color: rgb(249, 249, 249);
//   text-align: center; 
//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;



// export default Detail;



                                            // <Tab.Container activeKey={activeTab}>
                                            //     <Nav variant="pills" className="bg-light nav-pills rounded nav-fill mb-3">
                                            //         <Nav.Item>
                                            //             <Nav.Link eventKey="#phone">Phone</Nav.Link>
                                            //         </Nav.Item>
                                            //         <Nav.Item>
                                            //             <Nav.Link eventKey="#gmail">Mail</Nav.Link>
                                            //         </Nav.Item>
                                            //     </Nav>
                                            //     <Tab.Content onSubmit={handleSubmit}>
                                            //         <Tab.Pane eventKey="#phone">
                                            //             <Form onSubmit={handleSubmit}>
                                            //                 <Form.Group className="mb-2">
                                            //                     <Form.Label><h6>Phone</h6></Form.Label>
                                            //                     <Form.Control type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required  style={{ backgroundColor: '#202020',color:'white'}} id="holder"/>
                                            //                 </Form.Group>
                                            //                 <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
                                            //             </Form>
                                            //         </Tab.Pane>
                                            //         <Tab.Pane eventKey="#gmail">
                                            //             <Form>
                                            //                 <Form.Group className="mb-2">
                                            //                     <Form.Label><h6>Email</h6></Form.Label>
                                            //                     <Form.Control type="email" placeholder="Enter your Mail" required  style={{ backgroundColor: '#202020', color:'white'}} id="holder"/>
                                            //                 </Form.Group>
                                            //                 <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
                                            //             </Form>
                                            //         </Tab.Pane>
                                            //         <div style={{textAlign:'center'}}>
                                            //         </div>
                                            //     </Tab.Content>
                                            // </Tab.Container>







{/* <Tab.Container activeKey={activeTab} onSelect={handleTabClick}>
    <div class="custom-nav">
        <div class="nav-item">
            <button class="nav-link" onClick={() => setActiveTab("#video")}>Related Video</button>
        </div>
        <div class="nav-item">
            <button class="nav-link" onClick={() => setActiveTab("#details")}>Details</button>
        </div>
    </div>
    <div class="tab-content">
        <div class={`tab-pane ${activeTab === "#video" ? "active" : ""}`}>
            <Related data={related} />
        </div>
        <div class={`tab-pane ${activeTab === "#details" ? "active" : ""}`}>
            <h1>Details</h1>
        </div>
    </div>
</Tab.Container> */}

// .custom-nav {
//     display: flex;
//     background-color: #040714;
//     color:white;
//     text-align: center;
//     border-radius: 10px; /* Rounded corners */
//     /* margin-bottom: 20px; Bottom margin */
// }

// .nav-item {
//     flex: 1;
//     margin-left: 130px;
//     text-align: center;
// }

// .nav-link {
//     display: block;
//     padding: 10px;
//     cursor: pointer;
// }

// .tab-content {
//     border: 1px solid #ddd; /* Gray border */
//     border-radius: 10px;
//     padding: 20px;
// }

// .tab-pane {
//     display: none;
// }

// .tab-pane.active {
//     display: block;
// }


// nav bar login
/*<div className="modal-body">
<Tab.Container activeKey={activeTab} onSelect={handleTabClick}>
    <Nav variant="pills" className="bg-light nav-pills rounded nav-fill mb-3">
        <Nav.Item>
            <Nav.Link eventKey="#phone">Phone</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="#gmail">Mail</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content onSubmit={handleSubmit}>
        <Tab.Pane eventKey="#phone">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Label><h6>Phone</h6></Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required  style={{ backgroundColor: '#202020',color:'white'}} id="holder"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
            </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="#gmail">
            <Form>
                <Form.Group className="mb-2">
                    <Form.Label><h6>Email</h6></Form.Label>
                    <Form.Control type="email" placeholder="Enter your Mail" required  style={{ backgroundColor: '#202020', color:'white'}} id="holder"/>
                </Form.Group>
                <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
            </Form>
        </Tab.Pane>
        <div style={{textAlign:'center'}}>
        </div>
    </Tab.Content>
</Tab.Container>
</div> */



// import React, { useState } from 'react';

// const YourComponent = () => {
//     const [showOTP, setShowOTP] = useState(false); // State variable to show/hide OTP page
//     const [phoneNumber, setPhoneNumber] = useState(''); // State variable to store phone number

//     // Function to handle phone number submission
//     const handlePhoneSubmit = (e) => {
//         e.preventDefault();
//         // Your logic to verify phone number and show OTP page
//         setShowOTP(true);
//     };

//     // Function to handle OTP submission
//     const handleOTPSubmit = (e) => {
//         e.preventDefault();
//         // Your logic to verify OTP and proceed
//     };

//     return (
//         <div>
//             {/* Your existing modal code */}

//             {/* Phone number form */}
//             {!showOTP && (
//                 <Tab.Pane eventKey="#phone">
//                     <Form onSubmit={handlePhoneSubmit}>
//                         <Form.Group className="mb-2">
//                             <Form.Label><h6>Phone</h6></Form.Label>
//                             <Form.Control type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required style={{ backgroundColor: '#202020', color: 'white' }} id="holder" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{ marginTop: '25px', backgroundColor: '#DC143C' }}>Confirm Login</Button>
//                     </Form>
//                 </Tab.Pane>
//             )}

//             {/* OTP page */}
//             {showOTP && (
//                 <Tab.Pane eventKey="#otp">
//                     {/* Your OTP form */}
//                     <Form onSubmit={handleOTPSubmit}>
//                         {/* OTP input field and submit button */}
//                     </Form>
//                 </Tab.Pane>
//             )}
//         </div>
//     );
// };

// export default YourComponent;


// navbar 


// import React, { useState, useEffect } from 'react';
// import logo from '../images/aaryaOtt.png'; 
// import Language from './Language';
// import { Link, NavLink} from 'react-router-dom';
// import rent from '../images/rent.png';
// import subscr from '../images/subscription.png'; 
// import profile from '../images/profile-logo.png';
// import { Tab, Nav, Form, Button } from 'react-bootstrap';

// const Navbar = () => {
//     const [types, setTypes] = useState([]);
//     const [click, setClick] = useState(false);
//     const [activeTab, setActiveTab] = useState("#phone");
//     const [phoneNumber, setPhoneNumber] = useState(""); 
//     const [verify, setverify] = useState([])
//     const [Otp, setOtp] = useState("");
//     // const [LoginSuccess, setLoginSuccess] = useState(false);
//     const toggleModal = () => {
//         setClick(!click);
//     }

//     const handleTabClick = (eventKey) => {
//         setActiveTab(eventKey);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setActiveTab("#otp")
//         fetchOTP(phoneNumber)
//     };
//     const OtpSubmit= (e)=>{
//         e.preventDefault();
//         VerifyData(phoneNumber, Otp)
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/api/get_type', {
//                     method: 'POST',
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                     }
//                 });
//                 const data = await response.json();
//                 setTypes(data.result);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//         fetchData();
//     }, []);

     
//         const fetchOTP = async (phoneNumber) => {
//             if (phoneNumber){
//                 try {
//                     const response = await fetch('/api/sendotp', {
//                         method: 'POST',
//                         body: JSON.stringify({ mobile: phoneNumber }),
//                         headers: {
//                             'Content-type': 'application/json; charset=UTF-8',
//                         }
//                     });
//                     const data = await response.json();
//                     if (data.Status === "Error") {
//                         // Handle error
//                         console.error('Error:', data.Details);
//                     } else {
//                         // Handle success
//                         setPhoneNumber(data.result);
//                         console.log("User profile:", data.result);
//                     }
//                 } catch (error) {
//                     console.error('Error:', error);
//                 }
//             } else {
//                 console.log("No phone number provided");
//             }
//         };
        
//         const VerifyData = async(phoneNumber,Otp) => {
//             try {
//                 const response = await fetch('/api/verifyotp', {
//                     method: 'POST',
//                     body: JSON.stringify({mobile:phoneNumber, token:Otp }),
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                     }
//                 });
//                 const data = await response.json();
//                 setverify(data.status);
//                 console.log("otpset")
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
        
//         // if(verify === 200){
//         //     setLoginSuccess(true);
//         //     console.log(LoginSuccess)
//         // }
        
//     return (
//         <>
//             <div className="Navbar">
//                 <nav className="navbar navbar-light">
//                     <div className="container-fluid">
//                         <Link to={'/home/1/1'}>
//                             <img src={logo} alt="" className="navbar-logo"/>
//                         </Link>
//                         <ul className='menu-bar-ul'>
//                             <NavLink to={'/home/1/1'} activeClassName="active-link">
//                                 <li><a href='' key={0} className="menu-bar" >Home</a></li>
//                             </NavLink>
//                             {types.map((type) => (
//                                 <NavLink to={'/'+type.name+'/'+type.id} key={type.id} activeClassName="active-link">
//                                     <li><a href='' className="menu-bar">{type.name}</a></li>
//                                 </NavLink>
//                             ))}
//                         </ul>

//                         <Language />
                        
//                         <Link to={'/Subscription'} >
//                             <img src={subscr} alt="" className="rent-logo" style={{marginLeft:'2px', marginRight: '2px'}}/>
//                         </Link>
//                         <Link to={'/Rent'} >
//                             <img src={rent} alt="" className="rent-logo" style={{marginLeft:'6px', marginBottom:'-4px'}}/>
//                         </Link>
//                         <img src={profile} className="btn-img" onClick={toggleModal}
//                         style={{ marginBottom: '15px', marginLeft: '6px', cursor: 'pointer', height:'20px',width:'20px'}}/>
//                         {click && (
//                             <div className="modal" style={{ display: 'block', justifyContent: 'center', marginLeft: '50px'}}>
//                                 <div className="modal-dialog modal-dialog-centered ">
//                                     <div className="modal-content" style={{ backgroundColor: '#202020', color: '#C8C8C8', width:'60%',height: '45vh'}}>
//                                         <div className="modal-header">
//                                             <h5 className="modal-title">Login</h5>
//                                             <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
//                                         </div>
//                                         <div className="modal-body">
//                                             <Tab.Container activeKey={activeTab} onSelect={handleTabClick}>
                                                
//                                                 <Nav variant="pills" className="bg-light nav-pills rounded nav-fill mb-3">
//                                                     <Nav.Item>
//                                                         <Nav.Link eventKey="#phone">Phone</Nav.Link>
//                                                     </Nav.Item>
//                                                     <Nav.Item>
//                                                         <Nav.Link eventKey="#gmail">Mail</Nav.Link>
//                                                     </Nav.Item>
//                                                 </Nav>
//                                                 <Tab.Content>
//                                                     <Tab.Pane eventKey="#phone">
//                                                         <Form onSubmit={handleSubmit}>
//                                                             <Form.Group className="mb-2">
//                                                                 <Form.Label><h6>Phone</h6></Form.Label>
//                                                                 <Form.Control type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required  style={{ backgroundColor: '#202020',color:'white'}} id="holder"/>
//                                                             </Form.Group>
//                                                             <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
//                                                         </Form>
//                                                     </Tab.Pane>
//                                                     <Tab.Pane eventKey="#gmail">
//                                                         <Form>
//                                                             <Form.Group className="mb-2">
//                                                                 <Form.Label><h6>Email</h6></Form.Label>
//                                                                 <Form.Control type="email" placeholder="Enter your Mail" required  style={{ backgroundColor: '#202020', color:'white'}} id="holder"/>
//                                                             </Form.Group>
//                                                             <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Login</Button>
//                                                         </Form>
//                                                     </Tab.Pane>
//                                                     {activeTab === "#otp" && (
//                                                         <Tab.Pane eventKey="#otp">
//                                                             <Form onSubmit={OtpSubmit}>
//                                                                 <Form.Group className="mb-2">
//                                                                     <Form.Label><h6>Enter OTP</h6></Form.Label>
//                                                                     <Form.Control type="text" placeholder="Enter OTP" value={Otp} onChange={(e) => setOtp(e.target.value)} required  style={{ backgroundColor: '#202020', color:'white'}} id="holder"/>
//                                                                 </Form.Group>
//                                                                 <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Confirm Otp</Button>
//                                                             </Form>
//                                                         </Tab.Pane>
//                                                     )}
//                                                     <div style={{textAlign:'center'}}>
//                                                     </div>
//                                                 </Tab.Content>                                                
//                                             </Tab.Container>
//                                             </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </nav>
//             </div>
//         </>
//     )
// }

// export default Navbar;




   //88888888888888888888888*************************            // detail popup

import React, { useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import play from '../images/play-icon-black.png';
import {Link} from 'react-router-dom';
import Related from './Related';
import {SyncLoader} from "react-spinners";
import { Contextone } from './Context';
import profile from '../images/profile-logo.png';
import Login from './Login';

function Detail(props){
    const {id} = useParams();
    const index = id-1;
    const [detail, setDetail] = useState([]);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('#video');

    const countercontext = useContext(Contextone);
    console.log(countercontext)

    useEffect(async () => {
      setLoading(true);
        await fetch('/api/section_detail', {
            method: 'POST',
            body:JSON.stringify({'type_id':1,'video_id':id,'upcoming_type':0,'video_type':1}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then(function(response){
            return response.json()})
            .then(function(data)
            {
              setLoading(false)
              setDetail(data.result);
              setRelated(data.get_related_video);
            }).catch(error => console.error('Error:', error)); 
    }, [id]);

    function formatVideoDuration(durationInMillis) {
      const totalSeconds = Math.floor(durationInMillis / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const hours = Math.floor(minutes / 60);
      
      if (hours >= 1) {
          const remainingMinutes = minutes % 60;
          return `${hours} hours ${remainingMinutes} minutes`;
      } else {
          return `${minutes} minutes`;
      }
  }

      const formattedvideo = formatVideoDuration(detail.video_duration)
      const releaseYear = new Date(detail.release_date).getFullYear();
      
    return(
      <>
      <div>
        {loading ? (
          <div className="loader-set">
          <SyncLoader
            color={'#0000CD'}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
        ) : (
          <div className="container-fluid1">
            <ContentMeta width="50%">
              <SubTitle>
                <div style={{ display: 'flex', marginLeft:'70px'}}>
                  <h5 style={{ marginleft: '0', padding: '0'}}>{detail.name}</h5>
                  <div style={{ marginLeft: '10px', marginTop: '-5px', border: '1px solid black', padding: '5px', backgroundColor: 'gray', borderRadius: '5px', minWidth: '50px' }}>
                    <h5 style={{ margin: '0', padding: '0' }}>{detail.age_restriction}</h5>
                  </div>
                </div>
                {releaseYear}
                <br />
                <br />
                {formattedvideo}
                <br />
                <br />
                Category : {detail.category_name}
              </SubTitle>
              <Controls>
                {countercontext.isLogged ? 
                  <>
                      <Link to={{ pathname: '/player', state: detail.url_video_id }}>
                        <Player>
                        <img src={play} alt="" />
                        <span>Watch Now</span>
                      </Player>
                      </Link>
                  </> : 
                  <>
                      <Player>
                        <img src={play} alt="" />
                        <span onClick={() => countercontext.setIsLogged(true)}>Watch Now</span>
                        {countercontext.isLogged && <Login />}
                      </Player>
                  </> 
                }
              </Controls>
            </ContentMeta>
    
            <Background>
              <img alt="..." src={detail.full_width} />
            </Background>
            <ImageTitle>
              {/* <img alt={detail.name} src={detail.thumbnail} height="400px" /> */}
            </ImageTitle>
          </div>
        )}
        
        <div class="custom-tabs" id={activeTab}>
          <div class="custom-nav">
              <div class="nav-item">
                  <button class="nav-link" onClick={() => setActiveTab("#video")}>Related Video</button>
              </div>
              <div class="nav-item">
                  <button class="nav-link" onClick={() => setActiveTab("#details")}>Details</button>
              </div>
          </div>
          <div class="tab-content">
              <div class={`tab-pane ${activeTab === "#video" ? "active" : ""}`}>
                  <Related data={related} />
              </div>
              <div class={`tab-pane ${activeTab === "#details" ? "active" : ""}`} style={{justifycontent: 'space-between',marginBottom:'25px'}}>
                <div style={{color:'rgba(255, 99, 71, 0.5)', marginLeft:'10px',}}>
                  {detail.description?.split(',').map((line, index) => (
                  <div key={index}>{line}</div>
                  ))}
                </div>
                <div className="con" style={{color:'rgba(255, 99, 71, 0.5)', textAlign:'right',marginRight: '50px' }}>
                  <p>helo</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
    )
}


const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    opacity: 0.3;
    // filter: blur(50px);
    // -webkit-filter: blur(5px);
  }
`;


const ImageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative; 
  height: 30vw;
  min-height: 170px;
  margin-bottom: 25px;
  padding-bottom: 24px; 
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 75vw;
    margin-bottom: 25px;
    position: absolute; 
    bottom: 0; 
    border-radius: 20px;
  }
`;


const ContentMeta = styled.div`
  max-width: 874px;
  margin-bottom: -110px;
  margin-left: -101px; 
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin-left : 45px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  padding: 0px 114px; 
  width: fit-content; 
  margin : 0px 72px -100px 100px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: center; /* Align items horizontally */
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  // border: none;
  border-radius: 30px;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
    margin-right: 8px; /* Add some right margin to separate the icon and text */
  }
  span {
    white-space: nowrap; /* Prevent wrapping */
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    img {
      width: 25px;
    }
  }
`;


// const AddList = styled.div`
//   margin-right: 16px;
//   height: 44px;
//   width: 44px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
//   border-radius: 50%;
//   border: 2px solid white;
//   cursor: pointer;
//   span {
//     background-color: rgb(249, 249, 249);
//     display: inline-block;
//     &:first-child {
//       height: 2px;
//       transform: translate(1px, 0px) rotate(0deg);
//       width: 16px;
//     }
//     &:nth-child(2) {
//       height: 16px;
//       transform: translateX(-8px) rotate(0deg);
//       width: 2px;
//     }
//   }
// `;

// const GroupWatch = styled.div`
//   height: 44px;
//   width: 44px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   background: white;
//   div {
//     height: 40px;
//     width: 40px;
//     background: rgb(0, 0, 0);
//     border-radius: 50%;
//     img {
//       width: 100%;
//     }
//   }
// `;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-bottom : 45px;
  margin-right : -40px;
  min-height: 20px;
  text-align : center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  text-align: center; 
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;



export default Detail;

// detail old // *******************************************
/*

import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import play from '../images/play-icon-black.png';
import grp from '../images/group-icon.png';
import Footer from './Footer/Footer.jsx';
import {Link} from 'react-router-dom';
import Related from './Related';
import {SyncLoader} from "react-spinners";
import { Tab} from 'react-bootstrap';


function Detail(props){
    const {id} = useParams();
    const index = id-1;
    const [detail, setDetail] = useState([]);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('#video');
    useEffect(async () => {
      setLoading(true);
        await fetch('/api/section_detail', {
            method: 'POST',
            body:JSON.stringify({'type_id':1,'video_id':id,'upcoming_type':0,'video_type':1}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then(function(response){
            return response.json()})
            .then(function(data)
            {
              setLoading(false)
              setDetail(data.result);
              setRelated(data.get_related_video);
            }).catch(error => console.error('Error:', error)); 
    }, [id]);

    function formatVideoDuration(durationInMillis) {
      const totalSeconds = Math.floor(durationInMillis / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const hours = Math.floor(minutes / 60);
      
      if (hours >= 1) {
          const remainingMinutes = minutes % 60;
          return `${hours} hours ${remainingMinutes} minutes`;
      } else {
          return `${minutes} minutes`;
      }
  }

      const formattedvideo = formatVideoDuration(detail.video_duration)
      const releaseYear = new Date(detail.release_date).getFullYear();
      
    return(
      <>
      <div>
        {loading ? (
          <div className="loader-set">
          <SyncLoader
            color={'#0000CD'}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
        ) : (
          <div className="container-fluid1">
            <ContentMeta width="50%">
              <SubTitle>
                <div style={{ display: 'flex', marginLeft:'70px'}}>
                  <h5 style={{ marginleft: '0', padding: '0'}}>{detail.name}</h5>
                  <div style={{ marginLeft: '10px', marginTop: '-5px', border: '1px solid black', padding: '5px', backgroundColor: 'gray', borderRadius: '5px', minWidth: '50px' }}>
                    <h5 style={{ margin: '0', padding: '0' }}>{detail.age_restriction}</h5>
                  </div>
                </div>
                {releaseYear}
                <br />
                <br />
                {formattedvideo}
                <br />
                <br />
                Category : {detail.category_name}
              </SubTitle>
              <Controls>
                <Link to={{ pathname: '/player', state: detail.url_video_id }}>
                  <Player>
                    <img src={play} alt="" />
                    <span>Watch Now</span>
                  </Player>
                </Link>
              </Controls>
            </ContentMeta>
    
            <Background>
              <img alt="..." src={detail.full_width} />
            </Background>
            <ImageTitle>
             // {/* <img alt={detail.name} src={detail.thumbnail} height="400px" /> */
    //           </ImageTitle>
    //           </div>
    //         )}
            
    //         <div class="custom-tabs" id={activeTab}>
    //           <div class="custom-nav">
    //               <div class="nav-item">
    //                   <button class="nav-link" onClick={() => setActiveTab("#video")}>Related Video</button>
    //               </div>
    //               <div class="nav-item">
    //                   <button class="nav-link" onClick={() => setActiveTab("#details")}>Details</button>
    //               </div>
    //           </div>
    //           <div class="tab-content">
    //               <div class={`tab-pane ${activeTab === "#video" ? "active" : ""}`}>
    //                   <Related data={related} />
    //               </div>
    //               <div class={`tab-pane ${activeTab === "#details" ? "active" : ""}`} style={{justifycontent: 'space-between',marginBottom:'25px'}}>
    //                 <div style={{color:'rgba(255, 99, 71, 0.5)', marginLeft:'10px',}}>
    //                   {detail.description?.split(',').map((line, index) => (
    //                   <div key={index}>{line}</div>
    //                   ))}
    //                 </div>
    //                 <div className="con" style={{color:'rgba(255, 99, 71, 0.5)', textAlign:'right',marginRight: '50px' }}>
    //                   <p>helo</p>
    //                 </div>
    //               </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //     )
    // }
    
    
    // const Background = styled.div`
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   z-index: -1;
    //   img {
    //     width: 100%;
    //     height: 80%;
    //     object-fit: cover;
    //     opacity: 0.3;
    //     // filter: blur(50px);
    //     // -webkit-filter: blur(5px);
    //   }
    // `;
    
    
    // const ImageTitle = styled.div`
    //   display: flex;
    //   justify-content: center;
    //   align-items: center; 
    //   position: relative; 
    //   height: 30vw;
    //   min-height: 170px;
    //   margin-bottom: 25px;
    //   padding-bottom: 24px; 
    //   width: 100%;
    //   img {
    //     max-width: 600px;
    //     min-width: 200px;
    //     width: 75vw;
    //     margin-bottom: 25px;
    //     position: absolute; 
    //     bottom: 0; 
    //     border-radius: 20px;
    //   }
    // `;
    
    
    // const ContentMeta = styled.div`
    //   max-width: 874px;
    //   margin-bottom: -110px;
    //   margin-left: -101px; 
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center; 
    // `;
    
    // const Controls = styled.div`
    //   align-items: center;
    //   display: flex;
    //   flex-flow: row nowrap;
    //   margin-left : 45px;
    //   min-height: 56px;
    // `;
    
    // const Player = styled.button`
    //   font-size: 15px;
    //   padding: 0px 114px; 
    //   width: fit-content; 
    //   margin : 0px 72px -100px 100px;
    //   height: 56px;
    //   border-radius: 4px;
    //   cursor: pointer;
    //   display: flex;
    //   align-items: center; /* Align items vertically */
    //   justify-content: center; /* Align items horizontally */
    //   letter-spacing: 1.8px;
    //   text-transform: uppercase;
    //   background: rgb(249, 249, 249);
    //   // border: none;
    //   border-radius: 30px;
    //   color: rgb(0, 0, 0);
    //   img {
    //     width: 32px;
    //     margin-right: 8px; /* Add some right margin to separate the icon and text */
    //   }
    //   span {
    //     white-space: nowrap; /* Prevent wrapping */
    //   }
    //   &:hover {
    //     background: rgb(198, 198, 198);
    //   }
    //   @media (max-width: 768px) {
    //     height: 45px;
    //     padding: 0px 12px;
    //     font-size: 12px;
    //     img {
    //       width: 25px;
    //     }
    //   }
    // `;
    
    
    // const AddList = styled.div`
    //   margin-right: 16px;
    //   height: 44px;
    //   width: 44px;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   background-color: rgba(0, 0, 0, 0.6);
    //   border-radius: 50%;
    //   border: 2px solid white;
    //   cursor: pointer;
    //   span {
    //     background-color: rgb(249, 249, 249);
    //     display: inline-block;
    //     &:first-child {
    //       height: 2px;
    //       transform: translate(1px, 0px) rotate(0deg);
    //       width: 16px;
    //     }
    //     &:nth-child(2) {
    //       height: 16px;
    //       transform: translateX(-8px) rotate(0deg);
    //       width: 2px;
    //     }
    //   }
    // `;
    
    // const GroupWatch = styled.div`
    //   height: 44px;
    //   width: 44px;
    //   border-radius: 50%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   cursor: pointer;
    //   background: white;
    //   div {
    //     height: 40px;
    //     width: 40px;
    //     background: rgb(0, 0, 0);
    //     border-radius: 50%;
    //     img {
    //       width: 100%;
    //     }
    //   }
    // `;
    
    // const SubTitle = styled.div`
    //   color: rgb(249, 249, 249);
    //   font-size: 15px;
    //   margin-bottom : 45px;
    //   margin-right : -40px;
    //   min-height: 20px;
    //   text-align : center;
    //   @media (max-width: 768px) {
    //     font-size: 12px;
    //   }
    // `;
    
    // const Description = styled.div`
    //   line-height: 1.4;
    //   font-size: 20px;
    //   padding: 16px 0px;
    //   color: rgb(249, 249, 249);
    //   text-align: center; 
    //   @media (max-width: 768px) {
    //     font-size: 14px;
    //   }
    // `;
    
    
    
    // export default Detail;


/*

.Navbar{
    background-color: black;
    margin: 0;
    padding:0;
}
.active-link{
    color:orange;
}

.navbar-logo{
    height: 50px;
    margin-top:-10px;
}
.rent-logo{
    height: 20px;
    margin-top:-20px;
    width: 65%;
}
.navbar-btn{
    margin-right: 2%;
}
a{
    text-decoration: none;
}
.menu-bar-ul {
    white-space: nowrap; 
    overflow-x: auto; 
    margin-right: auto; 
    color:white;
    padding :15px;
}

.container-fluid {
    display: flex; 
    align-items: center; 
    margin-bottom: -20px;
    /* height:10%; */
  

  // .container-fluid1 {
  //     display: flex; 
  //     align-items: center; 
  //     margin-bottom: -10px;
  //     /* height:10%; */
  // }
  
  // .menu-bar-ul li {
  //     display: inline; 
  //     margin-right: 10px; 
  // }
  // .menu-bar-ul li::-webkit-scrollbar {
  //     display: none;
  // }
  
  // .menu-bar-ul li a {
  //     color: white; 
  // }
  
  // .menu-bar-ul::-webkit-scrollbar {
  //     display: none;
  // }
  
  // .related-img{
  //     margin-top :100px;
  //     margin-left: 20px;
  //     color:white;
  // }
  // .related-img h1 {
  //     font-size: 24px; 
  //     font-weight: bold; 
  // }

//   <div className="col-lg-2 col-md-12" style={{ display: 'inline-block'}}>
//   <div className="card movie-card">
//       <Link to={'/detail/'+movie.id}>
//           <img src={movie.thumbnail} className="card-img-top" alt="..." id={movie.id} style={{height:'260px'}}/>
//       </Link>
//       <div className="description-overlay">
//           <ReactPlayer
//               className="react-player"
//               url={movie.video_320}
//               playing={true}
//               controls={false}
//               loop={false}
//               width="100%"
//               height="70%"
//           />
//       </div>
//   </div>
// </div>

// .movie-card {
//   position: relative;
//   margin: 2%;
// }

// .description-overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   text-align:center;
//   background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
//   color: white; /* Text color */
//   padding: 10px; /* Add padding for better readability */
//   display: none; /* Hide description overlay by default */
// }

// .movie-card:hover{
//   transform: scale(1.1);
// }
// .movie-card:hover .description-overlay {
 
//   display: block; /* Show description overlay on hover */
// }

