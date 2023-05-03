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

export default Setting;