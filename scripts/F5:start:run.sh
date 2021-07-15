#! /bin/env zsh
# pwd
FLAGS=''
(
    (
        [[ -d ./out/ ]] || exit 1
        [[ -d ./out/lib/ ]] || exit 3
        [[ -d ./out/lib/resources/ ]] || exit 5
    ) &&
        (
            (
                [[ -d ./out/node_modules/ ]] || exit 7
                # [[ -d ./out/lib/resources/node_modules/ ]] || exit 9
            ) && (
                node ./out/lib/main.js
                echo -e "\n\n― NODEjs ―"
            ) || exit 11
        ) ||
        (
            (ts-node './lib/main.ts' && echo -e "\n\n― tsNODE ―" ||  exit 13)
            (
                tsc --build || exit 15
                cp ./package.json ./out/
                cp ./yarn.lock ./out/
                # cp ./lib/resources/package-lock.json ./out/lib/resources/package-lock.json
                # cp ./lib/resources/package.json ./out/lib/resources/package.json
                builtin cd ./out
                yarn -s || exit 17
            ) || exit 19
        ) || exit 21
) && echo ― DONE ― || exit 23
exit 0
