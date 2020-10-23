import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const People = () => {

    const [dataArr, setdataArr] = useState([]);


    const getData = async () => {
        let res = await fetch('https://ghibliapi.herokuapp.com/people');
        let dataArr = await res.json();
        setdataArr(dataArr);
    }

    useEffect(async () => {
        getData();
    }, []);


    return dataArr.map((data, idx) => {
        return (<div key={idx} className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.age}</p>
                    <Link to={`/people/${data.id}`} className="btn btn-secondary">Bio</Link>
                </div>
            </div>
        </div>

        )})
}
export default People