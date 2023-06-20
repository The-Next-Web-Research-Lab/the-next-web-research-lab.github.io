// mountEditor(element: HTMLElement, placeholder: string): QuillContainer
const mountEditor = (element, placeholder = '') => {
  return new Quill(element, {
    modules: {
      toolbar: TOOLBAR_OPTIONS
    },
    placeholder,
    theme: 'snow'
  })
}

// mountViewer(element: HTMLElement): QuillContainer
const mountViewer = (element) => {
  return new Quill(element, {
    readOnly: true,
    theme: 'bubble'
  })
}

// extractContents(editorContainer: QuillContainer): string
const extractContents = (container) => JSON.stringify(container.getContents())

// insertContents(editorContainer: QuillContainer, contents: string): void
const insertContents = (container, contents) => {
  container.setContents(JSON.parse(contents))
}