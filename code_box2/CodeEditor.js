import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const CodeEditor=()=> {
  const [code, setCode] = useState(''); //code ,string format
  const handleChange = (editor, data, value) => { //
    setCode(value);
  };

  return (
    <CodeMirror
      value={code} //words in box
      onBeforeChange={handleChange} //handle  number
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
      }}
    />
  );
};

export default CodeEditor;
