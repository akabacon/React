import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardChecklist } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
//import Trash from 'react-bootstrap/Trash';
import { useState } from 'react';
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
function TodoItems(props) { //change status
  return (
    <InputGroup>
      <InputGroup.Checkbox
        checked={props.completed}
        onChange={props.onToggle}
      />
      <FormControl
        value={props.title}
        style={{
          textDecoration: props.completed ? "line-through 4px" : "None",
        }} //strikeThrough
      />
{/*      <Button variant="outline-danger" onClick={props.onDelete}>
        <Trash />
      </Button>
*/}

    </InputGroup>
  );
}


function App() {
  const [todos, setTodo] = useState(fetchTodos()); //2vars , class alike
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Home">
            <CardChecklist />代辦事項
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <ul>
          {todos.map((todo) => //through every element
            <TodoItems
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={()=>{
              setTodo(
                todos.map((x)=>
                   x.id === todo.id ? {...x,completed : !x.completed} : x //chang completed element’s props
                )
              )  
            }}                   
            />
          
          )}
        </ul>
      </Container>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

