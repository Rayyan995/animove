import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import classes from './Details.module.css'

const Details = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Details + ' row'}>
                <div className={classes.Name + ' col-10 col-md-5 mx-auto col-lg-3 mb-4'}>
                    <FontAwesomeIcon icon={faCoffee} />
                    <h4>{props.clickedMovie.name}</h4>
                    <h6>{props.clickedMovie.year}</h6>
                    <h6>{props.clickedMovie.genre}i</h6>
                    <h6>IDMB {props.clickedMovie.idmb}</h6>
                    <i>Available in:</i>
                    <a href={props.clickedMovie.torrentLink_720} className='mb-1' target="_blank" rel="noopener noreferrer"> 720p.BlueRay</a>
                    <a href={props.clickedMovie.torrentLink_1080} className='mb-1' target="_blank" rel="noopener noreferrer"> 1080p.BlueRay</a>
                </div>
                <div className={classes.Img_Download + ' col-10 col-md-5 mx-auto col-lg-3 mb-4'}>
                    <img
                        src={props.clickedMovie.imgURL}
                        alt='Brand' />
                    <button
                        className='col-8 col-md-8 btn btn-outline-success mx-auto btn-block mt-3'
                    ><strong>Download Now</strong></button>
                </div>
                <div className={classes.NameLgScreen + ' col-10 col-md-5 mx-auto col-lg-6'}>
                    <h2>{props.clickedMovie.name}</h2>
                    <h3>{props.clickedMovie.year}</h3>
                    <h3>{props.clickedMovie.genre}i</h3>
                    <h3>IDMB {props.clickedMovie.idmb}</h3>
                    <i>Available in:</i>
                    <a href={props.clickedMovie.torrentLink_720} target="_blank" rel="noopener noreferrer"> 720p.BlueRay</a>
                    <a href={props.clickedMovie.torrentLink_1080} target="_blank" rel="noopener noreferrer"> 1080p.BlueRay</a>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Details
