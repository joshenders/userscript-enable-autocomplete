// ==UserScript==
// @name         Enable autocomplete
// @description  Removes the autocomplete attribute from form input elements
// @namespace    https://joshenders.com
// @version      v1.0.0
// @author       Josh Enders <josh.enders@gmail.com>
// @updateURL    https://raw.githubusercontent.com/joshenders/userscript-enable-autocomplete/stable/enable-autocomplete.user.js
// @downloadURL  https://raw.githubusercontent.com/joshenders/userscript-enable-autocomplete/stable/enable-autocomplete.user.js
// @grant        none
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function removeAttribute(element) {
        let attribute = element.getAttributeNode('autocomplete');
        if (attribute !== null) {
            element.removeAttributeNode(attribute);
        }
    }

    function removeAllAutocompleteAttributes(elements) {
        for (let i = 0; i < elements.length; i++) {
            removeAttribute(elements[i]);
        }
    }

    removeAllAutocompleteAttributes(document.querySelectorAll('input'))
})();
