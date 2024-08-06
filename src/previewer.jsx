import IconPrint from './icons/icon-print';

// eslint-disable-next-line
function Previewer({ html, myref, refH2 }) {
  return (
    <article ref={myref} className="previewer">
      <h2 className="previewer_h2" ref={refH2}>
        <span>
          <IconPrint />
          Here it is printed your markdown
        </span>
      </h2>
      <section
        id="preview"
        className="previewer_article"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </article>
  );
}

export default Previewer;
