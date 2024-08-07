import clsx from "clsx";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();
  return (
    <div className="my-4">
      <Navbar className="bg-body-tertiary" variant="primary">
        <Container>
          <Nav className="me-auto">
            <Link
              to="/"
              className={clsx("nav-item nav-link", {
                active: pathname === "/",
              })}
            >
              Home
            </Link>
            <Link
              to="/crs"
              className={clsx("nav-item nav-link", {
                active: pathname === "/crs",
              })}
            >
              CRS
            </Link>
            <Link
              to="/prediction"
              className={clsx("nav-item nav-link", {
                active: pathname === "/prediction",
              })}
            >
              Predection
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Root;
