let num1 = 13
let num2 = 7
let solEl = document.getElementById("sol")

document.getElementById("num1El").textContent = num1

document.getElementById("num2El").textContent = num2

function add (){
    let add = num1 + num2 
    solEl.textContent =  "Sum : " + add
    
}

function sub (){
    let sub = num1 - num2 
    solEl.textContent = "Sub : " + sub
}

function mul (){
    let mul = num1 * num2 
    solEl.textContent = "Mul : " + mul
}
function div (){
    let div = num1/num2

    // solEl.textContent += div
    if (num2==0){
        solEl.textContent = "invaild input "
    }

    else{
        solEl.textContent = "Div : " + div
    }

}