{
  // mobile menu window
  const html = document.querySelector('html');
  const headerBar = document.querySelector('#header-bar');
  const hamburger = document.querySelector('#hamburger');
  const mobileMenu = document.querySelector('#mobile-menu');
  const jumpToContact = document.querySelector('#jump-to-contact');
  let scrollpos;

  function hbgAction() {
    const hbgInview = 'hbg-inview';
    const fixed = 'fixed';
    headerBar.classList.toggle(hbgInview);
    hamburger.classList.toggle(hbgInview);
    mobileMenu.classList.toggle(hbgInview);
    if (hamburger.classList.contains(hbgInview)) {
      scrollpos = window.pageYOffset;
      html.classList.add(fixed);
      document.body.style.top = scrollpos * -1 + 'px';
    } else {
      html.classList.remove(fixed);
      window.scrollTo(0, scrollpos);
    }
  }

  hamburger.addEventListener('click', () => {
    hbgAction();
  });
  jumpToContact.addEventListener('click', () => {
    hbgAction();
  });



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