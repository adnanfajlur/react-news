import React, { Component } from "react";
import { Responsive, Container, Segment } from "semantic-ui-react";
import logo from "./logo.svg";
import AppMenu from "./components/AppMenu";
import Button from "./components/Button";
import CustomCard from "./components/CustomCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppMenu />
        <Container>
          <CustomCard />
        </Container>
      </div>
    );
  }
}

export default App;
