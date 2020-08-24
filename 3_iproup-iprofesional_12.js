var adzone = adzone||{};
var googletag = googletag||{};
googletag.cmd = googletag.cmd||[];
  


(function(t) {


t.code = '3_iproup-iprofesional';
t.version = '12';
t.supertag = true;


if(localStorage && localStorage.getItem && (localStorage.getItem("adzone-draft")==1)) {
  var s = document.createElement("script");
  s.src = "https://us-east-1.linodeobjects.com/ad.s-adzone.com/config/"+t.code+"_draft.js";
  document.head.appendChild(s);
  console.log("** Adzone DRAFT version **");
  return;
}


if(t.initialized) { return; }
t.initialized = true;

t.version_datetime = '2020-Aug-24 15:05:53';

if(t.cancel_all_ads_in_page) {
  console.error("Adzone: No ads in page.");
  adzone={};
  return false;
}

t.position = t.position || 0;

t.device = {
  isMobile: (/Mobi|Android/i.test(navigator.userAgent)),
  isTablet: (screen.width < 800 || screen.height < 800),
  isDesktop: !(/Mobi|Android/i.test(navigator.userAgent))
};

try {
  t.log = window.console.log.bind(window.console);
  t.error = window.console.error.bind(window.console);
} catch(e) {
  t.log = function() {};
  t.error = function() {};
}

t.lp = function() {
  var time = (new Date().getTime() - t.start_time)/1000;
  return "Adzone "+time+"s: ";
}

t.styles = t.styles || {};

t.styles = t.styles || {}
t.styles.footer_close=`<img style='max-width:20px;max-height:20px;width:20px;height:20px;margin-top:-8px;margin-right:-2px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/icon/close_square.png">`;
t.styles.footer_open=`<span style='background-color:white'><img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm/icon/round_expand_less_black_48dp.png"></span>`;
t.styles.prestitial_close=`<img style='max-width:48px;max-height:48px;width:48px;height:48px;margin-top:-34px;margin-right:-28px;' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/close2.png">`;
t.styles.push_expand=`<div style='position: fixed; right: 0; top: 0; z-index: 100; width: 50px; text-align: center; padding: 4px 4px;'><svg version="1.1" id="_x31_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 896 306.1" style="enable-background:new 0 0 896 306.1;" xml:space="preserve"> <style type="text/css"> .st0{fill:#FFFFFF;} .stabrir{fill:#999;} .st2{fill:none;stroke:#FFFFFF;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <g> <g> <path class="st0" d="M827.9,306.1H68c-37.5,0-68-30.5-68-68V68C0,30.5,30.5,0,68,0h759.9c37.5,0,68,30.5,68,68v170.1 C896,275.6,865.5,306.1,827.9,306.1L827.9,306.1z"/> </g> <path class="stabrir" d="M827.9,11.3H68c-31.2,0-56.7,25.5-56.7,56.7v170.1c0,31.2,25.5,56.7,56.7,56.7h759.9 c31.2,0,56.7-25.5,56.7-56.7V68C884.6,36.8,859.1,11.3,827.9,11.3z"/> <g> <path class="st0" d="M116,173.6v-0.4c0-23.4,17.8-34.2,43.2-34.2c10.8,0,18.6,1.8,26.2,4.4v-1.8c0-12.6-7.8-19.6-23-19.6 c-8.4,0-15.2,1.2-21,3c-1.8,0.6-3,0.8-4.4,0.8c-7,0-12.6-5.4-12.6-12.4c0-5.4,3.4-10,8.2-11.8c9.6-3.6,20-5.6,34.2-5.6 c16.6,0,28.6,4.4,36.2,12c8,8,11.6,19.8,11.6,34.2V191c0,8.2-6.6,14.6-14.8,14.6c-8.8,0-14.6-6.2-14.6-12.6v-0.2 c-7.4,8.2-17.6,13.6-32.4,13.6C132.6,206.4,116,194.8,116,173.6z M185.8,166.6v-5.4c-5.2-2.4-12-4-19.4-4c-13,0-21,5.2-21,14.8 v0.4c0,8.2,6.8,13,16.6,13C176.2,185.4,185.8,177.6,185.8,166.6z"/> <path class="st0" d="M236.7,72.4c0-8.4,6.8-15.2,15.2-15.2c8.4,0,15.2,6.8,15.2,15.2v40.2c7.4-10,17.6-17.4,33.4-17.4 c25,0,48.8,19.6,48.8,55.4v0.4c0,35.8-23.4,55.4-48.8,55.4c-16.2,0-26.2-7.4-33.4-16v0.2c0,8.2-6.8,15-15.2,15 c-8.4,0-15.2-6.8-15.2-15.2V72.4z M318.9,151v-0.4c0-17.8-12-29.6-26.2-29.6c-14.2,0-26,11.8-26,29.6v0.4 c0,17.8,11.8,29.6,26,29.6C306.9,180.6,318.9,169,318.9,151z"/> <path class="st0" d="M367.3,111.2c0-8.4,6.8-15.2,15.2-15.2c8.4,0,15.2,6.8,15.2,15.2v4.8c4.4-10.4,11.6-20,20.6-20 c9.4,0,14.8,6.2,14.8,14.8c0,8-5.2,12.8-11.4,14.2c-15.4,3.6-24,15.4-24,37v28.4c0,8.4-6.8,15.2-15.2,15.2 c-8.4,0-15.2-6.8-15.2-15.2V111.2z"/> <path class="st0" d="M443.3,71.6c0-8.8,7.4-14.2,17-14.2c9.6,0,17,5.4,17,14.2V72c0,8.8-7.4,14.4-17,14.4c-9.6,0-17-5.6-17-14.4 V71.6z M445.1,111.2c0-8.4,6.8-15.2,15.2-15.2s15.2,6.8,15.2,15.2v79.2c0,8.4-6.8,15.2-15.2,15.2s-15.2-6.8-15.2-15.2V111.2z"/> <path class="st0" d="M498.8,111.2c0-8.4,6.8-15.2,15.2-15.2c8.4,0,15.2,6.8,15.2,15.2v4.8c4.4-10.4,11.6-20,20.6-20 c9.4,0,14.8,6.2,14.8,14.8c0,8-5.2,12.8-11.4,14.2c-15.4,3.6-24,15.4-24,37v28.4c0,8.4-6.8,15.2-15.2,15.2 c-8.4,0-15.2-6.8-15.2-15.2V111.2z"/> </g> <polyline class="st2" points="668.8,116 729.2,182.1 792.5,116 "/> </g> </svg></div>`;
t.styles.push_collapse=`<div style='position: fixed; right: 0; top: 0; z-index: 100; width: 55px; text-align: center; padding: 4px 4px;'><svg version="1.1" id="_x31_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 970.1 306.1" style="enable-background:new 0 0 970.1 306.1;" xml:space="preserve"> <style type="text/css"> .st0{fill:#FFFFFF;} .strojo{fill:#999;} .st2{fill:none;stroke:#FFFFFF;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <g> <g> <path class="st0" d="M902.1,306.1H68c-37.5,0-68-30.5-68-68V68C0,30.5,30.5,0,68,0h834.1c37.5,0,68,30.5,68,68v170.1 C970.1,275.6,939.6,306.1,902.1,306.1L902.1,306.1z"/> </g> <path class="strojo" d="M902.1,11.3H68c-31.2,0-56.7,25.5-56.7,56.7v170.1c0,31.2,25.5,56.7,56.7,56.7h834.1 c31.2,0,56.7-25.5,56.7-56.7V68C958.8,36.8,933.3,11.3,902.1,11.3z"/> <g> <path class="st0" d="M104.1,158.5v-0.4c0-30.6,23.4-55.8,56.2-55.8c16.2,0,27.6,4.4,36.6,12c2,1.6,4.8,5.2,4.8,10.4 c0,7.6-6.2,13.6-13.8,13.6c-4,0-7-1.6-8.8-3c-5.4-4.2-11-6.8-19-6.8c-15.2,0-26,13.4-26,29.2v0.4c0,16.4,10.6,29.6,27.2,29.6 c8,0,14.2-2.8,20-7.4c1.6-1.2,4.6-2.8,8.2-2.8c7.2,0,12.8,5.8,12.8,13c0,4-1.8,7.2-4.4,9.6c-9,8.2-20.4,13.8-38,13.8 C127.7,213.9,104.1,189.1,104.1,158.5z"/> <path class="st0" d="M265.9,213.9c-32.2,0-56-22.6-56-55.4v-0.4c0-30.6,21.8-55.8,53-55.8c35.8,0,51.6,29.4,51.6,51.6 c0,8.8-6.2,14.6-14.2,14.6h-60.2c3,13.8,12.6,21,26.2,21c8.4,0,15.4-2.6,21.6-7.2c2.2-1.6,4.2-2.4,7.4-2.4c6.8,0,11.8,5.2,11.8,12 c0,4-1.8,7-4,9C293.7,208.9,281.5,213.9,265.9,213.9z M285.5,149.5c-1.8-13.6-9.8-22.8-22.6-22.8c-12.6,0-20.8,9-23.2,22.8H285.5z "/> <path class="st0" d="M330,118.3c0-8.4,6.8-15.2,15.2-15.2c8.4,0,15.2,6.8,15.2,15.2v4.8c4.4-10.4,11.6-20,20.6-20 c9.4,0,14.8,6.2,14.8,14.8c0,8-5.2,12.8-11.4,14.2c-15.4,3.6-24,15.4-24,37v28.4c0,8.4-6.8,15.2-15.2,15.2 c-8.4,0-15.2-6.8-15.2-15.2V118.3z"/> <path class="st0" d="M405.2,118.3c0-8.4,6.8-15.2,15.2-15.2c8.4,0,15.2,6.8,15.2,15.2v4.8c4.4-10.4,11.6-20,20.6-20 c9.4,0,14.8,6.2,14.8,14.8c0,8-5.2,12.8-11.4,14.2c-15.4,3.6-24,15.4-24,37v28.4c0,8.4-6.8,15.2-15.2,15.2 c-8.4,0-15.2-6.8-15.2-15.2V118.3z"/> <path class="st0" d="M472.9,180.7v-0.4c0-23.4,17.8-34.2,43.2-34.2c10.8,0,18.6,1.8,26.2,4.4v-1.8c0-12.6-7.8-19.6-23-19.6 c-8.4,0-15.2,1.2-21,3c-1.8,0.6-3,0.8-4.4,0.8c-7,0-12.6-5.4-12.6-12.4c0-5.4,3.4-10,8.2-11.8c9.6-3.6,20-5.6,34.2-5.6 c16.6,0,28.6,4.4,36.2,12c8,8,11.6,19.8,11.6,34.2v48.8c0,8.2-6.6,14.6-14.8,14.6c-8.8,0-14.6-6.2-14.6-12.6v-0.2 c-7.4,8.2-17.6,13.6-32.4,13.6C489.5,213.5,472.9,201.9,472.9,180.7z M542.7,173.7v-5.4c-5.2-2.4-12-4-19.4-4 c-13,0-21,5.2-21,14.8v0.4c0,8.2,6.8,13,16.6,13C533.1,192.5,542.7,184.7,542.7,173.7z"/> <path class="st0" d="M591.6,118.3c0-8.4,6.8-15.2,15.2-15.2c8.4,0,15.2,6.8,15.2,15.2v4.8c4.4-10.4,11.6-20,20.6-20 c9.4,0,14.8,6.2,14.8,14.8c0,8-5.2,12.8-11.4,14.2c-15.4,3.6-24,15.4-24,37v28.4c0,8.4-6.8,15.2-15.2,15.2 c-8.4,0-15.2-6.8-15.2-15.2V118.3z"/> </g> <polyline class="st2" points="860.4,189.1 800,123 736.7,189.1 "/> </g> </svg></div>`;
t.styles.push_expanded_height=``;
t.styles.push_collapsed_height=``;
t.styles.video_paused=``;
t.styles.video_sound_on=``;
t.styles.video_sound_off=``;
t.styles.video_playing=`<div style='position:absolute;right:50px;bottom:20px'><img src='video_playing.png' ><div>`;
t.styles.video_ended=``;
t.styles.push_style=`float:right;height:30px;width:60px;position:fixed;right:0;top:0;display:inline-block;text-align:center`;
t.styles.footer_expand_close=`<div style='position:absolute;top:0;right:0;background-color:white;width:60px;opacity:0.9'><img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/round_arrow_downward_black_48dp.png"></div>`;
t.styles.footer_expand_open=`<div style='position:absolute;top:0;right:60px;background-color:white;width:60px;opacity:0.9'><img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/round_arrow_upward_black_48dp.png"></div>`;
t.styles.footer_bottom_margin=`0`;


t.c=[];
t.m=function(e) { if(e.data && (e.data.m =="adzone"||e.data.m=="adcase")) { adzone.c.push({ m: e }); adzone.r && adzone.r(); } }
window.addEventListener ? window.addEventListener("message", adzone.m, !1) : window.attachEvent && window.attachEvent("message", adzone.m);
var s = document.createElement("script");
s.async = true;
s.src = 'https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/adzone.js?'+Math.round((new Date()).getTime()/1000/60/60);;
document.head.appendChild(s);



t.cs = {};
t.start_time = new Date().getTime();
t.tagcmd = t.tagcmd || [];
t.adtypes={};
t.event_history = [];
t.slotRenderedCallback={};
t.slotRenderedCallbackAll=null;
t.ad_events=[];
t.pubads_set = false;
t.pending_create_ad_slots = [];
t.count_create_slot_tries = {};

t.is_function = function(functionToCheck) { return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'; }

t.create_slots = function(ad_slots) {
  if(t.cancel_create_slots) { return; }
  for(var i = 0; i<ad_slots.length; i++) {
    t.pending_create_ad_slots.push(ad_slots[i]);
  }
  if(t.pending_create_ad_slots.length>0) {
    if(document.body) {
      t.create_slots2();
    } else {
      document.addEventListener('load', function() { adzone.create_slots2(); });
      t.load_timeout = window.setTimeout(function() { t.create_slots([]); },500);
    }
  }
}

t.create_slots2 = function() {  
  t.load_timeout && window.clearTimeout(t.load_timeout);
  var ad_slots = t.pending_create_ad_slots;
  t.pending_create_ad_slots = [];
  for(var i = 0; i<ad_slots.length; i++) {
    var slot = ad_slots[i];
    var anchor = null;
    if(t.is_function(slot.div)) {
      anchor = slot.div();
    } else {
      anchor = slot.div;
    }
    if(anchor) {
      if(slot.id && slot.adtype) {
        var d = document.createElement("div");
        d.className = "ad-slot";
        d.id = slot.id;
        d.dataset.adtype = slot.adtype;
        slot.floating && (d.style.height="0");
        
        slot.style && (d.style.cssText = slot.style);
        slot.css &&  (d.style.cssText = slot.css);

        slot.class && (d.className = slot.class);
        slot.floating && (d.style.display = "none");
        if(slot.location == "after") {
          anchor.parentNode.insertBefore(d, anchor.nextSibling);
        } else if(slot.location == "before") {
          anchor.parentElement.insertBefore(d, anchor);
        } else if(slot.location == "first") {
          anchor.prepend(d);
        } else if(slot.location == "last") {
          anchor.appendChild(d);
        } else if(slot.location == "replace") {
          anchor.innerHTML = "";
          anchor.appendChild(d);
        } else if(slot.location == "replace_if_filled") {
          d.style.display="none";
          anchor.appendChild(d);
          adzone.slotRenderedCallback[d.id] = function (e) {
            if(!e.isEmpty) {
              var slot = document.getElementById(e.slot.getSlotElementId()).parentElement.parentElement;
              // remove other elements
              for(var j=0; j<slot.children.length;j++) {
                slot.children.item(j).style.display="none";
              }
              document.getElementById(e.slot.getSlotElementId()).parentElement.style.display="";
              document.getElementById(e.slot.getSlotElementId()).style.display="";
            }
          }
        } else {
          anchor.appendChild(d);
        }
      } else {
        t.log("** ERROR COULD NOT INSERT - WRONG SLOT ID OR ADTYPE ** SLOT:", slot);
      }
    } else {
      if(!t.count_create_slot_tries[slot.id]) {
        t.count_create_slot_tries[slot.id]=0;
      }
      if(t.count_create_slot_tries[slot.id]<5) {
        t.count_create_slot_tries[slot.id]++;
        t.pending_create_ad_slots.push(slot);
        window.setTimeout(function() { t.create_slots2(); },1000);
        //t.log("** "+slot.id+" No place to insert slot, retry #" + t.count_create_slot_tries[slot.id]);
      } else {
        t.log("** no place to insert slot: " + slot.id);
      }
    }
  }
};

t.get_page_path = function() { pageinfo = window.pageinfo || {section:"home", type:"home" };
if(pageinfo.section == "home") {
  adzone.section = "home";
} else if(pageinfo.type == "interior") {
  adzone.section = "nota";
} else {
  adzone.section = "seccion";
}
var site = (document.location.href.indexOf("iprofesional")>0?"iprofesional":"iproup");

 
return "/"+site+"_" + adzone.section + "/";  };
t.page_path = t.get_page_path();
adzone.create_custom_slots = function()
{
    
    window.addEventListener('load', (event) => {
    	if(pageinfo && pageinfo.type && pageinfo.type == 'interior')
    	{
    		var ad_slots = []
    
    		let paragraphValidate = index =>
    		{
          let elem = document.querySelectorAll('.textonota >  p')[index]
          if (elem && '' !== elem.innerText && elem.nextElementSibling && 'P' === elem.nextElementSibling.tagName && 'P' === elem.tagName && '' !== elem.innerText)
            return elem
          else
            return false
    		}
    
    		let index = 1
    		while (ad_slots.length < 2)
    		{
          let elem = paragraphValidate(index)
    			if (false !== elem)
    			{
  				  ad_slots.push({ div: elem, location: "after" , id: "horizontal4" , adtype: "horizontal_nota" })
  				  if (ad_slots.length < 2) index = index + 2
    			}
    			else 
    			{
  				  index++
    			}
    			if (!document.querySelectorAll('.textonota > p')[index]) break
    		}
    
    		index = index + 4
    		while (ad_slots.length < 5)
    		{
    			let elem = paragraphValidate(index)
          if (false !== elem)
          {
            ad_slots.push({ div: elem, location: "after" , id: "horizontal4" , adtype: "horizontal_nota" })
            if (ad_slots.length < 5) index = index + 4
          }
          else 
          {
            index++
          }
          if (!document.querySelectorAll('.textonota > p')[index]) break
    		}
    	  
    	  	adzone.create_slots(ad_slots);
      	}
    });    
};


adzone.create_custom_slots();

adzone.slotRenderedCallbackAll = function(e) {
/*
  if(e.slot.getSlotElementId().startsWith("horizontal4") && !(e.slot.isEmpty)) {
    document.getElementById(e.slot.getSlotElementId()) && (document.getElementById(e.slot.getSlotElementId()).style.height="auto");
    document.getElementById(e.slot.getSlotElementId()+"_parent") && (document.getElementById(e.slot.getSlotElementId()+"_parent").style.height="auto");
  }
*/
  if(e.slot.getSlotElementId()=="lateral" && !(e.isEmpty)) {
    document.querySelector('div.mainwrapper').classList.add('heflotantelateral')
    document.querySelector('.heflotante250x600').style.display = ''
  }
  if(e.slot.getSlotElementId()=="lateral" && (e.isEmpty)) {
  	document.querySelector('div.mainwrapper').classList.remove('heflotantelateral')
    document.querySelector('.heflotante250x600').style.display = 'none'
  }
//document.querySelector(".banner") && (document.querySelector(".banner").style.display="block");
//document.querySelector(".elbanner") && (document.querySelector(".elbanner").style.display="block");

}


adzone.config = adzone.config || {};

adzone.config.get_harrenmedia_config = function(t) {
  return {ad_unit_path:'/19136023/DFP-dis_xxx_FP_PU07424_iProfesional_DIS_WW_RS-0.7', size:[t.width, t.height], next_network: false };
}

adzone.config.get_sas_config = function(t) {  
  var h = document.location.host;
  var s = adzone.section;
  var siteId = null;
  var pageId = null;
  var formatId = null;
  var networkId = 3821;

  var wh=t.width+"x"+t.height;
  (wh=="300x250") && (formatId=93369);
  (wh=="320x50") && (formatId=93370);
  (wh=="728x90") && (formatId=93373);
  (wh=="970x250") && (formatId=93372);
  (wh=="970x90") && (formatId=93371);
  (wh=="240x90") && (formatId=93388);

  (h == "www.iprofesional.com") && (s=="home") && (siteId=361882) && (pageId=1288658);
  (h == "www.iprofesional.com") && (s=="seccion") && (siteId=361882) && (pageId=1288659);
  (h == "www.iprofesional.com") && (s=="nota") && (siteId=361882) && (pageId=1288659);

  (h == "www.iproup.com") && (s=="home") && (siteId=361883) && (pageId=1288660);
  (h == "www.iproup.com") && (s=="seccion") && (siteId=361883) && (pageId=1288661);
  (h == "www.iproup.com") && (s=="nota") && (siteId=361883) && (pageId=1288661);

  var p = {networkId:networkId, siteId:siteId, pageId:pageId, formatId:formatId, next_network:"harrenmedia" };
  return p;
}





t.forced_slots = [];
t.forced_slots.push({s: `flotante2`, f: `108`, t: `500`, p: `{}`, i:`{}` }); 
t.auto_parse_slots = 'start';

if(!t.gpt_loaded) {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  gads.src = 'https://www.googletagservices.com/tag/js/gpt.js?1';
  document.head.appendChild(gads);
}

t.network_code = 134471228;
t.enable_single_request = true;
if(document.location.href.indexOf("enable_single_request=1")>0) {
  t.enable_single_request=true;
}
if(document.location.href.indexOf("enable_single_request=0")>0) {
  t.enable_single_request=false;
}
t.disable_initial_load = false;
if(document.location.href.indexOf("disable_initial_load=1")>0) {
  t.disable_initial_load=true;
}
if(document.location.href.indexOf("disable_initial_load=0")>0) {
  t.disable_initial_load=false;
}
t.enable_lazy_loading = false;
if(document.location.href.indexOf("enable_lazy_loading=1")>0) {
  t.enable_lazy_loading=true;
}
if(document.location.href.indexOf("enable_lazy_loading=0")>0) {
  t.enable_lazy_loading=false;
}
t.lazy_loading_params = false;
t.collapse_empty_divs = true;
if(document.location.href.indexOf("collapse_empty_divs=1")>0) {
  t.collapse_empty_divs=true;
}
if(document.location.href.indexOf("collapse_empty_divs=0")>0) {
  t.collapse_empty_divs=false;
}

t.kv = (function() { var kv = {};
kv.seccion = (pageinfo.section||"n/a").toLowerCase();
kv.seccion = kv.seccion.replace("á","a").replace("é","e").replace("í","i").replace("ó","o").replace("ú","u").replace("ñ","n").replace(/[^a-z]/gi, '');
pageinfo && pageinfo.news && (kv.idnota = (pageinfo.news||""));

var tags = document.querySelectorAll(".tags .nubetags a");
if(tags.length>0) {
  for(var i=0; i<tags.length; i++) {
    if(tags[i].innerHTML.toLowerCase()=="sensible") {
      kv.adx = "no";
      tags[i].style.display="none";
    }
  }
}
return kv; })();
t.size_mapping=[{"device": "desktop", "sizes": [[300, 250], [300, 300]], "adtype": "caja", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 600], [300, 250], [300, 630]], "adtype": "caja_grande", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1], [800, 600], [1000, 600], [600, 500]], "adtype": "flotante1", "minwidth": 800, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1], [728, 90], [970, 90], [970, 251]], "adtype": "flotante2", "minwidth": 728, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1]], "adtype": "flotante3", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[240, 90]], "adtype": "header", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[970, 90], [970, 250], [728, 90], [970, 200], [950, 90], [950, 300], [950, 350]], "adtype": "horizontal", "minwidth": 1000, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[728, 90], [970, 250], [970, 200]], "adtype": "horizontal", "minwidth": 800, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[680, 90], [640, 480], [300, 250], [320, 250], ""], "adtype": "horizontal_nota", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[640, 480]], "adtype": "inread", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[250, 600]], "adtype": "lateral", "minwidth": 1300, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 250], [300, 100]], "adtype": "caja", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 600], [300, 250], [300, 630]], "adtype": "caja_grande", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[1, 1], [320, 480]], "adtype": "flotante1", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 50], [320, 50], [300, 100], [320, 100]], "adtype": "flotante2", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 250], [300, 100], [320, 100], [320, 250]], "adtype": "horizontal", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 250], [300, 100]], "adtype": "horizontal_nota", "minwidth": 0, "refresh": 60, "adx_refresh": 0, "interval": 0}];

