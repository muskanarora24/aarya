import {React, useState,useContext} from 'react';
import { Tab, Nav, Card, Form, Button } from 'react-bootstrap';
import { Contextone } from './Context';


const Login = () => {
    const [activeTab, setActiveTab] = useState("#phone");
    const [phoneNumber, setPhoneNumber] = useState(""); 
    const [isEmail, setIsemail] = useState("");
    const [isPassword, setIsPassword] = useState("");
    const [verify, setverify] = useState([])
    const [uid, setUserid] = useState(0);
    const [Otp, setOtp] = useState("");

    const countercontext = useContext(Contextone);
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleTabClick = (eventKey) => {
        setActiveTab(eventKey);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveTab("#otp")
        fetchOTP(phoneNumber)
    };

    const emailsubmit = (e)=>{
        e.preventDefault();
        setActiveTab('#otp')
        fecthEmail(isEmail,isPassword);

    }
    const OtpSubmit= (e)=>{
        e.preventDefault();
        VerifyData(phoneNumber, Otp)
    }

    const fecthEmail = async (isEmail,isPassword) => {
            try {
                const response = await fetch(apiUrl+'/api/login', {
                    method: 'POST',
                    body: JSON.stringify({ type: 4, email: isEmail, password: isPassword}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                const data = await response.json();
            } catch (error) {
                console.error('Error:', error);
            }
    };

    const fetchOTP = async (phoneNumber) => {
            try {
                const response = await fetch(apiUrl+'/api/sendotp', {
                    method: 'POST',
                    body: JSON.stringify({ mobile: phoneNumber }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                });
                const data = await response.json();
                setUserid(data.result);
                setverify(data.status);
            } catch (error) {
                console.error('Error:', error);
            }
    };
    
    const VerifyData = async(phoneNumber,Otp) => {
        try {
            const response = await fetch(apiUrl+'/api/verifyotp', {
                method: 'POST',
                body: JSON.stringify({mobile:phoneNumber, token:Otp }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            const data = await response.json();
            setUserid(data.result);
            setverify(data.status);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    localStorage.setItem('userid', uid.id);
    localStorage.setItem('userPhone', uid.mobile);

    

    if (verify === 200 ) {
        countercontext.setIsArrow(true)
    }
    return (
      <>
        { console.log(countercontext.isLogged)}

      {countercontext.isLogged && !countercontext.isArrow &&(
        <div className="modal" style={{ display: 'block', justifyContent: 'center', marginLeft: '50px'}}>
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content" style={{ backgroundColor: 'white', color: 'black', width:'60%',height: '45vh'}}>
                <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
                    <button type="button" className="btn-close" aria-label="Close" 
                    onClick={()=>countercontext.setIsLogged(false)}></button>
                </div>
                <div className="modal-body">
                    <Tab.Container activeKey={activeTab} onSelect={handleTabClick}>
                        
                        <Nav variant="pills" className="bg-light nav-pills rounded nav-fill mt-0 mb-1">
                            <Nav.Item>
                                <Nav.Link eventKey="#phone">Phone</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="#gmail">Mail</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="#phone">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-2">
                                        <Form.Label><h6>Phone</h6></Form.Label>
                                        <Form.Control type="text" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required  style={{ backgroundColor: 'white',color:'black'}} id="holder"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#007FFF'}}>Confirm Login</Button>
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#gmail">
                                <Form onSubmit={emailsubmit}>
                                    <Form.Group className="mb-2">
                                        <Form.Label><h6>Email</h6></Form.Label>
                                        <Form.Control type="email" placeholder="Enter your Mail" value={isEmail} onChange={(e) => setIsemail(e.target.value)} required  style={{ backgroundColor: 'white',color:'black'}} id="holder"/>
                                        <Form.Label><h6>Password</h6></Form.Label>
                                        <Form.Control type="text" placeholder="Enter Password"  value={isPassword} onChange={(e) => setIsPassword(e.target.value)} required style={{ backgroundColor: 'white',color:'black'}} id="holder"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'-2px', backgroundColor:'#007FFF'}}>Confirm Login</Button>
                                </Form>
                            </Tab.Pane>
                            {activeTab === "#otp" && (
                                <Tab.Pane eventKey="#otp">
                                    <Form onSubmit={OtpSubmit}>
                                        <Form.Group className="mb-2">
                                            <Form.Label><h6>Enter OTP</h6></Form.Label>
                                            <Form.Control type="text" placeholder="Enter OTP" value={Otp} onChange={(e) => setOtp(e.target.value)} required  style={{ backgroundColor: 'white',color:'black'}} id="holder"/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#007FFF'}} 
                                        >Confirm Otp</Button>
                                    </Form>
                                </Tab.Pane>
                            )}
                            <div style={{textAlign:'center'}}>
                            </div>
                        </Tab.Content>                                                
                    </Tab.Container>
                    </div>
            </div>
        </div>
    </div>
      )}

      {countercontext.isArrow && countercontext.name &&(
        <div className="modal" style={{ display: 'block', justifyContent: 'center', marginLeft: '50px'}}>
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content" style={{ backgroundColor: '#202020', color: '#C8C8C8', width:'60%',height: '45vh'}}>
                <div className="modal-header">
                    <h5 className="modal-title">Enter Detail</h5>
                    <button type="button" className="btn-close" aria-label="Close" 
                    onClick={()=>countercontext.setName(false)}></button>
                </div>
                <div className="modal-body">
                    <Tab.Container>
                        <Tab.Content>                            
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-2">
                                        <Form.Label><h6>Enter Name</h6></Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name"  required  style={{ backgroundColor: '#202020',color:'white'}} id="holder"/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="subscribe btn-block shadow-sm" style={{marginTop:'25px', backgroundColor:'#DC143C'}}>Save</Button>
                                </Form>                            
                            <div style={{textAlign:'center'}}>
                            </div>
                        </Tab.Content>                                                
                    </Tab.Container>
                    </div>
            </div>
        </div>
    </div>
      )}
      </>
    );
};

export default Login; 