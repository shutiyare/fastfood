import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "../App.css";

function Footer() {
  return (
    <div>
            <div className="footer container bg-dark text-light mt-3 d-flex justify-center">
        <h1 className="fs-1 text-light p-3">Omari Food</h1>
        <p className="fs-3 text-light p-3 ">
          &copy; Copyright 2022. All right reserved
        </p>
        <p className="px-5  py-3 fs-3 text-decoration-underline">
          Official website
        </p>
        <br />
      </div>
    </div>
  )
}

export default Footer