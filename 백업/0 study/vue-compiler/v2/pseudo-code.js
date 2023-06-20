function compiler (originCode) {
  var ast = syntaxAnalyzer(originCode)
  var targetCode = codeGenerator(ast)
  return targetCode
}

// Step 1
// ast: Abstract Syntax Tree
function syntaxAnalyzer(originCode) {
  var tokens = tokenizer(originCode)
  var ast = parser(tokens)
  return ast
}

function tokenizer(originCode) {
  var tokens = [] // logic
  return tokens
}

// ast: Abstract Syntax Tree
function parser(tokens) {
  var ast = {} // logic
  return ast
}

// Step 2
function codeGenerator(ast) {
  var virtualCode = virtualCodeGenerator(ast)
  var targetCode = targetCodeGenerator(virtualCode)
  return targetCode
}

function virtualCodeGenerator(ast) {
  var virtualCode = {} // logic
  return virtualCode
}

function targetCodeGenerator(virtualCode) {
  var targetCode = '' // logic
  return targetCode
}

console.log(compiler())
