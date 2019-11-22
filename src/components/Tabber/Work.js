import React from "react";
import Farragut from "../../assets/images/work.jpg";

const Work = () => (
  <div className="grid">
    <article className="content">
      <p className="paragraphContent">
        My first internship involved going to an inner-city charter school in
        Chicago, IL to teach students the importance of Computer Science. The
        class used Scratch to learn, which is a drag-and-drop programming
        software built by MIT to teach kids basic coding fundamentals. This
        internship was a great experience overall and was very rewarding to be
        able to teach kids this level of technology that they had never seen
        before.
      </p>
      <p className="paragraphContent">
        After relocating to Los Angeles, I was able to find an opportunity at
        Talent Path as a Full-Stack Software Engineer where I was able to
        continue learning and perfecting my skills as a web developer. Recently,
        I have gotten very familiar with building full-scale web applications
        using various JavaScript frameworks and libraries while also learning to
        work in larger development teams in an agile environment.
      </p>
    </article>
    <section className="pictures">
      <div className="pictureContainer">
        <img className="pic1" src={Farragut} alt="Farragut Academy" />
      </div>
    </section>
  </div>
);

export default Work;
