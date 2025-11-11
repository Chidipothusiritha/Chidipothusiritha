// Simple typewriter effect for the hero subtitle
const roles = ["Machine Learning Engineer","Data Scientist","MLOps Enthusiast"];
const target = document.getElementById("typewriter");
let i = 0;
function cycle(){
if(!target) return;
target.textContent = roles[i % roles.length];
i += 1;
}
cycle();
setInterval(cycle, 2200);


// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();