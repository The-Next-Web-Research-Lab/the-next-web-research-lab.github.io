import {SYMBOL, SYNTAX_TYPE} from '../syntax.js';
import {useLoopGuard} from '../helper.js';

export const parser = tokens => {
  const ast = {
    type: '',
    body: [],
    parent: null
  };
  const context = {
    tokens: [...tokens],
    currentAst: ast
  };
  const loopGuard = useLoopGuard();

  while(context.tokens.length) {
    switch (true) {
      case currentTokenTag(context):
        parseTag(context);
        break;
      case currentTokenTemplate(context):
        parseTemplate(context);
        break;
      default:
        parseStringConstant(context);
        break;
    }

    if (loopGuard.isMaxLoop()) {
      loopGuard.log();
      break
    }
  }

  return ast
};

const currentTokenTag = context => context.tokens[0].startsWith(SYMBOL.START_OPEN);
const currentTokenTemplate = context => context.tokens[0] === SYMBOL.OPEN_TEMPLATE;

const parseTag = context => {
  if (context.tokens[0] === SYMBOL.END_OPEN) {
    parseEndTag(context);
  } else {
    parseStartTag(context)
  }
};
const parseEndTag = context => {
  pushTag(context);
  backAst(context)
};
const parseStartTag = context => {
  if (context.currentAst.type === '') {
    context.currentAst.type = SYNTAX_TYPE.TAG
  } else {
    const newAst = {
      type: SYNTAX_TYPE.TAG,
      body: [],
      parent: context.currentAst
    };
    context.currentAst.body.push(newAst);
    context.currentAst = newAst
  }
  if (context.tokens[3] === SYMBOL.EQUAL) {
    parseAttribute(context)
  } else {
    pushTag(context)
  }
};
const parseAttribute = context => {
  pushType(context, [
    SYNTAX_TYPE.SYMBOL,
    SYNTAX_TYPE.KEYWORD
  ]);
  while(context.tokens.length) {
    if (context.currentAst.type === SYNTAX_TYPE.TAG) {
      const newAst = {
        type: SYNTAX_TYPE.ATTRIBUTE,
        body: [],
        parent: context.currentAst
      };
      context.currentAst.body.push(newAst);
      context.currentAst = newAst
    }

    const token = context.tokens.shift();
    if (token === SYMBOL.EQUAL) {
      context.currentAst.body.push({
        type: SYNTAX_TYPE.SYMBOL,
        value: token
      });
      context.currentAst.body.push({
        type: SYNTAX_TYPE.STRING_CONSTANT,
        value: context.tokens.shift()
      });
      backAst(context);
    } else {
      context.currentAst.body.push({
        type: SYNTAX_TYPE.STRING_CONSTANT,
        value: token
      });
    }

    if (context.tokens[0] === SYMBOL.CLOSE) {
      if (context.currentAst.type === SYNTAX_TYPE.ATTRIBUTE) {
        backAst(context);
      }
      context.currentAst.body.push({
        type: SYNTAX_TYPE.SYMBOL,
        value: context.tokens.shift()
      });
      break;
    }
  }
};
const backAst = context => {
  const parent = context.currentAst.parent;
  context.currentAst.parent = null;
  context.currentAst = parent
};
const parseTemplate = context => {
  const newAst = {
    type: SYNTAX_TYPE.TEMPLATE,
    body: [
      { type: SYNTAX_TYPE.SYMBOL, value: context.tokens.shift() },
      { type: SYNTAX_TYPE.KEYWORD, value: context.tokens.shift() },
      { type: SYNTAX_TYPE.SYMBOL, value: context.tokens.shift() },
    ],
  };
  context.currentAst.body.push(newAst);
};
const parseStringConstant = context => {
  context.currentAst.body.push({
    type: SYNTAX_TYPE.STRING_CONSTANT,
    value: context.tokens.shift()
  })
};

const pushTag = context => {
  pushType(context, [
    SYNTAX_TYPE.SYMBOL,
    SYNTAX_TYPE.KEYWORD,
    SYNTAX_TYPE.SYMBOL,
  ]);
};
const pushType = (context, types) => {
  types.forEach(type => {
    context.currentAst.body.push({
      type,
      value: context.tokens.shift()
    });
  })
};
