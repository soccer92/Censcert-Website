/* Copyright (c) Censcert 2025. All rights reserved. */
/* Blog Tabs Functionality */
// Used following w3schools tutorial and code structure: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs_open
function openYear(evt, yearName) {
    var i, tabContent, tab;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    document.getElementById(yearName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("currentYear").click();
/* Blog Tabs Functionality Conclude */