document.addEventListener('DOMContentLoaded', function () {
    const sampleTexts = {
        easy: [
            "The quick brown fox jumps over the lazy dog.",
            "Pack my box with five dozen liquor jugs.",
            "How razorback-jumping frogs can level six piqued gymnasts!"
        ],
        medium: [
            "The five boxing wizards jump quickly.",
            "Bright vixens jump; dozy fowl quack.",
            "Quick zephyrs blow, vexing daft Jim."
        ],
        hard: [
            "Jinxed wizards pluck ivy from the big quilt.",
            "Crazy Fredrick bought many very exquisite opal jewels.",
            "We promptly judged antique ivory buckles for the next prize."
        ]
    };

    const difficultySelect = document.getElementById('difficulty');
    const sampleTextDiv = document.getElementById('sample-text');
    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');
    const timeDisplay = document.getElementById('time');
    const userInput = document.getElementById('user-input');
    const levelDisplay = document.getElementById('level');
    const wpmDisplay = document.getElementById('wpm');

    let startTime, endTime;

    function getRandomText(difficulty) {
        const texts = sampleTexts[difficulty];
        return texts[Math.floor(Math.random() * texts.length)];
    }

    function updateText() {
        const selectedDifficulty = difficultySelect.value;
        const randomText = getRandomText(selectedDifficulty);
        sampleTextDiv.textContent = randomText;
    }

    function startTest() {
        startTime = new Date();
        startButton.disabled = true;
        stopButton.disabled = false;
        userInput.disabled = false;
        userInput.value = '';
        userInput.focus();
        updateText();
    }

    function stopTest() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        const wpm = calculateWPM(timeTaken);
        
        displayResults(timeTaken, wpm);

        startButton.disabled = false;
        stopButton.disabled = true;
        userInput.disabled = true;
    }

    function calculateWPM(timeTaken) {
        const sampleText = sampleTextDiv.textContent.trim();
        const userText = userInput.value.trim();
        const sampleWords = sampleText.split(" ");
        const userWords = userText.split(" ");
        
        let correctWords = 0;
        for (let i = 0; i < userWords.length; i++) {
            if (userWords[i] === sampleWords[i]) {
                correctWords++;
            }
        }
        
        return Math.round((correctWords / timeTaken) * 60);
    }

    function displayResults(timeTaken, wpm) {
        timeDisplay.textContent = timeTaken.toFixed(2);
        wpmDisplay.textContent = wpm;
        const selectedDifficulty = difficultySelect.value;
        levelDisplay.textContent = selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);
    }

    function updateTypingFeedback() {
        const sampleText = sampleTextDiv.textContent.trim();
        const userText = userInput.value.trim();
        const sampleWords = sampleText.split(" ");
        const userWords = userText.split(" ");
        
        let feedbackHTML = '';
        for (let i = 0; i < sampleWords.length; i++) {
            if (userWords[i] === undefined) {
                feedbackHTML += `<span>${sampleWords[i]}</span> `;
            } else if (userWords[i] === sampleWords[i]) {
                feedbackHTML += `<span style="color: blue;">${sampleWords[i]}</span> `;
            } else {
                feedbackHTML += `<span style="color: red;">${sampleWords[i]}</span> `;
            }
        }
        sampleTextDiv.innerHTML = feedbackHTML;
    }

    startButton.addEventListener('click', startTest);
    stopButton.addEventListener('click', stopTest);
    userInput.addEventListener('input', updateTypingFeedback);
});