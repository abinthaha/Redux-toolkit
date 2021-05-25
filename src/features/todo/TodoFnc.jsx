import React, { useState } from "react";
import { todosList, addTodo, markAsRead } from "./TodoSlice";
import { useSelector, useDispatch } from "react-redux";

import "./index.scss";

const TodoComponentFnc = (props) => {
  const todos = useSelector(todosList);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  console.log(props);
  return (
    <section>
      <h2>Todo functional component</h2>
      <ul className="todo-list">
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <span>
                <input
                  type="checkbox"
                  id={`check_${item.id}`}
                  className={`check ${item.isCompleted ? "checked" : ""}`}
                  onChange={() => dispatch(markAsRead(item))}
                  defaultChecked={item.isCompleted}
                />
              </span>
              <label htmlFor={`check_${item.id}`}>{item.name}</label>
            </li>
          );
        })}
      </ul>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(ev) => setTodo(ev.target.value)}
          placeholder="Todo name"
        />
        <button onClick={() => dispatch(addTodo(todo))}>Add</button>
      </div>
    </section>
  );
}

export default TodoComponentFnc;
