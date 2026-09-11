import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import cypress from 'eslint-plugin-cypress';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // 1. Base JavaScript & TypeScript Recommended Rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 2. Global Ignores (Expanded with industry best practices)
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'playwright-report/**',
      'test-results/**',
      'blob-report/**',
      'cypress/downloads/**',
      'cypress/screenshots/**',
      'cypress/videos/**',
      'coverage/**',
    ],
  },

  // 3. Cypress Automation Rules (Applied ONLY to Cypress folder)
  {
    files: ['cypress/**/*.js', 'cypress/**/*.ts'],
    extends: [cypress.configs.recommended],
    rules: {
      'cypress/no-unnecessary-waiting': 'warn', // Flags hardcoded cy.wait() which causes flake
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn', // Discourages { force: true } as it masks real UI bugs
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // 4. Playwright Automation Rules (Applied ONLY to Playwright/Tests folder)
  {
    files: ['tests/**/*.js', 'tests/**/*.ts', 'playwright/**/*.js', 'playwright/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      'playwright/no-wait-for-timeout': 'warn', // Flags page.waitForTimeout()
      'playwright/expect-expect': 'error', // Ensures every test actually contains an assertion
      'playwright/no-focused-test': 'error', // Prevents accidentally committing test.only()
      'playwright/no-skipped-test': 'warn', // Keeps track of test.skip() so they aren't forgotten
      'playwright/require-soft-assertions': 'off',
      'playwright/no-conditional-in-test': 'warn', // Flags if/else blocks in tests (tests should be deterministic)
    },
  },

  // 5. Prettier Integration (Must be last to disable conflicting formatting rules)
  eslintConfigPrettier
);
