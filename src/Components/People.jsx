import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { spinner } from './utilities.jsx'

const People = () => {

    const [dataArr, setdataArr] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        await setLoading(true);
        let res = await fetch('https://ghibliapi.herokuapp.com/people');
        let dataArr = await res.json();
        await setdataArr(dataArr);
        setLoading(false);
    }
    useEffect(async () => {
        getData();
    }, []);
    if (loading) {
        return spinner();
    } else {
        return (
            dataArr.map((data, idx) => {
            return (<div key={idx} className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.age}</p>
                        <Link to={`/people/${data.id}`} className="btn btn-secondary">Bio</Link>
                    </div>
                </div>
            </div>
            )}))}}
export default People