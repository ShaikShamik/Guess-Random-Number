let random = parseInt(Math.random()*100+1)

const userinput = document.querySelector("#input-field");
const submit = document.querySelector("#submit-button");
const guessfield = document.querySelector(".guesses");
const remaining = document.querySelector(".last-result");
const loworhigh = document.querySelector("#results");
const StartOver=document.querySelector(".paras")

let p=document.createElement("p")

let prevguess=[]
let numguess=1

let playgame=true

if(playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value)
        console.log(guess);
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1){
        alert("Please enter a number greater than 1");
    }
    else if(guess>100){
        alert("Please enter a number less than 100");
    }
    else{
        prevguess.push(guess)
        if(numguess===11){
            displayguess(guess)
            displaymessage(`Game Over. Random number was ${random}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess===random){
        displaymessage(`Congrats You have won and the random number is ${random}`);
        endgame();
    }
    else if(guess<random){
        displaymessage(`Oops the number is Too low`);
    }
    else if(guess>random){
        displaymessage(`Oops the number is Too high`);
    }
}

function displayguess(guess){
    userinput.value= '';
    guessfield.innerHTML+=`${guess}, `;
    numguess++;
    remaining.innerHTML=`${11 - numguess}`;
}

function displaymessage(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    userinput.value=''
    userinput.setAttribute("disabled",'')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame" >Start new Game</h2>`
    StartOver.appendChild(p)
    playgame=false
    newgame()
}

function newgame(){
    const newbutton = document.querySelector('#newgame')
    newbutton.addEventListener('click',function(){
         random = parseInt(Math.random()*100+1)
         prevguess=[]
         numguess=1
         guessfield.innerHTML=[]
         remaining.innerHTML=1
         userinput.removeAttribute('disabled')
         StartOver.removeChild(p)
         playgame=true
    })
}