import IconMark from './icons/icon-mark';

// eslint-disable-next-line
function Markdown({ raw, setRaw, myref }) {
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
          className="markdown_textarea"
          placeholder="Write here"
          id="editor"
          value={raw}
          onChange={(e) => setRaw(e.currentTarget.value)}
        ></textarea>
      </section>
    </article>
  );
}

export default Markdown;
