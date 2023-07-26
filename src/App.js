import React, { Component } from "react";

import "./App.css";
import NavBar from "./component/navbar";
import Counters from "./component/counters";
//import SimpleForm from "./component/useState";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 4,
      },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App-constructor called", this.props);
    //best place to initialize the state or properties.
  }
  handleDelete = (id) => {
    console.log("id", id);
    const deleteCounters = this.state.counters.filter(
      (counter) => counter.id !== id
    );
    this.setState({ counters: deleteCounters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  };
  handleResetAll = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  componentDidMount() {
    //best place for Ajax call
    console.log("App- Mount");
    this.setState({});
  }
  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onResetAll={this.handleResetAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
