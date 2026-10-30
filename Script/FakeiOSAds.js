// jq rules converted by Minis
let d;
try{d=JSON.parse($response.body)}catch(e){$done({})}
const R=[
 [new RegExp("^http:\\/\\/[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+){1,4}(:\\d+)?\\/api\\/v\\d\\/config\\/getConfigList\\.do"),d=>{d.data=(d.data||[]).filter(x=>!new RegExp("config\\\\.(ad|search|recommend)").test(x.keyName));}],
];
let hit=false;
for(const [re,fn] of R){if(re.test($request.url)){fn(d);hit=true;break}}
$done(hit?{body:JSON.stringify(d)}:{})