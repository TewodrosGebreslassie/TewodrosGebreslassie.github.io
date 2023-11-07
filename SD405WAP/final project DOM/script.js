// main project html or   home page script ??????????

document.addEventListener("DOMContentLoaded", function () {
  let interval = 3000;
  let carousel = document.getElementById("imageCarousel");
  let carouselInstance = new bootstrap.Carousel(carousel);
  function autoSlide() {
    carouselInstance.next();
  }
  let slideInterval = setInterval(autoSlide, interval);
  carousel.addEventListener("mouseenter", function () {
    clearInterval(slideInterval);
  });
  carousel.addEventListener("mouseleave", function () {
    slideInterval = setInterval(autoSlide, interval);
  });
});

// FAQ  Script???????/////////////
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
  question.addEventListener("mouseenter", () => {
    question.classList.add("active");
  });
  question.addEventListener("mouseleave", () => {
    question.classList.remove("active");
  });
});

///////////script testimonial

//   document.addEventListener("DOMContentLoaded", function(){
//     let interval =4000;
//     let carousel = document.getElementById("imageCarousel");
//     let carouselInstance = new bootstrap.Carousel(carousel);
//     function autoSlide(){
//       carouselInstance.next()
//     }
// let slideInterval = setInterval(autoSlide, interval);
// carousel.addEventListener("mouseenter", function(){
//   clearInterval(slideInterval)
// })
// carousel.addEventListener("mouseleave", function(){
//   slideInterval = setInterval(autoSlide, interval)
// })

//   })

// /? local storage

// function store(){
//   localStorage.setItem("myUser", document.querySelector("input").value)

//   //storing objects and arrays
//   let obj= [{user:'tewi', email:'tewi#'}, {user:'belay', email:"belay#"}];
//   localStorage.setItem('users',   JSON.stringify(obj))
// }

// Get the form element

const form = document.getElementById("studentForm");

// Listen for the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const formData = {
    firstName: form.fName2.value,
    lastName: form.lName2.value,
    studentId: form.StudentID.value,
    address: form.address.value,
    city: form.city.value,
    state: form.state.value,
    zip: form.zip.value,
    email: form.email2.value,
    password: form.ps2.value,
    personfName: form.fName3.value,
    personlName: form.lName3.value,
    phNumber: form.phNumber2.value,
  };

  // Store the data in local storage
  localStorage.setItem("studentData", JSON.stringify(formData));

  // Reset the form
  form.reset();
});
