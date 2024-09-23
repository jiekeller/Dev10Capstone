import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";


export default function ConfirmDeleteAuthor() {
    const { state: author } = useLocation();
    const { id } = useParams();

    const auth = useContext(AuthContext);


    const navigate = useNavigate();

    const handleDelete = () => {
        deleteAuthor(id).then(() => history.push("/authors"));
    };

    function deleteAuthor(id) {
        fetch(`http://localhost:8080/api/author/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${auth.user.token}`,
            },
        })
            .then(res => {
                if (res.ok) {
                    navigate('/authors');
                }
            });
    }

    return (
        <div className="px-10 pt-5" style={{fontFamily: 'Arial, sans-serif'}} >
            <p className="text-xl">Are you sure you want to delete this?</p>
            <p className="pt-5">Name: {author.name}</p>
            <p>Description: {author.description}</p>
            <button className="btn btn-warning btn-sm" onClick={handleDelete}>Delete</button>
            <Link to="/authors" className="btn btn-active btn-sm ml-2" >Cancel</Link>
        </div>
    );
}