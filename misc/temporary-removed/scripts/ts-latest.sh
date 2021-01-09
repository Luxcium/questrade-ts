#!/bin/env/ zsh

# On my local computer I am using zsh you may have to change it to bash or sh.
code --uninstall-extension ms-vscode.vscode-typescript-next &

eval $(fnm env)
(fnm install 14)
fnm use 14
yarn add -D typescript@latest @types/node@14 &
npm -g i npm@latest typescript@latest &
yarn global add typescript@latest yarn@latest npm@latest
tsc --version
npm --version
tsc
exit
