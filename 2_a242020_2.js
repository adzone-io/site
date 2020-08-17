var adzone = adzone||{};
var googletag = googletag||{};
googletag.cmd = googletag.cmd||[];
  


(function(t) {


t.code = '2_a242020';
t.version = '2';
t.supertag = true;
if(t.version.substring(1,10)!="--DRAFT--") {
  if(localStorage && localStorage.getItem && localStorage.getItem("adzone-draft")) {
    var s = document.createElement("script");
    s.src = "https://us-east-1.linodeobjects.com/ad.s-adzone.com/config/"+t.code+"_draft.js";
    document.head.appendChild(s);
    console.log("** Adzone DRAFT version **");
    return;
  }
} else {
  window.setTimeout(function(){
    var d = document.createElement("div");
    d.style.cssText="position:fixed !important;bottom:0 !important;left:0 !important;height:24px !important;line-height:24px !important;border-radius:3px !important;width:120px !important;font-family:Arial !important;font-size:14px !important;background-color:#ff6f00 !important;color:white !important; font-weight:bold !important;text-align:center !important";
    d.innerHTML = "Adzone Draft"
    document.body.appendChild(d);
  },1000);
  t.is_draft = true;
}

if(t.initialized) { return; }
t.initialized = true;

t.version_datetime = '2020-Aug-17 00:01:40';

if(t.cancel_all_ads_in_page) {
  console.error("Adzone: No ads in page.");
  adzone={};
  return false;
}

t.position = t.position || 0;

t.device = {
  isMobile: (/Mobi/.test(navigator.userAgent)),
  isTablet: (screen.width < 800 || screen.height < 800),
  isDesktop: !(/Mobi/.test(navigator.userAgent))
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
t.styles.push_expand=`<img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/round_arrow_downward_black_48dp.png">`;
t.styles.push_collapse=`<img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/round_arrow_upward_black_48dp.png">
`;
t.styles.push_expanded_height=``;
t.styles.push_collapsed_height=`..`;
t.styles.video_paused=``;
t.styles.video_sound_on=``;
t.styles.video_sound_off=``;
t.styles.video_playing=`<div style='position:absolute;right:50px;bottom:20px'><img src='video_playing.png' ><div>`;
t.styles.video_ended=``;
t.styles.push_style=`float:right;height:30px;width:60px;background-color:white;position:fixed;right:0;top:0;display:inline-block;text-align:center;border:1px solid #ccc;opacity:0.9`;
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
        d.style.overflow="hidden";
        slot.style && (d.style.cssText = slot.style);
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
        t.log("** No place to insert slot, retry #" + t.count_create_slot_tries[slot.id]);
      } else {
        t.log("** ERROR no place to insert slot:", slot);
      }
    }
  }
};

t.get_page_path = function() { return "/" };
t.page_path = t.get_page_path();
googletag.cmd.push(function() { googletag.pubads().addEventListener('slotRenderEnded', function(e) {
  // add slots
  if(adzone.extra_slots_added) { return; }
  adzone.extra_slots_added = true;
  var insertar = [9,11,13,15,17];
  var allchilds = document.getElementsByClassName("article-body")[0].children;
  var p = document.body.querySelectorAll(".article-body p");
   if(adzone.device.isMobile){
     for(var i=0; i<p.length; i++) {
       if(insertar.find(function(v){ return v-1==i})>0) {
          var d = document.createElement("div");
          d.classList.add("ad-slot");
          d.id = "A24/Notas/Notas_300x250_contenido_position_"+adzone.get_position();
          d.dataset.adtype="box";
          p[i].parentNode.insertBefore(d, p[i].nextSibling);
       }
     }
   }//end if is mobile
  adzone.run_new && adzone.run_new();
});});

