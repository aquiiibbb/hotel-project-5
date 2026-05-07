import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonical, ogImage }) {
  const base = 'https://www.crossroadsinnfl.com';
  const fullTitle = title
    ? `${title} | Crossroads Inn Hotel – Fort Pierce, FL`
    : 'Crossroads Inn Hotel | Fort Pierce, FL – Best Rates, Comfort & Hospitality';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Stay at Crossroads Inn Hotel in Fort Pierce, FL. Comfortable rooms, free WiFi and parking. Book direct for best rates.'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical ? `${base}${canonical}` : base} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Comfortable hotel in Fort Pierce, FL.'} />
      <meta property="og:url" content={canonical ? `${base}${canonical}` : base} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || 'Comfortable hotel in Fort Pierce, FL.'} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
