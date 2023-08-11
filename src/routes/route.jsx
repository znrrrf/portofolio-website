import React from "react";
import Home from "../pages/Home";
import Paging from "./Paging";
import { Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Skill from "../pages/Skill";
import Study from "../pages/Study";
import Projects from "../pages/Projects";
import AboutMe from "../pages/AboutMe";

const routes = [
  <Route
    path="/"
    element={
      <Paging main={true}>
        <Home />
      </Paging>
    }
  />,
  <Route
    path="/about-me"
    element={
      <Paging main={true}>
        <AboutMe />
      </Paging>
    }
  />,
  <Route
    path="/contact"
    element={
      <Paging contact={true}>
        <Contact />
      </Paging>
    }
  />,
  <Route
    path="/skill"
    element={
      <Paging main={true}>
        <Skill />
      </Paging>
    }
  />,
  <Route
    path="/study"
    element={
      <Paging main={true}>
        <Study />
      </Paging>
    }
  />,
  <Route
    path="/projects"
    element={
      <Paging main={true}>
        <Projects />
      </Paging>
    }
  />,
];
export default routes;
