const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const toPaginationGroup = (totalPage, maxPage) => {
  const pagination = Array
    .from({length: totalPage}, (v, i) => i + 1);
  return chunk(pagination, maxPage);
};

const props = {
  maxPage: 10,
  totalPage: 24,
};
const state = {
  paginationGroupIndex: 0,
  currentPage: 1,
  get paginationGroup () {
    return toPaginationGroup(props.totalPage, props.maxPage)
  },
  get pages () {
    return state.paginationGroup[state.paginationGroupIndex]
  },
  get hasNext () {
    const groupLength = state.paginationGroup.length;
    if (groupLength === 1) {
      return false;
    }
    return groupLength - 1 > state.paginationGroupIndex;
  },
  get hasPrev () {
    return state.paginationGroupIndex > 0;
  },
};
const mutation = {
  changeCurrentPage: (page) => {
    state.currentPage = page;
  }
};
const actions = {
  handleNext: () => {
    state.paginationGroupIndex += 1;
    mutation.changeCurrentPage(state.pages[0])
  },
  handlePrev: () => {
    state.paginationGroupIndex -= 1;
    mutation.changeCurrentPage(state.pages[state.pages.length - 1])
  }
};
