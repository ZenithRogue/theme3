// ==UserScript==
// @name         Theme3 Beveler
// @match        https://llk.github.io/scratch-gui*
// @match        https://*scratch.mit.edu*
// @match        https://scratch.mit.edu/projects/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @updateURL    https://github.com/NitroCipher/theme3/raw/master/theme3.user.js
// @version      1.7a
// @author       NitroCipher
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var style = document.createElement('style');
    var styleAppend;
    var categories = ["null", "motion", "looks", "sounds", "events", "control", "sensing", "operators", "data", "data-lists", "pen", "more"];
    var colors = ["null", "null", "null", "null", "#DE9E2E", "#FFBF00", "null", "null", "null", "null", "#0fBD8C", "null"];
    //var colors = ["null", "#777DA7", "#94C9A9", "#C6ECAE", "#885053", "#FE5F55", "#87684F", "#FFB454", "#8875A5", "#95C9C4", "#AFEDB6", "#632d99"];
    //var colors = ["null", "#4a6cd4", "#8a55d7", "#bb42c3", "#c88330", "#e1a91a", "#2ca5e2", "#5cb712", "#ee7d16", "#cc5b22", "#0e9a6c", "#632d99"];
    //var colors = ["null", "#32B8C0", "#64C7C0", "#D2D8B9", "#FF9EB2", "#E761AF", "#E68FCA", "#848BD5", "#C39DFA", "#CB5778",];
    //var colors = ["null", "#F7AA6A", "#E69672", "#F4D7AA", "#F0E7CB", "#D0E2DA", "#AFDBE3", "#CFCB72", "#E8AA55", "#CBA37C", "#BCAEC4", "#DEAFCA"];
    categories.forEach(styleColor);
    style.innerHTML = `
    g[data-shapes~="reporter"] > path.blocklyBlockBackground,
    g[data-shapes~="boolean"] > path.blocklyBlockBackground,
    g[data-shapes~="hat"] > path.blocklyBlockBackground,
    g[data-shapes~="c-block"] > path.blocklyBlockBackground,
    g[data-shapes~="stack"] > path.blocklyBlockBackground {
        stroke: #000000;
        stroke-opacity: 0;
        filter: url(#bevelFilter) !important;
    }
    line,
    g[data-shapes] > path.blocklyBlockBackground {
        stroke: #000000;
        stroke-opacity: 0;
        filter: url(#inputBevelFilter);
    }
    .blocklyDropDownDiv,
    div.goog-menuitem,
    g[data-argument-type~="variable"] > .blocklyBlockBackground,
    g[data-argument-type~="dropdown"] > .blocklyBlockBackground,
    path[data-argument-type] {
        fill: #000000;
        fill-opacity: 0.1;
        stroke: #000000;
        stroke-opacity: 0.2;
    }
    g[data-category] > path.blocklyBlockBackground:hover {
        fill: #716771;
    }` + styleAppend;

    fetch('https://mrjacobbloom.github.io/scratch-themes-resources/2/filters.svg').then(function(response) {
        return response.text();
    }).then(function(response) {
        var doc = new DOMParser().parseFromString(response, 'image/svg+xml');
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.appendChild(document.importNode(doc.documentElement.firstElementChild, true));
        document.body.appendChild(svg);
        document.body.appendChild(style);
    });



    var waitForEl = function(selector, callback) {
        if (jQuery(selector).length) {
            callback();
        } else {
            setTimeout(function() {
                waitForEl(selector, callback);
            }, 100);
        }
    };

    waitForEl(".gui_tabs_AgmuP", function() {
        document.querySelector("[class^=target-pane_target-pane]").style.flexDirection = "row-reverse";
        document.querySelector("[class^=gui_flex-wrapper]").style.flexDirection = "row-reverse";
        console.log("Swapped editor and viewer");
    });

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
