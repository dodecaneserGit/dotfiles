function is_c_defined(){void 0===chrome.runtime.getManifest().update_url?c_bind():c("")}is_c_defined();function c_bind(){c=console.log.bind(console);cw=console.warn.bind(console);ce=console.error.bind(console)}function c(){void 0===c&&is_c_defined()}function cw(){void 0===c&&is_c_defined()}function ce(){void 0===c&&is_c_defined()}document.addEventListener("DOMContentLoaded",function(b){var d=document.getElementById("txt_ct"),e=document.getElementById("txt_cot"),f=document.getElementById("txt_ctttl"),g=document.getElementById("txt_ctttr"),h=document.getElementById("txt_settings");chrome.browserAction.getBadgeText({},function(a){void 0!==a&&null!==a&&""!==a&&chrome.tabs.create({active:!1,url:chrome.runtime.getURL("settings.html")})});document.addEventListener("click",function(a){a=a||window.event;switch((a.target||a.srcElement).id){case "btn_settings":chrome.tabs.create({url:chrome.runtime.getURL("settings.html")});window.close();break;case "btn_ct":return chrome.runtime.sendMessage({mission:"popup__close_tab"}),!1;case "btn_cot":chrome.runtime.sendMessage({mission:"popup__close_other_tabs"});window.close();break;case "btn_ctttl":chrome.runtime.sendMessage({mission:"popup__close_tabs_to_the_left"});window.close();break;case "btn_ctttr":chrome.runtime.sendMessage({mission:"popup__close_tabs_to_the_right"}),window.close()}},!1);b=document.getElementById("btn_ct");var k=document.getElementById("btn_cot"),l=document.getElementById("btn_ctttl"),m=document.getElementById("btn_ctttr"),n=document.getElementById("btn_settings");b.onmouseover=function(a){a.stopPropagation();hide_txt();d.style.display="block"};k.onmouseover=function(a){a.stopPropagation();hide_txt();e.style.display="block"};l.onmouseover=function(a){a.stopPropagation();hide_txt();f.style.display="block"};m.onmouseover=function(a){a.stopPropagation();hide_txt();g.style.display="block"};n.onmouseover=function(a){a.stopPropagation();hide_txt();h.style.display="block"};document.body.onmouseover=function(){hide_txt()};i18n()});function hide_txt(){txt_ct.style.display="none";txt_cot.style.display="none";txt_ctttl.style.display="none";txt_ctttr.style.display="none";txt_settings.style.display="none"}function i18n(){(function(){var b=document.querySelectorAll("*[i18n-content]");[].forEach.call(b,function(d){var e=chrome.i18n.getMessage(d.getAttribute("i18n-content"));e&&(d.innerText=e)})})()};