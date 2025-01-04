let open_btn = document.querySelector('.open-br');
let popup = document.querySelector('.popup');

const btn_link1 = document.querySelector('.btn_link1');
const btn_link2 = document.querySelector('.btn_link2');


LINK1 = 'https://t.me/+6CuRoowhmwgzMmY6';
LINK2 = 'https://t.me/+W_n0Bb8R6CIyNGNi';


open_btn.addEventListener('click', function() {
    
    popup.classList.add('df');

});

// document.querySelector('.popup-close').addEventListener('click', function() {
//     popup.classList.remove('df');
// });


let popup__link = document.querySelector('.popup-block__link');


btn_link1.href = LINK1
btn_link2.href = LINK2
