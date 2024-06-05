import React, { useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contextone } from './Context';


const Subscription = () => {
    const [page, setPage] = useState([]);
    const [payment, setPayment] = useState([]);
    const [userSubscribe, setUserSubscribe] = useState([]);
    const uid = localStorage.getItem('userid');
    const countercontext = useContext(Contextone);
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl+'/api/get_package', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                const data = await response.json();
                console.log("get");
                console.log(data.result);
                setPage(data.result);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

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

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await fetch(apiUrl+'/api/subscription_list', {
                    method: 'POST',
                    body: JSON.stringify({ 'user_id' : uid}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                const data = await response.json();
                setUserSubscribe(data.result);
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
                    "amount": amount*100,
                    "currency": "INR",
                    "name": "Acme Corp",
                    "description": "Test Transaction",
                    "image": "https://example.com/your_logo",
                    "order_id": payment.id,
                    // "handler": function (response) {
                    //     alert(response.razorpay_payment_id);
                    //     alert(response.razorpay_order_id);
                    //     alert(response.razorpay_signature);
                    // },
                    "prefill": {
                        "name": "Gaurav Kumar",
                        "email": "gaurav.kumar@example.com",
                        "contact": "9000090000"
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                    
                };
                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            } catch (error) {
                console.error('Error:', error);
            }
        
    };


    {userSubscribe && userSubscribe.map((mtype)=>{
        if(mtype.user_id == uid){
          console.log("subscribe");
          countercontext.isPremium = true;
        }
        else{
            console.log("not subscribe")
        }
    })}



    return (
        <div className="black-background">            
            <div className="card-deck-wrapper">
                {page.map((mtype, index) => (
                    <div key={index} className="container card-container">
                        <div className="card mb-4 shadow-sm black-card">
                            <div className="card-header-custom red-text">
                                <h4 className="my-0 font-weight-normal">{mtype.name}</h4>
                                <span>Rs {mtype.price}/{mtype.time}{mtype.type}</span>
                            </div>
                            <div className="card-body">
                                {mtype.data.map((content, key) => (
                                    <div key={key}>
                                        <ul className="list-unstyled mt-3 mb-4 card-list">
                                            <li>{content.package_key}</li>
                                            <li>{content.package_value}</li>
                                        </ul>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn btn-lg btn-block btn-primary"
                                    onClick={() => handlePayment(mtype.price)}
                                >
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Subscription;
