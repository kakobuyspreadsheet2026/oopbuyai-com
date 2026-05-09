import type { RouteLocale } from '../config';

/** Tokens replaced in `hydrateNewsCopy`: `{guideUrl}` `{buyerUrl}` `{howToUrl}` `{oopbuyHomeUrl}` `{homeCuratedUrl}` `{mlCatalogUrl}` `{oopbuyIssueUrl}` `{activityPointUrl}` `{openstarUrl}` `{jeansBrowseUrl}` `{jewelryBrowseUrl}` `{count}` */
export type NewsActivityItem = {
  title: string;
  pillVariant: 'internal' | 'external';
  pillText: string;
  bodyHtml: string;
  moreHtml: string;
};

export type NewsOfficialBlock = {
  badge: string;
  faqHubLabel: string;
  metaHtml: string;
  sourcePageLabel: string;
};

export type NewsCopy = {
  title: string;
  description: string;
  keywords: string;
  backHomeLabel: string;
  h1: string;
  topIntroHtml: string;
  featuredBannerHeading: string;
  featuredBannerIntroHtml: string;
  activityHeading: string;
  activityIntroHtml: string;
  activityItems: NewsActivityItem[];
  official: NewsOfficialBlock;
  stepsHeading: string;
  stepListItemsHtml: string[];
  tipsHeading: string;
  tipListItemsHtml: string[];
  disclaimerHtml: string;
  howToSchema: {
    name: string;
    description: string;
    step: { name: string; text: string }[];
  };
};

export const NEWS_MIRROR_PATHS = {
  POINT: '/news/oopbuy-activity/index.html',
  OPENSTAR: '/news/openstar-recruit/index.html',
  JEANS: 'https://maisonlooks.com/zh/search?q=jeans',
  JEWELRY: 'https://maisonlooks.com/zh/search?q=jewelry',
} as const;

const O_ISSUE = 'https://oopbuy.com/issueView';

export function hydrateNewsCopy(
  raw: NewsCopy,
  urls: {
    guideUrl: string;
    buyerUrl: string;
    howToUrl: string;
    oopbuyHomeUrl: string;
    homeCuratedUrl: string;
    mlCatalogUrl: string;
    excerptCount: number;
  },
): NewsCopy {
  const map: Record<string, string> = {
    '{guideUrl}': urls.guideUrl,
    '{buyerUrl}': urls.buyerUrl,
    '{howToUrl}': urls.howToUrl,
    '{oopbuyHomeUrl}': urls.oopbuyHomeUrl,
    '{homeCuratedUrl}': urls.homeCuratedUrl,
    '{mlCatalogUrl}': urls.mlCatalogUrl,
    '{oopbuyIssueUrl}': O_ISSUE,
    '{activityPointUrl}': NEWS_MIRROR_PATHS.POINT,
    '{openstarUrl}': NEWS_MIRROR_PATHS.OPENSTAR,
    '{jeansBrowseUrl}': NEWS_MIRROR_PATHS.JEANS,
    '{jewelryBrowseUrl}': NEWS_MIRROR_PATHS.JEWELRY,
    '{count}': String(urls.excerptCount),
  };

  function sub(html: string) {
    let o = html;
    for (const [k, v] of Object.entries(map)) {
      o = o.split(k).join(v);
    }
    return o;
  }

  const activityItems = raw.activityItems.map((it) => ({
    ...it,
    bodyHtml: sub(it.bodyHtml),
    moreHtml: sub(it.moreHtml),
  }));

  let officialMeta = raw.official.metaHtml.replaceAll('{count}', String(urls.excerptCount));
  officialMeta = officialMeta.split('{oopbuyIssueUrl}').join(O_ISSUE);

  return {
    ...raw,
    topIntroHtml: sub(raw.topIntroHtml),
    featuredBannerIntroHtml: sub(raw.featuredBannerIntroHtml),
    activityIntroHtml: sub(raw.activityIntroHtml),
    activityItems,
    official: { ...raw.official, metaHtml: officialMeta },
    stepListItemsHtml: raw.stepListItemsHtml.map(sub),
    tipListItemsHtml: raw.tipListItemsHtml.map(sub),
    disclaimerHtml: sub(raw.disclaimerHtml),
  };
}

