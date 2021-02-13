import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <header className="header1">
                <h1 className="header1Title">Interviews Reports</h1>
                <div className="headerButtons">
                <Link to="/"><button className="link">Candidates</button></Link>
                <Link to="/loginPage" className="linkTo"><button className="link">Log in</button></Link>
                </div>
            </header>
        );
    }
}

export { Header };