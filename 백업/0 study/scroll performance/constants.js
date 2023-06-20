export const ITEM_BIG_SIZE = 50000;
export const ITEM_ELEMENT = Array
  .from({ length: 5 })
  .reduce((prev) => {
    prev.appendChild(prev.cloneNode(true));

    return prev;
  }, Object.assign(document.createElement('div'), {
    className: 'item'
  }));
export const ITEM_ELEMENT_WITH_CONTAIN = Object.assign(Array
  .from({ length: 5 })
  .reduce((prev) => {
    prev.appendChild(prev.cloneNode(true));

    return prev;
  }, Object.assign(document.createElement('div'), {
    className: 'item'
  })), {
  className: 'item contain-layout'
});