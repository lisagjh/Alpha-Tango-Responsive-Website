//  tabs v2

  var JiraBtn = document.querySelector(".tab-jira");
  var ConfBtn = document.querySelector(".tab-conf");
  var JiraContent = document.querySelector("#jira-tab-content");
  var ConfContent = document.querySelector("#conf-tab-content");
  var header = document.querySelector(".header-wrapper");

  ConfBtn.addEventListener("click", function () {
    showPage(ConfContent, JiraContent);
    ConfBtn.classList.remove('tab-conf-passive');
    JiraBtn.classList.remove('active-jira-btn');
    header.classList.remove(".header-wrapper-jira-svg");
    header.classList.remove("header-wrapper-jira-svg")
  });

  JiraBtn.addEventListener("click", function () {
    showPage(JiraContent, ConfContent);
    ConfBtn.classList.add('tab-conf-passive');
    JiraBtn.classList.add('active-jira-btn');
    header.classList.add("header-wrapper-jira-svg")
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

const itemWidth = 225

const prevConf = document.querySelector('.conf-prev-button')
const nextConf = document.querySelector('.conf-next-button')
const listConf = document.querySelector('.conf-carousel')


prevConf.addEventListener("click", function(){
    listConf.scrollLeft -= itemWidth;
})

nextConf.addEventListener("click", function(){
    listConf.scrollLeft += itemWidth;
})

// carousel jira

const prevJira = document.querySelector('.jira-prev-button')
const nextJira = document.querySelector('.jira-next-button')
const listJira = document.querySelector('.jira-carousel')

prevJira.addEventListener("click", function(){
    listJira.scrollLeft -= itemWidth;
})

nextJira.addEventListener("click", function(){
    listJira.scrollLeft += itemWidth;
})