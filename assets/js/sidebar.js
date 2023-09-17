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