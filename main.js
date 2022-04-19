//importando os modulos app BrowseWindow da biblioteca do electron//
const { app, BrowserWindow } = require('electron')

//Importando a padronização de caminhos
const path = require('path')

// Responsavel por ler as alterações e dar um reload na aplicação
require("electron-reload")(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})
// Função responsavel por criar a janela //
const createWindow = () => {
    const appIconPath = __dirname+'/assets/logozinha.png';
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: appIconPath
    })
// Lê o nosso arquivo index.html //
    win.loadFile('index.html')
}
// Responsavel por executar a função CreateWindow //
app.whenReady().then(() => {
    createWindow()
})