"use strict";
var listatoken = [];
var listatokenerror = [];
function myFunction() {
    listatoken = [];
    var temp = document.getElementById("myTextarea").value;
    temp = temp.split("   ").join("");
    temp = temp + "\n";
    var estado = 0;
    var lexema = "";
    var fila = 1;
    var columna = 0;
    for (var i = 0; i < temp.length; i++) {
        columna++;
        var char = temp.charAt(i);
        switch (estado) {
            case 0: {
                if (char == "\n") {
                    estado = 0;
                    fila++;
                    columna = 0;
                }
                else if (char == " ") {
                    estado = 0;
                }
                else if (char == ";") {
                    llenar(char, columna, fila, "puntocoma");
                }
                else if (char == "=") {
                    llenar(char, columna, fila, "igual");
                }
                else if (char == ",") {
                    llenar(char, columna, fila, "coma");
                }
                else if (char == "(") {
                    llenar(char, columna, fila, "para");
                }
                else if (char == ")") {
                    llenar(char, columna, fila, "parc");
                }
                else if (char == "{") {
                    llenar(char, columna, fila, "llavea");
                }
                else if (char == "}") {
                    llenar(char, columna, fila, "llavec");
                }
                else if (char == ".") {
                    llenar(char, columna, fila, "punto");
                }
                else if (char == "<") {
                    llenar(char, columna, fila, "menor");
                }
                else if (char == ">") {
                    llenar(char, columna, fila, "mayor");
                }
                else if (char == "!") {
                    llenar(char, columna, fila, "exclaa");
                }
                else if (char == "+") {
                    llenar(char, columna, fila, "mas");
                }
                else if (char == "-") {
                    llenar(char, columna, fila, "menos");
                }
                else if (char == "*") {
                    llenar(char, columna, fila, "por");
                }
                else if (char == "&") {
                    llenar(char, columna, fila, "and");
                }
                else if (char == "|") {
                    llenar(char, columna, fila, "or");
                }
                else if (char == "/") {
                    lexema += char;
                    estado = 1;
                }
                else if (char == "\"") {
                    estado = 8;
                }
                else if (char.match(/[0-9]/i)) {
                    lexema += char;
                    estado = 5;
                }
                else if (char.match(/[a-z]/i)) {
                    lexema += char;
                    estado = 7;
                }
                else {
                    llenarerror(char, fila, columna);
                }
                break;
            }
            case 1: {
                if (char == "/") {
                    lexema = "";
                    estado = 2;
                }
                else if (char == "*") {
                    lexema = "";
                    estado = 3;
                }
                else {
                    llenar(lexema, columna, fila, "div");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                break;
            }
            case 2: {
                if (char == "\n") {
                    estado = 0;
                }
                else {
                    estado = 2;
                }
                break;
            }
            case 3: {
                if (char == "*") {
                    estado = 4;
                }
                else {
                    estado = 3;
                }
                break;
            }
            case 4: {
                if (char == "/") {
                    estado = 0;
                }
                else {
                    estado = 3;
                }
                break;
            }
            case 5: {
                if (char.match(/[0-9]/i)) {
                    lexema += char;
                    estado = 5;
                }
                else if (char.match(/[a-z]/i) || char == "_") {
                    lexema += char;
                    estado = 6;
                }
                else {
                    llenar(lexema, columna, fila, "digit");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                break;
            }
            case 6: {
                if (char.match(/[0-9]/i)) {
                    lexema += char;
                    estado = 6;
                }
                else if (char.match(/[a-z]/i) || char == "_") {
                    lexema += char;
                    estado = 6;
                }
                else {
                    if (lexema == "h1") {
                        llenar(lexema, columna, fila, "h1");
                        lexema = "";
                        estado = 0;
                        i--;
                    }
                    else if (lexema == "h2") {
                        llenar(lexema, columna, fila, "h2");
                        lexema = "";
                        estado = 0;
                        i--;
                    }
                    else if (lexema == "h3") {
                        llenar(lexema, columna, fila, "h3");
                        lexema = "";
                        estado = 0;
                        i--;
                    }
                    else if (lexema == "h4") {
                        llenar(lexema, columna, fila, "h4");
                        lexema = "";
                        estado = 0;
                        i--;
                    }
                    else {
                        llenar(lexema, columna, fila, "ID");
                        lexema = "";
                        estado = 0;
                        i--;
                    }
                }
                break;
            }
            case 7: {
                if (char.match(/[0-9]/i) || char == "_") {
                    lexema += char;
                    estado = 6;
                }
                else if (lexema == "int") {
                    llenar(lexema, columna, fila, "int");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "double") {
                    llenar(lexema, columna, fila, "double");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "char") {
                    llenar(lexema, columna, fila, "char");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "bool") {
                    llenar(lexema, columna, fila, "bool");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "string") {
                    llenar(lexema, columna, fila, "string");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "void") {
                    llenar(lexema, columna, fila, "void");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "main") {
                    llenar(lexema, columna, fila, "main");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "console") {
                    llenar(lexema, columna, fila, "console");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "write") {
                    llenar(lexema, columna, fila, "write");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "if") {
                    llenar(lexema, columna, fila, "if");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "switch") {
                    llenar(lexema, columna, fila, "switch");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "for") {
                    llenar(lexema, columna, fila, "for");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "while") {
                    llenar(lexema, columna, fila, "while");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "do") {
                    llenar(lexema, columna, fila, "do");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "return") {
                    llenar(lexema, columna, fila, "return");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "break") {
                    llenar(lexema, columna, fila, "break");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "continue") {
                    llenar(lexema, columna, fila, "continue");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "html") {
                    llenar(lexema, columna, fila, "html");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "head") {
                    llenar(lexema, columna, fila, "head");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "body") {
                    llenar(lexema, columna, fila, "body");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "title") {
                    llenar(lexema, columna, fila, "title");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "div") {
                    llenar(lexema, columna, fila, "div");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "br") {
                    llenar(lexema, columna, fila, "br");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "p") {
                    llenar(lexema, columna, fila, "p");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "button") {
                    llenar(lexema, columna, fila, "button");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "label") {
                    llenar(lexema, columna, fila, "label");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (lexema == "input") {
                    llenar(lexema, columna, fila, "input");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                else if (char.match(/[a-z]/i)) {
                    lexema += char;
                    estado = 7;
                }
                else {
                    llenar(lexema, columna, fila, "ID");
                    lexema = "";
                    estado = 0;
                    i--;
                }
                break;
            }
            case 8: {
                if (char == "\"") {
                    llenar(lexema, columna, fila, "valor");
                    lexema = "";
                    estado = 0;
                }
                else {
                    lexema += char;
                    estado = 8;
                }
                break;
            }
        }
    }
    for (var i = 0; i < listatoken.length; i++) {
        alert(listatoken[i].lexema + "   " + listatoken[i].tipo);
    }
    // aqui va el sintacti
    document.getElementById("myTextarea1").value = "Fifth Avenue, New York City" + temp;
}
function llenarerror(char, fila, columna) {
    var temp = new tokens();
    temp.lexema = char;
    temp.fila = fila;
    temp.columna = columna;
    listatokenerror.push(temp);
}
function llenar(lexema, columna, fila, tipo) {
    var temp = new tokens();
    temp.tipo = tipo;
    temp.lexema = lexema;
    temp.fila = fila;
    temp.columna = columna;
    listatoken.push(temp);
}
function tokens() {
    this.lexema = null;
    this.tipo = null;
    this.fila = null;
    this.columna = null;
}
