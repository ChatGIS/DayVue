module.exports = {
    root: true,
    env: {
        browser: true, // browser global variables
        es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
    },
    parserOptions: {
        ecmaVersion: 12,
    },
    // 添加Vue语法校验
    parser: 'vue-eslint-parser', // ++
    extends: [
        'plugin:vue/vue3-recommended', // ++
    ],
    // 添加TS语法校验
    extends: [
        'plugin:@typescript-eslint/recommended', // ++
    ],
    plugins: ['@typescript-eslint'], // ++
    parserOptions: {
        parser: '@typescript-eslint/parser', // ++
    },
    /* // Airbnb JavaScript Style
     extends: [
         'plugin:vue/vue3-recommended',
         'airbnb-base', // ++
     ],*/
}
