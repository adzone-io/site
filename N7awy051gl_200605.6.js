/* N7awy051gl - Intranews  */

var adzone = adzone||{};
var googletag = googletag||{};
googletag.cmd = googletag.cmd||[];



(function(t) {

t.device = {
  isMobile: (/Mobi/.test(navigator.userAgent)),
  isTablet: (screen.width < 800 || screen.height < 800),
  isDesktop: !(/Mobi/.test(navigator.userAgent))
};

t.code = 'N7awy051gl.200605.6';

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

t.create_slots = function(ad_slots) {
  for(var i = 0; i<ad_slots.length; i++) {
    var slot = ad_slots[i];
    if(slot.div) {
      if(slot.id && slot.adtype) {
        var d = document.createElement("div");
        d.className = "ad-slot";
        d.id = slot.id;
        d.dataset.adtype = slot.adtype;
        slot.style && (d.style.cssText = slot.style);
        slot.class && (d.className = slot.class);
        slot.floating && (d.style.display = "none");
        if(slot.location == "after") {
          slot.div.parentNode.insertBefore(d, slot.div.nextSibling);
        } else if(slot.location == "before") {
          slot.div.parentElement.insertBefore(d, slot.div);
        } else if(slot.location == "first") {
          slot.div.prepend(d);
        } else if(slot.location == "replace") {
          slot.div.innerHTML = "";
          slot.div.appendChild(d);
        } else if(slot.location == "replace_if_filled") {
          d.style.display="none";
          slot.div.appendChild(d);
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
          slot.div.appendChild(d);
        }
      } else {
        t.log("** ERROR COULD NOT INSERT - WRONG SLOT ID OR ADTYPE ** SLOT:", slot);
      }
    } else {
      t.log("** no insert slot SLOT:", slot);
    }
  }
};

t.page_path = (function() { var site = "default";
var h = document.location.href;
if(h.indexOf("salta4400")>0) {
  site = "salta4400";
} else if(h.indexOf("elintra.com.ar")>0) {
  site = "elintra";
} else if(h.indexOf("elaconquija")>0) {
  site = "elaconquija";
} else if(h.indexOf("elcivico")>0) {
  site = "elcivico";
} else if(h.indexOf("elintranews.com")>0) {
  site = "elintranews";
} else if(h.indexOf("elintransigente")>0) {
  site = "elintransigente";
}

var l = h.substr(0, h.length-1).split("/").length;
var section = "nota";
if(l==3) {
  section = "home";
} else if(l<=6) {
  section = "seccion";
}

adzone.site = site;
adzone.section = section;

return "/" + site + "_" + section + "/"; })();
var h = document.location.href;
var l = h.substr(0, h.length-1).split("/").length;
var section = "nota";
if(l==3) {
  section = "home";
} else if(l<=6) {
  section = "seccion";
}

var isMobile = (/Mobi/.test(navigator.userAgent));
var isDesktop = !isMobile;
var isHome = (section == "home");
var isSeccion = (section == "seccion");
var isNota = (section == "nota");
var ad_slots = [];

// imprimir ITT sólo cada 30 minutos, sólo en mobile
var show_itt = false;
var mins = 30;
var last_itt=localStorage.getItem("last_itt") || 0;
if(last_itt < ( Math.round((new Date()).getTime()/1000/1000) - mins )) {
  localStorage.setItem("last_itt", Math.round((new Date()).getTime()/1000/1000));
  show_itt = true;
}

// todos tienen zócalo:
ad_slots.push({ div: document.body , location: "first" , id: "zocalo" , adtype: "zocalo", floating: true });

if(isDesktop) {
  // todo desktop tiene header_top y top
  //ad_slots.push({ div: document.querySelector("header") , location: "before" , id: "header_top" , adtype: "top", style: "" });
  ad_slots.push({ div: document.querySelector("header") , location: "after" , id: "top" , adtype: "top", style: "" });
  if(isHome) {
    ad_slots.push({ div: document.querySelector("#main-article") , location: "after" , id: "wide_1" , adtype: "wide", style: "" });
    ad_slots.push({ div: document.querySelector(".nota-3") , location: "after" , id: "wide_2" , adtype: "wide", style: "" });
    ad_slots.push({ div: document.querySelector(".modulo-3") , location: "before" , id: "wide_3" , adtype: "wide", style: "" });
    
    // despues de videos
    ad_slots.push({ div: document.querySelector(".modulo-4") , location: "after" , id: "wide_4" , adtype: "wide", style: "" });

    // antes de mundo
    ad_slots.push({ div: document.querySelectorAll(".modulo-2")[1] , location: "before" , id: "wide_5" , adtype: "wide", style: "" });
        
    // despues de industry news
    ad_slots.push({ div: document.querySelector(".modulo-7") , location: "after" , id: "wide_6" , adtype: "wide", style: "" });
    
    // antes de celebrities
    ad_slots.push({ div: document.querySelector(".modulo-6") , location: "before" , id: "wide_7" , adtype: "wide", style: "" });

    // agrego cajas
    //ad_slots.push({ div: document.querySelectorAll(".col-4")[2] , location: "replace" , id: "box_1" , adtype: "box", style: "" });
    //ad_slots.push({ div: document.querySelectorAll(".col-4")[3] , location: "replace" , id: "box_2" , adtype: "box", style: "" });
    //ad_slots.push({ div: document.querySelectorAll(".col-4")[8] , location: "replace" , id: "box_3" , adtype: "box", style: "" });
    //ad_slots.push({ div: document.querySelectorAll(".col-4")[9] , location: "replace" , id: "box_4" , adtype: "box", style: "" });
    //ad_slots.push({ div: document.querySelector(".banner-right") , location: "first" , id: "box_5" , adtype: "bigbox", style: "" });

/*
    // reemplazo cajas
    document.querySelectorAll("main .container .col-4") && document.querySelectorAll("main .container .col-4")[2] && 
(document.querySelectorAll("main .container .col-4")[2].innerHTML = "<div class='ad-slot' data-adtype='box' id='box_1' style='margin:40px 20px'></div>");

//    document.querySelectorAll("main .container .col-4") && document.querySelectorAll("main .container .col-4")[6] &&
//(document.querySelectorAll("main .container .col-4")[6].innerHTML = "<div class='ad-slot' data-adtype='box' id='box_2' style='margin:40px 20px'></div>");

    document.querySelector("main>.modulo-8 .col-4") &&
(document.querySelector("main>.modulo-8 .col-4").innerHTML = "<div class='ad-slot' data-adtype='box' id='box_3' style='margin:20px 20px 0 20px'></div><div class='ad-slot' data-adtype='box' id='box_4' style='margin:20px'></div>");
*/    
  }

  if(isSeccion || isNota) {
  // en seccion y nota muestro ITT  
  show_itt && ad_slots.push({ div: document.body , location: "first" , id: "itt" , adtype: "itt", style: "display:none",  floating: true });

  // Tres cajas en la columna de la derecha en secciones y notas
    document.querySelector(".sticky-column").style.top="40px";
    ad_slots.push({ div: document.querySelector(".sticky-column") , location: "last" , id: "box_1" , adtype: "bigbox", style: "margin-bottom:20px" });
    ad_slots.push({ div: document.querySelector(".sticky-column") , location: "last" , id: "box_2" , adtype: "box", style: "margin-bottom:20px" });
    ad_slots.push({ div: document.querySelector(".sticky-column") , location: "last" , id: "box_3" , adtype: "box", style: "margin-bottom:20px" });
    //ad_slots.push({ div: document.querySelector(".sticky-column") , location: "last" , id: "box_4" , adtype: "box", style: "margin-bottom:20px" });
    //ad_slots.push({ div: document.querySelector(".sticky-column") , location: "last" , id: "box_5" , adtype: "box", style: "margin-bottom:20px" });
  }
 
  if(isSeccion) {
    for(var i = 0; i<document.querySelectorAll("article").length; i++){
     if(i%4==0) {
       ad_slots.push({ div: document.querySelectorAll("article")[i] , location: "after" , id: "wide_1" , adtype: "nota_wide", style: "" });
     }
    }
  } else if(isNota) {
    // arriba del copete
    ad_slots.push({ div: document.querySelector("article") , location: "before" , id: "wide_1" , adtype: "nota_wide", style: "" });
    // cada 2 parrafos
    for(var i = 0; i<document.querySelectorAll(".content-field > p").length; i++){
     if(i%2==1) {
       ad_slots.push({ div: document.querySelectorAll(".content-field > p")[i] , location: "after" , id: "wide_1" , adtype: "nota_wide", style: "" });
     }
    }
  }




} else if (false) {  // mobile
  // todos tienen header top
  ad_slots.push({ div: document.querySelector("header") , location: "before" , id: "header_top" , adtype: "header_top", style: "" });

  if(isHome) { // home mobile
    var id=0;
    for(var i = 1; (i<document.querySelectorAll(".container .col-4").length && id<7); i++){
     if(i%2==1) {
       id++;
       ad_slots.push({ div: document.querySelectorAll(".container .col-4")[i] , location: "after" , id: "wide_1_position_"+id , adtype: "wide", style: "" });
     }
    }
    var id=0;
    for(var i = 1; (i<document.querySelectorAll("article.nota-4").length && id<7); i++){
     if(i%2==0) {
       id++;
       ad_slots.push({ div: document.querySelectorAll("article.nota-4")[i] , location: "after" , id: "wide_2_position_"+id , adtype: "wide", style: "" });
     }
    }

  } else if(isSeccion) { // seccion mobile
    //ad_slots.push({ div: document.querySelector("header") , location: "after" , id: "top" , adtype: "top", style: "" });

  } else { // nota mobile
    //ad_slots.push({ div: document.querySelector("header") , location: "after" , id: "top" , adtype: "top", style: "" });

  }
}




adzone.create_slots(ad_slots)


googletag.cmd.push(function() { 
  googletag.pubads().addEventListener("slotRenderEnded", function(e) {

    var div_id = e.slot.getSlotElementId();

    if(!e.isEmpty && e.size && e.size[0] && e.size[0]>10) {
      var type_id = false;
      var timeout = 10;
      var params = "";

      var ignore = false;
      if(e.lineItemId && ',,{},'.indexOf(','+e.lineItemId+',')>0) {
        ignore = true;
      }
      if(e.campaignId && ',,{},'.indexOf(','+e.campaignId+',')>0) {
        ignore = true;
      }
      if(!ignore && div_id.toLowerCase().indexOf('zocalo'.toLowerCase())>=0) { params='{}'; timeout = 500; type_id='108'; params=JSON.parse('{}'); }
      var ignore = false;
      if(e.lineItemId && ',,{},'.indexOf(','+e.lineItemId+',')>0) {
        ignore = true;
      }
      if(e.campaignId && ',,{},'.indexOf(','+e.campaignId+',')>0) {
        ignore = true;
      }
      if(!ignore && div_id.toLowerCase().indexOf('itt'.toLowerCase())>=0) { params='{}'; timeout = 0; type_id='103'; params=JSON.parse('{}'); }
      if(type_id) {
adzone.log(t.lp(),"Forced Format:", type_id, div_id, params);
        var m = { data: {m:"adzone", a:"print", f:type_id, div_id: div_id, p: params } };
        window.setTimeout(function(){ adzone.readFormatMessage(m);}, timeout );
      }
    }
    adzone.log(t.lp(),e.slot.getSlotElementId() + " is " + (e.isEmpty?"empty":"filled"));
  })
})
 
t.auto_parse_slots = 'auto';

var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
gads.src = 'https://www.googletagservices.com/tag/js/gpt.js';
document.head.appendChild(gads);


t.network_code = 21953759069;
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

t.collapse_empty_divs = true;
if(document.location.href.indexOf("collapse_empty_divs=1")>0) {
  t.collapse_empty_divs=true;
}
if(document.location.href.indexOf("collapse_empty_divs=0")>0) {
  t.collapse_empty_divs=false;
}

t.kv = (function() {  })();
t.size_mapping=[{"device": "desktop", "adtype": "top", "min_width": 700, "sizes": [[970, 90], [728, 90]], "refresh": 0}, {"device": "mobile", "adtype": "top", "min_width": 0, "sizes": [[320, 50], [300, 50], [320, 100], [300, 100]], "refresh": 0}, {"device": "desktop", "adtype": "wide", "min_width": 700, "sizes": [[728, 90], "728", "250", [970, 90], [970, 250]], "refresh": 0}, {"device": "mobile", "adtype": "wide", "min_width": 0, "sizes": [[320, 50], [300, 100], [300, 50], [320, 100], [300, 250]], "refresh": 0}, {"device": "all_devices", "adtype": "box", "min_width": 0, "sizes": [[300, 250]], "refresh": 0}, {"device": "all_devices", "adtype": "bigbox", "min_width": 0, "sizes": [[300, 250], [300, 600]], "refresh": 0}, {"device": "desktop", "adtype": "itt", "min_width": 800, "sizes": [[800, 600], [1000, 540]], "refresh": 0}, {"device": "mobile", "adtype": "itt", "min_width": 0, "sizes": [[320, 480]], "refresh": 0}, {"device": "desktop", "adtype": "zocalo", "min_width": 700, "sizes": [[1, 1], [728, 90], [970, 90], [970, 251]], "refresh": 60}, {"device": "mobile", "adtype": "zocalo", "min_width": 0, "sizes": [[320, 50], [300, 50]], "refresh": 60}, {"device": "desktop", "adtype": "wide", "min_width": 0, "sizes": [[300, 250]], "refresh": 0}, {"device": "desktop", "adtype": "leftbox", "min_width": 992, "sizes": [[300, 250]], "refresh": 0}, {"device": "desktop", "adtype": "leftbigbox", "min_width": 992, "sizes": [[300, 250], [300, 600]], "refresh": 0}, {"device": "desktop", "adtype": "nota_wide", "min_width": 700, "sizes": [[728, 90], "728", "250"], "refresh": 0}, {"device": "mobile", "adtype": "header_top", "min_width": 0, "sizes": [[320, 50], [300, 50]], "refresh": 0}];

(function() {  })();

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

      t.cs[div_id] = t.new_slot(div_id);

      var size_details = t.get_size_details(div_id);
      if(size_details==[]) { return; }
      t.cs[div_id].sizes = size_details["sizes"];
      var refresh = 0;
      try {
        refresh = (div.dataset.refresh || size_details["refresh"] || 0)*1;
      } catch(e) { }
      if(refresh>0) {
        div.dataset.refresh = refresh;
      }
      
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
          t.cs[div_id].slot=googletag.defineSlot(path, t.cs[div_id].sizes, div_id).setTargeting("refresh", refresh).addService(googletag.pubads());
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
      if(t.cs[prepare[c]].sizes==[]) { return; }

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
  var adstest = localStorage ? localStorage.getItem("adzone-test") : "";
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

t.get_size_details = function(div_id) {
  var min_width=0;
  var adtype = t.cs[div_id].adtype;
  var sizes=[];
  var refresh = 0;
  Object.keys(t.size_mapping).forEach(function(c, index) {
    var k = t.size_mapping[c];
    k.min_width=k.min_width||0;
    if(k.device.indexOf("all_devices")>=0 || (t.device.isMobile && k.device.indexOf("mobile")>=0) || (t.device.isDesktop && k.device.indexOf("desktop")>=0)) {
      if(adtype.toLowerCase()==k.adtype.toLowerCase() && k.min_width>=min_width && k.min_width<=window.innerWidth) {
        min_width = k.min_width;
        sizes = k.sizes;
        refresh = k.refresh*1||0;
      }
    }
  });
  return {"sizes": sizes, "refresh": refresh};

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


if(t.auto_parse_slots=='start') {
  adzone.run_new_interval = window.setInterval(function() {adzone.run_new();},500);
  window.setTimeout(function(){window.clearInterval(adzone.run_new_interval);},5000);
} else if(t.auto_parse_slots=='auto') {
  window.setInterval(function() {adzone.run_new()},500);
}

})(adzone);