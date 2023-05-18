import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/EditorQuill.css';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

export default function Editor(props) {

  const toolbar_options = [
    [{ 'header': [1, 2, 3, 4, 5, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    [{ align: [] }],
    ['image', 'video', 'link', 'code-block'],
    ['clean']
  ]

  return (
    <div>
      <ReactQuill theme="snow" value={props.content} onChange={props.handleContentChange}

        modules={{
          toolbar: toolbar_options,
          imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize', 'Toolbar']
          }
        }} />;
    </div>
  )
}