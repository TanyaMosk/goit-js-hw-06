const inputLength = document.querySelector("#validation-input");

const maxLength = inputLength.getAttribute("data-length"); 

inputLength.addEventListener("blur", onblur);
function onblur() {  
  const valueInput = inputLength.value;
  const trimValueInput = valueInput.trim();
  const valueInputLength = trimValueInput.length;

  if (maxLength > valueInputLength) {
    inputLength.classList.remove("valid");
    inputLength.classList.add("invalid");
  } else {
    inputLength.classList.remove("invalid");
    inputLength.classList.add("valid");
  }
  console.log(valueInputLength);
}
