import UNVideo from "../assets/un-month.mp4";

const Video = () => {
  return (
    <section className="block">
      <video src={UNVideo} controls autoPlay muted className="video"></video>
    </section>
  );
};

export default Video;
