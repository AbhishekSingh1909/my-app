import React, { Component } from "react";
class Counter extends Component {
  state = {
    tags: [],
  };
  constructor() {
    super();
    console.log("Counter -Constructor");
  }
  componentDidUpdate(preState, postState) {
    console.log("pre", preState);
    console.log("post", postState);
  }
  renderTags() {
    if (this.state.tags.length === 0) {
      return (
        <div>
          <p style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
            There is no tags
          </p>

          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>tag</li>
            ))}
          </ul>
        </div>
      );
    }
  }
  componentWillUnmount() {
    //call before component has unMounted from DOM
    console.log("counter- unMounted");
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onReset(this.props.counter)}
        >
          Reset
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <div>
          {this.state.tags.length === 0 && "please create a new tag"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;

    return count === 0 ? "zero" : count;
  }
}

export default Counter;
