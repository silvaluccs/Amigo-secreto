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

/**
 * Atualiza a exibição da lista de amigos na interface.
 * - Seleciona o elemento HTML com id 'listaAmigos'.
 * - Limpa o conteúdo atual da lista.
 * - Para cada amigo no array 'amigos', cria um elemento <li> e adiciona à lista.
 */
function atualizarListaDeAmigos() {
  let listaDeAmigos = document.getElementById('listaAmigos');
  listaDeAmigos.innerHTML = '';

  amigos.forEach((amigo) => {
    let liAmigo = document.createElement('li');
    liAmigo.innerText = amigo;
    listaDeAmigos.appendChild(liAmigo);
  });
}

/**
 * Sorteia aleatoriamente um amigo da lista e exibe o resultado.
 * - Se a lista estiver vazia, exibe um alerta e não realiza o sorteio.
 * - Caso contrário, sorteia um nome e exibe no elemento com id 'resultado'.
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Não é possivel realizar o sorteio, pois sua lista de amigos está vazia.');
    console.log('a lista de amigos está vazia');
    return;
  }

  let indexAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indexAleatorio];

  document.getElementById('resultado').innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`;
  console.log(`o amigo sorteado foi ${amigoSorteado} do index ${indexAleatorio}`);
}









