import React from "react";
import "./App.css";
import Button from "./Button";
import OpenChatFrame from "./OpenChatFrame";
import { powderBlue, red, yellow } from "./colors";

function App() {
  const [area, setArea] = React.useState("home");
  return (
    <>
      <div className="header">
        <div className="app-name">Signals</div>
        <div className="buttons">
          <Button color={yellow} text={"Login"}></Button>
          <Button color={powderBlue} text={"Get Started"}></Button>
        </div>
      </div>
      <div className="body">
        <div className="left">
          <div className="nav-btn">
            <Button
              onClick={() => setArea("home")}
              color={red}
              text={"Home"}
            ></Button>
          </div>
          <div className="nav-btn">
            <Button
              onClick={() => setArea("feed")}
              color={yellow}
              text={"Feed"}
            ></Button>
          </div>
          <div className="nav-btn">
            <Button
              onClick={() => setArea("latest")}
              color={powderBlue}
              text={"Latest"}
            ></Button>
          </div>
          <div className="nav-btn">
            <Button
              onClick={() => setArea("faq")}
              color={red}
              text={"FAQ"}
            ></Button>
          </div>
          <div className="nav-btn">
            <Button
              onClick={() => setArea("feedback")}
              color={yellow}
              text={"Feedback"}
            ></Button>
          </div>
          <div className="nav-btn">
            <Button
              onClick={() => setArea("chat")}
              color={powderBlue}
              text={"Chat"}
            ></Button>
          </div>
        </div>
        <div className="right">
          {area === "home" && <h1 className="title">Home</h1>}
          {area === "feed" && <h1 className="title">Feed</h1>}
          {area === "latest" && <h1 className="title">Latest</h1>}
          {area === "faq" && <h1 className="title">FAQ</h1>}
          {area === "feedback" && <h1 className="title">Feedback</h1>}
          {area === "chat" && <OpenChatFrame path={"/user"} />}
        </div>
      </div>
    </>
  );
}

export default App;