const en: NewsCopy = {
    title: 'Oopbuy Spreadsheet news, guides & agent FAQ excerpts | oopbuyai.com',
    description:
      'Oopbuy Spreadsheet news hub: buying workflow notes, QC and freight context, mirrored Oopbuy notice excerpts, and long-tail shopping-agent guidance—education only; orders stay on oopbuy.com.',
    keywords:
      'Oopbuy spreadsheet news, Oopbuy spreadsheet guide, Oopbuy notice excerpt, FashionReps Oopbuy spreadsheet FAQ, QC photos agent guide, Oopbuy spreadsheet freight tips, shopping agent spreadsheet updates',
    backHomeLabel: '← Back to home',
    h1: 'News & guides',
    topIntroHtml: `For buying walkthroughs and platform detail, open the <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet buying guide</a>. Haul summaries and shipping timelines live on <a href="{buyerUrl}">Buyer shares</a>. Fees and courier lines move often—trust your logged-in <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> dashboard before you ship. Nothing on this site is a checkout—you pay your agent separately.`,
    featuredBannerHeading: 'Featured banners',
    featuredBannerIntroHtml: `Same carousel as <a href="{homeCuratedUrl}">homepage → Explore categories</a>. Some tiles jump to summaries on this site; others send you straight to <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> or <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">the Spreadsheet catalogue</a> in a new tab. Promo art and wording belong to those programmes.`,
    activityHeading: 'What each banner is about',
    activityIntroHtml: `Plain-English rundown of each tile below. Promo dates, tiers, and prizes always follow <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy live rules</a>. The jeans and jewellery banners are shortcuts into filtered Spreadsheet catalogue search—everything else mirrors their official pages.`,
    activityItems: [
      {
        title: 'POINT SPRINT · high-discount redemption (Oopbuy × POINTSHAUL)',
        pillVariant: 'internal',
        pillText: 'On this site',
        bodyHtml: `<p>A <strong>limited-time redemption</strong> programme—matching the banner’s “LIMITED TIME” framing and staged discount tiers (such as steep % off tiers on selected items). How you earn points, which SKUs qualify, and the exact conversion rules are spelled out on Oopbuy’s campaign materials.</p>`,
        moreHtml: `<p class="activity-explainer-more"><a href="{activityPointUrl}">Campaign write-up · POINT SPRINT CHALLENGE</a></p>`,
      },
      {
        title: 'Denim / baggy jeans feature',
        pillVariant: 'external',
        pillText: 'Opens Oopbuy Spreadsheet browse',
        bodyHtml: `<p>A <strong>denim bottoms</strong> discovery lane: the homepage tile sends you to spreadsheet-indexed search results for <em>jeans</em> so you can filter by brand, wash, and price before copying a product URL into your usual Oopbuy buy flow. Listings stay inside the Spreadsheet catalogue; you still place orders via your broker.</p>`,
        moreHtml: `<p class="activity-explainer-more"><a href="{jeansBrowseUrl}" target="_blank" rel="noopener noreferrer">Browse jeans (Oopbuy Spreadsheet) ↗</a></p>`,
      },
      {
        title: 'Mother’s Day–style gifting · jewellery lane',
        pillVariant: 'external',
        pillText: 'Opens Oopbuy Spreadsheet browse',
        bodyHtml: `<p>A <strong>gift-ready accessories</strong> discovery lane aligned with the banner’s jewellery / small-gift cues: the tile opens spreadsheet-indexed results for <em>jewelry</em> so you can filter metals, logos, price and occasion before grabbing a listing URL for your broker flow. SKU mix reflects what the catalogue currently indexes; fulfilment stays on whichever agent you checkout with.</p>`,
        moreHtml: `<p class="activity-explainer-more"><a href="{jewelryBrowseUrl}" target="_blank" rel="noopener noreferrer">Browse jewellery (Oopbuy Spreadsheet) ↗</a></p>`,
      },
      {
        title: 'OpenStar · Rookie Creator (video creators)',
        pillVariant: 'internal',
        pillText: 'On this site',
        bodyHtml: `<p>A <strong>creator / influencer-style callout</strong> where producing approved video according to programme rules may unlock rewards (tiered payouts or coupons advertised on Oopbuy’s creative). Acceptance criteria, timelines, and payment mechanics belong to Oopbuy’s official terms for that cohort.</p>`,
        moreHtml: `<p class="activity-explainer-more"><a href="{openstarUrl}">Programme summary · Welcome to Rookie Creator</a></p>`,
      },
    ],
    official: {
      badge: 'Official excerpts sample · Oopbuy',
      faqHubLabel: 'Oopbuy FAQ hub ↗',
      metaHtml: `Below are mirrored Oopbuy notices hosted on our mirror for reading only. Rows are collapsed by default—expand a title for the archived body. Always prefer the wording on <a href="{oopbuyIssueUrl}" target="_blank" rel="noopener noreferrer">Oopbuy’s live FAQ</a>. <strong>{count}</strong> excerpts on file.`,
      sourcePageLabel: 'Original page ↗',
    },
    stepsHeading: 'Steps',
    stepListItemsHtml: [
      `<strong>Start from a category.</strong> On the <a href="{homeCuratedUrl}">homepage category grid</a>, tap the type of item you want. A new tab opens the matching Oopbuy Spreadsheet browse or search view.`,
      `<strong>Open a real product page.</strong> Pick a listing with clear options and photos you trust. Avoid saving only shop homepages if you need a specific SKU later.`,
      `<strong>Copy the marketplace URL.</strong> Use the full product URL (desktop or mobile “share link” equivalents that still resolve as the same listing).`,
      `<strong>Paste into Oopbuy’s buy flow.</strong> On <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">oopbuy.com</a>, paste the URL where the site asks for an item link, then lock size / color / quantity before you pay.`,
      `<strong>Submit payment on Oopbuy.</strong> Fulfillment, domestic leg to warehouse, and service fees follow Oopbuy’s rules and your selected options—not this site.`,
      `<strong>Inspect QC photos.</strong> Treat warehouse shots as mandatory: if anything is wrong, resolve it with the agent <em>before</em> approving international postage.`,
      `<strong>Approve shipping.</strong> Choose a line that fits your country and budget. Remember volumetric weight on large shoes, coats, or tech—item-only spreadsheet prices rarely show your full landed cost.`,
    ],
    tipsHeading: 'Tips',
    tipListItemsHtml: [
      `Use this page alongside <a href="{howToUrl}">How to buy</a> for workflow context and excerpts.`,
      `Spreadsheet row columns (batch notes, yuan price, QC link) stay your own—even when discovery starts in the catalogue.`,
      `Freight totals and payouts only ever come from your agent checkout—this hub never processes money or live shipping quotes.`,
    ],
    disclaimerHtml: `<strong>Disclaimer:</strong> Independent summary only. Policies, prohibited goods, refunds, customs, and delivery risk are between you and Oopbuy / carriers / regulators. Verify every listing yourself.`,
    howToSchema: {
      name: 'How to buy using the Oopbuy Spreadsheet catalogue → Oopbuy paste workflow',
      description:
        'Practical Oopbuy Spreadsheet steps: browse category entry points, copy stable marketplace links, paste into Oopbuy, review warehouse QC photos, then choose international shipping with full landed cost in mind.',
      step: [
        {
          name: 'Pick a category',
          text: 'From the homepage, open a category pill that matches what you want (shoes, jackets, etc.). Each link opens the Oopbuy Spreadsheet catalogue in a new tab.',
        },
        {
          name: 'Choose a product listing',
          text: 'Inside the catalogue, open a product detail page. Confirm variant text, photos, and any size or batch notes before copying the link.',
        },
        {
          name: 'Copy the product URL',
          text: 'Copy the full product page URL from the address bar—not a screenshot page or image-only link.',
        },
        {
          name: 'Paste into Oopbuy',
          text: 'Log in on oopbuy.com, use the product-link or buy flow your account provides, paste the URL, and pick size, color, or quantity carefully.',
        },
        {
          name: 'Pay and wait for warehouse arrival',
          text: 'Submit the order according to Oopbuy’s checkout. Domestic shipping to the agent warehouse is handled as part of their process.',
        },
        {
          name: 'Review QC photos',
          text: 'When warehouse photos appear, zoom in and verify stitching, color, logos, and sizing before approving international shipment.',
        },
        {
          name: 'Ship to your address',
          text: 'Choose a courier line, pay international freight, and track the parcel. Landed cost includes item, fees, and volumetric shipping—not just the listing price.',
        },
      ],
    },
};

