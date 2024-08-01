import IconMark from './icons/icon-mark';

// eslint-disable-next-line
function Markdown({ raw, setRaw }) {
  return (
    <article className="markdown">
      <h2 className='markdown_h2'>
        <span>
          <IconMark />
          Write here your markdown to transform
        </span>
      </h2>
      <textarea
        className="markdown_textarea"
        placeholder="Write here"
        id="editor"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
      ></textarea>
    </article>
  );
}

export default Markdown;
