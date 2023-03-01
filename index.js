let plusButton = document.querySelector("#plus-btn");
let counterEl = document.querySelector("#counter");
let minusButton = document.querySelector("#minus-btn");
let reset = document.querySelector("#reset-btn");
let buttonList = document.querySelectorAll(".theme-buttons");

let currentNum = 0

plusButton.addEventListener("click", () => {
    currentNum = (+counterEl.textContent);
    currentNum++;
    counterEl.textContent = currentNum;
})

minusButton.addEventListener("click", () => {
    currentNum--;
    counterEl.textContent = currentNum;
})

reset.addEventListener("click", () => {
    currentNum = 0;
    counterEl.textContent = 0;
})

for(let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", () => {
        let themeString = buttonList[i].textContent;

        let body = document.querySelector("body");        
        let main = document.querySelector("main");        
        let btnList = document.querySelectorAll("button");

        body.classList = "";
        main.classList = "";
        btnList.forEach((element, index) => {
            element.classList = ""
            if (index < 4) {
                element.classList.add("theme-buttons");
            }
        })

        body.classList.add(themeString);
        main.classList.add(themeString);
        btnList.forEach((element) => {
            element.classList.add(themeString);
        })
    })
}

// buttonList.addEventListener("click", () => {
//     if ()
// })
