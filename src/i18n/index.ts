import { type Locale } from './config';
import { type Dictionary, en } from './en';
import { zh } from './zh';

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Fill `{name}` placeholders: t('Hi {who}', { who: 'you' }) -> 'Hi you'. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

export type { Dictionary };
export * from './config';
