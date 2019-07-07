import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Card.module.css';
import ImgHoverOverlay from '../UI/ImgHoverOverlay/ImgHoverOverlay';

const Card = (props) => {
    let pathTO = props.name.replace(/\s+/g, '-').toLowerCase();
    if (props.review)
        pathTO = 'add-movie';

    let movieName;
    if (props.name.length > 24)
        movieName = props.name.substring(0, 18);
    else
        movieName = props.name;

    return (
        <React.Fragment >
            <div className={props.review ? classes.CardAsRewiew : null + ' col-10 mx-auto col-md-4 col-lg-3 pb-5 item-align-center'} >
                <div className={classes.Card + " card mx-2"}
                    onClick={props.clicked} >
                    <NavLink to={pathTO} >
                        < ImgHoverOverlay class="card-img-top"
                            imgURL={props.imgURL}
                            genre={props.genre}
                            idmb={props.idmb}
                        />
                        <div className="p-1 card-body" >
                            <h6 className="card- p-0" > < strong > {movieName + '...'} </strong></h6 >
                            <h6 className="card-title p-0" > {props.year} </h6>
                        </div>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card