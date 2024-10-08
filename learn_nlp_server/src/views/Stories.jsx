import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function Stories() {

    const [stories, setStories] = useState([]);

    const auth = useContext(AuthContext);

    const canEdit = auth.user !== null;
    const canDelete = auth.user && auth.user.hasRole("ADMIN");

    useEffect(() => {
        fetch('http://localhost:8080/api/story')
            .then(res => res.json())
            .then(data => setStories(data));
    }
        , []);

    console.log(stories);

    return (
        <div className="text-center">
            <h1 className="text-5xl p-6">
                Let's Use NLP Tools to Examine Some Text!
            </h1>
            <div className="px-10 w-3/5">
                {canEdit && (
                    <div>

                        <Link to="/add" className="btn bg-blue-600 text-white btn-lg hover:bg-blue-900 transition duration-300">
                            Add a Story
                        </Link>

                    </div>
                )}
            </div>
            <div className="flex space-x-6 justify-center flex-wrap">
                {stories.map((story, index) => (
                    <div key={index} className="card bg-base-100 w-96 min-w-96 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">
                                {story.title}
                            </h3>
                            <p><strong>Description:</strong> {story.description}</p>
                            <p><strong>Author:</strong> {story.author.name}</p>
                            <p><strong>Category:</strong> {story.category}</p>
                            <div className="card-actions justify-end">
                                <Link state={story} className="btn bg-blue-900 text-white btn-sm hover:bg-blue-400 transition duration-300" to={`/story/${story.id}`}>
                                    Examine
                                </Link>
                                {canEdit && (
                                    <Link className="btn bg-cyan-600 text-white btn-sm hover:bg-cyan-400 transition duration-300" to={`/edit/${story.id}`}>
                                        Edit
                                    </Link>
                                )}
                                {canDelete && (
                                    <Link state={story} className="btn bg-purple-400 text-white btn-sm hover:bg-purple-600 transition duration-300" to={`/delete/${story.id}`}>
                                        Delete
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

