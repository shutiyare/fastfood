import React from 'react'
import {
    FcCallback,
    HiOutlineMail,
    MdOutlineMail,
    FiMail,
  } from "react-icons/fc";
  import { FaMailBulk } from "react-icons/fa";
  import { SiFacebook } from "react-icons/si";
  import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function Signip() {
  return (
    <div>
         <div className="container">
        <h1 className="text-center text-decoration-underline">Contact Us</h1>
        <div className="row">
          <div className="col-4 bg-danger rounded text-light p-5">
            <h1 className="text-white">Contact us</h1>
            <br />
            <p>_____________________________________________________</p>
            <br />
            <p>
              This is omari fast food and restaurant , you can get any kind of
              at any time you want
            </p>
            <br />
            <p>_____________________________________________________</p>
            <br />
            <p className="fs-4">
              {" "}
              <FcCallback fontSize={34} /> +252618270846
            </p>
            <br />
            <p>_____________________________________________________</p>
            <br />
            <p className="fs-4">
              <FaMailBulk fontSize={21} /> omarifood55@gmail.com
            </p>
            <br />
            <p>_____________________________________________________</p>
            <br />
            <div className="mx-5 p-3">
              <p>
                <SiFacebook fontSize={34} />{" "}
                <span className="fs-4 px-1">Omari Food</span> <br />
                <br />
                <BsInstagram fontSize={34} />{" "}
                <span className="fs-4 px-1">Omari Food</span>
                <br />
                <br />
                <BsWhatsapp fontSize={34} />{" "}
                <span className="fs-5 px-1">+252618270846</span>
                <br />
                <p>_____________________________________________________</p>
                <br />
              </p>
            </div>
          </div>
          <div className="col-8 bg-warning rounded p-5">
            <h1 className="text-dark">Send message to us</h1>
            <label for="inputEmail4" class="form-label">
              First Name*
            </label>
            <input type="text" class="form-control" id="inputEmail4" />
            <label for="inputPassword4" class="form-label">
              Last Name*
            </label>
            <input type="text" class="form-control" id="inputPassword4"></input>
            <label for="inputEmail4" class="form-label">
              Email Address*
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
            <label for="inputPassword4" class="form-label">
              Phone Number*
            </label>
            <input
              type="number"
              class="form-control"
              id="inputPassword4"
            ></input>
            <label for="inputPassword4" class="form-label">
              Message*
            </label>

            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>

            <button type="submit" class="btn btn-dark m-5">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signip