// src/types/product.js

/**
 * A product from the DummyJSON API (only the fields we use).
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {string} [brand]             Optional: some products have no brand
 * @property {string} category
 * @property {number} price               The price before any discount
 * @property {number} discountPercentage  For example 7.5 means 7.5% off
 * @property {number} rating              From 0 to 5
 * @property {number} stock               How many are available
 * @property {string} thumbnail           Image URL
 */

export {};   // makes this file a module, so other files can import the type
