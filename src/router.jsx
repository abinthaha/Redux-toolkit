import { Router } from "@reach/router";
import TodoComponentFnc from './features/todo/TodoFnc';
import TodoComponent from './features/todo/Todo';

const Route = () => {
  return (
    <Router>
      <TodoComponent path="/" />
      <TodoComponentFnc path="fnc" />
    </Router>
  );
};

export default Route;