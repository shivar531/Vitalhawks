import { useEffect } from "react";

const SITE = "https://www.vitalhawks.com";

const DEFAULTS = {
  title:
    "VitalHawks | Verified B2B Contact Data — Direct Mobiles & Work Emails",
  description:
    "VitalHawks delivers verified B2B decision-maker contact data — direct mobile numbers and work emails with 95% accuracy, delivered within 48 hours. Built for sales, SDR, and marketing teams.",
  url: SITE + "/",
  image: SITE + "/og-image.png",
};

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=");
    el.setAttribute(key, val.replace(/["']/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
  return el;
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
}

/**
 * Sets page-specific SEO metadata: title, description, canonical,
 * Open Graph, Twitter cards, robots, and optional FAQ schema.
 * Restores site defaults when the page unmounts.
 */
export default function useSeo({ title, description, path, faqs }) {
  useEffect(() => {
    const url = SITE + path;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setLink("canonical", url);
    setMeta('meta[name="robots"]', "content", "index,follow");

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:type"]', "content", "website");

    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");

    // FAQ structured data — can earn expandable Q&A results in Google
    let script;
    if (faqs && faqs.length) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-faq", "true");
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
      document.head.appendChild(script);
    }

    return () => {
      document.title = DEFAULTS.title;
      setMeta('meta[name="description"]', "content", DEFAULTS.description);
      setLink("canonical", DEFAULTS.url);

      setMeta('meta[property="og:title"]', "content", "VitalHawks | Verified B2B Contact Data");
      setMeta(
        'meta[property="og:description"]',
        "content",
        "Direct mobile numbers and verified work emails of decision-makers — 95% accuracy, delivered in 48 hours."
      );
      setMeta('meta[property="og:url"]', "content", DEFAULTS.url);

      setMeta('meta[name="twitter:title"]', "content", "VitalHawks | Verified B2B Contact Data");
      setMeta(
        'meta[name="twitter:description"]',
        "content",
        "Direct mobile numbers and verified work emails of decision-makers — 95% accuracy, delivered in 48 hours."
      );

      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, [title, description, path, faqs]);
}
