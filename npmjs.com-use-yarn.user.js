// ==UserScript==
// @name         npmjs.com-use-yarn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes install field to use yarn instead of npm on npmjs.com
// @author       Bricksoft
// @match        https://www.npmjs.com/package/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let x =document.getElementsByClassName("flex-auto truncate db")[0]
    x.innerText = x.innerText.replace("npm i", "yarn add");
})();
