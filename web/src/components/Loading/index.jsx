import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="min-vh-100 mt-4 d-flex flex-column align-items-center justify-content-center">
      <Spinner animation="border" />
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
