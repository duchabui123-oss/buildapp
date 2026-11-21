const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 800,
    title: "Bông & Teddy",
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  win.setMenu(null);
  win.loadFile(path.join(__dirname, "..", "www", "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
