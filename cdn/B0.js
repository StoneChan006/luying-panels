/* 自动生成，勿手改：源 ui/B0_项目系列.html
   用法：面板侧 window.LJ_DATA = {...} 后加载本文件 */
(function(){
var CSS = "html,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{font-family:-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;position:relative;overflow:hidden;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px}\n.ljP *{box-sizing:border-box;margin:0}\n.ljSr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ljHd{padding:48px 16px 10px;display:flex;align-items:center;flex:none}\n.ljTt{font-size:15px;font-weight:500;color:#E8EEF4}\n.ljBd{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px 28px;background:#0F1317}\n.ljCand{border-bottom:1px solid rgba(255,255,255,.05);border-left:2px solid transparent;padding:11px 4px 11px 8px;cursor:pointer;transition:.15s;border-radius:4px;user-select:none;-webkit-user-select:none}\n.ljCand:hover{background:rgba(62,198,216,.06)}\n.ljCand:hover .ljNm{color:#3EC6D8}\n.ljCand.on{background:rgba(62,198,216,.07);border-left-color:#3EC6D8}\n.ljC1{display:flex;align-items:center;gap:6px;flex-wrap:nowrap;justify-content:flex-start;position:relative;padding-right:22px}\n.ljNm{font-size:13.5px;font-weight:500;color:#E8EEF4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:none;max-width:72%;order:1}\n.ljMt{font-size:11.5px;color:#6B7885;flex:none;order:2}\n.ljEd{position:absolute;right:0;top:50%;transform:translateY(-50%);display:inline-flex;align-items:center;cursor:pointer;opacity:.75;padding:2px 4px;border-radius:5px}\n.ljEd:hover{opacity:1}\n.ljLast{display:flex;align-items:center;justify-content:space-between;gap:12px;border-top:1px dashed rgba(255,255,255,.09);margin-top:4px;padding:13px 4px 8px 8px}\n.ljLast .ljNew{border-top:none;margin-top:0;padding:0}\n.ljNew{display:flex;align-items:center;gap:7px;color:#3EC6D8;font-size:13px;cursor:pointer;user-select:none;-webkit-user-select:none}\n.ljNew:hover{color:#D9B75B}\n.ljFree{font-size:12.5px;color:#3EC6D8;cursor:pointer;white-space:nowrap;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljFree:hover{color:#D9B75B}\n.ljTst{position:absolute;left:50%;bottom:24px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12.5px;padding:7px 16px;border-radius:8px;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;z-index:60}\n.ljTst.on{opacity:1}\n/* 滚动条：渲染期不出条，成形后细条 */\n.ljBd{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar{width:0;height:0}\nhtml.ljReady .ljBd{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.26)}\nhtml.ljReady .ljBd::-webkit-scrollbar-track{background:transparent}\n";
var HTML = "<meta charset=\"utf-8\">\n<!-- ============================================================\n  【B0 · 项目系列】选择页 —— 实现唯一源\n  用法：只替换下方「数据区」（DATA 对象）→ 输出完整代码给 show_widget\n  ❌ 组件区一字不改（改交互 = 修改本文件一处，全库生效）\n  一页一态：只渲系列列表。点行＝直接回传选用；铅笔＝回传改档；\n            「新建系列…」＝回传建档；两者由 AI 另渲 E0 系列卡（两页分离，免拖慢）\n  回传：一律 sendPrompt(...)\n============================================================ -->\n<div class=\"ljP\" id=\"ljB0\">\n\n<h2 class=\"ljSr\">项目系列面板：选择现有系列，或新建</h2>\n<div class=\"ljHd\"><div class=\"ljTt\">项目系列</div></div>\n<div class=\"ljBd\"></div>\n<div class=\"ljTst\"></div>\n\n</div>";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;
/* ==================== 数据区（每次渲染只改这里） ==================== */
var DATA = window.LJ_DATA || {};
(function(){
var me=document.currentScript&&document.currentScript.closest?document.currentScript.closest('.ljP'):null;
var ROOT=me||document.getElementById('ljB0');
if(!ROOT)return;
var bd=ROOT.querySelector('.ljBd'),tst=ROOT.querySelector('.ljTst');
ROOT.querySelector('.ljTt').textContent=DATA.title;
var PEN='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#8FA0AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16v4z"/></svg>';
var PLUS='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>';
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
var ST={sent:false,sel:-1};

function toast(t){tst.textContent=t;tst.classList.add('on');clearTimeout(tst._h);tst._h=setTimeout(function(){tst.classList.remove('on');},2200);}
function send(t){if(typeof sendPrompt!=='function'){toast('预览模式 · 不回传');return false;}sendPrompt(t);return true;}

function bodyHTML(){
var h='';
(DATA.series||[]).forEach(function(s,i){
 var ed=s.quick?'':'<span class="ljEd" onclick="event.stopPropagation();LJ.edit('+i+')" title="修改档案">'+PEN+'</span>';
 h+='<div class="ljCand'+(ST.sel===i?' on':'')+'" onclick="LJ.pick('+i+')"><div class="ljC1"><span class="ljNm">'+esc(s.name)+'</span><span class="ljMt">'+(s.count||0)+' 期</span>'+ed+'</div></div>';
});
h+='<div class="ljLast"><div class="ljNew" onclick="LJ.add()">'+PLUS+'新建系列…</div><span class="ljFree" onclick="LJ.free()" title="不选系列 · 不建档 · 直接开始运行">不建档，开玩</span></div>';
return h;}
function render(){bd.innerHTML=bodyHTML();}

function pick(i){if(ST.sent)return;var s=DATA.series[i];if(!s)return;
 ST.sel=i;render();
 if(!send('【项目系列·选用】\n▪ 系列本\n系列名='+s.name+'\n写回=否（沿用系列本原文，不改档案）\n执行分支=读系列本「制作方式」（已声明则跳过 A2 · 未声明则 A2 弹门）\n下一步=创作模式选择（A1）'))return;
 ST.sent=true;toast('已选用 '+s.name+' · 进入下一步');}
function edit(i){if(ST.sent)return;var s=DATA.series[i];if(!s)return;
 if(!send('【B0·改档】\n系列名='+s.name+'\n下一步=E0 系列卡（改档 · 按系列本「一、系列档案」预填；提交回传【系列·修改档案】）'))return;
 ST.sent=true;toast('改档 · 正在打开系列卡');}
function add(){if(ST.sent)return;
 if(!send('【B0·建档】\n新建系列 · 空档\n下一步=E0 系列卡（建档 · 提交回传【项目系列·建档】）'))return;
 ST.sent=true;toast('建档 · 正在打开系列卡');}
function free(){if(ST.sent)return;
 if(!send('【B0·开玩】\n不选系列 · 不建档 · 直接开始运行（跳过系列选择与建档）\n执行分支=未定（A2 门必弹）'))return;
 ST.sent=true;toast('已开玩 · 未选系列');}

window.LJ={pick:pick,edit:edit,add:add,free:free};
render();
ROOT.addEventListener('wheel',function(e){if(e.target.closest('.ljBd')||e.target.closest('.ljPop'))return;e.preventDefault();},{passive:false});
})();
/* 成形标记：load 后两帧置 ljReady —— 渲染中不挂滚动条 */
(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}
if(document.readyState==='complete')r();else window.addEventListener('load',r);})();
})();
