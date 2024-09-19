import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

export default function Story() {
    const location = useLocation();
    console.log(location.state.id);
    const { state: newStory } = useLocation();
    console.log(newStory);

    const [word, setWord] = useState('');

    const handleCompare = (word, e) => {
        if(!word) {
            alert('Please enter a word to compare!');
        }
        e.preventDefault();
        const result = document.getElementById('result');
        fetch(`http://localhost:8080/api/nlp/document`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                word: word,
                document: newStory.text
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                let roundedData = data.toFixed(4)
                result.innerText = `Result: ${roundedData}`;
            });
    }
        

    return (
        <div className="text-center">
            <h1 className="text-5xl p-6">Word-to-Document Similarity!</h1>
            <div className="text-left text-xl p-6">
                <p>Enter a word to compare to the {newStory.category.toLowerCase()}:</p>
            </div>
            <div className="flex space-x-4 justify-center">
                <label className="input input-bordered flex items-center gap-2 w-1/3">
                    Word2
                    <input type="text" className="grow" placeholder="Orange" value={word} onChange={(e) => setWord(e.target.value)} id="word" name="word" />
                </label>
                <button className="btn btn-outline btn-info"
                    onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onClick={(e) => handleCompare(word, e)}>
                    Compare
                </button>
                <label id="result" className="text-xl p-3 items-center text-center">Result: </label>
            </div>

            <h3 className="text-5xl p-6">{newStory.title}</h3>
            <h2 className="text-xl p-2">By: {newStory.author.name}</h2>
            <p>{newStory.description}</p>
            <div>
                <p className="text-xl p-6">{newStory.text}</p>
            </div>
        </div>
    )
}