import {fragment, html} from './core/render.js';
import {patch} from './core/patch.js';

const render = (list) => {
  const options = {
    attrs: {
      style: 'font-size: 20px'
    },
    events: {
      click: (event) => event.target.style.fontWeight = 'bold'
    }
  };
  const children = list.map(text => html('li', text, options));
  return fragment([
    html('ol', children),
    html('p', 'Text Changed'),
    html('input', [], {attrs: {type: 'text'}}),
    html('input', [], {
      attrs: {
        type: 'checkbox',
        class: 'checkbox-item'
      }
    }),
  ]);
};

const actualDOM = document.querySelector('#app');
const fragmentDOM = render(['Apple', 'Orange', 'Melon']);

patch(fragmentDOM, actualDOM);
