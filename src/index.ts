import { Pila } from './Pila';

const pila = new Pila();
let expresion: string = '';

function mostrarMenu() {
    console.log("\nMenú:");
    console.log("1. Introducir expresión");
    console.log("2. Mostrar expresión en notación postfija");
    console.log("3. Créditos");
    console.log("4. Salir");
}

function main() {
    mostrarMenu();

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Seleccione una opción: ", (opcion: string) => {
        switch (opcion) {
            case '1':
                readline.question("Introduzca la expresión: ", (expresionIngresada: string) => {
                    expresion = expresionIngresada;
                    const expresionPostfija = pila.convert(expresion);
                    console.log("Expresión postfija: " + expresionPostfija);
                    main();
                });
                break;
            case '2':
                console.log("Expresión: " + expresion);
                main();
                break;
            case '3':
                console.log("Créditos: Desarrollado por [Tu Nombre]");
                main();
                break;
            case '4':
                readline.close();
                break;
            default:
                console.log("Opción no válida. Por favor, elija una opción válida.");
                main();
        }
    });
}

main();