const de: NewsCopy = {
  title: 'Oopbuy Spreadsheet: News, Anleitungen & FAQ-Auszüge | oopbuyai.com',
  description:
    'Schwerpunkt Kaufworkflow, QC und Fracht, gespiegelte Oopbuy-Hinweise und Broker-Ratgeber — nur zum Lernen; Bestellzahlungen laufen ausschließlich auf oopbuy.com.',
  keywords:
    'Oopbuy Spreadsheet Nachrichten, Kaufanleitung Oopbuy, FAQ Auszug, QC Fotos Lager FashionReps, Fracht Tipps Spreadsheet Agent',
  backHomeLabel: '← Zur Startseite',
  h1: 'News & Anleitungen',
  topIntroHtml: `Für Schritt-für-Schritt-Anleitungen und Plattformdetails öffne den <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">Oopbuy Spreadsheet Einkaufsguide</a>. Haul-Resümees und internationale Zeitlinien liegen unter <a href="{buyerUrl}">Käufer-Stimmen</a>. Gebühren und Kurier-Linien ändern sich oft — entscheide erst nach Kontrolle in deinem eingeloggten <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>-Dashboard, bevor du versendest. Hier gibt es keinen Warenkorb oder Checkout — du begleichst beim Agent separat.`,
  featuredBannerHeading: 'Vorgestellte Banner',
  featuredBannerIntroHtml: `Der gleiche Karussellbereich wie bei <a href="{homeCuratedUrl}">Startseite → Kategorien erkunden</a>. Manche Tiles verlinken interne Kurztexte auf dieser Domain; andere öffnen in neuem Tab <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> oder den <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">Spreadsheet-Katalog</a>. Motive und Formulierung der Aktionsgrafiken gehören den jeweiligen Kampagnenteams.`,
  activityHeading: 'Worum es bei jedem Banner geht',
  activityIntroHtml: `Nachfolgend ein klar strukturierter Überblick pro Tile. Daten, Levels und Gewinne folgen immer den <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Live-Oopbuy-Vorgaben</a>. Jeans- und Schmuck-Karten sind Schnellstarts in gefilterte Katalogsuchergebnisse; alle anderen Inhalte spiegeln deren offiziellen Seiten.`,
  activityItems: [
    {
      title: 'POINT SPRINT · Hochrabatt-Einlösung (Oopbuy × POINTSHAUL)',
      pillVariant: 'internal',
      pillText: 'Auf dieser Website',
      bodyHtml: `<p>Ein <strong>zeitlich begrenztes Einlöseprogramm</strong>, zum Rahmen „LIMITED TIME“ des Banners und zu gestaffelten Rabattstufen (z. B. sehr hohe %-Rabatte auf ausgewählte SKUs passend). Wie Punkte verdient werden, welche SKU teilnehmen und wie Umbuchungsregeln lauten, steht in den Kampagnendokumenten von Oopbuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{activityPointUrl}">Kampagnentext · POINT SPRINT CHALLENGE</a></p>`,
    },
    {
      title: 'Denim / Baggy-Jeans-Fokusbereich',
      pillVariant: 'external',
      pillText: 'Öffnet Spreadsheet-Browse',
      bodyHtml: `<p>Eine Entdeckungsstrecke für <strong>Denim / Hosen</strong>: Von der Homepage-Kachel springst du in eine nach <em>jeans</em> indexierte Suchansicht mit Filtern nach Marke, Waschung oder Preis, bevor du die Produkt-URL in den gewohnten Oopbuy-Buy-Flow kopierst. Alle Listings verbleiben im Spreadsheet-Index der Katalog-Infrastruktur — der geschlossene Kaufvorgang bleibt aber beim Broker-Agenten.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jeansBrowseUrl}" target="_blank" rel="noopener noreferrer">Jeans im Spreadsheet durchsuchen ↗</a></p>`,
    },
    {
      title: 'Geschenk-Kontext · Schmuck-/Bijoux-Korridor',
      pillVariant: 'external',
      pillText: 'Öffnet Spreadsheet-Browse',
      bodyHtml: `<p>Ein Bereich für <strong>schenktaugliche Accessories</strong> passend zur Schmuck-/Klein-Geschenk-Botschaft des Motivs: die Kachel lädt gefilterte Ergebnisse zu <em>jewelry</em>, sodass Metall, Logo, Budget und Anlass eingegrenzt werden können, noch bevor Listing-URLs für Broker eingefügt werden. SKU-Mix hängt vom aktuellen Index ab; Fulfillment liegt bei dem Agenten-Konto, mit dem du zahlst.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jewelryBrowseUrl}" target="_blank" rel="noopener noreferrer">Schmuck im Spreadsheet durchsuchen ↗</a></p>`,
    },
    {
      title: 'OpenStar · Rookie Creator (Videoproduktion)',
      pillVariant: 'internal',
      pillText: 'Auf dieser Website',
      bodyHtml: `<p>Eine klassische <strong>Creator-/Influencer-Recruiting</strong>-Fläche: nach den Programmrichtlinien produzierte, freigegebene Videoclips können Prämien freischalten (Staffelzahlungen oder Gutscheinkampagnen in Oopbuy-Creative). Zulassungskriterien, Review-Fenster und Auszahlungslogik sind in den offiziellen Oopbuy-Bedingungen für diese Kohorte geregelt.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{openstarUrl}">Programmüberblick · Welcome to Rookie Creator</a></p>`,
    },
  ],
  official: {
    badge: 'Offizielle Auszugsprobe · Oopbuy',
    faqHubLabel: 'Oopbuy FAQ auf der Live-Website ↗',
    metaHtml: `Nachstehend befinden sich gespiegelte Oopbuy-Servicehinweise zum reinen Nachlesen auf diesem Mirror. Accordions sind vorgeklappt — klicke den Titel für den gespeicherten Fließtext. Bei Diskrepanzen gilt stets das Original auf <a href="{oopbuyIssueUrl}" target="_blank" rel="noopener noreferrer">Oopbuy FAQ (live)</a>. <strong>{count}</strong> aufgezeichnete Auszüge.`,
    sourcePageLabel: 'Quellseite im Live-Portal ↗',
  },
  stepsHeading: 'Schritte',
  stepListItemsHtml: [
    `<strong>Von einer Kategorie starten.</strong> Im <a href="{homeCuratedUrl}">Kategorienraster der Startseite</a> das gewünschte Segment wählen — ein neuer Tab öffnet die passende Spreadsheet-Stöber-/Suchmaske.`,
    `<strong>Wirkliche Produkteinzelseite laden.</strong> Such dir ein Listing mit klaren Varianteninfos und Fotos, denen du vertraust. Speichere bei Bedarf keine bloßen Shop-Homepage-Shortcuts, wenn du später eine konkrete SKU brauchst.`,
    `<strong>Marktplatz-URL exakt kopieren.</strong> Nimm den vollen Produktlink aus Desktop oder mobiles „Share“-Äquivalent, solange es dieselbe Detailseite referenziert.`,
    `<strong>In Oopbuy einfügen.</strong> Auf <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">oopbuy.com</a> die URL im vorgesehenen Link-/Kauffeld platzieren, dann Größe / Farbe / Stückzahl finalisieren, bevor du zahlst.`,
    `<strong>Bezahlung nur bei Oopbuy.</strong> Inlandsroute ins Lager, Servicegebühren und Sonderoptionen folgen Oopbuy-Regeln — nicht dieser Hub.`,
    `<strong>Lager-QC-Fotos prüfen.</strong> Behandle Warehouse-Shots als Pflicht: falls etwas nicht passt, kläre es mit dem Agent <em>bevor</em> du den internationalen Versand freigibst.`,
    `<strong>Internationale Line wählen.</strong> Nimm Courierlinie passend für Land/Haushalt. Denk ans Volumgewicht bei großen Schuhen, Mänteln oder Tech — Rohpreise nur aus Spreadsheet-Spalten zeigen selten echte Gesamtbetriebskosten bis zur Haustür.`,
  ],
  tipsHeading: 'Tipps',
  tipListItemsHtml: [
    `Nutze diese Seite kombiniert mit <a href="{howToUrl}">So kaufen</a>, um Workflow und offiziell eingebettete FAQs sauber zusammenzubringen.`,
    `Spreadsheet-Zeilen (Batch-Notizen, Yuan-Listenpreise, QC-Deep-Link) bleiben vollständig deine Arbeit — auch wenn die Entdeckungsreise beim Katalog startet.`,
    `Fracht-Endbeträge und Auszahlungen entstehen ausschließlich im Checkout des Agenten — dieses Projekt nimmt keine Zahlungen vor und keine Live-Frachtkalkulation.`,
  ],
  disclaimerHtml: `<strong>Hinweis:</strong> Nur redaktioneller Abriss. Richtlinien, verbotene Güter, Rückerstattung, Zoll und Transportrisiko verbleiben zwischen dir, Oopbuy, Frachtführern und Aufsichtsbehörden. Verifiziere Listings eigenverantwortlich.`,
  howToSchema: {
    name: 'Einkaufen mit Oopbuy Spreadsheet-Katalog → Link in Oopbuy einfügen',
    description:
      'Praxisnahe Spreadsheet-Sequenz: Kategorieeinstieg wählen, stabile Marktplatz-URLs kopieren, bei Oopbuy einfügen, Warehouse-QC studieren und internationalen Versand mit realistischem Gesamtbudget planen.',
    step: [
      {
        name: 'Kategorie auswählen',
        text: 'Auf der Startseite den passenden Category-Pill antippen (Schuhe, Jacken …). Ein weiterer Tab öffnet jeweils den zugeordneten Spreadsheet-Katalog.',
      },
      {
        name: 'Konkretes Produktlisting öffnen',
        text: 'Im Katalog Detailseiten mit Variantentext und Bildern studieren — inklusive Größen- oder Batch-Hinweise — erst danach kopieren.',
      },
      {
        name: 'Produkt-URL kopieren',
        text: 'Vollständige Adresszeilen-URL nutzen oder mobile Share-URLs, welche dasselbe Listing garantiert laden — keine bloßen Screenshots.',
      },
      {
        name: 'In Broker-Flow bei Oopbuy einfügen',
        text: 'Eingeloggt den Link dort einfügen, wo dein Agent-Konto Produkt- bzw. Paste-Felder bereitstellt; Optionen konsistent zum Listing setzen.',
      },
      {
        name: 'Zahlung durchführen und Wareneinlauf',
        text: 'Bestellbestätigung laut Oopbuy-Checkout; Inlandstransporte bis zum Agent-Lager erfolgen automatisiert im Rahmen deren SLA.',
      },
      {
        name: 'Warehouse-QC bewerten',
        text: 'Sobald Lagerfotos existieren, Details prüfen: Nähte, Farben, Logo-Platzierung und Passform gegen die Bestellung halten — vor Freigabe des Export-Frachtsegments.',
      },
      {
        name: 'Versand zur Zieladresse',
        text: 'Kurierlinie auswählen, internationalen Fracht prepaid begleichen, Sendungsverfolgung nutzen — Landed Cost schließt Artikel, Gebühren und kubische Frachteinflüsse ein, nicht bloß Listenpreise.',
      },
    ],
  },
};

