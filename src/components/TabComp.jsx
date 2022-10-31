import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {} from "./css/TabComp.css";

import ImgComp from "./ImgComp";
import BackgroundStory from "./BackgroundStory";
import System from "./System";

function TabComp() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Img">
        <ImgComp />
      </Tab>
      <Tab eventKey="link-1" title="Back story">
        <BackgroundStory />
      </Tab>
      <Tab eventKey="link-2" title="Story">
        <System />
      </Tab>
    </Tabs>
  );
}

export default TabComp;
