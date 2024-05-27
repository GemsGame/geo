import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../common/Sidebar";

export const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="ps-0 col-auto">
          <Sidebar />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
