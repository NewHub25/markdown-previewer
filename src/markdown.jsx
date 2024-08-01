import { useState } from 'react';
import IconMark from './icons/icon-mark';

function Markdown() {
  const [markdown, setMarkdown] = useState('');
  return (
    <article className="markdown">
      <h2>
        <span>
          <IconMark />
          Write here your markdown to transform
        </span>
      </h2>
      <textarea
        className="markdown_textarea"
        placeholder="Write here"
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
    </article>
  );
}

export default Markdown;
