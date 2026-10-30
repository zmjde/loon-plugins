// jq rules converted by Minis
let d;
try{d=JSON.parse($response.body)}catch(e){$done({})}
const R=[
 [new RegExp("^https?:\\/\\/.*api\\.moji\\.com\\/json\\/entrance\\/list"),d=>{d.entrance_region_res_list=map(select(.region_name;}],
];
let hit=false;
for(const [re,fn] of R){if(re.test($request.url)){fn(d);hit=true;break}}
$done(hit?{body:JSON.stringify(d)}:{})