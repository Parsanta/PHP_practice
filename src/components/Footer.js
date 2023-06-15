import Figma from "../assets/imgs/figma.svg";
import Git from "../assets/imgs/git.svg";
import Linkedin from "../assets/imgs/linkedin.svg";

import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <section className="Footer">
      <Container>
        <Row>
          <Col xs={12} md={4} xl={6}>
            <img src={""} />
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod idunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis rcitation ullamco laboris nisi ut aliquip ex
              eanhbjhvjhvmn
            </p>
              <img src={Linkedin} className="image"/>
              <img src={Git} className="image"/>
              <img src={Figma} className="image"/>
          </Col>
          <Col xs={12} md={2} xl={2}>
            <h1>ABOUT US </h1>
            <br />
            <p>
              company
              <br /> team <br />
              Vision <br /> secuirty <br /> members
            </p>
          </Col>
          <Col xs={12} md={2} xl={2}>
            <h1>Products </h1>
            <br />
            <p>
              Grocery
              <br /> Food <br />
              Medicine <br /> Toys
            </p>
          </Col>
          <Col xs={12} md={4} xl={2}>
            <h1>Dis-patch</h1>
            <br />
            <p>
              Partners
              <br /> Help Center <br /> Contact Us <br /> FAQs{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
