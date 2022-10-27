function run() {
  const a = 0;

  if (a === 1) {
    // eslint-disable-next-line no-undef
    return c;
  }

  for (let i = 1; i < 10; i += 1) {
    console.log(i);
  }

  // eslint-disable-next-line no-return-assign, no-undef
  return (d = a);
}

run();
