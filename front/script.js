function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    // form.onsubmit = function(event) {
    //    //onsubmit indica que a função será executada quando o form for enviado
    //     event.preventDefault()
    //     // o default, é que ao clicar no botão, a página seja atualizada. Este comando previne que essa função default ocorra
    //     console.log('Foi enviado.')
    //     // quando o form for enviado, será executado o comando dentro da função
    // }

    function recebeEvento (event) {
        event.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const objeto = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(objeto)

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEvento)
}

meuEscopo()

//  de modo a proteger o código de interferências externas, você deve envolver tudo que fizer em funções, pois assim as variáveis estarão declaradas localmente na função. Se elas fossem declaradas globalmente, seu valor poderia ser alterado (p.e. por alguma biblioteca instalada, etc), e gerar erros no código