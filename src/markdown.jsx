import { useState } from 'react';
import IconMark from './icons/icon-mark';
import './styles/button.css';
import classNames from 'classnames';

// eslint-disable-next-line
function Markdown({ raw, setRaw, myref }) {
  const [size, setSize] = useState(14);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(raw)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((e) => console.log(e));
  };
  const handleReset = () => {
    if (confirm('Are you sure you want to empty this markdown?')) setRaw('');
  };
  const handleSizePlus = () => {
    if (size > 30) return;
    setSize(size + 1);
  };
  const handleSizeMinus = () => {
    if (size < 10) return;
    setSize(size - 1);
  };

  return (
    <article ref={myref} className="markdown">
      <h2 className="markdown_h2">
        <span>
          <IconMark />
          Write here your markdown to transform
        </span>
      </h2>
      <section>
        <textarea
          spellCheck={false}
          style={{ fontSize: size }}
          className="markdown_textarea"
          placeholder="Write here"
          id="editor"
          value={raw}
          onChange={(e) => setRaw(e.currentTarget.value)}
        ></textarea>
        <nav className="markdown_nav">
          <button className={classNames('button-19', { copied })} onClick={handleCopy}>
            {!copied ? 'copy' : 'copied'}
          </button>
          <button className="button-19" onClick={handleReset}>
            empty
          </button>
          <button className="button-19" onClick={handleSizePlus}>
            A+
          </button>
          <button className="button-19" onClick={handleSizeMinus}>
            A-
          </button>
        </nav>
      </section>
    </article>
  );
}

export default Markdown;
