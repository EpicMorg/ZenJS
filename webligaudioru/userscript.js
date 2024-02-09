// ==UserScript==
// @name         web.ligaudio.ru Safe dowloader
// @namespace    epicmorg.ligaudioru.downloader
// @version      20240209
// @description  Download files with safe without annoyng ads
// @license      MIT
// @author       EpicMorg DevTeam
// @match        https://web.ligaudio.ru/*
// @match        https://web.ligaudio.ru/mp3/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ligaudio.ru
// @grant        none
// ==/UserScript==

(function() {
    document.querySelectorAll('a').forEach(function(link) {
        if (link.href.toLowerCase().endsWith('.mp3')) {
            link.href += '?play';
        }
    });
})();
