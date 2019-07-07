import React, { Component } from 'react';
import { connect } from 'react-redux';

import Details from '../../components/Details/Details';
import classes from './ViewDetails.module.css';
// import Trailer from './Trailer/Trailer';

class ViewDetails extends Component {
    render() {
        return (
            <div className={classes.ViewDetails + ' p-4'}>
                <Details
                    clickedMovie={this.props.clickedMovie} />
                {/* <Trailer /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clickedMovie: state.clickedMovie,
    };
};

export default connect(mapStateToProps)(ViewDetails);

