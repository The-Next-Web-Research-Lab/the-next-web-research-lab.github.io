export const fragment = (nodes) => {
  const fragment = new DocumentFragment();
  nodes.forEach(node => {
    fragment.appendChild(node);
  });
  return fragment;
};

export const html = (tagName, children, options) => {
  const elem = document.createElement(tagName);
  appendChild(elem, children);
  appendOptions(elem, options);
  return elem;
};

const appendChild = (elem, children) => {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      typeof child === 'function' ?
        child(elem) :
        elem.appendChild(child)
    })
  } else {
    elem.textContent = children
  }
};

const appendOptions = (elem, options) => {
  if (options) {
    const {attrs = {}, events = {}} = options;

    forEach(attrs, ([key, value]) => {
      elem.setAttribute(key, value)
    });
    forEach(events, ([key, fn]) => {
      elem.addEventListener(key, fn)
    });
  }
};

const forEach = (obj, fn) => {
  Object
    .entries(obj)
    .forEach(fn)
};
