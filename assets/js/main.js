//var nome; //hoisting - içar.
////////////////////////////////////////////////////////////////
/**
 * Existem 7 tipos de erros em JavaScript
 
 * SyntaxError - Escreveu alguma coisa errado.
 * ReferenceError - Chamou alguém que não existe.
 * TypeError - Erro de tipo é uma violação do JavaScript
 * EvalError - Evite o uso do comando eval, mas se ele for inválido.
 * RangeError - Erro de intervalo, loop infinito ou chamadas inúmeras de recursividade.
 * URIError - Erro referente a chamadas externas. Uniform Resource Identifier. httpswww.
 * InternalError - Erro interno do JavaScript, falta de memória, processador...
 */

// function mudaTitulo(novoTitulo){
//     document.querySelector("h1").innerHTML = novoTitulo;
// }

// mudaTitulo("Vai Corintinhas!");

// Expressão de função.
// Função Anônima - Não tem nome.

const mudaTitulo2 = function(target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "Trocando subtítulo.")

const relogio = () => {
    const date = new Date();

    mudaTitulo2("h2", date.toLocaleTimeString());
}

setInterval(relogio, 1000);

const frases = [
    "Um banco para 20 milhões de pessoas",
    "C6 Bank para o seu banco.",
    "Cartão de crédito sem anuidade.",
];

const mudarFrases = (target, frases, tempo) => {

    let count = 0;

    setInterval(() => {
        document.querySelector(target).innerHTML = frases[count >= frases.length - 1 ? (count = 0) : (count += 1)];
    }, tempo * 1000)

    console.log(count)
};

mudarFrases("h1", frases, 4);



