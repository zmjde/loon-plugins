// jq rules converted by Minis
let d;
try{d=JSON.parse($response.body)}catch(e){$done({})}
const R=[
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/ListFlash"),d=>{d.data.list=[]; d.data.ad_list=[]; d.data.show=[]; d.data.verifying_list=[]; d.data.ad_loc=false;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/Banner"),d=>{d.data=[];}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/AppInit"),d=>{d.data.flash={"id":0,"title":"","img":"","jump_type":0,"jump_value":"","offline_time":"","meta_type":0,"video":"","online_time":"","button":"","video_hash":"","button_type":0,"click_type":0,"show_limit":0,"txt_type":0,"back_img":"","flow_id":""}; d.data.operate={"id":0,"title":"","img":"","jump_url":"","gift_type":0,"gift_comic_id":0,"gift_url":"","has_taken_gift":false,"jump_type":0,"img_type":0,"md5":"","play_mode":0}; d.data.user_center_operate=null; d.data.activity_tab=null; d.data.bubble=null; d.data.card_banner_in_pay=null; d.data.card_banner_in_ctrl={"id":0,"img_url":""}; d.data.card_banner_in_coupon=null; d.data.fission={"enable_entry":false,"title":"","subtitle":"","url":""}; d.data.shop_entry=false; d.data.shop_entry_txt=""; d.data.shop_entry_icon=""; d.data.game_entry=false; d.data.game_entry_txt=""; d.data.game_entry_desc=""; d.data.game_entry_url=""; d.data.game_entry_icon=""; d.data.act_entry_txt=""; d.data.act_entry_txt_type=0; d.data.unread_message_count=0;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/GetClassPageAllTabs"),d=>{d.data.home_type=(d.data.home_type||[]).filter(x=>x.name!=="初夏纯爱！" && x.name!=="妖气村"); d.data.home_feed=(d.data.home_feed||[]).filter(x=>x.name!=="商城");}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Home\\/HomeFeed"),d=>{d.data.feeds=(d.data.feeds||[]).filter(x=>x.type!=42); d.data.banner.image=""; d.data.banner.jump_url=""; d.data.banner.text=""; d.data.banner.remain_sign_days=0;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/GetActivityTab"),d=>{d.data.name=""; d.data.img=""; d.data.url=""; d.data.gif=""; d.data.cycle_num=0; d.data.bubble_txt=""; d.data.id=0;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/GetBubbles"),d=>{d.data.bubbles=[]; d.data.rule=null;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/GetWelfareBanner"),d=>{d.data.type=0; d.data.title=""; d.data.sub_title=""; d.data.content=""; d.data.jump_url="";}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/GetOperaterBanner"),d=>{d.data.operate={"id":0,"title":"","img":"","jump_url":"","gift_type":0,"gift_comic_id":0,"gift_url":"","has_taken_gift":false,"jump_type":0,"img_type":0,"md5":"","play_mode":0};}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/GetCommonBanner"),d=>{d.data.id=0; d.data.title=""; d.data.content=""; d.data.jump_url=""; d.data.jump_type=0; d.data.background=""; d.data.image_url=""; d.data.comic_id=0; d.data.icon=""; d.data.type=0; d.data.column=null; d.data.limit_scope=0; d.data.btn_txt=""; d.data.img_type=0; d.data.play_mode=0; d.data.color_type=0; d.data.sub_background=""; d.data.relate_second_page=false; d.data.active_time=""; d.data.offline_time=""; d.data.create_time=""; d.data.status=0; d.data.banner_ext=null; d.data.bubble_text=""; d.data.calendar_ext=null;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/GetHookBanner"),d=>{d.data.id=0; d.data.title=""; d.data.jump_url=""; d.data.image_url="";}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/user\\.v\\d\\.User\\/UCenterConf"),d=>{d.data.confs=(d.data.confs||[]).filter(x=>x.title==="我的已购"); d.data.show_welfare=false; d.data.show_all_welfare=false;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/user\\.v\\d\\.User\\/GetMarketingCenterInfo"),d=>{d.data.show_entry=false; d.data.entry.image=""; d.data.entry.url=""; d.data.entry.entry_id="0"; d.data.show_popup=false; d.data.popup.image=""; d.data.popup.url=""; d.data.popup.activity_id="0"; d.data.popup.entry_id="0";}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/search\\.v\\d\\.Search\\/GetSearchBoxKeyword"),d=>{d.data.keywords=[];}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/SearchDisplay"),d=>{d.data.list=[];}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/SearchBanner"),d=>{d.data.banners=[];}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/search\\.v\\d\\.Search\\/GetGuessLabel"),d=>{d.data.labels=[];}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/search\\.v\\d\\.Search\\/GetHotSearch"),d=>{d.data.comics=[];}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/line\\.v\\d\\.Line\\/TabRedDot"),d=>{d.data.has_red_dot=false;}],
 [new RegExp("^https:\\/\\/manga\\.bilibili\\.com\\/twirp\\/comic\\.v\\d\\.Comic\\/Recommend"),d=>{d.data=[];}],
];
let hit=false;
for(const [re,fn] of R){if(re.test($request.url)){fn(d);hit=true;break}}
$done(hit?{body:JSON.stringify(d)}:{})