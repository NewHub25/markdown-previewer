import { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <main>
      <textarea
        name=''
        id='editor'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <div id='preview'></div>
    </main>
  );
}

export default App;
