// https://leetcode.com/problems/encode-and-decode-tinyurl/description/
// Algorithmic Paradigm: Data Structures
// Both methods are O(1) Time complexity and O(N) Space complexity.
// N is the number of urls

class URLShorten {
  constructor() {
    this.charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    this.maxChar = 6;

    // Bi-directional maps
    this.shortToURL = new Map();
    this.URLtoShort = new Map();
  }

  /**
  * Returns 6 letter encoding of a long url
  * @param {string} url
  * @return {string}
  */
  shorten(url) {
    if (this.URLtoShort.has(url)) return this.URLtoShort.get(url);

    let shortURL = this.createEncoding();

    // Keep finding until shortURL is unique
    while (this.shortToURL.has(shortURL)) shortURL = this.createEncoding();

    this.URLtoShort.set(url, shortURL);
    this.shortToURL.set(shortURL, url);
    return shortURL;
  }

  /**
  * Returns decoding of a short url
  * @param {string} short
  * @return {string}
  */
  restore(short) {
    if (this.shortToURL.has(short)) return this.shortToURL.get(short);
    return null;
  }

  /**
  * Creates a random encoding
  * @return {string}
  */
  createEncoding() {
    let encoding  = '';

    // Find random letter combination
    for (let i = 0; i < this.maxChar; i++) {
      const random = Math.floor(Math.random() * this.charSet.length);
      encoding += this.charSet.charAt(random);
    }

    return encoding;
  }
}
