// import keyboardEn from './js/keyboard-en';
//import KeyboardEn from './js/keyboard-en';
import keyboardHTML from './js/keybord.js';

// const keybordEN = ['esc 1 2 3 4 5 6 7 8 9 0 - = delet tab q w e r t y u i o p [ ] \ caps a s d f g h j k l ; " return shift z x c v b n m , . / shift en control alt command space command option ◀ ▲ ▼ ▶ '
// ];

const keyBoard = document.getElementById('virtual_keybord');
keyBoard.insertAdjacentHTML ('afterbegin', keyboardHTML);

keyBoard.addEventListener('keydown', (e) => {
    console.log(e)

    const code = e.code;
    const codeElement = document.querySelector(`[data-code="${e.code}"]`);
    //codeElement.classList.remove('active');
    if (codeElement) {
        codeElement.classList.add('active');
    }

} )

keyBoard.addEventListener('keyup' , (e) => {
    console.log(e)

    const code = e.code;
    const codeElement = document.querySelector(`[data-code="${e.code}"]`);
    //codeElement.classList.remove('active');
    if (codeElement) {
        codeElement.classList.remove('active');
    }

} )

// window.addEventListener("keydown", function(event) {
//     const key = event.keyCode;
//     const virtualKey = document.querySelector(`.key[data-key="${key}"]`);
//     if (virtualKey) {
//       virtualKey.classList.add("active");
//     }
//   });



