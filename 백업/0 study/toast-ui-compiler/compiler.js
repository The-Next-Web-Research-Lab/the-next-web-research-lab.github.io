const {lexer} = require('./lexer');
const {parser} = require('./parser');
const {transformer} = require('./transformer');
const {generator} = require('./generator');

const compiler = (code) => {
  const tokens = lexer(code);
  const ast = parser(tokens);
  const svgAst = transformer(ast);
  const svg = generator(svgAst);
  return svg;
};

const input = 'Paper 100';
const output = compiler(input);
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" width="100" height="100">
//   <rect x="0" y="0" width="100" height="100" fill="rgb(0%,0%,0%)"></rect>
// </svg>
