import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



interface Props {
  posterImages: string[];
}

const Poster = ({posterImages}: Props) => {
  const [posterIndex, setPosterIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleNextPoster = () => {
    setPosterIndex(index => {
      if (index === posterImages.length - 1) return 0;
      return index + 1;
  });
    triggerAnimation();
  } 

  const handlePrevPoster = () => {
    setPosterIndex(index => {
      if (index === 0) return posterImages.length - 1;
      return index - 1;
  });
    triggerAnimation();
  }

  const triggerAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 0);
  };

  useEffect(() => {
    const interval = setInterval(handleNextPoster, 5000);
    return () => clearInterval(interval);
  }, [posterIndex]);

  return (
    <section className="block poster">
      <h2>Poster</h2>
      <div className="grid grid--1x2 grid--center">
        <div className="slider">
          <img src={posterImages[posterIndex]} alt="" className={`img poster__img ${animate ? "animate" : ""}`} />
          <button className="btn slider__btn slider--left btn--primary btn--circle" onClick={handlePrevPoster}><FaArrowLeft size={15} /></button>
          <button className="btn slider__btn slider--right btn--primary btn--circle" onClick={handleNextPoster}><FaArrowRight size={15} /></button> 
        </div>
        <div className="poster__description">
          <p>
            The poster centers on a globe, representing Earth as the home we all
            share and need to protect together. A dove nearby stands for peace
            and hope, reminding us of the harmony we aim for globally. There's
            also a handshake, symbolizing teamwork and the importance of working
            together toward common goals.
          </p>
          <p>
            The theme, “One Common Future, One Common Agenda,” highlights how we
            must unite for a better world, tackling challenges together. This
            poster encourages everyone to see UN Month not just as a
            celebration, but as a call to action for a sustainable, peaceful
            future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Poster;
