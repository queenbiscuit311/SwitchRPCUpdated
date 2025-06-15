//config
let production = true;
let version = 4;

//dependencies
const rpc = require('discord-rich-presence')('1006157577459081296');
const axios = require('axios');
const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
let data;

//fix for linux
app.commandLine.appendSwitch('disable-seccomp-filter-sandbox')

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.setMenu(null);

    axios.get('https://raw.githubusercontent.com/queenbiscuit311/SwitchRPCUpdated/master/resources/rpc.json').then((res, err) => {
        if (err || !res.data) {
            mainWindow.loadFile('no-server.html');
        }
        try {
            data = res.data;
            mainWindow.loadFile('index.html');
        }
        catch(e) {
            mainWindow.loadFile('error.html');
        }
    });
}

app.whenReady().then(createWindow);


ipcMain.on('getGameData', function(event) {
    let gameArray = [];

    data.gameLibrary.forEach(function(game) {
        gameArray.push(game.name);
    });

    gameArray.sort();

    event.sender.send('sendingGameData', gameArray);
});

ipcMain.on('x', function() {
    app.quit();
});

ipcMain.on('max', function () {
    if (!mainWindow) return;
    if (mainWindow.isMaximized()) return mainWindow.unmaximize();
    else return mainWindow.maximize();
});

ipcMain.on('min', function() {
    if (!mainWindow) return;
    mainWindow.minimize();
});

let name;
let desc;
//catch values
ipcMain.on('game:value', function(e, value) {
    name = value;
});

ipcMain.on('desc:value', function (e, value) {
   desc = value;
   findGame();
});

//RPC
function findGame() {
    let gotGame = name;
    let pic = 'switch';
    if (!name) return;
    data.gameLibrary.forEach(function(game) {
        game.aliases.forEach(function(alias) {
            if (alias === name.toLowerCase()) {
                gotGame = game.name;
                pic = game.pic;
            }
        });
    });
    setPresence(gotGame, desc, pic);
}

function setPresence(game, desc, pic) {
    if (desc.length < 2) {
        desc = 'Online'
    }
    rpc.updatePresence({
        state: desc,
        details: game,
        largeImageKey: pic,
        largeImageText: 'SwitchRPCUpdated',
    })
}
