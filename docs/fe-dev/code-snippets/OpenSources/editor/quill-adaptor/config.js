const TOOLBAR_OPTIONS = [
  // toggled buttons
  ['image', 'bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],

  // custom button values
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  // superscript/subscript
  [{ 'script': 'sub'}, { 'script': 'super' }],
  // outdent/indent
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  // text direction
  [{ 'direction': 'rtl' }],

  // custom dropdown
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  // dropdown with defaults from theme
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],

  // remove formatting button
  ['clean']
];