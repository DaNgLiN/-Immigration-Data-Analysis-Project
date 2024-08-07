import { Card, Col, Row } from "react-bootstrap";
// import "./TotalDescription.css";

const TotalDescription = ({ data }) => {
  const getCardStyle = (key) => {
    switch (key.toLowerCase()) {
      case "count":
        return "bg-purple text-white";
      case "mean":
        return "bg-blue text-white";
      case "std":
        return "bg-orange text-white";
      case "min":
        return "bg-red text-white";
      case "25%":
        return "bg-teal text-white";
      case "50%":
        return "bg-green text-white";
      case "75%":
        return "bg-yellow text-white";
      case "max":
        return "bg-pink text-white";
      default:
        return "bg-light";
    }
  };

  const getTitle = (key) => {
    switch (key.toLowerCase()) {
      case "count":
        return "Count";
      case "mean":
        return "Mean (Average)";
      case "std":
        return "Standard Deviation (Std)";
      case "min":
        return "Minimum (Min)";
      case "25%":
        return "25th Percentile (25%)";
      case "50%":
        return "Median (50%)";
      case "75%":
        return "75th Percentile (75%)";
      case "max":
        return "Maximum (Max)";
      default:
        return key;
    }
  };

  return (
    <Card body className="shadow main-card">
      <h5 className="text-center">Total Descriptions</h5>
      <Row className="justify-content-center">
        {Object.entries(data).map(([key, value = ""]) => (
          <Col key={key} xs={5} className="mb-3">
            <Card
              body
              className={`shadow-sm my-2 metric-card ${getCardStyle(key)}`}
            >
              <div className="text-capitalize fw-bold">{getTitle(key)}</div>
              <div>{Number(value.toFixed(2))}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default TotalDescription;
