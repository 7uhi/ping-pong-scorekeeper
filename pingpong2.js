const playerOneScore = document.getElementById('playerOne-score');
const playerTwoScore = document.getElementById('playerTwo-score');
let finalscore = document.querySelector("#finalScore");
let winningScore = 5;
let gameOver = false;

// I don't understand this part, as well as querySelector part
finalscore.addEventListener("change", function(){
  winningScore = parseInt(this.value);
})

function playerOneFunc() {
  const pOneScoreText = playerOneScore.textContent;
  let pOneScoreNum = Number(pOneScoreText);
    if (!gameOver) {
      pOneScoreNum += 1;
      playerOneScore.textContent = pOneScoreNum;
        if (pOneScoreNum == winningScore) {
          gameOver = true;
          playerOneScore.style.color = 'green';         
          }
    }}

function playerTwoFunc() {
  const pTwoScoreText = playerTwoScore.textContent;
  let pTwoScoreNum = Number(pTwoScoreText);
    if (!gameOver) {
      pTwoScoreNum += 1;
      playerTwoScore.textContent = pTwoScoreNum;
        if (pTwoScoreNum == winningScore) {
          gameOver = true;
          playerTwoScore.style.color = 'green';
        }
}}

function resetFunc() {
  pOneScoreNum = 0;
  pTwoScoreNum = 0;
  playerOneScore.style.color = 'black';
  playerTwoScore.style.color = 'black';
  playerOneScore.textContent = pOneScoreNum;
  playerTwoScore.textContent = pTwoScoreNum;
  gameOver = false;

}