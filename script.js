const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainGif = document.getElementById('main-gif');
const title = document.querySelector('h1');

let hoverCount = 0;
let isPhaseTwo = false; 
let lastTime = 0; 
let chances = 6; // 남은 기회 6번으로 시작!

// 처음 화면이 켜질 때 버튼 텍스트 세팅
noBtn.innerText = `아니... (남은 기회: ${chances})`;

function handleEvade(e) {
    if (e.type === 'touchstart') {
        e.preventDefault(); 
    }

    const now = new Date().getTime();
    if (now - lastTime < 50) return;
    lastTime = now;

    // 기회가 남아있을 때만 실행
    if (chances > 0) {
        chances--; // 기회 1 차감
        hoverCount++;
        
        // 버튼 글씨 업데이트
        noBtn.innerText = `아니... (남은 기회: ${chances})`;

        // 3번째 터치 시 사진과 문구 변경 (남은 기회 3번일 때)
        if (hoverCount === 3) {
            title.innerText = "정말...? 🥺";
            mainGif.src = "사진2.jpg"; 
            isPhaseTwo = true; 
        }

        // 기회를 다 써서 0이 된 순간!
        if (chances === 0) {
            noBtn.style.display = 'none'; // '아니' 버튼을 아예 없애버림
            title.innerText = "이제 '아니'는 없어! 😎"; // 문구도 재치있게 변경
            return; // 도망가는 함수는 더 이상 실행하지 않고 종료
        }
    }
    
    // 기회가 0이 아닐 때는 무조건 랜덤 위치로 도망갑니다!
    moveNoButtonRandomly();
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

function sayYes() {
    title.innerText = "야호! 데이트 날짜 잡자! 🎉";
    mainGif.src = "사진3.jpg"; 
    
    // 남은 버튼들 모두 숨기기
    document.querySelector('.buttons').style.display = 'none'; 
}
