const cep = document.querySelector("#cep");

// Evento blur significa que clicamos na caixa de texto e saimos dela.
cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-","");     // NUNCA CAPTURAR UM VALUE FORA DE UM EVENTO.

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };
    
    //fetch vai gerar uma PRIMISSE =  Promessa de algo que vai acontecer.
    // Se der certo ele vai retornar o resultado, se der errado irá retornar um erro.

    const resultado = await fetch(`https://viacep.com.br/ws/${search}/json`, options);

    const json = await resultado.json();

    console.log(json);
});

// Async, é pra rodar por baixo dos panos. (usuário não percebe)
// Await, espere as coisas de cima acontecer e faça.
// Onde o AWAIT está o ASYNC precisa estar.