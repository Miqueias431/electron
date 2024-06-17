
const { app, BrowserWindow, nativeTheme, Menu, shell, ipcMain } = require('electron')
// relacionado a o preload.js (path é o caminho)
const path = require('node:path')
// Janela Principal
const createWindow = () => {

  // nativeTheme.themeSource = 'light'
  const win = new BrowserWindow({
    width: 800,  // Largura
    height: 600,  // Altura
    icon: './src/public/img/pc.png',
    // resizable: false, // Evitar o redimensionameto
    // titleBarStyle: 'hidden', // Esconder barra de titulo e menu
    // autoHideMenuBar: true, // Esconde a barra de menu
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // Iniciar a janela com o menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  win.loadFile('./src/views/index.html')

}

// Janela Sobre
let about //Resolver BUG de abertura de várias janelas

const aboutWindow = () => {

  // se a janela about não estiver aberta (BUG 1) abrir
  if (!about) {
      about = new BrowserWindow({
         width: 360,  // Largura
      height: 220,  // Altura
      icon: './src/public/img/pc.png',
      resizable: false, // Evitar o redimensionameto
      autoHideMenuBar: true, // Esconde a barra de menu
    })
  }

  about.loadFile('./src/views/sobre.html')
  // Resolver BUG 2 (reabrir a janela se estiver fechada)
  about.on('closed', () => {
    about = null
  })
}

// Execultar de forma assíncrona a aplicação 
app.whenReady().then(() => {
  createWindow()
})

// template do menu personalizado
const template = [

  {
    label: 'Arquivo',
    submenu: [
      {
        label: 'Sair',
        click: () => app.quit(),
        accelerator: 'Alt+F4'
      }
    ]
  },
  {
    label: 'Exibir',
    submenu: [
      {
        label: 'Recarregar',
        role: 'reload'
      },
      {
        label: 'Ferramentas do desenvolvedor',
        role: 'toggleDevTools'
      },
      {
        type: 'separator'
      },
      {
        label: 'Aplicar zoom',
        role: 'zoomIn'
      },
      {
        label: 'Reduzir',
        role: 'zoomOut'
      },
      {
        label: 'Restalra o zoom padrão',
        role: 'resetZoom'
      }
    ]
  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'docs',
        accelerator: 'Alt+F1',
        click: () => shell.openExternal('https://www.electronjs.org/docs/latest/')
      },
      {
        type: 'separator'
      },
      {
        label: 'Sobre',
        click: () => aboutWindow()
      }
    ]

  }
]

// Processos
console.log("Processo Principal")
// Exemplo 1: Comando que só funciona no node.js
console.log(`Electron: ${process.versions.electron}`)
// Exemplo 2: Rebimento de uma mensagem do renderer
ipcMain.on('send-message', (event, message) => {
  console.log(`Processo principal recebeu uma mensagem: ${message}`)
  event.returnValue = 'oi!'
})
// Exemplo 3: Recebimento do renderer de uma ação a ser execultada
ipcMain.on('open-about', () => {
  aboutWindow()
})
