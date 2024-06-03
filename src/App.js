import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import News from "./components/News.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News category="health"/>
      </div>
    );
  }
}
