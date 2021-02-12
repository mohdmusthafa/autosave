import React, { useState, useEffect } from 'react'
import { Button } from "antd"
import "antd/dist/antd.css"
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css"

function App() {
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);
  const [lastText, setLastText] = useState("");
  
  useEffect(() => {
    const intervel = setInterval(async () => {
      await new Promise((resolve, reject) => setTimeout(async () => {
        if(text !== lastText){
          setSaving(true)
          await new Promise((res, rej) => { setTimeout(() => { setLastText(text); res() }, 1000) })
          setSaving(false)
        }
        clearInterval(intervel);
        resolve()
      }, 1000))
    }, 3000)

    return () => clearInterval(intervel)
  })
  return (
    <div>
      <ReactQuill
        value={text}
        onChange={value => setText(value)}
      />
      {saving ? <Button type="primary" loading disabled>Saving</Button> : <Button type="primary">Save</Button> }
    </div>
  )
}

export default App
