import React from "react";
import DePaul from "../../assets/images/DePaul_logo.png";

const Education = () => (
  <div className="grid">
    <article className="content">
      <p className="paragraphContent">
        I began my freshman year at DePaul University majoring in accounting,
        but always had a strong interest in computers. I decided to switch
        majors after my freshman year to focus on Software Engineering, but
        decided to still keep a minor in Finance.
      </p>
      <p className="paragraphContent">
        My favorite project that I worked on during college was an Angular
        project that I was a part of with 3 others where we made a application
        to track cryptocurrency. The web application allowed a user to make a
        personal account, choose which cryptocurrency markets he or she wants to
        monitor, and see the each cryptocurrency's market data in real time.
      </p>
    </article>
    <section className="pictures">
      <div className="pictureContainer">
        <img className="pic1" src={DePaul} alt="DePaul University" />
      </div>
    </section>
  </div>
);

export default Education;
