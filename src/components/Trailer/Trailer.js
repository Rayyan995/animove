import React from 'react'
import classes from './Trailer.module.css';

const Trailer = () => {
    return (
        <div className={classes.Trailer} >
            <h1 className='text-center text-secondary'>Trailer</h1>
            <iframe width="800" height="450"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
            </iframe>
        </div>
    )
}

export default Trailer
