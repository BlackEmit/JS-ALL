// task 1

class Validation
{
    constructor(text) {
        this.text = text;
    }

    static dontNumber(text) {
        this.text = text;
        let lastChar = this.text.charAt(this.text.length - 1);
        if (lastChar.match(/[0-9]/g)) {
            return  this.text.substr(0, this.text.length - 1);
        } else {
            return this.text;
        }
    }
}

let inputField = document.querySelector("#input-name");

inputField.addEventListener("input", () => {
    let text = event.target.value;
    event.target.value = Validation.dontNumber(text);
});

// task 2

let closeModalBtn = document.querySelector(".modal-close");

closeModalBtn.addEventListener("click", () => {
    let modal = document.querySelector(".modal");
    modal.style.visibility = 'hidden';
});

let openModalBtn = document.querySelector(".modal-open");

openModalBtn.addEventListener("click", () => {
    let modal = document.querySelector(".modal");
    modal.style.visibility = 'visible';
});
