var adzone = adzone||{};
var googletag = googletag||{};
googletag.cmd = googletag.cmd||[];
  


adzone.setup_supertag = function() {
(function(t) {


t.code = '12_elfinanciero2';
t.version = '21';
t.supertag = true;


if(localStorage && localStorage.getItem && (localStorage.getItem("adzone-draft")==1)) {
  var s = document.createElement("script");
  s.src = "https://us-east-1.linodeobjects.com/ad.s-adzone.com/config/"+t.code+"_draft.js?"+Math.random();
  document.head.appendChild(s);
  console.log("** Adzone DRAFT version **");
  return;
}


if(t.initialized) { return; }
t.initialized = true;

t.version_datetime = '2020-Oct-09 17:25:57';
t.supertag_class='ad-slot';

if(t.cancel_all_ads_in_page) {
  console.error("Adzone: No ads in page.");
  adzone={};
  return false;
}
t.use_new_debug = true;

t.position = t.position || 0;

t.device = {
  isMobile: (/Mobi|Android/i.test(navigator.userAgent)),
  isTablet: (screen.width < 800 || screen.height < 800),
  isDesktop: !(/Mobi|Android/i.test(navigator.userAgent))
};

t.replace_all = function(string, search, replace) {
  return string.split(search).join(replace);
}

t.clean_string = function(s) {
  return s.toLowerCase().replace(/\á/g,"a").replace(/\é/g,"e").replace(/\í/g,"i").replace(/\ó/g,"o").replace(/\ú/g,"u").replace(/\ñ/g,"n").replace(/\_/g,"-").replace(/\ /g,"-").replace(/[^0-9a-z\-]/g, "")
}


t.start_time = new Date().getTime();
t.log_history=t.log_history||[];
t.l = {
  save: function(type, data){ var time = (new Date().getTime() - t.start_time)/1000; t.log_history.push({time:time, data:data}); adzone.version.indexOf("DRAFT")>=0&&console.log("ADZONE:" + time, type, data); },
  info: function(p1, p2, p3, p4, p5) { var data=[]; p1&&data.push(p1); p2&&data.push(p2); p3&&data.push(p3); p4&&data.push(p4); p5&&data.push(p5); t.l.save("info", data); },
  alert: function(p1, p2, p3, p4, p5) { var data=[]; p1&&data.push(p1); p2&&data.push(p2); p3&&data.push(p3); p4&&data.push(p4); p5&&data.push(p5); t.l.save("alert", data); },
  error: function(p1, p2, p3, p4, p5) { var data=[]; p1&&data.push(p1); p2&&data.push(p2); p3&&data.push(p3); p4&&data.push(p4); p5&&data.push(p5); t.l.save("error", data); }
}
t.log = function(p1, p2, p3, p4, p5) { var data=[]; p1&&data.push(p1); p2&&data.push(p2); p3&&data.push(p3); p4&&data.push(p4); p5&&data.push(p5); t.l.save("legacy", data); }


t.styles = t.styles || {};

t.styles = t.styles || {}
t.styles.footer_close=`<img style='max-width:20px;max-height:20px;width:20px;height:20px;margin-top:-8px;margin-right:-2px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/icon/close_square.png">`;
t.styles.footer_open=`<span style='background-color:white'><img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm/icon/round_expand_less_black_48dp.png"></span>`;
t.styles.prestitial_close=`<img style='max-width:48px;max-height:48px;width:48px;height:48px;margin-top:-34px;margin-right:-28px;' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/close2.png">`;
t.styles.push_expand=`<img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/round_arrow_downward_black_48dp.png">`;
t.styles.push_collapse=`<img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/round_arrow_upward_black_48dp.png">
`;
t.styles.push_expanded_height=``;
t.styles.push_collapsed_height=``;
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
s.src = 'https://cdn.jsdelivr.net/npm/adzone@2.2/adzone.js?'+Math.round((new Date()).getTime()/1000/60/60/24);;
document.head.appendChild(s);



t.cs = {};
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
        d.className = t.supertag_class;
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
        t.l.error("** ERROR COULD NOT INSERT - WRONG SLOT ID OR ADTYPE ** SLOT:", slot);
      }
    } else {
      if(!t.count_create_slot_tries[slot.id]) {
        t.count_create_slot_tries[slot.id]=0;
      }
      if(t.count_create_slot_tries[slot.id]<5) {
        t.count_create_slot_tries[slot.id]++;
        t.pending_create_ad_slots.push(slot);
        window.setTimeout(function() { t.create_slots2(); },1000);
      } else {
        t.l.error("** no place to insert slot: " + slot.id);
      }
    }
  }
};

