let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
 //console.log(countEl)
let count = 0

function counting() {
    count += 3
    countEl.textContent = count
}
function save() {
    let saved =  ' - '
     saveEl.textContent += count + saved
     countEl.textContent = 0
     count = 0
    
}


