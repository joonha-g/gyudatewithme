const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// '아니' 버튼에 마우스가 닿으면 실행되는 함수
noBtn.addEventListener('mouseover', () => {
    // 버튼을 화면 내에서 자유롭게 움직일 수 있도록 설정
    noBtn.style.position = 'absolute';
    
    // 화면 크기 내에서 랜덤한 좌표 계산
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // 계산된 좌표로 버튼 이동
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// '응' 버튼을 눌렀을 때 실행되는 함수
function sayYes() {
    document.querySelector('h1').innerText = "야호! 데이트 날짜 잡자! 🎉";
    // 기뻐하는 다른 움짤로 변경
    document.getElementById('main-gif').src = "https://media1.tenor.com/m/0AVbKGY_MxMAAAAd/dance-cat.gif"; 
    // 버튼 숨기기
    document.querySelector('.buttons').style.display = 'none'; 
}
