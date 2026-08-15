const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindows() {
    const displays = screen.getAllDisplays();
    const primaryDisplay = screen.getPrimaryDisplay();

    // Dashboard Window
    const dashboardWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    dashboardWindow.loadFile(path.join(__dirname, '../sites/dashboard/index.html'));

    // Presentation Window
    const presentationWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    presentationWindow.loadFile(path.join(__dirname, '../sites/presentation/index.html'));

    // Atem Window
    const atemWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    atemWindow.loadFile(path.join(__dirname, '../sites/atem/index.html'));
};

app.whenReady().then(() => {
    createWindows();

    app.on('active', () => {
        if (BrowserWindow.getAllWindows().length() < 3) {
            createWindows();
        };
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});