(function() {  })();
(function() { 
// extra slots
  
  var ad_slots = [];

  ad_slots.push({ div_txt: `document.body`, div: function() { return (document.body || null);} , location: 'first' , id: 'flotante1' , adtype: 'flotante1', floating: true, css: '', class: '' });
  ad_slots.length>0 && t.create_slots(ad_slots);
 
})();

t.run = function(p){
  p=p||{}
  t.tagcmd.push({a:"run",p:p});

  var cmd = t.tagcmd;
  t.tagcmd = [];

  Object.keys(cmd).forEach(function(c, index) {
    if(cmd[c].a == "run" && cmd[c].p) {
      if(cmd[c].p.refresh) {
        t.refresh();
      } else if (cmd[c].p.divs) {
        t.run_divs(cmd[c].p.divs);
      } else {
        t.run_new();
      }
    }
  });  
} //t.run

t.refresh = function() {
  adzone.log(adzone.lp(), "refresh");
  t.is_refresh = true;
  adzone.header_push_parent && (adzone.header_push_parent.style.display="none");
  googletag.cmd.push(function() {
    t.cs={};
    t.s && (t.s={});
    googletag.destroySlots();
    t.run_new();
  });
}

t.run_divs_running=false;
t.run_divs = function(div_id_list) {
  if(t.run_divs_running) { return; } 
  t.run_divs_running=true;

  adzone.log(adzone.lp(), "run_divs", (!div_id_list||div_id_list.length<1?"(searching)":div_id_list));
  var prepare=[];
  Object.keys(div_id_list).forEach(function(c, index) {
    var div_id=div_id_list[c];

    t.cs[div_id] && (delete t.cs[div_id]);
    t.s && t.s[div_id] && (delete t.s[div_id]);

    Object.keys(prepare).forEach(function(d, index2) {
      if(prepare[d]==div_id) {
        var txt = "%c** ERROR ** INCORRECT AD TAGS: REPEATED DIV ID ** " + div_id + " **"
        console.log(txt, "background: #eee; color: red; font-weight:bold;font-size:14px");
        prepare.splice(d, index2);
        return;
      }
    });
    prepare.push(div_id);

  });
  if(prepare.length==0) {
    return;
  }
  googletag.cmd.push(function() {
    t.refresh_slots=[];
    if(!t.pubads_set) {
      t.pubads_set = true;
      t.enable_single_request && googletag.pubads().enableSingleRequest(); 
      t.disable_initial_load && googletag.pubads().disableInitialLoad();
      t.enable_lazy_loading &&  googletag.pubads().enableLazyLoad(t.lazy_loading_params);
      t.collapse_empty_divs && googletag.pubads().collapseEmptyDivs();
    }
    Object.keys(prepare).forEach(function(c, index) {
      var new_div = null;
      var div_id = prepare[c];
      var div = document.getElementById(div_id);

      t.cs[div_id] = t.new_slot(div_id);

      var size_details = t.get_size_details(div_id);
      if(size_details==[]) { return; }
      t.cs[div_id].sizes = size_details["sizes"];
      if(t.cs[div_id].sizes.length<1) {
        adzone.log("Slot "+div_id+" was defined, but it has no size. It will be ignored.");
        return;
      }
      var refresh = 0;
      var adx_refresh = size_details["adx_refresh"];
      try {
        refresh = (div.dataset.refresh || size_details["refresh"] || 0)*1;
      } catch(e) { }
      if(refresh>0) {
        div.dataset.refresh = refresh;
      }
      if(adx_refresh>0) {
        div.dataset.adx_refresh = 1;
      }

      var time_now = Math.round((new Date()).getTime()/1000/1000);
      if(size_details["interval"]>0 && window.sessionStorage) {
        var last_time = window.sessionStorage.getItem("adzone_interval_"+div_id)*1||0; 
        if(time_now < last_time + size_details["interval"] ) {
          adzone.log("Will not print "+div_id+ " until next " + (last_time + size_details["interval"]-time_now) +" minutes. Remove with: sessionStorage.removeItem('adzone_interval_"+div_id+"')");
          return;
        }
      }
      window.sessionStorage && window.sessionStorage.setItem("adzone_interval_"+div_id, time_now);


      if(div.id+"_parent"!=div.parentElement.id) {
         new_div = document.createElement("div");
         new_div.id = div.id;
         div.id += "_parent";
         new_div.dataset.adtype = div.dataset.adtype;
         new_div.dataset.kv = div.dataset.kv;
         new_div.classList.add("ad-slot");
         new_div.dataset.adzonerun = 1
         new_div.style.margin = "0 auto";
         if(div.dataset.refresh) {
           new_div.dataset.refresh = div.dataset.refresh;
           div.removeAttribute('data-refresh')
         }
         div.classList.remove("ad-slot");
         div.appendChild(new_div);
      }


      var path = "/" + t.network_code + t.page_path + div_id.split("_position_")[0];
      t.cs[div_id].path = path;

      try {
        if(refresh>0) {
          if(adx_refresh>0) {
            t.cs[div_id].slot=googletag.defineSlot(path, t.cs[div_id].sizes, div_id).setTargeting("adx_refresh", refresh).addService(googletag.pubads());
          } else {
            t.cs[div_id].slot=googletag.defineSlot(path, t.cs[div_id].sizes, div_id).setTargeting("refresh", refresh).addService(googletag.pubads());
          }
        } else {
          t.cs[div_id].slot=googletag.defineSlot(path, t.cs[div_id].sizes, div_id).addService(googletag.pubads());
        }
      } catch(e) {
        adzone.log(adzone.lp(), "Revisar defineSlot ", div_id);
      }
      
      try{
        var kv =JSON.parse(div.dataset.kv)
        Object.keys(kv).forEach(function(key, index) {
          t.cs[div_id].kv[key] = kv[key];
        });
      } catch(e) {}
      t.set_slot_kv(div_id);
    });
    t.set_page_kv();    

    if(!t.slot_rendered_added) {
      t.slot_rendered_added = true;
      googletag.pubads().addEventListener('slotRenderEnded', function(e) {
        e.slot.getSlotElementId() && e.size && e.size[0] && (document.getElementById(e.slot.getSlotElementId()).style.width=e.size[0]+"px");
        if(e.isEmpty) {
          var refresh = t.to_int(e.slot.getTargeting("refresh")) || t.to_int(e.slot.getTargeting("adx_refresh"));
          refresh && t.schedule_refresh(e, refresh, "unfilled");
        } 
        t.slot_rendered(e);
      });

      googletag.pubads().addEventListener('impressionViewable', function(e) {
        if (t.to_int(e.slot.getTargeting("refresh"))) {
          t.schedule_refresh(e, t.to_int(e.slot.getTargeting("refresh")), "activeView");
        } else if (t.to_int(e.slot.getTargeting("adx_refresh")) && !e.creativeId) {
          t.schedule_refresh(e, t.to_int(e.slot.getTargeting("adx_refresh")), "activeView, adx");
        }
      });

    }
    googletag.enableServices();
    Object.keys(prepare).forEach(function(c, index) {
      if(t.cs[prepare[c]].sizes.length<1) { return; }


      if(t.use_epl && t.is_epl_slot(prepare[c])) {      
        if(window.hbepl && hbepl.callSingleSlot) {
          t.log(t.lp(), "** googletag.display("+prepare[c]+"); ");
          googletag.display(prepare[c]); 
          t.log(t.lp(), "** hbepl.callSingleSlot( slot: "+prepare[c]+"); ");
          adzone.ce({s:prepare[c],"a":"epl_hb"});
          hbepl.callSingleSlot(t.cs[prepare[c]].slot);
        } else {
          t.log(t.lp(), "window.hbepl does not exist", prepare[c]);
          googletag.display(prepare[c]);
          t.log(t.lp(), "**** Refresh: ", prepare[c], t.cs[prepare[c]]);
          googletag.pubads().refresh([t.cs[prepare[c]]], {changeCorrelator: false});
        }
      } else {
        googletag.display(prepare[c]);
        if(t.disable_initial_load) {
          googletag.pubads().refresh([t.cs[prepare[c]].slot], {changeCorrelator: false});
        }
      }


    });
    t.run_divs_running=false;
  });
}