const pt: NewsCopy = {
  title: 'Novidades do Oopbuy Spreadsheet, guias e excertos FAQ | oopbuyai.com',
  description:
    'Hub editorial: fluxo colar links, QC e frete, excertos espelhados das notícias Oopbuy e guia de agente — só educação; pedidos ficam no oopbuy.com.',
  keywords:
    'notícias Oopbuy spreadsheet, guia Oopbuy, excerto FAQ, QC warehouse, dicas frete FashionReps',
  backHomeLabel: '← Voltar ao início',
  h1: 'Notícias & guias',
  topIntroHtml: `Para tutoriais e detalhes da plataforma, abra o <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guia de compra Oopbuy Spreadsheet</a>. Resumos de haul e prazos de envio estão em <a href="{buyerUrl}">Voz dos compradores</a>. Taxas e linhas mudam com frequência — confie no painel <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> com login. Nada neste site é checkout: você paga o agente em outro lugar.`,
  featuredBannerHeading: 'Banners destacados',
  featuredBannerIntroHtml: `O mesmo carrossel da <a href="{homeCuratedUrl}">home → Explorar categorias</a>. Alguns blocos abrem resumos neste site; outros levam a <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> ou ao <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">catálogo Spreadsheet</a> numa nova aba. Arte e texto dos anúncios pertencem a cada programa.`,
  activityHeading: 'O que cada banner significa',
  activityIntroHtml: `Resumo direto de cada tile abaixo. Datas, níveis e prêmios seguem sempre as <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">regras ao vivo da Oopbuy</a>. Os banners de jeans e joias são atalhos para busca filtrada no catálogo Spreadsheet; o restante espelha landing pages oficiais.`,
  activityItems: [
    {
      title: 'POINT SPRINT · resgate com alto desconto (Oopbuy × POINTSHAUL)',
      pillVariant: 'internal',
      pillText: 'Nesta página',
      bodyHtml: `<p>Programa de <strong>resgate por tempo limitado</strong>, alinhado ao “LIMITED TIME” do banner e a patamares de desconto (por exemplo % agressivos em SKUs selecionados). Como ganhar pontos, quais itens entram e as regras de conversão estão nos materiais oficiais da campanha Oopbuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{activityPointUrl}">Artigo da campanha · POINT SPRINT CHALLENGE</a></p>`,
    },
    {
      title: 'Destaque denim / jeans largos',
      pillVariant: 'external',
      pillText: 'Abre navegação Spreadsheet',
      bodyHtml: `<p>Trilha de descoberta para <strong>calças jeans</strong>: o tile da home abre resultados indexados por <em>jeans</em> para filtrar marca, lavagem e preço antes de copiar o URL do produto para o fluxo Oopbuy. As ofertas continuam no catálogo Spreadsheet; o pedido fecha no agente.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jeansBrowseUrl}" target="_blank" rel="noopener noreferrer">Explorar jeans (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'Presentes · faixa de joias',
      pillVariant: 'external',
      pillText: 'Abre navegação Spreadsheet',
      bodyHtml: `<p>Faixa de <strong>acessórios para presente</strong> alinhada ao banner: abre resultados por <em>jewelry</em> para filtrar metal, logo, preço e ocasião antes de copiar o link para o broker. O mix de SKUs depende do índice atual; a entrega segue o agente onde você fechar.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jewelryBrowseUrl}" target="_blank" rel="noopener noreferrer">Explorar joias (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'OpenStar · Rookie Creator (criadores de vídeo)',
      pillVariant: 'internal',
      pillText: 'Nesta página',
      bodyHtml: `<p>Chamada estilo <strong>criador / influenciador</strong>: vídeos aprovados segundo as regras do programa podem gerar recompensas (patamares de pagamento ou cupons no material Oopbuy). Critérios, prazos e pagamentos estão nos termos oficiais da coorte.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{openstarUrl}">Resumo do programa · Welcome to Rookie Creator</a></p>`,
    },
  ],
  official: {
    badge: 'Amostra de excertos · Oopbuy',
    faqHubLabel: 'FAQ Oopbuy ↗',
    metaHtml: `Abaixo, avisos Oopbuy espelhados só para leitura. Linhas ficam recolhidas — clique no título para ver o corpo arquivado. Em caso de divergência, prevalece o texto da <a href="{oopbuyIssueUrl}" target="_blank" rel="noopener noreferrer">FAQ ao vivo</a>. <strong>{count}</strong> excertos no arquivo.`,
    sourcePageLabel: 'Página original ↗',
  },
  stepsHeading: 'Passos',
  stepListItemsHtml: [
    `<strong>Comece por uma categoria.</strong> Na <a href="{homeCuratedUrl}">grade de categorias da home</a>, escolha o tipo de item. Uma nova aba abre a busca ou navegação correspondente no Oopbuy Spreadsheet.`,
    `<strong>Abra uma página de produto real.</strong> Prefira anúncios com opções e fotos claras. Evite ficar só na home da loja se precisar de um SKU específico.`,
    `<strong>Copie o URL do marketplace.</strong> Use o link completo da página (ou equivalente de “compartilhar” que resolva para o mesmo anúncio).`,
    `<strong>Cole no fluxo de compra Oopbuy.</strong> Em <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">oopbuy.com</a>, cole onde o site pede o link do item e confirme tamanho / cor / quantidade antes de pagar.`,
    `<strong>Pague na Oopbuy.</strong> Transporte doméstico até o armazém, taxas e regras seguem a Oopbuy e as opções que você escolher — não este hub.`,
    `<strong>Revise fotos de QC.</strong> Trate as fotos do armazém como obrigatórias: se algo estiver errado, resolva com o agente <em>antes</em> de aprovar o frete internacional.`,
    `<strong>Aprove o envio.</strong> Escolha uma linha compatível com seu país e orçamento. Lembre do peso volumétrico em sapatos grandes, casacos ou eletrônicos — preços só da planilha raramente mostram o custo total final.`,
  ],
  tipsHeading: 'Dicas',
  tipListItemsHtml: [
    `Use esta página junto de <a href="{howToUrl}">Como comprar</a> para contexto e excertos oficiais.`,
    `Colunas da planilha (notas de batch, preço em yuan, link de QC) continuam suas — mesmo quando a descoberta começa no catálogo.`,
    `Valores de frete e pagamentos só vêm do checkout do agente; este hub não processa dinheiro nem cotações ao vivo.`,
  ],
  disclaimerHtml: `<strong>Aviso:</strong> resumo independente. Políticas, produtos proibidos, reembolsos, alfândega e risco de entrega ficam entre você, a Oopbuy, transportadoras e reguladores. Verifique cada anúncio.`,
  howToSchema: {
    name: 'Como comprar: catálogo Oopbuy Spreadsheet → colar link na Oopbuy',
    description:
      'Passos práticos: abrir categorias, copiar links estáveis de marketplace, colar na Oopbuy, revisar fotos de QC no armazém e escolher envio internacional com custo total em mente.',
    step: [
      {
        name: 'Escolha uma categoria',
        text: 'Na home, abra o chip de categoria desejado (calçados, jaquetas etc.). Cada link abre o catálogo Oopbuy Spreadsheet numa nova aba.',
      },
      {
        name: 'Abra um anúncio de produto',
        text: 'No catálogo, abra a página de detalhe. Confirme texto de variante, fotos e notas de tamanho ou batch antes de copiar o link.',
      },
      {
        name: 'Copie o URL do produto',
        text: 'Copie o endereço completo da página — não uma captura isolada ou link só de imagem.',
      },
      {
        name: 'Cole na Oopbuy',
        text: 'Entre em oopbuy.com, use o fluxo de link/produto da sua conta, cole o URL e escolha tamanho, cor ou quantidade com cuidado.',
      },
      {
        name: 'Pague e aguarde o armazém',
        text: 'Finalize o pedido no checkout Oopbuy. O trecho doméstico até o armazém do agente segue o processo deles.',
      },
      {
        name: 'Revise as fotos de QC',
        text: 'Quando as fotos aparecerem, amplie e confira costura, cor, logos e medidas antes de aprovar o envio internacional.',
      },
      {
        name: 'Envie para seu endereço',
        text: 'Escolha uma linha de courier, pague o frete internacional e acompanhe o pacote. O custo final inclui item, taxas e frete volumétrico — não só o preço do anúncio.',
      },
    ],
  },
};

