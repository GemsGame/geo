import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  Snow3,
  Clipboard2Data,
  PieChart,
  Activity,
  BarChartLine,
  ArrowLeft,
} from "react-bootstrap-icons";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const Sidebar = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [userAction, setUserAction] = useState(false);

  let containerStyle = "";
  let animation = "";
  let textStyle = "d-sm-block";

  if (collapsed) {
    containerStyle = " collapsed";
    textStyle = "d-block";
    animation = "icon-rotate1";
  } else {
    if (userAction) {
      animation = "icon-rotate2";
    } else {
      animation = "";
    }
  }

  return (
    <Container
      className={
        "bg-primary d-flex flex-column justify-content-between h-100 min-vh-100" +
        containerStyle
      }
      fluid
    >
      <Row>
        <Col>
          <div>
            <div className="gap-2 d-flex align-items-center pt-4 pb-4">
              <div
                className="px-2"
                onClick={() => {
                  setCollapsed(!collapsed);
                  setUserAction(true);
                }}
              >
                <Snow3 size={32} color="white" cursor="pointer" />
              </div>
              <span
                className={
                  "text-center text-white roboto-black fs-5 d-none " + textStyle
                }
              >
                Frost.ГТМ
              </span>
            </div>
          </div>
          <Nav
            defaultActiveKey={"/"}
            className="flex-column gap-2"
            variant="pills"
            onSelect={(selectedKey) => navigate(selectedKey || "")}
          >
            <Nav.Item>
              <Nav.Link
                className="text-white d-flex gap-2"
                eventKey="/measurements/1"
              >
                <div>
                  <Activity size={18} color="white" />
                </div>
                <span className={"roboto-regular d-none " + textStyle}>
                  Термокоса
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-white d-flex gap-2 nav-link btn-secondary"
                eventKey="/measurements/2"
              >
                <div>
                  <PieChart size={18} color="white" />
                </div>
                <span className={"roboto-regular d-none " + textStyle}>
                  Деформационная марка
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-white d-flex gap-2"
                eventKey="/measurements/3"
              >
                <div>
                  <Clipboard2Data size={18} color="white" />
                </div>
                <span className={"roboto-regular d-none " + textStyle}>
                  Option 2
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white d-flex gap-2" eventKey="/">
                <div>
                  <BarChartLine size={18} color="white" />
                </div>
                <span className={"roboto-regular d-none " + textStyle}>
                  Option 2
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white d-flex gap-2" eventKey="/">
                <div>
                  <Clipboard2Data size={18} color="white" />
                </div>
                <span className={"roboto-regular d-none " + textStyle}>
                  Option 2
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-white d-flex gap-2"
                eventKey="/measurements/1"
              >
                <div>
                  <BarChartLine size={18} color="white" />
                </div>
                <span className={"roboto-regular d-none " + textStyle}>
                  Option 2
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="text-white d-flex gap-2"
                eventKey="/measurements/1"
              >
                <div>
                  <BarChartLine size={18} color="white" />
                </div>
                <span className={"roboto-regular d-none " + textStyle}>
                  Главная
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <div className="p-2 sidebar-arrow">
              <div
                className={"p-2 " + animation}
                onClick={() => {
                  setCollapsed(!collapsed);
                  setUserAction(true);
                }}
              >
                <ArrowLeft size={18} color="white" cursor="pointer" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
