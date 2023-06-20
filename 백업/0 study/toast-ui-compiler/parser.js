const AST_TYPE = {
  CALL_EXPRESSION: 'CallExpression',
  NUMBER_LITERAL: 'NumberLiteral',
};

const parser = tokens => {
  const body = [];
  while (tokens.length > 0) {
    const currentToken = tokens.shift();
    if (currentToken.type === 'word') {
      switch (currentToken.value) {
        case 'Paper' :
          const expression = {
            type: AST_TYPE.CALL_EXPRESSION,
            name: 'Paper',
            arguments: []
          };
          const argument = tokens.shift();
          if (argument.type === 'number') {
            expression.arguments.push({
              type: AST_TYPE.NUMBER_LITERAL,
              value: argument.value
            });
            body.push(expression)
          }
          break;
      }
    }
  }
  const AST = {
    body,
    type: 'Drawing',
  };
  return AST
};

const input = [
  {type: 'word', value: 'Paper'},
  {type: 'number', value: '100'}
];
const output = parser(input);
// {
//   body: [
//     {
//       type: 'CallExpression',
//       name: 'Paper',
//       arguments: [
//         {type: 'NumberLiteral', value: '100'}
//       ]
//     }
//   ],
//   type: 'Drawing'
// }

module.exports = {parser}
