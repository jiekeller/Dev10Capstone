import { useState } from "react";




export default function ExploreNLP() {

    const ComponentA = () => {
        const [word1, setWord1] = useState('');
        const [word2, setWord2] = useState('');
        const [loading, setLoading] = useState(true);
        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Word-to-word Similarity</h2>
                    <div className="flex space-x-4 justify-center">
                        <label className="input input-bordered flex items-center gap-2 w-1/3">
                            Word1
                            <input type="text" className="grow" placeholder="Apple" value={word1} onChange={(e) => setWord1(e.target.value)} id="word1" name="word1" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-1/3">
                            Word2
                            <input type="text" className="grow" placeholder="Orange" value={word2} onChange={(e) => setWord2(e.target.value)} id="word2" name="word2" />
                        </label>
                        <button className="btn btn-outline btn-info"
                            onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                            onClick={(e) => handleCompare(word1, word2, e, loading, setLoading)}>
                            Compare
                        </button>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <label id="result" style={{ fontSize: '20px', fontWeight: 'bold' }}>Result: </label>
                </div>

            </div>
        )
    }


    const ComponentB = () => {
        const [word, setWord] = useState('');
        const [numWords, setNumWords] = useState('');
        const [loading, setLoading] = useState(true);
        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>N-Closest Words</h2>
                    <div className="flex space-x-4 justify-center">
                        <label className="input input-bordered flex items-center gap-2 w-1/3">
                            Word
                            <input type="text" className="grow" placeholder="Apple" value={word} onChange={(e) => setWord(e.target.value)} id="word" name="word" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-1/3">
                            N-words
                            <input type="text" className="grow" placeholder="5" value={numWords} onChange={(e) => setNumWords(e.target.value)} id="numWords" name="numWords" />
                        </label>
                        <button className="btn btn-outline btn-info"
                            onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                            onClick={(e) => handleClosest(word, numWords, e, loading, setLoading)}>
                            Examine
                        </button>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <label id="result" style={{ fontSize: '20px', fontWeight: 'bold' }}>Result: </label>
                </div>
            </div>
        )
    }

    const ComponentC = () => {
        const [sentence, setSentence] = useState('');
        const [sentiment, setSentiment] = useState('');
        const [loading1, setLoading1] = useState(true);


        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Sentiment Analysis</h2>
                    <div className="flex space-x-4 justify-center">
                        <label className="input input-bordered flex items-center gap-2 w-1/2">
                            Sentence
                            <input type="text" className="grow" placeholder="I love this movie" value={sentence} onChange={(e) => setSentence(e.target.value)} id="sentence" name="sentence" />
                        </label>
                        <button className="btn btn-outline btn-info"
                            onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                            onClick={(e) => handleSentiment(sentence, sentiment, e, loading1, setLoading1)}>
                            Analyze
                        </button>
                    </div>
                    <div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <label id="result" style={{ fontSize: '20px', fontWeight: 'bold' }}>Result: </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const ComponentD = () => {
        const [sentence, setSentence] = useState('');
        const [loading, setLoading] = useState(true);

        return (
            <div>
                <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Named Entity Recognition</h2>
                    <div className="flex space-x-4 justify-center">
                        <label className="input input-bordered flex items-center gap-2 w-1/2">
                            Sentence
                            <input type="text" className="grow" placeholder="Barack Obama was born in Hawaii" value={sentence} onChange={(e) => setSentence(e.target.value)} id="sentence" name="sentence" />
                        </label>
                        <button className="btn btn-outline btn-info"
                            onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                            onClick={(e) => handleNER(sentence, e, loading, setLoading)}>
                            Recognize
                        </button>
                    </div>
                    <div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <label id="result" style={{ fontSize: '20px', fontWeight: 'bold' }}>Result: </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    const [visibleComponent, setVisibleComponent] = useState('ComponentA');

    // const [visibleClarification, setVisibleClarification] = useState('ComponentA');




    function handleCompare(word1, word2, event, loading, setLoading) {
        if (!word1 || !word2) {
            alert('Please enter two words to compare.');
            return;
        }
        event.preventDefault();
        // Use state variables instead of directly accessing DOM elements
        const result = document.getElementById('result');
        fetch('http://localhost:8080/api/nlp', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word1, word2 }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                let roundedData = data.toFixed(4)
                setLoading(false);
                result.textContent = `Result: ${roundedData}`;
            })
            .catch((error) => {
                console.error('Error:', error);
                result.textContent = 'An error occurred while comparing the words.';
            });
        if (loading) {
            result.textContent = `Result: Loading...`;
        };
    }

    function handleClosest(word, n, event, loading, setLoading) {
        if (!word || !numWords) {
            alert('Please enter a word and number of closest words to find.');
            return;
        }
        event.preventDefault();
        // Use state variables instead of directly accessing DOM elements
        const result = document.getElementById('result');
        fetch('http://localhost:8080/api/nlp/closest', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word, n: Number(n) }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setLoading(false);
                result.textContent = `Result: ${data.join(', ')}`;
            })
            .catch((error) => {
                console.error('Error:', error);
                result.textContent = 'An error occurred while finding the closest words.';
            });

        if (loading) {
            result.textContent = `Result: Loading...`;
        }
    }

    function handleSentiment(text, sentiment, event, loading1, setLoading1) {
        console.log(text);
        if (!text) {
            alert('Please enter a sentence to analyze.');
            return;
        }
        event.preventDefault();
        // Use state variables instead of directly accessing DOM elements
        const result = document.getElementById('result');
        fetch('http://localhost:8080/api/nlp/sentiment', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text }),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                setLoading1(false);
                result.textContent = `Result: ${data}`;
            })
            .catch((error) => {
                console.error('Error:', error);
                result.textContent = 'An error occurred while analyzing the sentiment.';
            });

        if (loading1) {
            result.textContent = `Result: Loading...`;
        }
    }

    function handleNER(text, event, loading, setLoading) {
        if (!text) {
            alert('Please enter a sentence to analyze.');
            return;
        }
        event.preventDefault();
        // Use state variables instead of directly accessing DOM elements
        const result = document.getElementById('result');
        fetch('http://localhost:8080/api/nlp/entities', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text }),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                setLoading(false);
                result.textContent = `Result: ${data}`;
            })
            .catch((error) => {
                console.error('Error:', error);
                result.textContent = 'An error occurred while recognizing named entities.';
            }
            );
        if (loading) {
            result.textContent = `Result: Loading...`;
        }
    }

    function handleClarification() {
        const currentComponent = visibleComponent;
        if (currentComponent === 'ComponentA') {
            alert('This tool calculates the similarity between two words. Our model has been trained on a large corpus of text, try words that stretch the model, perhaps revealing some gender or racial bias. ');
        } else if (currentComponent === 'ComponentB') {
            alert('This tool finds the N closest words to a given word. Enter a word and the number of closest words to find, then click "Examine" to see the result.');
        }
        else if (currentComponent === 'ComponentC') {
            alert('This tool analyzes the sentiment and emotion of a sentence. Enter a sentence and click "Analyze" to see the result.');
        }
        else if (currentComponent === 'ComponentD') {
            alert('This tool recognizes named entities in a sentence. Enter a sentence and click "Recognize" to see the result.');
        }
    }


    return (
        <div className="text-center">
            <h1 className="text-5xl p-6">
                Let's Explore some NLP Tools!
            </h1>
            <section className="fixed top-10 left-1 flex flex-col mt-10">
                <img
                    src='src\assets\clarification.png'
                    alt="Word Vectorization"
                    onClick={() => handleClarification()}
                    style={{ display: 'block', maxWidth: '8%' }}
                />
            </section>
            <div className="flex space-x-6 justify-center">
                <button className="btn bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 btn-sm"
                    onClick={() => setVisibleComponent('ComponentA')}>
                    W2W Similarity
                </button>
                <button className="btn bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 btn-sm"
                    onClick={() => setVisibleComponent('ComponentB')}>
                    N-Closest Words
                </button>
                <button className="btn bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 btn-sm"
                    onClick={() => setVisibleComponent('ComponentC')}>
                    Sentiment Analysis
                </button>
                <button className="btn bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 btn-sm"
                    onClick={() => setVisibleComponent('ComponentD')}>
                    Named Entity Recognition
                </button>
            </div>
            {visibleComponent === 'ComponentA' && <ComponentA />}
            {visibleComponent === 'ComponentB' && <ComponentB />}
            {visibleComponent === 'ComponentC' && <ComponentC />}
            {visibleComponent === 'ComponentD' && <ComponentD />}
            <p className="text-center text-sm mt-10 text-gray-500">Click the magnifying glass for more information on each tool.</p>
        </div>
    );
}