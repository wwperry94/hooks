import React, { useState, useEffect } from 'react';
import { spinner } from './utilities.jsx';
import { useParams } from 'react-router-dom';


export const SingleFilm = () => {
    const [film, setFilm] = useState({});
    const { id } = useParams();
    const getData = async () => {
        let res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
        let film = await res.json();
        setFilm(film);
    }
    useEffect(async () => {
        getData();
    }, []);

    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{film.title}</h1>
                    <p className="lead">{film.description}</p>
                </div>
            </div>
        </div>
    )
}