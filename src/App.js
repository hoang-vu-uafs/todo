import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    todos: [],
  };

  inputHandle = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  addHandle = () => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, this.state.text],
    }));

    console.log(this.state.todos);
  };

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.inputHandle(e)} />
        <button onClick={this.addHandle}>Add</button>
        {this.state.todos.map((todo, index) => {
          return (
            <div key={index}>
              {todo}
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
