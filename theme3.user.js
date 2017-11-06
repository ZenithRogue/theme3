// ==UserScript==
// @name         Theme3 userscript
// @match        https://llk.github.io/scratch-gui*
// @author       NitroCipher
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var style = document.createElement('style');
    style.innerHTML = `
    .gui_editor-wrapper_2DYcj{
        left: 490px;
        z-index -1;
    }
    .gui_tabs_AgmuP{
        display none;
    }
    .gui_target-wrapper_36Gbz{
        right: 875px;
        position: relative;
        z-index: 100;
    }
    .stage_stage-wrapper_eRRuk{
        right: 875px;
        position: relative;
        z-index: 100;
    }
    .gui_stage-menu-wrapper_W5Ler{
        right: 875px;
        position: relative;
        z-index: 100;
    }
    .stage-selector_stage-selector_3oWOr{
        right: 10px;
        position: relative;
    }
    .sprite-selector_sprite-selector_2KgCX {
        right: 8px;
        position: relative;
    }
    g[data-category="motion" i] > path.blocklyBlockBackground {
        fill: #4a6cd4;
        stroke: #1037AA;
    }
    g[data-category="motion" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #2B52C7;
        stroke: #1037AA;
    }
    g[data-category="looks" i] > path.blocklyBlockBackground {
        fill: #8a55d7;
        stroke: #5513B7;
    }
    g[data-category="looks" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #7136C7;
        stroke: #5513B7;
    }
    g[data-category="sounds" i] > path.blocklyBlockBackground {
        fill: #bb42c3;
        stroke: #91059B;
    }
    g[data-category="sounds" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #A724B0;
        stroke: #91059B;
    }
    g[data-category="events" i] > path.blocklyBlockBackground {
        fill: #c88330;
        stroke: #7A4200;
    }
    g[data-category="events" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #A26317;
        stroke: #7A4200;
    }
    g[data-category="control" i] > path.blocklyBlockBackground {
        fill: #e1a91a;
        stroke: #8A6300;
    }
    g[data-category="control" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #B1820C;
        stroke: #8A6300;
    }
    g[data-category="sensing" i] > path.blocklyBlockBackground {
        fill: #2ca5e2;
        stroke: #0470A5;
    }
    g[data-category="sensing" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #0A96DA;
        stroke: #0470A5;
    }
    g[data-category="operators" i] > path.blocklyBlockBackground {
        fill: #5cb712;
        stroke: #337100;
    }
    g[data-category="operators" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #469504;
        stroke: #337100;
    }
    g[data-category="data" i] > path.blocklyBlockBackground {
        fill: #ee7d16;
        stroke: #944700;
    }
    g[data-category="data" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #BC5E07;
        stroke: #944700;
    }
    g[data-category="pen" i] > path.blocklyBlockBackground {
        fill: #0e9a6c;
        stroke: #0b845c;
    }
    g[data-category="pen" i] > g[data-argument-type="dropdown"] > path.blocklyBlockBackground {
        fill: #0b845c;
        stroke: #08704e;
    }`;
    document.body.appendChild(style);
})();
