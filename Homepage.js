document.addEventListener("DOMContentLoaded", function () {
    const blogh1 = document.getElementById("blogh1"); // Blog section
    const showmore = document.getElementById("showmore"); // "Click for more" button
    const blogdiv = document.querySelector(".blogdiv"); // Extra hidden blog posts
    const bloglink = document.getElementById("bloglink"); // Blog menu link
    const blogpage = document.getElementById("blogpage")
    // Initially hide extra blog posts but keep the first one visible
    blogdiv.style.display = "none";

    // Show full blog section when "Blog" link is clicked
    bloglink.addEventListener("click", function (event) {
        event.preventDefault();
        blogh1.style.display = "block"; // Show blog section
        blogdiv.style.display = "block"; // Show all blog posts
        showmore.style.display = "none"; // Hide "Click for More" button
    });

    // "Click for More" button to show extra blog posts
    showmore.addEventListener("click", function () {
        blogdiv.style.display = "block";
        this.style.display = "none"; // Hide the button after clicking
    });
});