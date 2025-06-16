import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router1 from "./routerStudy/Router1/Router1";
import Router2 from "./routerStudy/Router2/Router2";
import Router3 from "./routerStudy/Router3/Router3";
import Router4 from "./routerStudy/Router4/Router4";
import Home from "./routerStudy/Auth/Home/Home";
import MainRouter from "./routerStudy/Auth/Routers/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
