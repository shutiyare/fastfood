import { Link } from "react-router-dom";
import "./App.css";
import { HashLink } from "react-router-hash-link";
import Hero from "./components/Home";
import Food from "./components/Foods";
import Drink from "./components/Drinks";
import Signup from "./components/Signip";
// import Login from "./components/Login";
import Footer from "./components/Footer";
import logo from "./images/Omaari Food-02.png";
import { useState } from "react";

function App() {
  return (
    <div>
      <nav className="navbar shadow lg">
        <header className="container">
          <img
            className="logo"
            src={logo}
            style={{ width: "100px", height: "60px" }}
          />
          <h1 className="px-0 ">omari food</h1>
          <ul class="menu">
            <li>
              <HashLink to="/#HERO">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#FOOD">Foods</HashLink>
            </li>
            <li>
              <HashLink to="/#DRINKS">Drinks</HashLink>
            </li>
            <li>
              <HashLink to="/#SIGNUP">Signup</HashLink>
            </li>
            <li>
              <Link to="#">login</Link>
            </li>
          </ul>
        </header>
      </nav>
      <div id="HERO">
        <Hero />
      </div>

      <div id="FOOD">
        <Food />
      </div>
      <div id="DRINKS">
        <Drink />
      </div>
      <div id="SIGNUP">
        <Signup />
      </div>
      <Footer />
    </div>
  );
}

export default App;
