import Markdown from './markdown';
import Previewer from './previewer';
import Splitter from './splitter';
import { useRef, useState } from 'react';
import { marked } from 'marked';
import textLoaded from './assets/first-load.json';

function App() {
  const [raw, setRaw] = useState(textLoaded.text);
  const markdownRef = useRef(null);
  const previewerRef = useRef(null);
  const refH2 = useRef(null);

  marked.use({
    breaks: true,
  });

  return (
    <main className="app">
      <h1 hidden>markdown-previewer</h1>
      <Markdown myref={markdownRef} raw={raw} setRaw={setRaw} />
      <Splitter markdownRef={markdownRef} previewerRef={previewerRef} refH2={refH2} />
      <Previewer myref={previewerRef} refH2={refH2} html={marked(raw)} />
    </main>
  );
}

export default App;
