#! /bin/env zsh

(
  [[ -d ./out/ ]] &&
    (

      builtin cd ./out
      cp ../package.json ./

      [[ -d ./src/resources ]] &&
        (
          builtin cd ./src/resources
          cp ../../../src/resources/package.json ./
          cp ../../../src/resources/package-lock.json ./
          [[ -d ./node_modules/ ]] || exit 1
        ) && ([[ -d ./node_modules/ ]] || yarn install -s) || yarn install -s &&
        (
          builtin cd ..
          cp -r ./keys ./out
          cp .env ./out/.env
          echo -e "\n\n―NODEjs―\n\n"
          node ./out/src/test/playground/main.js && echo -e "\n\n―NODEjs―"
        )
    ) || (ts-node '/home/luxcium/dev/questrade-ts/src/test/playground/main.ts' && echo -e "\n\n―tsNODE―") && echo -e "  ―OK―\n" ||  exit 11
)
exit
