import Split from 'react-split';
import Markdown from './markdown';
import Previewer from './previewer';
import Splitter from './splitter';
import { useState } from 'react';
import { marked } from 'marked';
import textLoaded from './assets/first-load.json';

function App() {
  const [raw, setRaw] = useState(textLoaded.text);

  return (
    <main className="app">
      <h1 hidden>markdown-previewer</h1>
      <Markdown raw={raw} setRaw={setRaw} />
      <Splitter />
      <Previewer html={marked(raw)} />
    </main>
  );
}

export default App;
