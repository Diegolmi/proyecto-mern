import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "../../imagenes/img1.jpg";
import Img2 from "../../imagenes/img2.jpg";
import Img3 from "../../imagenes/img3.jpg";



const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1} 
          alt="imagen 1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
