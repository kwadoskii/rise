import React from 'react';

const Location = (props) => {
    return (
        <div className="location col-md-1">
            <h2>{props.state}</h2>   
            <p>{props.noOfArtisans} Artisians</p>         
            <p>{props.noOfSMEs} SMEs</p>         
        </div>
    );
}

export default Location;