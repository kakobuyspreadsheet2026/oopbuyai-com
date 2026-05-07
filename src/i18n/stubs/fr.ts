import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const fr = {
  shoes: { label: 'Chaussures', alt: 'Oopbuy Spreadsheet chaussures — trouvailles Weidian/Taobao QC si visibles' },
  't-shirts': { label: 'T-shirts', alt: 'Oopbuy Spreadsheet t-shirts — textiles streetwear liens profonds' },
  pants: { label: 'Pantalons', alt: 'Oopbuy Spreadsheet pantalons/shorts — joggers été' },
  accessories: { label: 'Accessoires', alt: 'Oopbuy Spreadsheet accessoires — ceintures bijoux' },
  bags: { label: 'Sacs', alt: 'Oopbuy Spreadsheet sacs — backpacks liens agent' },
  electronics: { label: 'Électronique', alt: 'Oopbuy Spreadsheet tech — gadgets prix contexte' },
  jackets: { label: 'Vestes', alt: 'Oopbuy Spreadsheet vestes — shells & manteaux' },
  hoodies: { label: 'Hoodies', alt: 'Oopbuy Spreadsheet sweats — crews & maille' },
  headwear: { label: 'Casquettes', alt: 'Oopbuy Spreadsheet headwear — bonnets casquettes' },
  jersey: { label: 'Jerseys', alt: 'Oopbuy Spreadsheet maillots sans manches' },
  perfume: { label: 'Parfum', alt: 'Oopbuy Spreadsheet parfums — parcours beauté' },
  other: { label: 'Autres', alt: 'Oopbuy Spreadsheet toutes catégories' },
} as const;

export const frHome: HomeStubContent = {
  title:
    'Oopbuy Spreadsheet Hub 2026 — Trouvailles Weidian, Taobao & 1688 + guide QC | oopbuyai.com',
  description:
    'Hub indépendant (2026) : raccourcis catalogue Weidian/Taobao/1688, collage de liens Oopbuy, photos QC entrepôt — guide éditorial sans encaissement ici.',
  keywords:
    'Oopbuy Spreadsheet, Weidian spreadsheet FR, agent Taobao QC, coller lien Oopbuy, 1688 spreadsheet',
  webPageName: 'Hub Oopbuy Spreadsheet 2026 (oopbuyai.com)',
  webPageKeywords: ['Oopbuy Spreadsheet', 'Weidian', 'Taobao', 'QC FashionReps', 'agent Chine'],
  hero: {
    h1: 'Hub Oopbuy Spreadsheet 2026',
    tagline: 'Le spreadsheet Discord expliqué avant de payer la ligne',
    kicker: '2026 · Weidian · Taobao · 1688 · QC entrepôt',
    body:
      'Rappels pratiques pour acheteurs européens : copier des URL produit stables, éviter les stubs mobile, vérifier volumétrie avant de valider un colis international. Aucun paiement n’est traité sur ce domaine — votre compte agent reste la source de vérité.',
    ctaBrowse: 'Parcourir l’Oopbuy Spreadsheet →',
    ctaLogin: 'Se connecter sur Oopbuy',
    heroPlaneAlt:
      'Illustration promo type Oopbuy (avion) décor hero hub spreadsheet — oopbuyai.com',
    searchAria: 'Recherche catalogue Oopbuy Spreadsheet',
    searchPlaceholder: 'Chercher produits, marques, styles…',
    searchByImage: 'Recherche par image',
    searchSubmit: 'Rechercher',
    searchByImageAria: 'Ouvre MaisonLooks (nouvel onglet) pour recherche image',
  },
  categoriesAria: 'Raccourcis catégories vers MaisonLooks',
  exploreTitle: 'Explorer les catégories du spreadsheet',
  redditAria: 'Communauté r/FashionReps sur Reddit (nouvel onglet)',
  redditSnooAlt: 'Snoo Reddit — discussions haul/QC agents',
  exploreKickerLead: 'Cliquez une catégorie, puis collez le lien dans ',
  exploreKickerTrail: '',
  exploreIntro:
    'Les icônes ouvrent une navigation type feuille dans un nouvel onglet ; copiez l’URL desktop complète du produit avant de lancer un achat domestique vers l’entrepôt.',
  exploreSub: 'Liens tiers — vérifiez annonces & QC vous-même.',
  introH2: 'Liens nets, budget clair, meilleure lecture du QC',
  introP:
    'La section numérotée rappelle étape par étape découvertes, collage, verrouillage variantes, contrôle photos entrepôt puis choix transport international.',
  guideH2: 'Spreadsheet Oopbuy & shopping agent — aide-mémoire 2026',
  guideIntro:
    'oopbuyai.com est un hub de raccourcis indépendant. Les conditions juridiques officielles vivent sur Oopbuy et les marketplaces d’origine.',
  sections: [
    { h3: '1. Qu’est-ce qu’un spreadsheet ?', paragraphs: ['Table partagée reliant fiches produits chinoises avec notes de batch ou tailles pour accélérer le copier-coller vers un agent.'] },
    { h3: '2. Officiel ?', paragraphs: ['Non automatiquement ; lisez FAQs Oopbuy + douanes locales pour les sujets sensibles.'] },
    { h3: '3. Parcours jusqu’au QC', paragraphs: ['Fiche → URL → Oopbuy → variantes payées → livraison domestique → QC → fret international.'] },
    { h3: '4. Intérêt agent', paragraphs: ['Visibilité paiement, consolidation, litiges format ticket plutôt que chat aléatoire.'] },
    { h3: '5. Robustesse des liens', paragraphs: ['URLs profondes éviter les “shop home” sans SKU actif.'] },
    { h3: '6. Lecture QC', paragraphs: ['Comparer coutures & teintes sous lumière neutre entrepôt contre visuels marketing trop retouchés.'] },
    { h3: '7. Cellule ≠ prix final', paragraphs: ['Ajoutez frais service, packing, assurance, conversion et poids volumétrique.'] },
    { h3: '8. Confiance vendeur', paragraphs: ['Combinez avis marketplace + photos récentes communauté.'] },
    { h3: '9. Pièges courants', paragraphs: ['QC sur mobile zoomé insuffisamment, taille EU seule sans cm, URL image hotlink.'] },
    { h3: '10. Feuille vivante', paragraphs: ['Notez date vérification lien, archivez les lignes mortes.'] },
  ],
  ctaHeading: 'Accès direct au dossier spreadsheet',
  ctaIntro: 'Même espace MaisonLooks que les raccourcis ; basculez vers login Oopbuy quand vous collez des URL.',
  ctaFooterNote: 'Plateformes externes — relecture obligatoire avant expédition.',
  sheetLinkLabel: 'Oopbuy Spreadsheet → tableurs agent',
  categoryPills: pillsFor(fr),
  footer: {
    disclaimerLabel: 'Avis',
    disclaimerHtml:
      'oopbuyai.com est un agrégateur éditorial de liens, pas une boutique MaisonLooks/Oopbuy. Vérifiez QC & CGU officielles sur chaque plateforme.',
    copyrightLine:
      '© 2026 oopbuyai.com · repères acheteurs agents — paiements ailleurs.',
  },
};
