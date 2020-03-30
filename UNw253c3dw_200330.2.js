/* UNw253c3dw - DiarioUno */

var adzone = adzone||{};
var googletag = googletag||{};
googletag.cmd = googletag.cmd||[];


if("use_epl" in adzone) {

} else {
  adzone.use_epl = true;
}
if(adzone.use_epl && document.location.href.indexOf("epl_hide=1")<0){
  adzone.use_epl = true;
  adzone.epl_hb_slots = 'fullcontent, zocalo,itt,topbanner,homeevent';

  var epl_ads = document.createElement('script');
  epl_ads.id="hbepl";
  epl_ads.type = 'text/javascript';
  epl_ads.src="//i.e-planning.net/layers/hbdfp.js"
  epl_ads.dataset.isv = "us.img.e-planning.net";
  epl_ads.dataset.sv = "ads.us.e-planning.net";
  epl_ads.dataset.ci = "1fccc";
  epl_ads.dataset.ss = true;
  epl_ads.dataset.usedivname = true; 

  document.head.appendChild(epl_ads);
} 


(function(t) {

t.code = 'UNw253c3dw.200330.2';

t.log = function(txt, t2, t3, t4) {
  if(localStorage.getItem("adzone.debug")) {
    if(t4) { console.log(txt, t2, t3, t4); }
    else if(t3) { console.log(txt, t2, t3); }
    else if(t2) { console.log(txt, t2); }
    else { console.log(txt); }
  }
}

t.styles = t.styles || {};

adzone.styles = adzone.styles || {}
t.styles.footer_close=`<img style='max-width:20px;max-height:20px;width:20px;height:20px;margin-top:-4px;margin-right:-4px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/icon/close_square.png">`;
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

document.querySelector("header").style.position="sticky";

t.slotRenderedCallbackAll = function(e) {
  var div_id = e.slot.getSlotElementId();

  if(!e.isEmpty && e.size && e.size[0] && e.size[0]>10) {
    var type_id = false;
    var params = {};
    var timeout = 10;
    if(div_id.toLowerCase().indexOf("layers")>0) {
      type_id = "103";
      params = { autoclose: 8, backgroundColor:"#ddd" };
      document.querySelector(".full-content-container").style.display="";
    } else if(div_id.toLowerCase().indexOf("zocalo")>0) {
      type_id = "108";
      timeout = 2000;
    } else if(div_id.toLowerCase().indexOf("fullcontent")>0) {
      type_id = "120";
    }
    if(type_id) {
      var m = { data: {m:"adzone", a:"print", f:type_id, div_id: div_id, p: params }};
      window.setTimeout(function(){ adzone.readFormatMessage(m);}, timeout );
    }
  }
  adzone.log("** " + e.slot.getSlotElementId() + " is " + (e.isEmpty?"empty":"filled"));
 
}

// move fullcontent:
// delete if fulcontent div is already moved to top, so it loads first.
if(false&&document.getElementById("www.primiciasya.com/Home/Home_FullContent")) {
document.getElementById("www.primiciasya.com/Home/Home_FullContent").classList.remove("ad-slot");
document.getElementById("www.primiciasya.com/Home/Home_FullContent").id="";

var d = document.createElement("div");
d.className = "ad-slot";
d.id="www.primiciasya.com/Home/Home_FullContent";
d.dataset.adtype="fullcontent";
d.dataset.kv='{"slot_k1":"v1", "slot_k2":["1","2"]}';
document.body.prepend(d);
document.querySelector(".full-content-container").style.cssText="display:none";
}
// move fullcontent end:


//GDF
function setHeightToId(id, opacity, height, display) {
  const element = document.getElementById(id);
  if (element !== null && element.style) {
    element.style.opacity = opacity;
    element.style.height = height;
    element.style.display = display;
  }
}

//------ Set Styles if topBanner Exist
function setStylesToBodyWithTopBanner() {
  const bodyContainer = document.querySelector('.body-container'),
    header = document.querySelector('header');
  contentContainer = document.querySelector('.content-container');
  if (bodyContainer && header) {
    bodyContainer.style.marginTop = header.clientHeight + "px";
    bodyContainer.style.minHeight = "calc(100vh - " + header.clientHeight + "px)";
    if (contentContainer) {
      contentContainer.style.marginTop = '20px';
    }
  }
}

function manageTopBanner(event) {
  if (!event.isEmpty) {
      setStylesToBodyWithTopBanner();
  }
}

adzone.slotRenderedCallback["www.diariouno.com.ar/Home/TopBanner_950x50"] = manageTopBanner;
adzone.slotRenderedCallback["www.diariouno.com.ar/Notas/TopBanner_950x50"] = manageTopBanner;



// -------------------------------------------------------------------------------------- //
//                                   Zocalo Display                                       //
// -------------------------------------------------------------------------------------- //

var createZocaloDisplayEventSlotRenderedCallback = function(key, className, childKey) {
    return function(event) {
        if (!event.isEmpty) {
            if (event.creativeId === 138251271543 || event.creativeId === 138251531527) {
                let script = document.createElement('script');
                script.src = "//ads.vidoomy.com/diariouno_2026.js";
                script.async = true;
                document.head.appendChild(script);
            } else {
                showedZocalo = false;
                var zocaloId = "www.diariouno.com.ar/" + key + "/" + (childKey || key) + "_Zocalos_Display";
                
                var container = document.getElementById(zocaloId);
                
                
                if (container) {
                    var closeIcons = Array.from(container.querySelectorAll("#footerFixed-adText-container"));

                    if (closeIcons) {
                        closeIcons.forEach(function(closeIcon, idx) {
                            if (idx !== 0) {
                                closeIcon.parentElement.removeChild(closeIcon);
                            }
                        });
                    }
                }
            }
        }
    }
    ;
};

adzone.slotRenderedCallback["www.diariouno.com.ar/Home/Home_Zocalos_Display"] = createZocaloDisplayEventSlotRenderedCallback("Home");
adzone.slotRenderedCallback["www.diariouno.com.ar/Notas/Notas_Zocalos_Display"] = createZocaloDisplayEventSlotRenderedCallback("Notas");
adzone.slotRenderedCallback["www.diariouno.com.ar/Seccion/Secc_Zocalos_Display"] = createZocaloDisplayEventSlotRenderedCallback("Seccion", null, "Secc");




//----- RESIDUAL CONTROL

function setStylesToHeaderWithResidual() {
  const header = document.querySelector('header');
  if (header && window.innerWidth > 1365) {
    header.style.paddingRight = "276px";
    header.style.boxSizing = "border-box";
  }

  const residualContainer = document.querySelector(".residual-column");
  if (residualContainer && !residualContainer.classList.contains("show"))
    residualContainer.classList.add("show");

  if (window.innerWidth > 1365) {
    const adcaseDiv = document.getElementById('www.primiciasya.com/Home/HomeEvent_260x650_ad') || document.getElementById('www.primiciasya.com/Notas/HomeEvent_260x650_ad');
    if (adcaseDiv)
      adcaseDiv.style.visibility = 'visible';
  }
}

var hasTopBanner = false;
var createTopBannerEventSlotRenderedCallback = function(key, className) {
    return function(event) {
        if (!event.isEmpty) {
            hasTopBanner = true;

            var header = document.getElementById("banner-header");

            var homeEvent = false;
            var lateralLeft = false;
            var lateralRight = false;

            if (header) {
                const windowHeight = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) * 4;

                if (hasHomeEvent) {
                    homeEvent = document.getElementById("homeevent");
                } else {
                    lateralLeft = document.getElementById("lateral-left");
                    lateralRight = document.getElementById("lateral-right");
                }

                header.style.display = null;

                if (homeEvent) {
                    homeEvent.style.marginTop = "150px";
                    header.style.padding = "0px 292px 0px 0px";
                }

                if (lateralLeft) {
                    lateralLeft.style.marginTop = "150px";
                }

                if (lateralRight) {
                    lateralRight.style.marginTop = "150px";
                }

                window.addEventListener("scroll", function() {
                    setTimeout(function() {
                        if (window.scrollY > windowHeight) {
                            header.style.padding = null;
                            header.style.display = "none";

                            if (homeEvent) {
                                homeEvent.style.marginTop = null;
                            }

                            if (lateralLeft) {
                                lateralLeft.style.marginTop = null;
                            }

                            if (lateralRight) {
                                lateralRight.style.marginTop = null;
                            }
                        } else {
                            header.style.display = null;

                            if (homeEvent) {
                                homeEvent.style.marginTop = "150px";
                                header.style.padding = "0px 292px 0px 0px";
                            }

                            if (lateralLeft) {
                                lateralLeft.style.marginTop = "150px";
                            }

                            if (lateralRight) {
                                lateralRight.style.marginTop = "150px";
                            }
                        }
                    }, 100);
                }, {
                    passive: true
                });
            }
        } else {
            hasTopBanner = false;
        }
    }
    ;
};

adzone.slotRenderedCallback["www.diariouno.com.ar/Home/TopBanner_950x50"] = createTopBannerEventSlotRenderedCallback();
adzone.slotRenderedCallback["www.diariouno.com.ar/Notas/TopBanner_950x50"] = createTopBannerEventSlotRenderedCallback();
adzone.slotRenderedCallback["www.diariouno.com.ar/Seccion/TopBanner_950x50"] = createTopBannerEventSlotRenderedCallback();

var hasHomeEvent = false;
var showedZocalo = false;

var createHomeEventSlotRenderedCallback = function(key, className) {
    return function(event) {
        var containers = document.getElementsByClassName("main-container");
        
        var headers = document.getElementsByClassName("container-top");
        var footers = document.getElementsByClassName("footer");

        var container = false;
        var header = false;
        var footer = false;

        if (containers) {
            container = containers[0];
        }

        if (headers) {
            header = headers[0];
        }

        if (footers) {
            footer = footers[0];
        }

        if (!event.isEmpty) {
            hasHomeEvent = true;

            if (container) {
                container.classList.add(className);
            }

            if (header) {
                header.style.paddingRight = "285px";
            }

            if (footer) {
                footer.style.paddingRight = "330px";
            }
        } else {
            hasHomeEvent = false;

            if (container) {
                container.classList.remove(className);
            }

            if (header) {
                header.style.paddingRight = null;
            }

            if (footer) {
                footer.style.paddingRight = null;
            }
        }
    }
    ;
};


adzone.slotRenderedCallback["www.diariouno.com.ar/Home/HomeEvent_260x650"] = createHomeEventSlotRenderedCallback(null, "with-banner");
adzone.slotRenderedCallback["www.diariouno.com.ar/Notas/HomeEvent_260x650"] = createHomeEventSlotRenderedCallback(null, "with-banner");
adzone.slotRenderedCallback["www.diariouno.com.ar/OvaciÃ³n/Home/Home_Residual"] = createHomeEventSlotRenderedCallback(null, "with-banner");


// -------------------------------------------------------------------------------------- //
//                                   Super Top Banner                                     //
// -------------------------------------------------------------------------------------- //

adzone.slotRenderedCallback["www.diariouno.com.ar/Home/Home_970x90_Super_Top"] = function(event) {
    if (!event.isEmpty) {
        if (hasTopBanner) {
            var superTop = document.getElementById("www.diariouno.com.ar/Home/Home_970x90_Super_Top");

            if (superTop) {
                superTop.style.display = "none";
            }
        }
    }
}
;

// -------------------------------------------------------------------------------------- //
//                                   Lateral Left/Right                                   //
// -------------------------------------------------------------------------------------- //

var createLateralEventSlotRenderedCallback = function(keys, className, direction) {
    return function(event) {
        if (!event.isEmpty) {
            var keyParts = keys.split("/");
            var key = keys;

            if (keyParts && keyParts.length === 2) {
                key = keyParts[1];
            }

            var slotId = "www.diariouno.com.ar/" + keys + "/" + key + "_120x600_" + direction;
            var lateralBanner = document.getElementById(slotId);

            if (lateralBanner && hasHomeEvent) {
                // TODO: remove this logic and append new logic
                lateralBanner.style.display = "none";
            }

            if (lateralBanner && !hasHomeEvent) {
                var containers = Array.from(document.getElementsByClassName("container"));

                if (containers && containers.length > 0) {
                    containers.forEach(container=>container.style.width = "1100px");
                }
            }
        }
    }
    ;
};

adzone.slotRenderedCallback["www.diariouno.com.ar/Home/Home_120x600_Left"] = createLateralEventSlotRenderedCallback("Home", null, "Left");
adzone.slotRenderedCallback["www.diariouno.com.ar/Home/Home_120x600_Right"] = createLateralEventSlotRenderedCallback("Home", null, "Right");
adzone.slotRenderedCallback["www.diariouno.com.ar/Notas/Notas_120x600_left"] = createLateralEventSlotRenderedCallback("Notas", null, "left");
adzone.slotRenderedCallback["www.diariouno.com.ar/Notas/Notas_120x600_right"] = createLateralEventSlotRenderedCallback("Notas", null, "right");
adzone.slotRenderedCallback["www.diariouno.com.ar/Seccion/Seccion_120x600_left"] = createLateralEventSlotRenderedCallback("Seccion", null, "left");
adzone.slotRenderedCallback["www.diariouno.com.ar/Seccion/Seccion_120x600_right"] = createLateralEventSlotRenderedCallback("Seccion", null, "right");
adzone.slotRenderedCallback["www.diariouno.com.ar/OvaciÃƒÂ³n/Home/Home_120x600_Left"] = createLateralEventSlotRenderedCallback("OvaciÃƒÂ³n/Home", null, "Left");
adzone.slotRenderedCallback["www.diariouno.com.ar/OvaciÃƒÂ³n/Home/Home_120x600_Right"] = createLateralEventSlotRenderedCallback("OvaciÃƒÂ³n/Home", null, "Right");
adzone.slotRenderedCallback["www.diariouno.com.ar/OvaciÃƒÂ³n/Notas/Notas_120x600_left"] = createLateralEventSlotRenderedCallback("OvaciÃƒÂ³n/Notas", null, "left");
adzone.slotRenderedCallback["www.diariouno.com.ar/OvaciÃƒÂ³n/Notas/Notas_120x600_right"] = createLateralEventSlotRenderedCallback("OvaciÃƒÂ³n/Notas", null, "right");
 

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
t.size_mapping=[{"device": "all_devices", "adtype": "fluid", "min_width": 0, "sizes": ["fluid", [300, 250]]}, {"device": "mobile", "adtype": "box600", "min_width": 0, "sizes": [[300, 250]]}, {"device": "desktop", "adtype": "box600", "min_width": 0, "sizes": [[300, 600]]}, {"device": "mobile", "adtype": "bigbox", "min_width": 0, "sizes": [[300, 250], [300, 100], [300, 50], [300, 600]]}, {"device": "desktop", "adtype": "bigbox", "min_width": 0, "sizes": [[300, 600], [300, 250]]}, {"device": "desktop", "adtype": "push", "min_width": 0, "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250]]}, {"device": "mobile", "adtype": "push", "min_width": 0, "sizes": [[300, 250], [300, 100], [320, 50], [320, 100]]}, {"device": "desktop", "adtype": "firstpush", "min_width": 0, "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250]]}, {"device": "mobile", "adtype": "firstpush", "min_width": 0, "sizes": [[300, 100], [320, 50]]}, {"device": "mobile", "adtype": "underHeader", "min_width": 0, "sizes": [[300, 100], [320, 50]]}, {"device": "desktop", "adtype": "fullcontent", "min_width": 0, "sizes": [[1, 1], [1000, 480], [1000, 540]]}, {"device": "mobile", "adtype": "fullcontent", "min_width": 0, "sizes": [[1, 1], [320, 480]]}, {"device": "mobile", "adtype": "fullcontent", "min_width": 480, "sizes": [[1, 1], [480, 320]]}, {"device": "desktop", "adtype": "topBanner", "min_width": 0, "sizes": [[950, 50], [970, 90]]}, {"device": "mobile", "adtype": "topBanner", "min_width": 0, "sizes": [[300, 50], [320, 50]]}, {"device": "desktop", "adtype": "floating", "min_width": 0, "sizes": [[260, 650], [260, 600]]}, {"device": "mobile", "adtype": "zocalo", "min_width": 0, "sizes": [[300, 51], [300, 50], [320, 51], [320, 50], [1, 1]]}, {"device": "desktop", "adtype": "zocalo", "min_width": 0, "sizes": [[728, 91], [728, 90], [950, 90], [950, 50], [1, 1]]}, {"device": "all_devices", "adtype": "box", "min_width": 0, "sizes": [[300, 250]]}, {"device": "all_devices", "adtype": "itt", "min_width": 0, "sizes": [[1000, 480], [1000, 540]]}, {"device": "mobile", "adtype": "itt", "min_width": 320, "sizes": [[320, 480]]}, {"device": "mobile", "adtype": "itt", "min_width": 480, "sizes": [[480, 320]]}, {"device": "desktop", "adtype": "pushDetail", "min_width": 0, "sizes": [[728, 90]]}, {"device": "mobile", "adtype": "pushDetail", "min_width": 0, "sizes": [[300, 100], [300, 50], [320, 100], [320, 50]]}];

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
  googletag.cmd.push(function() {
    t.cs={};
    t.s && (t.s={});
    googletag.destroySlots();
    t.run_new();
  });
}
t.run_divs = function(div_id_list) {
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
    t.enable_single_request && googletag.pubads().enableSingleRequest(); 
    t.disable_initial_load && googletag.pubads().disableInitialLoad();
    t.collapse_empty_divs && googletag.pubads().collapseEmptyDivs();
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
          t.log("**** Refresh: ", prepare[c]);
          googletag.pubads().refresh([t.cs[prepare[c]].slot], {changeCorrelator: false});
        }
      } else {

        t.log("**** DFP direct. Display: ", prepare[c]);
        googletag.display(prepare[c]);
        //debugger;
        //t.refresh_slots.push(prepare[c])
        if(t.disable_initial_load) {
          t.log("**** DFP direct. Refresh: ", prepare[c]);
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
  if(is_epl) {
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