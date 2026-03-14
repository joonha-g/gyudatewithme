const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainGif = document.getElementById('main-gif');
const title = document.querySelector('h1');

// 현재 상태를 기억하는 변수들
let hoverCount = 0;
let isPhaseTwo = false; 

// '아니' 버튼에 마우스가 닿으면 무조건 실행
noBtn.addEventListener('mouseover', () => {
    if (!isPhaseTwo) {
        hoverCount++;
        
        // 5번째 마우스가 닿는 순간! (클릭 필요 없음)
        if (hoverCount === 5) {
            title.innerText = "정말...? 🥺";
            mainGif.src = "사진2.jpg"; // 사진2로 변경
            isPhaseTwo = true; // 2단계로 진입
            moveRight(); // 사진이 바뀌면서 바로 오른쪽으로 도망가기 시작
        } else {
            // 1~4번째는 화면 안에서 랜덤 도망
            moveNoButtonRandomly();
        }
    } else {
        // 6번째부터는 (사진2로 바뀐 이후) 계속 오른쪽으로만 도망
        moveRight();
    }
});

// 1단계: 화면 안에서만 랜덤하게 이동시키는 함수
function moveNoButtonRandomly() {
    noBtn.style.position = 'fixed'; 
    
    // 버튼이 화면 밖으로 나가지 않도록 안전 여백을 둡니다.
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.left = `${randomX + 25}px`;
    noBtn.style.top = `${randomY + 25}px`;
}

// 2단계: 오른쪽으로 80px씩 도망가는 함수
function moveRight() {
    noBtn.style.position = 'fixed';
    
    // 현재 버튼의 진짜 화면상 위치를 알아냅니다.
    const rect = noBtn.getBoundingClientRect();
    let currentLeft = rect.left;
    let currentTop = rect.top; 
    
    // 오른쪽으로 80px 이동
    currentLeft += 80; 
    
    // 화면 오른쪽 끝에 닿으려고 하면 다시 화면 왼쪽 끝으로 순간이동
    if (currentLeft + noBtn.offsetWidth > window.innerWidth) {
        currentLeft = 20; 
    }
    
    noBtn.style.left = `${currentLeft}px`;
    noBtn.style.top = `${currentTop}px`; 
}

// '응' 버튼을 눌렀을 때
function sayYes() {
    title.innerText = "야호! 데이트 날짜 잡자! 🎉";
    mainGif.src = "사진3.jpg"; // 꽃을 든 사진(사진3)으로 변경
    document.querySelector('.buttons').style.display = 'none'; 
}