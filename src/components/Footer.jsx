import Card from "react-bootstrap/Card";
import {} from "./css/Footer.css";

function footer() {
  return (
    <Card className="bg-dark text-white">
      <div className="footer">
        <a href="">
          <li>PC</li>
        </a>
        <a href="">
          <li>XBOX</li>
        </a>
        <a href="">
          <li>PS4</li>
        </a>
        <a href="">
          <li>SWITCH</li>
        </a>
      </div>
      <Card.ImgOverlay></Card.ImgOverlay>
    </Card>
  );
}

export default footer;
