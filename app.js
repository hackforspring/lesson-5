const RandNum = Math.floor(Math.random() * 101);
var InputNum = 0;

const InputText = document.getElementById('number');
const EnterButton = document.getElementById('enter');
const message = document.getElementById('message');


EnterButton.addEventListener('click', function () {
    console.log(RandNum);
    InputNum = parseInt(InputText.value);
    if (InputNum == RandNum) {
        console.log('正解!!');
        message.innerText = '正解！';
    } else if (InputNum > RandNum) {
        console.log('もっと小さいよ');
        message.innerText = 'もっと小さいよ';
    } else if (InputNum < RandNum) {
        console.log('もっと大きいよ');
        message.innerText = 'もっと大きいよ';
    }
});

