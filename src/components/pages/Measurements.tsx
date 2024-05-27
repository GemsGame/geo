import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../common/Sidebar";
import { DataTable } from "../common/DataTable";
import { DatePicker } from "../common/DatePicker";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getData } from "../../redux/slices/dataSlice";

export const Measurements = () => {

  const dispatch = useAppDispatch();
  const {filters} = useAppSelector(state => state.filters);

  useEffect(() => {
    dispatch(
      getData({
        name: "measurements",
      })
    );

  }, [filters?.measurements || []]);

  
  return (
    <Container fluid>
      <Row>
        <Col className="ps-0 col-auto">
          <Sidebar />
        </Col>
        <Col className="col" style={{ overflow: "auto", height: "100vh" }}>
          <Row>
            <Col className="d-flex flex-start gap-3  pt-4">
              <DatePicker
                id={"from"}
                data="measurements"
                name={"from"}
                value={""}
                min={""}
                max={""}
                label="От:"
              />

              <DatePicker
                id={"to"}
                data="measurements"
                name={"to"}
                value={""}
                min={""}
                max={""}
                label="До:"
              />
            </Col>
          </Row>
          <DataTable />
        </Col>
      </Row>
    </Container>
  );
};
