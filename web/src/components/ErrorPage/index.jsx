import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Alert, Button } from "react-bootstrap";
import gif from "./404.gif";

const ErrorPage = ({ message }) => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <Alert variant="danger" className="mt-4 text-center">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Message: {message}</p>
      <hr />
      <div className="d-flex justify-content-center">
        <Button onClick={handleReload} variant="danger">
          Try again
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Col xs={8} md={6}>
          <Image src={gif} thumbnail width={1000} height={1000} />
        </Col>
      </div>
    </Alert>
  );
};

export default ErrorPage;
