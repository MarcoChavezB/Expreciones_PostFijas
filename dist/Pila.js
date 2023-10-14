"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pila = void 0;
class Pila {
    constructor() {
        this.pila = [];
        this.operadores = ["^", "√", "*", "/", "+", "-"];
    }
    convert(operacion) {
        let salida = [];
        let operadorStack = [];
        for (const char of operacion) {
            if (char === ' ') {
                return "No puede haber espacios.";
            }
            else if (!this.operadores.includes(char)) {
                salida.push(char);
            }
            else if (char === ')') {
                salida.push('*');
            }
            else {
                while (operadorStack.length > 0 &&
                    this.precedencia(char) <= this.precedencia(operadorStack[operadorStack.length - 1])) {
                    salida.push(operadorStack.pop() || '');
                }
                operadorStack.push(char);
            }
        }
        while (operadorStack.length > 0) {
            salida.push(operadorStack.pop() || '');
        }
        const expresionPostfija = salida.filter(char => char !== '(' && char !== ')');
        return expresionPostfija.join(' ');
    }
    precedencia(operador) {
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
exports.Pila = Pila;
