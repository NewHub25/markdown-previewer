import IconPrint from './icons/icon-print';

// eslint-disable-next-line
function Previewer({ html }) {
  return (
    <article className="previewer">
      <h2>
        <span>
          <IconPrint />
          Here it is printed your markdown
        </span>
      </h2>
      <section className="previewer_article" dangerouslySetInnerHTML={{ __html: html }}></section>
    </article>
  );
}

export default Previewer;
