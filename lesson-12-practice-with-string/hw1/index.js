function reverseString(text) {
  if (typeof text !== 'string') return null;
  return text.split('').reverse().join('');
}

console.log(reverseString('Cogitare deficile sed utiliter est!'));
