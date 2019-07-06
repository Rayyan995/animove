import React from 'react';
// import classes from './ViewDetails.module.css';

import Details from './Details/Details';
import classes from './ViewDetails.module.css';
// import Trailer from './Trailer/Trailer';

const ViewDetails = () => {
    return (
        <div className={classes.ViewDetails + ' p-4'}>
            <Details />
            {/* <Trailer /> */}
        </div>
    )
}

export default ViewDetails
