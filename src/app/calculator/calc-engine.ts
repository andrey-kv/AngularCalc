export class CalcEngine {
    private operand: number;
    private registry: number;

    constructor() {
        this.Clear();
    }

    /**
     * Clear
     */
    public Clear() {
        this.operand = 0;
        this.registry = 0;
    }

    /**
     * Calculate2
    operationCode: string     */
    public Calculate2(operationCode: string): string {
        let res: number;
        switch (operationCode) {
            case '+':
                res = this.operand + this.registry;
                break;
            case '-':
                res = this.registry - this.operand;
                break;
            case '*':
                const op = this.operand;
                res = this.registry * op;
                break;
            case '/':
                const op1 = this.operand;
                res = this.registry / op1;
                break;
        }
        this.operand = res;
        this.registry = 0;
        return String(res);
    }

    /**
     * SetOperand
     */
    public SetOperand(value: string): void {
        this.operand = Number(value);
    }

    /**
     * SetRegistr
     */
    public SetRegistry(): void {
        this.registry = this.operand;
    }
}
