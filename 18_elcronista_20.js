(function(t) {

t.code = '18_elcronista';
t.version = '20';
t.version_datetime = '2020-Dec-11 13:32:44';


if(localStorage && localStorage.getItem && (localStorage.getItem("adzone-draft")==1)) {
  var s = document.createElement("script");
  s.src = "https://us-east-1.linodeobjects.com/ad.s-adzone.com/config/"+t.code+"_draft.js?"+Math.random();
  document.head.appendChild(s);
  console.log("** Adzone DRAFT version **");
  return;
}


t.start_time = new Date().getTime();
t.ad_events=[];


t.styles = t.styles || {}
t.styles.footer_close=`<img style='max-width:20px;max-height:20px;width:20px;height:20px;margin-top:-8px;margin-right:-2px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/icon/close_square.png">`;
t.styles.footer_open=`<span style='background-color:white'><img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm/icon/round_expand_less_black_48dp.png"></span>`;
t.styles.prestitial_close=`<img style='cursor:pointer!important;width:48px!important;height:48px!important;margin-top:-25px!important;margin-left:-24px!important' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/close2.png">`;
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
t.styles.footer_z_index=`4000000`;
t.styles.itt_z_index=`5000000`;
t.styles.prestitial_close_mobile=`<img style='float:left;max-width:48px;max-height:48px;width:48px;height:48px;margin-top:-34px;margin-right:-28px;' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/close2.png">`;

adzone.center_sticky = function() {
  var sections = document.querySelectorAll("section");
  var center = 0;
  for(var i=0; i<=sections.length; i++) {
    if(center>0){break;}
    try {
      var r = sections[i].getBoundingClientRect();
      center = Math.max(center, (r.width/2) + r.x);
    } catch(e) {}
  }
  
  
  var s = document.querySelector(".AdManagerSticky");
  if(s) {
    var sr = s.getBoundingClientRect();
//    var center2 = (sr.width/2) ;//+ sr.x
    s.style.marginLeft = Math.max(0,((center-sr.width)/2))+"px";
  }
}

window.addEventListener("resize", adzone.center_sticky);


googletag.cmd.push(function() {
  googletag.pubads().addEventListener('slotRenderEnded', function(event) {
//    if(!event.isEmpty) {
      adzone.center_sticky();
      document.getElementById(event.slot.getSlotElementId()).parentElement.style.display="";
//    }
  });
}); 

adzone.sticky_interval = window.setInterval(adzone.center_sticky, 100);
window.setTimeout(function(){ window.clearInterval(adzone.sticky_interval) }, 5000);

document.getElementById("div-gpt-ad-1578585241575-0") && (document.getElementById("div-gpt-ad-1578585241575-0").parentElement.style.display="none");
document.getElementById("div-gpt-ad-1593177114334-0") && (document.getElementById("div-gpt-ad-1593177114334-0").parentElement.style.display="none");
document.getElementById("54299349-it-ancla") && (document.getElementById("54299349-it-ancla").parentElement.style.display="none");




t.forced_slots = [];
t.forced_slots.push({s: `div-gpt-ad-1578585241575-0`, f: `108`, t: `500`, p: `{}`, i:`{}` });
t.forced_slots.push({s: `div-gpt-ad-1593177114334-0`, f: `108`, t: `500`, p: `{}`, i:`{}` });
t.forced_slots.push({s: `div-gpt-ad-1596720859080-0`, f: `103`, t: `2000`, p: `{}`, i:`` });
t.forced_slots.push({s: `div-gpt-ad-1596817348060-0`, f: `103`, t: `2000`, p: `{}`, i:`` });
t.forced_slots.push({s: `54299349-it-ancla`, f: `108`, t: `500`, p: `{}`, i:`{}` }); 


var s = document.createElement("script");
s.async = true;
s.src = 'https://cdn.jsdelivr.net/npm/adzone@2.3/adzone.js?'+Math.round((new Date()).getTime()/1000/60/60/24);;
document.head.appendChild(s);


})(adzone);