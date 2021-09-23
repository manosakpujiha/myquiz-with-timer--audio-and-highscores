    //Button tags
    const startBtn = document.getElementById("btn-start");
    const highBtn = document.getElementById("btn-high");
    const nextBtn = document.querySelector(".next-btn");
    let answerBtn = document.querySelectorAll(".answer-btn");
    const saveHighScoreBtn =  document.querySelector("#saveHighScore");
    const mainMenuBtn = document.querySelector("#main-menu");
    const soundToggleBtn = document.querySelector("#sound-toggle");
    

    //div tags
    const gameMenu = document.querySelector(".game-menu");
    let highScorepage = document.querySelector("#high-scorepage");
    const menu = document.querySelector(".menu");

    //Audio tags
    const audioBackground = document.getElementById("audio-background");
    const audioMidGame = document.getElementById("audio-midgame");

    const audioGameOver = document.getElementById("audio-gameover");
    const audioClick = document.getElementById("audio-click");
    const audioCorrect = document.getElementById("audio-correct");
    const audioFail = document.getElementById("audio-fail");

    //Paragraph tags
    const displayAns = document.getElementById("display-ans");
    let questionPara = document.querySelector("#question");
    const questionNum = document.getElementById("question-num");
    let score = document.querySelector(".score");
    let highScorePara = document.querySelector(".high-scorepara");
    let countDownTimer = document.querySelector(".countDownTimer");

    //inputs
    let nameInput = document.getElementById("name-input");
    
    //Variables
    let shuffledQuestions = arrayShuffle(questions);
    let currentQuestionIndex = 0;
    let checkAnswer = shuffledQuestions[currentQuestionIndex]["answers"];
    let oldscore = 0;
     

    //Event listeners
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", nextQuestion);
    saveHighScoreBtn.addEventListener('click', saveScore);
    mainMenuBtn.addEventListener('click', mainMenu);
    highBtn.addEventListener("click", hallOfFame);
    audioBackground.volume = 0.1;
    displayAns.innerHTML = `Quiz Category:  <br>  ${questions[0].category.slice(8)}`
    // console.log(questions);


    
    // //Functions
    function stopBackgroundMusic() {
        audioMidGame.pause();
        audioMidGame.currentTime = 0;
        audioBackground.pause();
        audioBackground.currentTime = 0;
    }

    function hallOfFame() {
        playAudioClick();
        stopBackgroundMusic();
        playAudioMidGame();
        startBtn.classList.add("hide");
        highBtn.classList.add("hide");
        displayAns.classList.add("hide");
        nameInput.classList.add("hide");
        saveHighScoreBtn.classList.add("hide");
        highScorePara.classList.remove("hide");
        highScorepage.classList.remove("hide");
        mainMenuBtn.classList.remove("hide");
        if (localStorage.getItem("quizHighScores") != undefined) {
            let obj3 = JSON.parse(localStorage.getItem("quizHighScores"));
            obj3 = obj3.sort( function (a,b) {
                return b.score - a.score;
            })
            for (let i=0; i < obj3.length; i++) {
                if (i > 6) break;
                let hi =  document.createElement("P"); 
                hi.innerHTML = "&nbsp&nbsp&nbsp&nbsp" + obj3[i]["score"] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-- " + obj3[i]["name"].toUpperCase() ;
                highScorePara.append(hi);
                hi.style.color = "white";
            }
        }
    }

    function startQuiz() {
                    let answers = [
                        {text: shuffledQuestions[currentQuestionIndex]['correct_answer'], correct: true},
                        {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][0], correct: false},
                        {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][1], correct: false},
                        {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][2], correct: false}
                    ]
        checkAnswer = arrayShuffle(answers);
        // console.log(checkAnswer)
        stopBackgroundMusic();
        playAudioBackground();
        playAudioClick();
        startBtn.classList.add("hide");
        highBtn.classList.add("hide");
        score.classList.remove("hide");
        displayAns.classList.add("hide");
        gameMenu.classList.remove("hide");
        questionNum.innerHTML = "QUESTION " + (currentQuestionIndex + 1) + " of 10 shuffled from " + shuffledQuestions.length;
        questionPara.innerHTML = shuffledQuestions[currentQuestionIndex]["question"];
        for (let i = 0; i < checkAnswer.length; i++ ) {
            answerBtn[i].innerHTML = checkAnswer[i]["text"]; 
            answerBtn[i].setAttribute("correct", checkAnswer[i]["correct"]);
            answerBtn[i].addEventListener("click", chooseAnswer);
        }
        if (currentQuestionIndex < (shuffledQuestions.length-2)) {
            nextBtn.innerHTML = "NEXT QUESTION";
            nextBtn.style.backgroundColor = "blue";
        }
        countDownTimer.classList.remove("hide");
        startTimer(15);
    }           

    function arrayShuffle(arr) {
        let newPos, temp;
        for (let i = 0; i < arr.length-1; i++) {
            newPos = Math.round(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[newPos];
            arr[newPos] = temp;
        }
        return arr;
    }

    function chooseAnswer(e) {
        // changing the score, display paragraph, playing the audio effect, stopping the timer and displaying the next button after a correct or wrong choice is made.
        if (e.target.getAttribute("correct") == "true") {
            playAudioCorrect();
            oldscore +=10;
            score.innerHTML = "Present Score: " + (oldscore);
            nextBtn.classList.remove("hide");
            displayAns.classList.remove("hide");
            displayAns.innerHTML = "GOOD JOB! 😎 ";
            displayAns.style.color = "dodgerblue"
            clearInterval(counter);
        } else {
            playAudioFail();
            nextBtn.classList.remove("hide");
            displayAns.classList.remove("hide");
            displayAns.innerHTML = "Oops! Wrong Answer 😐";
            displayAns.style.color = "tomato"
            clearInterval(counter);
        }

        //changing the color, opacity and disabling the answer buttons after a clicking a correct or wrong option
        for (let i = 0; i < answerBtn.length; i++) {
            if (answerBtn[i].getAttribute("correct") == "true") {
                answerBtn[i].disabled = true;
                answerBtn[i].style.backgroundColor = "green"; 
                answerBtn[i].style.opacity = "0.7"; 
            } else {
                answerBtn[i].disabled = true;
                answerBtn[i].style.backgroundColor = "orange"; 
                answerBtn[i].style.opacity = "0.4"; 
            }
        }

        // changing the selected wrong answer background specially to a red color. this is done after the loop has ended to ensure that the red color overwrites the orange color from the loop 
        if (e.target.getAttribute("correct") == "false") {
            e.target.style.backgroundColor = "red";
        } 
    }

    function nextQuestion(e) {
       
        playAudioClick();
        startTimer(15);
        countDownTimer.classList.remove("hide");
        currentQuestionIndex++;

       
        if (currentQuestionIndex == (shuffledQuestions.length /2) || currentQuestionIndex == 5) {
            nextBtn.style.backgroundColor = "orange";
            stopBackgroundMusic();
            playAudioMidGame();
        }
        if (currentQuestionIndex === (shuffledQuestions.length-2) || currentQuestionIndex == 8) {
            nextBtn.innerHTML = "GO TO LAST QUESTION";
            nextBtn.style.backgroundColor = "orange";
            
        }
        if (currentQuestionIndex == (shuffledQuestions.length-1) || currentQuestionIndex == 9 ) {
                nextBtn.innerHTML = "END GAME";
                nextBtn.style.backgroundColor = "tomato";
        }
        if (currentQuestionIndex == shuffledQuestions.length || currentQuestionIndex >= 10 ) {
            endGame();
            return;
        }
        let answers = [
            {text: shuffledQuestions[currentQuestionIndex]['correct_answer'], correct: true},
            {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][0], correct: false},
            {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][1], correct: false},
            {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][2], correct: false}
        ]
        checkAnswer = arrayShuffle(answers);
        // console.log(checkAnswer)


        questionNum.innerHTML = "QUESTION " + (currentQuestionIndex + 1) +  " of 10 shuffled from " + shuffledQuestions.length;
        questionPara.innerHTML = shuffledQuestions[currentQuestionIndex]["question"];
        nextBtn.classList.add("hide");
        displayAns.classList.add("hide");
        for (let i = 0; i < checkAnswer.length; i++ ) {
            answerBtn[i].innerHTML =checkAnswer[i]["text"]; 
            answerBtn[i].setAttribute("correct", checkAnswer[i]["correct"]);
            answerBtn[i].style.backgroundColor = "dodgerblue";
            answerBtn[i].style.color = "white"; 
            answerBtn[i].disabled = false;
            answerBtn[i].style.opacity = "1"; 
        }
    }

    function endGame() {
        console.log('hi')
        if (localStorage.getItem("quizHighScores") == undefined) {

        } else {
            let obj3 = JSON.parse(localStorage.getItem("quizHighScores"));
            
            for (let i=0; i < obj3.length; i++) {
                if (i > 2) break;
                let hi =  document.createElement("P"); 
                hi.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + obj3[i]["score"] + "&nbsp&nbsp&nbsp&nbsp-- " + obj3[i]["name"].toUpperCase();
                highScorePara.append(hi);
                hi.style.color = "tomato";
            }
        }
        
        saveHighScoreBtn.classList.remove("hide");
        highScorePara.classList.remove("hide");
        nameInput.classList.remove("hide");
        currentQuestionIndex = 0;
        audioMidGame.pause();
        audioMidGame.currentTime = 0;
        playAudioGameOver();
        countDownTimer.classList.add("hide");
        clearInterval(counter);
        gameMenu.classList.add("hide");
        highScorepage.classList.remove("hide");
        displayAns.classList.remove("hide");
        displayAns.innerHTML = "GAME OVER 🎉" + "<br>" + "You scored: " + oldscore + "/" + 100;
        displayAns.style.color = "dodgerblue";
        score.classList.add("hide");
        nextBtn.classList.add("hide");
        nameInput.focus();
        mainMenuBtn.classList.remove("hide");
    }

    function saveScore() {
        let scoreData = {name: nameInput.value, score: oldscore};
        if (localStorage.getItem("quizHighScores") == undefined) {
            let text = JSON.stringify([scoreData]);
            localStorage.setItem ("quizHighScores", text);
            let obj = JSON.parse(localStorage.getItem("quizHighScores"));
            //hide save button and display hall of fame;
            document.querySelector(".high-scorepara").innerHTML = obj[0]["name"] + ":" + obj[0]["score"];;
        } else {
            highScorePara.innerHTML = "SCORE -- NAME";
            let obj = JSON.parse(localStorage.getItem("quizHighScores")); //get the scores from local storage
            obj.push(scoreData);
            let text = JSON.stringify(obj);
            localStorage.setItem ("quizHighScores",text);
            let obj2 = JSON.parse(localStorage.getItem("quizHighScores"));
            obj2 = obj2.sort( function (a,b) {
                return b.score - a.score;
            })
            for (let i=0; i < obj2.length; i++) {
                if (i > 4) break;
                let hi =  document.createElement("P"); 
                hi.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + obj2[i]["score"] + "&nbsp&nbsp&nbsp&nbsp-- " + obj2[i]["name"].toUpperCase();
                highScorePara.append(hi);
                hi.style.color = "green"
            }
        }
        saveHighScoreBtn.classList.add("hide");
        highScorePara.classList.remove("hide");
        nameInput.classList.add("hide");
        displayAns.innerHTML = "Hall Of Fame!!! ";
        mainMenuBtn.innerHTML = "Go Back To Main Menu";
        mainMenuBtn.classList.remove("hide");
        

    }
    function mainMenu() {
        oldscore = 0;
        mainMenuBtn.innerHTML = "Main Menu";
        mainMenuBtn.classList.add("hide");
        startBtn.classList.remove("hide");
        highBtn.classList.remove("hide");
        displayAns.innerHTML = "How much do you know manos?"
        score.classList.remove("hide");
        nextBtn.style.backgroundColor = "blue";
        nextBtn.innerHTML = "NEXT QUESTION";
        score.classList.add("hide");
        nameInput.classList.add("hide");
        saveHighScoreBtn.classList.add("hide");
        score.innerHTML = 0;
        highScorePara.classList.add("hide");
        displayAns.classList.remove("hide");
        highScorePara.innerHTML = "SCORE -- NAME";
        audioMidGame.pause();
        audioMidGame.currentTime = 0;
        audioBackground.pause();
        audioBackground.currentTime = 0;
        questionNum.innerHTML = "QUESTION " + (currentQuestionIndex + 1) + " of 10, shuffled from " + shuffledQuestions.length;
        questionPara.innerHTML = shuffledQuestions[currentQuestionIndex]["question"];

        let answers = [
            {text: shuffledQuestions[currentQuestionIndex]['correct_answer'], correct: true},
            {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][0], correct: false},
            {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][1], correct: false},
            {text: shuffledQuestions[currentQuestionIndex]['incorrect_answers'][2], correct: false}
        ]
        checkAnswer = arrayShuffle(answers);


        for (let i = 0; i < checkAnswer.length; i++ ) {
            answerBtn[i].innerHTML = checkAnswer[i]["text"]; 
            answerBtn[i].setAttribute("correct", checkAnswer[i]["correct"]);
            answerBtn[i].style.backgroundColor = "dodgerblue";
            answerBtn[i].style.color = "white"; 
            answerBtn[i].disabled = false;
            answerBtn[i].style.opacity = "1"; 
        }
    } 
    function playAudioBackground() {
        stopBackgroundMusic();
        if (audioBackground.classList.contains("hide")) {
            audioBackground.classList.remove("hide");
            audioMidGame.classList.add("hide");
        }

        if (soundToggleBtn.innerHTML === "Switch to background music 1" ) {
            soundToggleBtn.innerHTML = "Switch to background music 2";
            soundToggleBtn.style.backgroundColor = "dodgerblue";
        }
        audioBackground.volume = 0.1;
        audioBackground.play();
    }  
    function playAudioMidGame() {
        stopBackgroundMusic();
        if (audioMidGame.classList.contains("hide")) {
            audioMidGame.classList.remove("hide");
            audioBackground.classList.add("hide");
        }

        if (soundToggleBtn.innerHTML === "Switch to background music 2" ) {
            soundToggleBtn.innerHTML = "Switch to background music 1";
            soundToggleBtn.style.backgroundColor = "tomato";
        }
        audioMidGame.volume = 0.1;
        audioMidGame.play();
    } 
    function playAudioGameOver() {
        audioGameOver.volume = 0.1;
        audioGameOver.play();
    }
    function playAudioClick() {
        audioClick.volume = 0.3;
        audioClick.play();
    } 
    function playAudioCorrect() {
        audioCorrect.volume = 0.3;
        audioCorrect.play();
    } 
    let playAudioFail = () => {
        audioFail.volume = 0.3;
        audioFail.play();
    }  
    function toggleControls() { 
        if (audioBackground.classList.contains("hide")) {
            stopBackgroundMusic();
            playAudioBackground();
        } else {
            stopBackgroundMusic();
            playAudioMidGame();
        }
    } 

    function startTimer(time){
        counter = setInterval(timer, 1000);
        function timer(){
            countDownTimer.textContent =   time; 
            time--; //decrement the time value
            let addZero = countDownTimer.textContent; 
            if(time < 9) { //if timer is less than 9
               
                countDownTimer.textContent = "Time Left :  0" + addZero; //add a 0 before time value
            } else {
                countDownTimer.textContent = "Time Left : " + addZero; //add a 0 before time value
            }
            if(time < 0){ //if timer is less than 0
                clearInterval(counter); //clear counter
                // countDownTimer.textContent = "Time UP"; 
                for (let i = 0; i < answerBtn.length; i++) {
                    if (answerBtn[i].getAttribute("correct") == "true") {
                        answerBtn[i].disabled = true;
                        answerBtn[i].style.backgroundColor = "green"; 
                        answerBtn[i].style.opacity = "0.7"; 
                    } else {
                        answerBtn[i].disabled = true;
                        answerBtn[i].style.backgroundColor = "orange"; 
                        answerBtn[i].style.opacity = "0.4"; 
                    }
                }
                playAudioFail();
                nextBtn.classList.remove("hide");
                displayAns.classList.remove("hide");
                countDownTimer.classList.add("hide");
                displayAns.innerHTML = "Oops! Time UP 😐";
                displayAns.style.color = "tomato";
            }
        }
    }
    