const messages = [
    "Are you sure?",
    "Really sure??",
    "Please don't do this to me...",
    "I'm gonna cry...",
    "You're breaking my heart! 💔"
];

let messageIndex = 0;

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Optional: Change text while it moves
    if (messageIndex < messages.length) {
        noBtn.innerHTML = messages[messageIndex];
        messageIndex++;
    }
}

function handleYesClick() {
    document.getElementById('question').innerHTML = "Yay! See you on the 14th! 🥰";
    document.getElementById('display-image').src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Zic3RndXN5am9hZ3R6Z3R6Z3R6Z3R6Z3R6Z3R6Z3R6JmRvbmU9MTcxMTE1Mzg1MA/G96zgIcFrn1ra/giphy.gif";
    document.querySelector('.buttons').style.display = "none";
}