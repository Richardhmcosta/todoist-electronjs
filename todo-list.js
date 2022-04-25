function adicionarItemPelaTecla(event) {
  const tecla = event.key
  if(tecla === 'Enter'){
   adicionarItem()
return
  }
}

function adicionarItem(event) {

if (event && event.keycode !== 13) return


  const valorinput = document.getElementById('input').value
//Pegando a tag UL do nosso HTML pelo ID
    const minhaTagUl = document.getElementById('Lista-de-Tarefas')

// Criando a tag LI com JavaScript
    const CriarTagLI = document.createElement('li');

    // Adicionando um texto dentro da tag LI
  CriarTagLI.innerText = valorinput

    console.log(CriarTagLI)

    minhaTagUl.appendChild(CriarTagLI)
    
    console.log("Entrou na funçõa")
}