const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const submit = document.getElementById("submit");
const message = document.getElementById("error");
const noOfNotes = document.querySelectorAll(".no-of-notes");

let notes = [2000, 500, 100, 20, 10, 5, 1];

const errorMessage = (msg) => {
  message.style.display = "block";
  message.innerText = msg;
};

const hideMessage = () => {
  message.style.display = "none";
};

const notesReturn = (remainingBalance) => {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(remainingBalance / notes[i]);
    remainingBalance = remainingBalance % notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
};

const clickHandler = () => {
  hideMessage();
  if (Number(billAmount.value) >= 0) {
    if (Number(billAmount.value) < Number(cashGiven.value)) {
      const remainingBalance = cashGiven.value - billAmount.value;
      notesReturn(remainingBalance);
    } else if (cashGiven.value == billAmount.value) {
      errorMessage("No need To give Return");
    } else {
      errorMessage("Cash Given Amount is less than Bill Amount");
    }
  } else {
    errorMessage("Enter Valid Amount");
  }
};

submit.addEventListener("click", clickHandler);
