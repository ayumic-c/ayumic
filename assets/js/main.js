{
  // animation
  const animations = document.querySelectorAll(".animation");
  const cb = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ani-inview");
        observer.unobserve(entry.target);
      }
    });
  };
  const io = new IntersectionObserver(cb);
  animations.forEach((animation) => {
    io.observe(animation);
  });

  
  // Get my current age
  const myCurrentAge = document.getElementById("myCurrentAge");
  const getAge = (year, month, day) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    const currentYearBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today < currentYearBirthday) {
      age--;
    }
    return age;
  };
  myCurrentAge.textContent = getAge(1999, 7, 29);
}