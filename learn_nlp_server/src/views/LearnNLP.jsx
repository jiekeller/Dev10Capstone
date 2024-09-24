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

            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                One important part of NLP is <strong>word vectorization</strong>. Words are like numbers to a computer, so we need to turn words into numbers before a computer can do anything with them. Word vectorization is a technique that changes words into lists of numbers (called vectors). This helps the computer understand that words like "cat" and "dog" are related because their numbers are similar, while "cat" and "banana" are very different.
            </p>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                <strong>Sentiment analysis</strong> is another cool thing computers can do with NLP. It’s like teaching the computer to understand emotions. When we write a review about a movie, we might say we "loved" it or "hated" it. With sentiment analysis, the computer reads the words and figures out if the review is positive (happy) or negative (sad or angry).
            </p>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                We also use something called <strong>cosine similarity</strong> when we want to find out how close two pieces of text are to each other. Imagine two long sentences as arrows pointing in different directions. Cosine similarity helps measure the angle between these arrows—if they point in almost the same direction, they’re very similar, like two friends who have the same opinion.
            </p>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                Lastly, <strong>named entity recognition</strong> (NER) is when a computer learns to pick out important names in a sentence. For example, in the sentence “Barack Obama was born in Hawaii,” NER helps the computer know that "Barack Obama" is a person and "Hawaii" is a place. This helps the computer understand the meaning behind the words and process important information faster.
            </p>
            <p className="text-xl px-4 pb-20" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                NLP helps make technology more useful by enabling computers to understand and process the way we talk and write!
            </p>
        </div>
    );
}
