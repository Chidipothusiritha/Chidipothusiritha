// footer year
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

// active nav pill on click (basic)
document.querySelectorAll(".nav__link").forEach(a=>{
  a.addEventListener("click", () => {
    document.querySelectorAll(".nav__link").forEach(x=>x.classList.remove("active"));
    a.classList.add("active");
  });
});

// rotating subtitle typing effect
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("rotating");
  const phrases = [
    "Deep Learning Enthusiast",
    "ML & NLP Enthusiast",
    "Master's in Data Science Student @ Rutgers",
    "RAG & Agentic AI Explorer",
    "NLP Researcher"
  ];
  const type = 60, del = 40, hold = 1200, gap = 300;
  let i = 0, j = 0, delMode = false;

  function tick(){
    const w = phrases[i % phrases.length];
    if(!delMode){
      el.textContent = w.slice(0, j++);
      el.classList.add("typing");
      if(j > w.length){ delMode = true; el.classList.remove("typing"); return setTimeout(tick, hold); }
      return setTimeout(tick, type);
    } else {
      el.textContent = w.slice(0, j--);
      if(j < 0){ delMode = false; i++; return setTimeout(tick, gap); }
      return setTimeout(tick, del);
    }
  }
  tick();
});
