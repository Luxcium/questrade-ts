#!/bin/env/ zsh

# On my local computer I am using zsh you may have to change it to bash or sh.

code --force --install-extension ms-vscode.vscode-typescript-next &

eval $(fnm env)
(fnm install 15) &
fnm use 15
yarn add -D typescript@next @types/node@latest &
npm -g i npm@7 typescript@next &
yarn global add typescript@next yarn@latest npm@7
tsc --version
npm --version

tsc
exit
