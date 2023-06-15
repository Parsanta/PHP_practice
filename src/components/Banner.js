import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/imgs/img1.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.jpg";

export const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-70" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>DHA SUFFA UNIVERSITY</h3>
          <p>Admissions open!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-70" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>DHA SUFFA UNIVERSITY</h3>
          <p>Admissions open!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-70" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>DHA SUFFA UNIVERSITY</h3>
          <p>Admissions open!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
