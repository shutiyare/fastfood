import React from 'react'
import img5 from '../images/jalaato-removebg-preview.png'
import {  BsFillCartDashFill} from "react-icons/bs";

function Home() {
  return (
    <div>
        <div className="hero bg-warning my-5">
        <div className="hero-txt">
          <div className="txt1">
            <h1 className="fs-1 fw-bold text-dark">This is, </h1> <br />
            <h1 className="fs-1 fw-bold text-dark">Omarion fast food
               <span className="text-dark"> </span>
            </h1>
            <br />
          </div>
          <div className="txt2">
            <p className="fs-3 text-light">
              you can get <span className="text-danger fs-4">any food</span>{" "}
            </p>{" "}
            <br />
            <button type="button" className="btn btn-warning btn-outline-light btn-lg ">
            <BsFillCartDashFill fontSize={24}/>
              demand now
            </button>
          </div>
        </div>
        <div className="hero-img">
          <img
            className="class="
            position-absolute
            top-0
            start-100
            translate-middle
            src={img5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home