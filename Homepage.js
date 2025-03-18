 document.addEventListener("DOMContentLoaded" , function (){
   
    let contactform = document.getElementById("contactform");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let phone = document.getElementById("phone");
    let subject = document.getElementById("subject");
    let content = document.getElementById("content");
    let errorMessage = document.getElementById("errormessage");
    let submitbtn = document.getElementById("submitbtn");

//document.getElementById("contactform").addEventListener("submitbtn" ,function(event){
   // event.preventDefault();

 function showError(message){
        errorMessage.textContent= message;
        errorMessage.style.color="red";
    setTimeout(() => {
        errorMessage.textContent="";
    }, 2000);
 }
 function isValidEmail(email){
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
 }
 //document.getElementById("contactform")
 submitbtn.addEventListener("click", function(event){
    event.preventDefault();

    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let addressValue = address.value.trim();
    let phoneValue = phone.value.trim();
    let subjectValue = subject.value.trim();
    let contentValue = content.value.trim();

   if ( nameValue === "" || 
       addressValue === "" || 
       phoneValue === "" || 
       subjectValue === "" || 
        contentValue === ""
       ){
        showError("please fill all fields");  
     }
    else if (emailValue === "") {
           showError("Enter email");
      }
    else if (!isValidEmail(emailValue)) {
           showError("Enter a valid email address");
      }
    else {
        errorMessage.textContent = "Sent successful!";
        errorMessage.style.color = "green";
    }
  });
 });


 

  //document.addEventListener("DOMContentLoaded", function () {
    let blogh1 = document.getElementById("blogh1"); // Blog section
    let showmore = document.getElementById("showmore"); // "Click for more" button
    let blogdiv = document.querySelector(".blogdiv"); // Extra hidden blog posts
    let bloglink = document.getElementById("bloglink"); // Blog menu link
    let blogpage = document.getElementById("blogpage")
    // Initially hide extra blog posts but keep the first one visible
    blogdiv.style.display = "none";

    // Show full blog section when "Blog" link is clicked
    //bloglink.addEventListener("click", function (event) {
     //   event.preventDefault();
      //  blogh1.style.display = "block"; // Show blog section
     //   blogdiv.style.display = "block"; // Show all blog posts
    //    showmore.style.display = "none"; // Hide "Click for More" button
   // });

    // "Click for More" button to show extra blog posts
    showmore.addEventListener("click", function (event) {
        event.preventDefault();
        blogdiv.style.display = "block";
        this.style.display = "none"; // Hide the button after clicking
   }); 
/*
   const navbarLinks = document.querySelectorAll("#navbtn a");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Reset all nav links to default color
      navbarLinks.forEach(link => link.classList.Remove = "active");

      // Find the matching nav link
      const activeLink = document.querySelector(`#navbtn a[href="#${entry.target.id}"]`);
      
      if (activeLink) {
        activeLink.classList.add("active";) // Change color for the active section
      }
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
*/
const navbarLinks = document.querySelectorAll("#navbtn a");
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove 'active' class from all links
      navbarLinks.forEach(link => link.classList.remove("active"));

      // Find the matching nav link and add 'active' class
      const activeLink = document.querySelector(`#navbtn a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));