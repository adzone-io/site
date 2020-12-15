(function(t) {

t.code = '1_demos';
t.version = '125';
t.version_datetime = '2020-Dec-14 23:39:55';


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
t.styles.footer_close=`1`;
t.styles.footer_open=`d`;
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
t.styles.footer_bottom_margin=`f`;
t.styles.footer_z_index=`4000000`;
t.styles.itt_z_index=`5000000`;
t.styles.prestitial_close_mobile=`<img style='float:left;max-width:48px;max-height:48px;width:48px;height:48px;margin-top:-34px;margin-right:-28px;' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@1.0.0/icon/close2.png">`;

// BEFORE RUN

t.forced_slots = [];
t.forced_slots.push({s: `interstitial`, f: `103`, t: `11`, p: `{}`, i:`{}` });
t.forced_slots.push({s: ``, f: `103`, t: `10`, p: ``, i:`` }); 


var s = document.createElement("script");
s.async = true;
s.src = 'https://cdn.jsdelivr.net/npm/adzone@2.3/adzone.js?'+Math.round((new Date()).getTime()/1000/60/60/24);;
document.head.appendChild(s);


})(adzone);