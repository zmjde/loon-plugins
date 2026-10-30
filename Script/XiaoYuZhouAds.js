// jq rules converted by Minis
let d;
try{d=JSON.parse($response.body)}catch(e){$done({})}
const R=[
 [new RegExp("^https?:\\/\\/api\\.xiaoyuzhoufm\\.com\\/v\\d\\/discovery-feed\\/list"),d=>{d.data=(d.data||[]).filter(x=>x.type !=="DISCOVERY_BANNER");}],
];
let hit=false;
for(const [re,fn] of R){if(re.test($request.url)){fn(d);hit=true;break}}
$done(hit?{body:JSON.stringify(d)}:{})