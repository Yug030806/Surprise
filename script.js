const messages = [
    "Are you sure?",
    "Really sure??",
    "Please don't do this to me...",
    "I'm gonna cry...",
    
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
    document.getElementById('display-image').src = "";
    document.querySelector('.buttons').style.display = "none";
}
