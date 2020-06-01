/* aYDGUi2y9E - www.encancha.cl */

(function(t) {

t.start_time = new Date().getTime();
t.ad_events=[];


adzone.styles = adzone.styles || {}
t.styles.footer_close=`<img style='max-width:20px;max-height:20px;width:20px;height:20px;margin-top:-8px;margin-right:-2px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/icon/close_square.png">`;
t.styles.footer_open=`<span style='background-color:white'><img style='width:24px;height:24px' src="https://cdn.jsdelivr.net/gh/adzone-io/rm/icon/round_expand_less_black_48dp.png"></span>`;
t.styles.prestitial_close=`<img style="left: -796px;height: 24px;margin-top:-40px;position:absolute;" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_logo_1.png"> <img style="right:0;height: 28px;margin-top: -42px;position:absolute;" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_close_1.png">`;
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

if((/Mobi/.test(navigator.userAgent))) {
adzone.styles.prestitial_close=`<img style="left: -317px;height: 18px;margin-top: -30px;position:absolute;" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_logo_1.png"> <img style="right:0;height: 19px;margin-top: -29px;position:absolute;" src="https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/pub_icons/009_close_1.png">
`;

}


var s = document.createElement("script");
s.async = true;
s.src = 'https://cdn.jsdelivr.net/gh/adzone-io/rm@2.1/adzone.js?'+Math.round((new Date()).getTime()/1000/60/60);;
document.head.appendChild(s);



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
      if(!ignore && div_id.toLowerCase().indexOf('itt'.toLowerCase())>=0) { params='{"autoclose": "8", "backgroundColor": "rgba(255, 255, 255, 0.95)"}'; timeout = 0; type_id='103'; params=JSON.parse('{"autoclose": "8", "backgroundColor": "rgba(255, 255, 255, 0.95)"}'); }
      if(type_id) {
adzone.log(t.lp(),"Forced Format:", type_id, div_id, params);
        var m = { data: {m:"adzone", a:"print", f:type_id, div_id: div_id, p: params } };
        window.setTimeout(function(){ adzone.readFormatMessage(m);}, timeout );
      }
    }
    adzone.log(t.lp(),e.slot.getSlotElementId() + " is " + (e.isEmpty?"empty":"filled"));
  })
})
 

})(adzone);