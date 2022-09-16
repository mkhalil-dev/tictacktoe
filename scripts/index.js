let yellow = [];
let red = [];
let turn = 0;
let items = [];
let player1 = 0;
let player2 = 0;
//Event Listners for each box

eventlist()
//Setting Event Listeners
function eventlist(){
    document.querySelectorAll(".posdiv").forEach((item,i)=>{
        item.addEventListener('click', function(){
            items[i] = item;
            if(turn%2 == 0){
                item.style.backgroundImage = "url(assets/red.png)";
                red.push(`${i+1}`);
                checkwin(red);
            }
            else{
                item.style.backgroundImage = 'url(assets/yellow.png)';
                yellow.push(`${i+1}`);
                checkwin(yellow);
            }
            this.removeEventListener('click', arguments.callee);
        })
    })
}


//WIN CONDITIONS
function checkwin(array){
    console.log(items)
    if(
        (array.includes("1") && array.includes("2") && array.includes("3")) ||
        (array.includes("4") && array.includes("5") && array.includes("6")) ||
        (array.includes("7") && array.includes("8") && array.includes("9")) ||
        (array.includes("1") && array.includes("5") && array.includes("9")) ||
        (array.includes("3") && array.includes("5") && array.includes("7")) ||
        (array.includes("1") && array.includes("4") && array.includes("7")) ||
        (array.includes("2") && array.includes("5") && array.includes("8")) ||
        (array.includes("3") && array.includes("6") && array.includes("9"))
    ){
        console.log("won")
        if(yellow == array){
            document.getElementById("mid").innerText = "Player 2 WON!"
            player2++;
        }
        else{
            player1++;
            document.getElementById("mid").innerText = "Player 1 WON!"
            document
        }
        yellow = [];
        red = [];
        reset();
    }
    else if((yellow.length + red.length) == 9){
        reset()
    }
    turn++;
}

function reset(){
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
    yellow = [];
    red = [];
    turn = 0;
    document.getElementById("score1").innerText = player1;
    document.getElementById("score2").innerText = player2;
    setTimeout(()=>{
    items.forEach((item,i)=>{
            if(!item){
                return;
            }
            item.style.backgroundImage = "";
            item.addEventListener('click', function(){
                items[i] = item;
                if(turn%2 == 0){
                    item.style.backgroundImage = "url(assets/red.png)";
                    red.push(`${i+1}`);
                    checkwin(red);
                }
                else{
                    item.style.backgroundImage = 'url(assets/yellow.png)';
                    yellow.push(`${i+1}`);
                    checkwin(yellow);
                }
                this.removeEventListener('click', arguments.callee);
            })
        })
        items = [];
    },800)
}