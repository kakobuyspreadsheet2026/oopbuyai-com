import type { RouteLocale } from '../config';

export type BuyerSharesGalleryUi = {
  buyerKind: string;
  shippingKind: string;
  defaultBase: string;
  /** Placeholders: `{kind}`, `{title}`, `{i}`, `{n}` (1-based index). */
  altPattern: string;
};

export type BuyerSharesCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  /** Embed `<a href="{newsUrl}" …>` and `<a href="{howToUrl}" …>` (anchor copy localized per locale). */
  leadHtml: string;
  /** Usually `<a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">… localized label …</a>`. */
  disclaimerHtml: string;
  gallery: BuyerSharesGalleryUi;
};

const en: BuyerSharesCopy = {
  title: 'Oopbuy Spreadsheet Reddit hauls, QC threads & shipping notes | Buyer shares | oopbuyai.com',
  description:
    'Reddit-sourced Oopbuy Spreadsheet buyer shares (2026): English recaps of hauls, warehouse QC talk, and international transit timing for people who paste Taobao / Weidian links via the Oopbuy spreadsheet workflow—not official Oopbuy.',
  keywords:
    'Oopbuy Spreadsheet Reddit, Oopbuy spreadsheet haul, Weidian spreadsheet Oopbuy shipping, Taobao agent spreadsheet QC thread, Oopbuy spreadsheet timeline, FashionReps Oopbuy spreadsheet, paste link Oopbuy community',
  backHomeLabel: '← Back to home',
  h1: 'Buyer shares',
  leadHtml: `Every thread highlighted here comes from <strong>Reddit buyers who shop the Oopbuy Spreadsheet workflow</strong>—they pull product links from the spreadsheet-style catalogue and <strong>check out on Oopbuy</strong>, then share haul shots, QC talk, packaging photos, or <strong>international transit timing</strong> back in the community. Cards lay out <strong>two per row</strong> on wider screens (single column on phones). General haul commentary is grouped first; timelines that emphasize <strong>transit windows</strong> sit in the blue section below. Official platform excerpts live under <a href="{newsUrl}">News &amp; guides</a>; workflow steps under <a href="{howToUrl}">How to buy</a>.`,
  disclaimerHtml: `<strong>Disclaimer:</strong> User-generated Reddit content only—not vetted endorsements by this site or Oopbuy. Threads age quickly and lanes change. Ordering and payments remain between you and <a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>; verify pricing, QC, and policy in your own account.`,
  gallery: {
    buyerKind: 'buyer haul',
    shippingKind: 'shipping timeline',
    defaultBase: 'Oopbuy Spreadsheet Reddit share',
    altPattern: 'Oopbuy Spreadsheet Reddit {kind} — {title} — photo {i} of {n}',
  },
};

const de: BuyerSharesCopy = {
  title:
    'Oopbuy Spreadsheet auf Reddit — Hauls, QC und Versandgeschichten | Käufer-Stimmen | oopbuyai.com',
  description:
    'Reddit-Erfahrungsberichte zum Oopbuy-Spreadsheet-Workflow (2026): Haul-Fotos, Lager-QC und internationale Transitzeiten — redaktionell zusammengefasst, keine offiziellen Oopbuy-Inhalte.',
  keywords:
    'Oopbuy Spreadsheet Reddit, Haul Agent China, QC Fotos Warehouse, Versandtimeline Oopbuy, Taobao Link paste',
  backHomeLabel: '← Zur Startseite',
  h1: 'Käufer-Stimmen',
  leadHtml: `Die verlinkten Fäden stammen von <strong>Reddit-Nutzern, die den Oopbuy-Spreadsheet-Workflow nutzen</strong>: Links aus dem Spreadsheet-Katalog, Checkout auf <strong>Oopbuy</strong>, danach Fotos zur Qualität, Verpackung oder <strong>Versanddauer</strong>. Auf Desktop stehen zwei Karten pro Zeile (auf dem Handy nur eine Spalte). Oberer Block = Haul-/QC-Gespräche; blauer Bereich darunter legt den Schwerpunkt auf <strong>Transit-Fenster</strong>. Offizielle Plattform-Auszüge: <a href="{newsUrl}">News &amp; Anleitungen</a>; Ablauf: <a href="{howToUrl}">So kaufen</a>.`,
  disclaimerHtml: `<strong>Hinweis:</strong> Nur Reddit-Ugc — keine Bewertung durch diese Site oder Oopbuy. Themen sind kurzlebig und Routen können wechseln. Bestellung und Zahlung bleiben zwischen dir und <a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>; prüfe immer Preise, QC und Policies im eingeloggten Konto.`,
  gallery: {
    buyerKind: 'Haul/QC-Faden',
    shippingKind: 'Versandtimeline',
    defaultBase: 'Oopbuy Spreadsheet Reddit',
    altPattern: 'Oopbuy Spreadsheet Reddit {kind} — {title} — Foto {i} von {n}',
  },
};

