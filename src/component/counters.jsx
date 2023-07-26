import React, { Component } from "react";
import Counter from "./counter.component";
class Counters extends Component {
  render() {
    const { onResetAll, counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onResetAll}>
          Reset All
        </button>
        {counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onReset={onReset}
            >
              <h4>Counter# {counter.id}</h4>
            </Counter>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
