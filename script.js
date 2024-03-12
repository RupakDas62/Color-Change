const button = document.querySelector("#apply")
let inputCol = document.querySelector("#color");
// console.log(inputCol.value);
button.addEventListener('click', () => {
    document.body.style.backgroundColor = inputCol.value;
})
