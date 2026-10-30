// jq rules converted by Minis
let d;
try{d=JSON.parse($response.body)}catch(e){$done({})}
const R=[
 [new RegExp("^https?:\\/\\/m\\.client\\.10010\\.com\\/search_service\\/search\\/searchScrollWord"),d=>{}],
 [new RegExp("^https?:\\/\\/m\\.client\\.10010\\.com\\/clientIndex\\/homefusion\\/fuInter"),d=>{}],
 [new RegExp("^https?:\\/\\/m\\.client\\.10010\\.com\\/clientMyPage\\/v\\d\\/api\\/myWallet"),d=>{d.data={};}],
 [new RegExp("^https?:\\/\\/m\\.client\\.10010\\.com\\/clientMyPage\\/v\\d\\/api\\/myPoints"),d=>{d.data={};}],
 [new RegExp("^https?:\\/\\/m\\.client\\.10010\\.com\\/clientMyPage\\/v\\d\\/api\\/myColorfulRingtone"),d=>{d.data={};}],
 [new RegExp("^https?:\\/\\/m\\.client\\.10010\\.com\\/clientMyPage\\/v\\d\\/api\\/newUserInfo"),d=>{d.data={};}],
 [new RegExp("^https?:\\/\\/m\\.client\\.10010\\.com\\/clientMyPage\\/v\\d\\/api\\/getDeviceInfo"),d=>{d.data={};}],
];
let hit=false;
for(const [re,fn] of R){if(re.test($request.url)){fn(d);hit=true;break}}
$done(hit?{body:JSON.stringify(d)}:{})