// NAVEGG DMP
var naveggCallback = function(){
  try {
    var name, col, persona = JSON.parse(window.localStorage.getItem("nvgpersona56882"));
    for(col in persona) {
      name = "nvg_" + col;
      name = name.substring(0, 10);
      if(typeof(googletag) == "object")
        googletag.pubads().setTargeting(name, persona[col]);
      if(typeof(GA_googleAddAttr) == "function")
        GA_googleAddAttr(name, persona[col]);
    }
  } catch (e) {}
}
googletag.cmd.push(naveggCallback);


document.getElementById("A24/Home/Home_Zocalos_Display") && (document.getElementById("A24/Home/Home_Zocalos_Display").style.display="none");
document.getElementById("A24/Nota/Nota_Zocalos_Display") && (document.getElementById("A24/Nota/Nota_Zocalos_Display").style.display="none");

//---- GDF ----

var fullContent = {
    fullContentActive: true,
    fullContentAdunit: "",
    topBannerActive: false,
    topBannerAdunit: "",
    residualActive: false,
    residualAdunit: "",
    zocaloActive: false,
    zocaloAdunit: ""
};


function cleanFullContent() {
    fullContent = {
        fullContentActive: false,
        fullContentAdunit: "",
        topBannerActive: false,
        topBannerAdunit: "",
        residualActive: false,
        residualAdunit: "",
        zocaloActive: false,
        zocaloAdunit: ""
    };
}

function hideFullContentContainer() {
    window.removeEventListener("scroll", fullContent.checkScroll);

    const fullContentContainer = document.querySelector('.full-content-container.show');
    if (fullContentContainer)
        fullContentContainer.classList.remove('show');

    setTimeout(() => {
        if (fullContent.topBannerActive) {
            setStylesToBodyWithTopBanner();
            if (!fullContent.underHeaderActive)
                setHeightToId(fullContent.topBannerAdunit, 'inherit');
        }

        if (fullContent.residualActive) {
            activeResidual();
            showResidual();
        }

        if (fullContent.zocaloActive) {
            showZocalo();
            //setHeightToId(fullContent.zocaloAdunit, 'inherit');
        }

        cleanFullContent();
        if (window.onFullContentEnds) {
            try {
                window.onFullContentEnds();
            } catch (e) {
                console.error("Error ejecutando onFullContentEnds", window.onFullContentEnds);
            }
        }
    }
        , 300);
}
var arrowCreated = false;

function createArrowToClose() {
    if (fullContent.ad1.lastChild && fullContent.ad1.lastChild.classList && fullContent.ad1.lastChild.classList.contains('full-content-arrow-wrapper')) {
        fullContent.ad1.lastChild.onclick = hideFullContentContainer;
    } else {

        if (!arrowCreated) {
            const arrowWrapper = document.createElement('div');
            arrowWrapper.className = 'full-content-arrow-wrapper';
            arrowWrapper.onclick = hideFullContentContainer;

            const arrow = document.createElement('div');
            arrow.innerHTML = "Bajar al Sitio";
            arrow.className = 'full-content-arrow';

            const arrowInText = document.createElement('div');

            arrowInText.className = 'arrow-down-in-banner';

            arrowWrapper.appendChild(arrow);
            arrow.appendChild(arrowInText);
            arrowCreated = arrowWrapper;
        }
        fullContent.ad1.prepend(arrowCreated || arrowWrapper);

    }

}

function hideResidual() {
    const resi = document.getElementsByClassName('residual-wrapper');
    if (resi && resi[0])
        resi[0].style.display = 'none';
}

function showResidual() {
    const resi = document.getElementsByClassName('residual-wrapper');
    if (resi && resi[0])
        resi[0].style.display = 'inherit';
}

