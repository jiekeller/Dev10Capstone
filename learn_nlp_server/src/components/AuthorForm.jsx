import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';
import Error from '../components/Error';

const INITIAL_AUTHOR = {
    id: 0,
    name: '',
    description: ''
};

export default function AuthorForm() {
    const [author, setAuthor] = useState(INITIAL_AUTHOR);
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const [errors, setErrors] = useState([]);

    function handleChange(e) {
        const updatedAuthor = { ...author };
        updatedAuthor[e.target.name] = e.target.value;
        setAuthor(updatedAuthor);

        console.log(updatedAuthor);
    }

    function doCreate() {
        fetch(`http://localhost:8080/api/author`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.user.token}`,
            },
            body: JSON.stringify(author),
        }).then(res => {
            if (res.ok) {
                navigate('/authors');
            } else if (res.status === 400) {
                return res.json();
            } else {
                return Promise.reject(["Unexpected response code: " + res.status]);
            }
        }).then(setErrors)
        .catch(setErrors);

    }

    function handleSubmit(e) {
        e.preventDefault();
        doCreate();
    }

    return (
        <div>
            <h2 className="text-3xl p-6 font-semibold leading-7 text-gray-900"> Add Author</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 px-12">
                        <div>
                            <label className="pr-10" htmlFor="name">Name</label>
                            <input className="ml-10 input input-bordered w-1/2" type="text" id="name" name="name" value={author.name} onChange={handleChange} />
                        </div>
                        <div className="mt-5">
                            <label className="pr-10" htmlFor="description">Description</label>
                            <input className="input input-bordered w-1/2" type="text" id="description" name="description" value={author.description} onChange={handleChange} 
                            maxlength="255" />
                        </div>
                        <div className="p-6">
                            <button className="btn bg-blue-600 text-white hover:bg-blue-900 transition duration-300" type="submit">Add</button>
                            <Link className="btn btn-active ml-4" to="/authors">Cancel</Link>
                        </div>
                    </div>
                </div>
                {errors?.length !== 0 && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <ul>
                        {errors?.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>}

            </form>
        </div>
    );
}
