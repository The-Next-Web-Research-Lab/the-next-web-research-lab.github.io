import {lexer} from './lexer.js';
import {parser} from './parser.js';
import {transformer} from './transformer.js';
import {generator} from './generator.js';

export const compiler = (code) => {
  // `<div>
  //   {{text}} Text
  //   <div>{{text}}</div>
  // </div>`
  const tokens = lexer(code);
  // [
  //   { type: 'start', value: '<div>' },
  //   { type: 'text', value: '{{text}} Text' },
  //   { type: 'start', value: '<div>' },
  //   { type: 'text', value: '{{text}}' },
  //   { type: 'end', value: '</div>' },
  //   { type: 'end', value: '</div>' }
  // ]
  const ast = parser(tokens);
  // {
  //   type: 'MarkupLanguage',
  //   body: [
  //     { type: 'StartTag', value: '<div>' },
  //     { type: 'Content', value: '{{text}} Text' },
  //     { type: 'StartTag', value: '<div>' },
  //     { type: 'Content', value: '{{text}}' },
  //     { type: 'EndTag', value: '</div>' },
  //     { type: 'EndTag', value: '</div>' }
  //   ]
  // }
  const htmlAst = transformer(ast);
  // {
  //   tag: 'h1',
  //   children: [
  //     {type: 'TemplateBinding', value: 'text'}
  //   ]
  // }
  const renderFn = generator(htmlAst);
  // (state) => createElement('h1', state.text)
  return renderFn;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// console.log(output);
// (state) => createElement('h1', state.text)