function manageFullContent(event) {
    if (event.isEmpty) {
        fullContent.fullContentActive = false;

        if (fullContent.topBannerActive)
            setStylesToBodyWithTopBanner();
        if (fullContent.residualActive)
            activeResidual();
        if (fullContent.zocaloActive)
            showZocalo();
        if (window.onFullContentEnds) {
            try {
                window.onFullContentEnds();
            } catch (e) {
                console.error("Error ejecutando onFullContentEnds", window.onFullContentEnds);
            }
        }
    } else {
        fullContent.fullContentActive = true;
        HideZocalo();
        //setHeightToId(fullContent.zocaloAdunit, 'none');
        console.info('FULL TOP:', fullContent.topBannerAdunit);
        setHeightToId(fullContent.topBannerAdunit, 'none');
        setStylesToBodyWithTopBanner();
        hideResidual();
        fullContent.containerHeight = Math.max(Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 159, 0);

        fullContent.checkScroll = function () {
            "use strict";
            if (window.scrollY + 5 >= fullContent.containerHeight)
                hideFullContentContainer();
        }
            ;

        fullContent.ad1 = document.getElementById(fullContent.fullContentAdunit);

        createArrowToClose();

        window.scrollTo(0, 0);

        if (!fullContent.ad1.className.includes('full-content-wrapper'))
            fullContent.ad1.className += ' full-content-wrapper';

        if (!fullContent.ad1.parentNode.classList.contains('show'))
            fullContent.ad1.parentNode.classList.add('show');

        window.addEventListener("scroll", fullContent.checkScroll);

        setTimeout(hideFullContentContainer, 8500);

    }
}

adzone.slotRenderedCallback["A24/Home/Home_FullContent"] = function (event) {
    fullContent.fullContentAdunit = "A24/Home/Home_FullContent";
    fullContent.topBannerAdunit = "A24/Home/TopBanner_950x50";
    fullContent.residualAdunit = "A24/Home/HomeEvent_260x650";
    fullContent.zocaloAdunit = "A24/Home/Home_Zocalos_Display";

    manageFullContent(event);
}
    ;
adzone.slotRenderedCallback["A24/Notas/Notas_FullContent"] = function (event) {
    fullContent.fullContentAdunit = "A24/Notas/Notas_FullContent";
    fullContent.topBannerAdunit = "A24/Notas/TopBanner_950x50";
    fullContent.residualAdunit = "A24/Notas/HomeEvent_260x650";
    fullContent.zocaloAdunit = "A24/Notas/Notas_Zocalos_Display";

    manageFullContent(event);
}
    ;
adzone.slotRenderedCallback["A24/Seccion/Seccion_FullContent"] = function (event) {
    fullContent.fullContentAdunit = "A24/Seccion/Seccion_FullContent";
    fullContent.topBannerAdunit = "A24/Home/TopBanner_950x50";
    fullContent.residualAdunit = "A24/Home/HomeEvent_260x650";
    fullContent.zocaloAdunit = "A24/Home/Home_Zocalos_Display";

    manageFullContent(event);
}
    ;
adzone.slotRenderedCallback["A24/agro/Home_FullContent"] = function (event) {
    fullContent.fullContentAdunit = "A24/agro/Home_FullContent";
    fullContent.topBannerAdunit = "A24/agro/TopBanner_950x50";
    fullContent.residualAdunit = "A24/agro/Home_Residual";
    fullContent.zocaloAdunit = "A24/agro/Home_Zocalos_Display";

    manageFullContent(event);
}




// Residual management
function activeResidual() {
    if (window.innerWidth > 1365) {
        const header = document.querySelector('header.header-container');
        if (header && !header.classList.contains("with-residual"))
            header.classList.add("with-residual");

        const residualContainer = document.querySelector(".residual-column");
        if (residualContainer && !residualContainer.classList.contains("show"))
            residualContainer.classList.add("show");

        const adcaseDiv = document.getElementById('A24/Home/HomeEvent_260x650_ad') || document.getElementById('A24/Notas/HomeEvent_260x650_ad') || document.getElementById('A24/agro/Home_Residual');
        if (adcaseDiv)
            adcaseDiv.style.visibility = 'visible';

        if (fullContent.fullContentActive)
            hideResidual();
    }
}

function manageResidual(event) {
    if (!event.isEmpty) {
      activeResidual();
    }
}

