let inputBox = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('Click',(b)=>{
        if(b.target.innertext == '='){
            string = String(eval(string))
            inputBox.value = string;
        }
        else if (b.target.innertext == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if (b.target.innertext == 'DEL'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.id == 'PlusMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else {
            string += b.target.innerText
            inputBox.value = string;
        }
    })
})