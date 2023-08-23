let inputTittle = document.querySelector("#inputTittle");
let inputDes = document.querySelector("#textarea");
let listElement = document.querySelector(".list");
let submit = document.querySelector("#save");
submit.addEventListener("click", (event) => {
  addEvent(inputDes.value); // Use .value instead of .innerHTML
});
function addEvent(event) {
  let listItem = document.createElement("li");
  listItem.classList.add("list-item");
  let tittleDiv = document.createElement("div");
  tittleDiv.classList.add("right-tittle");
  tittleDiv.textContent = inputTittle.value;
  let descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("right-Description");
  descriptionDiv.textContent = inputDes.value;
  let deleteDiv = document.createElement("div");
  deleteDiv.classList.add("right-delete");
  deleteDiv.textContent = "❌";
  listItem.appendChild(tittleDiv);
  listItem.appendChild(descriptionDiv);
  listItem.appendChild(deleteDiv);
  listElement.appendChild(listItem);
  deleteDiv.addEventListener("click", () => {
    listElement.removeChild(listItem);
  });
  inputDes.value = "";
  inputTittle.value = "";
}
