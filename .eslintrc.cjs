module.exports = {
  extends: [
    'eslint:recommended',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier',
    'plugin:@angular-eslint/template/process-inline-templates',
    'plugin:@angular-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
