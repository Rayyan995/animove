import React from 'react'
import classes from './Trailer.module.css';

const Trailer = () => {
    return (
        <div className={classes.Trailer} >
            <iframe width="420" height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
            </iframe>
        </div>
    )
}

export default Trailer
