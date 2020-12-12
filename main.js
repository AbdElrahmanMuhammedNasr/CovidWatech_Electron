// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu , MenuItem} = require('electron')
const path = require('path')

const mainMenu =  Menu.buildFromTemplate(require('./Js/menu'))

// console.log(process.getSystemMemoryInfo())

function createWindow () {

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 1000,

    minHeight:800, 
    minWidth:800,

    // autoHideMenuBar:true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true

    },
    show:false
  })


  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  // mainWindow.loadURL('https://httpbin.org/basic-auth/user/passwd')


  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // let wc = mainWindow.webContents;
  // wc.on('did-navigate',(e, url,statusCode, message)=>{
  //   console.log(url)
  //   console.log(statusCode)
  //   console.log(message)
    
  // })

  mainWindow.on('ready-to-show', mainWindow.show)
  
  Menu.setApplicationMenu(mainMenu)



}





app.on('ready',createWindow) //  instate of above
  
app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
// -----------------------------------------------------------------
// app.on('browser-window-blur',()=>{
//   console.log('blur')
// })

// app.on('browser-window-focus', ()=>{
//   console.log('Focus')
// })
// // -----------------------------------------------------------------

app.on('close',()=>{
  mainWindow = null
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


