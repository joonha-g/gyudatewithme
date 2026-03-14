const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainGif = document.getElementById('main-gif');
const title = document.querySelector('h1');

let hoverCount = 0;
let isPhaseTwo = false; 
let lastTime = 0; 

function handleEvade(e) {
    if (e.type === 'touchstart') {
        e.preventDefault(); 
    }

    const now = new Date().getTime();
    // 인식 주기를 50ms로 줄여서 반응 속도를 대폭 올렸습니다!
    if (now - lastTime < 50) return;
    lastTime = now;

    if (!isPhaseTwo) {
        hoverCount++;
        
        // 도망가는 횟수를 5번에서 3번으로 줄였습니다.
        if (hoverCount === 3) {
            title.innerText = "정말...? 🥺";
            mainGif.src = "사진2.jpg"; 
            isPhaseTwo = true; 
            moveRight(); 
        } else {
            moveNoButtonRandomly();
        }
    } else {
        moveRight();
    }
}

noBtn.addEventListener('mouseover', handleEvade);
noBtn.addEventListener('touchstart', handleEvade, { passive: false });

function moveNoButtonRandomly() {
    noBtn.style.position = 'fixed'; 
    
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.left = `${randomX + 25}px`;
    noBtn.style.top = `${randomY + 25}px`;
}

function moveRight() {
    noBtn.style.position = 'fixed';
    
    const rect = noBtn.getBoundingClientRect();
    let currentLeft = rect.left;
    let currentTop = rect.top; 
    
    currentLeft += 60; 
    
    if (currentLeft + noBtn.offsetWidth > window.innerWidth) {
        currentLeft = 20; 
    }
    
    noBtn.style.left = `${currentLeft}px`;
    noBtn.style.top = `${currentTop}px`; 
}

function sayYes() {
    title.innerText = "야호! 데이트 날짜 잡자! 🎉";
    mainGif.src = "사진3.jpg"; 
    document.querySelector('.buttons').style.display = 'none'; 
}