t.schedule_refresh = function(e, seconds, reason) {
  setTimeout(function() { 
    t.cs[e.slot.getSlotElementId()] && (delete t.cs[e.slot.getSlotElementId()]);
    t.s && t.s[e.slot.getSlotElementId()] && (delete t.s[e.slot.getSlotElementId()]);
    googletag.destroySlots([e.slot]); 
    adzone.run_divs([e.slot.getSlotElementId()]);
  }, parseInt(seconds) * 1000);
  adzone.log(adzone.lp(), "Will refresh " + e.slot.getSlotElementId() + " in " + seconds + " seconds. ("+reason+")");
}
t.do_refresh_slots = function() {
  var s=t.refresh_slots;
  t.refresh_slots=[];
  Object.keys(s).forEach(function(c, index) {
    t.log(t.lp(), "Manual Refresh: ", s[c]);
    googletag.pubads().refresh([s[c]], {changeCorrelator: false});
  });
}


t.is_epl_slot = function(d){
  var is_epl=true;
  var names = adzone.epl_hb_slots.split(',');
  Object.keys(names).forEach(function(n, index) {
    var name = names[n].trim().toLowerCase();
    if(("  "+d.toLowerCase()).indexOf(name)>0) {
      is_epl = false;
    }
  });
  if(is_epl && !t.is_refresh) {
    t.log(t.lp(), "YES, it's epl", d);
    return true;
  } else {  
    t.log(t.lp(), "NOT epl", d);
    return false;
  }
}


