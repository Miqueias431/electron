/**
 * Processo de renderização do documento index.html
 */

console.log("Processo de renderização")

// Vinculado ao preload.js
console.log(`Electron: ${api.verElectron()}`)

// Envio de uma mensagem
api.hello("Oi!")

// Recebimento de uma mensagem
api.answer((event,message) => {

    console.log(`O processo de renderização recebeu uma mensagem: ${message}`)
    
})

// Função que é execultada quando o botão for clicado
function sobre() {
    api.openAbout()
}

// Dialogs (caixas de mensagens)
function info() {
    api.info()
}

function warming() {
    api.warming()
}

function select() {
    api.select()
}


