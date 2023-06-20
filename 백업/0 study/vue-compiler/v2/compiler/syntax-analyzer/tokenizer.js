import {SYMBOL} from '../syntax.js';
import {useLoopGuard} from '../helper.js';

export const tokenizer = originCode => {
  const context = {
    originCode: originCode.replace(/\n/g, ''),
    tokens: []
  };
  const loopGuard = useLoopGuard();

  while (context.originCode) {
    switch (true) {
      case startsWith(context, SYMBOL.START_OPEN):
        tokenizeTag(context);
        break;
      case startsWith(context, SYMBOL.OPEN_TEMPLATE):
        tokenizeTemplate(context);
        break;
      default:
        tokenizeString(context);
        break
    }

    if (loopGuard.isMaxLoop()) {
      loopGuard.log();
      break
    }
  }
  return context.tokens.filter(Boolean)
};

const startsWith = (context, symbol) => {
  return context.originCode.startsWith(symbol)
};

const tokenizeTag = context => {
  if (startsWith(context, SYMBOL.END_OPEN)) {
    pushToken(context, SYMBOL.END_OPEN)
  } else {
    pushToken(context, SYMBOL.START_OPEN)
  }

  const {originCode} = context;
  const endIndex = originCode.indexOf(SYMBOL.CLOSE);
  const keyword = originCode.substr(0, endIndex);
  if (keyword.includes(' ')) {
    tokenizeAttribute(context, keyword);
  } else {
    pushToken(context, keyword);
  }
  pushToken(context, SYMBOL.CLOSE)
};
const tokenizeAttribute = (context, keyword) => {
  const [tagName, ...attrs] = keyword.split( ' ');
  context.tokens.push(tagName);
  attrs.forEach(attr => {
    const [key, value] = attr.split('=');
    context.tokens.push(key);
    if (value) {
      context.tokens.push('=');
      context.tokens.push(value.replace(/"/g, ''));
    }
  });
  context.originCode = context.originCode.substr(keyword.length)
};
const tokenizeTemplate = context => {
  pushToken(context, SYMBOL.OPEN_TEMPLATE);

  const {originCode} = context;
  const endIndex = originCode.indexOf(SYMBOL.CLOSE_TEMPLATE);
  const template = originCode.substr(0, endIndex);
  pushToken(context, template);
  pushToken(context, SYMBOL.CLOSE_TEMPLATE)
};
const tokenizeString = context => {
  const {originCode} = context;
  const nextSymbolIndex = Math.min(...[
    originCode.indexOf(SYMBOL.START_OPEN),
    originCode.indexOf(SYMBOL.OPEN_TEMPLATE),
  ].filter(num => num > 0));
  const stringConstant = originCode.substr(0, nextSymbolIndex);
  pushToken(context, stringConstant)
};

const pushToken = (context, token) => {
  context.tokens.push(token);
  context.originCode = context.originCode.substr(token.length)
};
