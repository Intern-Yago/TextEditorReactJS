import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import "./App.css" 

function App() {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    reloadonly: false,
    enableDragAndDropFileToEditor: true,
    editorClassName: false,
    uploader: {
      "insertImageAsBase64URI": true
    },
    theme: 'default',
    toolbarButtonSize: 'middle',
    hidePoweredByJodit: true,
    direction: 'ltr',
    image:{
      editAlign: true,
      editAlt:true,
      editBorderRadius: true,
      editLink: true,
      editSize: true,
      editTitle: true,
      openOnDblClick: true,
      showPreview: true,
    }
  }

  const handleUpdate = (event)=>{
    const editorContent = event.target.value
    setContent(editorContent)
  }

  return (
    <div className="App">
      <JoditEditor

        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent)=>{

        }}
      />

    </div>
  );
}

export default App;
