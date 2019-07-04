import React, { Component } from 'react';

import Card from './Card/Card';
import axios from '../../axios-add-movies';
import classes from './Cards.module.css'

const movie = {
    name: 'Tangel',
    imgURL: 'https://img.yts.lt/assets/images/movies/Tangled_2010/medium-cover.jpg',
    year: '2010',
    genre: 'Action / Adventure / Animation / Comedy / Family / Fantasy / Musical / Romance',
    idbm: '7.8'
}
class Cards extends Component {

    idHandler = () => {
        axios.post('/movies.json', movie)
            .then(req => {
                console.log('req: ', req)
            }).catch(err => {
                console.log('err: ', err);

            });
    }
    render() {
        return (
            <div className={classes.BackColor + ' row pt-5'}>
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/chicken_little_2005/medium-cover.jpg' />
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/coconut_the_little_dragon_2_into_the_jungle_2018/medium-cover.jpg' />
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/appleseed_2004/medium-cover.jpg' />
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/Magic_in_the_Moonlight_2014/medium-cover.jpg' />
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/stolen_princess_ruslan_and_ludmila_2018/medium-cover.jpg' />
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/Magic_in_the_Moonlight_2014/medium-cover.jpg' />
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/halo_legends_2010/medium-cover.jpg' />
                <Card
                    clicked={this.idHandler}
                    imgSrc='https://img.yts.lt/assets/images/movies/Magic_in_the_Moonlight_2014/medium-cover.jpg' />

            </div>
        )
    }
}

export default Cards
