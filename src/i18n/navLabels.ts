/** Header nav pills (shown on embedded + full header). Categories dropdown keeps English SKU labels intentionally. */

import type { RouteLocale } from './config';

const navTexts: Record<
  RouteLocale,
  { howToBuy: string; news: string; buyerShares: string; spreadsheet: string; categories: string }
> = {
  en: {
    howToBuy: 'How to buy',
    news: 'News',
    buyerShares: 'Buyer shares',
    spreadsheet: 'Spreadsheet',
    categories: 'Categories',
  },
  de: {
    howToBuy: 'So kaufen',
    news: 'News',
    buyerShares: 'Buyer‑Posts',
    spreadsheet: 'Spreadsheet',
    categories: 'Kategorien',
  },
  pt: {
    howToBuy: 'Como comprar',
    news: 'Notícias',
    buyerShares: 'Depoimentos',
    spreadsheet: 'Planilha',
    categories: 'Categorias',
  },
  es: {
    howToBuy: 'Cómo comprar',
    news: 'Noticias',
    buyerShares: 'Opiniones',
    spreadsheet: 'Hoja',
    categories: 'Categorías',
  },
  fr: {
    howToBuy: 'Comment acheter',
    news: 'Actus',
    buyerShares: 'Retours acheteurs',
    spreadsheet: 'Feuille',
    categories: 'Catégories',
  },
  it: {
    howToBuy: 'Come acquistare',
    news: 'Novità',
    buyerShares: 'Esperienze',
    spreadsheet: 'Foglio',
    categories: 'Categorie',
  },
  pl: {
    howToBuy: 'Jak kupować',
    news: 'Aktualności',
    buyerShares: 'Wpisy',
    spreadsheet: 'Arkusz',
    categories: 'Kategorie',
  },
};

export function headerNavTexts(locale: string) {
  const lc = locale as RouteLocale;
  return navTexts[lc] ?? navTexts.en;
}
