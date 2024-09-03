// Set Title Page
document.title = "My Profile";
// This Element Button Scroll Top  Page
let btnTop = document.querySelector(".buttonTopPage");
let section = document.querySelectorAll(".plans")[0];
let items = document.querySelectorAll(".plans .container .items .item .data-goal");
let started = false; // Function Started ? No
let parent = document.getElementById("parent");
let parentSpan = document.querySelectorAll(".parentAbout .box .col .cont .prog span");


window.onscroll = function () {
// This code used to show the button 
window.scrollY >= 1500 ? btnTop.classList.add("show") : btnTop.classList.remove("show");

// Started Run Function StartCount
    if(window.scrollY >= section.offsetTop){
        if (!started){
            items.forEach((num) => startCount(num));
        }
        started = true;
    } 


    if (window.scrollY >= parent.offsetTop){
        parentSpan.forEach ((span) => {
            span.style.width = `${span.dataset.progress}`;
        })
    }
};

/// Function of Count Number From Plans Div
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval (() => {
        el.textContent++
        if (el.textContent == goal){
            clearInterval(count);
        }
    }, 2000 / goal);
}


// This Method is used to make the button at the top of page
btnTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})


// Aeecdion of Boxs Divs
let box = document.querySelectorAll(".content-services .box");

box.forEach((el) => {
    el.onclick = _ => {
        box.forEach((d) => {
            d.classList.remove("active");
        });
        el.classList.add("active");
    }
})



let itemLinks = Array.from(document.querySelectorAll(".navactions .links li a"));
let icon = document.querySelector(".navactions .logo");


icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    icon.classList.toggle("show");
})

itemLinks.forEach((links) => {
    links.addEventListener("click", (ele) => {
        ele.preventDefault();
        // Return To Section At Click On The Item
        document.querySelector(ele.target.dataset.link).scrollIntoView({
            behavior: "smooth"
        })
    })
})