const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

const copyObj = (users) => {
  const result = { ...users };
  return result;
};

// eslint-disable-next-line no-undef
console.log(users);
