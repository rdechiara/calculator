class Calculator
{
    constructor()
    {
        this.operands = [];
        this.firstNumberRead = false;
    }

    hasEnoughOperands()
    {
        return this.operands.length > 1;
    }

    insertOperand(operand)
    {
        if(this.operands.length > 0)
        {
            this.operands[1] = operand;
        }
        else
        {
            this.operands[0] = operand;
        }
    }

    getLastResult()
    {
        return this.operands[0];
    }

    add()
    {
        if(!this.hasEnoughOperands())
        {
            throw new Error('Number of operands insufficient!');
        }

        this.operands[0] += this.operands[1];

        return this.getLastResult();
    }

    sub()
    {
        if(!this.hasEnoughOperands())
        {
            throw new Error('Number of operands insufficient!');
        }

        this.operands[0] -= this.operands[1];
        return this.getLastResult();
    }

    mul()
    {
        if(!this.hasEnoughOperands())
        {
            throw new Error('Number of operands insufficient!');
        }

        this.operands[0] *= this.operands[1];
        return this.getLastResult();
    }

    div()
    {
        if(!this.hasEnoughOperands())
        {
            throw new Error('Number of operands insufficient!');
        }

        if(this.operands[1] === 0)
        {
            throw new Error('Attempt to divide by zero!');
        }

        this.operands[0] /= this.operands[1];
        return this.getLastResult();
    }
}
//implement the CalculatorView
class CalculatorView
{
    constructor(displayId, keypadId, oppadId)
    {
        this.display = document.getElementById(displayId);
        this.keypad = document.getElementById(keypadId);
        this.oppad = document.getElementById(oppadId);
    }

    getDisplayText()
    {
        return this.display.hasOwnProperty('value') ? this.display.value : this.display.innerText;
    }

    setDisplayText(text)
    {
        if(this.display.hasOwnProperty('value'))
        {
            this.display.value = text;
        }
        else
        {
            this.display.innerText = text;
        }
    }

    clearDisplay()
    {
        this.setDisplayText('');
    }
    appendToDisplay(text)
    {
        this.setDisplayText(this.getDisplayText() + text);
    }
    getKeypad()
    {
        return this.keypad;
    }

    getDisplay()
    {
        return this.display;
    }
}
//implement the controller
class Controller
{
    constructor(calc, view)
    {
        this.calculator = calc;
        this.view = view;
        this.initKeypad();
    }

    initKeypad()
    {
        const keypad = this.view.getKeypad();

        keypad.addEventListener('click', (e) =>
        {
            const numberClicked = e.target.innerText;
            this.view.appendToDisplay(numberClicked);
        });
    }
}

const controller = new Controller(new Calculator(), new CalculatorView('screen', 'numpad', 'oppad'));