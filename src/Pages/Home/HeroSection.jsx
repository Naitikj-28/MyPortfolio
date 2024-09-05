export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Naitik Jain</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-end</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A Web Developer specializing in creating interactive and beautiful web experiences.
            <br /> 
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/me2.png" alt="Hero Section" />
      </div>
    </section>
  );
}
