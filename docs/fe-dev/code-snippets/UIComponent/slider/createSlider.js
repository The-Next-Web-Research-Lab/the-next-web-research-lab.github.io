export const createSlider = ({maxSize}) => {
  const state = {
    watchers: [],
    currentPage: 1,
    maxSize,
  };

  const runWatcher = (watcher) => {
    watcher(state.currentPage);
  };

  const runWatchers = () => {
    state.watchers.forEach(runWatcher);
  };

  const watchState = (watcher) => {
    state.watchers.push(watcher);
    runWatcher(watcher);
  };

  const mutations = {
    nextPage: () => {
      if (state.currentPage === state.maxSize) {
        state.currentPage = 1;
      } else {
        state.currentPage += 1;
      }
      runWatchers();
    },
    prevPage: () => {
      if (state.currentPage === 1) {
        state.currentPage = state.maxSize;
      } else {
        state.currentPage -= 1;
      }
      runWatchers();
    },
  };

  return {
    ...mutations,
    watchState,
  }
};