module.exports = {
  '**/*.{md,json}': ['prettier --write'],
  'src/**/*.{ts,tsx}': [
    () => 'tsc -p tsconfig.json --noEmit',
    () => 'npm run lint'
  ]
};
