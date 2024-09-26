import { useEffect, useRef } from "react";
import { useState } from "react";

function Landing() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1550);

  const checkSize = () => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1550);
      window.location.reload();
    };

    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }, []);
  };

  checkSize();

  return (
    <div>
      <h1 className="text-5xl p-6" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
        Learn Natural Language Processing!
      </h1>
      <img
        src='src\assets\landing2.png'
        alt="Person To Computer Communication"
        style={{ display: 'block', margin: '1px auto', maxWidth: '25%' }}
      />
      <p
        className="text-2xl p-4"
        style={{
          textAlign: 'left',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '60%',
          margin: '0 auto',
          lineHeight: '2.0' // Adjust line height for more vertical space
        }}
      >
        Natural Language Processing <strong>(NLP)</strong> is a field of artificial intelligence and machine learning that focuses on the interaction between humans and computers using natural language, bringing together Computer Science (CS) and Linguistics.
      </p>
      <img
        src='src\assets\landing.png'
        alt="Person To Computer Communication"
        style={{ display: 'block', margin: '1px auto', maxWidth: '70%' }}
      />
      <p
        className="text-2xl p-4"
        style={{
          textAlign: 'left',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '60%',
          margin: '0 auto',
          lineHeight: '2.0' // Adjust line height for more vertical space
        }}
      >
        NLP has always been a fascinating area of CS for me. Not only can it be incredibly interesting to learn and mess around with, but it is also very important in the world today given its ability to make technology more accessible and efficient.
      </p>
      <p
        className="text-2xl p-4"
        style={{
          textAlign: 'left',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '60%',
          margin: '0 auto',
          lineHeight: '2.0' // Adjust line height for more vertical space
        }}
      >
        <strong>I have created this website to teach others the basics of natural language processing and why it can be so exciting (and also dangerous!).</strong>
      </p>
      <p
        className="text-2xl p-4"
        style={{
          textAlign: 'left',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '60%',
          margin: '0 auto',
          lineHeight: '2.0' // Adjust line height for more vertical space
        }}
      >
        <img
          src='src\assets\landing3.png'
          alt="Person To Computer Communication"
          style={{ display: 'block', margin: '5px auto', maxWidth: '70%' }}
        />
        If you are new to NLP, checkout the LearnNLP page where you can learn foundational concepts of the field. Once you have an understanding, hop over to the ExploreNLP page to noodle around with different NLP tools (these will be explained in LearnNLP), or check out the Stories page to examine and compare famous documents or short stories to words and phrases.
      </p>
      <p
        className="text-xl p-4"
        style={{
          textAlign: 'left',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '60%',
          margin: '0 auto',
          lineHeight: '2.0',
          border: '2px solid black' // Adjust line height for more vertical space
        }}
      >
        Users and Admin can login using the green button on the top right, to add stories/authors (User and Admin privileges) or delete stories/authors (Only Admin privileges). If you would like to contribute to the site, please reach out to me <a href="mailto:">here</a>.
      </p>
      <p
        className="text-2xl px-4 pt-10 pb-20"
        style={{
          textAlign: 'left',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '60%',
          margin: '0 auto',
          lineHeight: '2.0' // Adjust line height for more vertical space
        }}
      >
        I hope you enjoy the site and learn something new about NLP!
      </p>
      <p className="pb-20"></p>
    </div>

  );
}

export default Landing;