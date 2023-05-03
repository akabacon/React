import React from 'react';
import ReactDOM from 'react-dom/client';
//import { useState } from 'react';
import CodeEditor from './CodeEditor';



function App() {
  return (
    <h1>good</h1>,
    <CodeEditor/>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

