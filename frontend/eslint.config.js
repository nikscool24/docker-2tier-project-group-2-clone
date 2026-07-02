import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                bootstrap: 'readonly',
                SimpleLightbox: 'readonly',
            },
        },
        plugins: {
            prettier,
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            '@typescript-eslint/no-require-imports': 'off', // allow require()
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    semi: true,
                    trailingComma: 'es5',
                },
            ],
        },
    },
];
