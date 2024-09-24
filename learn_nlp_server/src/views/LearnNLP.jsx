export default function LearnNLP() {
    return (
        <div>
            <h1 className="text-5xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                What is Natural Language Processing?
            </h1>
            <h1 className="text-4xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>The Basics</h1>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                Imagine you're talking to your phone or computer, like asking it to play your favorite song. NLP is the magic that helps the computer understand what you're saying or typing. Computers don’t understand our language like we do, so NLP helps translate human language into something the computer can work with. It's like teaching a robot to understand and respond to human words!</p>

            <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>How does word or text similarity work?</h2>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Let’s say you want to know how similar two words are, like "cat" and "kitten." Even though they’re different words, they are similar because they both refer to small animals.</p>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Here’s how the computer figures it out:</p>

            <ol style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', listStyleType: 'decimal' }}>
                <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Turning Words into Numbers</strong>: First, the computer changes each word into numbers or "codes." It can’t understand words the way we do, but it can understand numbers. Each word gets a special set of numbers called a "vector" (like a word’s ID).</li>
                <img
                    src='src\assets\firstparagraphLearn.png'
                    alt="Person To Computer Communication"
                    style={{ display: 'block', margin: '5px auto', maxWidth: '90%' }}
                />
                <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Measuring Distance</strong>: After the words are turned into numbers, the computer looks at how "close" these numbers are. If the numbers for "cat" and "kitten" are close together, it knows the words are related. If the numbers are far apart, like between "cat" and "car," it knows they aren’t related.</li>
            </ol>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Turning <strong>Sentences</strong> into Numbers: The same thing happens with sentences. The computer changes each sentence into numbers and then checks how similar the sets of numbers are to each other. For example, “The sky is blue” is close to “The sky looks clear,” but very different from “The car is red.”</p>


            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', maxWidth: '75%', margin: '0 auto' }}>In short, the computer uses numbers and distances to decide if words or sentences are similar. It’s like how we know that "big" and "large" mean almost the same thing, but we have to teach the computer that by giving it lots of examples!</p>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>We can use this process to compare words, sentences and even find the 'closest words' to a given term.</p>

            <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>What are Named Entity Recognition and Sentiment Analysis?</h2>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Named Entity Recognition (NER)</strong> is a process in Natural Language Processing (NLP) where a model identifies and classifies named entities—such as people, organizations, locations, dates, and more—in a given text. For example, in the sentence "Apple Inc. was founded by Steve Jobs in California," NER would classify "Apple Inc." as an organization, "Steve Jobs" as a person, and "California" as a location. It’s useful for extracting structured information from unstructured text.</p>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Sentiment Analysis</strong> is another NLP tool where a model determines the emotional tone or attitude expressed in a text. It categorizes the sentiment as positive, negative, or neutral by analyzing words and phrases. For example, in "This movie was fantastic!" the sentiment would be classified as positive, while in "The service was terrible," it would be negative. It helps businesses and researchers understand opinions and feelings in customer reviews, social media, and other texts.</p>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>So, NER finds important names, and Sentiment Analysis understands feelings!</p>



            <h3 className="text-4xl px-6 pt-20" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>A Deeper Dive</h3>
            <div className="" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', paddingBottom: '100px' }}>
                <h1 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Introduction to NLP: Word-to-Word Similarity</h1>
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Both TF-IDF and Word2Vec are methods used to represent words as numbers (vectors) for use in natural language processing (NLP) tasks, but they work in different ways and serve different purposes.</p>

                <ol>
                    <li>
                        <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>1. TF-IDF (Term Frequency-Inverse Document Frequency)</h2>
                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>TF-IDF is a traditional method to represent text data based on how often a word appears in a document (term frequency) and how rare that word is across all documents (inverse document frequency).</p>
                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Term Frequency (TF):</strong> Measures how often a word appears in a single document. The more a word appears in a document, the higher its TF score.</p>
                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Inverse Document Frequency (IDF):</strong> Measures how unique or rare a word is across a collection of documents. If a word appears in many documents, its IDF score decreases. Common words like "the" or "and" are assigned lower importance because they appear in many documents, while rarer words are given higher importance.</p>

                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>How TF-IDF Works:</strong></p>
                        <ul>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>It assigns a weight to each word based on its importance in the document and across the dataset.</li>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>TF-IDF does not capture word meaning or relationships between words. It purely counts the importance of words based on their frequency.</li>
                        </ul>
                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Example:</strong> In a set of articles, the word "NLP" might appear frequently in one specific document, but not in others. TF-IDF will give "NLP" a high score for that document, making it stand out as a significant keyword.</p>
                    </li>

                    <li>
                        <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>2. Word2Vec (Pretrained Model)</h2>
                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Word2Vec is the model we have used for this website to handle word and document similarity. Word2Vec is a neural network-based technique developed by Google that learns to represent words as continuous vectors, where similar words are closer in the vector space. Word2Vec captures the meaning of words based on their context in a sentence.</p>

                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Skip-gram Model:</strong> Predicts the surrounding words given a specific word. For example, given the word "cat," the model will try to predict words like "animal," "furry," or "pet" based on the context of "cat" in sentences.</p>

                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Continuous Bag of Words (CBOW):</strong> Predicts a word based on the surrounding words. For example, given the context "a cute _ ran across the street," the model will predict "cat" based on the surrounding words.</p>

                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>How Word2Vec Works:</strong></p>
                        <ul>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Word2Vec uses a large corpus of text to train and learn word associations. It generates vectors where words with similar meanings are close together in the vector space.</li>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>It captures the semantics of words, unlike TF-IDF, which only considers word frequency.</li>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Pretrained Word2Vec models, like Google's model, are already trained on large datasets (e.g., Google News), and you can use these pretrained embeddings to represent words in your project.</li>
                        </ul>
                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Example:</strong> In Word2Vec, words like "king" and "queen" will be close to each other in the vector space because they have similar meanings or roles in context. This relationship can also capture more complex patterns, such as "king" - "man" + "woman" ≈ "queen."</p>
                    </li>

                    <li>
                        <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Key Differences</h2>
                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Word Relationships:</strong></p>
                        <ul>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>TF-IDF:</strong> Treats each word independently, with no understanding of word meaning or relationships.</li>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Word2Vec:</strong> Captures word relationships and similarities based on context.</li>
                        </ul>

                        <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Type of Data Representation:</strong></p>
                        <ul>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>TF-IDF:</strong> Results in sparse vectors (large arrays with many zeros), as it only focuses on word counts in documents.</li>
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Word2Vec:</strong> Results in dense vectors (compact, real-valued vectors), making it better for semantic understanding.</li>
                        </ul>
                    </li>
                </ol>

            </div>
        </div >
    );
}
