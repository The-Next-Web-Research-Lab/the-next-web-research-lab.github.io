const transformer = ast => {
  const body = ast.body.map((node) => {
    switch (node.name) {
      case 'Paper' :
        const paperColor = 100 - Number(node.arguments[0].value);
        return {
          tag: 'rect',
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: `rgb(${paperColor}%,${paperColor}%,${paperColor}%)`
          }
        }
    }
  });
  const svgAst = {
    tag: 'svg',
    attr: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 100 100',
      version: '1.1',
      width: 100,
      height: 100,
    },
    body,
  };
  return svgAst
};

const input = {
  body: [
    {
      type: 'CallExpression',
      name: 'Paper',
      arguments: [
        {type: 'NumberLiteral', value: '100'}
      ]
    }
  ],
  type: 'Drawing'
};
const output = transformer(input);
// {
//   tag: 'svg',
//   attr: {
//     xmlns: 'http://www.w3.org/2000/svg',
//     viewBox: '0 0 100 100',
//     version: '1.1',
//     width: 100,
//     height: 100
//   },
//   body: [
//     {
//       tag: 'rect',
//       attr: {
//         x: 0, y: 0,
//         width: 100, height: 100,
//         fill: 'rgb(0%,0%,0%)'
//       }
//     }
//   ]
// }

module.exports = {transformer}

