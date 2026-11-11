/* 自动生成，勿手改：源 ui/B1_话题选择.html
   用法：面板侧 window.LJ_DATA = {...} 后加载本文件 */
(function(){
var CSS = "\nhtml,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{font-family:-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;position:relative;overflow:hidden;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px}\n.ljP *{box-sizing:border-box;margin:0}\n.ljSr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ljHd{padding:48px 16px 10px;display:flex;align-items:center;flex:none}\n.ljTt{font-size:15px;font-weight:500;color:#E8EEF4}\n.ljHc{margin-left:auto;display:flex;gap:6px}\n.ljHb{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:7px;padding:4px 11px;cursor:pointer;transition:.15s;font-family:inherit}\n.ljHb:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljBd{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px}\n.ljCand{border-bottom:1px solid rgba(255,255,255,.05);border-left:2px solid transparent;padding:11px 4px 11px 8px;cursor:pointer;transition:.15s;border-radius:4px;user-select:none;-webkit-user-select:none}\n.ljCand:hover{background:rgba(255,255,255,.03)}\n.ljCand.on{background:rgba(62,198,216,.07);border-left-color:#3EC6D8}\n.ljC1{display:flex;align-items:center;gap:7px;flex-wrap:wrap}\n.ljBx{width:13px;height:13px;border:1.5px solid #66707A;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex:none}\n.ljCand.on .ljBx{background:#3EC6D8;border-color:#3EC6D8}\n.ljCand.on .ljBx:after{content:\"\";width:7px;height:4px;border-left:1.8px solid #0F1317;border-bottom:1.8px solid #0F1317;transform:rotate(-45deg) translate(0,-1px)}\n.ljNm{font-size:13.5px;font-weight:500;color:#E8EEF4}\n.ljSep{color:#66707A;font-size:12px}\n.ljMt{font-size:12px;color:#8A97A3}\n.ljC2{font-size:12.5px;color:#9FADB9;line-height:1.6;margin-top:4px;padding-left:21px}\n.ljC3{font-size:12px;color:#8A97A3;margin-top:3px;padding-left:21px}\n.ljStg{color:#D9B75B}\n.ljFt{display:flex;justify-content:flex-end;gap:8px;padding:11px 16px;border-top:1px solid rgba(255,255,255,.06);flex:none}\n.ljInp{flex:1;display:flex;align-items:center;background:#12161B;border:1px solid rgba(62,198,216,.25);border-radius:8px;padding:0 7px 0 11px}\n.ljInp input{flex:1;background:transparent;border:none;color:#E8EEF4;font-size:13px;padding:10px 6px 10px 0;outline:none;font-family:inherit}\n.ljInp input::placeholder{color:#66707A}\n.ljSend{display:inline-flex;cursor:pointer;padding:4px;border-radius:5px;color:#66707A;flex:none;transition:color .15s}\n.ljSend:hover{background:rgba(255,255,255,.06)}\n.ljSend.has{color:#3EC6D8}\n.ljTst{position:absolute;left:50%;bottom:72px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12.5px;padding:7px 16px;border-radius:8px;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;z-index:60}\n.ljTst.on{opacity:1}\n\n/* 滚动条：渲染期不出条，成形后细条（.ljBd 主滚动区 / .ljLs I1 列表 / .ljPop 弹层） */\n.ljBd,.ljLs,.ljPop{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar,.ljLs::-webkit-scrollbar,.ljPop::-webkit-scrollbar{width:0;height:0}\nhtml.ljReady .ljBd,html.ljReady .ljLs,html.ljReady .ljPop{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar,html.ljReady .ljLs::-webkit-scrollbar,html.ljReady .ljPop::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb,html.ljReady .ljLs::-webkit-scrollbar-thumb,html.ljReady .ljPop::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb:hover,html.ljReady .ljLs::-webkit-scrollbar-thumb:hover,html.ljReady .ljPop::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.26)}\nhtml.ljReady .ljBd::-webkit-scrollbar-track,html.ljReady .ljLs::-webkit-scrollbar-track,html.ljReady .ljPop::-webkit-scrollbar-track{background:transparent}\n";
var HTML = "<meta charset=\"utf-8\">\n<!-- ============================================================\n  【B1 · 话题选择】标准组件模板 —— 实现唯一源（UI 规范「B1」的落地实现）\n  使用方式：只替换下方「数据区」（DATA 对象）→ 输出完整代码给 show_widget\n  ❌ 组件代码区一字不改（改交互 = 修改本文件一处，全库生效）\n  🚫 禁止自绘／简化／合并控件：🔒锁定 ／ 自定义 ／ 信息框 ／ 页签 ／ 开关 ／ 按钮 缺任一＝违规 → 重读本文件重渲\n  交互：候选点选＝直接回传（本地高亮）；右上角「换一批」；底部关键词输入框（框内右侧内嵌发送键）\n============================================================ -->\n<div class=\"ljP\">\n\n<h2 class=\"ljSr\">话题选择面板：候选点选与关键词搜寻</h2>\n<div class=\"ljHd\">\n<div class=\"ljTt\">话题选择</div>\n<div class=\"ljHc\">\n<button class=\"ljHb\" onclick=\"LJ.more()\" title=\"换一批 · 重新采样话题候选\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 11a8 8 0 0 1 13.66-5.66\"/><path d=\"M20 13a8 8 0 0 1-13.66 5.66\"/><path d=\"M17 2v4h-4\"/><path d=\"M7 22v-4h4\"/></svg>换一批</button>\n</div>\n</div>\n<div class=\"ljBd\"></div>\n<div class=\"ljFt\"><div class=\"ljInp\"><input id=\"b1kw\" placeholder=\"可填写话题关键词\" oninput=\"LJ.kw(this.value)\" onkeydown=\"LJ.ek(event)\"><span class=\"ljSend\" id=\"b1sk\" onclick=\"LJ.find()\" title=\"提交关键词 · 精准搜寻相关话题\"><svg viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 2L11 13\"/><path d=\"M22 2l-7 20-4-9-9-4 20-7z\"/></svg></span></div></div>\n<div class=\"ljTst\"></div>\n\n</div>";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;
/* ==================== 数据区（每次渲染只改这里） ==================== */
var DATA = window.LJ_DATA || {};
(function(){
var me=document.currentScript&&document.currentScript.closest?document.currentScript.closest('.ljP'):null;
var ROOT=me||Array.prototype.slice.call(document.querySelectorAll('.ljP')).pop();
if(!ROOT)return;
var bd=ROOT.querySelector('.ljBd'),tst=ROOT.querySelector('.ljTst');
ROOT.querySelector('.ljTt').textContent=DATA.title;
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
var S={sent:false,sel:-1,kw:''};

function candHTML(c,i){
var h='<div class="ljCand'+(S.sel===i?' on':'')+'" onclick="LJ.pick('+i+')">';
h+='<div class="ljC1"><span class="ljBx"></span><span class="ljNm">#'+(i+1)+' '+esc(c.name)+'</span><span class="ljSep">｜</span><span class="ljMt">赛道：'+esc(c.track)+' · 热度：'+esc(c.heat)+'★ · 时效窗口：'+esc(c.tw)+'</span></div>';
h+='<div class="ljC2">简述：'+esc(c.desc)+'</div>';
h+='<div class="ljC3">推荐度：<span class="ljStg">'+esc(c.rec)+'</span> ｜ 流量概率：'+esc(c.prob)+' ｜ 理由：'+esc(c.reason)+'</div>';
return h+'</div>';}
function renderBody(){var h='';DATA.candidates.forEach(function(c,i){h+=candHTML(c,i);});bd.innerHTML=h;}
function updSend(){var sk=ROOT.querySelector('#b1sk');if(!sk)return;if(S.kw)sk.classList.add('has');else sk.classList.remove('has');}
function kw(v){S.kw=v;updSend();}
function ek(e){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();find();}}
function go(text){if(S.sent)return false;if(typeof sendPrompt!=='function'){toast('当前环境不支持发送 · 交互仅本地');return false;}S.sent=true;sendPrompt(text);return true;}
function pick(i){var c=DATA.candidates[i];if(!c||S.sent)return;S.sel=i;renderBody();if(typeof sendPrompt!=='function'){toast('预览模式 · 已本地选中（回传需真实环境）');return;}
if(go('【话题选择·选定】\n#'+(i+1)+' '+c.name+' ｜ 赛道：'+c.track+' · 热度：'+c.heat)){toast('已选定 · 提交 AI');}}
function more(){if(go('【话题选择·换一批】重新采样话题候选')){toast('已请求换一批');}}
function find(){var v=(S.kw||'').trim();if(!v){toast('请先填写关键词');return;}
if(go('【话题选择·关键词搜寻】'+v)){toast('已提交关键词');}}
function toast(t){tst.textContent=t;tst.classList.add('on');clearTimeout(tst._h);tst._h=setTimeout(function(){tst.classList.remove('on');},2200);}
renderBody();
ROOT.addEventListener('wheel',function(e){if(e.target.closest('.ljBd')||e.target.closest('.ljPop'))return;e.preventDefault();},{passive:false});
window.LJ={pick:pick,more:more,find:find,kw:kw,ek:ek};
})();

/* 成形标记：load 后两帧置 ljReady —— 渲染中不挂滚动条 */
(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}
if(document.readyState==='complete')r();else window.addEventListener('load',r);})();
})();
