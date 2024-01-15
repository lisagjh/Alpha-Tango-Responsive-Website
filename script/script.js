// tabs

// const tabJira = document.querySelector(".tab-jira");
// const tabConf = document.querySelector(".tab-conf");

// const contentJira = document.querySelector("#jira-tab-content");
// const contentConf = document.querySelector("#conf-tab-content");

// tabJira.addEventListener('click', function(){
//     contentJira.classList.toggle("show");
// });

// tabConf.addEventListener('click', function(){
//     contentConf.classList.toggle("show");
// })

//  tabs v2

document.addEventListener("DOMContentLoaded", function () {
  var JiraBtn = document.querySelector(".tab-jira");
  var ConfBtn = document.querySelector(".tab-conf");
  var JiraContent = document.querySelector("#jira-tab-content");
  var ConfContent = document.querySelector("#conf-tab-content");

  ConfBtn.addEventListener("click", function () {
    showPage(ConfContent, JiraContent);
  });

  JiraBtn.addEventListener("click", function () {
    showPage(JiraContent, ConfContent);
  });

  // Initial setup: Show page 1
  showPage(ConfContent, JiraContent);
});

function showPage(show, hide) {
  // Show the selected page
  show.classList.add("show");

  // Hide the other page
  hide.classList.remove("show");
}


//   https://medium.com/@algopoint.ltd/how-to-create-a-slideshow-carousel-using-html-css-js-7ab0561b39b3

const prevConf = document.querySelector('.conf-prev-button')
const nextConf = document.querySelector('.conf-next-button')
const listConf = document.querySelector('.conf-carousel')

const itemWidth = 228

prevConf.addEventListener("click", function(){
    listConf.scrollLeft -= itemWidth;
})

nextConf.addEventListener("click", function(){
    listConf.scrollLeft += itemWidth;
})

const prevJira = document.querySelector('.jira-prev-button')
const nextJira = document.querySelector('.jira-next-button')
const listJira = document.querySelector('.jira-carousel')

prevJira.addEventListener("click", function(){
    listJira.scrollLeft -= itemWidth;
})

nextJira.addEventListener("click", function(){
    listJira.scrollLeft += itemWidth;
})





  
