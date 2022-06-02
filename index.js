const screen = document.getElementById('screen');
const numpad = document.getElementById('numpad');

function setScreenText(newText)
{
    screen.innerText = newText;
}

function getScreenText()
{
    return screen.innerText;
}
function startsWith(str, char)
{
    return str.charAt(0) === char;
}
function addNumpadListeners()
{
    const buttons = [...numpad.querySelectorAll('button')];
    buttons.forEach((button) =>
    {
       button.onclick = (e) =>
       {
            setScreenText(Number(screen.innerText) + e.target.innerText);
       }
    });
}
/*
** Compute x op y.
** Return NaN if an invalid operation is attempted
** the operation result otherwise
*/
function operate(x, y, op)
{
    let result = undefined;

    switch(op)
    {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        default:
            result = NaN;
            break;
    }
}
addNumpadListeners();