const pt: BuyerSharesCopy = {
  title:
    'Reddit sobre Oopbuy Spreadsheet — hauls, QC e linhas do tempo | Voz dos compradores | oopbuyai.com',
  description:
    'Resumos de discussões Reddit (2026) para quem usa o fluxo spreadsheet → colar links no Oopbuy: fotos de armazém, timelines de envio e comentários de comunidade — não é conteúdo oficial Oopbuy.',
  keywords:
    'Oopbuy spreadsheet Reddit, haul agente QC, fotos warehouse, envio internacional spreadsheet',
  backHomeLabel: '← Voltar ao início',
  h1: 'Voz dos compradores',
  leadHtml: `Os tópicos aqui são de <strong>compradores Reddit no fluxo Oopbuy Spreadsheet</strong>: descobrir links pelo catálogo estilo spreadsheet, <strong>pagar no Oopbuy</strong> e voltar ao Reddit com fotos do haul, QC, embalagem ou <strong>prazos de trânsito</strong>. No desktop ficam dois cartões por linha; no celular uma coluna só. Primeiro blocão = haul/QC geral; a faixa azul embaixo enfatiza <strong>linhas do tempo</strong>. Trechos oficiais em <a href="{newsUrl}">Notícias &amp; guias</a>; passo a passo em <a href="{howToUrl}">Como comprar</a>.`,
  disclaimerHtml: `<strong>Aviso:</strong> Apenas conteúdo Reddit — não é endosso do site nem da Oopbuy. Threads envelhecem rápido. Pedidos ficam só entre você e <a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>; confira sempre preços e políticas no painel.`,
  gallery: {
    buyerKind: 'haul/QC',
    shippingKind: 'linha do tempo',
    defaultBase: 'Post Reddit · Oopbuy Spreadsheet',
    altPattern: 'Reddit · Oopbuy Spreadsheet — {kind} — {title} — foto {i} de {n}',
  },
};

const es: BuyerSharesCopy = {
  title:
    'Reddit sobre Oopbuy Spreadsheet — hauls, QC y transitos | Comunidad | oopbuyai.com',
  description:
    'Resúmenes (2026) de hilos Reddit para quien pega enlaces desde el spreadsheet de Oopbuy: fotos de almacén, tiempos de envío internacional — informativos, sin ser contenido oficial Oopbuy.',
  keywords:
    'Oopbuy spreadsheet Reddit, haul QC almacén, envío Taobao spreadsheet, comunidad FashionReps',
  backHomeLabel: '← Volver al inicio',
  h1: 'Historias de compradores',
  leadHtml: `Los hilos enlazados vienen de <strong>usuarios Reddit en el flujo Oopbuy Spreadsheet</strong>: buscan enlaces del catálogo, <strong>compran en Oopbuy</strong> y comparten fotos del haul/QC/embalaje o <strong>franjas de tránsito</strong>. En pantallas grandes, dos fichas por fila; en móvil una columna. Arriba: comentarios de haul/QC general; zona azul debajo para <strong>líneas de tiempo</strong> de envío. Extractos de plataforma en <a href="{newsUrl}">Noticias &amp; guías</a>; cómo hacerlo en <a href="{howToUrl}">Cómo comprar</a>.`,
  disclaimerHtml: `<strong>Descargo:</strong> Solo UGC Reddit; no es revisión oficial. Los hilos cambian; el pedido y el pago quedan siempre entre tú y <a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>. Verifica políticas en tu cuenta.`,
  gallery: {
    buyerKind: 'haul QC',
    shippingKind: 'tránsito',
    defaultBase: 'compartición Reddit · Oopbuy Spreadsheet',
    altPattern: 'Reddit Oopbuy Spreadsheet — {kind} — {title} — foto {i} de {n}',
  },
};

const fr: BuyerSharesCopy = {
  title:
    'Reddit · Oopbuy Spreadsheet — hauls, QC & délais livraison | Retours acheteurs | oopbuyai.com',
  description:
    'Synthèses 2026 de fils Reddit : workflow spreadsheet + checkout Oopbuy, photos QC/entrepôt et délais d’acheminement — page éditoriale, pas de contenu Oopbuy officiel.',
  keywords:
    'Oopbuy spreadsheet Reddit, haul QC entrepôt, fret international agent FashionReps',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Retours acheteurs',
  leadHtml: `Les fils listés sont de <strong>membres Reddit qui suivent la boucle Oopbuy Spreadsheet</strong>: liens issus du catalogue type tableur puis <strong>commande chez Oopbuy</strong>, puis retours sur haul, QC/emballages ou <strong>fenêtres de transit international</strong>. En grand écran deux cartes par rangée ; sur téléphone une seule colonne. Le bloc général présente haul/QC ; la bande bleue met l’accent sur les <strong>chronologies d’expédition</strong>. Extraits officiels : <a href="{newsUrl}">Actualités &amp; guides</a> ; méthodo : <a href="{howToUrl}">Comment acheter</a>.`,
  disclaimerHtml: `<strong>Avertissement :</strong> uniquement du contenu Reddit — pas d’aval par ce site ou Oopbuy. Les fils vieillissent vite. Achats réglés directement avec <a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> ; vérifiez prix et politiques sur votre tableau de bord.`,
  gallery: {
    buyerKind: 'haul / QC',
    shippingKind: 'délai d’expédition',
    defaultBase: 'partage Reddit · Oopbuy Spreadsheet',
    altPattern: 'Reddit Oopbuy Spreadsheet — {kind} — {title} — photo {i} sur {n}',
  },
};

