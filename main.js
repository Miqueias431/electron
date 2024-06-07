// console.log("Processo Principal")

const { app, BrowserWindow, nativeTheme, Menu, shell } = require('electron')

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

  // Iniciar a janela com o menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

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
        role:  'zoomOut'
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