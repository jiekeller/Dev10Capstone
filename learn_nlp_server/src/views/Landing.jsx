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
      <p className="text-lg p-4" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', maxWidth: '60%', margin: '0 auto' }}>
      Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between humans and computers using natural language.
      </p>
    </div>
  );
}

export default Landing;