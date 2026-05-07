import type { RouteLocale } from '../config';

export type HowToBuyCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  /** Use `{ml}` for spreadsheet catalogue URL. */
  introHtml: string;
  badge: string;
  officialFaqHrefLabel: string;
  /** `{count}` = number of excerpts. */
  officialMetaHtml: string;
  sourcePageLabel: string;
};

const en: HowToBuyCopy = {
  title: 'How to buy with an Oopbuy Spreadsheet — paste links, QC & shipping | oopbuyai.com',
  description:
    'Step-by-step Oopbuy Spreadsheet tutorial: open category shortcuts, copy stable Taobao / Weidian / 1688 listing URLs, paste into Oopbuy, read warehouse QC photos, and approve parcel shipping—independent guide, not checkout.',
  keywords:
    'how to use Oopbuy spreadsheet, Oopbuy spreadsheet tutorial, paste product link Oopbuy, Oopbuy spreadsheet QC photos, Taobao agent spreadsheet steps, Weidian spreadsheet Oopbuy guide, shopping agent spreadsheet how to',
  backHomeLabel: '← Back to home',
  h1: 'How to buy',
  introHtml: `This page summarizes a typical <strong>Oopbuy spreadsheet</strong> loop: discover links via <a href="{ml}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet</a> category entry points, then complete purchase and QC on <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a>. Exact button names in your agent UI can change—always follow what you see in your logged-in account.`,
  badge: 'Official excerpts · Oopbuy',
  officialFaqHrefLabel: 'Oopbuy FAQ hub ↗',
  officialMetaHtml: `Below are archived Oopbuy notices/FAQs (collapsed by default—click a title to expand). If anything disagrees with the <a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">live Oopbuy FAQ</a>, trust the website. <strong>{count}</strong> excerpts on file.`,
  sourcePageLabel: 'Original page ↗',
};

const de: HowToBuyCopy = {
  title: 'Mit Oopbuy Spreadsheet kaufen — Links, QC & Versand | oopbuyai.com',
  description:
    'Kurzanleitung: Kategorie-Shortcuts, stabile Taobao/Weidian/1688-URLs kopieren, in Oopbuy einfügen, Lager-QC prüfen, internationalen Versand freigeben — redaktionell, kein Checkout.',
  keywords:
    'Oopbuy Spreadsheet Anleitung, Link einfügen Oopbuy, QC Fotos Agent, Taobao Weidian Tutorial, Einkauf Agent China',
  backHomeLabel: '← Zur Startseite',
  h1: 'So kaufen',
  introHtml: `Hier der typische <strong>Oopbuy-Spreadsheet</strong>-Ablauf: Links über <a href="{ml}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet</a>-Kategorien finden, dann Kauf und QC auf <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a> abschließen. Button-Bezeichnungen in der Agent-Oberfläche können wechseln — orientiere dich am eingeloggten Konto.`,
  badge: 'Offizielle Auszüge · Oopbuy',
  officialFaqHrefLabel: 'Oopbuy FAQ · offizielle Seite ↗',
  officialMetaHtml: `Archivierte Oopbuy-Hinweise/FAQs (eingeklappt; Titel anklicken). Bei Abweichungen gilt die <a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">Live-FAQ auf oopbuy.com</a>. <strong>{count}</strong> Einträge.`,
  sourcePageLabel: 'Originalseite ↗',
};

const pt: HowToBuyCopy = {
  title: 'Comprar com Oopbuy Spreadsheet — links, QC e envio | oopbuyai.com',
  description:
    'Tutorial resumido: atalhos de categoria, copiar URLs Taobao/Weidian/1688, colar no Oopbuy, ver fotos QC no armazém e aprovar frete — guia editorial, sem checkout aqui.',
  keywords:
    'como usar Oopbuy spreadsheet, tutorial Oopbuy, colar link produto, QC warehouse, agente Taobao',
  backHomeLabel: '← Voltar ao início',
  h1: 'Como comprar',
  introHtml: `Fluxo típico do <strong>Oopbuy spreadsheet</strong>: descubra links pelos atalhos do <a href="{ml}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet</a> e conclua compra e QC em <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a>. Nomes de botões podem mudar — siga o que aparece na sua conta.`,
  badge: 'Excertos oficiais · Oopbuy',
  officialFaqHrefLabel: 'FAQ oficial Oopbuy ↗',
  officialMetaHtml: `Avisos/FAQs arquivados (fechados por padrão; clique no título). Em caso de divergência, prevalece a <a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">FAQ ao vivo</a>. <strong>{count}</strong> excertos.`,
  sourcePageLabel: 'Página original ↗',
};

