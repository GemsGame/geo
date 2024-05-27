import { useRouteError, ErrorResponse } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../common/Sidebar";

interface Error extends ErrorResponse {
  message: string;
}
export default function ErrorPage() {
  const error = useRouteError() as Error;
  return (
    <Container fluid>
      <Row>
        <Col className="ps-0 col-auto">
          <Sidebar />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error?.statusText || error?.message}</i>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
