import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import books from "../data/books.json";

// functional components are great to work with and they can use the props
// but if we want to use the state, we need a CLASS BASED component

class LatestRelease extends React.Component {
  render() {
    return (
      <Container>
        <h1>Latest Book Releases</h1>
        <p>The hottest books you can find on the web!</p>
        <Row className=" row row-cols-2 row-cols-md-3 row-cols-lg-4 mt-3">
          {books.map((book) => (
            <Col style={{ margins: "3px" }}>
              <Card>
                <Card.Img
                  style={{ height: "30vw" }}
                  variant="top"
                  src={book.img}
                  alt={book.img}
                />
                <Card.Body style={{ height: "20vw" }}>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {book.price}$
                  </Card.Subtitle>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
