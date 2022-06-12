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