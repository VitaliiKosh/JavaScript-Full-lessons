export function getTitle() {
  const title = document.querySelector(".title");
  return title.textContent;
}

console.log(getTitle());

export function getDescription() {
  const description = document.querySelector(".about");
  return description.innerText;
}

console.log(getDescription());

export function getPlans() {
  const plans = document.querySelector(".plans");
  return plans.innerHTML;
}

console.log(getPlans());

export function getGoals() {
  const goals = document.querySelector(".goal");
  return goals.outerHTML;
}

console.log(getGoals());
