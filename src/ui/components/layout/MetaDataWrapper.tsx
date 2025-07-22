import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import getMetaData, { type metaData } from "../../../lib/utils/other/getMetaData";

const MetaDataWrapper = ({ children, titleDynamic, desciptionDynamic }: { children: React.ReactNode, titleDynamic?: string, desciptionDynamic?: string }) => {
  const location = useLocation();

  const metadata: metaData = getMetaData({
    path: location.pathname,
    baseUrl: window.location.href,
  });

  const { canonical, title, description, meta } = metadata;
  const keywords = meta.name.keywords;
  const charset = meta.charset || "utf-8";

  useEffect(() => {
    if (location.pathname)
      // Set <title>
      if (title) {
        const detialsSectionTitle = titleDynamic ?? document.getElementById("dtitle")?.innerText
        document.title = detialsSectionTitle ?? title;
      }

    // Remove old meta tags
    const oldDescription = document.querySelector("meta[name='description']");
    const oldKeywords = document.querySelector("meta[name='keywords']");
    const oldCharset = document.querySelector("meta[charset]");
    const oldCanonical = document.querySelector("link[rel='canonical']");

    oldDescription?.remove();
    oldKeywords?.remove();
    oldCharset?.remove();
    oldCanonical?.remove();

    // Create & append new meta tags
    if (description) {
      const descTag = document.createElement("meta");
      descTag.name = "description";
      // fetch content for the details section
      const detialsSectionDis = desciptionDynamic ?? document.getElementById("ddis")?.innerText.split(".")[0]
      descTag.content = detialsSectionDis ?? description;
      document.head.appendChild(descTag);
    }

    if (keywords) {
      const keywordsTag = document.createElement("meta");
      keywordsTag.name = "keywords";
      keywordsTag.content = keywords;
      document.head.appendChild(keywordsTag);
    }

    if (charset) {
      const charsetTag = document.createElement("meta");
      charsetTag.setAttribute("charset", charset);
      document.head.appendChild(charsetTag);
    }

    if (canonical) {
      const canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.href = canonical;
      document.head.appendChild(canonicalLink);
    }

  }, [location.pathname, canonical, charset, description, keywords, title, titleDynamic, desciptionDynamic]); // Re-run on route change

  return <>{children}</>;
};

export default MetaDataWrapper;
