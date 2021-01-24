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
            ) && (node ./out/src/test/playground/main.js && echo -e "\n\n―NODEjs―") || exit 11
        ) ||
        ( 
            (ts-node '/home/luxcium/dev/questrade-ts/src/test/playground/main.ts' && echo -e "\n\n―tsNODE―" ||  exit 13) &
            (
                tsc --build || exit 15
                cp ./package.json ./out/
                cp ./yarn.lock ./out/
                cp ./src/resources/package-lock.json ./out/src/resources/package-lock.json
                cp ./src/resources/package.json ./out/src/resources/package.json
                builtin cd ./out
                yarn || exit 17
            ) || exit 19
        ) || exit 21
) || exit 23
exit 0
#      || exit 19
# # ) && echo -e "  ―OK―\n" ||  exit 21
# &&
#         (
#             builtin cd ./out
#             yarn || exit 13
#         ) || exit 15
# # #
# # {
#  (
#
# } && { pwd }

# }

# (
# )
#   (
#
# )  || {

# (  &>/dev/null) &
# }

#

# || exit

#( && echo -e "  ―OK―\n"
#           builtin cd ..
#           ln  ./keys ./out
#           cp .env ./out/.env
#           echo 'NODE_ENV="development"' >>./out/.env
#           echo -e "\n\n―NODEjs―\n\n"
#           node ./out/src/test/playground/main.js && echo -e "\n\n―NODEjs―"
#         )
#     )
# )

# [[ -d ./out/src/ ]] || (
#   echo 'NO SUCH: /out/src/'
# ) || exit 1

# [[ -d ./out/ ]] && (
# )

# [[ -d ./out/src/resources/ ]] && (
# ) || (
#   echo 'NO SUCH: /out/src/resources/'
#   exit 1
# ) || exit 1

# [[ -d ./out/node_modules/ ]] || (
#   echo 'NO SUCH: /out/node_modules'
# ) || exit 1

# [[ -d ./out/src/resources/node_modules/ ]] || (
#   echo 'NO SUCH: /out/src/resources/node_modules/'
#   builtin cd ./out/src/resources
#   pwd
#   npm --version
#   npm install || exit 1
# ) || exit 1
# #           cp ../../../src/resources/package-lock.json ./

# exit 0

# "preinstall": "rm -fr ./node_modules; echo ''; pwd; ls -1A; echo ''",
# "postinstall": "(cd './src/resources/' && rm -fr ./node_modules && echo '' && pwd && ls -1A && echo '' && (npm ci || npm install) && echo -e '\n―OK―\n'  )",
# [[ -d ./src ]]
# [[ -d ./src/resources ]]
# /
# # || pwd
# (
#   [[ -d ./out/ ]] &&
#     (

#       builtin cd ./out
#       pwd

#       cp ../package.json ./
#       [[ -d ./src ]] || (
#         cd ..
#         tsc
#       )
#       [[ -d ./src/resources ]] &&
#         (
#           pwd
#           builtin cd ./src/resources
#           pwd

#           cp ../../../src/resources/package.json ./
#           cp ../../../src/resources/package-lock.json ./
#           [[ -d ./node_modules/ ]] || exit 1
#         ) && ([[ -d ./node_modules/ ]] || yarn install -s) || yarn install -s &&
#
