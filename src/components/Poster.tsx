import UNPoster from "../assets/un-poster.jpg";

const Poster = () => {
  return (
    <section className="block poster">
      <h2>Poster</h2>
      <div className="grid grid--1x2 grid--center">
        <img src={UNPoster} className="img poster__img" alt="" />
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
