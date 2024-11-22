/*
 Copyright (c) Bulent Ozturk.
 bulentozturk@gmail.com
 Licensed under the MIT License (MIT)
*/
var settings={};function is_c_defined(){void 0===chrome.runtime.getManifest().update_url?c_bind():c("")}is_c_defined();function c_bind(){c=console.log.bind(console);cw=console.warn.bind(console);ce=console.error.bind(console)}function c(){void 0===c&&is_c_defined()}function cw(){void 0===c&&is_c_defined()}function ce(){void 0===c&&is_c_defined()}function is_local_dev(){is_local=!1;void 0===chrome.runtime.getManifest().update_url?is_local=!0:is_local=!1;return is_local}function settings_init(){}settings_init();chrome.storage.sync.get("ctt_settings",function(a){void 0===a||void 0===a.ctt_settings||null===a.ctt_settings?(ce("err.3001 -- Settings could not get."),chrome.runtime.sendMessage({mission:"log_error",err_no:"3001"}),$(document).ready(function(){$("#notify_main").html('<div class="py-3">'+chrome.i18n.getMessage("an_error_occurred_1_2")+'<div class="btn_reset_settings btn_2_5d bg_orange c_fff vam"><div class="button-content"><span class="icon-font"><img class="vat" src="img/reset-settings.png"></span><span class="button-text">'+chrome.i18n.getMessage("reset_settings")+"</span></div></div></div><br>"+chrome.i18n.getMessage("an_error_occurred_3",['<a href="mailto:bulentozturk@gmail.com" target="_blank" class="c_blue">',"</a>",'<a href="https://mail.google.com/mail/u/0/?ui=2&view=cm&fs=1&tf=1&to=bulentozturk@gmail.com&su=Close+This+Tab+extension&body=" target="_blank" class="c_blue">',"</a>"])+"</div>").show()})):(settings=a.ctt_settings,$(document).ready(function(){$("#content").show();var b="en en-AU en-BZ en-CA en-GB en-IE en-IN en-JM en-MY en-NZ en-PH en-SG en-TT en-US en-ZA en-ZW".split(" "),f={ar:{lang:"Arabic",completed_percent:0},az:{lang:"Azerbaijani",completed_percent:0},zh:{lang:"Chinese",completed_percent:0},de:{lang:"German",completed_percent:0},hi:{lang:"Hindi",completed_percent:0},ja:{lang:"Japanese",completed_percent:0},pt:{lang:"Portuguese",completed_percent:100},"pt-BR":{lang:"Portuguese (Brazil)",completed_percent:100},"pt-PT":{lang:"Portuguese (Portugal)",completed_percent:100},ru:{lang:"Russian",completed_percent:0},es:{lang:"Spanish",completed_percent:100},tr:{lang:"Turkish",completed_percent:100}},d=chrome.i18n.getUILanguage();-1===b.indexOf(d)?("tr"===d&&$(".send_your_messages_in_english").hide(),chrome.i18n.getAcceptLanguages(function(k){k.some(function(e){return 0<=b.indexOf(e)})&&(0<=Object.keys(f).indexOf(d)?(lang=f[d].lang,completed_percent=f[d].completed_percent):(lang=d,completed_percent=0),-1<["es"].indexOf(d)&&$("#notify_main").append('<div class="tac py-3"><a href="https://poeditor.com/join/project?hash=znhUNdldxC" target="_blank">'+chrome.i18n.getMessage("help_to_translate")+"</a></div>").show())})):$(".send_your_messages_in_english").hide();0<=Object.keys(f).indexOf(d)&&(lang=f[d].lang,completed_percent=f[d].completed_percent,100===completed_percent&&$("#help_to_translate_block").hide());chrome.browserAction.getBadgeText({},function(k){settings.toolbar_icon.show_badge_txt&&(msg1=chrome.i18n.getMessage("updated_to_a_new_version"),msg2=chrome.i18n.getMessage("changelog"),$("#notify_main").append('<div class="tac py-3">'+msg1+" : "+chrome.runtime.getManifest().version+'. <label for="tab-0-3" class="c_blue cp ml-2">'+msg2+"</label></div>").show());if(settings.toolbar_icon.show_badge_txt||void 0!==k&&null!==k&&""!==k)chrome.browserAction.setBadgeText({text:""}),settings.toolbar_icon.show_badge_txt=!1,chrome.storage.sync.set({ctt_settings:settings})});settings.inpage.element_1.status||($("#section1 .btn_disable_element").html("&#10133; &nbsp; "+chrome.i18n.getMessage("enable_this_element")),$("#section1 .btn_disable_element").addClass("disabled"),$("#default_action_close_tab_properties").hide(),$("#div_disabled").show());""!==settings.support_type&&($("#s_fs_icons_c").appendTo($("#s_fs_icons")),$("#s_fs_ntp_c").appendTo($("#s_fs_ntp")),$(".s_fs").attr("class","d-inline"),$(".s_fd").attr("class","d-none"));for(i=1;7>i;i++)if(settings.inpage["element_"+i]&&settings.inpage["element_"+i].action&&void 0!==settings.inpage["element_"+i].action){var g={};form_elements=(g["inpage__element_"+i+"__action"]="id",g["inpage__element_"+i+"__thickness"]="id",g["inpage__element_"+i+"__thickness_for_right_or_top"]="id",g["inpage__element_"+i+"__bg_color"]="id",g["inpage__element_"+i+"__hint_text"]="id",g["inpage__element_"+i+"__opacity"]="id",g["inpage__element_"+i+"__ntp_custom_url"]="id",g["inpage__element_"+i+"__position"]="radio",g["inpage__element_"+i+"__vertical_scrollbar"]="radio",g["inpage__element_"+i+"__tooltip_on_hover"]="radio",g["inpage__element_"+i+"__hint_icon"]="radio",g["inpage__element_"+i+"__clickevent"]="radio",g["inpage__element_"+i+"__ntp"]="radio",g["inpage__element_"+i+"__auto_hide_horizontal_scrollbar"]="checkbox",g["inpage__element_"+i+"__hint_hide_mini_arrow"]="checkbox",g["inpage__element_"+i+"__rcm_close_other_tabs"]="checkbox",g["inpage__element_"+i+"__rcm_close_tabs_to_the_left"]="checkbox",g["inpage__element_"+i+"__rcm_close_tabs_to_the_right"]="checkbox",g["inpage__element_"+i+"__ntp_dark_theme"]="checkbox",g.auto_maximize_windows="checkbox",g.context_menu__close_tab="checkbox",g.context_menu__close_other_tabs="checkbox",g.context_menu__close_tabs_to_the_left="checkbox",g.context_menu__close_tabs_to_the_right="checkbox",g.toolbar_icon__icon_image="radio",g.toolbar_icon__action="radio",g);Object.keys(form_elements).forEach(function(k){var e=k.split("__"),l="";0<e.length&&(1==e.length?l=settings[e[0]]:2==e.length?l=settings[e[0]][e[1]]:3==e.length?l=settings[e[0]][e[1]][e[2]]:4==e.length&&(l=settings[e[0]][e[1]][e[2]][e[3]]),void 0!=l&&("id"==form_elements[k]?$("#"+k).val(l):"radio"==form_elements[k]?$("input[name="+k+"]").filter('[value="'+l+'"]').prop("checked",!0):"checkbox"==form_elements[k]&&$("#"+k).prop("checked",l)))});g=$("input[name=inpage__element_1__position]:checked").next().html();$(".custom_select_label-placeholder").html(g);update_thickness_text(i,settings.inpage["element_"+i].thickness);update_thickness_for_right_or_top_text(i,settings.inpage["element_"+i].thickness_for_right_or_top);$(document).on("input","#inpage__element_"+i+"__thickness",function(){update_thickness_text($(this).data("action-no"),$(this).val())});$(document).on("input","#inpage__element_"+i+"__thickness_for_right_or_top",function(){update_thickness_for_right_or_top_text($(this).data("action-no"),$(this).val())});update_opacity_text(i,settings.inpage["element_"+i].opacity);$(document).on("input","#inpage__element_"+i+"__opacity",function(){update_opacity_text($(this).data("action-no"),$(this).val())});update_block_thickness_visibility(i,settings.inpage["element_"+i].position);$(document).on("input",'input[name = "inpage__element_'+i+'__position"]',function(){update_block_thickness_visibility($(this).data("action-no"),$(this).val())});update_tooltip_on_hover_visibility(i,settings.inpage["element_"+i].tooltip_on_hover);$(document).on("input",'input[name = "inpage__element_'+i+'__tooltip_on_hover"]',function(){update_tooltip_on_hover_visibility($(this).data("action-no"),$(this).val())})}permission_check__context_menu();$(document).on("change","article :input, article select",function(){if("inpage__element_1__position"===$(this).prop("name")){if("inpage__element_1__position-opener"===$(this).prop("id")||"inpage__element_1__position-close"===$(this).prop("id"))return;var k=$(this).next().html();setTimeout(function(){$(".custom_select_label-placeholder").html(k)},200)}form_elements={};for(i=1;7>i;i++){var e={};f_e=(e["inpage__element_"+i+"__action"]="update_all_tabs",e["inpage__element_"+i+"__position"]="update_all_tabs",e["inpage__element_"+i+"__auto_hide_horizontal_scrollbar"]="update_all_tabs",e["inpage__element_"+i+"__vertical_scrollbar"]="update_all_tabs",e["inpage__element_"+i+"__thickness"]="update_all_tabs",e["inpage__element_"+i+"__thickness_for_right_or_top"]="update_all_tabs",e["inpage__element_"+i+"__bg_color"]="update_all_tabs",e["inpage__element_"+i+"__tooltip_on_hover"]="update_all_tabs",e["inpage__element_"+i+"__hint_icon"]="update_all_tabs",e["inpage__element_"+i+"__hint_hide_mini_arrow"]="update_all_tabs",e["inpage__element_"+i+"__hint_text"]="update_all_tabs",e["inpage__element_"+i+"__opacity"]="update_all_tabs",e["inpage__element_"+i+"__clickevent"]="update_all_tabs",e["inpage__element_"+i+"__rcm_close_other_tabs"]="update_all_tabs",e["inpage__element_"+i+"__rcm_close_tabs_to_the_left"]="update_all_tabs",e["inpage__element_"+i+"__rcm_close_tabs_to_the_right"]="update_all_tabs",e["inpage__element_"+i+"__ntp"]="update_ntp",e["inpage__element_"+i+"__ntp_dark_theme"]="update_ntp",e["inpage__element_"+i+"__ntp_custom_url"]="update_ntp",e.auto_maximize_windows="do_nothing",e.context_menu__close_tab="context_menus_update",e.context_menu__close_other_tabs="context_menus_update",e.context_menu__close_tabs_to_the_left="context_menus_update",e.context_menu__close_tabs_to_the_right="context_menus_update",e.toolbar_icon__icon_image="toolbar_icon_update",e.toolbar_icon__action="set_toolbar_action",e);$.extend(form_elements,f_e)}if("SELECT"===$(this).prop("tagName"))s_name=$(this).prop("id"),s_val=$(this).val();else if("INPUT"===$(this).prop("tagName"))s_name="radio"===$(this).prop("type")?$(this).prop("name"):$(this).prop("id"),s_val="checkbox"===$(this).prop("type")?!!$(this).is(":checked"):$(this).val();else{ce("err.3004");return}end_operation=form_elements[s_name];var l=!0;[s_name,s_val,end_operation].forEach(function(m){if(void 0===m||null===m)ce("err.3005"),l=!1});l&&(-1<["inpage__element_1__position","inpage__element_1__thickness","inpage__element_1__bg_color"].indexOf(s_name)?window.blink_edge_bar__status="blink":window.blink_edge_bar__status="",save_settings(s_name,s_val,end_operation))});$(document).on("keyup paste",'article :input[type="text"]',function(){$(this).trigger("change")})}))});function i18n(){(function(){var a=document.querySelectorAll("*[i18n-content]");[].forEach.call(a,function(b){var f=chrome.i18n.getMessage(b.getAttribute("i18n-content"));f&&(b.innerText=f)})})()}$(document).ready(function(){is_local_dev()?$(".s_dev").removeClass("d-none"):$(".s_dev").remove();i18n();$(document).on("click",".close, .modal",function(a){$("#modal .modal-content, #modal-xl .modal-content").html("");$("#modal, #modal-xl").hide()});$(document).on("click",".modal-content",function(a){a.stopImmediatePropagation();a.stopPropagation()});$(document).on("keyup",function(a){27===a.keyCode&&($("#modal .modal-content, #modal-xl .modal-content").html(""),$("#modal, #modal-xl").hide())});$(document).on("click",".confirm_your_support",function(){chrome.storage.sync.get("ctt_settings",function(a){void 0===a||void 0===a.ctt_settings||null===a.ctt_settings?ce("err.3007 -- Settings could not get."):(settings=a.ctt_settings,""===settings.support_type&&($("#modal .modal-content").html($("#confirm_your_support_content").html()),$("#modal").show()))})});$(document).on("change","#modal select#confirm_your_support_type",function(){$("#btn_confirm_your_support").show()});$(document).on("click","#modal #btn_confirm_your_support",function(){save_settings("support_type",$("#modal select#confirm_your_support_type").val(),"");$("#s_fs_icons_c").appendTo($("#s_fs_icons"));$("#s_fs_ntp_c").appendTo($("#s_fs_ntp"));$(".s_fs").attr("class","d-inline");$(".s_fd").attr("class","d-none");$("#modal .modal-content").html('<span class="close">&times;</span><br><h2 class="tac my-4 c_888">'+chrome.i18n.getMessage("thank_you_for_your_support")+"</h2>").delay(1500).slideUp("slow");setTimeout(function(){$("#modal").hide()},2E3)});$("#section1").on("click",".btn_disable_element",function(){var a=$(this);if(a.hasClass("disabled")){var b=!0;$(".btn_disable_element").html("&#10134; &nbsp; "+chrome.i18n.getMessage("disable_this_element"));$("#div_disabled").hide();$("#default_action_close_tab_properties").slideDown("fast",function(){a.removeClass("disabled")})}else b=!1,$(".btn_disable_element").html("&#10133; &nbsp; "+chrome.i18n.getMessage("enable_this_element")),$("#default_action_close_tab_properties").slideUp("fast",function(){a.addClass("disabled");$("#div_disabled").show()});save_settings("inpage__element_1__status",b,"update_all_tabs")});$(document).on("click","#select_by_seeing",function(){$("#modal-xl .modal-content").html($("#select_by_seeing_content").html());v=$("#inpage__element_1__position").val();$('#modal-xl input[name="inpage__element_1__position_sbs"]').filter('[value="'+v+'"]').prop("checked",!0);$("#modal-xl").show()});$(document).on("click",'#modal-xl input[name="inpage__element_1__position_sbs"]',function(){$("#inpage__element_1__position").val($(this).val()).change();$(".close").trigger("click")});$(".show_partial").each(function(a,b){words=$(b).text().split(" ");13<words.length&&(str_first_part=words.slice(0,13).join(" "),str_last_part=words.slice(13).join(" "),str=str_first_part+" <span class='c_blue cp show_more'>(...)</span><span style='display:none'>"+str_last_part+"</span>",$(b).html(str))});$(document).on("click",".show_more",function(){$(this).hide();$(this).next().toggle()});$(document).on("click",".right_click_options_preview",function(){$("#modal-xl .modal-content").html($("#right_click_options_preview_content").html());$("#modal-xl").show()});$(document).on("click","#btn_permission_request__context_menu",function(){chrome.runtime.sendMessage({mission:"permission_request__context_menu"},function(a){permission_check__context_menu()})});$(document).on("click",".context_menu_options_preview",function(){$("#modal-xl .modal-content").html($("#context_menu_options_preview_content").html());$("#modal-xl").show()});$(document).on("click",".toolbar_icon_action_preview",function(){$("#modal-xl .modal-content").html($("#toolbar_icon_action_preview_content").html());$("#modal-xl").show()});$(document).on("click",".open_chrome_settings",function(){chrome.tabs.create({url:"chrome://settings/appearance"})});$(document).on("click","#btn_permission_request__webrequest",function(){permission_request__webrequest()});$(document).on("click",".btn_reset_settings",function(){$("body").addClass("oh");$("#notify_header_overlay").show();$("#notify_header_inner").html('<div class="py-5">'+chrome.i18n.getMessage("are_you_sure_to_reset_settings")+'</div><div class="btn_notify_reset py-2">'+chrome.i18n.getMessage("reset")+'</div><div class="btn_notify_cancel py-2">'+chrome.i18n.getMessage("cancel")+"</div>");$("#notify_header_inner").css("{width:100% ; padding:0;}");$("#notify_header").addClass("bg_orange").slideDown()});$(document).on("click",".btn_notify_reset",function(){$("body").removeClass("oh");$("#notify_header_overlay").hide();$("#notify_header").slideUp();$("#notify_header_inner").html("");chrome.runtime.sendMessage({mission:"reset_settings__update_all_tabs",update_all_tabs_via:1,sender:"s.1"},function(a){location.reload();return!0})});$(document).on("click",".btn_notify_cancel,  #notify_header_overlay",function(){$("body").removeClass("oh");$("#notify_header_overlay").hide();$("#notify_header").slideUp();$("#notify_header_inner").html("")});$(document).on("keyup",function(a){27===a.keyCode&&($("body").removeClass("oh"),$("#notify_header_overlay").hide(),$("#notify_header").slideUp(),$("#notify_header_inner").html(""))});$("#btn_reset_ctt_settings").on("click",function(){$("#notify_header_inner").html("...");$("#notify_header").addClass("bg_success").slideDown();chrome.runtime.sendMessage({mission:"reset_ctt_settings",sender:"s.2"},function(a){$("#notify_header_inner").html("Settings resetted to the default value.");$("#notify_header").addClass("bg_success").slideDown().delay(2E3).slideUp()})});$("#btn_delete_ctt_settings").on("click",function(){$("#notify_header_inner").html("...");$("#notify_header").addClass("bg_success").slideDown();chrome.runtime.sendMessage({mission:"delete_ctt_settings",sender:"s.3"},function(a){$("#notify_header_inner").html("Settings deleted.");$("#notify_header").addClass("bg_success").slideDown().delay(2E3).slideUp()})});$("#btn_reset_ctt_settings_localstorage").on("click",function(){$("#notify_header_inner").html("...");$("#notify_header").addClass("bg_success").slideDown();chrome.runtime.sendMessage({mission:"reset_ctt_settings_localstorage",sender:"s.4"},function(a){$("#notify_header_inner").html("Localstorage settings resetted to the default value.");$("#notify_header").addClass("bg_success").slideDown().delay(2E3).slideUp()})});$("#btn_delete_ctt_settings_localstorage").on("click",function(){$("#notify_header_inner").html("...");$("#notify_header").addClass("bg_success").slideDown();chrome.runtime.sendMessage({mission:"delete_ctt_settings_localstorage",sender:"s.5"},function(a){$("#notify_header_inner").html("Localstorage settings deleted.");$("#notify_header").addClass("bg_success").slideDown().delay(2E3).slideUp()})});$("#btn_add_ctt_settings").on("click",function(){$("#notify_header_inner").html("...");$("#notify_header").addClass("bg_success").slideDown();chrome.runtime.sendMessage({mission:"add_ctt_settings",sender:"s.6"},function(a){$("#notify_header_inner").html("Localstorage new settings added.");$("#notify_header").addClass("bg_success").slideDown().delay(2E3).slideUp()})});$("#btn_show_toolbar_icon_text").on("click",function(){chrome.browserAction.setBadgeText({text:"NEW"});chrome.browserAction.setBadgeBackgroundColor({color:"#FF0000"});chrome.storage.sync.get(function(a){void 0!==a&&null!==a||ce("err.3006");settings=a.ctt_settings;settings.toolbar_icon.show_badge_txt=!0;chrome.storage.sync.set({ctt_settings:settings})})});$("#btn_console_log_ctt_settings").on("click",function(){$("#notify_header_inner").html("...");$("#notify_header").addClass("bg_success").slideDown();chrome.runtime.sendMessage({mission:"console_log_ctt_settings",sender:"s.7"},function(a){$("#notify_header_inner").html("Settings in console.log");$("#notify_header").addClass("bg_success").slideDown().delay(2E3).slideUp()});chrome.storage.sync.get(function(a){c("ctt_items:");c(a)})});$("#btn_console_log_storage_getBytesInUse").on("click",function(){$("#notify_header_inner").html("...");$("#notify_header").addClass("bg_success").slideDown();chrome.runtime.sendMessage({mission:"console_log_storage_getBytesInUse",sender:"s.11"},function(a){$("#notify_header_inner").html("storage_getBytesInUse in eventPage console.log");$("#notify_header").addClass("bg_success").slideDown().delay(2E3).slideUp()})});$(document).on("click","#btn_permission_check__context_menu",function(){permission_check__context_menu()});$(document).on("click","#btn_permission_remove__context_menu",function(){chrome.runtime.sendMessage({mission:"permission_remove__context_menu"},function(a){permission_check__context_menu()})})});function update_block_thickness_visibility(a,b){-1<"left left_top left_middle left_bottom bottom bottom_left bottom_center bottom_right".split(" ").indexOf(b)?($("#block__thickness__"+a).show(),$("#block__thickness_for_right_or_top__"+a).hide()):-1<["right_middle","top_center"].indexOf(b)&&($("#block__thickness__"+a).hide(),$("#block__thickness_for_right_or_top__"+a).show());-1<["bottom","bottom_left","bottom_center","bottom_right"].indexOf(b)?($("#block__auto_hide_horizontal_scrollbar__"+a).show(),$("#block__vertical_scrollbar__"+a).hide()):-1<["right","right_top","right_middle","right_bottom"].indexOf(b)?($("#block__auto_hide_horizontal_scrollbar__"+a).hide(),$("#block__vertical_scrollbar__"+a).show()):-1<["left","left_top","left_middle","left_bottom","top_center"].indexOf(b)&&($("#block__auto_hide_horizontal_scrollbar__"+a).hide(),$("#block__vertical_scrollbar__"+a).hide())}function update_tooltip_on_hover_visibility(a,b){"show_icon"===b?($("#show_icon_block__"+a).attr("style",""),$("#show_text_block__"+a).attr("style","display:none!important")):"show_text"===b?($("#show_icon_block__"+a).attr("style","display:none!important"),$("#show_text_block__"+a).attr("style","")):"dont_show"===b&&($("#show_icon_block__"+a).attr("style","display:none!important"),$("#show_text_block__"+a).attr("style","display:none!important"))}function update_thickness_text(a,b){px=chrome.i18n.getMessage("px");px=""===px?"px":px;$("#inpage__element_"+a+"__thickness_text").html(b+" "+px)}function update_thickness_for_right_or_top_text(a,b){px=chrome.i18n.getMessage("px");px=""===px?"px":px;$("#inpage__element_"+a+"__thickness_for_right_or_top_text").html(b+" "+px)}function update_opacity_text(a,b){$("#inpage__element_"+a+"__opacity_text").html(b)}function permission_check__context_menu(){chrome.permissions.contains({permissions:["contextMenus"]},function(a){a?($("#btn_permission_remove__context_menu").show(),$("#context_menu_permission_request").hide(),$("#context_menu_options").removeClass("disabled_block")):($("#btn_permission_remove__context_menu").hide(),$("#context_menu_permission_request").show(),$("#context_menu_options").addClass("disabled_block"))})}function __iptal__permission_request__context_menu(){chrome.permissions.request({permissions:["contextMenus"]},function(a){a&&chrome.runtime.sendMessage({mission:"context_menus_update",sender:"s.8"});permission_check__context_menu()})}function __iptal__permission_remove__context_menu(){chrome.permissions.remove({permissions:["contextMenus"]},function(a){})}function permission_check__webrequest(){chrome.permissions.contains({permissions:["tabs","declarativeNetRequest","declarativeNetRequestFeedback","webRequestBlocking"]},function(a){a?($("#bookmarklets_permission_request").hide(),$("#bookmarklets_options").removeClass("disabled_block")):($("#bookmarklets_permission_request").show(),$("#bookmarklets_options").addClass("disabled_block"))})}function permission_request__webrequest(){chrome.permissions.request({permissions:["webrequest"]},function(a){permission_check__webrequest()})}function save_settings(a,b,f){chrome.storage.sync.get("ctt_settings",function(d){if(void 0===d||void 0===d.ctt_settings||null===d.ctt_settings)ce("err.3002");else{settings=d.ctt_settings;d=a.split("__");if(1==d.length&&void 0!==settings[d[0]])settings[d[0]]=b;else if(2==d.length&&void 0!==settings[d[0]][d[1]])settings[d[0]][d[1]]=b;else if(3==d.length&&void 0!==settings[d[0]][d[1]][d[2]])settings[d[0]][d[1]][d[2]]=b;else if(4==d.length&&void 0!==settings[d[0]][d[1]][d[2]][d[3]])settings[d[0]][d[1]][d[2]][d[3]]=b;else{ce("err.3003");return}chrome.storage.sync.set({ctt_settings:settings},function(){"update_all_tabs"===f?chrome.runtime.sendMessage({mission:"update_all_tabs",update_all_tabs_via:1,sender:"s.9"}):"context_menus_update"===f?chrome.runtime.sendMessage({mission:"context_menus_update",sender:"s.10"}):"toolbar_icon_update"===f?chrome.browserAction.setIcon({path:$('input[name="toolbar_icon__icon_image"]:checked').val()}):"set_toolbar_action"===f?chrome.runtime.sendMessage({mission:"set_toolbar_action",sender:"s.12"}):"reload_page"===f&&location.reload();ToastMaker(chrome.i18n.getMessage("saved"),3E3,{valign:"top",align:"right"})})}})}chrome.runtime.onMessage.addListener(function(a,b,f){"run_content_init"===a.mission&&(ctt_settings_contentjs=a,content_init())});!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.ToastMaker=b()}(this,function(a){return function(b,f,d){function g(l,m,n,p,q){var r=Array.isArray(l)?"array":typeof l;if(p&&(null==l||""===l))throw"Invalid argument '"+m+"'. Argument is either empty, null or undefined";if(r!==n)throw"Invalid argument '"+m+"'. Type must be "+n+" but found "+r;if(q&&-1==q.indexOf(l))throw"Invalid value "+l+" specified for argument '"+m+"'. Allowed - "+q.join(" | ");}g(b,"text","string",!0);g(d=d||{},"options","object");g(f=f||3E3,"timeout","number");d.styles=d.styles||{};g(d.styles,"styles","object");d.align=d.align||"center";g(d.align,"align","string",!0,["left","center","right"]);d.valign=d.valign||"bottom";g(d.valign,"valign","string",!0,["top","bottom"]);d.classList=d.classList||[];g(d.classList,"classList","array");d.classList=d.classList.concat(["toastmaker","toastmaker-"+d.valign,"toastmaker-"+d.align]);var k=document.createElement("div");d.classList.forEach(function(l){if("string"!=typeof l)throw"Invalid css class '"+JSON.stringify(l)+"'. CSS class must be of type string";k.classList.add(l)});b=document.createTextNode(b);for(var e in k.appendChild(b),k.style.animationDuration=f/1E3+"s",d.styles){if("string"!=typeof d.styles[e]&&"number"!=typeof d.styles[e])throw"Invalid value '"+JSON.stringify(d.styles[e])+"' specified for style '"+e+"'. Style value must be of type string or number";k.style[e]=d.styles[e]}document.body.appendChild(k);setTimeout(function(){document.body.removeChild(k)},f)}});