// tabs
//  https://wesbos.com/javascript/06-serious-practice-exercises/tabs


const tabJira = document.querySelector(".tab-jira")
const tabConf = document.querySelector(".tab-conf")

const carouselJira = document.querySelector("#jira-tab-content")
const carouselConf = document.querySelector("#conf-tab-content")

tabJira.addEventListener('click', function(){
    carouselJira.classList.toggle(".show-app-content")
})

console.log(tabJira)
