(function(t) {

t.code = '9_encanchacl';
t.version = '3';
t.version_datetime = '2020-Nov-10 14:12:05';


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
t.styles.prestitial_close=`<img style="left:-770px;height: 24px;margin-top:-40px;position:absolute;" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_logo_1.png"> <img style="right:0;height: 28px;margin-top: -42px;position:absolute;left:-169px" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_close_1.png">`;
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

if((/Mobi/.test(navigator.userAgent))) {
adzone.styles.prestitial_close=`<img style="left:-294px;height: 18px;margin-top: -30px;position:absolute;" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_logo_1.png"> <img style="left:-107px;right:0;height: 19px;margin-top: -29px;position:absolute;" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_close_1.png">
`;

}

adzone.videoInterval=window.setInterval(function(){ document.querySelector(".brid") && (document.querySelector(".brid").style.zIndex="999999") },100);
window.setTimeout(function(){ window.clearInterval(adzone.videoInterval); }, 10000);

t.forced_slots = [];
t.forced_slots.push({s: `itt`, f: `103`, t: `10`, p: `{"autoclose": "8", "backgroundColor": "rgb(255,255,255,0.95)"}`, i:`{}` }); 


var s = document.createElement("script");
s.async = true;
s.src = 'https://cdn.jsdelivr.net/npm/adzone@2.2/adzone.js?'+Math.round((new Date()).getTime()/1000/60/60/24);;
document.head.appendChild(s);


})(adzone);