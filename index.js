let main = document.querySelector(".main");
let body = document.querySelector("body");
let login = document.getElementById('login-page');
let login_bar = document.querySelector(".Login");

login.addEventListener("click", function () {
    main.style.display = "none";
    body.style.backgroundColor = "lightblue";
    login_bar.style.margin = "0px";
    login_bar.style.backgroundColor = "white";
    let cross = document.querySelector(".fa-xmark");
    cross.addEventListener("click", function() {
    main.style.display = "contents";
    body.style.backgroundColor = "white";
    login_bar.style.margin = "-1000px";
    })

})


let signup = document.getElementById('signup-page');
let signup_bar = document.querySelector('.signup');

signup.addEventListener("click", function () {
    main.style.display = "none";
    body.style.backgroundColor = "lightblue";
    signup_bar.style.margin = "0px";
    signup_bar.style.backgroundColor = "white";
    let back = document.querySelector(".back");
    back.addEventListener("click", function() {
    main.style.display = "contents";
    body.style.backgroundColor = "white";
    signup_bar.style.margin = "1600px";
    })

})







let openopt1 = document.querySelector(".openopt1");
let popopt1 = document.querySelector(".popularopt1");
let explorecuisines = document.querySelector(".explorecuisines");
let list1 = document.querySelector(".list1");
let headeropt1 = document.querySelector(".headeropt1");


openopt1.addEventListener("click", function change() {
    if (popopt1.style.display == "contents") {
        popopt1.style.display = "none";
        explorecuisines.style.border = "none";
        headeropt1.classList.add("newexplore1");
        headeropt1.style.border = "thin solid #A09C9C";
    } else  {
        popopt1.style.display = "contents";
        explorecuisines.style.border = "thin solid #A09C9C";
        headeropt1.style.border = "none";
        explorecuisines.classList.add("newexplore1");
    }
})


let openopt2 = document.querySelector(".openopt2");
let popopt2= document.querySelector(".popularopt2");
let explorerestaurants = document.querySelector(".explorerestaurants");
let list2 = document.querySelector(".list2");
let headeropt2 = document.querySelector(".headeropt2");


openopt2.addEventListener("click", function change() {
    if (popopt2.style.display == "contents") {
        popopt2.style.display = "none";
        explorerestaurants.style.border = "none";
        headeropt2.classList.add("newexplore2");
        headeropt2.style.border = "thin solid #A09C9C";
    } else  {
        popopt2.style.display = "contents";
        explorerestaurants.style.border = "thin solid #A09C9C";
        headeropt2.style.border = "none";
        explorerestaurants.classList.add("newexplore2");
    }
})


let openopt3 = document.querySelector(".openopt3");
let popopt3 = document.querySelector(".popularopt3");
let explorechains = document.querySelector(".explorechains");
let list3 = document.querySelector(".list3");
let headeropt3 = document.querySelector(".headeropt3");


openopt3.addEventListener("click", function change() {
    if (popopt3.style.display == "contents") {
        popopt3.style.display = "none";
        explorechains.style.border = "none";
        headeropt3.classList.add("newexplore3");
        headeropt3.style.border = "thin solid #A09C9C";
    } else  {
        popopt3.style.display = "contents";
        explorechains.style.border = "thin solid #A09C9C";
        headeropt3.style.border = "none";
        explorechains.classList.add("newexplore3");
    }
})


let openopt4 = document.querySelector(".openopt4");
let popopt4 = document.querySelector(".popularopt4");
let explorecities = document.querySelector(".explorecities");
let list4 = document.querySelector(".list4");
let headeropt4 = document.querySelector(".headeropt4");


openopt4.addEventListener("click", function change() {
    if (popopt4.style.display == "contents") {
        popopt4.style.display = "none";
        explorecities.style.border = "none";
        headeropt4.classList.add("newexplore4");
        headeropt4.style.border = "thin solid #A09C9C";
    } else  {
        popopt4.style.display = "contents";
        explorecities.style.border = "thin solid #A09C9C";
        headeropt4.style.border = "none";
        explorecities.classList.add("newexplore4");
    }
})











let input = document.querySelector('.phone_number');
let phone = document.querySelector(".phone")

input.addEventListener("click", function () {
    phone.classList.add("newborder");
})

let Name = document.querySelector('.name');
let fullname = document.querySelector(".fullname")

Name.addEventListener("click", function () {
    fullname.classList.add("newborder");
})

let mail = document.querySelector('.mail');
let Email = document.querySelector(".Email")

mail.addEventListener("click", function () {
    Email.classList.add("newborder");
})



let scrollup = document.querySelector(".scrollup")

scrollup.addEventListener("click", function () {
    window.scrollTo(0,0);
})


