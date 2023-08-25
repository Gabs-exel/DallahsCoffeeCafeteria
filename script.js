
function abrirNav() {
  document.getElementById("menuOculto").style.width = "250px";
  document.getElementById("principal").style.marginLeft 
}
 // principal

function fecharNav() {
  document.getElementById("menuOculto").style.width = "0";
  document.getElementById("principal").style.marginLeft = "0";
}

// lista de produtos

var coffeeListContainer = document.querySelector('.coffee-list-container');
var scrollbarThumb = document.querySelector('.scrollbar-thumb');

coffeeListContainer.addEventListener('scroll', function() {
  var scrollPercentage = (coffeeListContainer.scrollLeft / (coffeeListContainer.scrollWidth - coffeeListContainer.clientWidth)) * 100;
  scrollbarThumb.style.width = scrollPercentage + '%';
});

//JavaScript do Tabs

function openTab(evt, tabName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}