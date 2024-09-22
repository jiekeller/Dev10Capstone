export default function LearnNLP() {
    return (
        <div>
            <h1 className="text-5xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Let's Learn about Natural Language Processing!
            </h1>
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                Natural Language Processing, or <strong>NLP</strong>, is a way for computers to understand and work with human language, like English or Spanish. Think of it as teaching a computer to read, write, and even understand what we mean when we talk or write! We use NLP to do things like talking to voice assistants, translating languages, or even checking grammar in an essay.
            </p>
            <img 
                src='src\assets\firstparagraphLearn.png' 
                alt="Person To Computer Communication" 
                style={{ display: 'block', margin: '20px auto', maxWidth: '100%' }} 
            />
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
            <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', maxWidth: '75%', margin: '0 auto' }}>
                NLP helps make technology more useful by enabling computers to understand and process the way we talk and write!
            </p>
        </div>
    );
}
