import { useState } from "react";
import "./App.css";

function App() {
  const [html, setHtml] = useState(
    `<h1>Hello World!</h1>
<p>Welcome to my Online Code Editor.</p>`
  );

  const [css, setCss] = useState(
    `body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 40px;
}

h1 {
  color: #4f46e5;
}`
  );

  const [js, setJs] = useState(
    `console.log("Hello from JavaScript!");`
  );

  const [output, setOutput] = useState("");

  // Dark / Light mode
  const [darkMode, setDarkMode] = useState(true);

  const runCode = () => {
    const result = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            ${css}
          </style>
        </head>

        <body>
          ${html}

          <script>
            ${js}
          <\/script>
        </body>
      </html>
    `;

    setOutput(result);
  };

  const clearCode = () => {
    setHtml("");
    setCss("");
    setJs("");
    setOutput("");
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* Navbar */}
      <header className="navbar">

        <h1>⚡ CodeFlow</h1>

        <div className="buttons">

          {/* Theme Button */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Run Button */}
          <button
            className="run"
            onClick={runCode}
          >
            ▶ Run
          </button>

          {/* Clear Button */}
          <button
            className="clear"
            onClick={clearCode}
          >
            Clear
          </button>

        </div>

      </header>

      {/* Editors */}
      <main className="editor-container">

        {/* HTML Editor */}
        <section className="editor-box">

          <div className="editor-title html-title">
            HTML
          </div>

          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder="Write HTML code..."
            spellCheck="false"
          />

        </section>

        {/* CSS Editor */}
        <section className="editor-box">

          <div className="editor-title css-title">
            CSS
          </div>

          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            placeholder="Write CSS code..."
            spellCheck="false"
          />

        </section>

        {/* JavaScript Editor */}
        <section className="editor-box">

          <div className="editor-title js-title">
            JavaScript
          </div>

          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            placeholder="Write JavaScript code..."
            spellCheck="false"
          />

        </section>

      </main>

      {/* Live Preview */}
      <section className="preview-section">

        <div className="preview-title">
          Live Preview
        </div>

        <iframe
          title="Live Preview"
          srcDoc={output}
          sandbox="allow-scripts"
        />

      </section>

    </div>
  );
}

export default App;