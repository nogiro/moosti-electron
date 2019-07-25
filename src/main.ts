import { app, BrowserWindow } from 'electron';

let win : BrowserWindow | null = null;
function createWindow() {
  if (win === null) {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.on('closed', () => {
      win = null
    });

    win.loadURL('https://www.moosti.com/');
  }
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

