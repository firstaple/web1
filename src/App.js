import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TabComp from "./components/TabComp";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <h1>The Elder Scrolls V SKYRIM</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TabComp />
        </Col>
      </Row>
      <Row>
        <Col>footer</Col>
      </Row>
    </div>
  );
}

export default App;
