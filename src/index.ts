import { BrowserWindow, app } from 'electron';

let window;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    window.loadURL(`file://${__dirname}/index.html`);
});
