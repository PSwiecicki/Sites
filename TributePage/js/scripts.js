let timeline = document.querySelector('.timeline');

timeline.addEventListener("mouseout", function( event ) {

    let target = event.target;
    if(target.classList.contains("timeline-container"))
    {
        target = target.querySelector(".timeline-container-content");
    }

    if(target.classList.contains("timeline-container-content"))
    {
        target.style.opacity = 1;
        target.style.animationName = "none";
    }
  }, false  );