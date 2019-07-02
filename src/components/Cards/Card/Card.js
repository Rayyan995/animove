import React from 'react';

import classes from './Card.module.css';
import ImgHoverOverlay from '../../UI/ImgHoverOverlay/ImgHoverOverlay';

const Card = (props) => {
    return (
        <React.Fragment>
            <div className='col-11 mx-auto col-md-4 col-lg-3 pb-5'>
                <div className={classes.Card + " card"}>

                    <ImgHoverOverlay
                        imgSrc='https://m.media-amazon.com/images/M/MV5BMTczNTIyNTQ5Ml5BMl5BanBnXkFtZTgwOTI2ODk2NzM@._V1_.jpg'
                        class="card-img-top"
                        firstHead='6.5 / 10'
                        secondHead='Drama / Action / Romance' />

                    <div className="p-1 card-body">
                        <h6 className="card- p-0">Card title</h6>
                        <h6 className="card-title p-0">`2019</h6>
                    </div>
                </div>
            </div>

            <div className='col-11 mx-auto col-md-4 col-lg-3 pb-5'>
                <div className={classes.Card + " card"}>

                    <ImgHoverOverlay imgSrc='https://image-ticketfly.imgix.net/00/02/73/66/11-og.JPG?w=1575&h=2048'
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
