import React from "react";
import Golf from "../../assets/images/golf.png";

const Personal = () => (
  <div className="grid">
    <article className="content">
      <p className="paragraphContent">
        Hi, my name is Brock! I'm a Chicago native that relocated to Los Angeles
        after graduating from DePaul University. Usually I can be found with my
        headphones in, listening to music and working on my laptop.
      </p>
      <p className="paragraphContent">
        I used to play golf extremely competitively, but stopped when I got to
        college to focus on school instead of trying to balance both. I still
        love to play for fun when I get the chance, so let that always be a
        reason to reach out and play!
      </p>
    </article>
    <section className="pictures">
      <div className="pictureContainer">
        <img className="pic1" src={Golf} alt="Golfing" />
      </div>
    </section>
  </div>
);

export default Personal;
