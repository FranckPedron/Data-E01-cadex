module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true, // on indique qu'on utilise jest
    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
    },
};
