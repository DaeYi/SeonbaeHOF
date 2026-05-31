// Safe DOM construction helpers.
// All values passed via this module are inserted as text nodes (never parsed as HTML).
// For trusted HTML content (e.g., marked.js output from our own .md files), use renderTrustedHtml.

(function () {
  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);

    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') {
        node.className = v;
      } else if (k === 'style' && typeof v === 'object') {
        Object.assign(node.style, v);
      } else if (k.startsWith('on') && typeof v === 'function') {
        node.addEventListener(k.slice(2).toLowerCase(), v);
      } else if (k === 'data') {
        for (const [dk, dv] of Object.entries(v)) node.dataset[dk] = dv;
      } else {
        node.setAttribute(k, v);
      }
    }

    appendChildren(node, children);
    return node;
  }

  function appendChildren(node, children) {
    for (const child of children) {
      if (child == null || child === false) continue;
      if (Array.isArray(child)) {
        appendChildren(node, child);
      } else if (typeof child === 'string' || typeof child === 'number') {
        node.appendChild(document.createTextNode(String(child)));
      } else if (child instanceof Node) {
        node.appendChild(child);
      }
    }
  }

  function clear(node) {
    while (node && node.firstChild) node.removeChild(node.firstChild);
  }

  // Render trusted HTML (controlled by us, e.g. marked output of our own .md files).
  // Uses DOMParser to avoid the innerHTML assignment pattern entirely.
  function renderTrustedHtml(target, htmlString) {
    clear(target);
    const parsed = new DOMParser().parseFromString(htmlString, 'text/html');
    const fragment = document.createDocumentFragment();
    Array.from(parsed.body.childNodes).forEach(node => {
      fragment.appendChild(document.importNode(node, true));
    });
    target.appendChild(fragment);
  }

  window.DOMx = { el, clear, renderTrustedHtml };
})();
