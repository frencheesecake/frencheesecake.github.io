// Copy to clipboard button
function copyText() {
    let myEmail = document.getElementById("myEmail");
    const ogText = myEmail.innerHTML;

    navigator.clipboard.writeText(myEmail.value);
    myEmail.innerHTML = "Copied to clipboard!";

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // reset text if user leaves tab/window
            myEmail.innerHTML = ogText;
        }
    });
}


// Create timeline
const tl = gsap.timeline();

// ⭐Title text reveal animation⭐
let text = document.querySelector('#text');
let words = text.textContent.split(" ");

text.innerHTML = ""; // Clear element

words.forEach(word => {
let span = document.createElement("span");
span.textContent = word + " ";
text.appendChild(span);
});

tl.from("h1 span", {
opacity: 0,
y: 50,
stagger: 0.05,
duration: 1
});

// ⭐Element reveal animation⭐
const gridChildren = document.querySelectorAll('.grid > div');

tl.from(gridChildren, {
    opacity: 0,
    y: 50,         
    stagger: 0.05,   
    duration: 1,   
    ease: "power4.out"
});


// ⭐Interactive background gradient⭐
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 10;
        curY += (tgY - curY) / 10;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});