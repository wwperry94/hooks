import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { spinner } from './utilities.jsx';


export const SingleFilm = () => {
    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const getData = async () => {
        await setLoading(true);

        let res = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
        let film = await res.json();
        await setFilm(film);
        setLoading(false);

    }
    useEffect(async () => {
        getData();
    }, []);
    if (loading) {
        return spinner();
    } else {
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{film.title}</h1>
                    <p className="lead">{film.description}</p>
                </div>
            </div>
        </div>
    )}}