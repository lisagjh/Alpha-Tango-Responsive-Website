const jiraBtn = document.querySelector(".jira-btn-one")
const jiraContent = document.querySelector(".jira-content")

console.log(jiraContent)

jiraBtn.addEventListener('click', function() {
    jiraContent.classList.toggle("show-content")
})