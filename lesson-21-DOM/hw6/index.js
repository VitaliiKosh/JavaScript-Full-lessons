export function clearList() {
  const clear = document.querySelector(".categories");
  const clearContent = clear.innerHTML;
  clear.innerHTML = "";
  // console.dir(clearContent);
  return clearContent;
}

clearList();
