import { Component } from "react";
// import {useParams} from 'react-router-dom';

function VideoPlayer(props) {
    const { url } = props.location.state;

    const vUrl = "https://iframe.mediadelivery.net/embed/135513/"+props.location.state+"?autoplay=true&loop=false&muted=false&preload=true&responsive=true"; 
    return (
      <div>
          <div>
            <iframe width="100%" height="610px" src={vUrl} allow="autoplay" allowFullScreen></iframe>
          </div>
          
      </div>
    );
  }
export default VideoPlayer;