const es: NewsCopy = {
  title: 'Noticias Oopbuy Spreadsheet, guías y extractos FAQ | oopbuyai.com',
  description:
    'Notas de flujo de compra, QC y envío, extractos espejo de avisos Oopbuy y guía de agente — solo formación; los pedidos siguen en oopbuy.com.',
  keywords:
    'noticias Oopbuy spreadsheet, guía Oopbuy, extracto FAQ, fotos QC agente, consejos flete FashionReps',
  backHomeLabel: '← Volver al inicio',
  h1: 'Noticias y guías',
  topIntroHtml: `Para tutoriales y detalle de plataforma, abre la <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guía de compra Oopbuy Spreadsheet</a>. Resúmenes de haul y plazos de envío están en <a href="{buyerUrl}">Historias de compradores</a>. Tarifas y líneas cambian a menudo — confía en tu panel <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> con sesión iniciada. Nada en este sitio es un checkout: pagas al agente aparte.`,
  featuredBannerHeading: 'Banners destacados',
  featuredBannerIntroHtml: `El mismo carrusel que <a href="{homeCuratedUrl}">inicio → Explorar categorías</a>. Algunos bloques enlazan resúmenes aquí; otros te llevan a <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> o al <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">catálogo Spreadsheet</a> en una pestaña nueva. Arte y texto pertenecen a cada campaña.`,
  activityHeading: 'Qué representa cada banner',
  activityIntroHtml: `Resumen claro de cada tile. Fechas, tramos y premios siguen siempre las <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">reglas en vivo de Oopbuy</a>. Los banners de vaqueros y joyería abren búsquedas filtradas en el catálogo Spreadsheet; el resto refleja sus páginas oficiales.`,
  activityItems: [
    {
      title: 'POINT SPRINT · canje con gran descuento (Oopbuy × POINTSHAUL)',
      pillVariant: 'internal',
      pillText: 'En este sitio',
      bodyHtml: `<p>Programa de <strong>canje por tiempo limitado</strong>, alineado al “LIMITED TIME” del banner y a tramos de descuento (por ejemplo % fuertes en SKU seleccionados). Cómo ganar puntos, qué artículos entran y las reglas de canje figuran en el material oficial de Oopbuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{activityPointUrl}">Artículo de campaña · POINT SPRINT CHALLENGE</a></p>`,
    },
    {
      title: 'Denim / vaqueros anchos',
      pillVariant: 'external',
      pillText: 'Abre navegación Spreadsheet',
      bodyHtml: `<p>Carril de descubrimiento de <strong>pantalones vaqueros</strong>: el tile abre resultados indexados por <em>jeans</em> para filtrar marca, lavado y precio antes de copiar la URL al flujo Oopbuy. Los listados siguen en el catálogo Spreadsheet; el pedido lo cierras con el agente.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jeansBrowseUrl}" target="_blank" rel="noopener noreferrer">Explorar vaqueros (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'Regalos · carril de joyería',
      pillVariant: 'external',
      pillText: 'Abre navegación Spreadsheet',
      bodyHtml: `<p>Carril de <strong>accesorios para regalo</strong> alineado al banner: abre resultados por <em>jewelry</em> para filtrar metal, logo, precio y ocasión antes de copiar el enlace. El surtido depende del índice actual; la entrega sigue al agente con el que pagues.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jewelryBrowseUrl}" target="_blank" rel="noopener noreferrer">Explorar joyería (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'OpenStar · Rookie Creator (creadores de vídeo)',
      pillVariant: 'internal',
      pillText: 'En este sitio',
      bodyHtml: `<p>Convocatoria tipo <strong>creador / influencer</strong>: vídeos aprobados según las reglas pueden desbloquear recompensas (tramos de pago o cupones en el creativo Oopbuy). Criterios, plazos y pagos están en los términos oficiales.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{openstarUrl}">Resumen del programa · Welcome to Rookie Creator</a></p>`,
    },
  ],
  official: {
    badge: 'Extracto oficial · Oopbuy',
    faqHubLabel: 'FAQ Oopbuy ↗',
    metaHtml: `Avisos Oopbuy espejo solo para lectura. Filas plegadas por defecto: expande el título para el cuerpo archivado. Si hay discrepancia, manda la <a href="{oopbuyIssueUrl}" target="_blank" rel="noopener noreferrer">FAQ en vivo</a>. <strong>{count}</strong> extractos.`,
    sourcePageLabel: 'Página original ↗',
  },
  stepsHeading: 'Pasos',
  stepListItemsHtml: [
    `<strong>Empieza por una categoría.</strong> En la <a href="{homeCuratedUrl}">cuadrícula de categorías</a>, elige el tipo de artículo. Se abre una pestaña con la vista Spreadsheet adecuada.`,
    `<strong>Abre una ficha real.</strong> Elige un anuncio con opciones y fotos claras. Evita quedarte solo en la home de la tienda si necesitas un SKU concreto.`,
    `<strong>Copia la URL del marketplace.</strong> Usa el enlace completo (o el “compartir” móvil que resuelva al mismo anuncio).`,
    `<strong>Pégala en el flujo Oopbuy.</strong> En <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">oopbuy.com</a>, pega donde pida el enlace y fija talla / color / cantidad antes de pagar.`,
    `<strong>Paga en Oopbuy.</strong> El tramo doméstico al almacén y las comisiones siguen las reglas de Oopbuy y tus opciones — no este hub.`,
    `<strong>Revisa fotos QC.</strong> Trátalas como obligatorias: si algo falla, resuélvelo con el agente <em>antes</em> de aprobar el envío internacional.`,
    `<strong>Aprueba el envío.</strong> Elige línea, paga flete internacional y rastrea. Recuerda el peso volumétrico en calzado grande, abrigos o tech — el precio de la hoja rara vez muestra el coste total a tierra.`,
  ],
  tipsHeading: 'Consejos',
  tipListItemsHtml: [
    `Combina esta página con <a href="{howToUrl}">Cómo comprar</a> para contexto y extractos.`,
    `Las columnas de la hoja (notas de batch, yuan, enlace QC) siguen siendo tuyas aunque descubras en el catálogo.`,
    `Totales de flete y cobros solo salen del checkout del agente; este hub no mueve dinero ni cotizaciones en vivo.`,
  ],
  disclaimerHtml: `<strong>Descargo:</strong> resumen independiente. Políticas, productos prohibidos, reembolsos, aduanas y riesgo de entrega quedan entre tú, Oopbuy, transportistas y reguladores. Verifica cada anuncio.`,
  howToSchema: {
    name: 'Cómo comprar: catálogo Oopbuy Spreadsheet → pegar enlace en Oopbuy',
    description:
      'Pasos prácticos: abrir categorías, copiar enlaces estables, pegar en Oopbuy, revisar fotos QC en almacén y elegir envío internacional con coste total en mente.',
    step: [
      {
        name: 'Elige una categoría',
        text: 'En la home abre el chip que encaje (zapatillas, chaquetas, etc.). Cada enlace abre el catálogo Spreadsheet en una pestaña nueva.',
      },
      {
        name: 'Abre un anuncio de producto',
        text: 'Dentro del catálogo abre la ficha. Confirma variantes, fotos y notas de talla o batch antes de copiar.',
      },
      {
        name: 'Copia la URL del producto',
        text: 'Copia la URL completa de la barra de direcciones — no una página solo de captura o imagen.',
      },
      {
        name: 'Pega en Oopbuy',
        text: 'Inicia sesión en oopbuy.com, usa el flujo de enlace que te da la cuenta, pega y elige talla, color o cantidad con cuidado.',
      },
      {
        name: 'Paga y espera al almacén',
        text: 'Completa el pago según el checkout Oopbuy. El envío doméstico al almacén del agente forma parte de su proceso.',
      },
      {
        name: 'Revisa fotos QC',
        text: 'Cuando aparezcan fotos de almacén, amplía y comprueba costuras, color, logos y tallaje antes de aprobar el envío internacional.',
      },
      {
        name: 'Envía a tu dirección',
        text: 'Elige línea de mensajería, paga flete internacional y rastrea. El coste a tierra incluye artículo, tasas y volumen — no solo el precio del anuncio.',
      },
    ],
  },
};

