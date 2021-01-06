#!/bin/env/ zsh

# On my local computer I am using zsh you may have to change it to bash or sh.

code --uninstall-extension ms-vscode.vscode-typescript-next
fnm default 14
fnm use 14
yarn add typescript@latest @types/node@14.14.20
npm -g i typescript@latest
yarn global add typescript@latest
npm install -g npm@latest
yarn global add yarn@latest
yarn global add npm@latest
tsc --version
node --version
npm --version
tsc
exit 0
