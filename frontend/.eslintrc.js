module.exports = {
  ignorePatterns: ['**/*.js'],
  extends: ['react-app', 'plugin:jest/all'],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'prefer-spread': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-const': 'warn',
    'prefer-arrow-callback': 'warn',
    'no-var': 'error',
    'require-jsdoc': 'warn',
    'no-eq-null': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    eqeqeq: 'error',
    'dot-notation': 'error',
    'dot-location': [2, 'property'],
    curly: 'error',
    'no-inner-declarations': 'error',
    'no-extra-boolean-cast': 'error',
    'no-empty': 'error',
    quotes: [2, 'single'],
    'no-nested-ternary': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',

    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-require-imports': 'error',
    // '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/array-type': ['warn'],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' }
    ],
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'property',
        format: null
      }
    ],

    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-no-duplicate-props': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true
      }
    ],
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-uses-vars': 'error',
    'react/no-unused-prop-types': 'error',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react/jsx-props-no-spreading': [
      1,
      {
        custom: 'ignore'
      }
    ],
    'react/prefer-stateless-function': 'error',
    'react/jsx-wrap-multilines': [
      1,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore'
      }
    ],
    'react/jsx-no-script-url': 'error',
    'react/jsx-pascal-case': 'error',
    'react/destructuring-assignment': 1,
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react-hooks/exhaustive-deps': 0,
    'react/react-in-jsx-scope': 0,

    'jest/no-hooks': 0,
    'jest/prefer-called-with': 0,
    'jest/require-top-level-describe': 1,
    'jest/no-truthy-falsy': 0,
    'jest/require-to-throw-message': 0,
    'jest/lowercase-name': 0,
    'jest/prefer-inline-snapshots': 0
  }
};
