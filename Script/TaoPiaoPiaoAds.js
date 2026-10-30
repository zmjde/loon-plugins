// jq rules converted by Minis
let d;
try{d=JSON.parse($response.body)}catch(e){$done({})}
const R=[
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.mtopadvertiseapi.queryloadingbanner"),d=>{d.data.returnValue={};}],
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.independentadvertiseapi.querypreloadadvertise"),d=>{d.data.returnValue=[];}],
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.mtopsearchapi.getranklistbytypeforsearch"),d=>{d.data.returnValue={};}],
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.mtopintegrationapi.homeconfig"),d=>{d.data.returnValue={};}],
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.mtopindependentadvertiseapi.queryadvertise"),d=>{d.data.returnValue=[];}],
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.life.aristotle.get"),d=>{}],
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.life.popup.get"),d=>{d.data={};}],
 [new RegExp("https://acs.m.taobao.com/gw/mtop.film.mtopitemadvertiseapi.queryadvertise"),d=>{delete d.data.returnValue;}],
];
let hit=false;
for(const [re,fn] of R){if(re.test($request.url)){fn(d);hit=true;break}}
$done(hit?{body:JSON.stringify(d)}:{})