const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInput);
function onInput(event) {
  const trimValue = event.currentTarget.value.trim();
  if (trimValue === "") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = trimValue;
}



// =====================  інші варіанти
// function onInput(event) {
//   if (event.currentTarget.value === "") {
//     return (output.textContent = "Anonymous");
//   }
//   output.textContent = event.currentTarget.value;
// }


// function onInput(evt) {
//   output.textContent = evt.currentTarget.value === ""
//         ? "Anonymous"
//         : evt.currentTarget.value;
// }
