import { Description } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

const INITIAL_STORY = {
    id: 0,
    author: {
        name: '',
        description: '',
        id: 0
    },
    category: '',
    title: '',
    text: '',
    publishedDate: ''
};

export default function StoryForm({ handleAddStory, handleUpdateStory }) {
    const [story, setStory] = useState(INITIAL_STORY);
    const navigate = useNavigate();
    const { id } = useParams();
    const auth = useContext(AuthContext);


    function handleChange(e) {
        const updatedStory = { ...story };

        if (e.target.type === 'checkbox') {
            updatedStory[e.target.name] = e.target.checked;
        } else {
            updatedStory[e.target.name] = e.target.value;
        }
        setStory(updatedStory);

        console.log(updatedStory);
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/api/story/${id}`)
                .then(response => response.json())
                .then(setStory)
                .catch(console.error);
        }
    }, [id]);

    function doCreate() {
        fetch(`http://localhost:8080/api/story`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${auth.user.token}`,
            },
            body: JSON.stringify(story),
        })
            .then(res => {
                if (res.ok) {
                    navigate(`/stories`);
                } else if (res.status === 400) {
                    // Log for now, we'll come back to this!
                    console.log(res);
                } else {
                    //If the response code is anything else, reject promise and throw code execution to .catch()
                    return Promise.reject(
                        new Error(`Unexpected status code: ${res.status}`)
                    );
                }
            })
            .catch(console.error); // For now, just log any other types of errors
    }

    function doUpdate() {
        fetch(`http://localhost:8080/api/story/${story.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${auth.user.token}`,
          },
          body: JSON.stringify(story),
        })
          .then(res => {
            if (res.ok) {
              navigate(`/stories`);
            } else if (res.status === 400) {
              // Log for now, we'll come back to this!
              console.log(res);
            } else if (res.status === 404) {
              // Log for now, we'll come back to this!
              console.log('Story not found');
            } else {
              // Any other status code is unexpected and thrown to .catch()
              return Promise.reject(
                new Error(`Unexpected status code: ${res.status}`)
              );
            }
          })
          .catch(console.error); // For now, just log unexpected errors
      }

    function handleSubmit(e) {
        e.preventDefault();

        if (story.id > 0) {
            doUpdate();
        } else {
            doCreate();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>{story.id > 0 ? 'Update' : 'Add'}</h4>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={story.title} onChange={handleChange} />
            <label htmlFor="text">Text</label>
            <textarea id="text" name="text" value={story.text} onChange={handleChange} />
            <label htmlFor="category">Category</label>
            <input type="text" id="category" name="category" value={story.category} onChange={handleChange} />
            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" value={story.author.name} onChange={handleChange} />
            <label htmlFor="publishedDate">Published Date</label>
            <input type="date" id="publishedDate" name="publishedDate" value={story.publishedDate} onChange={handleChange} />
            <button type="button" onClick={() => navigate('/')}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    );
}