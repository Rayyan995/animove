import React, { Component } from 'react';

import classes from './AddMovie.module.css'

export default class AddMovie extends Component {
    state = {
        name: 'Tangel',
        imgURL: 'https://img.yts.lt/assets/images/movies/Tangled_2010/medium-cover.jpg',
        year: '2010',
        genre: 'Action / Adventure / Animation / Comedy / Family / Fantasy / Musical / Romance',
        idbm: '7.8'
    }
    render() {
        return (
            <div className='row justify-content-center'>
                <form className={classes.Form + ' col-12 col-md-8'}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter movie name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image URL" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter movie year" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter movie genre" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter movie IDMB" />
                    </div>
                    <button
                        onClick={() => console.log('Heeeeey :)')}
                        className="btn btn-success"
                    >Add The Movie</button>
                </form>
            </div>
        )
    }
}
