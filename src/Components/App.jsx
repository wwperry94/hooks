import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Films from './Films';
import People from './People';
import { SingleFilm } from './SingleFilm';
import { SinglePerson } from "./SinglePerson";
import logo from './assets/logo.png';
import kiki from './assets/kiki.gif';

const App = () => {

    return (
        <Router>
            <Fragment>
                <div className="shadow p-3 mb-5 bg-white rounded">
                    <nav className="navbar navbar-dark bg-dark">
                        <Link to="/films" className="btn btn-secondary" style={{ marginLeft: "2em", marginTop: "1em", marginBottom: "1em", fontSize: "25px", borderRadius: "20px" }}>Go to Films</Link>
                        <Link to="/People" className="btn btn-secondary" style={{ marginRight: "2em", marginTop: "1em", marginBottom: "1em", fontSize: "25px", borderRadius: "20px" }}>Go to People</Link>
                    </nav>
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1em", backgroundImage: `url(${kiki})` }}>
                        <img src={logo} alt={"this is the logo"} ></img>
                </div>
                <br />
                <div className="alert alert-dark" role="alert" style={{ display: "flex", justifyContent: "center" }}>
                    Welcome, and enjoy these useless facts!
            </div>
                <Switch>
                    <Route path="/films/:id" component={SingleFilm} />
                    <Route path="/people/:id" component={SinglePerson} />
                    <Route path="/people" component={People} />
                    <Route path="/films" component={Films} />
                </Switch>
            </Fragment>
        </Router>
    )
};
export default App;