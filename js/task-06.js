const inputLength = document.querySelector("#validation-input");

const maxLength = inputLength.getAttribute("data-length");


inputLength.addEventListener("blur", onblur);
function onblur() {
  const valueInput = inputLength.value;
  const trimValueInput = valueInput.trim(); 

  if (Number(maxLength) === trimValueInput.length) {
    inputLength.classList.remove("invalid");
    inputLength.classList.add("valid");
  } else {
    inputLength.classList.add("invalid");
    inputLength.classList.remove("valid");
  }
  console.log(trimValueInput.length);
}