const fr: NewsCopy = {
  title: 'Actualités Oopbuy Spreadsheet, guides & extraits FAQ | oopbuyai.com',
  description:
    'Notes de parcours d’achat, QC & fret, extraits miroir des annonces Oopbuy et guide agent — pédagogie seule; commandes sur oopbuy.com.',
  keywords:
    'actualités Oopbuy spreadsheet, guide Oopbuy, extrait FAQ, photos QC entrepôt, conseils fret FashionReps',
  backHomeLabel: '← Retour à l’accueil',
  h1: 'Actualités & guides',
  topIntroHtml: `Pour les tutoriels et le détail plateforme, ouvrez le <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guide d’achat Oopbuy Spreadsheet</a>. Les récits de haul et délais d’acheminement sont sous <a href="{buyerUrl}">Retours acheteurs</a>. Tarifs et lignes évoluent vite — suivez votre tableau <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> connecté. Rien ici n’est un tunnel de paiement : vous payez l’agent ailleurs.`,
  featuredBannerHeading: 'Banners mis en avant',
  featuredBannerIntroHtml: `Même carrousel que <a href="{homeCuratedUrl}">accueil → Explorer les catégories</a>. Certains blocs pointent vers des résumés ici ; d’autres ouvrent <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> ou le <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">catalogue Spreadsheet</a> dans un nouvel onglet. Visuels et textes appartiennent aux campagnes.`,
  activityHeading: 'Rôle de chaque bannière',
  activityIntroHtml: `Vue d’ensemble de chaque tuile. Dates, paliers et lots suivent toujours les <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">règles live Oopbuy</a>. Jean et bijoux ouvrent des recherches filtrées dans le catalogue ; le reste reflète les pages officielles.`,
  activityItems: [
    {
      title: 'POINT SPRINT · remise à fort rabais (Oopbuy × POINTSHAUL)',
      pillVariant: 'internal',
      pillText: 'Sur ce site',
      bodyHtml: `<p>Programme de <strong>remboursement / échange limité dans le temps</strong>, calqué sur le bandeau “LIMITED TIME” et des paliers de remise (ex. % élevés sur SKU ciblés). Points gagnés, articles éligibles et règles de conversion figurent sur les supports officiels Oopbuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{activityPointUrl}">Article campagne · POINT SPRINT CHALLENGE</a></p>`,
    },
    {
      title: 'Denim / jeans amples',
      pillVariant: 'external',
      pillText: 'Ouvre la navigation Spreadsheet',
      bodyHtml: `<p>Parcours <strong>bas denim</strong> : la tuile ouvre des résultats indexés <em>jeans</em> pour filtrer marque, délavage et prix avant de copier l’URL vers Oopbuy. Les fiches restent dans le catalogue Spreadsheet ; la commande se valide chez le courtier.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jeansBrowseUrl}" target="_blank" rel="noopener noreferrer">Parcourir les jeans (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'Cadeaux · ligne bijoux',
      pillVariant: 'external',
      pillText: 'Ouvre la navigation Spreadsheet',
      bodyHtml: `<p>Focus <strong>accessoires cadeaux</strong> : ouvre des résultats <em>jewelry</em> pour filtrer métal, logo, prix et occasion avant de copier le lien broker. Le mix SKU dépend de l’index ; la livraison suit l’agent choisi au paiement.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jewelryBrowseUrl}" target="_blank" rel="noopener noreferrer">Parcourir les bijoux (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'OpenStar · Rookie Creator (vidéastes)',
      pillVariant: 'internal',
      pillText: 'Sur ce site',
      bodyHtml: `<p>Appel type <strong>créateur / influenceur</strong> : vidéos conformes aux règles peuvent débloquer des récompenses (paliers de rémunération ou bons sur le créatif Oopbuy). Critères, délais et paiements sont dans les conditions officielles.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{openstarUrl}">Résumé programme · Welcome to Rookie Creator</a></p>`,
    },
  ],
  official: {
    badge: 'Extrait officiel · Oopbuy',
    faqHubLabel: 'FAQ Oopbuy ↗',
    metaHtml: `Avis Oopbuy en miroir, lecture seule. Lignes repliées par défaut — cliquez le titre pour le corps archivé. En cas d’écart, faites foi de la <a href="{oopbuyIssueUrl}" target="_blank" rel="noopener noreferrer">FAQ en ligne</a>. <strong>{count}</strong> extraits.`,
    sourcePageLabel: 'Page source ↗',
  },
  stepsHeading: 'Étapes',
  stepListItemsHtml: [
    `<strong>Partez d’une catégorie.</strong> Sur la <a href="{homeCuratedUrl}">grille d’accueil</a>, choisissez le type d’article. Un nouvel onglet ouvre la vue Spreadsheet adaptée.`,
    `<strong>Ouvrez une vraie fiche produit.</strong> Privilégiez des annonces avec options et photos nettes. Évitez de ne garder que la home boutique si vous ciblez un SKU précis.`,
    `<strong>Copiez l’URL marketplace.</strong> Lien complet de la barre d’adresse (ou équivalent “partager” mobile identique).`,
    `<strong>Collez dans le flux Oopbuy.</strong> Sur <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">oopbuy.com</a>, collez au champ lien, puis verrouillez taille / couleur / quantité avant paiement.`,
    `<strong>Réglez sur Oopbuy.</strong> Transit domestique vers l’entrepôt et frais suivent Oopbuy et vos options — pas ce hub.`,
    `<strong>Contrôlez le QC.</strong> Photos d’entrepôt obligatoires : en cas d’écart, réglez avec l’agent <em>avant</em> d’approuver l’affranchissement international.`,
    `<strong>Validez l’expédition.</strong> Choisissez une ligne adaptée au pays et budget. Pensez au poids volumétrique (grosses paires, manteaux, tech) — le prix feuille seul ne donne pas le coût total.`,
  ],
  tipsHeading: 'Astuces',
  tipListItemsHtml: [
    `À lire avec <a href="{howToUrl}">Comment acheter</a> pour le contexte et les extraits.`,
    `Les colonnes spreadsheet (batch, yuan, lien QC) restent les vôtres même si la découverte part du catalogue.`,
    `Fret et encaissements ne viennent que du checkout agent ; ce hub ne traite ni argent ni devis live.`,
  ],
  disclaimerHtml: `<strong>Avertissement :</strong> synthèse indépendante. Politiques, produits interdits, remboursements, douane et risque transport vous lient à Oopbuy / transporteurs / autorités. Vérifiez chaque annonce.`,
  howToSchema: {
    name: 'Comment acheter : catalogue Oopbuy Spreadsheet → coller le lien dans Oopbuy',
    description:
      'Étapes pratiques : ouvrir les catégories, copier des liens stables, coller dans Oopbuy, relire les photos QC puis choisir l’expédition internationale avec coût total.',
    step: [
      {
        name: 'Choisir une catégorie',
        text: 'Sur l’accueil, ouvrez le chip voulu (chaussures, vestes…). Chaque lien ouvre le catalogue Spreadsheet dans un nouvel onglet.',
      },
      {
        name: 'Ouvrir une annonce produit',
        text: 'Dans le catalogue, ouvrez la fiche détail. Validez variantes, photos et notes de taille ou batch avant copie.',
      },
      {
        name: 'Copier l’URL produit',
        text: 'Copiez l’URL complète — pas une page capture ou lien image seul.',
      },
      {
        name: 'Coller dans Oopbuy',
        text: 'Connecté sur oopbuy.com, utilisez le flux lien de votre compte, collez et choisissez taille / couleur / quantité avec soin.',
      },
      {
        name: 'Payer et attendre l’entrepôt',
        text: 'Payez selon le checkout Oopbuy. Le trajet domestique vers l’entrepôt agent suit leur process.',
      },
      {
        name: 'Relire le QC',
        text: 'Quand les photos arrivent, zoomez sur coutures, couleur, logos et pointures avant d’approuver l’envoi international.',
      },
      {
        name: 'Expédier chez vous',
        text: 'Choisissez une ligne courier, payez le fret international et suivez le colis. Le coût final inclut article, frais et volume — pas seulement le prix annoncé.',
      },
    ],
  },
};

