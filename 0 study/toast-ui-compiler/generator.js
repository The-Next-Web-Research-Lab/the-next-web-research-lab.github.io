const generateAttrString = attr => {
  return Object
    .entries(attr)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')
};
const generateElementString = body => {
  return body
    .map(node => `<${node.tag} ${generateAttrString(node.attr)}></${node.tag}>`)
    .join(`\n\t`);
};
const generator = svgAst => {
  const svgAttr = generateAttrString(svgAst.attr);
  const elements = generateElementString(svgAst.body);
  return `<svg ${svgAttr}>\n${elements}\n</svg>`
};

const input = {
  tag: 'svg',
  attr: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 100 100',
    version: '1.1',
    width: 100,
    height: 100
  },
  body: [
    {
      tag: 'rect',
      attr: {
        x: 0, y: 0,
        width: 100, height: 100,
        fill: 'rgb(0%,0%,0%)'
      }
    }
  ]
};
const output = generator(input);
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" width="100" height="100">
//   <rect x="0" y="0" width="100" height="100" fill="rgb(0%,0%,0%)"></rect>
// </svg>

module.exports = {generator}


