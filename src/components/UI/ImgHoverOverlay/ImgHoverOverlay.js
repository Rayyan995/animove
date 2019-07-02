import React from 'react';

import classes from './ImgHoverOverlay.module.css';
const ImgHoverOverlay = (props) => {
    return (
        <div className={classes.Container}>
            <img src={props.imgSrc} alt="Avatar" />
            <div className={classes.Middle}>
                <h3>{props.firstHead}</h3>
                <h3>{props.secondHead}</h3>
                <button className='btn btn-success'>View Details</button>
            </div>
        </div>
    )
}

export default ImgHoverOverlay
