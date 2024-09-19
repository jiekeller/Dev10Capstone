import { useState } from "react";




export default function ExploreNLP() {

    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');

    const ComponentA = () => 
    <div>
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' , marginBottom: '20px'}}>Word-to-word Similarity</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <label htmlFor="word1" style={{ marginRight: '10px' }}>Word1:</label>
                <input onChange={(e) => setWord1(e.target.value)} type="text" id="word1" name="word1" style={{ border: '1px solid black', padding: '5px', marginRight: '20px' }} />
                <label htmlFor="word2" style={{ marginRight: '10px' }}>Word2:</label>
                <input onChange={(e) => setWord2(e.target.value)} type="text" id="word2" name="word2" style={{ border: '1px solid black', padding: '5px' }} />
                <button style={{ padding: '5px 10px', marginLeft: '20px', border: '1px solid black', backgroundColor: '#f0f0f0', cursor: 'pointer' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onClick={handleCompare}>
                    Compare
                </button>
            </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <label id="result" style={{ fontSize: '20px', fontWeight: 'bold' }}>Result: </label>
        </div>
    </div>;

    const ComponentB = () => 
    <div>
        different component
    </div>;


    const [visibleComponent, setVisibleComponent] = useState('ComponentA');




    function handleCompare() {
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
                result.textContent = `Result: ${roundedData}`;
            })
            .catch((error) => {
                console.error('Error:', error);
                result.textContent = 'An error occurred while comparing the words.';
            });
    }

    return (
        <div>
            <h1 className="text-5xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Let's Explore some NLP Tools!
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <button style={{ padding: '5px 10px', border: '1px solid black', backgroundColor: '#f0f0f0', cursor: 'pointer' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onClick={() => setVisibleComponent('ComponentA')}>
                    Component A
                </button>
                <button style={{ padding: '5px 10px', border: '1px solid black', backgroundColor: '#f0f0f0', cursor: 'pointer', marginLeft: '20px' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'lightblue'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                    onClick={() => setVisibleComponent('ComponentB')}>
                    Component B
                </button>
            </div>
            {visibleComponent === 'ComponentA' && <ComponentA />}
            {visibleComponent === 'ComponentB' && <ComponentB />}

        </div>
    );
}

// turn it into a form -> submit button. evt stores information.
// form ? references get me text from word1 word2 ref
// usesTate
// when set state to be new text
// useState word1input give state, onChange, update state , console log everything with the useState onChange. udate state
// whenc ompare, check values at that time
//<label> Input 1: <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} /> </label>
// write a little bit about letting users explore bias