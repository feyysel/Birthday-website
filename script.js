/* =========================
   HEART LOCK
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const dateInput = document.getElementById("dateInput");
const lockScreen = document.getElementById("lockScreen");
const errorText = document.getElementById("errorText");
const music = document.getElementById("bgMusic");

unlockBtn?.addEventListener("click", () => {

    const value = dateInput.value.trim();

    if(value === "27022024"){

        lockScreen.style.opacity = "0";

        setTimeout(()=>{
            lockScreen.style.display = "none";
        },1000);
    music.play().catch(()=>{});

    }else{

        errorText.innerText =
        "That's not our special date"

    }

});

/* =========================
   START JOURNEY BUTTON
========================= */

document.getElementById("startJourney")
?.addEventListener("click",()=>{

    document.getElementById("counter")
    .scrollIntoView({ behavior:"smooth" });

});

/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateRelationshipCounter(){

    const startDate = new Date("2024-02-27T00:00:00");
    const now = new Date();

    const diff = now - startDate;

    const totalDays = Math.floor(diff / (1000*60*60*24));
    const totalHours = Math.floor(diff / (1000*60*60));

    const years = Math.floor(totalDays / 365);
    const months = Math.floor(totalDays / 30);

    const yearsEl = document.getElementById("years");
    const monthsEl = document.getElementById("months");
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");

    if(yearsEl) yearsEl.innerText = years;
    if(monthsEl) monthsEl.innerText = months;
    if(daysEl) daysEl.innerText = totalDays;
    if(hoursEl) hoursEl.innerText = totalHours;
}

updateRelationshipCounter();
setInterval(updateRelationshipCounter,1000);

/* =========================
   LOVE LETTERS
========================= */

const letters = document.querySelectorAll(".letter");
const letterContent = document.getElementById("letterContent");

const messages = {
1:`My dearest hubiye,

Thank you for being one of the most beautiful parts of my life.

Every day with you has added something special to my heart.`,

2:`One of my favorite memories is every moment where we laughed together until we forgot about everything else.`,

3:`On your birthday I wish you happiness, peace, success and every beautiful thing your heart desires.`,

4:`No matter where life takes us, the memories we created together will always be precious to me.`
};

letters.forEach(letter=>{
    letter.addEventListener("click",()=>{
        const id = letter.dataset.letter;
        if(letterContent && messages[id]){
            letterContent.innerText = messages[id];
        }
    });
});

/* =========================
   GIFT BOX
========================= */

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

giftBox?.addEventListener("click",()=>{

giftBox.innerHTML = "🎉";

giftMessage.innerHTML =
"My favorite gift in life was meeting you ❤️";

createConfetti();

});

/* =========================
   CAKE
========================= */

const candleBtn = document.getElementById("blowCandle");
const cakeMessage = document.getElementById("cakeMessage");

candleBtn?.addEventListener("click",()=>{

document.querySelector(".cake").innerHTML = "🎂";

cakeMessage.innerHTML =
"Make a wish, Hubiye ❤️";

createConfetti();

});

/* =========================
   MEMORY STARS
========================= */

const starMessages = [
"Remember our first conversation? ❤️",
"One of my favorite memories with you ✨",
"You always make my days brighter ☀️",
"Thank you for every smile 😊",
"I love every moment we share ❤️",
"Three beautiful years together 🌹"
];

document.querySelectorAll(".star")
.forEach(star=>{
    star.addEventListener("click",()=>{
        const random = Math.floor(Math.random()*starMessages.length);
        document.getElementById("starMessage").innerText =
        starMessages[random];
    });
});

/* =========================
   QUIZ
========================= */

