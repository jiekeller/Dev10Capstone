import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { findByName } from "../api/authorApi";
import SearchBar from "../components/SearchBar";
import AuthContext from "../context/AuthContext";

export default function Authors() {
    const [authors, setAuthors] = useState();
    const [search, setSearch] = useState("");

    const auth = useContext(AuthContext);

    const canDelete = auth.user && auth.user.hasRole("ADMIN");

    useEffect(() => {
        if (search.length > 1) {
            findByName(search)
                .then(setAuthors)
                .catch(console.error);
        } else {
            setAuthors([]);
        }
    }, [search]);

    return (
        <div className="text-center">
            <h1 className="text-5xl p-6">
                Authors
            </h1>
            <div className="w-3/5 mb-4">
                <Link to="/authors/add" className="btn bg-blue-600 text-white btn-lg hover:bg-blue-900 transition duration-300">Add Author</Link>
            </div>
            <div className="flex items-center justify-center text-center px-6">
                <SearchBar label="Author" value={search} setValue={setSearch} />
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {authors?.map(author => (
                        <div key={author.id} className="col">
                            <div className="card shadow-lg hover:shadow-xl h-full">
                                <div className="card-body text-center">
                                    <h5 className="card-title justify-center text-blue-600 font-bold">{author.name}</h5>
                                    <p className="card-text text-blue-400">{author.description}</p>
                                    <div className="flex justify-center">
                                    {canDelete && (
                                        <Link state={author} to={`/authors/delete/${author.id}`} className="btn btn-sm justify-center items-center text-center max-w-sm bg-purple-400 text-white btn-sm hover:bg-purple-600 transition duration-300">Delete</Link>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}