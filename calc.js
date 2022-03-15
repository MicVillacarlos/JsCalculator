const display = document.getElementById('output');
const buttons = Array.from(document.getElementsByClassName('btn'));
const numbers = document.getElementById('num');

buttons.map (button => {
    button.addEventListener('click',(b) => {
        switch(b.target.innerText){
            case '🏀':
                display.innerText = ' ';
                break;
            case '=':
                try
                {display.innerText = eval(display.innerText)}
                catch
                {display.innerText = 'Syntax ERROR'}
                break;
            case '%':
                display.innerText = (display.innerText/100)
                break;
            case 'DEL':
                display.innerText = display.innerText.slice(0,-1)
                break;
            case '(':
                display.innerText += '('
                break;
            case ')':
                display.innerText += ')'
                break;
          default:
            display.innerText += b.target.innerText

        }
    })
})


