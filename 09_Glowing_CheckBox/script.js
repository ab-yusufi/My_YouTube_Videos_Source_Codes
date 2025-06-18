const container = document.querySelector("#container");
const checkbox = document.querySelector("#checkbox");

container.addEventListener('click', () => {
  if(checkbox.checked){
    container.style.boxShadow = "0 0 10px #0F0, 0 0 20px #0F0,0 0 40px #0F0,0 0 80px #0F0"
  } else {
    container.style.boxShadow = "0 0 10px #F00, 0 0 20px #F00,  0 0 40px #F00, 0 0 80px #F00"
  }
})
