document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("rotating");
  
    // ✏️ Edit your phrases here
    const phrases = [
      "ML & NLP Enthusiast",
      "Applied AI Builder",
      "Data Science Student @ Rutgers",
      "RAG & Agentic AI Explorer",
      "Code-Mixed NLP Researcher"
    ];
  
    // typing settings
    const typeSpeed = 60;      // ms per char
    const deleteSpeed = 40;    // ms per char on delete
    const holdTime = 1200;     // pause after a word completes
    const gapTime = 300;       // pause before typing next
  
    let i = 0, j = 0, deleting = false;
  
    function tick() {
      const word = phrases[i % phrases.length];
  
      if (!deleting) {
        el.textContent = word.slice(0, j++);
        el.classList.add("typing");
        if (j > word.length) {
          deleting = true;
          el.classList.remove("typing");
          return setTimeout(tick, holdTime);
        }
        return setTimeout(tick, typeSpeed);
      } else {
        el.textContent = word.slice(0, j--);
        if (j < 0) {
          deleting = false;
          i++;
          return setTimeout(tick, gapTime);
        }
        return setTimeout(tick, deleteSpeed);
      }
    }
  
    tick();
  });
  