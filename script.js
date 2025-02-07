
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const slider = document.getElementById("slider");

    let slideIndex = 0;
    const slides = document.querySelectorAll("#slider > div");

    
    function changeSlide() {
      const offset = -slideIndex * 100; 
      slider.style.transform = `translateX(${offset}%)`;
    }

    
    nextBtn.addEventListener("click", function() {
      slideIndex = (slideIndex + 1) % slides.length;
      changeSlide();
    });


    prevBtn.addEventListener("click", function() {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      changeSlide();
    });

    
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      changeSlide();
    }, 3000); 
