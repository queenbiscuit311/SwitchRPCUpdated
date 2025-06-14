~~This project is practically completely obsoleted by the existence of the nxapi project, but I will still accept game requests via issue if anyone still wants to use this software. Otherwise, check out nxapi over at https://github.com/samuelthomas2774/nxapi.~~

Nxapi is currently broken, and likely will be for a while longer. This project will stay open, as it is the only other way that I am aware of to have rich presence for the switch. If anyone wants to use this and add a new game, please don't hesitate to request one.
 
# SwitchRPCUpdated
The list of all supported titles is availible in the [supportlist.md](https://github.com/queenbiscuit311/SwitchRPCUpdated/blob/master/supportlist.md) file.

Discord Rich Presence integration for Nintendo Switch and Nintendo Switch 2.
SwitchRPC is a Rich Presence application for Discord that allows you to set your game, and some details about it.
If you have any issues, find any bugs, or want a title added, please create a github issue.

This fork of the original SwitchRPC was made because the original was seemingly abandoned in 2020, leaving only a very small and outdated title list. After figuring out how the app worked and how to modify the title list, I decided to make this fork so that the app could be more useful by adding more titles. If you would like a title added, please open an issue on this repository with your request.

Since the file that handles the supported games is hosted on GitHub and not locally, you will not need to update your client when the game list updates. This also applies to the original SwitchRPC, although their game list is not hosted on github (although it seems unlikely that the original will ever be updated.

## Windows Installation
Download the windows client from the releases section. The program is portable, so you can put it in either the program files folder for a global install, or somewhere within your user folder such as in your %localappdata% folder for a single user install. Then make a shortcut to the switchrpc executable in your desktop/start menu/whatever for easy access. You can also install directly from the repository by using the files in the "windows client" folder.

## Mac/Linux Installation

Installation on Mac/Linux requires using the terminal. Fortunately, if you are not experienced with using a terminal it's not too difficult to get this application set up.

For those unfamiliar with traditional terminal shell syntax: The dollar sign ($) denotes that you're using the command line/a terminal. Don't actually type it. To get to the terminal, open the "Terminal" app or similar (in the Applications/Utilities folder on macOS or an application such as Konsole or Gnome Console on Linux).

1. Download and install [node.js](https://nodejs.org/en/) (either version should work fine) and [git](https://git-scm.com/downloads) if you dont have them installed already.

   The required dependencies can alternatively (and more easily) be installed through the terminal.

   On macOS you can use [homebrew](https://brew.sh) by running `brew install node` and `brew install git`

   On Linux you can use your distribution's package manager. You probably already have git, so here are are some examples on how to install nodejs on most distros:

   Arch based distributions (Pacman) [Arch, Manjaro, EndeavorOS]: `sudo pacman -S nodejs npm`

   Fedora/RHEL based distributions (DNF) [Fedora, Nobara, Rocky Linux, Alma Linux]: `sudo dnf module install nodejs`

   Debian based distributions (APT) [Debian, Ubuntu, Linux Mint]: `sudo apt install nodejs npm`

   Gentoo based distributions (Portage) [Gentoo, Redcore] `emerge nodejs`

   Void based distributions (XBPS) `sudo xbps-install nodejs` (Void repos have an out of date version of node.js. It shouldn't matter for this app, but newer versions are availible using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) or [homebrew](https://brew.sh) via `brew install node`.)
   
3. Clone this repository:  
`$ git clone https://github.com/queenbiscuit311/SwitchRPCUpdated.git` or download and decompress the source code from the [latest release](https://github.com/queenbiscuit311/SwitchRPCUpdated/archive/refs/heads/master.zip). Delete the windows client and resources folders, they will not be needed.
4. CD into the directory you downloaded  
`$ cd ~/Downloads/SwitchRPCUpdated-master` for example
5. Install dependencies  
`$ npm install`
6. Install electron globally, if not already installed  
`$ sudo npm install electron -g`  
*Note: This will prompt for a password. This is your computer login password, and it won't show up while you type. Type it in and press enter. This is necessary to install the "Electron" app that SwitchRPC runs on.*
7. Run the app!  
`$ electron .`

You may find it useful to create a script to run the app in the future. To do so, type the following in your terminal:
```bash
$ cat > run.sh
#!/bin/bash
electron "${0%/*}"
```  
Press the key combo Control + D at this point, and your terminal should return to a normal prompt. Run this final command:  
`$ chmod +x run.sh`

You can then run ./run.sh in the same directory as the file to run the program.

If you're on macOS and would like to execute the run.sh file from Finder, right click on the new "run.sh" file created, choose "Get Info", and change "Opens With" to Terminal. (You will need to select Other, Terminal is in the Utilities folder, and change from Recommended Applications to All Applications at the bottom of the GUI shown.)

And you should now be able to open "run.sh" like a regular file to open the app. If you are using macOS and would like to pin this program to the dock, you can drag this script to the second half of your dock on macOS (and rename it to your liking).

## Copyright 2018-2021 NintenZone Technologies. Nintendo Switch, and the Nintendo Switch logos are property of Nintendo.
