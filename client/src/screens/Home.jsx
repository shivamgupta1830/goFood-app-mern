import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";
import Carousal from "../components/Carousal.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <div className="m-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
