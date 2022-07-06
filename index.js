const billAmount = document.querySelector("#billamount");
const cashGiven = document.querySelector("#cashgiven");
const checkButton = document.querySelector("#checkbutton");
const message = document.querySelector("#errormessage");
const numberOfNotes = document.querySelectorAll(".number-of-notes");

const notes = [2000, 500, 100, 50, 10, 5];

checkButton.addEventListener("click", validateAmount);

function validateAmount(){
    hideMessage();
    if(billAmount.value>0){
        if(billAmount.value<=cashGiven.value){
            const amountReturned = cashGiven.value - billAmount.value;
            calculate(amountReturned);
        }else{
            showMessage("You are broke!");
        }
    }
    else{
        showMessage("Invalid amount!");
    }
}
function hideMessage(){
    message.style.display="none";
}
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}

function calculate(amountReturned){

    for(let i=0; i < notes.length; i++){
        const noteCount = Math.trunc(amountReturned/notes[i]);
        
        amountReturned = amountReturned % notes[i];
        
        numberOfNotes[i].innerText = noteCount;
        

    }
}