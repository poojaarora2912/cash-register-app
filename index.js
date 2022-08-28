const billAmount = document.querySelector("#billamount");
const cashGiven = document.querySelector("#cashgiven");
const checkButton = document.querySelector("#checkbutton");
const message = document.querySelector("#errormessage");
const numberOfNotes = document.querySelectorAll(".number-of-notes");

const notes = [2000, 500, 100, 50, 10, 5, 1];

checkButton.addEventListener("click", validateAmount);

function validateAmount(){
    hideMessage();
    var amountReturned = cashGiven.value - billAmount.value;
    console.log(billAmount, cashGiven, amountReturned);
    if(billAmount.value == '' || cashGiven == ''){
        showMessage("Enter valid values");
    }else{
            
    if (amountReturned == 0) {
        showMessage("No Return change required ");
    } else if (amountReturned < 0) {
        showMessage("Ready to wash the plates ...? ");
    } else {
        showMessage("Amount to be returned is ₹" + amountReturned);
        calculate(amountReturned);
    }
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