// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show the support message pop-up
function showSupportPopup() {
  var supportPopup = document.getElementById("support-popup");
  supportPopup.style.display = "block";
}

// Function to hide the support message pop-up
function hideSupportPopup() {
  var supportPopup = document.getElementById("support-popup");
  supportPopup.style.display = "none";
}

// Function to handle continue button click
document.getElementById("continue-btn").addEventListener("click", function() {
  hideSupportPopup();
});

// Show support message pop-up when the website loads for the first time
window.addEventListener("load", function() {
  showSupportPopup();
});

// Function to add sticky class to header on scroll
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('sticky');
    document.body.classList.add('sticky-header-padding');
  } else {
    header.classList.remove('sticky');
    document.body.classList.remove('sticky-header-padding');
  }
});
