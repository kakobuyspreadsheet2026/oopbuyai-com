import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const it = {
  shoes: { label: 'Scarpe', alt: 'Oopbuy Spreadsheet scarpe — Weidian/Taobao con QC se visibile in listing' },
  't-shirts': { label: 'T‑shirt', alt: 'Oopbuy Spreadsheet t-shirt — tee streetwear con URL profonde' },
  pants: { label: 'Pantaloni', alt: 'Oopbuy Spreadsheet pantaloncini/jogger paste workflow' },
  accessories: { label: 'Accessori', alt: 'Oopbuy Spreadsheet accessori — cinture e piccoli extra' },
  bags: { label: 'Zaini/Borse', alt: 'Oopbuy Spreadsheet borse agent links' },
  electronics: { label: 'Tech', alt: 'Oopbuy Spreadsheet elettronica gadget' },
  jackets: { label: 'Giacche', alt: 'Oopbuy Spreadsheet outerwear stagionale' },
  hoodies: { label: 'Felpe', alt: 'Oopbuy Spreadsheet felpe e maglieria' },
  headwear: { label: 'Cappelli', alt: 'Oopbuy Spreadsheet berretti cappellini' },
  jersey: { label: 'Canotte', alt: 'Oopbuy Spreadsheet canotte jersey sport' },
  perfume: { label: 'Profumi', alt: 'Oopbuy Spreadsheet beauty browse' },
  other: { label: 'Altro', alt: 'Oopbuy Spreadsheet categorie miste' },
} as const;

export const itHome: HomeStubContent = {
  title:
    'Oopbuy Spreadsheet Hub 2026 — Trovati Weidian, Taobao e 1688 + guida QC | oopbuyai.com',
  description:
    'Hub editoriale autonomo (2026): scorciatoie tipo spreadsheet verso catalogue Weidian/Taobao/1688, workflow incolla‑link su Oopbuy, QC deposito internazionale — nessun checkout nativo qui.',
  keywords:
    'Oopbuy Spreadsheet, Weidian Italia, Taobao agente, QC foto magazzino, incolla URL Oopbuy, 1688',
  webPageName: 'Hub Oopbuy Spreadsheet 2026 (oopbuyai.com)',
  webPageKeywords: ['Oopbuy Spreadsheet', 'FashionReps', 'Weidian EU', 'agent shopping Cina'],
  hero: {
    h1: 'Hub Oopbuy Spreadsheet 2026',
    tagline: 'Il foglio Discord tradotto in passi sicuri',
    kicker: '2026 · Weidian · Taobao · 1688 · QC warehouse',
    body:
      'Scorciatoie MaisonLooks più glossario pragmatico sulle foto QC e sul peso volumetrico. Ricorda: questo sito non sostituisce il checkout Oopbuy; serve solo navigazione più rapida e promemoria su errori ricorrenti.',
    ctaBrowse: 'Sfoglia Oopbuy Spreadsheet →',
    ctaLogin: 'Accedi a Oopbuy',
    heroPlaneAlt:
      'Illustrazione aereo stile Oopbuy per hero Spreadsheet Hub — oopbuyai.com',
    searchAria: 'Cerca nel catalogo Oopbuy Spreadsheet',
    searchPlaceholder: 'Cerca prodotti, marchi o stili…',
    searchByImage: 'Ricerca immagine',
    searchSubmit: 'Cerca',
    searchByImageAria: 'MaisonLooks si apre in nuova scheda per image search',
  },
  categoriesAria: 'Scorciatoie categoria MaisonLooks',
  exploreTitle: 'Esplora le categorie dello spreadsheet',
  redditAria: 'Community Reddit r/FashionReps (nuova scheda)',
  redditSnooAlt: 'Snoo Reddit haul FashionReps / QC agent',
  exploreKickerLead: 'Apri un’icona (nuova scheda) poi incolla in ',
  exploreKickerTrail: ' usando il tuo workflow',
  exploreIntro:
    'Ogni card apre browsing curato fuori dal sito. Copia l’URL intero dopo aver scelto variante/size così gli addetti warehouse fotografano lo SKU giusto.',
  exploreSub: 'Link terzi — sempre verifica annunci e foto manualmente.',
  introH2: 'Link affidabili, contesto trasparente sugli QC',
  introP:
    'Le sezioni mostrano ciclo completo dall’aggiunta URL fino allo sblocco spedizioni internazionali dopo revisione foto deposito.',
  guideH2: 'Spreadsheet Oopbuy & acquisti tramite agent — mini guida 2026',
  guideIntro:
    'oopbuyai.com non incassa né gestisce reclami logistici — tutto tramite dashboard Oopbuy ufficiale.',
  sections: [
    { h3: '1. Definizione spreadsheet', paragraphs: ['Raccolte community di row con hyperlink marketplace cinesi e note sulla batch per accelerare reorder.'] },
    { h3: '2. Ufficialità', paragraphs: ['Policy doganali UE restano sugli organismi nazionali; qui solo contesto esperienziale.'] },
    { h3: '3. Timeline ordine', paragraphs: ['Articolo desktop → paste → blocchi acquisto domestico → attesa QC → scelta courier internazionale.'] },
    { h3: '4. Ruolo agent', paragraphs: ['Foto dedicate e dispute strutturate, ma volumi imballo grande possono aumentare fee.'] },
    { h3: '5. Pulizia link', paragraphs: ['Evita slug mobile incompleti; preferisci tab desktop con SKU visibile.'] },
    { h3: '6. Lettura QC', paragraphs: ['Confrontare cuciture, colorway e linguetta branding con gallery listing.'] },
    { h3: '7. Prezzo finale', paragraphs: ['Spreadsheet € spesso item-only — aggiungi assicurazione, servizio foto extra, volumi scatola oversize.'] },
    { h3: '8. Vendor', paragraphs: ['Controllare feedback seller nativo più screenshot recenti Reddit.'] },
    { h3: '9. Errori ricorrenti', paragraphs: ['Approvazioni QC veloci zoom basso; copy link immagine CDN errata; size EU senza conversione mm.'] },
    { h3: '10. Manutenzione', paragraphs: ['Aggiorna righe dopo patch sheet “2026” e cancella hyperlink 404 marcando causa.'] },
  ],
  ctaHeading: 'Directory principale Spreadsheet',
  ctaIntro: 'Stesso flusso MaisonLooks descritto in home EN; clicca poi login Oopbuy.',
  ctaFooterNote: 'Outbound terze parti — QA manuale consigliata.',
  sheetLinkLabel: 'Oopbuy Spreadsheet → agent spreadsheets',
  categoryPills: pillsFor(it),
  footer: {
    disclaimerLabel: 'Disclaimer',
    disclaimerHtml:
      'oopbuyai.com è un hub di navigazione/editoriale senza rapporto proprietario verso MaisonLooks/Oopbuy. Nessun acquisto viene finalizzato su questo dominio.',
    copyrightLine:
      '© 2026 oopbuyai.com — note operative; gli ordini vivono sulla piattaforma agent.',
  },
};
