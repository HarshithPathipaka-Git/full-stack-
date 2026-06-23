// camelCase - use second element as cap not first element 
let countEl = document.getElementById("countel")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
    
    count += 1
    countel.innerText = count
    

}

function save(){
    let countStr = count +","
    saveEl.innerText += countStr
    countel.textContent = 0
     count = 0

}
