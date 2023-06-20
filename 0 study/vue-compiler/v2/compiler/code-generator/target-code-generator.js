import {VIRTUAL_CODE_SYNTAX} from './virtual-code-syntax.js';

const TARGET_CODE_SYNTAX = {
  CREATE: 'create',
  STATE: 'state',
};

const create = {
  element: (tag, attrs = [], children) => {
    const attrStr = attrs.map(attr => ` ${attr}`).join('');
    return `<${tag}${attrStr}>${children.join('')}</${tag}>`
  },
  text: (txt) => txt,
  template: (value) => value,
  attribute: (key, value = '') => {
    const valueStr = value ? `="${value}"` : '';
    return `${key}${valueStr}`
  }
};

const generateTargetCode = virtualCode => {
  return virtualCode
    .map(code => {
      const comma = code.endsWith(')') ? ',' : '';
      switch (true) {
        case code.startsWith(VIRTUAL_CODE_SYNTAX.ELEMENT):
        case code.startsWith(VIRTUAL_CODE_SYNTAX.TEXT):
        case code.startsWith(VIRTUAL_CODE_SYNTAX.ATTRIBUTE):
          return `${TARGET_CODE_SYNTAX.CREATE}.${code}${comma}`;
        case code.startsWith(VIRTUAL_CODE_SYNTAX.TEMPLATE):
          const templateFn = code
            .replace(`('`, `(${TARGET_CODE_SYNTAX.STATE}.`)
            .replace(`')`, `)`);
          return `${TARGET_CODE_SYNTAX.CREATE}.${templateFn}${comma}`;
        default:
          return `${code}${comma}`
      }
    })
};

export const debugTargetCode = virtualCode => {
  let tabCount = 0
  return generateTargetCode(virtualCode)
    .map((code, index, arr) => {
      const tab = Array.from({length: tabCount * 2}, () => ' ').join('')
      if (code.includes('[')) {
        tabCount++
      }
      if (code.includes(']')) {
        tabCount--
      }
      return `${tab}${code}`
    })
    .join('\n');
};

export const targetCodeGenerator = virtualCode => {
  const targetCode = generateTargetCode(virtualCode)
    .join('')
    .replace(/,$/, ''); // remove last comma
  return (state) => new Function(
    TARGET_CODE_SYNTAX.CREATE,
    TARGET_CODE_SYNTAX.STATE,
    `return ${targetCode}`
  )(create, state);
};