const it: BuyerSharesCopy = {
  title:
    'Reddit su Oopbuy Spreadsheet — haul, QC e tempi di spedizione | Voci | oopbuyai.com',
  description:
    'Riepiloghi 2026 da thread Reddit sul flusso spreadsheet → acquisto su Oopbuy: foto QC a magazzino e tempi internazionali — pagina editoriale, non comunicazione ufficiale.',
  keywords:
    'Oopbuy spreadsheet Reddit, haul QC magazzino, spedizioni agent FashionReps',
  backHomeLabel: '← Torna alla home',
  h1: 'Voci dagli acquistatori',
  leadHtml: `I thread puntati sono di <strong>acquirenti Reddit che usano il flusso Oopbuy Spreadsheet</strong>: link dal catalogo tipo foglio di calcolo, <strong>pagamento su Oopbuy</strong>, poi post con foto haul/QC/imballi o <strong>finestre di transito internazionale</strong>. Sul desktop ci sono due schede per riga sul mobile una colonna singola. In alto contenuti più generici sulla qualità/acquisti; la fascia blu sotto evidenzia le <strong>cronologie di spedizione</strong>. Estratti dal sito: <a href="{newsUrl}">Notizie &amp; guide</a>; tutorial: <a href="{howToUrl}">Come acquistare</a>.`,
  disclaimerHtml: `<strong>Dichiarazione:</strong> contenuti Reddit degli utenti — nessuna validazione ufficiale. I discussioni sono effimere e le rotte cambiano. Ordini e pagamenti sono solo fra te e <a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>; controlla prezzi/QC/policy nel profilo.`,
  gallery: {
    buyerKind: 'haul QC',
    shippingKind: 'timeline spedizione',
    defaultBase: 'share Reddit · Oopbuy Spreadsheet',
    altPattern: 'Reddit Oopbuy Spreadsheet — {kind} — {title} — foto {i} di {n}',
  },
};

const pl: BuyerSharesCopy = {
  title:
    'Reddit · Oopbuy Spreadsheet — haul/QC/czasy wysyłki | Głosy kupujących | oopbuyai.com',
  description:
    'Skróty wątków Reddit (2026) dla ścieżki spreadsheet → zakup przez Oopbuy: zdjęcia QC po drodze do magazynu i realizacja przesyłek — materiał pomocniczy, bez oficjalnych treści Oopbuy.',
  keywords:
    'Oopbuy spreadsheet Reddit, QC magazyn, haul Taobao spreadsheet, koszty shipping',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Głosy kupujących',
  leadHtml: `Wszystkie wątki to <strong>Reddit dla przepływu Oopbuy Spreadsheet</strong>: odkrycie linków w katalogu, <strong>płatność na Oopbuy</strong>, potem fotki haul/QC lub <strong>kalendarze przesyłek międzynarodowych</strong>. Desktop: dwie karty w rzędzie; mobilnie jedna kolumna. U góry ogólne uwagi jakościowe niżej niebiesko — <strong>okna tranzytu</strong>. Oficjalne fragmenty: <a href="{newsUrl}">Aktualności i poradniki</a>; kolejność kroków: <a href="{howToUrl}">Jak kupować</a>.`,
  disclaimerHtml: `<strong>Uwaga:</strong> wyłącznie treści Reddit — bez gwarancji tej witryny czy Oopbuy. Zamówienie i przelew zawsze przez <a href="{oopbuyUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>; sprawdź ceny i polityki online.`,
  gallery: {
    buyerKind: 'haul / QC',
    shippingKind: 'harmonogram wysyłki',
    defaultBase: 'post Reddit · Oopbuy Spreadsheet',
    altPattern: 'Reddit Oopbuy Spreadsheet — {kind} — {title} — zdjęcie {i} z {n}',
  },
};

export const BUYER_SHARES_COPY: Record<RouteLocale, BuyerSharesCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getBuyerSharesCopy(lc: string): BuyerSharesCopy {
  const locale = lc as RouteLocale;
  return BUYER_SHARES_COPY[locale] ?? en;
}

const OOPBUY_HOME = 'https://oopbuy.com/';

export function hydrateBuyerSharesCopy(
  raw: BuyerSharesCopy,
  urls: { newsUrl: string; howToUrl: string; oopbuyUrl?: string },
): BuyerSharesCopy {
  const oop = urls.oopbuyUrl ?? OOPBUY_HOME;
  return {
    ...raw,
    leadHtml: raw.leadHtml
      .replace(/\{newsUrl\}/g, urls.newsUrl)
      .replace(/\{howToUrl\}/g, urls.howToUrl),
    disclaimerHtml: raw.disclaimerHtml.replace(/\{oopbuyUrl\}/g, oop),
  };
}
