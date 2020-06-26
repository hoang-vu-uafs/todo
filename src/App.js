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

  addHandle(id) {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { theText: this.state.text, theCheck: false, theID: id },
      ],
    }));
  }

  deleteHandle = (i) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(i, 1);
    this.setState({
      todos: newTodos,
    });
    console.log(this.state.todos);
  };

  checkHandle = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.theID !== id) return todo; //todo.id
        return {
          theText: todo.theText,
          theCheck: !todo.theCheck,
          theID: todo.theID,
        };
      }),
    });
  };

  countChecked = () => {
    let count = 0;
    this.state.todos.forEach((todo) => {
      if (todo.theCheck === true) {
        count++;
      }
    });

    return count;
  };
  id = 0;
  render() {
    this.id++;
    return (
      <div className="App">
        <div>
          <label>Number of tasks: {this.state.todos.length}</label>
          <div>Finished tasks: {this.countChecked()}</div>
        </div>

        <input onChange={(e) => this.inputHandle(e)} />
        <button onClick={() => this.addHandle(this.id)}>Add</button>
        {this.state.todos.map((todo, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={todo.theCheck} //checked={this.state.todos.theCheck}
                onChange={() => this.checkHandle(todo.theID)} //todo.id not id
              />
              {todo.theText}
              <button onClick={() => this.deleteHandle(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
