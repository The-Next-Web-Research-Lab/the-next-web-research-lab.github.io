import {SYMBOL, SYNTAX_TYPE} from '../syntax.js';
import {VIRTUAL_CODE_SYNTAX} from './virtual-code-syntax.js';
import {useLoopGuard} from '../helper.js';

export const virtualCodeGenerator = ast => {
  const context = {
    virtualCode: [],
    currentTagIndex: 0,
    currentAst: ast
  };
  const loopGuard = useLoopGuard();

  while (ast.body.length) {
    switch (true) {
      case isValue(context, SYMBOL.START_OPEN):
        generateStartTag(context);
        break;
      case isValue(context, SYMBOL.END_OPEN):
        generateEndTag(context);
        break;
      case isType(context, SYNTAX_TYPE.TAG):
        generateTag(context);
        break;
      case isType(context, SYNTAX_TYPE.TEMPLATE):
        generateTemplate(context);
        break;
      case isType(context, SYNTAX_TYPE.STRING_CONSTANT):
        generateStringConstant(context);
        break;
    }

    if (loopGuard.isMaxLoop()) {
      loopGuard.log();
      break
    }
  }

  return context.virtualCode
};

const firstNode = (context) => context.currentAst.body[0];
const isValue = (context, symbol) => firstNode(context).value === symbol;
const isType = (context, type) => firstNode(context).type === type;

const generateStartTag = context => {
  context.currentAst.body.shift();
  const tag = context.currentAst.body.shift();
  const hasAttribute = firstNode(context).type === SYNTAX_TYPE.ATTRIBUTE

  if (hasAttribute) {
    context.virtualCode.push(`${VIRTUAL_CODE_SYNTAX.ELEMENT}('${tag.value}', [`);
    context.currentTagIndex = context.virtualCode.length - 1
    while(context.currentAst.body[0].type === SYNTAX_TYPE.ATTRIBUTE) {
      generateAttribute(context)
    }
    context.virtualCode.push(`], [`);
  } else {
    context.virtualCode.push(`${VIRTUAL_CODE_SYNTAX.ELEMENT}('${tag.value}', [], [`);
    context.currentTagIndex = context.virtualCode.length - 1
  }
  context.currentAst.body.shift()
};
const generateAttribute = context => {
  const attribute = context.currentAst.body.shift();
  const virtualCode = attribute
    .body
    .map(({value}) => value)
    .join('')
    .replace('=', `','`)
  if (virtualCode.startsWith('d-')) {
    context.virtualCode.splice(context.currentTagIndex, 0, `'${attribute.body[2].value}' === 'false' ? '' :`)
    context.currentTagIndex++
  } else {
    context.virtualCode.push(`${VIRTUAL_CODE_SYNTAX.ATTRIBUTE}('${virtualCode}')`)
  }
};
const generateEndTag = context => {
  context.currentAst.body.shift();
  context.currentAst.body.shift();
  context.currentAst.body.shift();
  context.virtualCode.push('])');
  if (context.currentAst.parent) {
    context.currentAst = context.currentAst.parent;
    context.currentAst.body.shift();
  }
};
const generateTag = context => {
  const newAst = firstNode(context);
  newAst.parent = context.currentAst;
  context.currentAst = newAst
};
const generateTemplate = context => {
  context.virtualCode.push(`${VIRTUAL_CODE_SYNTAX.TEMPLATE}('${firstNode(context).body[1].value}')`);
  context.currentAst.body.shift()
};
const generateStringConstant = context => {
  context.virtualCode.push(`${VIRTUAL_CODE_SYNTAX.TEXT}('${firstNode(context).value}')`);
  context.currentAst.body.shift()
};
