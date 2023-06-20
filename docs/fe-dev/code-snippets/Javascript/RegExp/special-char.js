const escapeSpecialChar = str => str.replace(
  /[.*+?^${}()|[\]\\]/g,
  '\\$&'
);
