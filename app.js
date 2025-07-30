//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o pr
/**
 * Array global que armazena os nomes dos amigos cadastrados.
 * @type {string[]}
 */
let amigos = [];

/**
 * Adiciona um novo nome à lista de amigos.
 * - Valida se o campo está vazio.
 * - Valida se o nome já existe na lista e pede confirmação para adicionar novamente.
 * - Adiciona o nome ao array 'amigos', limpa o campo de entrada e atualiza a lista exibida.
 */
function adicionarAmigo() {
  let nomeAmigoInput = document.querySelector('input');

  if (nomeAmigoInput.value === "") {
    alert("Por favor, insira um nome.");
    console.log("Por favor, insira um nome.");
    return;
  }

  if (amigos.includes(nomeAmigoInput.value)) {
    console.log('O amigo já existe na lista');

    let confirmaAdicao = confirm(`O amigo ${nomeAmigoInput.value} já está na lista.\nTem certeza que quer adicionar?`);

    if (!confirmaAdicao) return;
  }

  amigos.push(nomeAmigoInput.value);
  nomeAmigoInput.value = '';

  console.log(amigos);
  atualizarListaDeAmigos();
}




