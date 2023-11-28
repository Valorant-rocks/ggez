
// Scroll to the top of the page when the page loads or refreshes

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Stop observing after making it visible
    }
  });
});

const hiddenElements = document.querySelectorAll('.disW');
hiddenElements.forEach((el) => observer.observe(el));


window.onload = function() {
  window.scrollTo(0, 0);
};











  


  