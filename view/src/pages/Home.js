import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        {" "}
        <Banner title="the best libarary" subtitle="03% off going on here">
          <Link to="/rooms" className="btn-primary">
            {" "}
            Our books
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
