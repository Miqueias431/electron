// console.log("Processo Principal")

const { app, BrowserWindow, nativeTheme } = require('electron')

// Janela Principal
const createWindow = () => {

  // nativeTheme.themeSource = 'light'

  const win = new BrowserWindow({
    width: 800,  // Largura
    height: 600,  // Altura
    icon: './src/public/img/pc.png'
    // resizable: false, // Evitar o redimensionameto
    // titleBarStyle: 'hidden', // Esconder barra de titulo e menu
    // autoHideMenuBar: true, // Esconde a barra de menu

  })

  win.loadFile('./src/views/index.html')

}

// Janela Sobre
const aboutWindow = () => {

  const about = new BrowserWindow({
    width: 360,  // Largura
    height: 220,  // Altura
    icon: './src/public/img/pc.png',
    resizable: false, // Evitar o redimensionameto
    autoHideMenuBar: true, // Esconde a barra de menu

  })

  about.loadFile('./src/views/sobre.html')

}

// Execultar de forma assíncrona a aplicação 
app.whenReady().then(() => {
  createWindow()
  aboutWindow()
})