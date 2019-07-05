import React, { Component } from 'react';

import Card from '../../components/Card/Card';
import axios from '../../axios-add-movies';
import classes from './Cards.module.css'

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
    }
    render() {
        return (
            <div className={classes.BackColor + ' row pt-5'}>
                {
                    this.state.allMovies.map(movie => (
                        <Card
                            key={movie.name}
                            name={movie.name}
                            imgURL={movie.imgURL}
                            year={movie.year}
                            genre={movie.genre}
                            idmb={movie.idmb} />
                    ))};
            </div>
        )
    }
}

export default Cards
