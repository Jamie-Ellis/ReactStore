import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterStore = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">My Store</h5>
            <p>
              The next Amazon
            </p>
            <img src= "https://media.voulezvouz.com/2020/12/Asset-2@4x-1.png" alt="VoulezVouz"/>
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Browse</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Search</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://github.com/Jamie-Ellis">
            {" "}
            https://github.com/Jamie-Ellis
          </a>
        </Container>
      </div>
    </footer>
  );
};

export default FooterStore;
