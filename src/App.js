import React, { useState, useEffect } from 'react'
import { Button } from "antd"
import "antd/dist/antd.css"
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css"
import useAutoSave from "./customHooks/useAutoSave";

function App() {
  const [text, setText] = useState("");

  const saving = useAutoSave(text);

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={value => setText(value)}
      />
      { saving ?
        <Button type="primary" loading disabled>Saving</Button>
        :
        <Button type="primary">Save</Button> }
    </div>
  )
}

export default App
