import { Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonMain from "./components/ButtonMain";
import NavBar from "./components/NavBar";

import routes from "./routes/route";

function App() {
  return (
    <>
      <Routes>{routes.map((route) => route)}</Routes>
    </>
  );
}

export default App;
