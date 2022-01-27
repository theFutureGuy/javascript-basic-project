const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click',function(){
links.classList.toggle("show-links");

});

/*
navToggle.addEventListener('click',function(){
    //console.log(links.classList.contains('links'));
    if(links.classList.contains('show-links')){
        links.classList.remove("show-links");
    }
    else{
        links.classList.add("show-links");
    }
});*/


const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener('click',function(){
    links.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
