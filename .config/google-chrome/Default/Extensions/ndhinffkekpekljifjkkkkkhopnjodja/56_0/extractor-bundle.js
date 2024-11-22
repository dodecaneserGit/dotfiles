/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/content/app/extensions/shared/extractor.js
class Extractor {
  parse() {
    const loc = document.location;
    const uri = {
      spec: loc.href,
      host: loc.host,
      prePath: loc.protocol + '//' + loc.host,
      scheme: loc.protocol.substr(0, loc.protocol.indexOf(':')),
      pathname: loc.pathname,
      pathBase: loc.protocol + '//' + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf('/') + 1)
    };
    const article = {
      content: document.documentElement.outerHTML,
      uri
    };

    // See http://stackoverflow.com/questions/5980682/obtaining-canonical-url-using-javascript
    // For more information on how to extract the canonical url of a page
    const canonicalElem = document.querySelector("link[rel='canonical']");
    if (canonicalElem) {
      article.canonicalUrl = canonicalElem.href;
    }
    const feedUrl = this.extractFeedUrl();
    if (feedUrl) {
      article.streamId = 'feed/' + feedUrl;
    }

    // Extract the source title from the page
    article.sourceTitle = this.extractSourceTitle();
    return article;
  }

  // Find if there are any rss feeds in the html page, and return the feed
  extractFeedUrl() {
    // First check if it has embedded feed links, such as:
    // (<link rel="alternate" type="application/rss+xml" etc). If so, show the
    // page action icon.

    // Find all the RSS <link> elements.
    const result = document.evaluate('//*[local-name()="link"][contains(@rel, "alternate")] [contains(@type, "rss") or contains(@type, "atom") or contains(@type, "rdf")]', document, null, 0, null);
    let item;
    while (item = result.iterateNext()) {
      // EK - We should exclude Comment feeds
      if (item.title != null && item.title.toLowerCase().indexOf('comment') === -1) {
        return item.href;
      }
    }

    // Second check the URLs in the page:
    // Regex to test url finishing by "feed" or "rss" or "feed/" or "rss/"
    const reg = new RegExp(/\.[a-z]{2,6}\/.*(feed|rss)/);
    // Test that regex on all <a> tags in the page
    const feedLinks = Array.prototype.slice.call(document.querySelectorAll('a[href]')).filter(el => el.href.match(reg));
    if (feedLinks && feedLinks.length > 0) {
      return feedLinks.href;
    }

    // Third try the current url with the regex:
    if (location.href.match(reg) && location.href.match(reg).length > 0) {
      return location.href;
    }
    return null;
  }
  extractSourceTitle() {
    let elem;
    elem = document.querySelector("meta[property='og:site_name']");
    if (elem && elem.content) {
      return elem.content;
    }
    elem = document.querySelector("meta[property='apple-mobile-web-app-title']");
    if (elem && elem.content) {
      return elem.content;
    }
    elem = document.querySelector("link[rel='application/opensearchdescription+xml']");
    if (elem && elem.title) {
      return elem.title;
    }
    elem = document.querySelector("meta[property='twitter:site']");
    if (elem && elem.content) {
      return elem.content;
    }
    return document.location.host;
  }
}
/* harmony default export */ const extractor = (Extractor);
;// CONCATENATED MODULE: ./src/content/app/extensions/mini/extractor-chrome.js


// Listening from the request from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'readability') {
    const ext = new extractor();
    const article = ext.parse();
    sendResponse({
      article
    });
  }
});
/******/ })()
;