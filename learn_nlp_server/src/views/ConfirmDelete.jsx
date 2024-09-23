import {useContext, useState, useEffect} from "react";
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function ConfirmDelete() {
    const { state: deleteStory } = useLocation();
    console.log(deleteStory);
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    function handleDelete() {
        fetch(`http://localhost:8080/api/story/${deleteStory.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${auth.user.token}`,
            },
        })
            .then(res => {
                if (res.ok) {
                    navigate('/stories');
                }
            });
    }


    return (
        <div className="px-10 pt-5" style={{fontFamily: 'Arial, sans-serif'}}>
            <p className="text-xl">Are you sure you want to delete this?</p>
            <p className="pt-5">Title: {deleteStory.title}</p>
            <p>Description: {deleteStory.description}</p>
            <p>Author: {deleteStory.author.name}</p>
            <p>Category: {deleteStory.category}</p>
            <div>
                <button className="btn btn-warning btn-sm"  onClick={handleDelete}>Confirm</button>
                <button className="btn btn-active btn-sm ml-2" type="button" onClick={() => navigate('/stories')}>Cancel</button>
                </div>
        </div>
    )
}