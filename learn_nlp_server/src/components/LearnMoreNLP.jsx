import React, { useEffect } from 'react';

export default function LearnMoreNLP() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', paddingBottom: '100px' }}>
            <h1 className="text-5xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                More on Natural Language Processing
            </h1>
            <h1 className="text-4xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Levels of Word-to-Word Similarity</h1>
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

                <li className="px-20">
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

            <h1 className="text-4xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Named Entity Recognition and Sentiment Analysis Using Stanford CoreNLP
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

            <ul className="text-xl px-20" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}><strong>NER</strong>: Useful for extracting structured information from unstructured text. For example, automatically identifying companies, dates, or products in articles or emails.</li>
                <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}><strong>Sentiment Analysis</strong>: Applied in customer feedback, reviews, and social media posts to gauge public opinion, customer satisfaction, or product reception.</li>
            </ul>

            <p className="text-xl px-4 pt-10 pb-10" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Both NER and sentiment analysis are core functionalities in applications like chatbots, recommendation systems, and news analysis, making them invaluable in modern NLP workflows.</p>
            <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Bias with Pretrained Models like Stanford CoreNLP</h2>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>Bias can appear in Stanford CoreNLP models because these models are trained on large datasets that may include biased language or cultural norms. If the training data reflects biases in how certain groups or topics are described, the models can inherit those biases, leading to skewed results in tasks like named entity recognition or sentiment analysis. <strong>For instance, certain names or locations might be misclassified or underrepresented, and sentiment analysis could unfairly associate negative emotions with certain topics or demographics based on biased patterns in the training data.</strong> Experiment with this on the ExploreNLP page!</p>

            <p className="text-2xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto', border: '2px solid black' }}><strong>TLDR: These NLP tools are already powerful on their own, but by leveraging advanced techniques like Neural Networks and Machine Learning we can make them even more accurate, although potentially more flawed.</strong></p>

            <h1 className="text-4xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Conclusion</h1>

            <p className="text-2xl p-4" style={{ lineHeight: '2.0', textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>NLP has changed the way computers understand and process human language. Tools like Stanford CoreNLP help us pull useful information from text and analyze the tone or feeling behind it. Models like Word2Vec take this further by helping computers understand the meanings of words based on how they're used in sentences. This allows computers to see how words are similar or related. However, these models can pick up biases from the data they are trained on, which might lead to unfair or inaccurate results. This means that tasks like recognizing names or analyzing emotions in text could be affected by the biases in the data. That is why understanding these tools and how they work is so important!</p>
        </div>
    );
}