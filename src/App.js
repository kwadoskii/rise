import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Categories from "./views/Categories";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <Categories />
      {/* <SideMenu /> */}
    </div>
  );
}

export default App;