adzone.slotRenderedCallback["A24/Home/HomeEvent_260x650"] = manageResidual;
adzone.slotRenderedCallback["A24/agro/Home_Residual"] = manageResidual;
adzone.slotRenderedCallback["A24/Notas/HomeEvent_260x650"] = manageResidual;
adzone.slotRenderedCallback["A24/Vivo/HomeEvent_260x650"] = function (event) {
    if (!event.isEmpty)
        activeResidual();
}
    ;

function setStylesToBodyWithTopBanner() {
    const header = document.querySelector('header');
    if (header) {
        const bodyContainer = document.querySelector('.main-container');
        if (bodyContainer) {
            if (header.clientHeight > 50) {
                bodyContainer.style.marginTop = header.clientHeight / 2 + "px";
                bodyContainer.style.minHeight = "calc(100vh - " + header.clientHeight / 2 + "px)";
            }
            if (header.clientHeight < 50) {
                bodyContainer.style.marginTop = "0px";
                bodyContainer.style.minHeight = "calc(100vh - " + "0px)";
            }
        }

        const menuContainer = document.querySelector('.menu-items-wrapper-with-banner');
        const menuBottom = document.querySelector('.Menu-menu-container-bottom-80');
        if (menuContainer) {
            if (header.clientHeight > 50) {
                menuContainer.style.marginTop = header.clientHeight / 2 - 10 + "px";
                menuContainer.style.height = "calc(100vh - " + header.clientHeight + "px)";
                if (menuBottom) menuBottom.style.marginTop = "-25px";
            }
        }
    }

    const residualContainer = document.querySelector('.residual-column.show');
    if (residualContainer && !residualContainer.classList.contains('with-topbanner'))
        residualContainer.classList.add('with-topbanner');
}

function showResidual() {
    const resi = document.getElementsByClassName('residual-wrapper');
    if (resi && resi[0])
        resi[0].style.display = 'inherit';
}

adzone.slotRenderedCallback["A24/Vivo/HomeEvent_260x650"] = function (event) {
    if (!event.isEmpty)
        activeResidual();
}

function manageTopBanner(event) {
    if (!event.isEmpty) {
        fullContent.topBannerActive = true;
        setStylesToBodyWithTopBanner();
    }
}

adzone.slotRenderedCallback["A24/Home/TopBanner_950x50"] = manageTopBanner;
adzone.slotRenderedCallback["A24/Notas/TopBanner_950x50"] = manageTopBanner;
adzone.slotRenderedCallback["A24/agro/TopBanner_950x50"] = manageTopBanner;

function setHeightToId(id, display) {
    const element = document.getElementById(id);
    if (element !== null && element.style)
        element.style.display = ['none', 'inherit'].includes(display) ? display : 'inherit';

    setStylesToBodyWithTopBanner();
}

// Zocalo management


function HideZocalo() {
    const zocaloContainer = document.querySelector('.zocalo-wrapper');
    if (zocaloContainer) {
        zocaloContainer.classList.add('close');
    }
}



function showZocalo() {
    const zocaloContainer = document.querySelector('.zocalo-wrapper.close');
    if (zocaloContainer && fullContent.zocaloActive) {
        zocaloContainer.classList.remove('close');
        const zocaloParent = zocaloContainer.parentElement;
        if (zocaloParent && window.innerWidth > 1365)
            zocaloParent.style.right = '138px';
    }
}

function manageZocalo(event) {
    if (!event.isEmpty) {
        fullContent.zocaloActive = true;
        if (event.creativeId === 138302254292 || event.creativeId === 138302254019){
            fullContent.zocaloActive = false;
            let script = document.createElement('script');
            script.src = "//ads.vidoomy.com/a24_5964.js";
            script.async = true;
            document.head.appendChild(script);
        }else{
         showZocalo();
     }

    }
}

adzone.slotRenderedCallback["A24/Home/Home_Zocalos_Display"] = manageZocalo;
adzone.slotRenderedCallback["A24/Notas/Notas_Zocalos_Display"] = manageZocalo;
adzone.slotRenderedCallback["A24/agro/Home_Zocalos_Display"] = manageZocalo;
adzone.slotRenderedCallback["A24/Notas/Notas_Zocalos_Display"] = manageZocalo;
adzone.slotRenderedCallback["A24/agro/Home_Zocalos_Display"] = manageZocalo;


