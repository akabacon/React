import React from 'react';
import ReactDOM from 'react-dom/client';
function fetchTodos() {
  return [
    {
      id: 1,
      title: "吃飯",
      completed: false,
    },
    {
      id: 2,
      title: "刷牙",
      completed: false,
    }
  ]
}
function App() {
  const todos = fetchTodos();
  return (
    <ul>
      {todos.map((todo) => //through every element
        <li>
          <input type="checkbox" defaultChecked={todo.completed} />
          <label>{todo.title}</label>
        </li>)
      }
    </ul>

  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

