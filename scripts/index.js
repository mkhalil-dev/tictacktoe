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
            console.log("hi")
            if(turn%2 == 0){
                red.push(`${i+1}`);
                checkwin(red);
            }
            else{
                yellow.push(`${i+1}`);
                checkwin(yellow);
            }
            items.push(item);
            this.removeEventListener('click', arguments.callee);
        })
    })
}


//WIN CONDITIONS
function checkwin(array){
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
            player2++;
        }
        else{
            player1++;
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
    yellow = [];
    red = [];
    document.getElementById("score1").innerText = player1;
    document.getElementById("score1").innerText = player2;
    items.forEach((item,i)=>{
        item.addEventListener('click', function(){
            console.log("hi")
            if(turn%2 == 0){
                red.push(`${i+1}`);
                checkwin(red);
            }
            else{
                yellow.push(`${i+1}`);
                checkwin(yellow);
            }
            items.push(item);
            this.removeEventListener('click', arguments.callee);
        })
    })
    item = [];
}