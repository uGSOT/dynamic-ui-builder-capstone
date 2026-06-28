import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function syncIframeStyles(iframeDocument) {
  iframeDocument.head.innerHTML =
    '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />';

  document.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
    iframeDocument.head.appendChild(node.cloneNode(true));
  });
}

export default function PreviewFrame({ width, height, children }) {
  const iframeRef = useRef(null);
  const [mountNode, setMountNode] = useState(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    const handleLoad = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;

      syncIframeStyles(doc);
      doc.body.className = "bg-surface text-ink antialiased";
      doc.body.style.margin = "0";
      doc.body.style.padding = "0";
      doc.body.style.overflowX = "hidden";
      doc.body.style.overflowY = "auto";
      setMountNode(doc.body);
    };

    iframe.addEventListener("load", handleLoad);
    iframe.src = "about:blank";

    return () => {
      iframe.removeEventListener("load", handleLoad);
      setMountNode(null);
    };
  }, []);

  return (
    <div
      className="mx-auto overflow-hidden rounded-xl border border-border bg-surface shadow-card"
      style={{ width, maxWidth: "100%" }}
    >
      <iframe
        ref={iframeRef}
        title="Site preview"
        className="block w-full bg-surface"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          maxWidth: "100%",
          border: "none",
        }}
      >
        {mountNode ? createPortal(children, mountNode) : null}
      </iframe>
    </div>
  );
}
