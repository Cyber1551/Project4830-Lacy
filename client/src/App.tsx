import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameComponent from "./components/GameComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import { UserContext } from "./context/UserContext";
import { SocketContext } from "./context/SocketContext";

const App = () => {
  return (
    <div className="App">
      <UserContext>
        <SocketContext>
          <Router>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/game" exact component={GameComponent} />
          </Router>
        </SocketContext>
      </UserContext>
    </div>
  );
};

export default App;