const it: NewsCopy = {
  title: 'Notizie Oopbuy Spreadsheet, guide ed estratti FAQ | oopbuyai.com',
  description:
    'Note sul flusso acquisti, QC e spedizioni, estratti speculari degli avvisi Oopbuy e guida agent — solo formazione; ordini su oopbuy.com.',
  keywords:
    'notizie Oopbuy spreadsheet, guida Oopbuy, estratto FAQ, foto QC magazzino, consigli spedizione FashionReps',
  backHomeLabel: '← Torna alla home',
  h1: 'Notizie & guide',
  topIntroHtml: `Per tutorial e dettagli piattaforma apri la <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">guida agli acquisti Oopbuy Spreadsheet</a>. Riepiloghi haul e tempi di transito sono in <a href="{buyerUrl}">Voci dagli acquirenti</a>. Tariffe e corrieri cambiano spesso — segui il pannello <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> autenticato. Nulla qui è checkout: paghi l’agente altrove.`,
  featuredBannerHeading: 'Banner in evidenza',
  featuredBannerIntroHtml: `Stesso carosello della <a href="{homeCuratedUrl}">home → Esplora categorie</a>. Alcuni tile portano riassunti qui; altri aprono <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> o il <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">catalogo Spreadsheet</a> in nuova scheda. Grafica e copy appartengono alle rispettive promo.`,
  activityHeading: 'Cosa rappresenta ogni banner',
  activityIntroHtml: `Sintesi di ogni tile. Date, soglie e premi seguono sempre le <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">regole live Oopbuy</a>. Jeans e gioielli aprono ricerche filtrate nel catalogo; il resto rispecchia le pagine ufficiali.`,
  activityItems: [
    {
      title: 'POINT SPRINT · riscatto ad alto sconto (Oopbuy × POINTSHAUL)',
      pillVariant: 'internal',
      pillText: 'Su questo sito',
      bodyHtml: `<p>Programma di <strong>riscatto a tempo limitato</strong>, in linea con il “LIMITED TIME” del banner e con scaglioni di sconto (es. % elevati su SKU selezionati). Come accumulare punti, quali SKU entrano e le regole di conversione sono nei materiali ufficiali Oopbuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{activityPointUrl}">Articolo campagna · POINT SPRINT CHALLENGE</a></p>`,
    },
    {
      title: 'Denim / jeans larghi',
      pillVariant: 'external',
      pillText: 'Apre navigazione Spreadsheet',
      bodyHtml: `<p>Percorso <strong>denim</strong>: il tile apre risultati indicizzati per <em>jeans</em> per filtrare marca, lavaggio e prezzo prima di copiare l’URL nel flusso Oopbuy. Le schede restano nel catalogo Spreadsheet; l’ordine si chiude presso il broker.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jeansBrowseUrl}" target="_blank" rel="noopener noreferrer">Sfoglia jeans (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'Regali · corsia gioielli',
      pillVariant: 'external',
      pillText: 'Apre navigazione Spreadsheet',
      bodyHtml: `<p>Corsia <strong>accessori regalo</strong> allineata al banner: apre risultati <em>jewelry</em> per filtrare metallo, logo, prezzo e occasione prima del link broker. Il mix SKU dipende dall’indice attuale; la consegna segue l’agente con cui paghi.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jewelryBrowseUrl}" target="_blank" rel="noopener noreferrer">Sfoglia gioielli (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'OpenStar · Rookie Creator (video creator)',
      pillVariant: 'internal',
      pillText: 'Su questo sito',
      bodyHtml: `<p>Call <strong>creator / influencer</strong>: video conformi alle regole possono sbloccare premi (livelli di payout o coupon sul creativo Oopbuy). Criteri, tempistiche e meccaniche di pagamento sono nei termini ufficiali.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{openstarUrl}">Riassunto programma · Welcome to Rookie Creator</a></p>`,
    },
  ],
  official: {
    badge: 'Estratto ufficiale · Oopbuy',
    faqHubLabel: 'FAQ Oopbuy ↗',
    metaHtml: `Avvisi Oopbuy specchiati solo per lettura. Righe chiuse di default — espandi il titolo per il testo archiviato. In caso di contrasto vale la <a href="{oopbuyIssueUrl}" target="_blank" rel="noopener noreferrer">FAQ live</a>. <strong>{count}</strong> estratti.`,
    sourcePageLabel: 'Pagina originale ↗',
  },
  stepsHeading: 'Passaggi',
  stepListItemsHtml: [
    `<strong>Parti da una categoria.</strong> Nella <a href="{homeCuratedUrl}">griglia categorie</a> scegli il tipo di articolo. Si apre una scheda con la vista Spreadsheet giusta.`,
    `<strong>Apri una pagina prodotto vera.</strong> Scegli inserzioni con opzioni e foto chiare. Evita di salvare solo le home shop se ti serve uno SKU preciso.`,
    `<strong>Copia l’URL del marketplace.</strong> Link completo dalla barra (o condivisione mobile equivalente).`,
    `<strong>Incolla nel flusso Oopbuy.</strong> Su <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">oopbuy.com</a> incolla dove richiesto e blocca taglia / colore / quantità prima del pagamento.`,
    `<strong>Paga su Oopbuy.</strong> Il tratto domestico verso magazzino e le fee seguono Oopbuy e le tue scelte — non questo hub.`,
    `<strong>Controlla le foto QC.</strong> Trattale come obbligatorie: se qualcosa non torna, risolvi con l’agente <em>prima</em> di approvare la spedizione internazionale.`,
    `<strong>Approva la spedizione.</strong> Scegli una linea adatta a paese e budget. Ricorda il peso volumetrico su scarpe grandi, cappotti o tech — i prezzi solo foglio raramente mostrano il costo totale.`,
  ],
  tipsHeading: 'Suggerimenti',
  tipListItemsHtml: [
    `Usa questa pagina con <a href="{howToUrl}">Come acquistare</a> per contesto ed estratti.`,
    `Le colonne del foglio (note batch, yuan, link QC) restano tue anche se parti dal catalogo.`,
    `Totali di spedizione e incassi arrivano solo dal checkout agente; questo hub non gestisce pagamenti o preventivi live.`,
  ],
  disclaimerHtml: `<strong>Dichiarazione:</strong> riassunto indipendente. Policy, merci vietate, rimborsi, dogana e rischio consegna restano tra te, Oopbuy, corrieri e autorità. Verifica ogni inserzione.`,
  howToSchema: {
    name: 'Come acquistare: catalogo Oopbuy Spreadsheet → incolla il link su Oopbuy',
    description:
      'Passi pratici: aprire le categorie, copiare link stabili, incollare su Oopbuy, rivedere le foto QC in magazzino e scegliere spedizione internazionale con costo totale.',
    step: [
      {
        name: 'Scegli una categoria',
        text: 'Dalla home apri il chip giusto (scarpe, giacche…). Ogni link apre il catalogo Spreadsheet in una nuova scheda.',
      },
      {
        name: 'Apri una scheda prodotto',
        text: 'Nel catalogo apri il dettaglio. Conferma varianti, foto e note taglia/batch prima di copiare.',
      },
      {
        name: 'Copia l’URL del prodotto',
        text: 'Copia l’URL completo — non una pagina solo screenshot o immagine.',
      },
      {
        name: 'Incolla su Oopbuy',
        text: 'Accedi a oopbuy.com, usa il flusso link del tuo account, incolla e scegli taglia / colore / quantità con attenzione.',
      },
      {
        name: 'Paga e attendi il magazzino',
        text: 'Completa il pagamento secondo il checkout Oopbuy. Il tratto domestico verso il magazzino è parte del loro processo.',
      },
      {
        name: 'Rivedi le foto QC',
        text: 'Quando arrivano le foto, ingrandisci cuciture, colori, loghi e calzata prima di approvare la spedizione internazionale.',
      },
      {
        name: 'Spedisci al tuo indirizzo',
        text: 'Scegli corriere, paga fret internazionale e traccia il pacco. Il costo finale include articolo, fee e volume — non solo il prezzo in scheda.',
      },
    ],
  },
};

