import {Link} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';

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
        <div>
            <h1 className="text-5xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Welcome to the Stories page!</h1>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' , marginBottom: '20px'}} >Here are some stories:</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {stories.map((story, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '300px' }}>
                        <h3>
                            <Link to={`/story/${story.id}`}>
                                {story.title}
                            </Link>
                        </h3>
                        <p><strong>Author:</strong> {story.author.name}</p>
                        <p><strong>Description:</strong> {story.description}</p>
                        <p><strong>Category:</strong> {story.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    }