t.forced_slots = [];
t.forced_slots.push({s: `layers`, f: `103`, t: `10`, p: `{"backgroundColor": "white", "autoclose":8}`, i:`{}` });
t.forced_slots.push({s: `zocalo`, f: `108`, t: `1000`, p: `{"hide_on_page_footer":"footer"}`, i:`{}` });
t.forced_slots.push({s: `fullcontent`, f: ``, t: `10`, p: `{}`, i:`{}` }); 
t.auto_parse_slots = '0';

if(!t.gpt_loaded) {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  gads.src = 'https://www.googletagservices.com/tag/js/gpt.js?1';
  document.head.appendChild(gads);
}

t.network_code = 40327789;
t.enable_single_request = false;
if(document.location.href.indexOf("enable_single_request=1")>0) {
  t.enable_single_request=true;
}
if(document.location.href.indexOf("enable_single_request=0")>0) {
  t.enable_single_request=false;
}
t.disable_initial_load = true;
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

t.kv = (function() { var section = "";
try { section=document.location.href.split("/")[2] } catch(e) {}
return { key1:"value1", key2:["1","2","3","4"], section:section }; })();
t.size_mapping=[{"device": "desktop", "sizes": ["fluid", [300, 250]], "adtype": "fluid", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 250]], "adtype": "box600", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 600]], "adtype": "box600", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 250], [300, 100], [300, 50], [300, 600]], "adtype": "bigbox", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 600], [300, 250]], "adtype": "bigbox", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250]], "adtype": "push", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 250], [300, 100], [320, 50], [320, 100]], "adtype": "push", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250]], "adtype": "firstpush", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 100], [320, 50]], "adtype": "firstpush", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 100], [320, 50]], "adtype": "underHeader", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1], [1000, 480], [1000, 540]], "adtype": "fullcontent", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1], [320, 480]], "adtype": "fullcontent", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1], [480, 320]], "adtype": "fullcontent", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[950, 50]], "adtype": "topbanner", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 50], [320, 50]], "adtype": "topbanner", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[260, 650], [260, 600]], "adtype": "floating", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 51], [300, 50], [320, 51], [320, 50], [1, 1]], "adtype": "zocalo", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[728, 91], [728, 90], [950, 90], [950, 50], [1, 1]], "adtype": "zocalo", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 250]], "adtype": "box", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1000, 480], [1000, 540]], "adtype": "itt", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[320, 480]], "adtype": "itt", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[480, 320]], "adtype": "itt", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1]], "adtype": "onebyone", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[250, 100], [1066, 100]], "adtype": "headersponsor", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[320, 100]], "adtype": "headersponsor", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [""], "adtype": "", "min_width": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}];

(function() {  })();
(function() { 
// extra slots
   
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
      if(t.cs[prepare[c]].sizes==[]) { return; }


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
  var min_width=0;
  var adtype = t.cs[div_id].adtype;
  var sizes=[];
  var refresh = 0;
  var interval = 0; 
  var adx_refresh = 0;
  Object.keys(t.size_mapping).forEach(function(c, index) {
    var k = t.size_mapping[c];
    k.min_width=k.min_width||0;
    if(k.device.indexOf("all_devices")>=0 || (t.device.isMobile && k.device.indexOf("mobile")>=0) || (t.device.isDesktop && k.device.indexOf("desktop")>=0)) {
      if((adtype.toLowerCase()==t.replace_all(k.adtype.toLowerCase(),"_",".") || adtype.toLowerCase()==t.replace_all(k.adtype.toLowerCase(),"_",".") || adtype.toLowerCase()==k.adtype.toLowerCase()) && k.min_width>=min_width && k.min_width<=window.innerWidth) {
        min_width = k.min_width;
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