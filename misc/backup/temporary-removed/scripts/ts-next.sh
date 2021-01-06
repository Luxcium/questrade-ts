#!/bin/env/ zsh

# On my local computer I am using zsh you may have to change it to bash or sh.

code --install-extension ms-vscode.vscode-typescript-next
fnm default 15
fnm use default
yarn add -D typescript@next @types/node@14.14.20
npm -g i typescript@next
yarn global add typescript@next
npm install -g npm@7
yarn global add yarn@latest
yarn global add npm@7
tsc --version
node --version
npm --version
tsc
exit 0
