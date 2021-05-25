import React from "react";
import { connect } from "react-redux";
import { addTodo, markAsRead, removeCompletedAsync } from "./TodoSlice";

import "./index.scss";

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  render() {
    const { todosList, addTodo, markAsRead, removeCompletedAsync } = this.props;
    const { todo } = this.state;
    return (
      <section>
          {
              this.props.isLoading ? (
                <div className='loader'>

                </div>
              ) : null
          }
          
        <h2>List</h2>
        <ul className="todo-list">
          {todosList.map((item) => {
            return (
              <li key={item.id}>
                <span>
                  <input
                    type="checkbox"
                    id={`check_${item.id}`}
                    className={`check ${item.isCompleted ? "checked" : ""}`}
                    onChange={() => markAsRead(item)}
                    defaultChecked={item.isCompleted}
                  />
                </span>
                <label htmlFor={`check_${item.id}`}>{item.name}</label>
              </li>
            );
          })}
          <button onClick={() => removeCompletedAsync(todosList)}>Remove completed</button>
        </ul>
        <div>
          <input
            type="text"
            value={todo}
            onChange={(ev) => this.setState({ todo: ev.target.value })}
            placeholder="Todo name"
          />
          <button onClick={(ev) => addTodo(todo)}>Add</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  todosList: state.todo.todos,
  isLoading: state.todo.isLoading,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (data) => dispatch(addTodo(data)),
    markAsRead: (data) => dispatch(markAsRead(data)),
    removeCompletedAsync: (data) => dispatch(removeCompletedAsync(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