document.querySelectorAll(".quiz-option")
.forEach(option=>{
    option.addEventListener("click",()=>{
        const quizResult = document.getElementById("quizResult");

        if(option.innerText.includes("27 February 2024")){
            quizResult.innerHTML = "❤️ Correct! You know us perfectly.";
        }else{
            quizResult.innerHTML = "😊 Nice try. The answer is 27 February 2024.";
        }
    });
});

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img=>{
    img.addEventListener("click",()=>{
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeLightbox?.addEventListener("click",()=>{
    lightbox.style.display = "none";
});

lightbox?.addEventListener("click",(e)=>{
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});

/* =========================
   FINAL MESSAGE
========================= */

const revealBtn = document.getElementById("revealBtn");
const finalMessage = document.getElementById("finalMessage");

const romanticMessage = `
Happy Birthday, Hubiye my sweetheart ❤️ ❤️
Today is not just another day.

It is the day the world was blessed with someone who would one day become one of the most important people in my life.

For the last three years, you have been part of my happiest memories, my longest conversations, my brightest smiles, and some of the most beautiful moments I have ever experienced.

You have taught me that love is found not only in big moments but also in the smallest ones.

The good morning messages.

The late night talks.

The laughter we share.

The comfort of knowing you are there.

I 'll choose you always again and again until forever in every ups and downs.

And if I were given that choice a thousand times, my answer would still be the same.

As you celebrate your birthday, I want you to know how deeply appreciated and cherished you are.

May this year bring you happiness, success, peace and endless reasons to smile.

Thank you for every memory.

Thank you for every laugh.

Thank you for being my Love.

❤️ Forever yours and Always❤️.
`;

revealBtn?.addEventListener("click",()=>{

finalMessage.style.display = "block";

typeWriter(finalMessage.querySelector("p"), romanticMessage);

createConfetti();

});

/* =========================
   TYPEWRITER
========================= */

function typeWriter(element,text){

if(!element) return;

element.innerHTML = "";

let i = 0;

const timer = setInterval(()=>{

element.innerHTML += text.charAt(i);
i++;

if(i >= text.length) clearInterval(timer);

},25);

}

/* =========================
   HEARTS
========================= */

function createHeart(){
    const heart =
    document.createElement("div");

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💝"
    ];

    heart.innerHTML =
    hearts[Math.floor(
    Math.random() * hearts.length
    )];

    heart.style.position = "fixed";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.top =
    Math.random() * 100 + "vh";

    heart.style.fontSize =
    (12 + Math.random()*25) + "px";

    heart.style.pointerEvents =
    "none";

    heart.style.zIndex = "999";

    heart.style.opacity = ".8";
heart.style.animation =
"glowHeart 2s infinite";
    document.body.appendChild(heart);

    const moveX =
    (Math.random() * 200) - 100;

    const moveY =
    (Math.random() * 200) - 100;

    heart.animate(
    [
        {
            transform:
            "translate(0,0) scale(1)",
            opacity:.8
        },
        {
            transform:
            `translate(${moveX}px, ${moveY}px) scale(1.4)`,
            opacity:0
        }
    ],
    {
        duration:
        4000 + Math.random()*3000
    });

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createHeart,1200);

/* =========================
   CONFETTI
========================= */

function createConfetti(){

for(let i=0;i<50;i++){

const c = document.createElement("div");
c.style.position = "fixed";
c.style.width = "8px";
c.style.height = "8px";
c.style.background = Math.random()>0.5?"gold":"white";
c.style.left = Math.random()*100+"vw";
c.style.top = "-10px";
c.style.zIndex = "9999";

document.body.appendChild(c);

const duration = 2000 + Math.random()*3000;

c.animate([
{transform:"translateY(0)"},
{transform:`translateY(${window.innerHeight}px) rotate(720deg)`}
],{duration});

setTimeout(()=>c.remove(),duration);

}

}

/* =========================
   SCRAPBOOK (FIXED ONLY ONE SYSTEM)
========================= */

const scrapbookPages = document.querySelectorAll(".scrapbook-page");
const nextPageBtn = document.getElementById("nextPage");
const prevPageBtn = document.getElementById("prevPage");

let currentPage = 0;

function showScrapbookPage(index){

    scrapbookPages.forEach(p=>p.classList.remove("active"));
    scrapbookPages[index].classList.add("active");

    const counter = document.getElementById("pageCounter");
    if(counter){
        counter.innerText =
        `Page ${index+1} of ${scrapbookPages.length} ❤️`;
    }
}

nextPageBtn?.addEventListener("click",()=>{

    currentPage++;
    if(currentPage >= scrapbookPages.length) currentPage = 0;

    showScrapbookPage(currentPage);

});

prevPageBtn?.addEventListener("click",()=>{

    currentPage--;
    if(currentPage < 0) currentPage = scrapbookPages.length-1;

    showScrapbookPage(currentPage);

});

showScrapbookPage(0);

/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight") nextPageBtn?.click();
if(e.key==="ArrowLeft") prevPageBtn?.click();

});

/* =========================
   SWIPE
========================= */

let startX=0,endX=0;

document.querySelector(".book-container")
?.addEventListener("touchstart",(e)=>{
startX=e.changedTouches[0].screenX;
});

document.querySelector(".book-container")
?.addEventListener("touchend",(e)=>{
endX=e.changedTouches[0].screenX;

if(endX-startX>50) prevPageBtn?.click();
if(endX-startX<-50) nextPageBtn?.click();
});