{
  // animation
  const animations = document.querySelectorAll('.animation');

  const cb = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ani-inview');
        observer.unobserve(entry.target);
      }
    });
  }

  const io = new IntersectionObserver(cb);
  animations.forEach(animation => {
    io.observe(animation);
  });
}