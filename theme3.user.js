// ==UserScript==
// @name         Theme3 Userscript
// @match        https://llk.github.io/scratch-gui*
// @updateURL    https://github.com/NitroCipher/theme3/raw/master/theme3.user.js
// @version      1.3
// @author       NitroCipher
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var style = document.createElement('style');
    var styleAppend;
    var categories = ["null", "motion", "looks", "sounds", "events", "control", "sensing", "operators", "data", "list", "pen", "more"];
    var colors = ["null", "null", "null", "null", "#DE9E2E", "#FFBF00", "null", "null", "null", "null", "#0fBD8C", "null"];
    //var colors = ["null", "#4a6cd4", "#8a55d7", "#bb42c3", "#c88330", "#e1a91a", "#2ca5e2", "#5cb712", "#ee7d16", "#cc5b22", "#0e9a6c", "#632d99"];
    categories.forEach(styleColor);
    style.innerHTML = `
    line,
    g[data-shapes] > path.blocklyBlockBackground {
        stroke: #000000;
        stroke-opacity: 0.2;
    }
    .blocklyDropDownDiv,
    div.goog-menuitem,
    g[data-argument-type~="dropdown"] > .blocklyBlockBackground,
    path[data-argument-type] {
        fill: #000000;
        fill-opacity: 0.1;
        stroke: #000000;
        stroke-opacity: 0.2;
    }` + styleAppend;

    document.body.appendChild(style);

    function styleColor(item, index){
        if (colors[index] !== "null"){
            styleAppend = styleAppend + `g[data-category="`+item+`" i] > path.blocklyBlockBackground {fill: `+colors[index]+`;}`;
        }
        if (index == 1){ //I have no idea why index 1 is broken
            styleAppend = styleAppend + `g[data-category="`+item+`" i] > path.blocklyBlockBackground {fill: `+colors[1]+`;}`;
        }
        if (index == 4){ //I have no idea why index 4 is broken
            styleAppend = styleAppend + `g[data-category="`+item+`" i] > path.blocklyBlockBackground {fill: `+colors[4]+`;}`;
        }
    }
})();
