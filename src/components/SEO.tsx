import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
}

const SITE_URL = "https://edgarjuniorcorretor.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonical = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical}`;

    const imageUrl = image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`;

    document.title = title;

    setMeta("description", description);
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow");

    setProperty("og:type", "website");
    setProperty("og:site_name", "Edgar Junior");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:image", imageUrl);
    setProperty("og:locale", "pt_BR");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);

    let canonicalElement = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.appendChild(canonicalElement);
    }

    canonicalElement.href = canonicalUrl;
  }, [title, description, canonical, image, noindex]);

  return null;
}

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
}

function setProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.content = content;
}