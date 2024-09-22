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
        <div>
            <p>Are you sure you want to delete this?</p>
            <p>{deleteStory.title}</p>
            <p>{deleteStory.description}</p>
            <p>{deleteStory.author.name}</p>
            <p>{deleteStory.category}</p>
            <div>
                <button onClick={handleDelete}>Confirm</button>
                <button type="button" onClick={() => navigate('/stories')}>Cancel</button>
                </div>
        </div>
    )
}