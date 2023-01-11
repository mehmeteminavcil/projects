let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let sumEl = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    sumEl += count
    count = 0
    sum()
}

function sum(){
    document.getElementById('sum').innerText = "Sum: " + sumEl

}
