const splitString = (text, len) => {
  if (typeof text !== "string") return null;
  const strArr = [];
  const lastElem = strArr.length - 1;
  let startPosition = 0;
  const dotStr = ".";
  if (len === undefined) {
    // eslint-disable-next-line no-param-reassign
    len = 10;
  }

  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }

    if (chunk.length < len) {
      chunk = chunk.concat(dotStr.repeat(len - chunk.length));
    }

    strArr.push(chunk);
    startPosition += len;
  }
  return strArr;
};

console.log(splitString("Cogitaredeficilesedutiliterest!"));

console.log(splitString("Cogitaredeficilesedutiliterest!", 4));

console.log(splitString(6, 4));
