import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../images/aaryaOtt.png'; 
import yt from '../../images/yt-logo.png'; 
import twitter from '../../images/twitter-logo.png'; 
import fb from '../../images/fb-logo.png'; 
import insta from '../../images/insta-logo.avif'; 

import FooterLink from './FooterLink';
import {Link} from 'react-router-dom';

const Footer = () => {
    const [page, setpage] = useState([]);
    useEffect(async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
        await fetch(apiUrl+'/api/get_pages', {
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
                console.log(resp)
                setpage(resp);
            }).catch(error => console.error('Error:', error)); 
    }, []);
  return (
    <FooterContainer>
  <LeftSection>
    <Logo src={logo} alt="Logo" />
    <SiteName>Aarya digital</SiteName>
  </LeftSection>
  <CenterSection>
    {page.map((mtype, index) => (
        <div key={index}>
            <Link to={{ pathname: '/footerlink/'+mtype.page_name, state: mtype.url }}>
                <span style = {{color:'white'}}>{mtype.page_name}</span>
            </Link>
        </div>
    ))}
</CenterSection>


  <RightSection>
    <SocialMediaIcon src={insta} alt="Instagram" />
    <SocialMediaIcon src={fb} alt="Facebook" />
    <SocialMediaIcon src={yt} alt="Youtube" />
    <SocialMediaIcon src={twitter} alt="Twitter" />
  </RightSection>
</FooterContainer>


  );
};

const FooterContainer = styled.footer`
  background-color: black;
  color: #fff;
  padding: 20px;
  display: flex;
  padding-bottom: 80px;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 190px;
  height: 150px;
  margin-right: 20px;
  margin-top :20px;
  
`;

const CenterSection = styled.div`
  font-weight: 500;
`;
const SiteName = styled.span`
  font-size: 24px; 
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

export default Footer;
