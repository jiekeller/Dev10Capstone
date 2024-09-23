import { useEffect, useState } from "react";
import { findByName } from "../api/authorApi";

export default function AuthorSearch({ storyAuthor, handleAuthor }) {

    const [search, setSearch] = useState("");
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        if (search.length > 1) {
            findByName(search)
                .then(setAuthors)
                .catch(console.error);
        } else {
            setAuthors([]);
        }
    }, [search]);

    function handleClick(evt) {
        evt.preventDefault();
        const author = authors.find(a => a.id === parseInt(evt.target.value));
        const authorId = parseInt(evt.target.value);
        const action = evt.target.getAttribute("data-action");
        if (!author) {
            author = storyAuthor.find(a => a.id === authorId);
        }
        handleAuthor(action === "add", author);

    }

    return (
        <div>
            <div>
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={search}
                    className="form-control"
                    onChange={evt => setSearch(evt.target.value)}
                />
            </div>
            {storyAuthor?.filter(author => author.name).map(author => (
                <div className="row mb-2" key={author.id}>
                    <div className="col-2">{author.name}</div>
                    <div className="col-10">
                        <button type="button" className="btn btn-danger btn-sm" data-action="remove"
                            value={author.id} onClick={handleClick}>Remove</button>
                    </div>
                </div>
            ))}
            {authors
                ?.filter(a => a.name && !storyAuthor.some(ba => ba.id === a.id))
                .map(author => (
                    <div className="row mb-2" key={author.id}>
                        <div className="col-2">{author.name}</div>
                        <div className="col-10">
                            <button type="button" className="btn btn-primary btn-sm" data-action="add"
                                value={author.id} onClick={handleClick}>Add</button>
                        </div>
                    </div>
                ))}
        </div>
    );

}