const state = {
  first: 0,
  second: 0.
};

onmessage = (event) => {
  const {data: {type, payload}} = event;
  if (type === 'first') {
    state.first = payload;
  }
  if (type === 'second') {
    state.second = payload;
  }

  postMessage(state.first + state.second)
};