t.get_page_path = function() {  var p = document.location.pathname;
 var ps = p.split("/");     
 
if(p=="/") {
  adzone.section = "home";
  adzone.page = "home";

} else if(ps[1]=="mercados") { // mercados

  adzone.section = document.body.dataset.section;
  adzone.page = document.body.dataset.page;  
  
} else if(ps.length==3 && ps[1]=="tv") { // tv, seccion
  adzone.section = "tv";
  adzone.page = "seccion";

} else if(ps.length>3 && ps[1]=="tv") { // tv, nota 
  adzone.section = "tv";
  adzone.page = "nota";

} else if(ps.length==2) {
  adzone.section = ps[1];
  adzone.page = "seccion";
  
} else {
  if( document.querySelector(".section-line")) {
    adzone.section = document.querySelector(".section-line").innerText.toLowerCase().split(" ").join("_");
  } else {
    adzone.section = "";
  }
   adzone.page = "nota";
}

return "/elf_"+adzone.page+"/"; };
t.page_path = t.get_page_path();


console.log("test ADZONE");
t.forced_slots = [];
t.forced_slots.push({s: `footer`, f: `108`, t: `10`, p: `{}`, i:`` }); 
t.auto_parse_slots = 'auto';

if(!t.gpt_loaded) {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  gads.src = 'https://www.googletagservices.com/tag/js/gpt.js?1';
  document.head.appendChild(gads);
}

t.network_code = 77835600;
t.enable_single_request = false;
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

t.kv = (function() { return {}; })();
t.size_mapping=[{"device": "desktop", "sizes": [[728, 90], [940, 90], [940, 270], [970, 250]], "adtype": "midbillboard", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[1, 1], [1200, 70], [1200, 100], [1200, 140]], "adtype": "adfooter", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 250]], "adtype": "bloombergsidebar", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[728, 90], [940, 90], [940, 270], [970, 250]], "adtype": "top", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 250]], "adtype": "sidebar", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[728, 90], [940, 270], [970, 250]], "adtype": "midfold", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 50], [320, 50]], "adtype": "sticky", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[728, 90], [940, 90], [940, 270], [970, 250]], "adtype": "internote", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[120, 600], [160, 600]], "adtype": "skyscraper", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "desktop", "sizes": [[300, 600]], "adtype": "skyadnotas", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 250], [320, 50]], "adtype": "bloombergsidebar", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[1, 1], [350, 50], [350, 70], [350, 100]], "adtype": "adfooter", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 50], [320, 50]], "adtype": "midbillboard", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 100], [300, 250], [320, 50]], "adtype": "sidebar", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 50], [320, 50]], "adtype": "top", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 50], [300, 100], [320, 100]], "adtype": "midfold", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 50], [320, 50]], "adtype": "sticky", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 250], [320, 50]], "adtype": "internote", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}, {"device": "mobile", "sizes": [[300, 600], [300, 250]], "adtype": "flyingcarpet", "minwidth": 0, "refresh": 0, "adx_refresh": 0, "interval": 0}];

