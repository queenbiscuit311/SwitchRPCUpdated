# SwitchRPCUpdated
Discord Rich Presence integration for Nintendo Switch.
SwitchRPC is a Rich Presence application for Discord that allows you to set your game, and some details about it.
If you have any issues or find any bugs you can get assistance on the [support server.](https://discord.gg/NqG6pN9)

This fork of the original SwitchRPC was made because the original was seemingly abandoned two years ago, leaving only a very small and outdated title list. After figuring out how the app worked and how to modify the title list i decided to make this fork so that the app could be more useful with more, newer titles.

This is the current supported title list in alphabetical order, please let me know if you would like another title added since i have many asset slots left in the discord app this uses:

ARMS, Among Us, Animal Crossing: New Horizons, Bayonetta, Bayonetta 2, Celeste, Cuphead, Donkey Kong Country Tropical Freeze, Fall Guys, Famicom - Nintendo Switch Online, Fire Emblem: Three Houses, Fortnite, Hades, Hollow Knight, Hulu, Hyrule Warriors Definitive Edition, Hyrule Warriors: Age of Calamity, Kirby Star Allies, Kirby and the Forgotten Land, Mario + Rabbids Kingdom Battle, Mario Golf: Super Rush, Mario Kart 8 Deluxe, Mario Party Superstars, Mario Strikers: Battle League Football, Mario Tennis Aces, Metroid Dread, Minecraft: Bedrock Edition, Nintendo 64 - Nintendo Switch Online, Nintendo Entertainment System - NSO, New Pokemon Snap, New Super Mario Bros. U Deluxe, Ninjala, Overcooked 2, Paper Mario: The Origami King, Pokemon Brilliant Diamond, Pokemon Legends: Arceus, Pokemon Shield, Pokemon Shining Pearl, Pokemon Sword, Pokemon UNITE, Pokemon: Let's Go, Eevee!, Pokemon: Let's Go, Pikachu!, Ring Fit Adventure, Rocket League, Sega Mega Drive - Nintendo Switch Online, Super Nintendo Entertainment System - Nintendo Switch Online, Sonic Colours: Ultimate, Sonic Mania, Splatoon 2, Splatoon 3, Stardew Valley, Super Famicom - Nintendo Switch Online, Super Mario 3D All-Stars, Super Mario 3D World + Bowser's Fury, Super Mario Maker 2, Super Mario Odyssey, Super Mario Party, Super Smash Bros. Ultimate, The Legend of Zelda: Breath of the Wild, The Legend of Zelda: Link's Awakening, The Legend of Zelda: Skyward Sword, Twitch, Xenoblade Chronicles 2, Xenoblade Chronicles 3, Xenoblade Chronicles: Definitive Edition, YouTube

## Installation
If you're on windows, download the "switchrpc" folder in the windows client folder and put it in either the program files folder for a global install, or in your %localappdata% folder for a single user install. Then make a shortcut to the switchrpc executable in your desktop/start menu/whatever.

### Manual Installation (Useful for Mac and Linux Installs)

*The dollar sign ($) denotes that you're using the command line/a terminal. Don't actually type it. To get to the terminal, open the "Terminal" app or similar (in the Applications/Utilities folder on macOS).*

1. Download and install [node.js](https://nodejs.org/en/) (either version should work fine)
2. Clone this repository:  
`$ git clone https://github.com/queenbiscuit/SwitchRPCUpdated.git` or download and decompress the source code from the [latest release](https://github.com/queenbiscuit311/SwitchRPCUpdated/archive/refs/heads/master.zip). Delete the windows client folder, it will not be needed.
6. CD into the directory you downloaded  
`$ cd ~/Downloads/SwitchRPCUpdated-master` for example
291029. Install dependencies  
`$ npm install`
83. Install electron globally, if not already installed  
`$ sudo npm install electron -g`  
*Note: This will prompt for a password. This is your computer login password, and it won't show up while you type. Type it in and press enter. This is necessary to install the "Electron" app that SwitchRPC runs on.*
69. Run the app!  
`$ electron .`

You may find it useful to create a script to run the app in the future. To do so, type the following in your terminal:
```bash
$ cat > run.sh
#!/bin/bash
electron "${0%/*}"
```  
Press the key combo Control + D at this point, and your terminal should return to a normal prompt. Run this final command:  
`$ chmod +x run.sh`

Then, if you're on macOS, right click on the new "run.sh" file created, choose "Get Info", and change "Opens With" to Terminal. (You will need to select Other, Terminal is in the Utilities folder, and change from Recommended Applications to All Applications at the bottom of the GUI shown.)

And you should now be able to open "run.sh" like a regular file to open the app. You can drag this script to the second half of your dock on macOS (and rename it to your liking).

## Copyright 2018-2021 NintenZone Technologies. Nintendo Switch, and the Nintendo Switch logos are property of Nintendo.