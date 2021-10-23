module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        jasmine: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
    },
};
