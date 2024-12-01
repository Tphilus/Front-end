import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            labore, architecto autem recusandae dicta quidem dolor reiciendis
            nobis totam similique dolorum consequatur necessitatibus enim
            laudantium placeat? Odit inventore aliquid illo.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
