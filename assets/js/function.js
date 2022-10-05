/* Arrow Function não acessa 'argmuents' */

const resultado = document.querySelector('#resultado');

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
};

myFunc.showArguments(
    "BMW",
    "AUDIO",
    "MERCEDES",
    "BENTLEY",
    "FERRARI",
    "LAMBORGUINI"
)

let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}

// myFunc2.showArguments2(
//     "Corsa",
//     "Escort",
//     "Palio",
//     "Gol",
//     "Kombi"
// ); 

let user = {
    name: "Gabriel Henrique",
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function`)
    },
    usandoNominal(){
        console.log(`Meu nome é ${this.name}, com Nominal Function`)
    },
};

user.usandoArrow();
user.usandoNominal();

let soma = (a,b) => {
    console.log(a+b);
};

let soma2 = function(a,b){
    console.log(a+b);
};

// new soma(50,20); not a constructor.
new soma2(50, 20);