(function() {  })();
(function() { 
// extra slots
  
  var ad_slots = [];

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
  t.l.info("refresh called");
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

  t.l.info("run_divs", (!div_id_list||div_id_list.length<1?"(searching)":div_id_list));
  var prepare=[];
  Object.keys(div_id_list).forEach(function(c, index) {
    var div_id=div_id_list[c];

    t.cs[div_id] && (delete t.cs[div_id]);
    t.s && t.s[div_id] && (delete t.s[div_id]);

    Object.keys(prepare).forEach(function(d, index2) {
      if(prepare[d]==div_id) {
        t.l.error("** ERROR ** INCORRECT AD TAGS: REPEATED DIV ID ** " + div_id + " **");
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
        t.l.alert("Slot "+div_id+" was defined, but it has no size. It will be ignored.");
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
          t.l.info("Will not print "+div_id+ " until next " + (last_time + size_details["interval"]-time_now) +" minutes. Remove with: sessionStorage.removeItem('adzone_interval_"+div_id+"')");
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
         new_div.classList.add(t.supertag_class);
         new_div.dataset.adzonerun = 1
         new_div.style.margin = "0 auto";
         div.style.display = "block";
         new_div.style.display = "block";
         if(div.dataset.refresh) {
           new_div.dataset.refresh = div.dataset.refresh;
           div.removeAttribute('data-refresh')
         }
         div.classList.remove(t.supertag_class);
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
        t.l.error("Error in definsSlot ", div_id);
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


      if(t.use_epl &&  t.is_epl_slot && t.is_epl_slot(prepare[c])) {      
        if(window.hbepl && hbepl.callSingleSlot) {
          t.l.info("** googletag.display("+prepare[c]+"); ");
          googletag.display(prepare[c]); 
          t.l.info("** hbepl.callSingleSlot( slot: "+prepare[c]+"); ");
          adzone.ce({s:prepare[c],"a":"epl_hb"});
          hbepl.callSingleSlot(t.cs[prepare[c]].slot);
        } else {
          t.l.info("window.hbepl does not exist", prepare[c]);
          googletag.display(prepare[c]);
          t.l.info("**** Refresh: ", prepare[c], t.cs[prepare[c]]);
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
  t.l.info("Will refresh " + e.slot.getSlotElementId() + " in " + seconds + " seconds. ("+reason+")");
}
t.do_refresh_slots = function() {
  var s=t.refresh_slots;
  t.refresh_slots=[];
  Object.keys(s).forEach(function(c, index) {
    t.l.info("Manual Refresh: ", s[c]);
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
    t.l.info("YES, it's epl", d);
    return true;
  } else {  
    t.l.info("NOT epl", d);
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
  adzone.kv = adzone.kv || {};
  adzone.kv && Object.keys(adzone.kv).forEach(function(k, index) {
    var v = adzone.kv[k];
    googletag.pubads().setTargeting(k, v);
  });
  googletag.pubads().setTargeting("platform", t.kv.platform ? t.kv.platform : (t.device.isMobile?"mobile":"desktop"));
  if (document.location && document.location.host) {
    googletag.pubads().setTargeting("domain", document.location.host);
  } 
  t.section && googletag.pubads().setTargeting("section", t.clean_string(t.section));
  t.page && googletag.pubads().setTargeting("page", t.clean_string(t.page));
  t.page_id && googletag.pubads().setTargeting("page_id", t.clean_string(t.page_id));
  
  var adstest = localStorage ? localStorage.getItem("adzone-test") : "";
  if(adstest && adstest!="" && adstest!="null") {
    googletag.pubads().setTargeting("test", adstest);
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
    t.l.info("Seeking slots, "+(t.run_new_count/120)+" min. since start");
  }

  t.page_path = t.get_page_path();
  var divs = document.getElementsByClassName(t.supertag_class);
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
  var d = document.querySelectorAll("."+t.supertag_class);
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

  var div_id=e.slot.getSlotElementId();
  t.ad_events.push(e);

/*
  if(!(div_id in t.cs)) {
    t.l.error("** Error while rendering " + div_id, e);
    return;
  }
  var event_data={
    ad_unit_path:event.slot.getAdUnitPath(),
    requst_sizes: event.slot.getSizes(),
    size: (event.slot && event.slot.size) || [0,0],
    advertiser_id: event.advertiserId,
    campaign_id: event.campaignId,
    creative_id: event.creativeId,
    lineitem_id: event.lineItemId,
    advertiser_id: event.advertiserId,
    is_empty: event.isEmpty,
    rendered_time: end_time - t.start_time,
    slot_id: d,
    ad_type: "",
    targeting_map: event.slot.getTargetingMap(),
    query_id: event.slot.getEscapedQemQueryId(),


    event:event
  }

  t.cs[div_id].event_data=event_data;
  t.cs[div_id].end_time=new Date().getTime();
  t.cs[div_id].rendered_time = t.cs[div_id].end_time - t.cs[div_id].start_time;

  t.event_history.push(event_data);
  */
  try{
    t.slotRenderedCallback[div_id]&&t.slotRenderedCallback[div_id](e);
  } catch(e) { 
    t.l.error("** ERROR IN adzone.slotRenderedCallback('" + div_id + "'");
  }
  try{
    t.slotRenderedCallbackAll&&t.slotRenderedCallbackAll(e);
  } catch(e) { 
    t.l.error("** ERROR IN adzone.slotRenderedCallbackAll('" + div_id + "'");
  }
};

if(t.auto_parse_slots=='start') {
  adzone.run_new_interval = window.setInterval(function() {adzone.run_new();},500);
  window.setTimeout(function(){window.clearInterval(adzone.run_new_interval);},5000);
} else if(t.auto_parse_slots=='auto') {
  window.setInterval(function() {adzone.run_new()},500);
}

})(adzone);
}

adzone.setup_interval = window.setInterval(function() {
  if(document.body) {
    adzone && window.clearInterval(adzone.setup_interval);
    adzone && adzone.setup_supertag && adzone.setup_supertag();
  }
},10);
