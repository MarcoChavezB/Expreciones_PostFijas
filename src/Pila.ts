export class Pila {
    pila: string[];
    operadores: string[];

    constructor() {
        this.pila = [];
        this.operadores = ["^", "√", "*", "/", "+", "-"];
    }

    convert(operacion: string) {
        let salida: string[] = [];
        let operadorStack: string[] = [];

        for (const char of operacion) {
            if (char === ' ') {
                return "No puede haber espacios.";
            } else if (!this.operadores.includes(char)) {
                // Es un operando, simplemente agrégalo a la salida
                salida.push(char);
            } else if (char === ')') {
                // Trata el paréntesis cerrado como multiplicación
                salida.push('*');
            } else {
                // Es un operador
                while (
                    operadorStack.length > 0 &&
                    this.precedencia(char) <= this.precedencia(operadorStack[operadorStack.length - 1])
                ) {
                    salida.push(operadorStack.pop() || '');
                }
                operadorStack.push(char);
            }
        }

        // Desapila cualquier operador restante
        while (operadorStack.length > 0) {
            salida.push(operadorStack.pop() || '');
        }

        // Elimina los paréntesis de la salida
        const expresionPostfija = salida.filter(char => char !== '(' && char !== ')');

        return expresionPostfija.join(' ');
    }

    precedencia(operador: string) {
        switch (operador) {
            case '^':
            case '√':
                return 3;
            case '*':
            case '/':
                return 2;
            case '+':
            case '-':
                return 1;
            default:
                return 0;
        }
    }
}
