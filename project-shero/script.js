document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const images = [
        "images/product_1.png",
        "images/product_2.png",
        "images/product_3.png",
        "images/product_2.png",
        "images/product.png"
    ];

    let index = 0; // Start at the first image
    const totalItems = images.length;

    function renderCarousel() {
        track.innerHTML = ""; // Clear previous images

        for (let i = -2; i <= 2; i++) {
            let currentIndex = (index + i + totalItems) % totalItems; // Wrap around logic
            let div = document.createElement("div");
            div.classList.add("carousel-item");
            if (i === 0) div.classList.add("active");
            if (i === -1 || i === 1) div.classList.add("side");
            if (i === -2 || i === 2) div.classList.add("far-side");

            let img = document.createElement("img");
            img.src = images[currentIndex];
            img.alt = `Game ${currentIndex + 1}`;
            div.appendChild(img);
            track.appendChild(div);
        }

        //  Delay the transition slightly for a super smooth effect
        setTimeout(() => {
            track.style.transition = "transform 0.8s ease-in-out";
        }, 10);
    }

    function moveNext() {
        track.style.transition = "transform 0.8s ease-in-out"; //  Add smooth effect
        index = (index + 1) % totalItems;
        renderCarousel();
    }

    function movePrev() {
        track.style.transition = "transform 0.8s ease-in-out"; //  Add smooth effect
        index = (index - 1 + totalItems) % totalItems;
        renderCarousel();
    }

    nextBtn.addEventListener("click", moveNext);
    prevBtn.addEventListener("click", movePrev);

    renderCarousel(); // Initialize on page load
});



document.addEventListener("DOMContentLoaded", function () {
    const bannerContent = document.querySelectorAll(".play-banner-content");

    for (let i = 0; i < 10; i++) { // Repeat "PLAY FOR FREE" multiple times
        let text = document.createElement("span");
        text.innerText = "PLAY FOR FREE";
        let circle = document.createElement("span");
        circle.classList.add("circle");

        bannerContent[0].appendChild(circle);
        bannerContent[0].appendChild(text);
        bannerContent[1].appendChild(circle.cloneNode(true));
        bannerContent[1].appendChild(text.cloneNode(true));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".testimonial-track");
    const cards = [...track.children]; // Convert to array
    const cardWidth = cards[0].offsetWidth + 40; // Include gap
    let position = 0;

    // Clone cards to ensure smooth infinite loop
    cards.forEach(card => track.appendChild(card.cloneNode(true)));

    function moveTestimonials() {
        position -= 0.5; // Adjust speed if needed
        if (position <= -track.scrollWidth / 2) position = 0; // Reset to start
        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveTestimonials);
    }

    moveTestimonials();
});
