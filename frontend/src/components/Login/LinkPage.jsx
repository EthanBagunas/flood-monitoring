import { Link } from "react-router-dom"
import React from 'react';
const LinkPage = () => {
    return (
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/Home">Home</Link>
            <Link to="/user">User Page</Link>
            <Link to="/admin">Admin Page</Link>
        </section>
    )
}

export default LinkPage