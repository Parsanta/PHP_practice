import { Row,Col,Container,Carousel } from 'react-bootstrap';

export const Partners = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div data-aos="fade-in" data-aos-duration="2000">
      <section className="Partner" id="Partner">
        <Container className="Partner-container">
          <Row>
            <Col>
              <div className="Partner-slider">
                <h2>Our Partners</h2>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="Partner-slider"
                >
                  <div className="item">
                    {/* <img src={git} alt="Image" /> */}
                    <h5>Git</h5>
                  </div>
                  <div className="item">
                    {/* <img src={linkedin} alt="Image" /> */}
                    <h5>Linkedin</h5>
                  </div>
                  <div className="item">
                    {/* <img src={figma} alt="Image" /> */}
                    <h5>Figma</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
