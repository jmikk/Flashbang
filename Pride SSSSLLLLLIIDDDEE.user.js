// ==UserScript==
// @name        Pride Slide
// @match       https://*.nationstates.net/*template-overall=none*
// @grant       none
// @version     1.0
// @author      9003
// @description Gradually change the background color through the full rainbow spectrum
// ==/UserScript==
(function () {
    'use strict';
    let hue = 0;

    setInterval(function () {
        hue = (hue + 1) % 360;
        document.querySelector('body').style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    }, 1);
})();
