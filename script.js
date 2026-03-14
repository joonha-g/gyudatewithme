const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainGif = document.getElementById('main-gif');
const title = document.querySelector('h1');

let hoverCount = 0;
let isPhaseTwo = false; 
let lastTime = 0; // 중복 터치 방지용 시간 기록

// 마우스가 닿거나 터치했을 때 실행되는 통합 함수
function handleEvade(e) {
    // 스마트폰에서 터치했을 때 마우스 이벤트까지 중복으로 겹쳐서 실행되는 것을 막아줍니다.
    if (e.type === 'touchstart') {
        e.preventDefault(); 
    }

    // 0.2초(200ms) 안에 발생하는 중복 인식은 무시합니다. (한 번 터치에 무조건 1카운트만!)
    const now = new Date().getTime();
    if (now - lastTime < 200) return;
    lastTime = now;

    if (!isPhaseTwo) {
        hoverCount++;
        
        if (hoverCount === 5) {
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

// PC의 마우스 올림과 스마트폰의 터치를 모두 감지합니다.
noBtn.addEventListener('mouseover', handleEvade);
noBtn.addEventListener('touchstart', handleEvade, { passive: false });

function moveNoButtonRandomly() {
    noBtn.style.position = 'fixed'; 
    
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.left = `${randomX + 25}px`;
