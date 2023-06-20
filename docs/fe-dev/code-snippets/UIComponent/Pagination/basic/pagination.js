const props = {
  maxPage: 10,
  totalPage: 15,
};
const state = {
  currentPage: 1,
  get pages () {
    const currentPageIndex = Math.ceil(state.currentPage / props.maxPage);
    const startPage = (currentPageIndex - 1) * props.maxPage + 1;
    const pageLength = Math.min(props.maxPage, props.totalPage - startPage + 1);
    return Array.from({length: pageLength}).map((_value, index) => startPage + index)
  }
};
const mutation = {
  mutateCurrentPage: (page) => {
    state.currentPage = page;
  }
};
const actions = {
  handleNext: () => {
    mutation.mutateCurrentPage(state.currentPage + 1);
  },
  handlePrev: () => {
    mutation.mutateCurrentPage(state.currentPage - 1);
  }
};
