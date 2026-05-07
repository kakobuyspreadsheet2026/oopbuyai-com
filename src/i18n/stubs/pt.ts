import type { HomeStubContent } from '../types';
import { pillsFor } from './categoryPaths';

const pillLabels = {
  pt: {
    shoes: { label: 'Tênis/Sapatos', alt: 'Spreadsheet Oopbuy calçados — achados Weidian/Taobao com QC quando aparece' },
    't-shirts': { label: 'Camisetas', alt: 'Spreadsheet Oopbuy camisetas — tees e streetwear com links estáveis' },
    pants: { label: 'Calças/Shorts', alt: 'Spreadsheet Oopbuy calças — joggers e shorts para fluxo com agent' },
    accessories: { label: 'Acessórios', alt: 'Spreadsheet Oopbuy acessórios — cintos, bijuteria, pequenos itens' },
    bags: { label: 'Mochilas/Bolsas', alt: 'Spreadsheet Oopbuy bolsas — mochilas e transversais para colar no Oopbuy' },
    electronics: { label: 'Eletrônicos', alt: 'Spreadsheet Oopbuy eletrônicos — gadgets e áudio com contexto tipo planilha' },
    jackets: { label: 'Jaquetas', alt: 'Spreadsheet Oopbuy jaquetas — outerwear para copiar URL profunda' },
    hoodies: { label: 'Moletons', alt: 'Spreadsheet Oopbuy moletons — crewnecks e tricôs' },
    headwear: { label: 'Bonés', alt: 'Spreadsheet Oopbuy headwear — bonés e gorros' },
    jersey: { label: 'Jerseys', alt: 'Spreadsheet Oopbuy jerseys — regatas/modelos sport' },
    perfume: { label: 'Perfume', alt: 'Spreadsheet Oopbuy fragrâncias — navegação beleza MaisonLooks' },
    other: { label: 'Mais', alt: 'Spreadsheet Oopbuy descobrir tudo — mix de categorias' },
  },
} as const;

