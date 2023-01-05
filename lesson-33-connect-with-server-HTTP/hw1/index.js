const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

function getTasksList() {
  // put your code here
  return fetch(baseUrl).then((tasksList) => tasksList.json());
}

function getTaskById(taskId) {
  // put your code here
  return fetch(
    `https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`
  ).then((taskData) => taskData.json());
}

/*
function getTaskById(taskId) {
  // put your code here
  const id = taskId;
  return (
    fetch(baseUrl)
      .then((response) => response.json())
//    .then((result) => result.map((el) => el.id))
//    .then((data) => data);

      .then((result) => {
        if (result.id === taskId) {
          console.log(result);
        }
        return result;
      })
      .then((data) => data)
  );
}
*/
// examples
getTasksList().then((tasksList) => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById("3").then((taskData) => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
