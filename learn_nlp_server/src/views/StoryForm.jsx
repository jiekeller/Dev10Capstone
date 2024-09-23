import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import AuthorSearch from './AuthorSearch';

const INITIAL_STORY = {
    id: 0,
    author: {
        name: '',
        description: '',
        id: 0
    },
    description: '',
    category: '',
    title: '',
    text: '',
    publishedDate: ''
};

export default function StoryForm() {
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
                .then(data => {

                    if (!data.publishedDate) {
                        data.publishedDate = '';
                    }
                    setStory(data)
                })
                .catch(console.error);
        }
    }, [id]);

    function doCreate() {
        console.log(JSON.stringify(story));
        if (story.publishedDate === '') {
            story.publishedDate = null;
        }
        fetch(`http://localhost:8080/api/story`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
        console.log(story.id);
        if (story.publishedDate === '') {
            story.publishedDate = null;
        }
        console.log(JSON.stringify(story));
        console.log(auth.user.token)
        fetch(`http://localhost:8080/api/story/${story.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
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

    function handleAuthor(isAdd, author) {
        if (isAdd) {
            setStory({ ...story, author: author });
        } else {
            setStory({ ...story, author: { name: '', description: '', id: 0 } });
        }

        console.log(story.author);

    }

    return (
        <div>
            <h2 className="text-3xl p-6 font-semibold leading-7 text-gray-900">{story.id > 0 ? 'Update' : 'Add'} </h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 px-12">
                        <div className="">
                            <label className="pr-10" htmlFor="title">Title</label>
                            <input className="input input-bordered w-1/2"
                                type="text" id="title" name="title" value={story.title} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <AuthorSearch storyAuthor={[story.author]} handleAuthor={handleAuthor} />
                        </div>
                        <div>
                            <label className="pr-10" htmlFor="text">Text</label>
                            <textarea className="w-full h-32 p-2 m-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="text" name="text" value={story.text} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="pr-10" htmlFor="category">Category</label>
                            <div className="p-5">
                                <label>
                                    <input type="radio" id="document" name="category" value="DOCUMENT" checked={story.category === 'DOCUMENT'} onChange={handleChange} />
                                    Document
                                </label>
                                <label className="ml-4">
                                    <input type="radio" id="shortStory" name="category" value="SHORT_STORY" checked={story.category === 'SHORT_STORY'} onChange={handleChange} />
                                    Short Story
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="pr-10" htmlFor="publishedDate">Published Date</label>
                            <input className="input input-bordered w-1/2" placeholder="yyyy-mm-dd"
                                type="text" id="publishedDate" name="publishedDate" value={story.publishedDate} onChange={handleChange} />
                        </div>
                        <div className="p-6">
                            <button className="btn btn-primary"
                                type="submit">Submit</button>
                            <button className="btn btn-active ml-4"
                                type="button" onClick={() => navigate('/')}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}