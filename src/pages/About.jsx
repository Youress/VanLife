import React from "react";
import { Link } from "react-router-dom";
import bgImg from "../assests/images/about-hero.png";
const About = () => {
  return (
    <div className="about-page-container">
      <img src={bgImg} alt="about" className="max-w-[100%]" />
      <div className="mb-[55px] px-6 ">
        <h1 className="leading-9 text-[2rem] font-bold my-[0.67em] 	">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className="leading-7">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="leading-7">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-[#FFCC8D] text-[#161616] rounded-[5px]	 px-8	pb-8 mx-7	">
        <h2 className="m-0 py-8 text-[24px] font-semibold	">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
          <Link className="bg-[#161616] !text-white font-bold link-button" to="/vans">
          Explore our vans
        </Link>
      </div>
    </div>
  );
};

export default About;
