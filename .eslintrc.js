module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "rules": {
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/promise-function-async": "error",
        "camelcase": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "id-blacklist": "error",
        "id-match": "error",
        "import/order": "error",
        "max-len": "error",
        "no-console": "error",
        "no-underscore-dangle": "error",
        "no-unused-expressions": "error",
        "object-shorthand": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "function-name": true,
                    "import-name": true,
                    "no-boolean-literal-compare": true,
                    "object-literal-sort-keys": true,
                    "object-shorthand-properties-first": true,
                    "prettier": true,
                    "ter-arrow-parens": true,
                    "typedef": true
                }
            }
        ]
    }
};