t.set_slot_kv = function(div_id) {
  t.cs[div_id].kv && Object.keys(t.cs[div_id].kv).forEach(function(j, index) {
    t.cs[div_id].slot.setTargeting(j, t.cs[div_id].kv[j]);
  });
}
t.init_adstest = function() {
  if(!localStorage) { return; }
  var adstest=localStorage.getItem("adzone-test");
  try {
    var url = new URL(document.location.href);
    adstest = url.searchParams.get("adzone-test");
  } catch(ex) {}
  if(adstest == "false"||adstest == "none"||adstest == "no"||adstest == ""||adstest == "0"||adstest == "null") {
    localStorage.removeItem("adzone-test");
  } else if(adstest&&adstest != "") {
    localStorage.setItem("adzone-test", adstest);
  } else {
    localStorage.removeItem("adzone-test");
  }
}
t.set_page_kv = function(){
  t.init_adstest();
  adzone.kv && Object.keys(adzone.kv).forEach(function(k, index) {
    var v = adzone.kv[k];
    googletag.pubads().setTargeting(k, v);
  });
  googletag.pubads().setTargeting("platform", t.device.isMobile?"mobile_web":"desktop");
  if (document.location && document.location.host) {
    googletag.pubads().setTargeting("domain", document.location.host);
  } 
  t.section && googletag.pubads().setTargeting("section", t.section.replace(" ","-"));
  
  var adstest = localStorage ? localStorage.getItem("adzone-test") : "";
  if(adstest && adstest!="" && adstest!="null") {
    googletag.pubads().setTargeting("adzone-test", adstest);
    googletag.pubads().setTargeting("adstest", adstest);
  }
}

