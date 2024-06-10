/**
 * Processo de renderização do documento index.html
 */

console.log("Processo de renderização")

// Vinculado ao preload.js
console.log(`Electron: ${api.verElectron()}`)
api.hello()

// Função que é execultada quando o botão for clicado
function sobre() {
    api.openAbout()
}



