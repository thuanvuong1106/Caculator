const screen = document.querySelector(".screen")
const buttons = document.querySelectorAll(".btn")
const btnEqual = document.querySelector(".btn-equal")
const btnClear = document.querySelector(".btn-clear")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.dataset.num
        screen.value += value
    })

    btnEqual.addEventListener("click", () => {
        if (screen.value === " ") {
            screen.value = " "
        } else {
            const answer = eval(screen.value)
            screen.value = answer
        }
    })

    btnClear.addEventListener("click", () => {
        screen.value = ""
    })
})