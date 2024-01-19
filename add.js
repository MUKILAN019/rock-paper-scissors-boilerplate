let logos = document.querySelectorAll(".logo");
let my_score=0;
let comp_score=0;
let userScoreSpan = document.getElementById("userScore");
let compScoreSpan = document.getElementById("compScore");

logos.forEach(item => {
    item.addEventListener("click", function (event) {
        let clickedId = event.target.id;
        let complier = document.getElementById("complier");
        let randnums = Math.floor(Math.random() * 3);
        let img = document.createElement("img");

        if (randnums === 0) {
            img.src = "./assets/rock-hand.png";
            img.style.height="250px"
        } else if (randnums === 1) {
            img.src = "./assets/paper-hand.png";
            img.style.height="250px"
        } else {
            img.src = "./assets/scissors-hand.png";
            img.style.height="250px"
        }

        let lists = ["rock","paper","scissors"]

        let user_choice= clickedId;
        let comp_choice = randnums;

        function determine_winner(user_choice,comp_choice){
           if (user_choice === lists[comp_choice]){
            return "Match is a tie"
           }

           else if (
            (user_choice==="rock" && lists[comp_choice]==="scissors")||
            (user_choice==="paper" && lists[comp_choice]==="rock") ||
            (user_choice==="scissors" && lists[comp_choice]==="paper")
           ){
           my_score+=1;
           userScoreSpan.innerText=my_score;
           if(my_score===5){
            let ptag = document.getElementById("ptag")
            ptag.innerText="You Won the Game";

            let logoid = document.getElementById("logoid");
            logoid.style.visibility="hidden";
    

            let playagain = document.getElementsByTagName("button")[0];
                playagain.innerText="Play Again";
                playagain.style.display="block";
                playagain.addEventListener("click",function(){
                    window.location.href="./game.html"
                })
        
        }
           return "You won!"
           }

           else{
            comp_score+=1;
            compScoreSpan.innerText=comp_score;
            if(comp_score===5){
                let ptag = document.getElementById("ptag")
                ptag.innerText="You Lose the Game";

                let logoid = document.getElementById("logoid");
                logoid.style.visibility="hidden";

                let playagain = document.getElementsByTagName("button")[0];
                playagain.innerText="Play Again";
                playagain.style.display="block";
                playagain.addEventListener("click",function(){
                    window.location.href="./play.html"
                })

            }
            return "You lose!"
           }

        }
        
        let output=determine_winner(user_choice,comp_choice)
        complier.innerHTML = "";
        complier.appendChild(img);
    });
});

let rockimg = document.getElementById("rockimg");
let paperimg = document.getElementById("paperimg");
let scissorsimg = document.getElementById("scissorsimg");

let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

rock.addEventListener('click', () => {
    displayImage(rockimg);
});

paper.addEventListener('click', () => {
    displayImage(paperimg);
});

scissors.addEventListener('click', () => {
    displayImage(scissorsimg);
});

function displayImage(image) {
    // Hide all images
    hideAllImages();
    image.style.display = 'block';
}

function hideAllImages() {
    const allImages = document.querySelectorAll('.game-image');
    allImages.forEach(otherimage => {
        otherimage.style.display = 'none';
    });
}