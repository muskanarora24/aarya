import React, { useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import play from '../images/play-icon-black.png';
import {Link} from 'react-router-dom';
import Related from './Related';
import {SyncLoader} from "react-spinners";
import { Contextone } from './Context';
import ReactPlayer from 'react-player';
import loding from '../images/loading.gif';
import Login from './Login';


function Detail(props){
    const {id} = useParams();
    const index = id-1;
    const [detail, setDetail] = useState([]);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('#video');
    const [rentStatus, setRentStatus] = useState([]);
    const [payment, setPayment] = useState([]);
    const countercontext = useContext(Contextone);
    const apiUrl = process.env.REACT_APP_API_URL;

    let userRentApproved = false;
    const uid = localStorage.getItem('userid');
    const phone= localStorage.getItem('userPhone');
    console.log(uid);

    useEffect(async () => {
      setLoading(true);
        await fetch(apiUrl+'/api/section_detail', {
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

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(apiUrl+'/api.razorpay.com/v1/orders', {
                  method: 'POST',
                  body: JSON.stringify({ amount: '', currency: 'INR', receipt: 'qwsaq1' }),
                  headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                      'Authorization': 'Basic ' + btoa('rzp_test_HAK2f3gc0ltqYk : piQXIdyPiEqGhNMu52A3gG5O')
                  }
              });
              
              const data = await response.json();
              setPayment(data.result);
          } catch (error) {
              console.error('Error:', error);
          }
      };
  
      fetchData();
  }, []);

  const addRentTransaction = async (amount,payId) => {
    try {
        const response = await fetch(apiUrl+'/api/add_rent_transaction', {
            method: 'POST',
            body: JSON.stringify({
                'user_id': uid,
                'video_id': id,
                'price': detail.rent_price,
                'type_id': 1,
                'video_type': 1,
                'unique_id': "couponCode"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        const data = await response.json();
        
    } catch (error) {
        console.error('Error:', error);
    }
};

useEffect(() => {
  const fetchBanner = async () => {
          try {
            
          const response = await fetch(apiUrl+'/api/user_rent_video_list', {
              method: 'POST',
              body: JSON.stringify({ 'user_id' : uid}),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              }
          });
          const data = await response.json();
          console.log(data.video);
          setRentStatus(data.video);
      } catch (error) {
          console.error('Error:', error);
      }
  };

  
  fetchBanner();
}, []);

    
    const handlePayment = async (amount) => {
      try {
          const options = {
              "key": "rzp_test_HAK2f3gc0ltqYk",
              "amount": amount * 100,
              "currency": "INR",
              "name": detail.name,
              "description": "",
              "image": "https://example.com/your_logo",
              "order_id": payment.id,
              "prefill": {
                  "name": "",
                  "email": "",
                  "contact": phone
              },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#3399cc"
              },
              // Callback function after payment success
              "handler": function (response) {
                    addRentTransaction(amount,response.razorpay_payment_id);
                  }
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
      } catch (error) {
          console.error('Error:', error);
      }
    };

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

      {rentStatus && rentStatus.map((mtype)=>{   
        console.log(mtype.id)
        console.log(id) 
        if(mtype.id==id){
          console.log("rent done")
          userRentApproved = true;
        }
        else{
          console.log("rent not done")
        }
    })}     

     

    return(
      <>
      <div>
        {loading ? (
          // <div className="loader-set">
          <div className="container-fluid1">
            <img alt="..." src={loding} loading="lazy" style={{width:'100%',height:'80%'}} />
          {/* <SyncLoader
            color={'#0000CD'}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> */}
          </div>
        ) : (
          <div className="container-fluid1">
            <ContentMeta width="50%" style={{ background: 'linear-gradient(45deg, black, transparent)'}}>
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
              {countercontext.isLogged ? (
                <>
                  {detail.is_rent ? (
                    <>
                      {userRentApproved ? (
                        <Link to={{ pathname: '/player', state: detail.url_video_id }}>
                          <Player>
                            <img src={play} alt="" loading="lazy" />
                            <span>Watch Now</span>
                          </Player>
                        </Link>
                      ) : (
                        <div onClick={() => handlePayment(detail.rent_price)}>
                          <Player>
                            <img src={play} alt="" loading="lazy" />
                            <span>Watch Now</span>
                          </Player>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {detail.is_premium ? (
                         <>
                         {countercontext.isPremium ? (
                           <Link to={{ pathname: '/player', state: detail.url_video_id }}>
                             <Player>
                               <img src={play} alt="" loading="lazy" />
                               <span>Watch Now</span>
                             </Player>
                           </Link>
                         ) : (
                           <div>
                             <Link to="/Subscription">
                              <Player>
                                <img src={play} alt="" loading="lazy" />
                                <span>Watch Now</span>
                              </Player>
                            </Link>
                           </div>
                         )}
                       </>
                      ) : (
                        <Link to={{ pathname: '/player', state: detail.url_video_id }}>
                          <Player>
                            <img src={play} alt="" loading="lazy" />
                            <span>Watch Now</span>
                          </Player>
                        </Link>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <Player onClick={() => countercontext.setIsLogged(true)}>
                    <img src={play} alt="" loading="lazy" />
                    <span>Login </span>
                    {countercontext.isLogged && <Login />}
                  </Player>
                </>
              )}
            </Controls>

            </ContentMeta>                
                <Background>
                  <div>
                  <ReactPlayer
                    className="react-player"
                    url={detail.video_320}
                    volume = {null}
                    playing={true}
                    //controls= {true}
                    loop={false}
                    width=""
                    height= '100%'
                  />
                  </div>
                </Background>
            <ImageTitle>
              {/* <img alt={detail.name} src={detail.thumbnail} height="400px" /> */}
            </ImageTitle>
          </div>
        )}
        
        <div class="custom-tabs" style={{marginTop: '180px'}} id={activeTab}>
          <div class="custom-nav">
              <div class={`nav-item nav-link ${activeTab === "#video" ? "selected" : ""}`} onClick={() => setActiveTab("#video")}>
                  <button class="nav-link" >Related Video</button>
              </div>
              <div class={`nav-item nav-link ${activeTab === "#details" ? "selected" : ""}`} onClick={() => setActiveTab("#details")}>
                  <button class="nav-link" >Details</button>
              </div>
          </div>
          <div class="tab-content">
              <div class={`tab-pane ${activeTab === "#video" ? "active" : ""}`}>
                  <Related data={related} />
              </div>
              <div class={`tab-pane ${activeTab === "#details" ? "active" : ""}`} style={{justifycontent: 'space-between',marginBottom:'25px'}}>
                <div style={{color:'white', marginLeft:'10px',}}>
                  {detail.description?.split(',').map((line, index) => (
                  <div key={index}>{line}</div>
                  ))}
                </div>
                <div className="con" style={{color:'white', textAlign:'right',marginRight: '50px' }}>
                  <p>test123</p>
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
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    filter: blur(10px); 
    opacity: 0.6;
  }
  .react-player{
    object-fit: cover;
     filter: blur(7px);
    opacity: 1;
  }
`;

// const Background = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   z-index: -1;

//   .react-player {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     opacity: 0.3;
//   }
// `;


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
  margin : 0px 72px 20px 100px;
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