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