const pl: NewsCopy = {
  title: 'Aktualności Oopbuy Spreadsheet, poradniki i fragmenty FAQ | oopbuyai.com',
  description:
    'Notatki z przepływu zakupów, QC i przesyłki, lustrzane wycinki ogłoszeń Oopbuy i poradnik agent — tylko edukacja; zamówienia na oopbuy.com.',
  keywords:
    'aktualności Oopbuy spreadsheet, poradnik Oopbuy, fragment FAQ, zdjęcia QC magazyn, wskazówki fracht FashionReps',
  backHomeLabel: '← Wróć na stronę główną',
  h1: 'Aktualności i poradniki',
  topIntroHtml: `Instrukcje i opis platformy: <a href="{guideUrl}" target="_blank" rel="noopener noreferrer">poradnik zakupów Oopbuy Spreadsheet</a>. Relacje haul i czasy dostaw znajdziesz w <a href="{buyerUrl}">Głosy kupujących</a>. Stawki i linie kurierskie często się zmieniają — ufaj widokowi w zalogowanym panelu <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a>. Tu nie ma koszyka: płatność u agenta.`,
  featuredBannerHeading: 'Wyróżnione banery',
  featuredBannerIntroHtml: `Ta sama karuzela co przy <a href="{homeCuratedUrl}">stronie głównej → Poznaj kategorie</a>. Część kafelków prowadzi do streszczeń na tej witrynie; część otwiera <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">Oopbuy</a> lub <a href="{mlCatalogUrl}" target="_blank" rel="noopener noreferrer">katalog Spreadsheet</a> w nowej karcie. Grafika i copy należą do danej kampanii.`,
  activityHeading: 'Co oznaczają bannery',
  activityIntroHtml: `Krótki opis każdego kafelka. Daty, progi nagród i zasady zawsze wynikają z aktualnych <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">zasad Oopbuy</a>. Jeans i biżuteria uruchamiają filtrowane wyszukiwanie w arkuszu; pozostałe odsyłają do oficjalnych materiałów.`,
  activityItems: [
    {
      title: 'POINT SPRINT · wysoki rabat przy wymianie punktów (Oopbuy × POINTSHAUL)',
      pillVariant: 'internal',
      pillText: 'Na tej stronie',
      bodyHtml: `<p><strong>Limitowany czasowo program wymiany</strong>, spójny z hasłem “LIMITED TIME” i progami rabatowymi (np. wysokie % na wybrane SKU). Zasady zdobywania punktów, lista kwalifikujących produktów i przeliczenia są w oficjalnych materiałach Oopbuy.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{activityPointUrl}">Tekst kampanii · POINT SPRINT CHALLENGE</a></p>`,
    },
    {
      title: 'Denim / jeansy oversize',
      pillVariant: 'external',
      pillText: 'Otwiera przegląd Spreadsheet',
      bodyHtml: `<p><strong>Odkrywanie denimów</strong>: kafelek otwiera wyniki wyszukiwania <em>jeans</em> w indeksie arkusza, aby filtrować markę, pranie i cenę zanim skopiujesz link do panelu Oopbuy. Oferty zostają w katalogu Spreadsheet; finalizacja u brokera.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jeansBrowseUrl}" target="_blank" rel="noopener noreferrer">Przegląd jeansów (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'Prezenty · ścieżka biżuterii',
      pillVariant: 'external',
      pillText: 'Otwiera przegląd Spreadsheet',
      bodyHtml: `<p><strong>Akcesoria pod prezenty</strong> zgodnie z banerem: wyniki na zapytanie <em>jewelry</em> z filtrami materiałów, cen i okazji przed skopiowaniem linku brokerowi. Asortyment zależy od indeksu; realizacja przy wybranym agencie.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{jewelryBrowseUrl}" target="_blank" rel="noopener noreferrer">Przegląd biżuterii (Oopbuy Spreadsheet) ↗</a></p>`,
    },
    {
      title: 'OpenStar · Rookie Creator (twórcy wideo)',
      pillVariant: 'internal',
      pillText: 'Na tej stronie',
      bodyHtml: `<p>Typowa <strong>akcja creatorska</strong>: zatwierdzone nagrania wg regulaminu mogą dać nagrody (progi wypłat lub kuponów w komunikacji Oopbuy). Kryteria przyjęcia, terminy i wypłaty są w dokumentach kampanii.</p>`,
      moreHtml: `<p class="activity-explainer-more"><a href="{openstarUrl}">Skrót programu · Welcome to Rookie Creator</a></p>`,
    },
  ],
  official: {
    badge: 'Fragment oficjalny · Oopbuy',
    faqHubLabel: 'FAQ Oopbuy ↗',
    metaHtml: `Tu są lustrzane ogłoszenia Oopbuy wyłącznie do podglądu. Wiersze domyślnie zwinięte — rozwiń tytuł, by przeczytać archiwum. Rozbieżności rozstrzyga <a href="{oopbuyIssueUrl}" target="_blank" rel="noopener noreferrer">FAQ na żywo</a>. <strong>{count}</strong> pozycji w zbiorze.`,
    sourcePageLabel: 'Strona źródłowa ↗',
  },
  stepsHeading: 'Kroki',
  stepListItemsHtml: [
    `<strong>Wybór kategorii na stronie głównej.</strong> W siatce <a href="{homeCuratedUrl}">kategorii</a> wskaż rodzaj produktu — otwiera się karta Spreadsheet.`,
    `<strong>Rzeczywista strona oferty.</strong> Wybierz ogłoszenie z jasnym opisem wariantów i zdjęciami. Unikaj zostawania przy samej stronie sklepu, jeśli chcesz konkretny SKU.`,
    `<strong>Kopiuj pełny URL marketplace.</strong> Adres całego produktu albo funkcjonalny link udostępniania, który prowadzi do tego samego ogłoszenia.`,
    `<strong>Wklej w ścieżce Oopbuy.</strong> Na <a href="{oopbuyHomeUrl}" target="_blank" rel="noopener noreferrer">oopbuy.com</a> użyj pola linku zamówienia, potem ustaw rozmiar / kolor / ilość przed zapłatą.`,
    `<strong>Zapłać przy Oopbuy.</strong> Dostawa krajowa do magazynu i prowizje zgodnie z zasadami Oopbuy oraz Twoimi ustawieniami — nie przez ten hub.`,
    `<strong>Sprawdź zdjęcia QC.</strong> Traktuj je obowiązkowo — jeśli coś nie gra, rozwiń z agentem <em>zanim</em> zatwierdzisz eksport.`,
    `<strong>Wybór przesyłki międzynarodowej.</strong> Dopasuj kuriera do kraju i budżetu. Pamiętaj o wadze objętościowej przy dużych butach, płaszczach czy sprzęcie — cena z arkusza rzadko równa się pełnym kosztom.`,
  ],
  tipsHeading: 'Wskazówki',
  tipListItemsHtml: [
    `Łącz stronę z <a href="{howToUrl}">Jak kupować</a>, by mieć kontekst i cytaty z dokumentów.`,
    `Kolumny arkusza (batch, cena juanów, QC) są Twoje także wtedy, gdy start jest z katalogu.`,
    `Wycena frachtu i wpłaty tylko w checkoutcie agenta — hub nie pobiera środków ani nie wyświetla live fee.`,
  ],
  disclaimerHtml: `<strong>Uwaga:</strong> niekomercyjne streszczenie. Zakazy, zwroty, cło i ryzyko przewozu należy wyjaśniać bezpośrednio z Oopbuy i przewoźnikami. Weryfikuj każdą ofertę samodzielnie.`,
  howToSchema: {
    name: 'Jak kupować: katalog Oopbuy Spreadsheet → wklej link w Oopbuy',
    description:
      'Praktycznie: przejść kategorię po kategorii, skopiować stabilny link oferty, wkleić w Oopbuy, ocenić QC w magazynie i dopiero wybrać przesyłkę uwzględniając pełny koszt.',
    step: [
      {
        name: 'Wybierz kategorię',
        text: 'Na stronie domowej uruchom odpowiedni kafelek (np. obuwie, kurtki); link otwiera katalog Spreadsheet w nowej karcie.',
      },
      {
        name: 'Otwórz kartę produktu',
        text: 'W katalogu wejdź w szczegóły SKU. Potwierdź tekst wariantów, zestaw fotografii i notatki rozmiaru/batch — dopiero wtedy kopiuj link.',
      },
      {
        name: 'Skopiuj adres URL',
        text: 'Pobierz pełny adres paska przeglądarki lub równoważny link udostępniania, który rozwiązuje ten sam listing — nie pojedyncze zrzuty ekranu.',
      },
      {
        name: 'Wklej w Oopbuy',
        text: 'Zaloguj się i użyj przepływu wklejania linku dostępnego na koncie, potem ustaw rozmiar, kolor oraz ilość zgodnie z ofertą.',
      },
      {
        name: 'Opłać i poczekaj na magazyn',
        text: 'Sfinalizuj checkout Oopbuy. Odcinek krajowy do ich magazynu realizowany jest przez ich łańcuch usług.',
      },
      {
        name: 'Przejrzyj dokumentację QC',
        text: 'Gdy pojawią się zdjęcia magazynowe, przybliż szwy, kolorysy, logotypy zgodnie z zamówieniem przed akceptacją frachtu międzynarodowego.',
      },
      {
        name: 'Wyślij pod swój adres',
        text: 'Wybierz linię kurierską, opłać eksport międzynarodowy i śledź przesyłkę. Pełny landed cost uwzględnia cenę SKU, prowizje i fracht kubaturowy — nie tylko kwotę z arkusza.',
      },
    ],
  },
};

export const NEWS_PAGE_COPY: Record<RouteLocale, NewsCopy> = {
  en,
  de,
  pt,
  es,
  fr,
  it,
  pl,
};

export function getNewsCopy(locale: string): NewsCopy {
  const lc = locale as RouteLocale;
  return NEWS_PAGE_COPY[lc] ?? en;
}

export function newsHowToJsonLd(copy: NewsCopy, inLanguage: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.howToSchema.name,
    description: copy.howToSchema.description,
    inLanguage,
    totalTime: 'PT20M',
    step: copy.howToSchema.step.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
    })),
  };
}
