/** Shared Schema.org HowTo (keep in sync with `/news` jsonLd when re-used). */
export const howToLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to buy using the Oopbuy Spreadsheet catalogue → Oopbuy paste workflow',
  description:
    'Practical Oopbuy Spreadsheet steps: browse category entry points, copy stable marketplace links, paste into Oopbuy, review warehouse QC photos, then choose international shipping with full landed cost in mind.',
  inLanguage: 'en',
  totalTime: 'PT20M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Pick a category',
      text: 'From the homepage, open a category pill that matches what you want (shoes, jackets, etc.). Each link opens the Oopbuy Spreadsheet catalogue in a new tab.',
    },
    {
      '@type': 'HowToStep',
      name: 'Choose a product listing',
      text: 'Inside the catalogue, open a product detail page. Confirm variant text, photos, and any size or batch notes before copying the link.',
    },
    {
      '@type': 'HowToStep',
      name: 'Copy the product URL',
      text: 'Copy the full product page URL from the address bar—not a screenshot page or image-only link.',
    },
    {
      '@type': 'HowToStep',
      name: 'Paste into Oopbuy',
      text: 'Log in on oopbuy.com, use the product-link or buy flow your account provides, paste the URL, and pick size, color, or quantity carefully.',
    },
    {
      '@type': 'HowToStep',
      name: 'Pay and wait for warehouse arrival',
      text: 'Submit the order according to Oopbuy’s checkout. Domestic shipping to the agent warehouse is handled as part of their process.',
    },
    {
      '@type': 'HowToStep',
      name: 'Review QC photos',
      text: 'When warehouse photos appear, zoom in and verify stitching, color, logos, and sizing before approving international shipment.',
    },
    {
      '@type': 'HowToStep',
      name: 'Ship to your address',
      text: 'Choose a courier line, pay international freight, and track the parcel. Landed cost includes item, fees, and volumetric shipping—not just the listing price.',
    },
  ],
} as const;