t.to_int = function(v) {
  if(Number.isSafeInteger(parseInt(v))) {
    return parseInt(v);
  } else {
    return null;
  }
}
t.run_new_count = 0;
t.run_new_running = false;
t.run_new = function() {
  if(t.run_new_running) { return; }
  t.run_new_running = true;

  t.run_new_count++;
  if(t.run_new_count%120==0) {
    t.log(t.lp(), "Seeking slots, "+(t.run_new_count/120)+" min. since start");
  }

  t.page_path = t.get_page_path();
  var divs = document.getElementsByClassName("ad-slot");
  var div_id_list = [];
  
  Object.keys(divs).forEach(function(c, index) {
    if(divs[c].id) { 
      adzone.slot_parse_callback && adzone.slot_parse_callback(divs[c]);
      var new_id = divs[c].id;
      try { 
        if(!(divs[c].dataset.adzonerun) && document.querySelectorAll("#"+new_id).length>1) {
          var ct = 2;
          while(document.querySelectorAll("#"+new_id).length>0) {
            new_id = divs[c].id + "_position_" + ct;
            ct++;
          }
          divs[c].id = new_id;
        }
      } catch(e) {

      }
      if(!(divs[c].id in t.cs)) {
        div_id_list.push(divs[c].id)
        t.adtypes[divs[c].id]=(divs[c].dataset.adtype||"default");
      }
    }
  });
  div_id_list.length>0 && t.run_divs(div_id_list);
  t.run_new_running = false;

}
t.new_slot = function(div_id) {
  var n={
    set:function(k,v){ t.values[k]=v; },
    get:function(k){ return t.values[k]||null; },
    id:div_id,
    adtype:t.adtypes[div_id],
    kv:{},
    start_time: new Date().getTime()
  }
  if(div_id.split("_position_")[1]) {
    n.id=div_id.split("_position_")[0];
    n.kv.position=div_id.split("_position_")[1];
  }
  return n;
}

