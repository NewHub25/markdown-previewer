import { useEffect, useRef } from 'react';

let isResizing = false;

// eslint-disable-next-line
function Splitter({ markdownRef, previewerRef }) {
  const splitterRef = useRef(null);

  useEffect(() => {
    const mouseDownFallback = () => {
      isResizing = true;
    };
    const mouseUpFallback = () => {
      isResizing = false;
    };
    const mouseMoveFallback = function (e) {
      if (!isResizing) return;
      const offsetRight = document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
      markdownRef.current.style.flexBasis = `calc(100% - ${
        offsetRight + splitterRef.current.offsetWidth
      }px)`;
      previewerRef.current.style.flexBasis = `${offsetRight}px`;
    };
    splitterRef.current.addEventListener('mousedown', mouseDownFallback);
    document.addEventListener('mousemove', mouseMoveFallback);
    document.addEventListener('mouseup', mouseUpFallback);

    return () => {
      splitterRef.current.removeEventListener('mousedown', mouseDownFallback);
      document.removeEventListener('mousemove', mouseMoveFallback);
      document.removeEventListener('mouseup', mouseUpFallback);
    };
  }, [markdownRef, previewerRef]);

  return (
    <div ref={splitterRef} className="splitter">
      :::
    </div>
  );
}

export default Splitter;
