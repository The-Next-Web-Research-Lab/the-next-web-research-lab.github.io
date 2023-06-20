const excuteSequantalTask = (arr, delay, index = 0) => {
  setTimeout(() => {
    const cb = arr[index];
    const nextIndex = index + 1;

    cb();

    if (arr[nextIndex]) {
      excuteSequantalTask(arr, delay, nextIndex);
    }
  }, delay);
};

excuteSequantalTask([
  () => console.log(Date.now()),
  () => console.log(Date.now()),
  () => console.log(Date.now()),
  () => console.log(Date.now()),
  () => console.log(Date.now()),
  () => console.log(Date.now()),
  () => console.log(Date.now()),
  () => console.log(Date.now()),
], 1000);
