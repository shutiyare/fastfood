import React from 'react'
import img1 from "../images/Fast-food-heart-disease-Pic-3.jpg";
import img2 from "../images/Bur Macsharo.jpg";
import img3 from "../images/spaghetti-with-creamy-marinara.jpg";
import img4 from "../images/chickenaltered.jpg";
import img5 from "../images/East Africa - Goat with rice.jpg";
import img6 from "../images/tom-yum-goong.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsFillCartDashFill } from "react-icons/bs";

function Foods() {
  return (
    <div>
        <h1 className="text-center text-primary fs-1 text-decoration-underline">
        Foods
      </h1>
      <div className="row my-3 mx-auto">
        <div className="col-4">
          <Card
            style={{ width: "18rem", backgroundColor: "#fcf4e0" }}
            className="shadow-lg"
          >
            <Card.Img
              variant="top"
              className="img img-rounded-circle"
              src={img1}
            />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Burger</Card.Title>
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
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Muufo</Card.Title>
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
              <Card.Title className="fs-3 text-danger">Baasto</Card.Title>
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
              src={img4}
            />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Canjeero</Card.Title>
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
              <Card.Title className="fs-3 text-danger">Bariis</Card.Title>
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
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title className="fs-3 text-danger">Suugo</Card.Title>
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

export default Foods