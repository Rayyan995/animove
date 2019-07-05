import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import axios from '../../axios-add-movies';
import classes from './AddMovie.module.css'
import Modal from '../../components/UI/Modal/Modal';
import Card from '../../components/Card/Card';

const INITIAL_STATE = {
    name: {
        id: 'name',
        val: '',
        placeholder: 'Enter Movie Name *'
    },
    imgURL: {
        id: 'imgURL',
        val: '',
        placeholder: 'Enter Image URL *'
    },
    year: {
        id: 'year',
        val: '',
        placeholder: 'Enter Movie Year *'
    },
    genre: {
        id: 'genre',
        val: '',
        placeholder: 'Enter Movie Genre *'
    },
    idmb: {
        id: 'idmb',
        val: '',
        placeholder: 'Enter Movie IDMB *'
    },
    torrentLink_720: {
        id: 'torrentLink',
        val: '',
        placeholder: 'Enter Torrent Link [720] *'
    },
    torrentLink_1080: {
        id: 'torrentLink',
        val: '',
        placeholder: 'Enter Torrent Link [1080]'
    },
}
export default class AddMovie extends Component {

    state = {
        addMovieForm: INITIAL_STATE,
        movieInfo: {
            genre: "Action / Animation / Sci-Fi",
            idmb: "6.8",
            imgURL: "https://img.yts.lt/assets/images/movies/reign_of_the_supermen_2019/medium-cover.jpg",
            name: "Reign of the Supermen",
            year: "2019",
        },
        btnDisabled: false,
        showModal: false
    }

    inputChangedHandler = (e, inputID) => {
        const addMovieForm = { ...this.state.addMovieForm }

        const addMovieElement = { ...addMovieForm[inputID] }
        addMovieElement.val = e.target.value;

        addMovieForm[inputID] = addMovieElement;
        this.setState({ addMovieForm: addMovieForm })
    }
    askConfirmAddMovieHandler = () => {
        const movieInfo = {};
        for (let key in this.state.addMovieForm) {
            const value = this.state.addMovieForm[key].val
            movieInfo[key] = value;
        }
        movieInfo['movieID'] = new Date();
        this.setState({ movieInfo: movieInfo, showModal: true });
    }
    addMovieConfirmHandler = () => {
        console.log('this.state.showModal: ', this.state.showModal);
        this.setState({ showModal: false });
        console.log('this.state.showModal: ', this.state.showModal);

        axios.post('/movies.json', this.state.movieInfo)
            .then(req => {
                console.log('req: ', req);
            });
    }
    modalClosed = () => {
        this.setState({ showModal: false });
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.addMovieForm) {
            formElementsArray.push({
                id: key,
                fieldsElements: this.state.addMovieForm[key]
            });
        }

        return (
            <React.Fragment>
                <div className='row justify-content-center'>
                    <form className={classes.Form + ' col-12 col-md-10 col-lg-8'}>
                        <p>Fields with <strong style={{ color: 'red' }}>*</strong> is required</p>
                        {
                            formElementsArray.map((elem, index) =>
                                <div className="form-group" key={elem.id}>
                                    <input
                                        onChange={(e) => this.inputChangedHandler(e, elem.id)}
                                        type="text"
                                        className="form-control"
                                        placeholder={elem.fieldsElements.placeholder} />
                                </div>
                            )
                        }
                        <button
                            onClick={this.askConfirmAddMovieHandler}
                            className="btn btn-outline-success"
                            disabled={this.state.btnDisabled}
                        >Add The Movie</button>
                    </form>
                </div>
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.modalClosed} >
                    <p className='font-italic'>If something wrong in review, please check data you entered</p>
                    <Card
                        review={true}
                        key={this.state.movieInfo.name}
                        name={this.state.movieInfo.name}
                        imgURL={this.state.movieInfo.imgURL}
                        year={this.state.movieInfo.year}
                        genre={this.state.movieInfo.genre}
                        idmb={this.state.movieInfo.idmb} />
                    <div className='row justify-content-around pt-3 pb-1'>
                        <button
                            className='btn btn-outline-success'
                            onClick={this.addMovieConfirmHandler} >
                            Confirm Upload</button>
                        <NavLink className='btn btn-link' style={{ color: '#031d17', fontWeight: 'bold' }} to='/'>Go to Site</NavLink>
                    </div>
                </Modal>

            </React.Fragment>

        )
    }
}