export const ptHome: HomeStubContent = {
  title:
    'Oopbuy Spreadsheet Hub 2026 — Achados Weidian, Taobao e 1688 + guia QC | oopbuyai.com',
  description:
    'Hub independente (2026) do Oopbuy Spreadsheet: atalhos Weidian/Taobao/1688, colar link no Oopbuy, QC no armazém e frete — guia editorial sem checkout aqui.',
  keywords:
    'Oopbuy Spreadsheet 2026, Weidian Spreadsheet Oopbuy, Taobao agente, QC fotos warehouse, colar link Oopbuy, 1688',
  webPageName: 'Hub Oopbuy Spreadsheet 2026 (oopbuyai.com)',
  webPageKeywords: ['Oopbuy Spreadsheet', 'Weidian', 'Taobao', 'QC', 'agent China', 'spreadsheet Reddit'],
  hero: {
    h1: 'Hub Oopbuy Spreadsheet 2026',
    tagline: 'Um roteiro claro antes de pagar freight',
    kicker: '2026 · Weidian · Taobao · 1688 · QC warehouse',
    body:
      'Atalhos de catálogo com URLs profundas, discurso comum sobre “spreadsheet” em comunidades BR/EU/US e lembretes de QC antes do envio internacional. Pedidos e pagamentos ficam sempre no seu agent/Oopbuy — esta página apenas facilita navegação e vocabulário.',
    ctaBrowse: 'Explorar Oopbuy Spreadsheet →',
    ctaLogin: 'Entrar na Oopbuy',
    heroPlaneAlt:
      'Ilustração promocional em estilo Oopbuy para o hero do hub Spreadsheet — oopbuyai.com',
    searchAria: 'Buscar catálogo Oopbuy Spreadsheet',
    searchPlaceholder: 'Buscar produtos, marcas ou estilos…',
    searchByImage: 'Busca por imagem',
    searchSubmit: 'Buscar',
    searchByImageAria: 'Busca por imagem — abre MaisonLooks em nova aba',
  },
  categoriesAria: 'Atalhos de categoria ao browse MaisonLooks',
  exploreTitle: 'Explorar categorias do spreadsheet',
  redditAria: 'Comunidade r/FashionReps no Reddit (nova aba)',
  redditSnooAlt: 'Snoo Reddit — r/FashionReps para QC e hauls com agent',
  exploreKickerLead: 'Navegue por ícone e depois cole o link na ',
  exploreKickerTrail: ' usando o seu fluxo habitual',
  exploreIntro:
    'Cada toque abre o browse tipo spreadsheet em nova aba. Copie a URL inteira da página de produto, não apenas a loja, para minimizar SKU errado ao colar.',
  exploreSub: 'Links externos — valide QC e texto do anúncio antes do envio.',
  introH2: 'URLs estáveis + contexto honesto antes do QC warehouse',
  introP:
    'Os blocos seguintes repetem os passos típicos: descobrir, copiar URL, travar variantes, revisar QC, só então autorizar fretes internacional. Preços definitivos ficam dentro do seu painel.',
  guideH2: 'Spreadsheet Oopbuy e compras com agent — guia curto (2026)',
  guideIntro:
    'Lists comunitários não são “oficial Oopbuy”. Combine com FAQs reais dos marketplaces/agentes. oopbuyai.com não aceita pix/cartões.',
  sections: [
    { h3: '1. O que é esse spreadsheet?', paragraphs: ['Conjuntos de links curtidos com produtos china-side e notas sobre lotes ou tamanhos. Linhas apodrecer se o seller fecha a página.'] },
    { h3: '2. Oficial?', paragraphs: ['Regras jurídicas e logística ficam nos sites oficiais; sheets são apenas atalho social/editorial.'] },
    { h3: '3. Fluxo rápido', paragraphs: ['Página produto real → URL completa → Oopbuy → variantes marcadas → aguardar fotos QC → só depois fretar.'] },
    { h3: '4. Agent vs. PIX direto', paragraphs: ['Agent consolida frete domestico até hub, foto QC e ticketing—não magicamente evita alfândega BR/EU/US.'] },
    { h3: '5. Links bons vs. wrappers', paragraphs: ['Prefira SKU visível na barra do navegador; evite abas mobile que cortam params.'] },
    { h3: '6. QC', paragraphs: ['Compare costura e cor sob luz de armazém com galerias “bonitas” dos anúncios antes de autorizar etiqueta EMS/DHL etc.'] },
    { h3: '7. Preço celular ≠ final', paragraphs: ['Some taxas volumétricas, seguro opcional e câmbio—especialmente sapatos grandes e corta-ventos.'] },
    { h3: '8. Confiabilidade da linha', paragraphs: ['Cruzamentos com fotos recentes Reddit/Discord e histórico de devoluções do seller valem mais que só uma coluna hype.'] },
    { h3: '9. Erros típicos', paragraphs: ['Aprovar QC no modo thumb; esquecer notas de gramatura; usar link de página de imagens puras.'] },
    { h3: '10. Manter atual', paragraphs: ['Renove datas, marque URLs 404 e comente quando a batch mudar.'] },
  ],
  ctaHeading: 'Diretório principal do spreadsheet',
  ctaIntro: 'Abre a mesma experiência MaisonLooks usada nos atalhos acima.',
  ctaFooterNote: 'Plataforma terceiros — sempre checar antes de despachar.',
  sheetLinkLabel: 'Oopbuy Spreadsheet → agent spreadsheets',
  categoryPills: pillsFor(pillLabels.pt),
  footer: {
    disclaimerLabel: 'Aviso legal',
    disclaimerHtml:
      'oopbuyai.com é hub independente (sem checkout). Links para <a href="https://maisonlooks.com/en" target="_blank" rel="noopener noreferrer">MaisonLooks</a> e <a href="https://oopbuy.com/" target="_blank" rel="noopener noreferrer">Oopbuy</a> são terceiros. Verifique QC e políticas direto nas plataformas.',
    copyrightLine:
      '© 2026 oopbuyai.com · apenas notas/editorial — sua compra acontece no agent oficial.',
  },
};
