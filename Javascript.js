// boutton language -----------------------------------------------------

// function changeLanguage() {
    // var language = document.getElementById("language").value;
    // if (language === "fr") {
        // window.location.href = "ACCUEIL.html";
    // } else if (language === "en") {
        // window.location.href = "index_fr.html";
    // } 
// }


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
    // Ensure the index loops within the slide array bounds
    slideIndex = (index + slides.length) % slides.length;

    // Hide all slides and remove 'active' class
    for (let slide of slides) {
        slide.classList.remove("active");
    }

    // Show the current slide by adding 'active' class
    slides[slideIndex].classList.add("active"); 
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

// Auto-slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);

// Initialize the slideshow
showSlide(slideIndex);