const es: HowToBuyCopy = {
  title: 'Cómo comprar con Oopbuy Spreadsheet — enlaces, QC y envío | oopbuyai.com',
  description:
    'Tutorial breve: atajos de categoría, copiar URLs estables Taobao/Weidian/1688, pegar en Oopbuy, revisar fotos QC en almacén y aprobar envío — guía editorial, sin pago en este sitio.',
  keywords:
    'tutorial Oopbuy spreadsheet, pegar enlace Oopbuy, fotos QC agente, Taobao Weidian guía',
  backHomeLabel: '← Volver al inicio',
  h1: 'Cómo comprar',
  introHtml: `Resume el bucle típico del <strong>Oopbuy spreadsheet</strong>: descubre enlaces vía <a href="{ml}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet</a> y completa compra y QC en <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a>. Los nombres de botones pueden cambiar — sigue tu panel autenticado.`,
  badge: 'Extractos oficiales · Oopbuy',
  officialFaqHrefLabel: 'FAQ oficial Oopbuy ↗',
  officialMetaHtml: `Avisos/FAQs archivados (plegados; clic en el título). Si hay discrepancia, manda la <a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">FAQ en vivo</a>. <strong>{count}</strong> extractos.`,
  sourcePageLabel: 'Página original ↗',
};

const fr: HowToBuyCopy = {
  title: 'Comment acheter avec un Oopbuy Spreadsheet — liens, QC & livraison | oopbuyai.com',
  description:
    'Tutoriel condensé: raccourcis catégories, copier des URL marketplace stables, coller dans Oopbuy, lire le QC entrepôt, valider le colis international — rédaction seule.',
  keywords:
    'tutoriel Oopbuy spreadsheet, coller lien produit QC, étapes agent Taobao Weidian',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Comment acheter',
  introHtml: `Synthèse de la boucle <strong>Oopbuy spreadsheet</strong> : découverte via <a href="{ml}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet</a>, puis achat et QC sur <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a>. L’interface peut changer — suivez toujours votre espace connecté.`,
  badge: 'Extraits officiels · Oopbuy',
  officialFaqHrefLabel: 'FAQ Oopbuy officielle ↗',
  officialMetaHtml: `Avis/FAQ archivées (repliables; cliquez le titre). En cas de doute : <a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">FAQ en ligne Oopbuy</a>. <strong>{count}</strong> extraits.`,
  sourcePageLabel: 'Page source ↗',
};

const it: HowToBuyCopy = {
  title: 'Come acquistare con Oopbuy Spreadsheet — link, QC e spedizione | oopbuyai.com',
  description:
    'Guida sintetica: scorciatoie categoria, copia URL Taobao/Weidian/1688, incolla su Oopbuy, controlla QC magazzino, approva spedizione internazionale — solo editoriale.',
  keywords:
    'guida Oopbuy spreadsheet, incolla link prodotto, foto QC agent, tutorial Taobao Weidian',
  backHomeLabel: '← Torna alla home',
  h1: 'Come acquistare',
  introHtml: `Schema del ciclo <strong>Oopbuy spreadsheet</strong>: scopri i link dagli accessi <a href="{ml}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet</a>, poi completa acquisto e QC su <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a>. I pulsanti possono cambiare — segui ciò che vedi nel profilo.`,
  badge: 'Estratti ufficiali · Oopbuy',
  officialFaqHrefLabel: 'FAQ ufficiali Oopbuy ↗',
  officialMetaHtml: `Avvisi/FAQ archiviati (chiusi; clic sul titolo). In caso di contrasto vince la <a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">FAQ live</a>. <strong>{count}</strong> estratti.`,
  sourcePageLabel: 'Pagina originale ↗',
};

const pl: HowToBuyCopy = {
  title: 'Jak kupować z Oopbuy Spreadsheet — linki, QC i wysyłka | oopbuyai.com',
  description:
    'Skrócony poradnik: skróty kategorii, kopiowanie URL Taobao/Weidian/1688, wklejenie w Oopbuy, zdjęcia QC na magazynie, akceptacja wysyłki — treść pomocnicza, bez płatności tutaj.',
  keywords:
    'poradnik Oopbuy spreadsheet, wklej link produkt QC, Taobao agent krok po kroku',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Jak kupować',
  introHtml: `Typowa pętla <strong>Oopbuy spreadsheet</strong>: odkrywanie linków przez <a href="{ml}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet</a>, potem zakup i QC na <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a>. Nazwy przycisków mogą się zmieniać — liczy się widok po zalogowaniu.`,
  badge: 'Oficjalne fragmenty · Oopbuy',
  officialFaqHrefLabel: 'Oficjalne FAQ Oopbuy ↗',
  officialMetaHtml: `Zarchiwizowane ogłoszenia/FAQ (domyślnie zwinięte; rozwiń nagłówek). Rozbieżności rozstrzyga <a href="https://oopbuy.com/issueView" target="_blank" rel="noopener noreferrer">FAQ na żywo</a>. Na liście: <strong>{count}</strong> pozycji.`,
  sourcePageLabel: 'Strona źródłowa ↗',
};

export const HOW_TO_BUY_COPY: Record<RouteLocale, HowToBuyCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getHowToBuyCopy(locale: string): HowToBuyCopy {
  const lc = locale as RouteLocale;
  return HOW_TO_BUY_COPY[lc] ?? en;
}

export function hydrateHowToBuyCopy(raw: HowToBuyCopy, mlHref: string, count: number): HowToBuyCopy {
  return {
    ...raw,
    officialMetaHtml: raw.officialMetaHtml.replaceAll('{count}', String(count)),
    introHtml: raw.introHtml.replace(/\{ml\}/g, mlHref),
  };
}
