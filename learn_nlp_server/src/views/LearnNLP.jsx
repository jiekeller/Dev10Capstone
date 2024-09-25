import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LearnNLP() {

    const navigate = useNavigate();

    // useEffect(() => {
    //     const handleDive = () => {
    //         navigate('/LearnMoreNLP');
    //     };

    //     handleDive();
    // }, [navigate]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ maxWidth: '75%' }}>
                <h1 className="text-5xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                    What is Natural Language Processing?
                </h1>
                <h1 className="text-4xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>The Basics</h1>
                <p className="text-xl p-4" style={{ textAlign: 'left', lineHeight: '2.0', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>
                    Imagine you're talking to your phone or computer, like asking it to play your favorite song. NLP is the magic that helps the computer understand what you're saying or typing. Computers don’t understand our language like we do, so NLP helps translate human language into something the computer can work with.
                    It's like teaching a robot to understand and respond to human words! This means computers can do things like figure out what a text is about, break down sentences, translate languages, or answer questions in a natural way.</p>

                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>How does word or text similarity work?</h2>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>Let’s say you want to know how similar two words are, like "cat" and "kitten." Even though they’re different words, they are similar because they both refer to small animals.</p>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>Here’s how the computer figures it out:</p>

                <ol style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', listStyleType: 'decimal' }}>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}><strong>Turning Words into Numbers</strong>: First, the computer changes each word into numbers or "codes." It can’t understand words the way we do, but it can understand numbers. Each word gets a special set of numbers called a "vector" (like a word’s ID).</li>
                    <img
                        src='src\assets\firstparagraphLearn.png'
                        alt="Person To Computer Communication"
                        style={{ display: 'block', margin: '5px auto', maxWidth: '90%' }}
                    />
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}><strong>Measuring Distance</strong>: After the words are turned into numbers, the computer checks how "close" these numbers are by measuring the angles between them. If the angles for "cat" and "kitten" are small, it knows the words are related. If the angle is large, like between "cat" and "car," it knows they aren’t related.</li>
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
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>Turning <strong>Sentences</strong> into Numbers: The same thing happens with sentences. The computer changes each sentence into numbers and then checks how similar the sets of numbers are to each other. </p>


                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', margin: '0 auto' }}>In short, the computer uses numbers and angles to decide if words or sentences are similar. It’s like how we know that "big" and "large" mean almost the same thing, but we have to teach the computer that by giving it lots of examples!</p>
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>We can use this process to compare words, sentences and even find the 'closest words' to a given term.</p>

                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>What are Named Entity Recognition and Sentiment Analysis?</h2>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>Many tools use pretrained models that have learned from large datasets to recognize patterns and nuances in language.</p>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}><strong>Named Entity Recognition (NER)</strong> is a process in NLP where a model identifies and classifies named entities—such as people, organizations, locations, dates, and more—in a given text. For example, in the sentence "Apple Inc. was founded by Steve Jobs in California," NER would classify "Apple Inc." as an organization, "Steve Jobs" as a person, and "California" as a location. </p>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}><strong>Sentiment Analysis</strong> is another NLP tool where a model determines the emotional tone or attitude expressed in a text. It categorizes the sentiment as positive, negative, or neutral by analyzing words and phrases. For example, in "This movie was fantastic!" the sentiment would be classified as positive, while in "The service was terrible," it would be negative. </p>

                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>So, NER finds important names, and Sentiment Analysis understands feelings!</p>
                <h2 className="text-2xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Why can Natural Language Processing be dangerous?</h2>
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>
                    As we continue to develop increasingly sophisticated AI and NLP models, it is crucial the data used to train these models is unprejudiced. When a model trains using biased data, it can lead to harmful and unfair outcomes. If the data reflects existing
                    stereotypes or inequalities, the model will learn and repeat those biases. For example:
                </p>
                <ul>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>
                        <strong>Discrimination</strong>: If a model is trained on biased hiring data, it might unfairly favor certain groups
                        (like men over women) because the data reflects past biases in hiring practices. This can lead to decisions that are
                        unfair and discriminatory.
                    </li>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>
                        <strong>Misinformation</strong>: If a model learns from biased or inaccurate data, it may spread false information
                        or reinforce harmful beliefs. This is especially dangerous in fields like healthcare or 
                        <Link style={{ color: 'blue' }} to="https://www.technologyreview.com/2020/07/17/1005396/predictive-policing-algorithms-racist-dismantled-machine-learning-bias-criminal-justice/"> criminal justice</Link>
                        , where biased
                        predictions can have real-world consequences.
                    </li>
                    <li className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>
                        <strong>Lack of representation</strong>: If certain groups are underrepresented in the data (like people from different
                        cultures or minority communities), the model may not work well for them, leading to unequal access to technology or services.
                    </li>
                </ul>
                <p className="text-xl p-4" style={{ textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto' }}>
                    To avoid these dangers, it's essential to carefully check and balance the data used to train NLP models and ensure fairness,
                    transparency, and ethics throughout the development process.
                </p>                
                <p className="text-2xl pt-4" style={{
                    textAlign: 'left', fontFamily: 'Arial, sans-serif', margin: '0 auto', border: '2px solid black',  // Add this line for border
                    padding: '10px'
                }}>That is a very brief overview of NLP and the tools we will use in this website! Now that you have a general understanding of these tools and concepts, feel free to head over to the ExploreNLP page and start
                    noodling around. Otherwise, if you would like a more in-depth, technical lesson on NLP, follow the link below! </p>

                <div className="items-center text-center pt-20 pb-20">
                    <Link className="text-4xl px-6 pt-20" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', margin: '0 auto' }} to="/LearnMoreNLP">Click Here for a Deeper Dive into NLP</Link>
                </div>
            </div>
        </div>
    );
}
