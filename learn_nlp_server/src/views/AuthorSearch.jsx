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
        const action = evt.target.getAttribute("data-action");
        handleAuthor(action === "add", author);
    }

    return (
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
            <div className="list-group">
                {authors.map(author => (
                    <button
                        key={author.id}
                        value={author.id}
                        onClick={handleClick}
                        data-action="add"
                        className="list-group-item list-group-item-action"
                    >
                        {author.name}
                    </button>
                ))}
            </div>
        </div>
    );

    function handleRemove(authorId) {
        setAuthors(authors.filter(author => author.id !== authorId));
    }

    function handleAdd() {
        const newAuthor = { id: Date.now(), name: search };
        setAuthors([...authors, newAuthor]);
        setSearch("");
    }
}