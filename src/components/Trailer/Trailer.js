import React from 'react'
import classes from './Trailer.module.css';

const Trailer = (props) => {
    return (
        <div className={classes.Trailer} >
            <h1 className='text-center text-secondary'>Trailer</h1>
            <iframe
                className='col-12 col-md-10'
                height='460'
                title='trailer'
                src={props.trailerLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen >
            </iframe>
        </div>
    )
}

export default Trailer
