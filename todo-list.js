
// A função responsavel por adicionar o item pelo evento de onkeypress no input
function adicionarItemPelaTecla(event) {
// Pegando o tipo da tecla pelo evento
  const tecla = event.key
  // Verificando se a tecla pressionada é o 'Enter'
  if(tecla === 'Enter'){
    // Chamando a função responsavel por adicionar item
   adicionarItem()
return
  }
}

function adicionarItem(event) {



  const valorinput = document.getElementById('input').value
//Pegando a tag UL do nosso HTML pelo ID
    const minhaTagUl = document.getElementById('Lista-de-Tarefas')

// Criando a tag LI com JavaScript
    const CriarTagLI = document.createElement('li');

    const tagRemover = `<i onclick='removerItem(event)' class='fa-solid fa-circle-minus icon'> </i>`

    // Adicionando um texto dentro da tag LI
  CriarTagLI.innerHTML = valorinput + tagRemover

    console.log(CriarTagLI)

    minhaTagUl.appendChild(CriarTagLI)
    
    console.log("Entrou na função")
}



function removerItem(event) {

// Pegando a tag <i> dentro do nosso evento
    const meuIcone = event.target

 // Pegando a tag <li> através da tag <i> com propriedade parentElement (tbm pode ser usado parentNode)
    const minhaLI = meuIcone.parentElement

  // Excluindo a tag <li> com a função remove()
    minhaLI.remove()

}