const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.getAttribute('data-width');
      if (!targetWidth) return;
      
      bar.style.width = "0%";
      bar.textContent = "0%";

      let count = 0;
      const targetNum = parseInt(targetWidth);
      const interval = setInterval(() => {
        if (count >= targetNum) {
          clearInterval(interval);
          bar.textContent = targetNum + "%";
        } else {
          bar.textContent = `${count++}%`;
        }
      }, 20);
      setTimeout(() => {
        bar.style.width = targetWidth + "%";
      }, 10);
    }
  });
}, {
  threshold: 0.3
});

skillBars.forEach(bar => skillObserver.observe(bar));
