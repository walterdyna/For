/*

 - FOR
        1) -> INICIALIZAÇÃO -> Cria uma variável e coloca um valor inicial pra ela
        2) -> CONDIÇÃO -> enquanto for true, o laço continuará iterando
                          Ele irá verificar antes de cada iteração
        3) -> EXPRESSÃO FINAL -> O que irá ocorrer a cada vez que nosso laço der uma volta

        EX:
                for ([inicialização] ; [condição] ; [expressão final]) {
                    código a ser executado (seu codigo)
                }

        O loop for em JavaScript é usado para repetir um bloco de código um número específico de vezes. Ele tem três partes principais:

        1) -> Inicialização: É onde se cria e define um valor inicial para uma variável de controle. Essa parte é executada apenas uma vez, no início do loop.

        2) -> Condição: Determina se o loop continuará ou será encerrado. Antes de cada repetição, essa condição é avaliada; se for verdadeira, o código será executado.

        3) -> Expressão Final: Atualiza a variável de controle após cada repetição, geralmente para avançar para a próxima etapa do loop.

        O fluxo começa com a inicialização, passa pela verificação da condição, executa o bloco de código e, ao final de cada repetição, executa a expressão final antes de voltar à condição. Isso se repete até que a condição seja falsa.

*/

for (let i = 0; i < 10; i++) {
    console.log(i);
    }

const users = ["João", "Maria", "Pedro", "Ana", "Carlos"];
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}