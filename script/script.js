//  tabs v2

  var JiraBtn = document.querySelector("#jira-btn");
  var ConfBtn = document.querySelector("#confluence-btn");
  var JiraContent = document.querySelector(".jira-content");
  var ConfContent = document.querySelector(".confluence-content");
  var header = document.querySelector(".header-wrapper");

  ConfBtn.addEventListener("click", function () {
    showPage(ConfContent, JiraContent);
    ConfContent.classList.remove("hide");
    JiraContent.classList.remove("show");
    ConfBtn.classList.remove("passive-tab");
    JiraBtn.classList.add("passive-tab")
  });

  JiraBtn.addEventListener("click", function () {
    showPage(JiraContent, ConfContent);
    JiraContent.classList.add("show");
    ConfContent.classList.add("hide");
    JiraBtn.classList.remove("passive-tab")
    ConfBtn.classList.add("passive-tab");
  });

  // Initial setup: Show page 1
  showPage(ConfContent, JiraContent);


function showPage(show, hide) {
  // Show the selected page
  show.classList.add("show");

  // Hide the other page
  hide.classList.remove("show");
}


// carousel confluence

const itemWidth = 288.5

const prevConf = document.querySelector('.conf-prev-btn')
const nextConf = document.querySelector('.conf-next-btn')
const listConf = document.querySelector('.carousel-cards')


prevConf.addEventListener("click", function(){
    listConf.scrollLeft -= itemWidth;
})

nextConf.addEventListener("click", function(){
    listConf.scrollLeft += itemWidth;
})

// carousel jira

const prevJira = document.querySelector('.jira-prev-btn')
const nextJira = document.querySelector('.jira-next-btn')
const listJira = document.querySelector('.jira-carousel')

prevJira.addEventListener("click", function(){
    listJira.scrollLeft -= itemWidth;
})

nextJira.addEventListener("click", function(){
    listJira.scrollLeft += itemWidth;
})