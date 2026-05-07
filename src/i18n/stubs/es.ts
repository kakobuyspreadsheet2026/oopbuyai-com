import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const es = {
  shoes: { label: 'Calzado', alt: 'Oopbuy Spreadsheet zapatillas — hallazgos Weidian/Taobao con QC si el anuncio lo muestra' },
  't-shirts': { label: 'Camisetas', alt: 'Oopbuy Spreadsheet camisetas — tops streetwear con URLs profundas' },
  pants: { label: 'Pantalones', alt: 'Oopbuy Spreadsheet pantalones/shorts — joggers y shorts' },
  accessories: { label: 'Accesorios', alt: 'Oopbuy Spreadsheet accesorios — cinturones y pequeños añadidos' },
  bags: { label: 'Bolsos', alt: 'Oopbuy Spreadsheet mochilas y bolsas — enlaces MaisonLooks para pegar en Oopbuy' },
  electronics: { label: 'Electrónica', alt: 'Oopbuy Spreadsheet electrónica — gadgets con contexto de precio' },
  jackets: { label: 'Chaquetas', alt: 'Oopbuy Spreadsheet chaquetas — outerwear estable' },
  hoodies: { label: 'Sudaderas', alt: 'Oopbuy Spreadsheet sudaderas y jerseys de punto' },
  headwear: { label: 'Gorras', alt: 'Oopbuy Spreadsheet gorros y gorras streetwear' },
  jersey: { label: 'Camisetas tir.', alt: 'Oopbuy Spreadsheet jerseys/regatas deportivas' },
  perfume: { label: 'Perfume', alt: 'Oopbuy Spreadsheet perfumes — rutas MaisonLooks beauty' },
  other: { label: 'Ver más', alt: 'Oopbuy Spreadsheet todas las categorías mezcladas' },
} as const;

export const esHome: HomeStubContent = {
  title:
    'Oopbuy Spreadsheet Hub 2026 — Hallazgos Weidian, Taobao y 1688 + guía QC | oopbuyai.com',
  description:
    'Hub independiente (2026): atajos tipo spreadsheet para Weidian/Taobao/1688, pegar enlaces en Oopbuy, fotos QC en almacén y recordatorios sobre flete editorial — sin checkout propio.',
  keywords:
    'Oopbuy Spreadsheet, Weidian spreadsheet español, Taobao agente, QC fotos warehouse, pegar URL Oopbuy, 1688',
  webPageName: 'Hub Oopbuy Spreadsheet 2026 (oopbuyai.com)',
  webPageKeywords: ['Oopbuy Spreadsheet', 'Weidian', 'Taobao', 'QC', 'haul FashionReps', 'spreadsheet agente'],
  hero: {
    h1: 'Hub Oopbuy Spreadsheet 2026',
    tagline: 'La hoja comunidad convertida en ruta práctica',
    kicker: '2026 · Weidian · Taobao · 1688 · QC warehouse',
    body:
      'Accesos rápidos a categorías MaisonLooks manteniendo vocabulario habitual de Discord/Reddit. Usa estos botones sólo como descubrimiento: la compra, el pago del envío internacional y el soporte oficial siguen dentro de tu cuenta agent.',
    ctaBrowse: 'Abrir el Oopbuy Spreadsheet →',
    ctaLogin: 'Inicia sesión en Oopbuy',
    heroPlaneAlt:
      'Ilustración tipo Oopbuy con avión para el hero editorial del hub Spreadsheet — oopbuyai.com',
    searchAria: 'Buscar en el catálogo Oopbuy Spreadsheet',
    searchPlaceholder: 'Busca productos, marcas o estilos…',
    searchByImage: 'Buscar por imagen',
    searchSubmit: 'Buscar',
    searchByImageAria: 'Búsqueda por imagen abre MaisonLooks en pestaña nueva',
  },
  categoriesAria: 'Navegación por categorías hacia MaisonLooks',
  exploreTitle: 'Explora categorías del spreadsheet',
  redditAria: 'Comunidad r/FashionReps en Reddit (nueva pestaña)',
  redditSnooAlt: 'Snoo de Reddit FashionReps para debates haul/QC agents',
  exploreKickerLead: 'Explora íconos y luego pega el enlace en ',
  exploreKickerTrail: ' con tu flujo de agent habitual',
  exploreIntro:
    'Abre fichas completas antes de copiar el enlace. Evita páginas de tienda sin selector de SKU para no bloquearte al pagar tasas volumétricas inesperadas.',
  exploreSub: 'Enlaces de terceros — revisión manual obligatoria.',
  introH2: 'Enlaces saneados + filtros prácticos = menos sorpresa en QC',
  introP:
    'El bloque siguiente resume el proceso agéntico: copiar URLs estables, fijar tallas/color, esperar foto real en warehouse, comparar antes de etiquetar DHL/FedEx/EMS.',
  guideH2: 'Spreadsheet Oopbuy y compras con agent — guía resumida 2026',
  guideIntro:
    'Este dominio sólo agrupa rutas públicas editorialmente. La regulación oficial vive siempre en panel Oopbuy y marketplaces china.',
  sections: [
    { h3: '1. Qué etiquetamos spreadsheet', paragraphs: ['Listas curatoriales con vínculos a Taobao/Weidian/1688 pensadas para repetir pedidos mediante copiar-pegar dentro del agent local.'] },
    { h3: '2. Autoridad oficial', paragraphs: ['FAQ legales, devoluciones o incautaciones no están resumidas aquí completas; consultar documentación del agent antes de cargar fondos.'] },
    { h3: '3. Timeline compra warehouse', paragraphs: ['Detalle SKU → pegar URL → orden doméstico al hub → foto QC obligatoria → pago courier internacional.'] },
    { h3: '4. ¿Por agente?', paragraphs: ['Ventana única fotografía + ticketing + consolidación domestica; pero aduanas españolas/US siguen tus normas país.'] },
    { h3: '5. Robustez enlaces', paragraphs: ['Preferir páginas con variantes clicables vigentes anotadas en fecha.'] },
    { h3: '6. Qué revisar QC', paragraphs: ['Parches, tonalidad cordones, marca interna lengüeta contra capturas marketing.'] },
    { h3: '7. Coste landed', paragraphs: ['Cel spreadsheet ≠ final: sumar seguros, volumen caja grande y fee servicio línea económica.'] },
    { h3: '8. Sellers', paragraphs: ['Confirma reputación dentro del marketplace antes de extrapolar Discord GL antiguo.'] },
    { h3: '9. Fallos repetidos', paragraphs: ['URLs acortadas, tallas sólo EU sin tabla y aprobar foto borrosa síndrome “ya quiero casa”.'] },
    { h3: '10. Ciclo vida hoja', paragraphs: ['Color code filas dudosas + recheck trimestral de URLs críticas.'] },
  ],
  ctaHeading: 'Directorio spreadsheet enlazado',
  ctaIntro: 'Equivalente MaisonLooks mencionados arriba; combine con login Oopbuy al pegar SKU.',
  ctaFooterNote: 'Validar etiquetas antes de despachos transfronterizos.',
  sheetLinkLabel: 'Oopbuy Spreadsheet → agent spreadsheets',
  categoryPills: pillsFor(es),
  footer: {
    disclaimerLabel: 'Descargo',
    disclaimerHtml:
      'oopbuyai.com es un centro de marcadores/editorial ajeno al checkout oficial. MaisonLooks y Oopbuy son externos; revisa tus propias capturas QC y políticas antes de autorizar cargos.',
    copyrightLine:
      '© 2026 oopbuyai.com · guía rápida; las transacciones suceden en plataforma agent.',
  },
};
