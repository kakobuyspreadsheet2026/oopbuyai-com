import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const pl = {
  shoes: { label: 'Buty', alt: 'Oopbuy Spreadsheet buty — Weidian/Taobao z QC gdy dostępne' },
  't-shirts': { label: 'Koszulki', alt: 'Oopbuy Spreadsheet koszulki — streetwear i grafiki OS' },
  pants: { label: 'Spodnie/Szorty', alt: 'Oopbuy Spreadsheet spodnie lato/joggery' },
  accessories: { label: 'Akcesoria', alt: 'Oopbuy Spreadsheet paski biżuteria drobiazgi' },
  bags: { label: 'Torby/Plecaki', alt: 'Oopbuy Spreadsheet plecaki kopie stabilnych SKU' },
  electronics: { label: 'Elektronika', alt: 'Oopbuy Spreadsheet gadżety audio/sprzęt' },
  jackets: { label: 'Kurtki', alt: 'Oopbuy Spreadsheet kurtki sezonowe' },
  hoodies: { label: 'Bluzy', alt: 'Oopbuy Spreadsheet bluzy z kapturem sweater' },
  headwear: { label: 'Czapki', alt: 'Oopbuy Spreadsheet headwear snaps beanies' },
  jersey: { label: 'Koszulki sport', alt: 'Oopbuy Spreadsheet koszulki sportowe/regaty' },
  perfume: { label: 'Perfumy', alt: 'Oopbuy Spreadsheet kosmetyki browse' },
  other: { label: 'Więcej', alt: 'Oopbuy Spreadsheet wszystkie kategorie' },
} as const;

export const plHome: HomeStubContent = {
  title:
    'Oopbuy Spreadsheet Hub 2026 — Wyniki Weidian, Taobao i 1688 + krótki przewodnik QC | oopbuyai.com',
  description:
    'Niezależny hub (2026): skróty katalogowe jak spreadsheet dla Weidian/Taobao/1688, workflow wklejania linków do Oopbuy, QC na magazynie — bez płatności na tej domenie.',
  keywords:
    'Oopbuy Spreadsheet PL, Weidian agent, QC zdjęcia magazyn, link Taobao paste Oopbuy, 1688',
  webPageName: 'Hub Oopbuy Spreadsheet 2026 (oopbuyai.com)',
  webPageKeywords: ['Oopbuy Spreadsheet', 'FashionReps', 'Weidian UE', 'agent zakupy Chiny'],
  hero: {
    h1: 'Hub Oopbuy Spreadsheet 2026',
    tagline: 'Skrócona mapa zakupów agentem',
    kicker: '2026 · Weidian · Taobao · 1688 · QC warehouse',
    body:
      'Strona zebrała typowe ostrzeżenia polskiego/europejskiego klienta: pełny URL SKU, dokumentacja QC przed eksportem, koszt objętościowy paczek oraz brak jakiejkolwiek obsługi płatności po stronie oopbuyai.com.',
    ctaBrowse: 'Przeglądaj Oopbuy Spreadsheet →',
    ctaLogin: 'Zaloguj na Oopbuy',
    heroPlaneAlt:
      'Ilustracja samolotu w stylu Oopbuy dla hero Spreadsheet Hub — oopbuyai.com',
    searchAria: 'Szukaj w katalogu Oopbuy Spreadsheet',
    searchPlaceholder: 'Szukaj produktów, marek lub stylów…',
    searchByImage: 'Szukaj obrazem',
    searchSubmit: 'Szukaj',
    searchByImageAria: 'Wyszukiwanie obrazem — otwiera MaisonLooks w nowej karcie',
  },
  categoriesAria: 'Skróty kategori do przeglądu MaisonLooks',
  exploreTitle: 'Poznaj kategorie arkusza',
  redditAria: 'Społeczność r/FashionReps na Reddit (nowa karta)',
  redditSnooAlt: 'Snoo Reddit — dyskusje haul/QC przy agentach',
  exploreKickerLead: 'Wybierz kategorię, skopiuj link i wklej w ',
  exploreKickerTrail: ' jak zwykle',
  exploreIntro:
    'Po otwarciu listingu skopiuj pełny adres strony produktu (desktop), nie uproszczony mobilny — to zmniejsza rozjazdy batchy.',
  exploreSub: 'Linki zewnętrzne — zawsze weryfikuj ogłoszenie i QC ręcznie.',
  introH2: 'Stabilne URLe + przygotowanie do QC na magazynie',
  introP:
    'Poniżej skrócona wersja ścieżki: odkrycie, kopiuj-wklej, blokada rozmiaru/koloru, przegląd zdjęć QC, dopiero wtedy kuriery międzynarodowe.',
  guideH2: 'Spreadsheet Oopbuy i zakupy z agentem — synteza 2026',
  guideIntro:
    'oopbuyai.com to zestaw hiperłączy i treści redakcyjnej; dokumenty prawne zawsze w panelu agenta oraz u źródeł marketplaces.',
  sections: [
    { h3: '1. Czym jest spreadsheet?', paragraphs: ['Zestaw pól łączących pozycje Taobao/Weidian/1688 z notatkami community o partiach dostaw.'] },
    { h3: '2. Oficjalność', paragraphs: ['FAQ zwrotów lub confiscation zawsze w regulaminie Oopbuy oraz platform źródłowych.'] },
    { h3: '3. Proces warehouse', paragraphs: ['Pozycja → URL → Oopbuy → opłata lokalnej dostawy do huba → dostęp QC → opłata przesyłki międzynarodowej.'] },
    { h3: '4. Sens agent', paragraphs: ['Łączy logistykę chińską, zdjęcia i komunikacja ticketowa zamiast prywatnych chatów.'] },
    { h3: '5. Dobre linki', paragraphs: ['Głębokie URL SKU; unikaj stron bez wyboru wariantów.'] },
    { h3: '6. QC', paragraphs: ['Porównaj szwy i odcienie w świetle magazynu z marketingowym sliderem sellerów.'] },
    { h3: '7. Cena pola ≠ koszt kraju docelowego', paragraphs: ['Dolicz volumetryk pudła, dodatkowe zdjęcia, ubezpieczenie oraz przewalutowanie przelewu.'] },
    { h3: '8. Ocena sellerów', paragraphs: ['Łączyć komentarze Discord z ocenami na marketplace oraz świeże foty kupujących.'] },
    { h3: '9. Najczęstsze błędy', paragraphs: ['Potwierdzanie QC na małej miniaturze; używanie linków graficznych z CDN; zakładanie że spreadsheet podaje cło.'] },
    { h3: '10. Utrzymanie arkuszy', paragraphs: ['Oznakuj przeterminowane wiersze, odświeżaj URL po banach kont i rotacji SKU.'] },
  ],
  ctaHeading: 'Katalog główny spreadsheetów',
  ctaIntro: 'Ten przycisk odpala to samo środowisko MaisonLooks powiązane z hubem.',
  ctaFooterNote: 'Sieci obce — QA przed nadaniem paczki poza Chiny.',
  sheetLinkLabel: 'Oopbuy Spreadsheet → arkusze agenta',
  categoryPills: pillsFor(pl),
  footer: {
    disclaimerLabel: 'Zastrzeżenie',
    disclaimerHtml:
      'oopbuyai.com to zbiór skrótów redakcyjnych; nie przyjmuje płatności ani nie ponosi odpowiedzialności za transakcje na Oopbuy lub MaisonLooks. Linki są zewnętrzne.',
    copyrightLine:
      '© 2026 oopbuyai.com · notatki pomocnicze; finalizacja zakupów na platformach źródłowych.',
  },
};
