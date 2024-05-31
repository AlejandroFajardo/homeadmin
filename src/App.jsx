import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import DesktopT from "./components/DestopT";
import AgendarTurno from "./components/AgendarTurno";
import InfoTurnos from "./components/InfoTurnos";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesktopT/>}/>
        <Route path="/add" element={<AgendarTurno/>}/>
        <Route path="/info/:id" element={<InfoTurnos/>}/>
      </Routes>
    </BrowserRouter>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App/>);
