import React from "react";
import Paging from "./Paging";
import { Route } from "react-router-dom";

import MainPage from "../pages/MainPage";

const routes = [
  <Route
    key={"main"}
    path="/"
    element={
      <Paging main={true}>
        <MainPage />
      </Paging>
    }
  />,
];
export default routes;
