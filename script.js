
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const slider = document.getElementById("slider");

    let slideIndex = 0;
    const slides = document.querySelectorAll("#slider > div");

    // Function to change slide position
    function changeSlide() {
      const offset = -slideIndex * 100; // Shift the slider container to the correct slide
      slider.style.transform = `translateX(${offset}%)`;
    }

    // Navigate to the next slide
    nextBtn.addEventListener("click", function() {
      slideIndex = (slideIndex + 1) % slides.length;
      changeSlide();
    });

    // Navigate to the previous slide
    prevBtn.addEventListener("click", function() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      changeSlide();
    });

    // Optionally, you can set an auto-slide interval
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      changeSlide();
    }, 3000); // 3 seconds auto transition