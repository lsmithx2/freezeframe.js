export const compose = (...fns) => (
  fns.reduceRight((f, g) => (...args) => f(g(...args)))
);

export const formatMessage = (string) => `✨Freezeframe: ${string}✨`;

export const error = (message, ...args) => {
  console.error(formatMessage(message), ...args);
};

export const warn = (message, ...args) => {
  console.warn(formatMessage(message), ...args);
};

export const isTouch = () => {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
};

export const parseFilename = (filePath) => {
  return filePath
    .split('.')
    .pop()
    .toLowerCase()
    .substring(0, 3);
};

export const validateFilename = (filePath) => {
  const ext = parseFilename(filePath);
  return ext === 'gif';
};

export const normalizeElements = (selectorOrNodes) => {
  const sel = selectorOrNodes;
  const type = typeof sel;
  return type === 'string'
    ? document.querySelectorAll(sel)
    : sel;
};

export const validateElements = (elements) => {
  Array.from(elements).forEach((image) => {
    if (!(image instanceof HTMLImageElement)) {
      error('Invalid element', image);
    }
    if (!(validateFilename(image.src))) {
      warn('Image is not a gif', image);
    }
  });
  return elements;
};

export const htmlToNode = (html) => {
  const $wrap = window.document.createElement('div');
  $wrap.innerHTML = html;
  const $content = $wrap.childNodes;
  return $content.length > 1
    ? $content
    : $content[0];
};

export const wrapNode = ($el, $wrapper) => {
  $el.parentNode.insertBefore($wrapper, $el);
  $wrapper.appendChild($el);
};