t.get_size_details = function(div_id) {
  var minwidth=0;
  var adtype = t.cs[div_id].adtype;
  var sizes=[];
  var refresh = 0;
  var interval = 0; 
  var adx_refresh = 0;
  Object.keys(t.size_mapping).forEach(function(c, index) {
    var k = t.size_mapping[c];
    k.minwidth=k.minwidth||0;
    if(k.device.indexOf("all_devices")>=0 || (t.device.isMobile && k.device.indexOf("mobile")>=0) || (t.device.isDesktop && k.device.indexOf("desktop")>=0)) {
      if((adtype.toLowerCase()==t.replace_all(k.adtype.toLowerCase(),"_",".") || adtype.toLowerCase()==t.replace_all(k.adtype.toLowerCase(),"_",".") || adtype.toLowerCase()==k.adtype.toLowerCase()) && k.minwidth>=minwidth && k.minwidth<=window.innerWidth) {
        minwidth = k.minwidth;
        sizes = k.sizes;
        refresh = k.refresh*1||0;
        adx_refresh = k.adx_refresh||0;
        k.interval && (k.interval*1) && (interval = k.interval*1);
      }
    }
  });
  return {"sizes": sizes, "refresh": refresh, "interval": interval, "adx_refresh": adx_refresh};

}

