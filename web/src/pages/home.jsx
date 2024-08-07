import { Col, Row } from "react-bootstrap";

import TotalDescription from "../components/TotalDescription";
import LinearRegressionMetrics from "../components/LinearRegressionMetrics";
import YearlyTotal from "../components/YearlyTotal";
import ProvinceTotal from "../components/ProvinceTotal";
import useApp from "../useApp";
import Loading from "../components/Loading";
import ErrorPage from "../components/ErrorPage";
import Title from "../components/Title";

const Home = () => {
  const { data, loading, error } = useApp();

  if (loading) return <Loading />;
  if (error) return <ErrorPage message={error} />;

  return (
    <div>
      <Title className="titleid">Immigration Data Analysis Dashboard</Title>
      <Row>
        <Col>
          <TotalDescription data={data.describeTotal} />
        </Col>
        <Col>
          <LinearRegressionMetrics data={data.linearRegression} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}>
          <YearlyTotal data={data.yearlyTotal} />
        </Col>
        <Col className="mt-4" xs={12}>
          <ProvinceTotal data={data.provinceTotal} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
