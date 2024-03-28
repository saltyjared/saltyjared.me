// Add class 'show' when user screen intersects with content
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

// Select all elements with 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');

// Input each HTML element w/ class 'hidden' to observer
hiddenElements.forEach((el) => observer.observe(el));