import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import classes from './Details.module.css'

const Details = () => {
    return (
        <React.Fragment>
            <div className={classes.Details + ' row'}>
                <div className={classes.Name + ' col-10 col-md-5 mx-auto col-lg-3 mb-4'}>
                    <FontAwesomeIcon icon={faCoffee} />
                    <h4>Film Name</h4>
                    <h6>2019</h6>
                    <h6>Action / Animation / Sci-Fi</h6>
                    <h6>IDMB 6.9</h6>
                    <i>Available in:</i>
                    <a href='https://www.facebook.com' className='mb-1' target="_blank" rel="noopener noreferrer"> 720p.BlueRay</a>
                    <a href='https://www.facebook.com' className='mb-1' target="_blank" rel="noopener noreferrer"> 1080p.BlueRay</a>
                </div>
                <div className={classes.Img_Download + ' col-10 col-md-5 mx-auto col-lg-3 mb-4'}>
                    <img
                        src='https://img.yts.lt/assets/images/movies/reign_of_the_supermen_2019/medium-cover.jpg'
                        alt='Brand' />
                    <button
                        className='col-8 col-md-8 btn btn-outline-success mx-auto btn-block mt-3'
                    >Download Now</button>
                </div>
                <div className={classes.NameLgScreen + ' col-10 col-md-5 mx-auto col-lg-6'}>
                    <h1>Film Name</h1>
                    <h3>2019</h3>
                    <h3>Action / Animation / Sci-Fi</h3>
                    <h3>IDMB 6.9</h3>
                    <i>Available in:</i>
                    <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"> 720p.BlueRay</a>
                    <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer"> 1080p.BlueRay</a>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Details
