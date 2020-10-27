module.exports = {
    "extends": [
        "airbnb",
        "airbnb/hooks"
    ],
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "max-len": ["error", { "code": 150 }],

        "import/no-extraneous-dependencies": ["error",  {"devDependencies": true}],
        "react/jsx-props-no-spreading": "off",
    },
    "env": {
        "browser": true,
        "node": true
    },
}
