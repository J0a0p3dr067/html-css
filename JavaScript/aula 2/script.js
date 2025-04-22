function adicionartarefa() {
    
    
    // recebe o valor input  do usuario
    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    
    let mensagem = document.getElementById("mensagem")

    

    if (tarefa == "") {
        //mensagem se for vazio
        let mensagemAviso = "voce não pode colocar em branco!!! "
        mensagem.style.color = "red";
        mensagem.textContent = mensagemAviso
    } else {

        //mostra que a mensagem foi bem sucedida
        let mensagemSucesso = "tarefa adicionada com sucesso"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "green";
        
        // adiciona a tarefa na lista
        let listaTarefa = document.getElementById("listaTarefa") 
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefa.appendChild(novaTarefa)
    }
    //limpa o input
    inputTarefa.value = ""
}