import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/Card/Card';
import axios from '../../axios-add-movies';
import classes from './Cards.module.css';
import * as actionTypes from '../../store/actions';

class Cards extends Component {
    state = {
        allMovies: []
    }
    componentDidMount = () => {
        axios.get('/movies.json')
            .then(res => {
                const allMovies = []
                for (const key in res.data) {
                    allMovies.push(res.data[key]);
                }
                this.setState({ allMovies: allMovies })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className={classes.BackColor + ' row pt-5'}>
                {
                    this.state.allMovies.map(movie => (
                        <Card
                            key={movie.movieID}
                            name={movie.name}
                            imgURL={movie.imgURL}
                            year={movie.year}
                            genre={movie.genre}
                            idmb={movie.idmb}
                            clicked={() => this.props.viewDetailsHandler(movie)}
                        />
                    ))};
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        clickedMovie: state.clickedMovie,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        viewDetailsHandler: movie =>
            dispatch({ type: actionTypes.CLICK_ON_MORE_DETAILS, clickedMovie: movie }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cards);