const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const Menu = electron.Menu;
const nativeImage = electron.nativeImage
const {Tray} = require('electron')

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, icon : 'icons/main.png'})
  
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  
  //Declare menu from electron
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
				icon : 'icons/actions/16/window-close.png',
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
				icon : 'icons/actions/16/edit-undo.png',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                label: 'Redo',
				icon : 'icons/actions/16/edit-redo.png',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                type: 'separator'
            },
			{
                label: 'Copy',
				icon : 'icons/actions/16/edit-copy.png',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                label: 'Cut',
				icon : 'icons/actions/16/edit-cut.png',
                click: () => {
                    console.log('About Clicked');
                }
            }, {
                label: 'Paste',
				icon : 'icons/actions/16/edit-paste.png',
                click: () => {
                    console.log('About Clicked');
                }
            }
        ]
    },
	{
        label: 'Help',
        submenu: [
            {
                label: 'About ...',
				icon : 'icons/actions/16/help-about.png',
                click: () => {
                    dialog.showMessageBox(mainWindow,{
						title : 'Acerca de',
						type: 'none',
						icon : nativeImage.createFromPath('icons/icon.png'),
						message: 'About',
						detail: 'Mongoose modeler is a aplication from Fenden Proyect to make models based on Mongoose Driver to NodeJS'
					  })
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
