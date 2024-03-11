// ==UserScript==
// @name        Flash bang
// @match       https://*.nationstates.net/*template-overall=none*
// @grant       none
// @version     1.0
// @author      Kractero
// @description Make the background flicker between black and white
// ==/UserScript==
(function () {
    'use strict';
    let isBlack = true; // Initial background color
    setInterval(function () {
        document.querySelector('body').style.backgroundColor = isBlack ? 'white' : 'black';
        isBlack = !isBlack; // Flip the color for the next interval
    }, 1); // Change color every 100 milliseconds
})();
