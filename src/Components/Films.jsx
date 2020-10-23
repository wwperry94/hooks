import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Films = () => {

    const [dataArr, setdataArr] = useState([]);


    const getData = async () => {
        let res = await fetch('https://ghibliapi.herokuapp.com/films');
        let dataArr = await res.json();
        setdataArr(dataArr);
    }

    useEffect(async () => {
        getData();
    }, []);


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
export default Films