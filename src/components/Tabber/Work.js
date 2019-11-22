import React from "react";
import Golf from "../../assets/images/golf.png";

const Work = () => (
  <div className="grid">
    <article className="content">
      <p className="paragraphContent">
        Hi, my name is Brock! I'm a Chicago native that relocated to Los Angeles
        after graduating from DePaul University. Usually I can be found with my
        headphones in, listening to music and working on my laptop.
      </p>
      <p className="paragraphContent">
        Throughout my childhood and through high school I played golf extremely
        competitively, traveling across the country to participate in
        tournaments. I stopped playing competitively when I got to college to
        focus on school instead of trying to balance both, but I still love
        playing for fun in my free time.
      </p>
    </article>
    <section className="pictures">
      <div className="pictureContainer">
        <img className="pic1" src={Golf} alt="Golfing" />
      </div>
    </section>
  </div>
);

export default Work;
