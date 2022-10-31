import "./css/NavComp.css";
import Nav from "react-bootstrap/Nav";

function NavComp() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" className="nav">
      <Nav.Item>
        <Nav.Link href="/home">img</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Background Story</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">System Requirements</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavComp;
