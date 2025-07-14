
//select items

const btn = document.querySelector(".btn");
const closeBtn = document.querySelector("#closebtn")
const popup = document.querySelector("#popup")


btn.addEventListener('click', function(){
    popup.classList.add("open-popup")
})

closeBtn.addEventListener("click", function(){
    popup.classList.remove("open-popup")
})