const lexer = code => {
  return code
    .split(/\s+/)
    .map(token => {
      return isNaN(token)
        ? {type: 'word', value: token}
        : {type: 'number', value: token};
    });
};

const input = 'Paper 100';
const output = lexer(input);
// string ::= a-z
// number ::= 0-9
// <Commend> ::= <Word> <Number>
// <Word> ::= string
// <Number> ::= number
// [
//   { type: 'word', value: 'Paper' },
//   { type: 'number', value: '100' }
// ]

module.exports = {lexer}
