document.addEventListener("DOMContentLoaded", function() {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  const hoverables = document.querySelectorAll("a, button, input[type='button'], input[type='submit']");

  hoverables.forEach(function(hoverable) {
    hoverable.style.cursor = "none"; // Standard-Cursor für Hoverables ausblenden

    hoverable.addEventListener("mouseenter", function() {
      cursor.style.width = "20px"; // Größerer Cursor beim Hovern
      cursor.style.height = "20px";
      cursor.style.backgroundColor = "#838383"; // Farbe ändern, wenn der Cursor größer ist
    });

    hoverable.addEventListener("mouseleave", function() {
      cursor.style.width = "50px"; // Zurücksetzen der Größe nach dem Verlassen
      cursor.style.height = "50px";
      cursor.style.backgroundColor = "#55555560"; // Zurück zur ursprünglichen Farbe
    });
  });

  const toggleSwitch = document.querySelector(".switch");

  toggleSwitch.addEventListener("mouseenter", function() {
    cursor.style.width = "20px"; // Größerer Cursor beim Hovern
    cursor.style.height = "20px";
    cursor.style.backgroundColor = "#838383"; // Farbe ändern, wenn der Cursor größer ist
  });

  toggleSwitch.addEventListener("mouseleave", function() {
    cursor.style.width = "50px"; // Zurücksetzen der Größe nach dem Verlassen
    cursor.style.height = "50px";
    cursor.style.backgroundColor = "#55555560"; // Zurück zur ursprünglichen Farbe
  });

});









//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

