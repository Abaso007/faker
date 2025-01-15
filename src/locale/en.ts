/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';

/**
 * The faker instance for the `en` locale.
 *
 * - Language: English
 * - Endonym: English
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [en, base],
});
