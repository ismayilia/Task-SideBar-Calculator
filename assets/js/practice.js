"use strict";

// let addBtn = document.querySelector(".text button");
// let inputText = document.querySelector(".text input");
// let ul = document.querySelector(".text-area");
// let i =document.querySelector(".icon");
// let span  = document.querySelector(".text .error-message")



// addBtn.addEventListener("click", function(){
//     if (inputText.value.trim() == "") {
//         // alert("Cant be empty")
//         span.classList.remove("d-none")
//         return;
//     }

//     span.classList.add("d-none")

//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     li.innerText = inputText.value;

//     ul.append(li);
    

//     let i = document.createElement("i");
//     i.className="fa-solid fa-trash icon";

//     li.append(i);

//     i.onclick = function(){
//         li.remove();
//     }

//     inputText.value = "";

// })



// let addBtn = document.querySelector(".text button");
// let inputNumber = document.querySelector(".text input");
// let ul = document.querySelector(".text-area");
// let i =document.querySelector(".icon");



// addBtn.addEventListener("click", function(){
//     if (inputNumber.value.trim() == "") {
//         alert("Cant be empty")
//         return;
//     }

    // let li = document.createElement("li");
    // li.className = "list-group-item";
    // li.innerText = inputNumber.value;

//     ul.innerHTML="";

//     for (let i = 1; i <= inputNumber.value; i++) {
//         let li = document.createElement("li");
//         li.className = "list-group-item";
//         li.innerText = i;
//         ul.append(li);
        
//     }
    
    

//     inputNumber.value = "";

// })

// console.log(document.querySelector("h1").parentNode.parentNode.parentNode);
// console.log(document.querySelector("h1").nextElementSibling.nextElementSibling);

// console.log(document.querySelector("h1").parentNode.previousElementSibling.children);

// console.log(document.querySelector("h1").parentNode.previousElementSibling.children[0]);

// console.log(document.querySelector("h1").parentNode.previousElementSibling.children[0].innerText);

// console.log(document.querySelector("h1").parentNode.previousElementSibling.firstElementChild.innerText);

// console.log(document.querySelector("h1").closest(".container"));

// console.log(document.querySelector("h1").closest(".container"));





// Task-left

let sidebar = document.querySelector(".sidebar");

let openIcon = document.querySelector(".sidebar .open-icon")

let closeIcon = document.querySelector(".sidebar .close-icon")

openIcon.addEventListener("click", function(){
    sidebar.classList.remove("move-sidebar");
    this.previousElementSibling.classList.remove("d-none");
    this.classList.add("d-none");
})


closeIcon.addEventListener("click", function(){
    sidebar.classList.add("move-sidebar");
    this.nextElementSibling.classList.remove("d-none");
    this.classList.add("d-none");
})