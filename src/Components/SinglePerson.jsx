import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { spinner } from './utilities.jsx';


export const SinglePerson = () => {
    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const getData = async () => {
        await setLoading(true);

        let res = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
        let person = await res.json();
        await setPerson(person);
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
                    <h1 className="display-4">{person.name}</h1>
                    <p className="lead">Gender: {person.gender}</p>
                    <p className="lead">Eyes: {person.eye_color}</p>
                    <p className="lead">Hair: {person.hair_color}</p>
                </div>
            </div>
        </div>
    )}}
export default SinglePerson;