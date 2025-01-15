/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import ur from '../locales/ur';

/**
 * The faker instance for the `ur` locale.
 *
 * - Language: Urdu
 * - Endonym: اردو
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `ur`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [ur, en, base],
});
