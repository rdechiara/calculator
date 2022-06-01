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
           const currentScreenText = getScreenText();

           if(startsWith(currentScreenText, '0'))
           {
               setScreenText(e.target.innerText);
           }
           else
           {
               setScreenText(currentScreenText + e.target.innerText);
           }
       }
    });
}

addNumpadListeners();