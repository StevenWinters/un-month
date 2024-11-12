import Info1 from "../assets/info-1.png";
import Info2 from "../assets/info-2.png";
import Info3 from "../assets/info-3.png";
import Info4 from "../assets/info-4.png";

const Info = () => {
  return (
    <section className="block container info">
      <header className="info__header">
        <h2>More Info</h2>
      </header>
      <div className="grid grid--1x2 info__container">
        <p className="info__description">
          Every October, we celebrate United Nations Month to pray for peace,
          security, and friendly relations with all nations around the world.
          Preschool students came to school wearing a national attire
          representing a country that is a member of the United Nations.
        </p>
        <div className="grid info__grid">
          <figure className="info__figure">
            <img src={Info1} className="img info__img" alt="" />
          </figure>
          <figure className="info__figure">
            <img src={Info2} className="img info__img" alt="" />
          </figure>
          <figure className="info__figure">
            <img src={Info3} className="img info__img" alt="" />
          </figure>
          <figure className="info__figure">
            <img src={Info4} className="img info__img" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Info;
