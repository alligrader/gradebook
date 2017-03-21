module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "parser": "babel-eslint",
    "rules": {
        "flowtype-errors/show-errors": 2,
        "no-var": 2
    },
    "plugins": [
        "react",
        "flowtype-errors"
    ],

    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"]
};
