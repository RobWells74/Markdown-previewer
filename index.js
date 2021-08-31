marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer()

function App() {
  const [text, setText] = React.useState(placeholder);
  return(
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Editor</h1>
      <textarea  className="textarea" name="text" id="editor" value={text} onChange={(e)=> setText(e.target.value)} rows="10"></textarea>
      <h3 className="p-4">Preview</h3>
      <Previewer markdown={text}/>
    </div>
  )
}

function Previewer({markdown}) {
  return(
    <div dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer}), }}
    id="preview">
    </div>
  )
}

const placeholder = `
# Markdown Key:

# h1
## h2
### h3

Write code, \`<p></p>\`, between 2 backticks.

\`\`\`
// write multi-line code between 3 backticks:

function example(firstCondition, secondCondition) {
  if (firstcondition && secondCondition) {
    return result;
  }
}
\`\`\`

- Unordered
  - list
    - example

1. Ordered
2. list
3. example

> Blockquote

*Italic text*

**Bold text**



Click the link for a markdown cheatsheet: [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)

![Image](https://www.wpexplorer.com/wp-content/uploads/markdown1.jpg)

`;

ReactDOM.render(<App />, document.getElementById("root"));