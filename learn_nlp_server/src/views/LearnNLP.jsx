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
                <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Measuring Distance</strong>: After the words are turned into numbers, the computer checks how "close" these numbers are by measuring the angles between them. If the angles for "cat" and "kitten" are small, it knows the words are related. If the angle is large, like between "cat" and "car," it knows they aren’t related.</li>
                <div className="flex flex-row justify-center">
                    <img
                        src='src\assets\angles1.png'
                        alt="Word Vectorization"
                        style={{ display: 'block', margin: '3px auto', maxWidth: '40%' }}
                    />
                    <img
                        src='src\assets\angles2.png'
                        alt="Word Vectorization"
                        style={{ display: 'block', margin: '3px auto', maxWidth: '40%' }}
                    />
                </div>

            </ol>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Turning <strong>Sentences</strong> into Numbers: The same thing happens with sentences. The computer changes each sentence into numbers and then checks how similar the sets of numbers are to each other. For example, “The sky is blue” is close to “The sky looks clear,” but very different from “The car is red.”</p>


            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', maxWidth: '75%', margin: '0 auto' }}>In short, the computer uses numbers and angles to decide if words or sentences are similar. It’s like how we know that "big" and "large" mean almost the same thing, but we have to teach the computer that by giving it lots of examples!</p>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>We can use this process to compare words, sentences and even find the 'closest words' to a given term.</p>

            <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>What are Named Entity Recognition and Sentiment Analysis?</h2>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Named Entity Recognition (NER)</strong> is a process in NLP where a model identifies and classifies named entities—such as people, organizations, locations, dates, and more—in a given text. For example, in the sentence "Apple Inc. was founded by Steve Jobs in California," NER would classify "Apple Inc." as an organization, "Steve Jobs" as a person, and "California" as a location. It’s useful for extracting structured information from unstructured text.</p>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Sentiment Analysis</strong> is another NLP tool where a model determines the emotional tone or attitude expressed in a text. It categorizes the sentiment as positive, negative, or neutral by analyzing words and phrases. For example, in "This movie was fantastic!" the sentiment would be classified as positive, while in "The service was terrible," it would be negative. It helps businesses and researchers understand opinions and feelings in customer reviews, social media, and other texts.</p>

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>So, NER finds important names, and Sentiment Analysis understands feelings!</p>

            <p className="text-2xl pt-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto',   border: '2px solid black', // Add this line for border
    padding: '10px' }}>That is a very brief overview of NLP and the tools we will use in this website! Now that you have a general understanding of these tools and concepts, feel free to head over to the ExploreNLP page and start
                noodling around. Otherwise, if you would like a more in-depth, technical lesson on NLP, keep reading! </p>


            <h3 className="text-4xl px-6 pt-20" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>A Deeper Dive</h3>
            <div className="" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', paddingBottom: '100px' }}>
                <h1 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Introduction to NLP: Word-to-Word Similarity</h1>
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Both TF-IDF and Word2Vec are methods used to represent words as numbers (back to step 1 of how text similarity works, this is called vectorization) for use in natural language processing tasks, but they work in different ways and serve different purposes.</p>

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
                            <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Word2Vec uses a large corpus of text to train and learn word associations. It generates vectors where words with similar meanings are close together in the vector space. Our model trained on the Google News dataset (about 100 billion words), see if you can identify any trends in the model based on how it learned!</li>
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

                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Bias with Pretrained Models like Word2Vec</h2>
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Bias can appear in Word2Vec pretrained models because these models learn from large datasets that reflect real-world text, which often contains societal biases. For example, if the training data includes biased associations (e.g., linking certain professions predominantly with men or women), Word2Vec will capture and reflect those patterns. <strong>This can lead to biased word associations in the model, where, for instance, "man" might be closer to "doctor" and "woman" might be closer to "nurse," reinforcing gender stereotypes.</strong> Play around with this on the ExploreNLP page!</p>

                <h1 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                    NLP: Named Entity Recognition and Sentiment Analysis Using Stanford CoreNLP
                </h1>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Stanford CoreNLP is a powerful suite of NLP tools developed by Stanford University and one we have used for NER and sentiment analysis on this website. It provides a wide range of linguistic analysis capabilities, such as tokenization, part-of-speech tagging, parsing, named entity recognition (NER), sentiment analysis, and more. It's designed to be easy to integrate into software applications and is used widely in academic and industry settings to process text in various languages.</p>

                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Named Entity Recognition (NER)</h2>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Named Entity Recognition (NER)</strong> is a process that identifies and classifies entities (like names of people, organizations, locations, dates, etc.) in a given text.</p>

                <ul>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>How It Works</strong>: NER works by examining each word in a sentence and determining whether it represents an entity, and if so, what kind of entity it is. For example, in the sentence "Barack Obama was born in Hawaii," NER would recognize "Barack Obama" as a <em>Person</em> and "Hawaii" as a <em>Location</em>.</li>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Stanford NER</strong>: The Stanford NER model is built on machine learning techniques. It is trained using annotated datasets where entities have been labeled, so the system can learn patterns and apply them to new, unseen text. The model uses contextual clues (words around the entity) and the structure of the sentence to make these predictions.</li>
                </ul>

                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Sentiment Analysis</h2>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Sentiment Analysis</strong> is the process of determining the emotional tone behind a piece of text. It identifies whether the sentiment expressed in a text is positive, negative, or neutral.</p>

                <ul>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>How It Works</strong>: Sentiment analysis in Stanford CoreNLP is typically based on both word-level sentiment and the overall structure of sentences. The system assigns a sentiment score to each sentence, and then aggregates these scores to determine the overall sentiment. For instance, a sentence like "I love this product" would be classified as <em>positive</em>, while "This service was terrible" would be marked as <em>negative</em>.</li>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Stanford Sentiment Analysis</strong>: Stanford uses a <em>Recursive Neural Tensor Network (RNTN)</em> for sentiment analysis. This model looks at how words combine in phrases to understand the sentiment of more complex sentences. The model considers both individual word meanings and the structure of the sentence, which allows it to handle not just simple phrases but also complex ones like "The movie was not great," where the sentiment changes due to the word "not."</li>
                </ul>

                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Use Cases</h2>

                <ul className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>NER</strong>: Useful for extracting structured information from unstructured text. For example, automatically identifying companies, dates, or products in articles or emails.</li>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>Sentiment Analysis</strong>: Applied in customer feedback, reviews, and social media posts to gauge public opinion, customer satisfaction, or product reception.</li>
                </ul>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Both NER and sentiment analysis are core functionalities in applications like chatbots, recommendation systems, and news analysis, making them invaluable in modern NLP workflows.</p>
                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Bias with Pretrained Models like Stanford CoreNLP</h2>
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Bias can appear in Stanford CoreNLP models because these models are trained on large datasets that may include biased language or cultural norms. If the training data reflects biases in how certain groups or topics are described, the models can inherit those biases, leading to skewed results in tasks like named entity recognition or sentiment analysis. <strong>For instance, certain names or locations might be misclassified or underrepresented, and sentiment analysis could unfairly associate negative emotions with certain topics or demographics based on biased patterns in the training data.</strong> Experiment with this on the ExploreNLP page!</p>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}><strong>TLDR: These NLP are already powerful on their own, but by leveraging advanced techniques like Neural Networks and Machine Learning we can make them even more accurate, although potentially more flawed.</strong></p>

                <h1 className="text-4xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Conclusion</h1>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>NLP has changed the way computers understand and process human language. Tools like Stanford CoreNLP help us pull useful information from text and analyze the tone or feeling behind it. Models like Word2Vec take this further by helping computers understand the meanings of words based on how they're used in sentences. This allows computers to see how words are similar or related. However, these models can pick up biases from the data they are trained on, which might lead to unfair or inaccurate results. This means that tasks like recognizing names or analyzing emotions in text could be affected by the biases in the data. That is why understanding these tools and how they work is so important!</p>
            </div>

        </div>
    );
}
