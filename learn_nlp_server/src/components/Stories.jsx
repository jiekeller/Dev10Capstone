import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

export default function Stories() {

    const [stories, setStories] = useState([]);

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
            <div className="flex space-x-6 justify-center">
                {stories.map((story, index) => (
                    <div key={index} className="card bg-base-100 w-96 shadow-xl" >
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">
                                {story.title}
                            </h3>
                            <p><strong>Description:</strong> {story.description}</p>
                            <p><strong>Author:</strong> {story.author.name}</p>
                            <p><strong>Category:</strong> {story.category}</p>
                            <div className="card-actions justify-end">
                            <Link state={story} className="btn btn-accent btn-sm" to={`/story/${story.id}`}>
                                    Examine
                            </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

