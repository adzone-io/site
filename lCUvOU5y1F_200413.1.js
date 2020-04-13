/* lCUvOU5y1F - A24 */

var adzone = adzone||{};
var googletag = googletag||{};
googletag.cmd = googletag.cmd||[];



(function(t) {

t.code = 'lCUvOU5y1F.200413.1';

t.log = function(txt, t2, t3, t4) {
  if(localStorage.getItem("adzone-debug")) {
    if(t4) { console.log(txt, t2, t3, t4); }
    else if(t3) { console.log(txt, t2, t3); }
    else if(t2) { console.log(txt, t2); }
    else { console.log(txt); }
  }
}

t.styles = t.styles || {};

adzone.styles = adzone.styles || {}
t.styles.footer_close=`<img style='max-width:20px;max-height:20px;width:20px;height:20px;margin-top:-8px;margin-right:-2px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/icon/close_square.png">`;
t.styles.footer_open=`<span style='background-color:white'><img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm/icon/round_expand_less_black_48dp.png"></span>`;
t.styles.prestitial_close=`<img style='max-width:48px;max-height:48px;width:48px;height:48px;margin-top:-34px;margin-right:-28px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/close2.png">`;
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
t.m=function(e) { if(e.data && e.data.m =="adzone") { adzone.c.push({ m: e }); adzone.r && adzone.r(); } }
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



googletag.cmd.push(function() { 
  googletag.pubads().addEventListener("slotRenderEnded", function(e) {
    var div_id = e.slot.getSlotElementId();

    if(!e.isEmpty && e.size && e.size[0] && e.size[0]>10) {
      var type_id = false;
      var timeout = 10;
      var params = "";

      if(div_id.toLowerCase().indexOf('layers'.toLowerCase())>=0) { params='{"backgroundColor": "white", "autoclose":8}'; timeout = 10; type_id='103'; params=JSON.parse('{"backgroundColor": "white", "autoclose":8}'); }
      if(div_id.toLowerCase().indexOf('zocalo'.toLowerCase())>=0) { params='{"hide_on_page_footer":"footer"}'; timeout = 1000; type_id='108'; params=JSON.parse('{"hide_on_page_footer":"footer"}'); }
      if(div_id.toLowerCase().indexOf('fullcontent'.toLowerCase())>=0) { params='{}'; timeout = 10; type_id='120'; params=JSON.parse('{}'); }
      if(type_id) {
adzone.log("Forced Format:", type_id, div_id, params);
        var m = { data: {m:"adzone", a:"print", f:type_id, div_id: div_id, p: params } };
        window.setTimeout(function(){ adzone.readFormatMessage(m);}, timeout );
      }
    }
    adzone.log("*NEW* " + e.slot.getSlotElementId() + " is " + (e.isEmpty?"empty":"filled"));
  })
})
 

var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
gads.src = 'https://www.googletagservices.com/tag/js/gpt.js';
document.head.appendChild(gads);


t.network_code = 40327789;
t.page_path = (function() { return "/" })();
t.enable_single_request = true;
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
t.size_mapping=[{"device": "all_devices", "adtype": "fluid", "min_width": 0, "sizes": ["fluid", [300, 250]]}, {"device": "mobile", "adtype": "box600", "min_width": 0, "sizes": [[300, 250]]}, {"device": "desktop", "adtype": "box600", "min_width": 0, "sizes": [[300, 600]]}, {"device": "mobile", "adtype": "bigbox", "min_width": 0, "sizes": [[300, 250], [300, 100], [300, 50], [300, 600]]}, {"device": "desktop", "adtype": "bigbox", "min_width": 0, "sizes": [[300, 600], [300, 250]]}, {"device": "desktop", "adtype": "push", "min_width": 0, "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250]]}, {"device": "mobile", "adtype": "push", "min_width": 0, "sizes": [[300, 250], [300, 100], [320, 50], [320, 100]]}, {"device": "desktop", "adtype": "firstpush", "min_width": 0, "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250]]}, {"device": "mobile", "adtype": "firstpush", "min_width": 0, "sizes": [[300, 100], [320, 50]]}, {"device": "mobile", "adtype": "underHeader", "min_width": 0, "sizes": [[300, 100], [320, 50]]}, {"device": "desktop", "adtype": "fullcontent", "min_width": 0, "sizes": [[1, 1], [1000, 480], [1000, 540]]}, {"device": "mobile", "adtype": "fullcontent", "min_width": 0, "sizes": [[1, 1], [320, 480]]}, {"device": "mobile", "adtype": "fullcontent", "min_width": 480, "sizes": [[1, 1], [480, 320]]}, {"device": "desktop", "adtype": "topbanner", "min_width": 0, "sizes": [[950, 50]]}, {"device": "mobile", "adtype": "topbanner", "min_width": 0, "sizes": [[300, 50], [320, 50]]}, {"device": "desktop", "adtype": "floating", "min_width": 0, "sizes": [[260, 650], [260, 600]]}, {"device": "mobile", "adtype": "zocalo", "min_width": 0, "sizes": [[300, 51], [300, 50], [320, 51], [320, 50], [1, 1]]}, {"device": "desktop", "adtype": "zocalo", "min_width": 0, "sizes": [[728, 91], [728, 90], [950, 90], [950, 50], [1, 1]]}, {"device": "all_devices", "adtype": "box", "min_width": 0, "sizes": [[300, 250]]}, {"device": "all_devices", "adtype": "itt", "min_width": 0, "sizes": [[1000, 480], [1000, 540]]}, {"device": "mobile", "adtype": "itt", "min_width": 320, "sizes": [[320, 480]]}, {"device": "mobile", "adtype": "itt", "min_width": 480, "sizes": [[480, 320]]}];

