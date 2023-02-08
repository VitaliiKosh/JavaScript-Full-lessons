const json = `{ "name": "John", "age": 30 }`;

// window.addEventListener('error', function onUnhandledError(err) {
//   console.error('error', err.message);
// });

export function parseUser(json) {
  try {
    const user = JSON.parse(json);
    return user;
  } catch (e) {
    return null;
  }
}

parseUser();
