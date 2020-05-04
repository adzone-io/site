/* 1RZZCR3Bm5 - PrimiciasYa - configuración general */

var adzone = adzone||{};
var googletag = googletag||{};
googletag.cmd = googletag.cmd||[];


if("use_epl" in adzone) {

} else {
  adzone.use_epl = true;
}
if(adzone.use_epl && document.location.href.indexOf("epl_hide=1")<0){
  adzone.use_epl = true;
  adzone.epl_hb_slots = 'fullcontent, zocalo,itt,topbanner,homeevent,home_300x600';

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

t.code = '1RZZCR3Bm5.200504.1';

t.log = window.console.log.bind(window.console);
t.error = window.console.error.bind(window.console);

t.lp = function() {
  var time = (new Date().getTime() - t.start_time)/1000;
  return "Adzone "+time+"s: ";
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


function adzone_delete_div(div_id){
  if(document.getElementById(div_id)) {
    document.getElementById(div_id).classList.remove("ad-slot");
    document.getElementById(div_id).id="";
  }
}
function adzone_move_itt(div_id) {
  if(document.getElementById(div_id)) {
    adzone_delete_div(div_id);
    var d = document.createElement("div");
    d.className = "ad-slot";
    d.id=div_id;
    d.dataset.adtype="itt";
    d.style.display="none";
    document.body.prepend(d);
  }
}
adzone_delete_div("www.primiciasya.com/Home/Home_FullContent");
adzone_delete_div("www.primiciasya.com/Nota/Nota_FullContent");
adzone_move_itt("www.primiciasya.com/Home/Home_Layers_ITT");
adzone_move_itt("www.primiciasya.com/Nota/Nota_Layers_ITT");


//GDF
function setHeightToId(id, opacity, height, display) {
  const element = document.getElementById(id);
  if (element !== null && element.style) {
    element.style.opacity = opacity;
    element.style.height = height;
    element.style.display = display;
  }
}


//------- UnderHeader management

let containerHeightUnderHeader = 0;

function manageUnderHeader(event) {
  adzone.log("MANAGE UNDER HEADER ".event);
  if (!event.isEmpty) {
    const topBannerAdunit = document.querySelectorAll('div[data-adtype="topbanner"]')[0];
    adzone.log(topBannerAdunit);

    function checkUnderHeaderScroll() {
      "use strict";
      adzone.log("checkUnderHeaderScroll");
      if (window.scrollY >= containerHeightUnderHeader) {
        setHeightToId(topBannerAdunit, 1, 'inherit', 'inherit');
        setStylesToBodyWithTopBanner();
      } else {
        setHeightToId(topBannerAdunit, 0, 0, 'none');
        setStylesToBodyWithTopBanner();
      }
    }

    containerHeightUnderHeader = 130;
    setHeightToId(topBannerAdunit, 0, 0, 'none');
    window.addEventListener("scroll", checkUnderHeaderScroll);
    const underHeader = document.getElementsByClassName('under-header-container');
    underHeader[0].classList.add('under-header-container-margin');
  } else {
    setStylesToBodyWithTopBanner();
  }
}

adzone.slotRenderedCallback["www.primiciasya.com/Home/Home_320x50__Mob"] = manageUnderHeader;

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

adzone.slotRenderedCallback["www.primiciasya.com/Home/TopBanner_950x50"] = manageTopBanner;
adzone.slotRenderedCallback["www.primiciasya.com.py/Home/TopBanner_950x50"] = manageTopBanner;
adzone.slotRenderedCallback["www.primiciasya.com/Notas/TopBanner_950x50"] = manageTopBanner;
adzone.slotRenderedCallback["www.primiciasya.com.py/Notas/TopBanner_950x50"] = manageTopBanner;

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

function manageResidual(event) {
  if (!event.isEmpty) {
      setStylesToHeaderWithResidual();
  }
}

adzone.slotRenderedCallback["www.primiciasya.com/Home/HomeEvent_260x650"] = manageResidual;
adzone.slotRenderedCallback["www.primiciasya.com.py/Home/HomeEvent_260x650"] = manageResidual;
adzone.slotRenderedCallback["www.primiciasya.com/Notas/HomeEvent_260x650"] = manageResidual;
adzone.slotRenderedCallback["www.primiciasya.com.py/Notas/HomeEvent_260x650"] = manageResidual;


googletag.cmd.push(function() { 
  googletag.pubads().addEventListener("slotRenderEnded", function(e) {

    var div_id = e.slot.getSlotElementId();

    if(!e.isEmpty && e.size && e.size[0] && e.size[0]>10) {
      var type_id = false;
      var timeout = 10;
      var params = "";

      if(div_id.toLowerCase().indexOf('zocalo'.toLowerCase())>=0) { params='{}'; timeout = 1000; type_id='108'; params=JSON.parse('{}'); }
      if(div_id.toLowerCase().indexOf('itt'.toLowerCase())>=0) { params='{}'; timeout = 10; type_id='103'; params=JSON.parse('{}'); }
      if(type_id) {
adzone.log(t.lp(),"Forced Format:", type_id, div_id, params);
        var m = { data: {m:"adzone", a:"print", f:type_id, div_id: div_id, p: params } };
        window.setTimeout(function(){ adzone.readFormatMessage(m);}, timeout );
      }
    }
    adzone.log(t.lp(),e.slot.getSlotElementId() + " is " + (e.isEmpty?"empty":"filled"));
  })
})
 
t.auto_parse_slots = '0';

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
t.size_mapping=[{"device": "all_devices", "adtype": "fluid", "min_width": 0, "sizes": ["fluid", [300, 250]]}, {"device": "mobile", "adtype": "box600", "min_width": 0, "sizes": [[300, 250]]}, {"device": "desktop", "adtype": "box600", "min_width": 0, "sizes": [[300, 600]]}, {"device": "mobile", "adtype": "bigbox", "min_width": 0, "sizes": [[300, 250], [300, 100], [300, 50], [300, 600]]}, {"device": "desktop", "adtype": "bigbox", "min_width": 0, "sizes": [[300, 600], [300, 250]]}, {"device": "desktop", "adtype": "push", "min_width": 0, "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250], "[970", "250]]"]}, {"device": "mobile", "adtype": "push", "min_width": 0, "sizes": [[300, 250], [300, 100], [320, 50], [320, 100]]}, {"device": "desktop", "adtype": "firstpush", "min_width": 0, "sizes": [[728, 90], [950, 50], [950, 200], [950, 250], [970, 90], [970, 250], "[970", "250]]"]}, {"device": "mobile", "adtype": "firstpush", "min_width": 0, "sizes": [[300, 100], [320, 50]]}, {"device": "mobile", "adtype": "underHeader", "min_width": 0, "sizes": [[300, 100], [320, 50]]}, {"device": "desktop", "adtype": "fullcontent", "min_width": 0, "sizes": [[1, 1], [1000, 480], [1000, 540]]}, {"device": "mobile", "adtype": "fullcontent", "min_width": 0, "sizes": [[1, 1], [320, 480]]}, {"device": "mobile", "adtype": "fullcontent", "min_width": 480, "sizes": [[1, 1], [480, 320]]}, {"device": "desktop", "adtype": "topbanner", "min_width": 0, "sizes": [[950, 50], [970, 90]]}, {"device": "mobile", "adtype": "topbanner", "min_width": 0, "sizes": [[300, 50], [320, 50]]}, {"device": "desktop", "adtype": "floating", "min_width": 0, "sizes": [[260, 650], [260, 600]]}, {"device": "mobile", "adtype": "zocalo", "min_width": 0, "sizes": [[300, 51], [300, 50], [320, 51], [320, 50], [1, 1]]}, {"device": "desktop", "adtype": "zocalo", "min_width": 0, "sizes": [[728, 91], [728, 90], [950, 90], [950, 50], [1, 1]]}, {"device": "all_devices", "adtype": "box", "min_width": 0, "sizes": [[300, 250]]}, {"device": "all_devices", "adtype": "itt", "min_width": 0, "sizes": [[1000, 480], [1000, 540]]}, {"device": "mobile", "adtype": "itt", "min_width": 320, "sizes": [[320, 480]]}, {"device": "mobile", "adtype": "itt", "min_width": 480, "sizes": [[480, 320]]}, {"device": "mobile", "adtype": "onebyone", "min_width": 0, "sizes": [[1, 1]]}];

(function() { var section = "";
try { section=document.location.href.split("/")[2] } catch(e) {}
return { key1:"value1", key2:[1,2,3,4], section:section }; })();

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
      t.collapse_empty_divs && googletag.pubads().collapseEmptyDivs();
    }
    Object.keys(prepare).forEach(function(c, index) {
      var new_div = null;
      var div_id = prepare[c];
      var div = document.getElementById(div_id);
      
      if(div.id+"_parent"!=div.parentElement.id) {
         new_div = document.createElement("div");
         new_div.id = div.id;
         div.id += "_parent";
         new_div.dataset.adtype = div.dataset.adtype;
         new_div.dataset.kv = div.dataset.kv;
         new_div.classList.add("ad-slot");
         new_div.dataset.adzonerun = 1
         if(div.dataset.refresh) {
           new_div.dataset.refresh = div.dataset.refresh;
           div.removeAttribute('data-refresh')
         }
         div.classList.remove("ad-slot");
         div.appendChild(new_div);
      }

      t.cs[div_id] = t.new_slot(div_id);

      var path = "/" + t.network_code + t.page_path + div_id.split("_position_")[0];
      t.cs[div_id].path = path;
      t.cs[div_id].sizes = t.get_sizes(div_id);
      try {
        if(div.dataset.refresh || (new_div && new_div.dataset.refresh)) {
          var seconds = div.dataset.refresh || new_div.dataset.refresh;
          t.cs[div_id].slot=googletag.defineSlot(path, t.cs[div_id].sizes, div_id).setTargeting("refresh", seconds).addService(googletag.pubads());
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
        if(e.isEmpty && Number.isSafeInteger(parseInt(e.slot.getTargeting("refresh"))) && parseInt(e.slot.getTargeting("refresh"))>0 ) {
          setTimeout(function() { 
            t.cs[e.slot.getSlotElementId()] && (delete t.cs[e.slot.getSlotElementId()]);
            t.s && t.s[e.slot.getSlotElementId()] && (delete t.s[e.slot.getSlotElementId()]);
            googletag.destroySlots([e.slot]); 
            adzone.run_divs([e.slot.getSlotElementId()]);
          }, parseInt(e.slot.getTargeting("refresh")) * 1000);
          adzone.log(adzone.lp(), "Will refresh " + e.slot.getSlotElementId() + " in " + parseInt(e.slot.getTargeting("refresh")) + " seconds");
        }
        t.slot_rendered(e);
      });

      googletag.pubads().addEventListener('impressionViewable', function(e) {
        if(Number.isSafeInteger(parseInt(e.slot.getTargeting("refresh"))) && parseInt(e.slot.getTargeting("refresh"))>0 ) {
          setTimeout(function() { 
            t.cs[e.slot.getSlotElementId()] && (delete t.cs[e.slot.getSlotElementId()]);
            t.s && t.s[e.slot.getSlotElementId()] && (delete t.s[e.slot.getSlotElementId()]);
            googletag.destroySlots([e.slot]); 
            adzone.run_divs([e.slot.getSlotElementId()]);
          }, parseInt(e.slot.getTargeting("refresh")) * 1000);
          adzone.log(adzone.lp(), "Will refresh " + e.slot.getSlotElementId() + " in " + parseInt(e.slot.getTargeting("refresh")) + " seconds");
        }
      });

    }
    googletag.enableServices();
    Object.keys(prepare).forEach(function(c, index) {
      if(t.use_epl && t.is_epl_slot(prepare[c])) {      
        if(window.hbepl) {
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
  
t.run_new_count = 0;
t.run_new_running = false;
t.run_new = function() {
  if(t.run_new_running) { return; }
  t.run_new_running = true;

  t.run_new_count++;
  if(t.run_new_count%120==0) {
    t.log(t.lp(), "Seeking slots, "+(t.run_new_count/120)+" min. since start");
  }

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


if(t.auto_parse_slots=='start') {
  adzone.run_new_interval = window.setInterval(function() {adzone.run_new();},500);
  window.setTimeout(function(){window.clearInterval(adzone.run_new_interval);},5000);
} else if(t.auto_parse_slots=='auto') {
  window.setInterval(function() {adzone.run_new()},500);
}

})(adzone);