(function() { var section = "";
try { section=document.location.href.split("/")[2] } catch(e) {}
return { key1:"value1", key2:[1,2,3,4], section:section }; })();

t.find_all = function(d) { return document.querySelectorAll(d); }
t.find = function(d) { return document.getElementById(d); }

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
  t.is_refresh = true;
  adzone.header_push_parent && (adzone.header_push_parent.style.display="none");
  adzone.log("refresh");
  googletag.cmd.push(function() {
    t.cs={};
    t.s && (t.s={});
    googletag.destroySlots();
    t.run_new();
  });
}
t.run_divs = function(div_id_list) {
  adzone.log("run_divs");
  var prepare=[];
  Object.keys(div_id_list).forEach(function(c, index) {
    var div_id=div_id_list[c];
    if(div_id in t.cs) {
      t.cs[div_id].start_time = new Date().getTime();
      googletag.cmd.push(function() {
        googletag.pubads().refresh(t.cs[div_id]);
      });
    } else {
      Object.keys(prepare).forEach(function(d, index2) {
        if(prepare[d]==div_id) {
          var txt = "%c** ERROR ** INCORRECT AD TAGS: REPEATED DIV ID ** " + div_id + " **"
          console.log(txt, "background: #eee; color: red; font-weight:bold;font-size:14px");
          prepare.splice(d, index2);
          return;
        }
      });
      prepare.push(div_id);
    }
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
      t.collapse_empty_divs && googletag.pubads().collapseEmptyDivs();
    }
    adzone.log("Prepare", prepare);
    Object.keys(prepare).forEach(function(c, index) {
      var div_id = prepare[c];
      var div = document.getElementById(div_id);
      if(div.id+"_parent"!=div.parentElement.id) {
         var new_div = document.createElement("div");
         new_div.id = div.id;
         div.id += "_parent";
         new_div.dataset.adtype = div.dataset.adtype;
         new_div.dataset.kv = div.dataset.kv;
         new_div.classList.add("ad-slot");
         div.classList.remove("ad-slot");
         div.appendChild(new_div);
      }

      t.cs[div_id] = t.new_slot(div_id);

      var path = t.network_code + t.page_path + div_id;
      t.cs[div_id].path = path;
      t.cs[div_id].sizes = t.get_sizes(div_id);
      t.cs[div_id].slot=googletag.defineSlot(path, t.cs[div_id].sizes, div_id).addService(googletag.pubads());
      
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
        t.slot_rendered(e);
      });
    }
    googletag.enableServices();
    Object.keys(prepare).forEach(function(c, index) {

      // check if epl_
      if(t.use_epl && t.is_epl_slot(prepare[c])) {      
        if(window.hbepl) {
          t.log("** googletag.display("+prepare[c]+"); ");
          googletag.display(prepare[c]); 
          t.log("** hbepl.callSingleSlot( slot: "+prepare[c]+"); ");
          adzone.ce({s:prepare[c],"a":"epl_hb"});
          hbepl.callSingleSlot(t.cs[prepare[c]].slot);
        } else {
          t.log("window.hbepl does not exist", prepare[c]);
          googletag.display(prepare[c]);
          t.log("**** Refresh: ", prepare[c], t.cs[prepare[c]]);
          googletag.pubads().refresh([t.cs[prepare[c]]], {changeCorrelator: false});
        }
      } else {

        t.log("**** DFP direct. Display: ", prepare[c]);
        googletag.display(prepare[c]);
        //t.refresh_slots.push(prepare[c])
        if(t.disable_initial_load) {
          t.log("**** DFP direct. Refresh: ", prepare[c], t.cs[prepare[c]].slot);
          googletag.pubads().refresh([t.cs[prepare[c]].slot], {changeCorrelator: false});
        }
      }

    });
  });
}
t.do_refresh_slots = function() {
  var s=t.refresh_slots;
  t.refresh_slots=[];
  Object.keys(s).forEach(function(c, index) {
    t.log("**** Refresh: ", s[c]);
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
    t.log("YES, it's epl", d);
    return true;
  } else {  
    t.log("NOT epl", d);
    return false;
  }
}
t.set_slot_kv = function(div_id) {
  t.cs[div_id].kv && Object.keys(t.cs[div_id].kv).forEach(function(j, index) {
    t.cs[div_id].slot.setTargeting(j, t.cs[div_id].kv[j]);
  });
}
t.set_page_kv = function(){
  adzone.kv && Object.keys(adzone.kv).forEach(function(k, index) {
    var v = adzone.kv[k];
    googletag.pubads().setTargeting(k, v);
  });
  var adstest = localStorage.getItem("adzone-test");
  if(adstest && adstest!="" && adstest!="null") {
    googletag.pubads().setTargeting("adzone-test", adstest);
  }
}
t.run_new = function() {
  var divs = t.find_all(".ad-slot");
  var div_id_list = [];
  Object.keys(divs).forEach(function(c, index) {
    if(!(divs[c].id in t.cs) && divs[c].id) {
      div_id_list.push(divs[c].id)
      t.adtypes[divs[c].id]=(divs[c].dataset.adtype||"default");
    }
  });
  t.run_divs(div_id_list);
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
  if(div_id.split("#")[1]) {
    n.id=div_id.split("#")[0];
    n.kv.divposition=div_id.split("#")[1];
  }
  return n;
}

t.get_sizes = function(div_id) {
  var min_width=0;
  var adtype = t.cs[div_id].adtype;
  var sizes=[1,1];
  Object.keys(t.size_mapping).forEach(function(c, index) {
    var k = t.size_mapping[c];
    k.min_width=k.min_width||0;
    if(k.device.indexOf("all_devices")>=0 || (t.device.isMobile && k.device.indexOf("mobile")>=0) || (t.device.isDesktop && k.device.indexOf("desktop")>=0)) {
      if(adtype.toLowerCase()==k.adtype.toLowerCase() && k.min_width>=min_width && k.min_width<=window.innerWidth) {
        sizes=k.sizes;
      }
    }
  });
  return sizes;

}

t.slot_rendered = function(e) {
  t.c.push({r: e});
  t.r && t.r()

  t.ad_events.push(e);
  var div_id=e.slot.getSlotElementId();
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

t.device = {
  isMobile: (/Mobi/.test(navigator.userAgent)),
  isTablet: (screen.width < 800 || screen.height < 800),
  isDesktop: !(/Mobi/.test(navigator.userAgent))
};

})(adzone);