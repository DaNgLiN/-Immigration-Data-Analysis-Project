import { Card, Col, OverlayTrigger, Popover, Row } from "react-bootstrap";
import { RiInformation2Line } from "react-icons/ri";
import { FcInfo } from "react-icons/fc";
import { description } from "../../data/linear-regression-metric-description";
// import "./LinearRegressionMetrics.css";

const LinearRegressionMetrics = ({ data }) => {
  const graphData = Object.entries(data);

  const getCardStyle = (key) => {
    switch (key.toLowerCase()) {
      case "mae":
        return "bg-purple text-white";
      case "mse":
        return "bg-blue text-white";
      case "rmse":
        return "bg-orange text-white";
      case "r2":
        return "bg-red text-white";
      case "explained variance":
        return "bg-teal text-white";
      default:
        return "bg-light";
    }
  };

  return (
    <Card body className="shadow main-card">
      <h5 className="text-center">Linear Regression</h5>
      <Row className="justify-content-center">
        {graphData.map(([key, value], index) => (
          <Col key={key} xs={graphData.length === index + 1 ? 6 : 5}>
            <Card
              body
              className={`shadow-sm my-2 metric-card ${getCardStyle(key)}`}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-capitalize fw-bold">{key}</div>
                  <div>{Number(value.toFixed(2))}</div>
                </div>
                <div className="position-relative">
                  <OverlayTrigger
                    overlay={
                      <Popover id={`popover-${key}`} className="shadow-lg">
                        <Popover.Header className="text-white bg-success">
                          <RiInformation2Line size={18} /> {key}
                        </Popover.Header>
                        <Popover.Body>{description[key]}</Popover.Body>
                      </Popover>
                    }
                  >
                    <div>
                      <FcInfo size={20} />
                    </div>
                  </OverlayTrigger>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default LinearRegressionMetrics;
