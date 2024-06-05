import React from 'react';

function FooterLink(props){
    const { state } = props.location;

    return (
        <div>
            <iframe width="100%" height="500px" src={state}></iframe>
        </div>
    );
}

export default FooterLink;
