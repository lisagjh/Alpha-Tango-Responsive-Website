// tabs
//  https://wesbos.com/javascript/06-serious-practice-exercises/tabs

const tabJira = document.querySelector(".tab-jira");
const tabConf = document.querySelector(".tab-conf");

const contentJira = document.querySelector("#jira-tab-content");
const contentConf = document.querySelector("#conf-tab-content");

tabJira.addEventListener('click', function(){
    contentJira.classList.toggle("show");
});

tabConf.addEventListener('click', function(){
    contentConf.classList.toggle("show");
})

console.log(contentConf)
