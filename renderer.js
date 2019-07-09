let windowToPrint
let printReport = document.querySelector('#printReport')
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')

let printReportToPdf = () => {
  ipcRenderer.send('print-to-pdf')
}

printReport.addEventListener('click', printReportToPdf)


setTimeout(() => {
    ipcRenderer.send('app-init')
  }, 2000)