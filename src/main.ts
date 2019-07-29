import { app, BrowserWindow } from 'electron';

let win : BrowserWindow | null = null;
function createWindow() {
  if (win !== null) {
    return;
  }
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
  });

  win.on('closed', () => {
    win = null
  });

  win.webContents.on('new-window', (event, url) => {
    event.preventDefault();
  });
  win.loadURL('https://www.moosti.com');
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('activate', () => {
  createWindow();
});

