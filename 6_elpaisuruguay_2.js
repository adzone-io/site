(function(t) {

t.code = '6_elpaisuruguay';
t.version = '2';
t.version_datetime = '2020-Aug-17 00:06:34';

t.start_time = new Date().getTime();
t.ad_events=[];


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

googletag.cmd.push(function() {
googletag.pubads().addEventListener('slotRenderEnded', function(e) {
  var div_id = e.slot.getSlotElementId();
  if(((div_id).indexOf("rm")>0 || (div_id).indexOf("bottom")>=0) && !e.isEmpty && e.size && e.size[0] && e.size[1]) {
    var type_id = false;
    var params = {};
    var timeout = 10;

    var width = e.size[0];
    var height = e.size[1];
    if(width>700 && height<100) { // zocalo
      type_id = "108";
      timeout = 1000;
    } else if(width>=290) { // prestitial
       type_id = "103";
       params = { autoclose: 8, backgroundColor:"#eee" };
    } 
    if(type_id) {
      var m = { data: {m:"adzone", a:"print", f:type_id, div_id: div_id, p: params }};
      window.setTimeout(function(){ adzone.readFormatMessage(m);}, timeout );
    }
  }
});});


t.forced_slots = [];
t.forced_slots.push({s: ``, f: ``, t: `10`, p: ``, i:`` }); 


var s = document.createElement("script");
s.async = true;
s.src = 'https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/adzone.js?'+Math.round((new Date()).getTime()/1000/60/60);;
document.head.appendChild(s);


})(adzone);