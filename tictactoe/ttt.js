let boxes = document.querySelectorAll('.box')
let player = "X"

function changePlayer (){
    if(player=="X"){
        player = "0";
    } else {
        player = "X"}
    }

    let counter = 0;

    boxes.forEach(function(box) {

      box.onclick = function(event) {
          if (event.target.innerHTML == "") {
            event.target.innerHTML = player;
            counter ++;
            console.log("turns ="+ counter);
            if (checkWin()) {
              alert('You Won')
            } else {
              changePlayer();
            }
            } else {
                alert("Space already taken!");
          } 
          if (counter == 9 && !checkWin()) {
            alert('draw');
          }
        };
      });
      

let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
function checkWin() {
    let winner = false
  winningCombos.forEach(function(element) {
      console.log(boxes[element[0]].innerHTML);
      if (boxes[element[0]].innerHTML == player && boxes[element[1]].innerHTML == player && boxes[element[2]].innerHTML == player){
        winner = true
      }
      
  });

  return winner;
}