const splitText = (text, len) => {
  if (typeof text !== "string") return null;
  const strArr = [];
  let startPosition = 0;
  if (len === undefined) {
    // eslint-disable-next-line no-param-reassign
    len = 10;
  }

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join("\n");
};

console.log(splitText("Cogitaredeficilesedutiliterest!"));

console.log(splitText("Cogitaredeficilesedutiliterest!", 4));

console.log(splitText(6, 4));
