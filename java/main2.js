let first1 = document.getElementsByClassName("value1")[0];
let second2 = document.getElementsByClassName("value2")[0];
let i1 = parseInt(first1.textContent);
let i2 = parseInt(second2.textContent);

let buttons = document.getElementsByClassName("btn-all");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        if (i1 > 0) {
            i1--;
            i2++;

            first1.textContent = i1;
            second2.textContent = i2;
        }
    });
});

