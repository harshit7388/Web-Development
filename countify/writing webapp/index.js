const charVal = document.getElementById("textarea");
let tcount = document.getElementById("total-count");
let rcount = document.getElementById("remaining-count");

let charCount = 0;


/*  the below function changes the count of total and remaining words
therefore we are updating the innerText of them. 
*/
const updateCounter = ()=>{
    charCount = charVal.value.length; // this will return the lenght of current word
    tcount.innerText  = charCount;
    rcount.innerText = 150 - charCount; // max limit - current words = remaining words
};


charVal.addEventListener("keyup", () => updateCounter());

/* we have added event listener for keyboard events. so that 
when any key is pressed or any letter is typed the counter will
update the values of total and remaining words.
*/

const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(charVal.value);
  };