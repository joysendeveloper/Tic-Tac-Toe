console.clear();
let mini_box = document.querySelectorAll(".mini_box");
let winnerName = document.getElementById('PlayerName');

let x = 0 , o = 0;
let cross = "X", circle = "O";
let count = 0;
let playersSign = new Array(9);

mini_box.forEach((item,index,array) => {
    item.addEventListener("click", function(){
        if(count <= 8){

            if(count % 2 == 0){
                // adding circle style in mini box 
                item.classList.add("circle");
                playersSign[index] = 'O';
                // how much btn clicked that counting on the count variable
                count++;
                // how much "O" clicked that counting on the o variable
                o++;
                if(o >= 3){
                    console.log(checkWinner(playersSign, circle));
                    winner();
                }
            }
            else{
                // adding circle style in mini box 
                item.classList.add("cross");
                playersSign[index] = 'X';
                // how much btn clicked that counting on the count variable
                count++;
                // how much "X" clicked that counting on the x variable
                x++;

                if(x >= 3){
                    console.log(checkWinner(playersSign, cross));
                    winner();
                }
            }
        }
    });
});



const checkWinner = (arr, sign) => {
    
    if(checker(arr[0],arr[1],arr[2],sign) || checker(arr[3],arr[4],arr[5],sign) || checker(arr[6],arr[7],arr[8],sign) || checker(arr[0],arr[3],arr[6],sign) || checker(arr[1],arr[4],arr[7],sign) || checker(arr[2],arr[5],arr[8],sign) || checker(arr[0],arr[4],arr[8],sign) || checker(arr[2],arr[4],arr[6],sign)){
        console.log(` Winner ${sign}`);
        // Return the winner sign 
        return sign;
    }
    else if(count == 9){
        console.log(`Match Draw`);
        // Return Draw if match draw
        return "draw";
    }    
}
function checker(val1, val2, val3, sign){
    if(val1 == sign && val2 == sign && val3 == sign)
        return true;
    else
        return false;
}



function addRemoveNoneCls(){
    setTimeout(() => {
        document.getElementById('gameBox').classList.add('d_none');
        document.getElementById('winnerBox').classList.remove('d_none'); 
    }, 200);
}
function winner(){
    if(checkWinner(playersSign, circle) == "O" || checkWinner(playersSign, cross) == "X"){
        addRemoveNoneCls();
        // playing winning Audio
        var audio = new Audio("../audio/win.mp3");
        audio.play();

        if(checkWinner(playersSign, circle) == "O"){
            winnerName.innerHTML = "Player O Win";
        }
        else{
            winnerName.innerHTML = "Player X Win";
        }
    }
    // Only when users click all the mini box then this block will execute
    else if (count == 9){
        // playing draw match Audio
        var audio = new Audio("../audio/draw.wav");
        audio.play();

        addRemoveNoneCls();
        document.querySelector('#winnerBox .winner_wrapper img').classList.add('d_none')
        winnerName.innerHTML = "Match Draw";
    }
}
console.log();
