import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
const CodeEditor=()=> {
  const [code, setCode] = useState('');

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  return (
    <CodeMirror
      value={code}
      onBeforeChange={handleChange}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
      }}
    />
  );
};

export default CodeEditor;
