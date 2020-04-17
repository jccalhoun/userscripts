// ==UserScript==
// @name        redirect avclub to latest
// @namespace   Violentmonkey Scripts
// @match       *://*.gizmodo.com/*
// @match       *://*.jalopnik.com/*
// @match       *://*.jezebel.com/*
// @match       *://*.kotaku.com/*
// @match       *://*.lifehacker.com/*
// @match       *://*.deadspin.com/*
// @match       *://*.theroot.com/*
// @match       *://*.thetakeout.com/*
// @match       *://*.theonion.com/*
// @match       *://*.theinventory.com/*
// @grant       none
// @version     2019-04-17
// @author      -
// @description 4/17/2020, 12:49:13 PM
// ==/UserScript==
var els = document.querySelectorAll("a[href^='//avclub.com']");

for (var i = 0, l = els.length; i < l; i++) {
  var el = els[i];
  el.href = 'https://www.avclub.com/latest';
};
//the writing of this was aided by using the answers here: https://stackoverflow.com/questions/10572735/javascript-getelement-by-href 