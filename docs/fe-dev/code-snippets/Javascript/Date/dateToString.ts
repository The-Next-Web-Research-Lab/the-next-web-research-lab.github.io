export const toLong = num => `${num < 10 ? '0' : ''}${num}`;
export const dateToString = (date: Date) => {
  const [
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
  ] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ].map(toLong);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
