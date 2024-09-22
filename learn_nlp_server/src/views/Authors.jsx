import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findByName } from "../api/authorApi";
import SearchBar from "../components/SearchBar";

export default function Authors() {
    const [authors, setAuthors] = useState();
    const [search, setSearch] = useState("");

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
            <div className="w-2/5 mb-4">
                <Link to="/authors/add" className="btn btn-primary">Add Author</Link>
            </div>
            <div className="items-center justify-center text-center px-6">
                <div>
                    <SearchBar label="Author" value={search} setValue={setSearch} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {authors?.map(author => (
                    <div key={author.id} className="col">
                        <div className="card bg-blue-50 shadow-lg hover:shadow-xl h-full">
                            <div className="card-body">
                                <h5 className="card-title text-blue-600 font-bold">{author.name}</h5>
                                <p className="card-text text-blue-400">{author.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
}