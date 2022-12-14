let yellow = [];
let red = [];
let items = [];
let turn = 0;
let player1 = 0;
let player2 = 0;
let empty = [0,1,2,3,4,5,6,7,8];


//Event Listners for each box
eventlist()

//Setting Event Listeners
function eventlist(){
    document.querySelectorAll(".posdiv").forEach((item,i)=>{
        item.addEventListener('click', function(){
            if(empty.includes(i)){
                items[i] = item;
                //condition to know which player's turn it is
                item.style.backgroundImage = "url(assets/red.png)";
                red.push(`${i+1}`);
                empty = arrayRemove(empty, `${i}`)
                if(!checkwin(red)){
                spot = bestspot(empty)
                document.getElementById(`${spot}`).style.cursor = "auto";
                document.getElementById(`${spot}`).style.backgroundImage = 'url(assets/yellow.png)';
                empty = arrayRemove(empty, `${spot}`)
                items[spot] = document.getElementById(`${spot}`);
                yellow.push(`${spot+1}`);
                checkwin(yellow);
                }
            }
            this.removeEventListener('click', arguments.callee);
        })
    })
}

function bestspot(empty){
    return empty[Math.floor(Math.random() * empty.length)];
}

function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

//WIN CONDITIONS
function checkwin(array){
    if(
        /*
        Checking if any coniditon is met for win, I've got the idea to get the difference, I've noticed there are differences
        of 1&3&4 accross all true conditions
        */
        (array.includes("1") && array.includes("2") && array.includes("3")) ||
        (array.includes("4") && array.includes("5") && array.includes("6")) ||
        (array.includes("7") && array.includes("8") && array.includes("9")) ||
        (array.includes("1") && array.includes("5") && array.includes("9")) ||
        (array.includes("3") && array.includes("5") && array.includes("7")) ||
        (array.includes("1") && array.includes("4") && array.includes("7")) ||
        (array.includes("2") && array.includes("5") && array.includes("8")) ||
        (array.includes("3") && array.includes("6") && array.includes("9"))
    ){
        //if yellow is the player who won
        if(yellow == array){
            document.getElementById("mid").innerText = "Player 2 WON!"
            player2++;
        }
        //if red is the player who won
        else{
            player1++;
            document.getElementById("mid").innerText = "Player 1 WON!"
        }
        //reset in any case
        reset();
        return true;
    }
    //If we have filled all 9 spots reset
    else if((yellow.length + red.length) == 9){
        document.getElementById("mid").innerText = "It's a draw!"
        reset()
        return true;
    }
    else{
        return false;
    }
}

function reset(){
    //Styling for winner, loser and in case of draw
    if(player1>player2){
        document.getElementById("score1").style.color = "green";
        document.getElementById("score2").style.color = "red";
    }
    else if(player1<player2){
        document.getElementById("score1").style.color = "red";
        document.getElementById("score2").style.color = "green";
    }
    else{
        document.getElementById("score1").style.color = "yellow";
        document.getElementById("score2").style.color = "yellow";
    }
    //reset all array and turn, i've considered alternating turn, however, didn't have the time to do it
    yellow = [];
    red = [];
    //update score
    document.getElementById("score1").innerText = player1;
    document.getElementById("score2").innerText = player2;
    //Setting a small timeout before readding the event listners, also reset the background images and the cursor to pointer
    setTimeout(()=>{
    items.forEach((item,i)=>{
            if(!item){
                return;
            }
            item.style.backgroundImage = "";
            item.style.cursor = "pointer";
            empty = [0,1,2,3,4,5,6,7,8];
            item.addEventListener('click', function(){
                if(empty.includes(i)){
                    items[i] = item;
                    //condition to know which player's turn it is
                    item.style.backgroundImage = "url(assets/red.png)";
                    red.push(`${i+1}`);
                    empty = arrayRemove(empty, `${i}`)
                    if(!checkwin(red)){
                    spot = bestspot(empty)
                    document.getElementById(`${spot}`).style.cursor = "auto";
                    document.getElementById(`${spot}`).style.backgroundImage = 'url(assets/yellow.png)';
                    empty = arrayRemove(empty, `${spot}`)
                    items[spot] = document.getElementById(`${spot}`);
                    yellow.push(`${spot+1}`);
                    checkwin(yellow);
                    }
                }
                this.removeEventListener('click', arguments.callee);
            })
        })
        items = [];
    },800)
}