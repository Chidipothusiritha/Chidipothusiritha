// year
document.getElementById("year").textContent = new Date().getFullYear();

// highlight active nav on click (basic)
document.querySelectorAll(".nav__link").forEach(a=>{
  a.addEventListener("click", () => {
    document.querySelectorAll(".nav__link").forEach(x=>x.classList.remove("active"));
    a.classList.add("active");
  });
});