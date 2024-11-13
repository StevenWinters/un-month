import SDGWheel from "../assets/sdg-wheel.png";

const Hero = () => {
  return (
    <section className="block hero">
      <div className="grid grid--1x2 justify--center align--center hero__container hero__description">
        <img src={SDGWheel} className="img hero__img" alt="" />
        <div className="hero__headings">
          <span className="hero__sub-heading">One Common</span>
          <h1 className="hero__heading">Future</h1>
          <span className="hero__sub-heading">One Common</span>
          <span className="hero__heading">Agenda</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
