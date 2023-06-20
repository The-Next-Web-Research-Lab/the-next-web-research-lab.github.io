const produceDate = (base, recipe) => {
  const clonedDate = new Date(base);
  recipe(clonedDate);
  return clonedDate
};

const baseDate = new Date();
const newDate = produceDate(baseDate, (draftDate) => {
  draftDate.setFullYear(2000, 3, 1)
})
console.log(baseDate.getFullYear() === newDate.getFullYear())
// false
