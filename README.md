~~This project is practically completely obsoleted by the existence of the nxapi project, but I will still accept game requests via issue if anyone still wants to use this software. Otherwise, check out nxapi over at https://github.com/samuelthomas2774/nxapi.~~

Nxapi is currently broken, and likely will be for a while longer. This project will stay open, as it is the only other way that I am aware of to have rich presence for the switch. If anyone wants to use this and add a new game, please don't hesitate to request one.
 
# SwitchRPCUpdated
The list of all supported titles is availible in the [supportlist.md](https://github.com/queenbiscuit311/SwitchRPCUpdated/blob/master/supportlist.md) file.

Discord Rich Presence integration for Nintendo Switch and Nintendo Switch 2.
SwitchRPC is a Rich Presence application for Discord that allows you to set your game, and some details about it.
If you have any issues, find any bugs, or want a title added, please create a github issue.

This fork of the original SwitchRPC was made because the original was seemingly abandoned in 2020, leaving only a very small and outdated title list. After figuring out how the app worked and how to modify the title list, I decided to make this fork so that the app could be more useful by adding more titles. If you would like a title added, please open an issue on this repository with your request.

Since the file that handles the supported games is hosted on GitHub and not locally, you will not need to update your client when the game list updates. This also applies to the original SwitchRPC, although their game list is not hosted on github (although it seems unlikely that the original will ever be updated.

**TODO:** Switch 2 Support

## Installation
Windows and Linux builds are provided in releases. Mac ARM builds should be coming soon.
Download the  client from the releases section. 
Linux: Application is availible as AppImage. It can be managed by manually placing it somewhere or using AppImage Launcher.

Windows: The program is portable, so you can put it in either the Program Files folder for a global install, or somewhere within your user folder such as in your %localappdata% folder for a single user install. You can then make a shortcut to the SwitchRPC executable in your desktop/start menu/whatever for easy access. 

## Building from source:

###Prerequesites:

Before building, ensure that `nodejs` and `npm` are installed through your package manager. Instructions for the most common distributions are provided below:
   
   Linux:
   
   Arch Linux and related distributions [Manjaro, EndeavourOS] (Pacman): `sudo pacman -S nodejs npm`

   Fedora/RHEL and related distributions [Nobara, Rocky Linux, Alma Linux] (DNF): `sudo dnf module install nodejs`

   Debian and related distributions [Ubuntu, Linux Mint] (APT): `sudo apt install nodejs npm`

   Gentoo Linux (Portage): `emerge nodejs`

   Void Linux (XBPS): `sudo xbps-install nodejs`
   
   macOS:
   
   [Brew](brew.sh) Package Manager: `brew install node`
   
   Windows:
   
   Option 1:
   Instructions to install node.js and npm are provided by Microsoft [here](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows_).
   
   Option 2:
   [Chocolatey](https://chocolatey.org/install) Package Manager: `choco install nodejs`
   
Additionally, ensure that `electron-builder` and `electron-packager` are installed through npm:
   
   `sudo npm install electron-builder electron-packager -g`
   
3. Clone this repository:  
`git clone https://github.com/queenbiscuit311/SwitchRPCUpdated.git` 
4. CD into the directory you downloaded  
`cd ~/Downloads/SwitchRPCUpdated-master` for example
5. Install dependencies  
`npm install`
6. Build
`electron-builder`
7. Done! Your compiled binaries will be in the `dist` folder.


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
