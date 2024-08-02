import { useEffect, useRef } from 'react';

let isResizing = false;

// eslint-disable-next-line
function Splitter({ markdownRef, previewerRef }) {
  const splitterRef = useRef(null);

  useEffect(() => {
    splitterRef.current.addEventListener('mousedown', function () {
      console.log(123);
      isResizing = true;
    });
    document.addEventListener('mousemove', function (e) {
      if (!isResizing) return;
      const offsetRight = document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
      markdownRef.current.style.flexBasis = `calc(100% - ${
        offsetRight + splitterRef.current.offsetWidth
      }px)`;
      previewerRef.current.style.flexBasis = `${offsetRight}px`;
    });

    document.addEventListener('mouseup', function () {
      isResizing = false;
    });
  }, [markdownRef, previewerRef]);

  return (
    <div ref={splitterRef} className="splitter">
      :::
    </div>
  );
}

export default Splitter;
