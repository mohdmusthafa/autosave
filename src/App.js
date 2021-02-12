import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { Button } from "antd";

import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";
import "./styles.css";

import useAutoSave from "./customHooks/useAutoSave";
import CustomToolBar from "./components/CustomToolBar";



const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "open-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

function App(){
  const [text, setText] = useState("");
  const saving = useAutoSave(text);

  const modules = {
    toolbar: {
      container: "#toolbar"
    }
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

  return (
    <div className="text-editor">
      <CustomToolBar />
      <ReactQuill
        value={text}
        onChange={(value) => setText(value)}
        modules={modules}
        formats={formats}
      />

      { saving ? 
      <Button type="primary" loading disabled>Saving</Button>
      :
      <Button type="primary">Save</Button> 
    }
    </div>
  );
}

export default App