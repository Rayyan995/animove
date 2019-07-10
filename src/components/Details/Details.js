import React from 'react';

import Modal from '../UI/Modal/Modal';
import AvailableIn from './AvailableIn/AvailableIn';
import classes from './Details.module.css'

const Details = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Details + ' row'}>
                <div className={classes.Name + ' col-10 col-md-5 mx-auto col-lg-3 mb-4'}>
                    <h4>{props.clickedMovie.name}</h4>
                    <h6>{props.clickedMovie.year}</h6>
                    <h6>{props.clickedMovie.genre}i</h6>
                    <h6>IDMB {props.clickedMovie.idmb}</h6>
                    <AvailableIn
                        link_720={props.clickedMovie.torrentLink_720}
                        link_1080={props.clickedMovie.torrentLink_1080} />
                </div>
                <div className={classes.Img_Download + ' col-10 col-md-5 mx-auto col-lg-3 mb-4'}>
                    <img
                        src={props.clickedMovie.imgURL}
                        alt='Brand' />
                    <button
                        className='col-8 col-md-8 col-lg-7 btn btn-outline-success mx-auto btn-block mt-3'
                        onClick={props.modalShowed} >
                        Download Now</button>
                </div>
                <div className={classes.NameLgScreen + ' col-10 col-md-5 mx-auto col-lg-6'}>
                    <h3>{props.clickedMovie.name}</h3>
                    <h5>{props.clickedMovie.year}</h5>
                    <h5>{props.clickedMovie.genre}i</h5>
                    <h5>IDMB {props.clickedMovie.idmb}</h5>
                    <AvailableIn
                        link_720={props.clickedMovie.torrentLink_720}
                        link_1080={props.clickedMovie.torrentLink_1080} />
                </div>
            </div>
            <Modal
                modalClosed={props.modalClosed}
                show={props.show} >
                <h1>Hi there</h1>
                <AvailableIn
                    link_720={props.clickedMovie.torrentLink_720}
                    link_1080={props.clickedMovie.torrentLink_1080} />
            </Modal>
        </React.Fragment>
    )
}

export default Details