t.get_position = function() {
  var position=0;
  var d = document.querySelectorAll(".ad-slot");
  for(var i=0; i<d.length; i++) {
    if(d[i].id && d[i].id.indexOf("_position_")>0) {
      var pos = parseInt(d[i].id.split("_position_")[1])||0;
      position = Math.max(position,pos);
    }
  }
  return position+1;
}

t.slot_rendered = function(e) {
  t.c.push({r: e});
  t.r && t.r()

  t.ad_events.push(e);
  var div_id=e.slot.getSlotElementId();
  if(!(div_id in t.cs)) {
    adzone.log("** Error while rendering " + div_id, e);
    return;
  }
  var event_data={
    ad_unit_path:e.slot.getAdUnitPath(),
    size: e.slot.size,
    advertiser_id: e.slot.advertiserId,
    campaign_id: e.slot.campaignId,
    creative_id: e.slot.creativeId,
    lineitem_id: e.slot.lineItemId,
    advertiser_id: e.slot.advertiserId,
    is_empty: e.slot.isEmpty
  }

  t.cs[div_id].event_data=event_data;
  t.cs[div_id].end_time=new Date().getTime();
  t.cs[div_id].rendered_time = t.cs[div_id].end_time - t.cs[div_id].start_time;

  t.event_history.push(event_data);
  try{
    t.slotRenderedCallback[div_id]&&t.slotRenderedCallback[div_id](e);
  } catch(e) { 
    var txt = "%c** ERROR IN adzone.slotRenderedCallback('" + div_id + "')"
    console.log(txt, "background: #eee; color: red; font-weight:bold;font-size:14px");
    console.log(e);
  }
  try{
    t.slotRenderedCallbackAll&&t.slotRenderedCallbackAll(e);
  } catch(e) { 
    var txt = "%c** ERROR IN adzone.slotRenderedCallbackAll('" + div_id + "')"
    console.log(txt, "background: #eee; color: red; font-weight:bold;font-size:14px");
    console.log(e);
  }
};

if(t.auto_parse_slots=='start') {
  adzone.run_new_interval = window.setInterval(function() {adzone.run_new();},500);
  window.setTimeout(function(){window.clearInterval(adzone.run_new_interval);},5000);
} else if(t.auto_parse_slots=='auto') {
  window.setInterval(function() {adzone.run_new()},500);
}

t.replace_all = function(string, search, replace) {
  return string.split(search).join(replace);
}
})(adzone);