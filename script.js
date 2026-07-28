// Smooth fade-in animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.8s";
    observer.observe(card);
});

// Hero button animation
const btn=document.querySelector(".btn");

if(btn){
btn.addEventListener("mouseenter",()=>{
btn.style.boxShadow="0 0 25px gold";
});

btn.addEventListener("mouseleave",()=>{
btn.style.boxShadow="none";
});
}
