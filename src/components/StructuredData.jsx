// Structured Data for individual room pages (JSON-LD)
import { Helmet } from 'react-helmet-async';

export function RoomStructuredData({ name, description, price, url, image }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": name,
    "description": description,
    "url": `https://www.crossroadsinnfl.com${url}`,
    "image": image,
    "priceRange": `From $${price}/night`,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 28,
      "unitCode": "MTK"
    },
    "occupancy": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 2
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Flat-screen TV", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Private Bathroom", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
    ],
    "containedInPlace": {
      "@type": "Hotel",
      "name": "Crossroads Inn Hotel",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7050 Okeechobee Rd",
        "addressLocality": "Fort Pierce",
        "addressRegion": "FL",
        "postalCode": "34945",
        "addressCountry": "US"
      },
      "telephone": "+17724658600"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbStructuredData({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": `https://www.crossroadsinnfl.com${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
