// ==UserScript==
// @name         Impfterminservice
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatische akustische Benachrichtigung über neue Impftermine
// @author       Björn Eberhardt
// @license      MIT; https://opensource.org/licenses/MIT
// @match        https://*.impfterminservice.de/impftermine/suche/*
// @icon         https://www.google.com/s2/favicons?domain=impfterminservice.de
// @grant        none
// ==/UserScript==
// MIT license used to import to OpenUserJS

// Automatische akustische Benachrichtigung über neue Impftermine

(function() {
    'use strict';

    let accept = true;

    const reload = () => {
        if ($(".its-search-step-info a").length >= 1) {
            location.reload();
        } else {
            window.setTimeout(reload, 2500);
        }
    };

    const wait = () => {
        if ([...$(".its-slot-pair-search-item input[type=radio]").map((x, y) => y.checked)].includes(true)) {
        } else if (accept && $(".its-slot-pair-search-radio-btn").length >= 1) {
            let context = new AudioContext()
            let o = context.createOscillator()
            o.type = "square"
            o.connect(context.destination)
            o.start()
            window.setTimeout(() => o.stop(), 300)
            window.setTimeout(wait, 500);
        } else {
            reload();
            window.setTimeout(() => location.reload(), 450000);
        }
    };

    window.setTimeout(() => {
        $(".kv-btn-round.search-filter-button").click();
        window.setTimeout(() => {
            $(".kv-btn-hollow.btn-magenta")[1].onclick = () => {
                accept = false;
            }
        }, 500);
        window.setTimeout(wait, 500);
    }, 500);
})();
