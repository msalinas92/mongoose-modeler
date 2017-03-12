const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const Menu = electron.Menu;

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})
  
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  
  const menuTemplate = [
	 {
        label: 'File',
        submenu: [
            {
                label: 'Open Proyect',
				icon : 'icons/actions/16/document-open.png',
                click: () => {
                    console.log('Open project');
                }
            },{
                label: 'Save Proyect',
				icon : 'icons/actions/16/stock_save.png',
                click: () => {
                    console.log('Save project');
                }
            },{
                label: 'Save Proyect As',
				icon : 'icons/actions/16/stock_save.png',
                click: () => {
                    console.log('Save project');
                }
            }, {
                type: 'separator'
            }, {
                label: 'Exit',
				icon : 'icons/actions/16/remove.png',
                click: () => {
                    app.quit();
                }
            }
        ]
    },
	{
        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                label: 'Redo',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                type: 'separator'
            },
			{
                label: 'Copy',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                label: 'Cut',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                label: 'Paste',
                click: () => {
                    console.log('About Clicked');
                }
            },  {
                type: 'separator'
            }, {
                label: 'Quit',
                click: () => {
                    app.quit();
                }
            }
        ]
    },
	{
        label: 'Help',
        submenu: [
            {
                label: 'About ...',
                click: () => {
                    dialog.showMessageBox({
						type: 'warning',
						buttons: ['OK', 'Cancel'],        
						message: 'Window is not responsing',
						cancelId: 1,
						detail: 'The window is not responding. Would you like to force close it or just keep waiting?'
					  })
                }
            }, {
                type: 'separator'
            }, {
                label: 'Quit',
                click: () => {
                    app.quit();
                }
            }
        ]
    }
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
