import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Hero hero="defaultHero">
      {" "}
      <Banner title="the best libarary" subtitle="03% off going on here">
        <Link to="/rooms" className="btn-primary">
          {" "}
          Our books
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
