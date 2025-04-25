let tarefas = [];

function adicionartarefa() {
  // recebe o valor input  do usuario
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  let mensagem = document.getElementById("mensagem");

  if (tarefa == "") {
    //mensagem se for vazio
    let mensagemAviso = "voce não pode colocar em branco!!! ";
    mensagem.style.color = "red";
    mensagem.textContent = mensagemAviso;
  } else {
    //mostra que a mensagem foi bem sucedida
    let mensagemSucesso = "tarefa adicionada com sucesso";
    mensagem.textContent = mensagemSucesso;
    mensagem.style.color = "green";

    tarefas.push(tarefa); // adiciona a tarefa no array

    redenrizarTarefas();
     //limpa o input
  inputTarefa.value = "";
  }

}
function redenrizarTarefas() {
  let listaTarefa = document.getElementById("listaTarefa");
  listaTarefa.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    // novaTarefa.textContent = tarefas[i];

    let texto =document.createElement("span");
    texto.className = "texto";
    texto.textContent = tarefas[i];
    novaTarefa.appendChild(texto);  

    let botoesDiv = document.createElement("div"); 
    botoesDiv.className = "botoes"; 
   

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "remover";
    botaoRemover.className = "remover";
    botaoRemover.onclick = () => removerTarefa(i)
    botoesDiv.appendChild(botaoRemover);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);
    botoesDiv.appendChild(botaoEditar);
    
    novaTarefa.appendChild(botoesDiv);
    listaTarefa.appendChild(novaTarefa);
  }
}
function removerTarefa(i) {
  tarefas.splice(i, 1); // remove a tarefa do array 
  redenrizarTarefas(); // atualiza a lista
  let mensagemRemover = document.getElementById("mensagem");
  mensagemRemover.style.color = "gray";
  mensagemRemover.textContent = "tarefa removida com sucesso";
}
function editarTarefa(i) {
 let tarefaEditada = prompt("Digite a nova tarefa: ")
 if (tarefaEditada.trim() !== "") {
  tarefas[i] = tarefaEditada
  redenrizarTarefas()
  let mensagemEditada = document.getElementById("mensagem");
  mensagemEditada.style.color = "blue";
  mensagemEditada.textContent = "tarefa editada com sucesso";
 } else {
  let mensagemEditada = document.getElementById("mensagem");
  mensagemEditada.style.color = "red";
  mensagemEditada.textContent = "tarefa não pode ser vazia  ";
 }
}
function limpaLista() {
  tarefas.length = 0
  redenrizarTarefas()
  let mensagemLimpa = document.getElementById("mensagem");
  mensagemLimpa.style.color = "blue";
  mensagemLimpa.textContent = "todas as tarefas foram removidas com sucesso";
}
 

