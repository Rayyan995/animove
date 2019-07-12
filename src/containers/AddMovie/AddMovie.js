import React, { Component } from 'react';

import axios from '../../axios-add-movies';
import Modal from '../../components/UI/Modal/Modal';
import AlertMessage from '../../components/UI/AlertMessage/AlertMessage';
import Card from '../../components/Card/Card';

import { getDateAndTime } from '../../myOwnLib/myOwnLib';
import classes from './AddMovie.module.css'

const INITIAL_STATE = {
    name: {
        val: 'No name entered ',
        placeholder: 'Enter Movie Name *'
    },
    imgURL: {
        val: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_TisqJghibEJI4nIpWr_ydsIk_vl-tOqGv31041tJPynF_5W',
        placeholder: 'Enter Image URL *'
    },
    year: {
        val: 'no year entered',
        placeholder: 'Enter Movie Year *'
    },
    genre: {
        val: 'no genre entered',
        placeholder: 'Enter Movie Genre *'
    },
    idmb: {
        val: 'no IDMB entered',
        placeholder: 'Enter Movie IDMB *'
    },
    torrentLink_720: {
        val: '',
        placeholder: 'Enter Torrent Link [720] / [1080] *'
    },
    torrentLink_1080: {
        val: '',
        placeholder: 'Enter Torrent Link [1080]'
    },
    trailerLink: {
        val: '',
        placeholder: 'Enter Trailer Link'
    },
    insertionUserName: {
        val: '',
        placeholder: 'Enter you Name * '
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
        showModal: false,
        showAlertMsg: false,
        isAddSuccessful: true
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
            movieInfo[key] = this.state.addMovieForm[key].val
        }
        const dateAndTime = getDateAndTime();
        console.log('dateAndTime: ', dateAndTime);
        
        movieInfo['movieID'] = dateAndTime;
        this.setState({ movieInfo: movieInfo, showModal: true });
    }
    addMovieConfirmHandler = () => {
        this.modalClosed();
        axios.post('/movies.json', this.state.movieInfo)
            .then(req => {
                this.setState({ showAlertMsg: true });
            })
            .catch(err => {
                this.setState({ isAddSuccessful: false, showAlertMsg: true });
            });
    }
    modalClosed = () => {
        this.setState({ showModal: false });
    }
    AlertMsgClosed = () => {
        this.setState({ showAlertMsg: false });
        window.location.reload();
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
                            formElementsArray.map((elem) =>
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
                        ><strong>Add The Movie</strong></button>
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
                    <div className='row justify-content-around pt-3'>
                        <button
                            className='btn btn-outline-success col-8 col-md-4 col-lg-4'
                            onClick={this.addMovieConfirmHandler} >
                            <strong>Confirm Upload</strong></button>
                        <button
                            className='btn btn-outline-link col-7 col-md-4 col-lg-4'
                            style={{ color: '#031d17', fontWeight: '600', textDecoration: 'underLine' }}
                            onClick={this.modalClosed} >
                            Return to Edit</button>
                    </div>
                </Modal>
                <AlertMessage
                    show={this.state.showAlertMsg}
                    close={this.AlertMsgClosed}
                    isSuccessful={this.state.isAddSuccessful} />

            </React.Fragment>

        )
    }
}
