import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router1 from "./routerStudy/Router1/Router1";
import Router2 from "./routerStudy/Router2/Router2";
import Router3 from "./routerStudy/Router3/Router3";
import Router4 from "./routerStudy/Router4/Router4";

function App() {
  return (
    <BrowserRouter>
      <Router3 />
    </BrowserRouter>
  );
}

export default App;
