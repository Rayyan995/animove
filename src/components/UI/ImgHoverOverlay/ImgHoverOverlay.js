import React from 'react';

import classes from './ImgHoverOverlay.module.css';
const ImgHoverOverlay = (props) => {
    return (
        <div className={classes.Container}>
            <img src={props.imgURL} alt="Avatar" />
            <div className={classes.Middle}>
                <h3>{props.idmd}</h3>
                <h3>{props.genre}</h3>
                <button className='btn btn-success mt-3'>View Details</button>
            </div>
        </div>
    )
}

export default ImgHoverOverlay
