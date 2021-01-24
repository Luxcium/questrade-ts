#! /bin/env zsh
# pwd
FLAGS=''
( 
    (
        [[ -d ./out/ ]] || exit 1
        [[ -d ./out/src/ ]] || exit 3
        [[ -d ./out/src/resources/ ]] || exit 5
    ) &&
        ( 
            (
                [[ -d ./out/node_modules/ ]] || exit 7
                [[ -d ./out/src/resources/node_modules/ ]] || exit 9
            ) && (node ./out/src/test/playground/main.js && echo -e "\n\n― NODEjs ―") || exit 11
        ) ||
        ( 
            (ts-node '/home/luxcium/dev/questrade-ts/src/test/playground/main.ts' && echo -e "\n\n― tsNODE ―" ||  exit 13) &
            (
                tsc --build || exit 15
                cp ./package.json ./out/
                cp ./yarn.lock ./out/
                cp ./src/resources/package-lock.json ./out/src/resources/package-lock.json
                cp ./src/resources/package.json ./out/src/resources/package.json
                builtin cd ./out
                yarn -s || exit 17
            ) || exit 19
        ) || exit 21
) && echo ― DONE ― || exit 23
exit 0
