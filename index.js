const passwordChars = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
    "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<",
    ">", "/", "?"
  ];


const passwordCharsNoNum = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_",
    "=", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<",
    ">", "/", "?"
  ];


const passwordCharsNoSpesh = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  ];

const passwordCharsNoSpeshNoNum = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ];


// Password generator function
function generatePassword(length, option) {
    let result = '';
    if (option == 'all') {
        for (let i = 0; i < length; i++){
            let r = Math.floor(Math.random() * passwordChars.length);
            result += passwordChars[r];
        }
    }
    else if (option == 'noNum') {
        for (let i = 0; i < length; i++){
            let r = Math.floor(Math.random() * passwordCharsNoNum.length);
            result += passwordCharsNoNum[r];
        } 
    }
    else if (option == 'noSpesh') {
        for (let i = 0; i < length; i++){
            let r = Math.floor(Math.random() * passwordCharsNoSpesh.length);
            result += passwordCharsNoSpesh[r];
        }   
    }
    else if (option == 'noSpeshNoNum') {
        for (let i = 0; i < length; i++){
            let r = Math.floor(Math.random() * passwordCharsNoSpeshNoNum.length);
            result += passwordCharsNoSpeshNoNum[r];
        }   
    }
    return result;
    
}

document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelector('#slider');
    let sliderValue = document.querySelector('#slider-value');
    let password = document.querySelector('#password');
    let spesh = document.querySelector('#include-spesh');
    let num = document.querySelector('#include-num');
    let genButton = document.querySelector('#gen');
    let copyButton = document.querySelector('#copy');
    


    slider.addEventListener('input', function() {
        sliderValue.textContent = slider.value;  
    })


    genButton.addEventListener('click', function() {
        if (spesh.checked == true && num.checked == true){
            password.value = generatePassword(slider.value, 'all');
        }
        else if (spesh.checked == true && num.checked == false){
            password.value = generatePassword(slider.value, 'noNum');
        }
        else if (spesh.checked == false && num.checked == true){
            password.value = generatePassword(slider.value, 'noSpesh');
        }
        else if (spesh.checked == false && num.checked == false){
            password.value = generatePassword(slider.value, 'noSpeshNoNum');
        }
        
    })

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(password.value);
    })


})