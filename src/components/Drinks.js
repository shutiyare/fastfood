import React from 'react'
import img1 from "../images/canbo.jpg";
import img2 from "../images/green.jpg";
import img3 from "../images/vegetablee.jpg";
import img4 from "../images/drnik4.jpg";
import img5 from "../images/coffee.jpg";
import img6 from "../images/drink3.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillCartDashFill } from "react-icons/bs";

function Drinks() {
  return (
    <div className="container my-5">
      <h1 className="text-center text-dark fs-1 text-decoration-underline">
        Drinks
      </h1>
      <div className="row my-3 mx-auto">
        <div className="col-4">
          <Card
            style={{ width: "18rem", backgroundColor: "#fcf4e0" }}
            className="shadow-lg"
          >
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Canbo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">
                <BsFillCartDashFill fontSize={24} /> Buy now{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card
            style={{ width: "18rem", backgroundColor: "#fcf4e0" }}
            className="shadow-lg"
          >
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Zeytuun</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">
                <BsFillCartDashFill fontSize={24} /> Buy now{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card
            style={{ width: "18rem", backgroundColor: "#fcf4e0" }}
            className="shadow-lg"
          >
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Babaay</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">
                <BsFillCartDashFill fontSize={24} /> Buy now{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row my-3 mx-auto">
        <div className="col-4">
          <Card
            style={{ width: "18rem", backgroundColor: "#fcf4e0" }}
            className="shadow-lg"
          >
            <Card.Img
              variant="top"
              className="img img-rounded-circle"
              src={img2}
            />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">canuuni</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">
                <BsFillCartDashFill fontSize={24} /> Buy now{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card
            style={{ width: "18rem", backgroundColor: "#fcf4e0" }}
            className="shadow-lg"
          >
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Liin</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">
                <BsFillCartDashFill fontSize={24} /> Buy now{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          <Card
            style={{ width: "18rem", backgroundColor: "#fcf4e0" }}
            className="shadow-lg"
          >
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Shaah</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">
                <BsFillCartDashFill fontSize={24} /> Buy now{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Drinks