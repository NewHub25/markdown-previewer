import Split from 'react-split';
import Markdown from './markdown';
import Previewer from './previewer';
import Splitter from './splitter';

function App() {
  return (
    <main className="app">
      <Markdown />
      <Splitter />
      <Previewer html={'<h1>Hola mi amor</h1>'} />
    </main>
  );
}

export default App;
