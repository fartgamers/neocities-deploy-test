// ==UserScript==
// @name         'Post to X' to 'Tweet'
// @homepage     https://wiggle.monster/more/tools/userscripts/tweetbutton
// @version      2024-05-05
// @description  replaces all post buttons with tweet buttons
// @author       WiiCHiCKEN
// @match        *://platform.twitter.com/widgets/*
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// @grant        GM_addStyle
// ==/UserScript==

const stylesContent = ".btn-o #b{color:#fff!important;font-weight:500!important;-moz-transform:scale(1)!important;-moz-transform-origin:left center!important;background-color:#1b95e0!important;border-bottom-left-radius:3px!important;border-bottom-right-radius:3px!important;border-top-left-radius:3px!important;border-top-right-radius:3px!important;box-sizing:border-box!important;cursor:pointer!important;display:inline-block!important;height:20px!important;outline-color:#fff!important;outline-style:none!important;outline-width:0!important;position:relative!important;text-decoration-color:#fff!important;text-decoration-line:none!important;text-decoration-style:solid!important;vertical-align:top!important;padding:1px 8px 1px 6px !important}#b i{background-position:0 0!important;background-repeat:no-repeat no-repeat!important;-webkit-background-clip:border-box!important;font-style:italic!important;background-attachment:scroll!important;background-clip:border-box!important;background-color:rgba(0,0,0,0)!important;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23fff%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E)!important;background-origin:padding-box!important;background-size:auto!important;display:inline-block!important;height:14px!important;position:relative!important;top:2px!important;width:14px!important}";

const addStyles = (css) => {
	const styleEle = document.createElement("style");
	styleEle.textContent = css;
	document.documentElement.appendChild(styleEle);
};

function runTheThingy() {
	addStyles(stylesContent);
	document.getElementById('l').innerHTML = 'Tweet';
};

runTheThingy();