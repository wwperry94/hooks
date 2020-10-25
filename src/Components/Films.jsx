import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { spinner } from './utilities.jsx'

const Films = () => {

    const [dataArr, setdataArr] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        await setLoading(true);
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let data = await res.json();
        await setdataArr(data);
        setLoading(false);
    }
    useEffect(async () => {
        getData();
    }, []);
    if (loading) {
        return spinner();
    } else {
        return dataArr.map(data => {
            return (<div key={data.id} className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">Directed by: {data.director}</p>
                        <Link to={`/films/${data.id}`} className="btn btn-secondary">View Description</Link>
                    </div>
                </div>
            </div>
            )
        })
    }
}
export default Films