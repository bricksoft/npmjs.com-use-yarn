// ==UserScript==
// @name         npmjs.com-use-yarn
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  Changes install field to use yarn instead of npm on npmjs.com
// @author       Bricksoft
// @downloadURL  https://raw.githubusercontent.com/bricksoft/npmjs.com-use-yarn/master/npmjs.com-use-yarn.user.js
// @updateURL    https://raw.githubusercontent.com/bricksoft/npmjs.com-use-yarn/master/npmjs.com-use-yarn.user.js
// @icon         https://static.npmjs.com/da3ab40fb0861d15c83854c29f5f2962.png
// @match        *://www.npmjs.com/package/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let x =document.querySelector(".flex-auto.truncate.db > span");
    x.innerText = x.innerText.replace("npm i", "yarn add");
})();
