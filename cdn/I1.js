/* 自动生成，勿手改：源 ui/I1_检阅.html
   用法：面板侧先 window.LJ_DATA = {stage, material[], clips[], final[]}，再加载本文件 */
(function(){
var CSS = "\nhtml,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{position:relative;font-family:-apple-system,\"Segoe UI\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px;overflow:hidden}\n.ljP *{box-sizing:border-box;margin:0}\n.ljHd{padding:14px 16px 10px;display:flex;align-items:center;gap:8px;flex:none;border-bottom:1px solid rgba(255,255,255,.06)}\n.ljTt{font-size:15px;color:#E8EEF4}\n.ljHc{margin-left:auto;display:flex;gap:6px}\n.ljHb{font-size:12.5px;color:#9FADB9;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:7px;padding:4px 10px;cursor:pointer;font-family:inherit;transition:.15s}\n.ljHb:hover{color:#C9D4DE;border-color:rgba(255,255,255,.22)}\n.ljHb.gd{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;font-size:13px;color:#3EC6D8;border-color:rgba(62,198,216,.55);border-radius:8px}\n.ljHb.gd:hover{color:#3EC6D8;border-color:rgba(62,198,216,.8);background:rgba(62,198,216,.12)}\n.ljBd{display:flex;min-height:0;flex:1 1 auto}\n.ljLs{width:38%;border-right:1px solid rgba(255,255,255,.06);overflow-y:auto;padding:8px}\n.ljIt{padding:8px 10px;border-radius:8px;cursor:pointer;color:#9FADB9;font-size:12.5px;display:flex;gap:6px;align-items:center}\n.ljIt.on{background:rgba(62,198,216,.12);color:#3EC6D8}\n.ljIt:hover{background:rgba(255,255,255,.05)}\n.ljVw{flex:1;display:flex;flex-direction:column;min-width:0}\n.ljStg{flex:1;display:flex;align-items:center;justify-content:center;background:#0B1116;min-height:260px;position:relative;overflow:hidden}\n.ljStg img,.ljStg video{max-width:100%;max-height:520px;display:block}\n.ljFt{border-top:1px solid rgba(255,255,255,.06);padding:10px 12px 6px;flex:none;position:relative}\n.ljAct{display:flex;justify-content:flex-end;padding:8px 12px 10px;border-top:1px solid rgba(255,255,255,.06);flex:none}\n.ljBtn{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#C9D4DE;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:7px;padding:8px 15px;cursor:pointer;transition:.18s;font-family:inherit;flex:none;height:46px}\n.ljBtn.ljPri{color:#3EC6D8;border-color:rgba(62,198,216,.55)}\n.ljBtn.ljPri:hover{background:rgba(62,198,216,.1)}\n.ljTa{width:100%;background:#151B21;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#C9D4DE;font-size:13px;padding:10px 44px 10px 10px;resize:none;height:46px;font-family:inherit;line-height:1.4}\n.ljTa::placeholder{color:#5D6A76}\n.ljLk{position:absolute;right:20px;bottom:19px;width:28px;height:28px;border-radius:6px;border:none;background:transparent;color:#66707A;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.15s}\n.ljLk:hover{color:#8FA0AE}\n.ljLk.on{color:#D9B75B}\n.ljCf{position:absolute;right:12px;top:-34px;height:26px;padding:0 12px;border-radius:6px;border:1px solid rgba(217,183,91,.45);background:rgba(217,183,91,.12);color:#D9B75B;font-size:12px;cursor:pointer;font-family:inherit}\n.ljCf:hover{background:rgba(217,183,91,.2)}\n.ljLk:hover{background:rgba(217,183,91,.12)}\n.ljMo{position:absolute;inset:0;background:rgba(0,0,0,.85);display:none;align-items:center;justify-content:center;z-index:99}\n.ljMo.on{display:flex}\n.ljMo img,.ljMo video{max-width:92vw;max-height:88vh}\n.ljTst{position:absolute;left:50%;transform:translateX(-50%);bottom:74px;background:rgba(20,27,33,.95);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12px;padding:5px 12px;border-radius:16px;opacity:0;transition:.2s;pointer-events:none;white-space:nowrap}\n.ljTst.on{opacity:1}\n.ljOvl{position:absolute;inset:0;background:rgba(8,10,13,.78);display:none;align-items:center;justify-content:center;z-index:50}\n.ljOvl.on{display:flex}\n.ljMod{background:#171C22;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:86%;max-height:76%;display:flex;flex-direction:column;padding:14px 16px}\n.ljMoH{font-size:13.5px;font-weight:500;color:#E8EEF4;margin-bottom:9px}\n.ljMoB{overflow:auto;display:flex;flex-direction:column;gap:6px;font-size:12.5px;color:#9FADB9;line-height:1.6}\n.ljMoF{margin-top:10px;display:flex;justify-content:flex-end;gap:8px}\n.ljStg{position:relative}\n.ljBar{position:absolute;left:50%;transform:translateX(-50%);bottom:12px;display:none;gap:4px;flex-wrap:nowrap;background:rgba(12,17,22,.86);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:6px;z-index:6}\n.ljStg:hover .ljBar{display:flex}\n.ljTb{display:inline-flex;align-items:center;gap:4px;font-size:11.5px;color:#9FADB9;background:transparent;border:1px solid transparent;border-radius:7px;padding:5px 9px;cursor:pointer;font-family:inherit;transition:.15s;white-space:nowrap;flex:none}\n.ljTb:hover{color:#C9D4DE;background:rgba(255,255,255,.06)}\n.ljTb.on{color:#D9534F;border-color:rgba(217,83,79,.45);background:rgba(217,83,79,.12)}\n.ljCv{position:absolute;left:0;top:0;cursor:crosshair;display:none;z-index:5}\n.ljCv.on{display:block}\n.ljTx{position:absolute;color:#E03B3B;font-weight:700;font-family:sans-serif;cursor:move;user-select:none;z-index:6;text-shadow:0 0 3px rgba(0,0,0,.5)}\n.ljCtr{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:64px;height:64px;border-radius:50%;background:rgba(8,12,16,.55);display:flex;align-items:center;justify-content:center;color:#E8EEF4;opacity:0;transition:.2s;pointer-events:none;z-index:7}\n.ljCtr.on{opacity:1}\n.ljPg{position:absolute;left:0;right:0;bottom:0;height:4px;background:rgba(255,255,255,.12);cursor:pointer;z-index:6;display:none}\n.ljPg.on{display:block}\n.ljPgb{height:100%;width:0;background:#3EC6D8;pointer-events:none}\n.ljBar:empty{display:none!important}\n.ljZm{position:absolute;top:10px;right:10px;display:none;align-items:center;gap:5px;font-size:12px;color:#E8EEF4;background:rgba(8,12,16,.55);border:1px solid rgba(255,255,255,.18);border-radius:8px;padding:5px 9px;cursor:pointer;z-index:8;font-family:inherit}\n.ljZm.on{display:inline-flex}\n.ljZm:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljCtl{position:absolute;left:0;right:0;bottom:0;display:none;align-items:center;gap:8px;padding:8px 10px;background:linear-gradient(transparent,rgba(0,0,0,.72));z-index:8}\n.ljCtl.on{display:flex}\n.ljCb{width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;background:transparent;border:none;color:#E8EEF4;cursor:pointer;border-radius:5px;flex:none}\n.ljCb:hover{background:rgba(255,255,255,.14)}\n.ljTm{font-size:11.5px;color:#E8EEF4;font-variant-numeric:tabular-nums;flex:none;min-width:74px}\n.ljRg{flex:1;height:3px;accent-color:#3EC6D8;cursor:pointer}\n\n/* 滚动条：渲染期不出条，成形后细条（.ljBd 主滚动区 / .ljLs I1 列表 / .ljPop 弹层） */\n.ljBd,.ljLs,.ljPop{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar,.ljLs::-webkit-scrollbar,.ljPop::-webkit-scrollbar{width:0;height:0}\nhtml.ljReady .ljBd,html.ljReady .ljLs,html.ljReady .ljPop{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar,html.ljReady .ljLs::-webkit-scrollbar,html.ljReady .ljPop::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb,html.ljReady .ljLs::-webkit-scrollbar-thumb,html.ljReady .ljPop::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb:hover,html.ljReady .ljLs::-webkit-scrollbar-thumb:hover,html.ljReady .ljPop::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.26)}\nhtml.ljReady .ljBd::-webkit-scrollbar-track,html.ljReady .ljLs::-webkit-scrollbar-track,html.ljReady .ljPop::-webkit-scrollbar-track{background:transparent}\n";
var HTML = "<div class=\"ljP\">\n<div class=\"ljHd\"><div class=\"ljTt\" id=\"tt\"></div><div class=\"ljHc\"><button class=\"ljHb\" onclick=\"CANCEL()\" title=\"回上一级（不提交修改）\">上一级</button><button class=\"ljHb gd\" onclick=\"CONFIRM()\" title=\"确认检阅结果 · 提交回传\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"><path d=\"M4 12l5 5L20 6\"/></svg>确认</button></div></div>\n<div class=\"ljBd\"><div class=\"ljLs\" id=\"ls\"></div>\n<div class=\"ljVw\"><div class=\"ljStg\" id=\"stg\"></div>\n<div class=\"ljFt\"><textarea class=\"ljTa\" id=\"ta\" placeholder=\"输入修改批注\"></textarea><button class=\"ljLk\" title=\"引用并回传\" onclick=\"SEND()\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"10\" width=\"16\" height=\"10\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/></svg></button></div>\n</div></div>\n<div class=\"ljTst\" id=\"tst\"></div>\n<div class=\"ljOvl\" id=\"ovl\"><div class=\"ljMod\"><div class=\"ljMoB\" id=\"ovb\"></div><div class=\"ljMoF\"><button class=\"ljBtn\" onclick=\"CLOSE()\" title=\"收起预览层（返回面板继续改）\">取消</button><button class=\"ljBtn ljPri\" onclick=\"DOCONFIRM()\" title=\"把修改项提交给 AI\">确认提交</button></div></div></div>\n<div class=\"ljMo\" id=\"mo\" onclick=\"CLOSEMO()\"></div>\n</div>";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;

var BARHTML="<div class=\"ljBar\" id=\"bar\"><button class=\"ljTb\" data-t=\"pen\" onclick=\"TOOL('pen')\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 20h4L19 9l-4-4L4 16v4z\"/></svg>标注</button><button class=\"ljTb\" data-t=\"box\" onclick=\"TOOL('box')\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"4\" y=\"5\" width=\"16\" height=\"14\" rx=\"1\"/></svg>框选</button><button class=\"ljTb\" data-t=\"mute\" onclick=\"VMUTE()\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 5L6 9H3v6h3l5 4V5z\"/><path d=\"M16 9a4 4 0 010 6\"/></svg>静音</button><button class=\"ljTb\" data-t=\"fs\" onclick=\"VFS()\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5\"/></svg>全屏</button><button class=\"ljTb\" data-t=\"clear\" onclick=\"CLEARX()\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13\"/></svg>清除</button><button class=\"ljTb\" data-t=\"zoom\" onclick=\"ZOOMCUR()\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5\"/></svg>放大</button></div><canvas class=\"ljCv\" id=\"cv\"></canvas><div class=\"ljCtl\" id=\"ctl\"><button class=\"ljCb\" id=\"cbPlay\" onclick=\"TPLAY()\"><svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"currentColor\"><path d=\"M8 5v14l11-7z\"/></svg></button><span class=\"ljTm\" id=\"cTime\">0:00 / 0:00</span><input class=\"ljRg\" id=\"cRg\" type=\"range\" min=\"0\" max=\"1000\" value=\"0\" oninput=\"TSEEK(this.value)\"><button class=\"ljCb\" id=\"cbMute\" onclick=\"TMUTE()\"><svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M11 5L6 9H3v6h3l5 4V5z\"/><path d=\"M16 9a4 4 0 010 6\"/></svg></button><button class=\"ljCb\" onclick=\"TFS()\"><svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5\"/></svg></button></div><button class=\"ljZm\" id=\"zm\" onclick=\"ZOOMCUR()\"><svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M4 9V4h5M20 15v5h-5M15 4h5v5M9 20H4v-5\"/></svg>放大</button><div class=\"ljPg\" id=\"pg\"><div class=\"ljPgb\" id=\"pgb\"></div></div><div class=\"ljCtr\" id=\"ctr\"></div>";
var MATERIAL=(window.LJ_DATA||{}).material||[];
var CLIPS=(window.LJ_DATA||{}).clips||[];
var FINALS=(window.LJ_DATA||{}).final||[];

/* ===== 数据区 ①：环节（三态切换只改下面 STAGE 一行） ===== */

/* ===== 环节（切三态只改这一行） ===== */
var PANEL='I1';
var STAGE=(window.LJ_DATA||{}).stage||'成品检阅';            /* 素材引用检阅 ／ 镜头片段检阅 ／ 成品检阅 */
var SETS={
 '素材引用检阅':{t:'素材检阅（引用）',items:MATERIAL},
 '镜头片段检阅':{t:'素材检阅（片段）',items:CLIPS},
 '成品检阅':{t:'成品检阅',items:FINALS}
};
var TITLE=SETS[STAGE].t, ITEMS=SETS[STAGE].items;
var TAG=PANEL+'·'+STAGE;
document.getElementById('tt').textContent=TITLE;
var cur=0,tool=null,drawing=false,sx=0,sy=0;
function curIt(){return ITEMS[cur];}
function modShow(x){var a=x.annos||{};return !!(x.mod&&(x.baked||(a.strokes&&a.strokes.length)||(a.texts&&a.texts.length)));}
function ensure(it){if(!it.annos)it.annos={strokes:[],texts:[]};return it.annos;}
function isVid(){return /\.mp4$/i.test(curIt().src||'');}
function isAud(){return /\.(mp3|wav)$/i.test(curIt().src||'');}
function fmt(t){t=t||0;var m=Math.floor(t/60),s=Math.floor(t%60);return m+':'+(s<10?'0':'')+s;}
function media(it){var e=(it.src||'').toLowerCase();
if(e.slice(-4)==='.mp3'||e.slice(-4)==='.wav')return '<audio src="'+it.src+'" controls style="width:86%"></audio>';
if(e.slice(-4)==='.mp4')return '<video src="'+it.src+'" muted loop playsinline preload="metadata"></video>';
return '<img src="'+it.src+'">';}
function r(){var ls=document.getElementById('ls');
ls.innerHTML=ITEMS.map(function(x,i){return '<div class="ljIt'+(i===cur?' on':'')+'" onclick="PICK('+i+')">'+x.n+(modShow(x)?'（修改）':'')+'</div>';}).join('');
var it=curIt(),stg=document.getElementById('stg');
stg.innerHTML=it.src?media(it):'<div style="color:#5D6A76;font-size:12.5px">暂无素材</div>';
stg.insertAdjacentHTML('beforeend',BARHTML);
var b=document.querySelector('.ljLk');var has=(it.lk||ensure(it).strokes.length||ensure(it).texts.length||it.dirty||(it.note||'').length);
if(b){b.classList.toggle('on',!!it.lk);b.style.color=it.lk?'#D9B75B':(has?'#C9D4DE':'#66707A');b.style.pointerEvents='auto';}
var _ta=document.getElementById('ta');_ta.value=it.note||'';_ta.readOnly=!!it.lk;_ta.style.opacity=it.lk?.55:1;_ta.style.pointerEvents=it.lk?'none':'auto';_ta.placeholder=it.lk?'已锁定 · 点锁解锁':'输入修改批注';
_ta.oninput=function(){var it2=curIt();var h=!!(_ta.value.trim())||ensure(it2).strokes.length>0||ensure(it2).texts.length>0||it2.dirty;
var b2=document.querySelector('.ljLk');if(b2)b2.style.color=it2.lk?'#D9B75B':(h?'#C9D4DE':'#66707A');};
drawAnnos();bindCanvas();bindVideo();applyTools();
var _v=document.querySelector('#stg video');if(_v)bindCtl(_v);}
function PICK(i){cur=i;r();}
function applyTools(){var v=isVid()||isAud();var bar=document.getElementById('bar');if(bar)bar.style.display=v?'none':'';
var zm=document.getElementById('zm');if(zm)zm.style.display=isVid()?'inline-flex':'none';
var cl=document.getElementById('ctl');if(cl)cl.classList.toggle('on',isVid());
var ctr=document.getElementById('ctr');if(ctr){ctr.style.display='none';ctr.innerHTML='';}
document.querySelectorAll('.ljTb').forEach(function(b){var t=b.dataset.t;
if(v){b.style.display='none';}else{b.style.display=(t==='pen'||t==='text'||t==='box'||t==='clear')?'inline-flex':'none';}});}
function drawAnnos(){var it=curIt(),cv=document.getElementById('cv'),im=document.querySelector('#stg img');if(!cv||!im){if(cv)cv.style.display='none';return;}
var rr=im.getBoundingClientRect(),g=document.getElementById('stg').getBoundingClientRect();
cv.width=rr.width;cv.height=rr.height;cv.style.left=(rr.left-g.left)+'px';cv.style.top=(rr.top-g.top)+'px';
var x=cv.getContext('2d');x.clearRect(0,0,cv.width,cv.height);x.strokeStyle='#E03B3B';x.lineWidth=3;x.lineCap='round';
ensure(it).strokes.forEach(function(s){x.beginPath();s.p.forEach(function(p,i){i?x.lineTo(p[0],p[1]):x.moveTo(p[0],p[1]);});x.stroke();});
ensure(it).texts.forEach(function(t){x.fillStyle='#E03B3B';x.font='bold '+t.size+'px sans-serif';x.save();x.translate(t.x,t.y);x.rotate(t.rot||0);x.fillText(t.txt,0,0);x.restore();});
var show=(!isVid()&&!isAud())&&((tool&&!it.lk)||(it.lk&&!it.baked));cv.style.display=show?'block':'none';cv.style.pointerEvents=it.lk?'none':'auto';renderTx();}
function renderTx(){var stg=document.getElementById('stg'),im=document.querySelector('#stg img');if(!stg||!im)return;
stg.querySelectorAll('.ljTx').forEach(function(e){e.onblur=null;e.onmousedown=null;e.parentNode&&e.parentNode.removeChild(e);});
var rr=im.getBoundingClientRect(),g=stg.getBoundingClientRect();
ensure(curIt()).texts.forEach(function(t,i){var d=document.createElement('div');d.className='ljTx';d.dataset.i=i;
if(t.edit)d.contentEditable='true';d.textContent=t.txt;d.style.left=(rr.left-g.left+t.x)+'px';d.style.top=(rr.top-g.top+t.y)+'px';d.style.fontSize=t.size+'px';d.style.transform='rotate('+(t.rot||0)+'rad)';
d.onmousedown=function(ev){ev.preventDefault();ev.stopPropagation();var ox=ev.clientX,oy=ev.clientY,bx=t.x,by=t.y;
function mm(e2){t.x=bx+(e2.clientX-ox);t.y=by+(e2.clientY-oy);d.style.left=(rr.left-g.left+t.x)+'px';d.style.top=(rr.top-g.top+t.y)+'px';curIt().dirty=true;}
function mu(){document.removeEventListener('mousemove',mm);document.removeEventListener('mouseup',mu);r();}
document.addEventListener('mousemove',mm);document.addEventListener('mouseup',mu);};
d.onwheel=function(ev){ev.preventDefault();if(ev.shiftKey){t.rot=(t.rot||0)+(ev.deltaY>0?0.15:-0.15);}else{t.size=Math.max(12,Math.min(120,t.size+(ev.deltaY>0?-2:2)));}
d.style.fontSize=t.size+'px';d.style.transform='rotate('+(t.rot||0)+'rad)';curIt().dirty=true;};
if(t.edit){d.onblur=function(){if(!document.body.contains(d))return;var _d=d;setTimeout(function(){t.txt=(_d.textContent||'').trim();t.edit=false;curIt().dirty=!!t.txt;if(!t.txt){var a=ensure(curIt()).texts;a.splice(a.indexOf(t),1);}if(document.body.contains(_d))r();},0);};d.onkeydown=function(ev){if(ev.key==='Enter'){ev.preventDefault();d.blur();}};}
if(curIt().lk)d.style.pointerEvents='none';stg.appendChild(d);
if(t.edit){setTimeout(function(){try{d.focus();var rg=document.createRange();rg.selectNodeContents(d);rg.collapse(false);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(rg);}catch(e){}},0);}});}
function TOOL(t){if(isVid()||isAud()||curIt().lk)return;tool=(tool===t?null:t);
document.querySelectorAll('.ljTb').forEach(function(b){b.classList.toggle('on',b.dataset.t===tool);});
drawAnnos();}
function tl(e){var cv=document.getElementById('cv'),r=cv.getBoundingClientRect();return [e.clientX-r.left,e.clientY-r.top];}
function bindCanvas(){var cv=document.getElementById('cv');if(!cv)return;
cv.onmousedown=function(e){if(!tool)return;drawing=true;curIt().dirty=true;var p=tl(e);sx=p[0];sy=p[1];if(tool==='pen'){ensure(curIt()).strokes.push({p:[[p[0],p[1]]]});drawAnnos();}};
cv.onmousemove=function(e){if(!drawing)return;var p=tl(e),it=curIt();
if(tool==='pen'){var s=ensure(it).strokes[ensure(it).strokes.length-1];s.p.push([p[0],p[1]]);drawAnnos();}
else if(tool==='box'){drawAnnos();var x=cv.getContext('2d');x.strokeRect(sx,sy,p[0]-sx,p[1]-sy);}};
cv.onmouseup=function(e){if(!drawing)return;drawing=false;var p=tl(e);
if(tool==='box'){ensure(curIt()).strokes.push({p:[[sx,sy],[p[0],sy],[p[0],p[1]],[sx,p[1]],[sx,sy]]});drawAnnos();}
if(tool==='text'){ensure(curIt()).texts.push({txt:'',x:sx,y:sy,size:22,rot:0,edit:true});drawAnnos();}
curIt().dirty=true;drawAnnos();};}
function bindVideo(){var v=document.querySelector('#stg video');if(!v)return;
v.muted=(curIt().muted===undefined)?true:curIt().muted;
v.ondblclick=function(ev){ev.preventDefault();ZOOMV(v);};}
function bindCtl(v){var c=document.getElementById('ctl');if(!c)return;
function upd(){var rg=document.getElementById('cRg'),tm=document.getElementById('cTime');
if(v.duration)rg.value=Math.round(v.currentTime/v.duration*1000);
tm.textContent=fmt(v.currentTime)+' / '+fmt(v.duration);
document.getElementById('cbPlay').innerHTML=v.paused?'<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>':'<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><rect x="7" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>';
document.getElementById('cbMute').style.opacity=v.muted?.55:1;}
v.ontimeupdate=upd;v.onloadedmetadata=upd;upd();
window.TPLAY=function(){v.paused?v.play():v.pause();setTimeout(upd,60);};
window.TMUTE=function(){v.muted=!v.muted;upd();};
window.TFS=function(){if(v.requestFullscreen)v.requestFullscreen();};
window.TSEEK=function(val){if(v.duration)v.currentTime=val/1000*v.duration;upd();};}
function ZOOMV(v){var m=document.getElementById('mo');window.__resume=v;
v.pause();m.innerHTML='';m.appendChild(v);v.controls=true;v.style.maxWidth='92vw';v.style.maxHeight='88vh';v.style.width='auto';
m.classList.add('on');v.play().catch(function(){});}
function CLOSEMO(){var m=document.getElementById('mo');var v=m.querySelector('video');
if(v){v.pause();v.controls=false;v.style.maxWidth='';v.style.maxHeight='';v.style.width='';
var stg=document.getElementById('stg');stg.insertBefore(v,stg.firstChild);}
m.innerHTML='';m.classList.remove('on');
if(v)v.play().catch(function(){});window.__resume=null;}
function ZOOM(src){var m=document.getElementById('mo');var e=(src||'').toLowerCase();
m.innerHTML=(e.slice(-4)==='.mp4')?('<video src="'+src+'" controls autoplay muted loop playsinline></video>'):('<img src="'+src+'">');m.classList.add('on');}
function ZOOMCUR(){if(isVid()){ZOOMV(document.querySelector('#stg video'));}else{ZOOM(curIt().src);}}
function toast(t){var e=document.getElementById('tst');if(!e)return;e.textContent=t;e.classList.add('on');clearTimeout(e._h);e._h=setTimeout(function(){e.classList.remove('on');},1800);}
function curDirty(){var it=curIt(),a=ensure(it);return !!(a.strokes.length||a.texts.length||it.dirty);}
function CLEARX(){var it=curIt();if(it.lk){toast('已锁定 · 先解锁');return;}ensure(it).strokes=[];ensure(it).texts=[];it.dirty=false;it.mod=false;it.baked=false;if(it.orig){it.src=it.orig;delete it.orig;}tool=null;r();toast('已清除标注与修改');}
function SEND(){var it=curIt();var note=(document.getElementById('ta').value||'').trim();
if(!it.lk&&!note&&!curDirty()){toast('先输入批注或改图');return;}
it.lk=!it.lk;var lkbtn=document.querySelector('.ljLk');if(lkbtn){lkbtn.classList.toggle('on',it.lk);lkbtn.style.color=it.lk?'#D9B75B':'#C9D4DE';}
if(it.lk){it.note=note;if(curDirty())it.mod=true;
var im=document.querySelector('#stg img'),cv=document.getElementById('cv');
if(im&&cv&&curDirty()){it.orig=it.orig||it.src;try{var c=document.createElement('canvas');c.width=im.naturalWidth||cv.width;c.height=im.naturalHeight||cv.height;var x=c.getContext('2d');x.drawImage(im,0,0,c.width,c.height);
var k=c.width/cv.width;x.strokeStyle='#E03B3B';x.lineWidth=3*k;x.lineCap='round';ensure(it).strokes.forEach(function(s){x.beginPath();s.p.forEach(function(p,i){i?x.lineTo(p[0]*k,p[1]*k):x.moveTo(p[0]*k,p[1]*k);});x.stroke();});
ensure(it).texts.forEach(function(t){x.save();x.fillStyle='#E03B3B';x.font='bold '+(t.size*k)+'px sans-serif';x.translate(t.x*k,t.y*k);x.rotate(t.rot||0);x.fillText(t.txt,0,0);x.restore();});
it.src=c.toDataURL('image/png');it.dirty=false;it.baked=true;}catch(err){it.baked=false;toast('浏览器限制：标注保留在画布，回传仍记为修改');}}
toast('已锁定'+(note?' · '+note:''));
if(window.sendPrompt)sendPrompt('【'+TAG+'】'+it.n+(modShow(it)?'（修改）':'')+(note?'\n批注：'+note:''));
}else{if(it.orig)it.src=it.orig;it.baked=false;toast('已解锁 · 可继续编辑');}
r();}
function CONFIRM(){var out=ITEMS.filter(function(x){return x.lk;}).map(function(x){return x.n+(modShow(x)?'（修改）':'')+(x.note?'：'+x.note:'');});
var b=document.getElementById('ovb');b.innerHTML=(out.length?out:['全部通过（无修改）']).map(function(l){return '<div>▪ '+l+'</div>';}).join('');
document.getElementById('ovl').classList.add('on');}
function DOCONFIRM(){var out=ITEMS.filter(function(x){return x.lk;}).map(function(x){return x.n+(modShow(x)?'（修改）':'')+(x.note?'：'+x.note:'');});
document.getElementById('ovl').classList.remove('on');toast('已确认 · '+(out.length?out.length+' 项修改':'全部通过'));
if(window.sendPrompt)sendPrompt('【'+TAG+'·修改回传】\n'+(out.length?out.join('\n'):'全部通过（无修改）'));}
function CLOSE(){document.getElementById('ovl').classList.remove('on');}
function CANCEL(){toast('已返回上一级');if(window.sendPrompt)sendPrompt('【'+TAG+'】上一级');}
r();var _v=document.querySelector('#stg video');if(_v)bindCtl(_v);

/* 成形标记：load 后两帧置 ljReady —— 渲染中不挂滚动条 */
(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}
if(document.readyState==='complete')r();else window.addEventListener('load',r);})();

})();
