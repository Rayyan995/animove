import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Card.module.css';
import ImgHoverOverlay from '../../UI/ImgHoverOverlay/ImgHoverOverlay';

const Card = (props) => {
    return (
        <React.Fragment>
            <div className='col-sm-8 mx-auto col-md-4 col-lg-3 pb-5'>
                <div className={classes.Card + " card mx-2"} onClick={props.clicked} >
                    <NavLink to='/1'>
                        <ImgHoverOverlay
                            imgSrc={props.imgSrc}
                            class="card-img-top"
                            firstHead='6.5 / 10'
                            secondHead='Drama / Action / Romance' />
                    </NavLink>
                    <div className="p-1 card-body">
                        <h6 className="card- p-0">Card title</h6>
                        <h6 className="card-title p-0">`2019</h6>
                    </div>
                </div>
            </div>

            <div className='col-sm-8 mx-auto col-md-4 col-lg-3 pb-5'>
                <div className={classes.Card + " card mx-2"} onClick={props.clicked}>

                    <ImgHoverOverlay imgSrc='https://img.yts.lt/assets/images/movies/Hotel_Transylvania_2012/medium-cover.jpg'
                        class="card-img-top"
                        firstHead='6.5 / 10'
                        secondHead='Drama / Action / Romance' />

                    <div className="p-1 card-body">
                        <h6 className="card- p-0">Card title</h6>
                        <h6 className="card-title p-0">`2019</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Card
