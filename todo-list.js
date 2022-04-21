function adicionarItem() {
  const Valorinput = "Minha primeira tarefa"
//Pegando a tag UL do nosso HTML pelo ID
    const minhaTagUl = document.getElementById('Lista-de-Tarefas')

// Criando a tag LI com JavaScript
    const CriarTagLI = document.createElement('li');

    // Adicionando um texto dentro da tag LI
  CriarTagLI.innerText = Valorinput

    console.log(CriarTagLI)

    minhaTagUl.appendChild(CriarTagLI)
    
    console.log("Entrou na funçõa")
}
