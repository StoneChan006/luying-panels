/* 自动生成，勿手改：源 ui/E2_服装卡.html
   用法：面板侧 window.LJ_DATA = {...} 后加载本文件 */
(function(){
var CSS = "\nhtml,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{font-family:-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;position:relative;overflow:hidden;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px}\n.ljP *{box-sizing:border-box;margin:0}\n.ljSr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ljHd{padding:48px 16px 10px;display:flex;align-items:center;flex:none}\n.ljTt{font-size:15px;font-weight:500;color:#E8EEF4}\n.ljHc{margin-left:auto;display:flex;gap:6px}\n.ljHb{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:7px;padding:4px 11px;cursor:pointer;transition:.15s;font-family:inherit}\n.ljHb:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljBd{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px 28px;background:#0F1317}\n/* 套装卡＝E1 角色卡 */\n.ljItem{background:#171C22;border:1px solid rgba(255,255,255,.06);border-radius:9px;padding:12px 14px 13px;margin-bottom:10px}\n.ljItem:last-child{margin-bottom:0}\n.ljNm{font-size:13px;color:#E8EEF4;white-space:nowrap}\n/* 卡右上角图标组（E1 同款：整卡随机 ⟳ ／ 删减 －） */\n.ljCorner{margin-left:auto;display:flex;align-items:center;gap:1px;flex:none;align-self:center}\n.ljIco{display:inline-flex;align-items:center;justify-content:center;width:19px;height:19px;border-radius:5px;cursor:pointer;flex:none;opacity:.85;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljIco:hover{background:rgba(62,198,216,.12);opacity:1}\n/* 第二行：套装名（虚线只贴字）＋ 场次：简述 */\n.ljMeta{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:14px;font-size:12px;color:#8A97A3;line-height:1.95;margin-bottom:1px}\n.ljSet{color:#C9D4DE;border-bottom:1px dashed rgba(255,255,255,.22);padding-bottom:1px;outline:none;cursor:text;white-space:nowrap;font-size:12.5px}\n.ljSet:hover,.ljSet:focus{color:#3EC6D8;border-bottom-color:rgba(62,198,216,.5)}\n.ljScn2{color:#7E8B99;white-space:nowrap}\n/* 第二行：风格（B4 带入的信息文字 · 非交互） */\n.ljSty{font-size:12px;color:#9FADB9;white-space:nowrap}\n.ljStl{font-size:11px;color:#5E6B78;margin-right:6px;letter-spacing:.5px}\n/* 删减后的折叠行 */\n.ljFold{background:#141A20;border:1px dashed rgba(255,255,255,.12);border-radius:9px;padding:8px 14px;margin-bottom:10px;display:flex;align-items:center;gap:0}\n.ljFS{font-size:12px;color:#7E8B99;white-space:nowrap}\n/* 颜色组的 主 / 辅 小标与组间分隔 */\n.ljGl{display:inline-block;font-size:11px;color:#9FADB9;margin:0 7px 0 2px;letter-spacing:.5px}\n.ljSep{display:inline-block;color:#3C4652;margin:0 12px;font-size:11px}\n/* 分区标题＝E1 .ljGRp（部件名 / 基础信息 / 配件 同一级） */\n.ljGRp{display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(94,107,120,.85);letter-spacing:.5px;margin:9px 0 1px;user-select:none;-webkit-user-select:none}\n.ljItem>.ljGRp:first-of-type{margin-top:2px}\n/* 字段行：一行可并多字段（列距 18） */\n.ljSRow{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:18px;min-height:25px;line-height:2.05}\n.ljFld{display:inline-flex;flex-wrap:wrap;align-items:baseline}\n.ljSL{font-size:13px;color:#8A97A3;margin-right:3px;white-space:nowrap}\n.ljSV{font-size:13px;color:#C9D4DE;cursor:pointer;border-bottom:1px dashed transparent;transition:.15s;white-space:nowrap;padding:0 1px;margin-right:9px;user-select:none;-webkit-user-select:none}\n.ljIt{display:inline-block;white-space:nowrap}\n.ljIco.ljIcoL{width:15px;height:15px;flex:none;margin:0 3px 0 0;vertical-align:-2px;position:relative;top:0;opacity:.88}\n.ljDice{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;margin:0 2px;cursor:pointer;flex:none;vertical-align:-1px;opacity:.95;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljDice.gap{margin-left:8px}\n.ljDice:hover svg{stroke:#C9D4DE}\n.ljDice:hover svg circle{fill:#C9D4DE}\n.ljSV:hover{color:#3EC6D8;border-bottom-color:rgba(62,198,216,.5)}\n.ljX{color:#6C7A87;font-size:11px;margin:0 3px}\n.ljRm{display:inline-block;color:#6A7683;cursor:pointer;padding:0 3px;margin:0 2px 0 0;transition:.15s;user-select:none;-webkit-user-select:none;font-size:12.5px;line-height:1}\n.ljRm:hover{color:#D9B75B}\n.ljAdd{display:inline-block;color:#3EC6D8;cursor:pointer;padding:0 3px;margin-left:-3px;transition:.15s;user-select:none;-webkit-user-select:none;font-size:15px;line-height:1}\n.ljAdd:hover{color:#D9B75B}\n/* 勾选项＝E1 .ljMini（方框，非胶囊） */\n.ljMini{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;cursor:pointer;user-select:none;-webkit-user-select:none;margin-right:12px;padding:2px 0}\n.ljBx{width:12px;height:12px;border:1.5px solid #66707A;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex:none;transition:background .15s,border-color .15s}\n.ljMini:hover{color:#C9D4DE}\n.ljMini.on{color:#E8EEF4}\n.ljMini.on .ljBx{background:#3EC6D8;border-color:#3EC6D8}\n.ljMini.on .ljBx:after{content:\"\";width:6px;height:3.5px;border-left:1.8px solid #0F1317;border-bottom:1.8px solid #0F1317;transform:rotate(-45deg) translate(0,-1px)}\n/* 开关＝E1 滑块 */\n.ljSw{position:relative;display:inline-block;width:26px;height:15px;border-radius:99px;background:#2A3138;cursor:pointer;transition:background .18s;vertical-align:middle;flex:none}\n.ljSw i{position:absolute;top:2px;left:2px;width:11px;height:11px;border-radius:50%;background:#8A949E;transition:.18s}\n.ljSw.on{background:#1E5F6B}\n.ljSw.on i{left:13px;background:#3EC6D8}\n.ljFt{flex:none;display:flex;justify-content:flex-end;gap:8px;background:#0F1317;padding:11px 16px;border-top:1px solid rgba(255,255,255,.06);padding-bottom:calc(11px + env(safe-area-inset-bottom))}\n.ljBtn{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#C9D4DE;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:7px;padding:5px 15px;cursor:pointer;transition:.18s;font-family:inherit}\n.ljBtn:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljPri{color:#3EC6D8;border-color:rgba(62,198,216,.55)}\n.ljPri:hover{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n.ljPri.gold{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n/* ── 弹层（E1 同款：单列 8 项 → 更多 → 两栏 · 宽度按内容实测）── */\n.ljPop{position:absolute;z-index:45;display:none;box-shadow:0 10px 26px rgba(0,0,0,.5);background:#1B2129;border:1px solid rgba(62,198,216,.35);border-radius:8px;padding:5px;min-width:120px;max-width:330px;max-height:300px;overflow:auto;overscroll-behavior:contain}\n.ljPop.on{display:block}\n.ljPc{display:flex;flex-direction:column;gap:2px;padding:5px 9px;border-radius:5px;cursor:pointer;font-size:12.5px;color:#C9D4DE;white-space:nowrap}\n.ljPc:hover{background:rgba(62,198,216,.1)}\n.ljPc.on{color:#3EC6D8}\n.ljPop.pickone{max-height:none}\n.ljColOne{display:flex;flex-direction:column;max-height:none}\n.ljColOne .ljOpts{flex:0 1 auto;min-height:0;max-height:208px;overflow-y:auto;padding:0}\n.ljColOne .ljOpts .ljPc{line-height:16px}\n.ljColOne .ljFixOne{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding-top:2px;margin-top:2px}\n.ljColOne .ljFixOne .ljPc{flex-direction:row;align-items:center;height:26px;padding:0 9px}\n.ljColOne .ljFixOne .ljMore{color:#7E8B99;font-size:11.5px}\n/* 两栏：左 5 字 ／ 右 10 字，超字按实测放宽（滚条不计入）；高＝8 项 */\n.ljPop.wide{width:auto;max-height:none;padding:0;overflow:hidden}\n.ljPop.wide.on{display:flex;flex-direction:column;height:268px}\n.ljSplit{display:flex;flex:1 1 auto;min-height:0;max-height:none}\n.ljOpts{flex:1 1 auto;min-width:0;overflow:auto;padding:5px 6px;overscroll-behavior:contain}\n.ljCats{flex:0 0 auto;width:54px;border-right:1px solid rgba(255,255,255,.07);padding:5px 4px;overflow:auto;background:rgba(0,0,0,.16);overscroll-behavior:contain}\n.ljCat{font-size:11.5px;color:#7E8B99;padding:5px 8px;border-radius:6px;cursor:pointer;text-align:left;user-select:none;-webkit-user-select:none;line-height:1.25}\n.ljCat:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljCat.on{color:#3EC6D8;background:rgba(62,198,216,.12)}\n.ljPop.wide .ljCats{width:54px;padding:4px;overflow-y:auto}\n.ljPop.wide .ljOpts{width:96px;padding:4px;overflow-y:auto}\n.ljPop.wide #ljPopL .ljPc{height:25px;flex-direction:row;align-items:center;white-space:nowrap;padding:0 4px;gap:0;box-sizing:border-box}\n.ljPop.wide #ljPopL .ljPc.on{background:rgba(62,198,216,.14);color:#3EC6D8}\n.ljPop.wide .ljCats .ljCat{height:25px;display:flex;align-items:center;box-sizing:border-box;padding:0 3px;white-space:nowrap}\n/* 两栏底部：收起 + 自定义（对齐 E0） */\n.ljPop.wide .ljFix{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding:0 5px 4px}\n.ljPop.wide .ljFix .ljPc{height:26px;font-size:11.5px;color:#7E8B99;padding:0 9px;display:flex;flex-direction:row;align-items:center}\n.ljPop,.ljOpts,.ljCats{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.20) transparent}\n.ljPop::-webkit-scrollbar,.ljOpts::-webkit-scrollbar,.ljCats::-webkit-scrollbar{width:6px;height:6px}\n.ljPop::-webkit-scrollbar-track,.ljOpts::-webkit-scrollbar-track,.ljCats::-webkit-scrollbar-track{background:transparent}\n.ljPop::-webkit-scrollbar-thumb,.ljOpts::-webkit-scrollbar-thumb,.ljCats::-webkit-scrollbar-thumb{background:rgba(255,255,255,.16);border-radius:3px}\n.ljPop::-webkit-scrollbar-thumb:hover,.ljOpts::-webkit-scrollbar-thumb:hover,.ljCats::-webkit-scrollbar-thumb:hover{background:rgba(62,198,216,.5)}\n.ljPop::-webkit-scrollbar-button,.ljOpts::-webkit-scrollbar-button,.ljCats::-webkit-scrollbar-button{width:0;height:0;display:block;background:transparent}\n.ljIn{background:transparent;border:none;border-bottom:1px dashed rgba(255,255,255,.22);outline:none;color:#C9D4DE;font-size:12.5px;width:100%;font-family:inherit;padding:3px 2px}\n.ljIn:focus{border-bottom-color:#3EC6D8}\n.ljOvl{position:absolute;inset:0;background:rgba(8,10,13,.78);display:none;align-items:center;justify-content:center;z-index:50}\n.ljOvl.on{display:flex}\n.ljMod{background:#171C22;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:86%;max-height:76%;display:flex;flex-direction:column;padding:14px 16px}\n.ljMoH{font-size:13.5px;font-weight:500;color:#E8EEF4;margin-bottom:9px}\n.ljMoB{overflow:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:6px}\n.ljOl{font-size:12.5px;color:#9FADB9;background:rgba(255,255,255,.03);border-radius:6px;padding:6px 9px;line-height:1.5;white-space:pre-wrap}\n.ljMoF{margin-top:10px;display:flex;justify-content:flex-end;gap:8px}\n.ljTst{position:absolute;left:50%;bottom:72px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12.5px;padding:7px 16px;border-radius:8px;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;z-index:60}\n.ljTst.on{opacity:1}\ninput::placeholder,textarea::placeholder{color:#59636D!important;opacity:1}\n.ljBd,.ljPop{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar,.ljPop::-webkit-scrollbar{width:0;height:0}\nhtml.ljReady .ljBd,html.ljReady .ljPop{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar,html.ljReady .ljPop::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb,html.ljReady .ljPop::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.26)}\n@media (max-width:520px){.ljP{max-height:none}}\n";
var HTML = "<meta charset=\"utf-8\">\n<!-- ============================================================\n  【E2 · 服装卡】标准组件模板 —— 实现唯一源（UI 规范「E2」的落地实现）\n  使用方式：只替换下方「数据区」（DATA 对象）→ 输出完整代码给 show_widget\n  ❌ 组件代码区不改（改交互只改本文件一处）\n  版式：**与 E1 同构**——一套＝一张卡；**卡最上面就是 `基础信息`**：\n        标题行 `基础信息` —— 右端＝**卡的最右上角**：⟳ 整卡随机（只换本套）／ － 删减本套\n        第一行 `角色名` ＋ `A套` ＋ `场次#/全场次：简述`（**信息 · 非交互**）\n        第二行 `风格`（B4 选定后带入的信息文字 · 非交互）＋ `套装名`（虚线只贴字 · 可改）\n        第三行 `类型`（勾选项）→ 各部件 → `配件`\n        部件字段**压成 4 行**：①版型 款式　②材质 颜色 效果　③光泽 纹理 图案　④做工\n        配件五项**同一行**：头饰 挂件 腰饰 配饰 袜子\n  删减：`－` → 折叠成 `A套｜角色名 · 已删减`（右端撤销箭头恢复）；卡片**无锁**\n  开关：内搭／鞋子标题行带滑块，**默认关＝只留标题、内容收起；开＝展开内容**（不消失）\n  预选：🔴 打开即全项有值——DATA 缺值的槽由 `DEFV`（首选表）＋ `DEFC`（配色）兜底补满，面板不出现 `—`\n  多值：`值 ＋ 值 － 值 －`——`＋` **固定紧跟首项**（不弹层，直接追加一个有内容的换选项）；\n        **到上限后首项的那个 `＋` 变成 `－`**（于是每项都带 `－`）；减到不足上限又变回 `＋`；\n        值之间留 9px 间距（加满后两值不粘连）；`无` 与具体项互斥\n  推荐：**单列只放推荐项 ＝ `REC[轴]`（AI 按本期剧情／风格推理的首选 5-8 项；该轴池 ≤8 项时＝全列）**；\n        两栏左栏第一行同为 `推荐`（打开即停在此类）；**全池只在两栏**（按类分组 · 点 `更多...` 进）；色组两轴走 `COLREC` 配色\n  换选：点值 → 单列＝推荐项（5-8 项 · 定高 208 可滚 · ❌ 不掺池项）→「更多...」→ 两栏（左类右项 · 全池 ·\n        左栏 5 字宽 ／ 右栏 10 字宽 · 超字按实测放宽 · 滚条不计入 · 8 项高）→ 两栏底部「收起」回单列 ＋ `自定义…（回车确定）` → 点项即定\n  动作：底部「确认」；右上角「上一级 ／ 跳过」\n  回传：确认 → 回传预览弹层（收起 ／ 提交）→ 提交后按钮转「已提交」；自动分条（单条 ≤430 · 单轮 ≤18）\n============================================================ -->\n\n<div class=\"ljP\">\n\n<h2 class=\"ljSr\">服装卡：按套装逐件换选类型／版型／材质／颜色／配件</h2>\n<div class=\"ljHd\">\n  <span class=\"ljTt\">服装卡</span>\n  <div class=\"ljHc\">\n    <button class=\"ljHb\" onclick=\"LJ.up()\" title=\"回 B4 剧本面板\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V6\"/><path d=\"M6 11l6-6 6 6\"/></svg>上一级</button>\n    <button class=\"ljHb\" onclick=\"LJ.skip()\" title=\"不指定服装，由 AI 按风格与剧情自选\">跳过<svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 5l7 7-7 7\"/><path d=\"M13 5l7 7-7 7\"/></svg></button>\n  </div>\n</div>\n<div class=\"ljBd\" id=\"bd\"></div>\n<div class=\"ljOvl\" id=\"ovl\"><div class=\"ljMod\"><div class=\"ljMoH\">回传预览 · 确认后提交 AI</div><div class=\"ljMoB\" id=\"moB\"></div><div class=\"ljMoF\"><button class=\"ljBtn\" onclick=\"LJ.closeM()\" title=\"收起（返回面板继续调整）\">收起</button><button class=\"ljBtn ljPri\" onclick=\"LJ.submitAll()\" title=\"提交回传给 AI\">提交</button></div></div></div>\n<div class=\"ljFt\">\n  <button class=\"ljBtn ljPri\" id=\"okb\" onclick=\"LJ.confirm()\" title=\"先看回传预览，再提交\">确认</button>\n</div>\n<div class=\"ljTst\" id=\"tst\"></div>\n</div>\n\n\n<script>\n/* 成形标记：load 后两帧置 ljReady —— 渲染中不挂滚动条 */\n(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}\nif(document.readyState==='complete')r();else window.addEventListener('load',r);})();\n</script>\n\n<!--HA_PREVIEW-->\n<script data-panel=\"E2_服装卡\">\n/* 通用回传预览（与 B5 同款）：字数 ／ 复制全文 ／ 存 .md —— 由 tools/inject_preview.py 注入 */\n(function(){\n var PANEL=(document.currentScript&&document.currentScript.getAttribute('data-panel'))||'面板';\n function ovl(){return document.querySelector('.ljOvl.on');}\n function linesOf(mod){return [].slice.call(mod.querySelectorAll('.ljOl')).map(function(e){\n   return (e.innerText||'').replace(/\\u00a0/g,' ').trim();}).filter(function(x){return x!=='';});}\n function headOf(mod){var h=mod.querySelector('.ljMoH');var t=h?(h.innerText||'').trim():'';return t||('【'+PANEL+'·回传】');}\n function copyTxt(t){\n  function fb(){var ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:absolute;left:-9999px;top:0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}document.body.removeChild(ta);return ok;}\n  try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){tip('已复制全文 '+t.length+' 字');},function(){tip(fb()?('已复制全文 '+t.length+' 字'):'复制被拦');});return;}}catch(e){}\n  tip(fb()?('已复制全文 '+t.length+' 字'):'复制被拦');\n }\n function saveMd(t){try{var b=new Blob([t],{type:'text/markdown;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=PANEL+'_回传.md';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},800);tip('已存 '+PANEL+'_回传.md');}catch(e){copyTxt(t);}}\n function tip(s){var d=document.createElement('div');d.textContent=s;d.style.cssText='position:absolute;left:50%;bottom:64px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.4);color:#C9D4DE;font:12px/1.6 -apple-system,PingFang SC,sans-serif;padding:6px 16px;border-radius:8px;z-index:9999';document.body.appendChild(d);setTimeout(function(){d.remove();},1800);}\n function mkBtn(label,fn){var b=document.createElement('button');b.type='button';b.textContent=label;\n  b.style.cssText='background:transparent;border:1px solid rgba(255,255,255,.18);color:#C9D4DE;font:12px/1 -apple-system,PingFang SC,sans-serif;padding:5px 10px;border-radius:6px;cursor:pointer';\n  b.onmouseenter=function(){b.style.borderColor='rgba(62,198,216,.55)';b.style.color='#3EC6D8';};\n  b.onmouseleave=function(){b.style.borderColor='rgba(255,255,255,.18)';b.style.color='#C9D4DE';};\n  b.onclick=fn;return b;}\n function enhance(){\n  var o=ovl();if(!o)return;\n  var mod=o.querySelector('.ljMod')||o;\n  var box=mod.querySelector('.ljMoB');if(!box)return;\n  var lines=linesOf(mod);if(!lines.length)return;\n  var txt=headOf(mod)+'\\n'+lines.join('\\n');\n  var sig=lines.length+':'+txt.length;\n  var bar=mod.querySelector('.haPv');\n  if(!bar){bar=document.createElement('div');bar.className='haPv';\n   bar.style.cssText='display:flex;align-items:center;gap:8px;margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);font:12px/1.6 -apple-system,PingFang SC,sans-serif;color:#8A97A3';\n   var f=mod.querySelector('.ljMoF');\n   if(f)mod.insertBefore(bar,f);else mod.appendChild(bar);}\n  if(bar.getAttribute('data-sig')===sig)return;\n  bar.setAttribute('data-sig',sig);bar.innerHTML='';\n  var info=document.createElement('span');info.textContent='共 '+lines.length+' 行 · '+txt.length+' 字';\n  var sp=document.createElement('span');sp.style.flex='1';\n  bar.appendChild(info);bar.appendChild(sp);\n  bar.appendChild(mkBtn('复制全文',function(){copyTxt(txt);}));\n  bar.appendChild(mkBtn('存 .md',function(){saveMd(txt);}));\n }\n var mo=new MutationObserver(function(){setTimeout(enhance,0);});\n try{mo.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});}catch(e){}\n try{mo.observe(document.documentElement,{subtree:true,childList:true});}catch(e){}\n setTimeout(enhance,300);setTimeout(enhance,1200);\n})();\n\n/* ---------- 指针提交（2026-11-15 · 与 B5 同源） ----------\n   面板把分条消息交给 window.__ljSend（由本块提供），本块在 40ms 内把同一批分条收拢成全文，\n   写剪贴板 + 存 <面板>_回传.txt，只发一行指针【面板·动作】#hash · N字。\n   ⚠️ 不再改写 window.sendPrompt —— 宿主可能在面板加载后才注入，改写会扑空；\n      改为面板显式调用 __ljSend，它在每次调用时才解析当前 sendPrompt。\n   ⚠️ 本段无反斜杠转义（regex 用 indexOf/charCode 手写）。 */\n(function(){\n var P='面板';\n var el=document.querySelector('script[data-panel]');\n if(el&&el.getAttribute('data-panel'))P=el.getAttribute('data-panel');\n var NL=String.fromCharCode(10),TAB=String.fromCharCode(9);\n var buf=[],act='确认',timer=null;\n function isNum(c){var n=c.charCodeAt(0);return n>=48&&n<=57;}\n function ltrim(s){var i=0;while(i<s.length&&(s.charAt(i)===' '||s.charAt(i)===TAB))i++;return s.slice(i);}\n function parse(msg){\n  var i=msg.indexOf(NL);if(i<0)return null;\n  var h=msg.slice(0,i),b=msg.slice(i+1);\n  if(h.charAt(0)!=='【')return null;\n  var e=h.indexOf('】');if(e<0)return null;\n  var a=h.slice(1,e),tail=ltrim(h.slice(e+1));\n  var d=a.lastIndexOf('·');if(d>=0)a=a.slice(d+1);\n  var n=tail.length,j=n;\n  while(j>0&&isNum(tail.charAt(j-1)))j--;\n  var chunk=false;\n  if(j<n&&j>0&&tail.charAt(j-1)==='/'){\n   var k=j-1;while(k>0&&isNum(tail.charAt(k-1)))k--;\n   if(k<j-1)chunk=true;\n  }\n  return {act:a,body:b,chunk:chunk,len:msg.length};\n }\n function fp(t){var h=2166136261;for(var i=0;i<t.length;i++){h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;}return ('0000000'+h.toString(16)).slice(-8);}\n function copy(t){\n  var ok=false,ta=document.createElement('textarea');\n  try{ta.value=t;ta.setAttribute('readonly','');ta.style.cssText='position:absolute;left:-9999px;top:0';document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,t.length);ok=document.execCommand('copy');}catch(e){ok=false;}\n  if(ta.parentNode)ta.parentNode.removeChild(ta);\n  if(!ok){try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t);ok=true;}}catch(e){}}\n  return ok;\n }\n function save(t){try{var b=new Blob([t],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');\n  a.href=URL.createObjectURL(b);a.download=P+'_回传.txt';document.body.appendChild(a);a.click();document.body.removeChild(a);\n  setTimeout(function(){URL.revokeObjectURL(a.href);},1500);}catch(e){}}\n function raw(){return (typeof window.sendPrompt==='function')?window.sendPrompt:null;}\n function flush(){\n  var t=buf.join(NL);buf=[];timer=null;if(!t)return;\n  var sp=raw();if(!sp)return;\n  var ok=copy(t);save(t);\n  if(ok)sp('【'+P+'·'+act+'】#'+fp(t)+' · '+t.length+'字 · 见剪贴板／'+P+'_回传.txt');\n  else sp(t);\n }\n window.__ljSend=function(msg){\n  if(typeof msg!=='string'){var s0=raw();return s0?s0.apply(window,arguments):false;}\n  var p=parse(msg);\n  if(p&&(p.chunk||p.len>450)){act=p.act;buf.push(p.body);if(timer)clearTimeout(timer);timer=setTimeout(flush,40);return true;}\n  var sp=raw();return sp?sp(msg):false;\n };\n})();\n</script>\n\n<!--/HA_PREVIEW-->";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;
/* ==================== 数据区（每期只换这里） ==================== */
var DATA = window.LJ_DATA || {};


/* ==================== 数据区结束 · 以下组件代码固定 ==================== */
/* ── 推荐（**单列 ／ 两栏左栏第一行「推荐」＝同一份**）：AI 按本期剧情／B4 服装风格推理的首选，**5-8 项／轴**
      （该轴池本身 ≤8 项时＝全列）；**全部轴都要写**，漏写的轴只剩「当前值 ＋ 池前几项」兜底（＝数据缺失）。
      色组两轴（`色系` ／ `色`）不在此表，走下方 `COLREC` 配色。── */
var REC = {
  /* 池 ≤8 项的轴＝全列（推荐＝本套可用的全部 · 顺序即池序） */
  "袖长":   ["长袖","短袖","无袖"],
  "廓形":   ["修身","紧身","短款","长款","oversize"],
  "领型":   ["圆领","低圆领","V领","低V领","高领","立领","无领"],
  "开合":   ["半开","敞开","全","无"],
  "闭合":   ["纽扣","拉链"],
  "内搭款": ["休闲","背心","吊带","抹胸","冷衣","睡衣"],
  "连款":   ["公主裙","蓬蓬裙","吊带裙","背带裤","连体裤","工装连体裤","睡衣"],
  "颜色效果": ["无","渐变","拼色","点缀"],
  "光泽":   ["哑光","磨砂","光滑"],
  "下长":   ["超长","长","五分","三分","短","超短"],
  "下版":   ["直筒","修身","紧身","阔腿"],
  "筒高":   ["高筒","中筒","低帮"],
  "跟型":   ["厚底","高跟","中跟","细跟","无跟","平底"],
  "头型":   ["尖头","圆头"],
  "鞋款":   ["老爹鞋","运动鞋","帆布鞋","马丁靴","皮鞋","洞洞鞋","人字拖","家居鞋"],
  "鞋材":   ["皮革","反绒皮","帆布","织网","绒毛","EVA","PVC"],
  /* 池 >8 项的轴＝推理 5-6 项（其余只在两栏全池里挑） */
  "上衣款": ["衬衫","卫衣","西装","夹克","风衣","工装"],
  "材质":   ["棉","针织","丝绸","牛仔","皮革"],
  "材质内": ["棉","针织","丝绸","蕾丝","牛仔"],
  "纹理":   ["无","纵向条纹","格子","碎花","刺绣"],
  "图案":   ["无","印花","字母","LOGO","贴章"],
  "做工上": ["无","口袋","拉链","不规则","露背","腰侧皱褶"],
  "做工下": ["无","口袋","不规则","破洞","毛边"],
  "做工鞋": ["无","拼接","缝线","绑带","铆钉"],
  "做工叠": ["无","叠穿","口袋","皱褶","半透"],
  "下款":   ["休闲裤","牛仔裤","工装裤","西裤","A字裙","百褶裙"],
  "头饰":   ["无","发夹","渔夫帽","贝雷帽","发带"],
  "挂件":   ["无","斜挂包","围脖","胸包","耳机"],
  "腰饰":   ["无","细皮带","宽皮带","腰链","方巾束腰","屁帘裙"],
  "配饰":   ["无","细链项链","耳坠","耳钉","腕表","眼镜"],
  "袜子":   ["无","船袜","中筒袜","过膝袜","黑丝袜"]
};

/* ── 池派生数据：由 template/pool/e2_池.txt 生成，❌ 手改（改池后重跑 tools/gen_e2.py）── */
var AX={"袖长":["长袖","短袖","无袖"],"廓形":["修身","紧身","短款","长款","oversize"],"领型":["圆领","低圆领","V领","低V领","高领","立领","无领"],"开合":["半开","敞开","全","无"],"闭合":["纽扣","拉链"],"材质":["棉","绒","毛线","针织","化纤","速干","织网","蕾丝","皮革","牛仔","丝绸","羽绒"],"材质内":["棉","绒","毛线","针织","化纤","速干","蕾丝","皮革","牛仔","丝绸"],"光泽":["哑光","磨砂","光滑"],"色系":["无","象牙","高级","雾","玉","莫兰迪","马卡龙","棉花糖闪","鎏"],"色":["黑","白","灰","米","棕","卡其","藏青","靛蓝","月白","蓝","酒红","朱砂红","红","粉","墨绿","绿","紫","黄","橙","银","金"],"颜色效果":["无","渐变","拼色","点缀"],"纹理":["无","纵向条纹","横向条纹","斜向条纹","格子","碎花","豹纹","闪片","刺绣"],"图案":["无","印花","卡通","闪片","字母","LOGO","贴章","缝线"],"做工上":["无","口袋","纽扣","拉链","不规则","单露肩","双露肩","露背","腰侧长短差异","腰侧皱褶","腰侧宽松","做旧","洗水","污渍","皱褶","破洞","毛边","破碎","半透","花边"],"做工下":["无","口袋","纽扣","拉链","不规则","做旧","洗水","污渍","皱褶","破洞","毛边","破碎","半透","花边"],"做工鞋":["无","拼接","缝线","镂空","压花","绑带","搭扣","松紧带","铆钉","亮片","流苏","蝴蝶结","做旧","磨砂","擦色"],"做工叠":["无","口袋","叠穿","做旧","洗水","污渍","皱褶","破洞","毛边","破碎","半透","花边"],"连款":["公主裙","蓬蓬裙","吊带裙","背带裤","连体裤","工装连体裤","睡衣"],"上衣款":["休闲","背心","卫衣","衬衫","马甲","冷衣","大衣","夹克","风衣","西装","棒球服","吊带","抹胸","工装","睡衣"],"内搭款":["休闲","背心","吊带","抹胸","冷衣","睡衣"],"下长":["超长","长","五分","三分","短","超短"],"下版":["直筒","修身","紧身","阔腿"],"下款":["休闲裤","工装裤","牛仔裤","西裤","运动裤","瑜伽裤","骑行裤","睡裤","家居裤","蓬蓬裙","公主裙","A字裙","百褶裙","伞裙","包臀裙","铅笔裙"],"筒高":["高筒","中筒","低帮"],"跟型":["厚底","高跟","中跟","细跟","无跟","平底"],"头型":["尖头","圆头"],"鞋款":["老爹鞋","运动鞋","帆布鞋","马丁靴","家居鞋","人字拖","洞洞鞋","皮鞋"],"鞋材":["皮革","反绒皮","帆布","织网","绒毛","EVA","PVC"],"头饰":["无","发夹","发带","发簪","蝴蝶结","贝雷帽","渔夫帽","针织帽","草帽","猫耳发箍"],"挂件":["无","斜挂包","胸包","单肩小包","围脖","挂绳","工牌","耳机","毛绒挂饰","钥匙扣","相机带"],"腰饰":["无","细皮带","宽皮带","双层腰带","铆钉腰带","编织腰带","方巾束腰","三角巾束腰","同布系带","腰封","宽腰封","蕾丝腰封","腰链","金属腰链","珍珠腰链","叠戴腰链","腰间挎包","迷你腰包","链条腰包","屁帘裙"],"配饰":["无","细链项链","耳钉","耳坠","丝巾","细戒","腕表","手镯","胸针","眼镜"],"袜子":["无","船袜","隐形袜","短袜","中筒袜","堆堆袜","小腿袜","及膝袜","过膝袜","连裤袜","黑丝袜","网袜","蕾丝袜","破洞袜","条纹袜"]};
var GRP={"袖长":[["有袖",["长袖","短袖"]],["无袖",["无袖"]]],"廓形":[["贴合",["修身","紧身"]],["长短",["短款","长款"]],["宽松",["oversize"]]],"领型":[["圆",["圆领","低圆领"]],["V",["V领","低V领"]],["高",["高领","立领"]],["无",["无领"]]],"开合":[["局部",["半开","敞开"]],["全",["全"]],["无",["无"]]],"闭合":[["扣",["纽扣"]],["链",["拉链"]]],"材质":[["天然",["棉","绒","毛线"]],["化纤",["针织","化纤","速干","织网","蕾丝"]],["皮",["皮革","牛仔"]],["高阶",["丝绸","羽绒"]]],"材质内":[["天然",["棉","绒","毛线"]],["化纤",["针织","化纤","速干","蕾丝"]],["皮",["皮革","牛仔"]],["高阶",["丝绸"]]],"光泽":[["哑",["哑光","磨砂"]],["亮",["光滑"]]],"色系":[["素",["无","象牙","高级"]],["冷",["雾","玉"]],["柔彩",["莫兰迪","马卡龙","棉花糖闪"]],["金属",["鎏"]]],"色":[["中性",["黑","白","灰","米","棕","卡其"]],["蓝",["藏青","靛蓝","月白","蓝"]],["红",["酒红","朱砂红","红","粉"]],["绿",["墨绿","绿"]],["彩金",["紫","黄","橙","银","金"]]],"颜色效果":[["单",["无"]],["混",["渐变","拼色"]],["点",["点缀"]]],"纹理":[["无",["无"]],["条纹",["纵向条纹","横向条纹","斜向条纹"]],["格花",["格子","碎花"]],["野性",["豹纹"]],["装饰",["闪片","刺绣"]]],"图案":[["无",["无"]],["图形",["印花","卡通","闪片"]],["文字",["字母","LOGO"]],["工艺",["贴章","缝线"]]],"做工上":[["无",["无"]],["结构",["口袋","纽扣","拉链","不规则"]],["露肤",["单露肩","双露肩","露背"]],["腰侧",["腰侧长短差异","腰侧皱褶","腰侧宽松"]],["状态",["做旧","洗水","污渍","皱褶"]],["破损",["破洞","毛边","破碎"]],["装饰",["半透","花边"]]],"做工下":[["无",["无"]],["结构",["口袋","纽扣","拉链","不规则"]],["状态",["做旧","洗水","污渍","皱褶"]],["破损",["破洞","毛边","破碎"]],["装饰",["半透","花边"]]],"做工鞋":[["无",["无"]],["结构",["拼接","缝线","镂空","压花"]],["系带",["绑带","搭扣","松紧带"]],["装饰",["铆钉","亮片","流苏","蝴蝶结"]],["状态",["做旧","磨砂","擦色"]]],"做工叠":[["无",["无"]],["结构",["口袋","叠穿"]],["状态",["做旧","洗水","污渍","皱褶"]],["破损",["破洞","毛边","破碎"]],["装饰",["半透","花边"]]],"连款":[["裙类",["公主裙","蓬蓬裙","吊带裙"]],["裤类",["背带裤","连体裤","工装连体裤"]],["套装",["睡衣"]]],"上衣款":[["基础",["休闲","背心","卫衣"]],["衬衫",["衬衫","马甲"]],["外套",["冷衣","大衣","夹克","风衣","西装","棒球服"]],["贴身",["吊带","抹胸"]],["功能",["工装","睡衣"]]],"内搭款":[["基础",["休闲","背心"]],["贴身",["吊带","抹胸"]],["外套",["冷衣"]],["功能",["睡衣"]]],"下长":[["长",["超长","长"]],["短",["五分","三分","短","超短"]]],"下版":[["直",["直筒"]],["收",["修身","紧身"]],["放",["阔腿"]]],"下款":[["裤·休闲",["休闲裤","工装裤","牛仔裤"]],["裤·正装",["西裤"]],["裤·运动",["运动裤","瑜伽裤","骑行裤"]],["裤·家居",["睡裤","家居裤"]],["裙·礼服",["蓬蓬裙","公主裙"]],["裙·半身",["A字裙","百褶裙","伞裙","包臀裙","铅笔裙"]]],"筒高":[["高",["高筒"]],["中",["中筒"]],["低",["低帮"]]],"跟型":[["高",["厚底","高跟","中跟","细跟"]],["低",["无跟","平底"]]],"头型":[["尖",["尖头"]],["圆",["圆头"]]],"鞋款":[["运动",["老爹鞋","运动鞋","帆布鞋"]],["靴",["马丁靴","家居鞋"]],["凉拖",["人字拖","洞洞鞋"]],["正装",["皮鞋"]]],"鞋材":[["皮",["皮革","反绒皮"]],["布",["帆布","织网"]],["软",["绒毛"]],["塑",["EVA","PVC"]]],"头饰":[["无",["无"]],["发饰",["发夹","发带","发簪","蝴蝶结"]],["帽",["贝雷帽","渔夫帽","针织帽","草帽"]],["趣味",["猫耳发箍"]]],"挂件":[["无",["无"]],["包",["斜挂包","胸包","单肩小包"]],["颈",["围脖","挂绳","工牌","耳机"]],["吊饰",["毛绒挂饰","钥匙扣","相机带"]]],"腰饰":[["无",["无"]],["皮带",["细皮带","宽皮带","双层腰带","铆钉腰带","编织腰带"]],["布巾",["方巾束腰","三角巾束腰","同布系带"]],["腰封",["腰封","宽腰封","蕾丝腰封"]],["链饰",["腰链","金属腰链","珍珠腰链","叠戴腰链"]],["包",["腰间挎包","迷你腰包","链条腰包"]],["裙",["屁帘裙"]]],"配饰":[["无",["无"]],["颈耳",["细链项链","耳钉","耳坠","丝巾"]],["手",["细戒","腕表","手镯"]],["其他",["胸针","眼镜"]]],"袜子":[["无",["无"]],["短",["船袜","隐形袜","短袜"]],["中",["中筒袜","堆堆袜","小腿袜"]],["长",["及膝袜","过膝袜","连裤袜","黑丝袜"]],["特殊",["网袜","蕾丝袜","破洞袜","条纹袜"]]]};
var MAXS={"材质":2,"材质内":2,"色系":3,"纹理":2,"图案":99,"做工上":99,"做工下":99,"做工鞋":99,"做工叠":99,"鞋材":2};

/* 部件定义：k=数据键 · toggle=开关键 · rows=[ 行, [ 字段, 轴… ] ]；轴写 "ax"（数据键同名）或 ["ax","数据键"]；"@颜色"＝色组 */
var DEF = [
  { k:"连体", name:"连体",
    show:function(s){return s.类型==="连体";},
    rows:[
      [ ["版型",["袖长","廓形","领型"]], ["款式",["开合","闭合",["连款","款式"]]] ],
      [ ["材质",["材质"]], ["颜色","@颜色"], ["效果",["颜色效果"]] ],
      [ ["光泽",["光泽"]], ["纹理",["纹理"]], ["图案",["图案"]] ],
      [ ["做工",[["做工上","做工"]]] ]
    ]},
  { k:"上衣", name:"上衣",
    show:function(s){return s.类型==="分体"||s.类型==="显衣不显裤";},
    rows:[
      [ ["版型",["袖长","廓形","领型"]], ["款式",["开合","闭合",["上衣款","款式"]]] ],
      [ ["材质",["材质"]], ["颜色","@颜色"], ["效果",["颜色效果"]] ],
      [ ["光泽",["光泽"]], ["纹理",["纹理"]], ["图案",["图案"]] ],
      [ ["做工",[["做工上","做工"]]] ]
    ]},
  { k:"内搭", name:"内搭", toggle:"内搭开",
    show:function(s){return s.类型!=="无上衣";},
    rows:[
      [ ["版型",["袖长","廓形","领型"]], ["款式",["开合","闭合",["内搭款","款式"]]] ],
      [ ["材质",[["材质内","材质"]]], ["颜色","@颜色"], ["效果",["颜色效果"]] ],
      [ ["光泽",["光泽"]], ["纹理",["纹理"]], ["图案",["图案"]] ],
      [ ["做工",[["做工叠","做工"]]] ]
    ]},
  { k:"下衣", name:"下衣",
    show:function(s){return s.类型==="分体"||s.类型==="无上衣";},
    rows:[
      [ ["版型",[["下长","长度"],["下版","版型"]]], ["款式",[["下款","款式"]]] ],
      [ ["材质",["材质"]], ["颜色","@颜色"], ["效果",["颜色效果"]] ],
      [ ["光泽",["光泽"]], ["纹理",["纹理"]], ["图案",["图案"]] ],
      [ ["做工",[["做工下","做工"]]] ]
    ]},
  { k:"鞋", name:"鞋子", toggle:"鞋开",
    show:function(s){return true;},
    rows:[
      [ ["版型",["筒高","跟型","头型"]], ["款式",[["鞋款","款式"]]] ],
      [ ["材质",[["鞋材","材质"]]], ["颜色","@颜色"], ["效果",["颜色效果"]] ],
      [ ["光泽",["光泽"]], ["纹理",["纹理"]], ["图案",["图案"]] ],
      [ ["做工",[["做工鞋","做工"]]] ]
    ]}
];
var ACC = ["头饰","挂件","腰饰","配饰","袜子"];
var TYPES = ["分体","连体","显衣不显裤","无上衣"];


/* ==================== 组件代码区（勿改） ==================== */
(function(){
var ROOT=Array.prototype.slice.call(document.querySelectorAll('.ljP')).pop();
if(!ROOT)return;
var bd=ROOT.querySelector('.ljBd');
var pop=document.createElement('div');
pop.className='ljPop';
ROOT.appendChild(pop);

/* ---------- 图标（扁平线性 · 面板不出现 emoji） ---------- */
var ICO_RND='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3EC6D8" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.3" fill="#3EC6D8" stroke="none"/><circle cx="15.5" cy="15.5" r="1.3" fill="#3EC6D8" stroke="none"/><circle cx="15.5" cy="8.5" r="1.3" fill="#3EC6D8" stroke="none"/><circle cx="8.5" cy="15.5" r="1.3" fill="#3EC6D8" stroke="none"/></svg>';
var ICO_MINUS='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3EC6D8" stroke-width="2.2" stroke-linecap="round"><path d="M4 12h16"/></svg>';
var ICO_BACK='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3EC6D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12H8"/></svg>';
/* 行首骰子：青 #35A9BA · 13px（与灰骰子同尺寸）· 只摇本行 */
var ICO_GD='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#35A9BA" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.8" cy="8.8" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="15.2" cy="15.2" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="15.2" cy="8.8" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="8.8" cy="15.2" r="1.4" fill="#35A9BA" stroke="none"/></svg>';
var ICO_IT='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#8A97A3" stroke-width="2"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.8" cy="8.8" r="1.5" fill="#8A97A3" stroke="none"/><circle cx="15.2" cy="15.2" r="1.5" fill="#8A97A3" stroke="none"/><circle cx="15.2" cy="8.8" r="1.5" fill="#8A97A3" stroke="none"/><circle cx="8.8" cy="15.2" r="1.5" fill="#8A97A3" stroke="none"/></svg>';
var ICO_OK='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';

/* ---------- 工具 ---------- */
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function isArr(v){return Object.prototype.toString.call(v)==="[object Array]";}
function maxOf(ax){return MAXS[ax]||0;}
function keyOf(si,pk,dk){return si+"|"+pk+"|"+dk;}
function suitOf(si){return DATA.套[si]||{};}
function objOf(key){
  var p=String(key).split("|"), s=suitOf(+p[0]);
  return p[1]==="配件"?(s.配件||(s.配件={})):(s[p[1]]||(s[p[1]]={}));
}
function rawOf(key){ var p=String(key).split("|"); return objOf(key)[p[2]]; }
function valOf(key){ return (S.pick[key]!==undefined)?S.pick[key]:rawOf(key); }
function asList(v){ return isArr(v)?v.slice():(v===undefined||v===null||v===""?[]:[v]); }
/* 「无」与其他项互斥：选「无」清空其余；选其余剔除「无」 */
function normNone(arr,last){
  if(last==="无")return ["无"];
  return arr.filter(function(x){return x!=="无";});
}

/* ---------- 状态 ---------- */
var S={pick:{},done:false,sent:false};
/* 色系 → 推荐色（＋追加新组时用，保证配色成套而不是随机乱搭） */
var COLREC={"无":["黑","白","灰","米"],"象牙":["白","米","卡其","棕"],"高级":["灰","黑","银","藏青"],
  "雾":["蓝","月白","灰","靛蓝"],"玉":["白","绿","月白","墨绿"],
  "莫兰迪":["红","绿","蓝","粉","灰"],"鎏":["金","银","黑","酒红"],
  "马卡龙":["粉","黄","蓝","紫","绿"],"棉花糖闪":["紫","粉","蓝","银"]};
/* ＋追加新组时的色系优先序：先有色相、再中性（主 雾×蓝 → 辅 鎏×金 → 辅 莫兰迪×红） */
var COLORD=["鎏","莫兰迪","马卡龙","棉花糖闪","玉","雾","象牙","高级"];

/* ---------- 预选兜底（数据区缺值 → 补首选，面板不出现空槽） ---------- */
var DEFV={"袖长":"长袖","廓形":"修身","领型":"圆领","开合":"敞开","闭合":"纽扣","连款":"连体裤",
  "上衣款":"衬衫","内搭款":"背心","下长":"长","下版":"直筒","下款":"牛仔裤",
  "筒高":"低帮","跟型":"平底","头型":"圆头","鞋款":"帆布鞋",
  "材质":"棉","材质内":"棉","光泽":"哑光","颜色效果":"无","纹理":"无","图案":"无","做工":"无",
  "头饰":"无","腰饰":"无","配饰":"无","袜子":"中筒袜"};
var DEFC={"上衣":{系:"雾",色:"蓝"},"下衣":{系:"玉",色:"白"},"内搭":{系:"象牙",色:"白"},
  "鞋":{系:"无",色:"白"},"连体":{系:"鎏",色:"黑"}};
function seedPart(si,pk,rows,obj){
  rows.forEach(function(row){row.forEach(function(f){
    if(f[1]==="@颜色"){
      if(!colsOf(obj).length){var c=DEFC[pk]||{系:"雾",色:"蓝"};obj["颜色"]=[{系:c.系,色:c.色}];}
      return;
    }
    f[1].forEach(function(a){
      var ax=isArr(a)?a[0]:a, dk=isArr(a)?a[1]:a, mx=maxOf(ax), cur=obj[dk];
      if(mx<=1){
        if(cur===undefined||cur===null||cur===""||isArr(cur))obj[dk]=DEFV[ax]||(AX[ax]||[""])[0]||"";
      }else{
        var arr=asList(cur).filter(function(x){return x!==""&&x!=null;});
        if(!arr.length)arr=[DEFV[ax]||(AX[ax]||[""])[0]||""];
        obj[dk]=arr;
      }
    });
  });});
}
function seedSuit(si){
  var s=suitOf(si);
  DEF.forEach(function(d){
    if(!d.show(s))return;
    seedPart(si,d.k,d.rows,s[d.k]||(s[d.k]={}));
  });
  var ac=s.配件||(s.配件={});
  ACC.forEach(function(a){if(ac[a]===undefined||ac[a]===null||ac[a]==="")ac[a]=DEFV[a]||"无";});
}
function seedAll(){DATA.套.forEach(function(s,si){if(!s.折)seedSuit(si);});}

/* ---------- 颜色组（色系 × 色，上限取 MAXS.色系） ---------- */
function colsOf(obj){
  if(isArr(obj["颜色"]))return obj["颜色"];
  var xs=asList(obj["色系"]).filter(function(x){return x&&x!=="无";});
  var c=obj["色"]||"";
  var out=xs.length?xs.map(function(x){return {系:x,色:c};}):(c?[{系:"无",色:c}]:[]);
  obj["颜色"]=out;
  return out;
}
function colsAt(key,obj){
  return isArr(S.pick[key])?S.pick[key]:colsOf(obj);
}
function colName(c){
  if(!c)return "";
  var x=(c.系&&c.系!=="无")?c.系:"";
  return x+(c.色||"");
}

/* ---------- 值槽 ---------- */
function slotHTML(si,pk,ax,dk,obj){
  dk=dk||ax;
  var key=keyOf(si,pk,dk);
  var v=(S.pick[key]!==undefined)?S.pick[key]:obj[dk];
  var mx=maxOf(ax);
  if(mx<=1){
    var one=(v===undefined||v===null||v==="")?"":String(v);
    return '<span class="ljSV" onclick="LJ.pop(this,\''+key+'\',\''+esc(ax)+'\',1,-1)" title="点击换选">'+(one?esc(one):"—")+'</span>';
  }
  var arr=asList(v);
  if(!arr.length)
    return '<span class="ljSV" onclick="LJ.pop(this,\''+key+'\',\''+esc(ax)+'\','+mx+',0)" title="点击选择">—</span>'
      +'<span class="ljAdd" onclick="LJ.add(\''+key+'\',\''+esc(ax)+'\','+mx+')" title="增加一个换选项">＋</span>';
  var h="";
  var _dz=(String(ax).indexOf('做工')===0);
  arr.forEach(function(x,i){
    var _sv='<span class="ljSV" onclick="LJ.pop(this,\''+key+'\',\''+esc(ax)+'\','+mx+','+i+')" title="点击换选">'+(x===""?"—":esc(x))+'</span>';
    if(_dz)h+='<span class="ljIt"><span class="ljDice'+(i?' gap':'')+'" onclick="LJ.reItem(\''+key+'\',\''+esc(ax)+'\','+i+')" title="随机换这一项">'+ICO_IT+'</span>'+_sv+'</span>';
    else h+=_sv;
    /* 首项右边固定一个按钮位：未满＝＋；到上限＝变 －（每项都带 －） */
    if(i===0&&arr.length<mx){
      h+='<span class="ljAdd" onclick="LJ.add(\''+key+'\',\''+esc(ax)+'\','+mx+')" title="增加一个换选项">＋</span>';
    }else{
      h+='<span class="ljRm" onclick="LJ.rm(\''+key+'\','+i+')" title="移除这一项">－</span>';
    }
  });
  return h;
}

function colorHTML(si,pk,obj){
  var key=keyOf(si,pk,"颜色"), mx=(MAXS["色系"]||3);
  var arr=colsAt(key,obj).slice();
  if(!arr.length){
    return '<span class="ljSV" onclick="LJ.newC(\''+key+'\','+mx+')" title="加一组颜色">—</span>';
  }
  var h="";
  arr.forEach(function(c,i){
    var s1=(c&&c.系)?c.系:"";
    var s2=(c&&c.色)?c.色:"";
    if(i)h+='<span class="ljSep">/</span>';
    h+='<span class="ljGl">'+(i===0?"主":"辅")+'</span>';
    h+='<span class="ljSV" onclick="LJ.popC(this,\''+key+'\',\'色系\','+i+')" title="换色系">'+(s1?esc(s1):"—")+'</span>';
    h+='<span class="ljX">×</span>';
    h+='<span class="ljSV" onclick="LJ.popC(this,\''+key+'\',\'色\','+i+')" title="换色名">'+(s2?esc(s2):"—")+'</span>';
    if(i===0&&arr.length<mx){ h+='<span class="ljAdd" onclick="LJ.newC(\''+key+'\','+mx+')" title="增加一组颜色">＋</span>'; }
    else h+='<span class="ljRm" onclick="LJ.rmC(\''+key+'\','+i+')" title="移除这一组">－</span>';
  });
  return h;
}

/* ---------- 渲染 ---------- */
function rowsHTML(si,pk,rows,obj){
  var h="";
  rows.forEach(function(row){
    h+='<div class="ljSRow">';
    row.forEach(function(f){
      var tag=f[0], axes=f[1];
      h+='<span class="ljFld"><span class="ljSL">'+tag+'：</span>';
      if(axes==="@颜色"){
        h+=colorHTML(si,pk,obj);
      }else{
        axes.forEach(function(a,i){
          var ax=isArr(a)?a[0]:a, dk=isArr(a)?a[1]:a;
          if(i)h+='<span class="ljX">×</span>';
          h+=slotHTML(si,pk,ax,dk,obj);
        });
      }
      h+='</span>';
    });
    h+='</div>';
  });
  return h;
}

/* 行首骰子（白名单 · 只摇本行）：版型/材质/光泽/做工/头饰 */
var ROW_DICE=['版型','材质','光泽','做工','头饰'];
function decorateRows(){
  if(!bd)return;
  var sls=bd.querySelectorAll('.ljSL'),i;
  for(i=0;i<sls.length;i++){
    var sl=sls[i];
    if(sl.querySelector('.ljIcoL'))continue;
    var t=String(sl.textContent||'').replace(/[：:]\s*$/,'').trim();
    if(ROW_DICE.indexOf(t)<0)continue;
    (function(sl,t){
      var ico=document.createElement('span');
      ico.className='ljIco ljIcoL';
      ico.title='摇换本行（'+t+' · 只动这一行）';
      ico.innerHTML=ICO_GD;
      ico.onclick=function(e){if(e&&e.stopPropagation)e.stopPropagation();LJ.reRow(sl.closest('.ljSRow')||sl.parentNode);};
      /* 骰子放进标签内部（不进父容器）→ 不论父级是 inline-block 还是 flex、有没有 gap，
         骰子→文字永远 3px、基线对齐，三面板同一口径 */
      sl.insertBefore(ico,sl.firstChild);
    })(sl,t);
  }
}
function render(){
  var h='';
  DATA.套.forEach(function(s,si){
    var nm=s.名||(String.fromCharCode(65+si)+'套');
    if(s.折){
      h+='<div class="ljFold"><span class="ljNm">'+esc(nm)+'</span><span class="ljFS">｜'+esc(DATA.角色)+' · 已删减</span>';
      h+='<span class="ljCorner"><span class="ljIco" onclick="LJ.fold('+si+')" title="恢复该套">'+ICO_BACK+'</span></span></div>';
      return;
    }
    h+='<div class="ljItem">';
    /* 基础信息置顶：标题行右端＝卡最右上角（⟳ 整卡随机 ／ － 删减本套） */
    h+='<div class="ljGRp">基础信息<span class="ljCorner">';
    h+='<span class="ljIco" onclick="LJ.autoCard('+si+')" title="整卡随机（只换本套）">'+ICO_RND+'</span>';
    h+='<span class="ljIco" onclick="LJ.fold('+si+')" title="删减该套（可恢复）">'+ICO_MINUS+'</span>';
    h+='</span></div>';
    /* 第一行：角色名 ／ A套 ／ 场次：简述（皆为信息 · 非交互 · 同色） */
    h+='<div class="ljMeta"><span class="ljNm">'+esc(DATA.角色)+'</span><span class="ljNm">'+esc(nm)+'</span>';
    h+='<span class="ljScn2">场次 '+(s.场次||"?")+'/'+(s.场次总||"?")+'：'+esc(s.简述||"")+'</span></div>';
    /* 第二行：风格（B4 带入 · 纯信息）＋ 套装名（虚线只贴字 · 可改） */
    h+='<div class="ljMeta"><span class="ljSty"><span class="ljStl">风格</span>'+esc(s.风格||DATA.风格||"未定")+'</span>';
    h+='<span class="ljSet" contenteditable="true" spellcheck="false" onblur="LJ.setName('+si+',this.innerText)" title="点改套装名">'+esc(s.套用名||"未命名套装")+'</span></div>';
    /* 类型＝勾选项（单选） */
    h+='<div class="ljSRow"><span class="ljFld"><span class="ljSL">类型：</span>';
    TYPES.forEach(function(t){
      h+='<span class="ljMini'+(s.类型===t?' on':'')+'" onclick="LJ.setType('+si+',\''+t+'\')" title="点击设为该类型"><span class="ljBx"></span>'+t+'</span>';
    });
    h+='</span></div>';
    /* 各部件：标题恒在；开关＝展开／收起内容（不是让整块消失） */
    DEF.forEach(function(d){
      if(!d.show(s))return;
      var st=(s[d.k]||(s[d.k]={}));
      var on=d.toggle?!!s[d.toggle]:true;
      h+='<div class="ljGRp">'+d.name;
      if(d.toggle)h+='<span class="ljSw'+(on?' on':'')+'" onclick="LJ.tog('+si+',\''+d.toggle+'\')" title="'+(on?'关（收起内容）':'开（展开内容）')+'"><i></i></span>';
      h+='</div>';
      if(d.toggle&&!on)return;
      h+=rowsHTML(si,d.k,d.rows,st);
    });
    /* 配件：五项同一行 */
    var ac=s.配件||(s.配件={头饰:"无",挂件:"无",腰饰:"无",配饰:"无",袜子:"无"});
    h+='<div class="ljGRp">配件</div><div class="ljSRow">';
    ACC.forEach(function(a){
      if(ac[a]===undefined)ac[a]="无";
      h+='<span class="ljFld"><span class="ljSL">'+a+'：</span>'+slotHTML(si,"配件",a,a,ac)+'</span>';
    });
    h+='</div>';
    h+='</div>';
  });
  bd.innerHTML=h;
  decorateRows();
  var ok=document.getElementById("okb");
  if(!ok)return;
  if(S.sent){ok.innerHTML=ICO_OK+'<span>已提交</span>';ok.classList.remove("gold");ok.style.opacity=".55";}
  else{ok.innerHTML=ICO_OK+'<span>确认</span>';ok.classList.remove("gold");ok.style.opacity="";}
}

/* ---------- 弹层（单列 8 项 → 更多 → 两栏 · 宽度按内容实测） ---------- */
var POP={el:null,key:null,ax:null,mx:0,idx:-1,mode:"a",obj:null,cur:null,cat:0,wide:false};
var _MW=null;
function measW(txt,fs,ff){
  if(!_MW){_MW=document.createElement('span');_MW.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;pointer-events:none';document.body.appendChild(_MW);}
  _MW.style.fontSize=fs+'px';_MW.style.fontFamily=ff;_MW.textContent=txt;return _MW.offsetWidth;
}
function placePop(el){
  if(!el||!el.getBoundingClientRect)return;
  if(!document.contains(el))el=ROOT;
  var r=el.getBoundingClientRect(),pr=ROOT.getBoundingClientRect();
  var W=pop.offsetWidth,H=pop.offsetHeight;
  var L=r.left-pr.left;
  if(L+W>ROOT.clientWidth-8)L=Math.max(8,ROOT.clientWidth-W-10);
  pop.style.left=L+'px';
  var T=r.bottom-pr.top+6;
  if(T+H>ROOT.clientHeight-8){
    var up=r.top-pr.top-H-6;
    T=(up>=8)?up:Math.max(8,ROOT.clientHeight-H-8);
  }
  if(T+H>ROOT.clientHeight-8)T=Math.max(8,ROOT.clientHeight-H-8);
  pop.style.top=T+'px';
}
/* 两栏尺寸：左栏 5 字宽 ／ 右栏 10 字宽（超字按实测放宽 · 滚条不计入）；高＝8 项 */
function fitWide(){
  if(!pop.classList.contains('wide'))return;
  var L=document.getElementById('ljPopL'),C=pop.querySelector('.ljCats');
  if(!L||!C)return;
  var elO=L.querySelector('.ljPc'),elC=C.querySelector('.ljCat');
  var fsO=elO?parseFloat(getComputedStyle(elO).fontSize):12.5;
  var fsC=elC?parseFloat(getComputedStyle(elC).fontSize):11.5;
  var ff=getComputedStyle(pop).fontFamily||'sans-serif';
  var wO=10*fsO,wC=5*fsC;
  [].forEach.call(L.querySelectorAll('.ljPc'),function(e){if(e.querySelector('input'))return;wO=Math.max(wO,measW(e.textContent,fsO,ff));});
  [].forEach.call(C.querySelectorAll('.ljCat'),function(e){wC=Math.max(wC,measW(e.textContent,fsC,ff));});
  var WC=Math.ceil(wC)+14,WO=Math.ceil(wO)+16;
  if(WC+WO+2>320)WO=Math.max(96,320-2-WC);
  C.style.width=WC+'px';L.style.width=WO+'px';pop.style.width=(WC+WO+2)+'px';
}
function openPopAt(el,html,wide){
  POP.el=el||POP.el;
  pop.innerHTML=html;
  pop.classList.toggle('wide',!!wide);
  pop.classList.toggle('pickone',!wide);
  pop.classList.add('on');
  POP.wide=!!wide;
  fitWide();
  placePop(POP.el);
}
function closePop(){pop.classList.remove('on');}

/* 一级单列＝**只放推荐项**（与两栏左栏 `推荐` 同一份数据）；**全池只在两栏**（点 `更多...` 进） */
function oneList(ax){ return recList(ax); }
function popCur(){ return POP.cur!==null?POP.cur:valOf(POP.key); }
function curOn(v){
  var cur=popCur();
  return isArr(cur)?cur.indexOf(v)>=0:String(cur)===String(v);
}
function itemHTML(v){
  return '<div class="ljPc'+(curOn(v)?' on':'')+'" onclick="LJ.choose(\''+String(v).replace(/'/g,"\\'")+'\')"><span>'+esc(v)+'</span></div>';
}
/* 推荐（单列 ／ 两栏 `推荐` 共用）：`REC[轴]` → 色组两轴走 `COLREC` 配色；
   只有该轴没数据才兜底「当前值 ＋ 池前几项」，❌ 不拿池项凑数冒充推荐。
   当前值在推荐内才置顶；不在推荐内不进推荐栏（右栏它所属的类里有高亮）。上限 8。 */
function recList(ax){
  var pool=AX[ax]||[],cur=asList(popCur()).filter(function(x){return typeof x==="string"&&x;}),out=[];
  if(POP.mode==="c"&&ax==="色系"){out=Object.keys(COLREC).filter(function(v){return pool.indexOf(v)>=0;});}
  else if(POP.mode==="c"&&ax==="色"){
    var g=(colsAt(POP.key,POP.obj)||[])[POP.idx]||{},sx=g.系||"";
    out=(COLREC[sx]||[]).filter(function(v){return pool.indexOf(v)>=0;});
  }
  else{(REC[ax]||[]).forEach(function(v){if(pool.indexOf(v)>=0&&out.indexOf(v)<0)out.push(v);});}
  if(out.length){cur.forEach(function(v){var i2=out.indexOf(v);if(i2>0){out.splice(i2,1);out.unshift(v);}});}
  else{
    out=cur.slice();
    pool.forEach(function(v){if(out.length<8&&v!=="无"&&out.indexOf(v)<0)out.push(v);});
  }
  return out.slice(0,8);
}
function catList(){
  var g=GRP[POP.ax]||[],out=[{name:"推荐",items:recList(POP.ax)}];
  if(g.length){g.forEach(function(c){out.push({name:c[0],items:c[1]});});}
  else out.push({name:"全部",items:AX[POP.ax]||[]});
  return out;
}
function catHTML(){ return catList().map(function(g,i){return '<div class="ljCat'+(POP.cat===i?' on':'')+'" onclick="LJ.gpCat('+i+')">'+esc(g.name)+'</div>';}).join(''); }
function catItems(){ var G=catList(),g=G[POP.cat]||G[0];return (g.items||[]).map(itemHTML).join(''); }
function inpHTML(){ return '<div class="ljPc" style="padding:3px 9px"><input id="e2in" class="ljIn" placeholder="自定义…（回车确定）" onkeydown="if(event.key===\'Enter\'){event.preventDefault();LJ.cust(this.value);}"></div>'; }
function drawOne(el){
  var list=oneList(POP.ax);
  var html='<div class="ljColOne"><div class="ljOpts" id="ljPopL">'+list.map(itemHTML).join('')+'</div><div class="ljFixOne">';
  if((AX[POP.ax]||[]).length>list.length)html+='<div class="ljPc ljMore" onclick="LJ.gmore()">更多...</div>';
  html+=inpHTML()+'</div></div>';
  openPopAt(el,html,false);
}
function drawWide(el){
  var html='<div class="ljSplit"><div class="ljCats">'+catHTML()+'</div><div class="ljOpts" id="ljPopL">'+catItems()+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="LJ.gone()" title="收回单列">收起</div>'+inpHTML()+'</div>';
  openPopAt(el,html,true);
}

/* ── 回传＝指针消息（与 B5 同源 · 2026-11-15）：全文写剪贴板 + 存 <面板>_回传.txt，消息只发一行指针 ── */
var _Q=null,_H='',_N=0,_I=0;
function hasPending(){return false;}
function sendPending(){return 0;}
function ljFp(t){var h=2166136261;for(var i=0;i<t.length;i++){h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;}return ('0000000'+h.toString(16)).slice(-8);}
function ljCopy(t){
  var ok=false,ta=document.createElement('textarea');
  try{ta.value=t;ta.setAttribute('readonly','');ta.style.cssText='position:absolute;left:-9999px;top:0';document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,t.length);ok=document.execCommand('copy');}catch(e){ok=false;}
  if(ta.parentNode)ta.parentNode.removeChild(ta);
  if(!ok){try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t);ok=true;}}catch(e){}}
  return ok;
}
function ljSave(t,nm){
  try{var b=new Blob([t],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');
  a.href=URL.createObjectURL(b);a.download=nm;document.body.appendChild(a);a.click();document.body.removeChild(a);
  setTimeout(function(){URL.revokeObjectURL(a.href);},1500);}catch(e){}
}
function ljSay(m){
  var g=(typeof window!=='undefined')?window.__ljSend:null;
  if(typeof g==='function'){try{return g(m);}catch(e){}}
  if(typeof sendPrompt==='function'){try{sendPrompt(m);return true;}catch(e){}}
  return false;
}
/* 面板名（用于回传文件名）：从 head 标签取「领域」段，如 【剧本·确认】→ 剧本 */
function ljTag(head){var s=String(head||'回传').replace(/^【/,'');var i=s.indexOf('】');if(i>=0)s=s.slice(0,i);return s.split('·')[0]||'回传';}
function sendChunks(head,lines){
  var arr=(lines||[]).map(function(x){return String(x==null?'':x);});
  if(!arr.length)return 0;
  var t=head+'\n'+arr.join('\n');
  var nm=ljTag(head)+'_回传.txt';
  var ok=ljCopy(t);ljSave(t,nm);
  var msg=head+'#'+ljFp(t)+' · '+t.length+'字 · 全文＝'+(ok?'剪贴板／':'')+nm;
  var sent=ljSay(msg);
  if(!sent){try{if(typeof toast==='function')toast('未能自动发送 · 请把这条发我：'+msg);}catch(e){}}
  return 1;
}
function toast(t){var e=document.getElementById('tst');if(!e)return;e.textContent=t;e.classList.add('on');clearTimeout(e._h);e._h=setTimeout(function(){e.classList.remove('on');},2200);}
function sendChunk(txt){
  var nl=txt.indexOf("\n");
  var head=nl<0?txt:txt.slice(0,nl), body=nl<0?"":txt.slice(nl+1);
  if(!body){ljSay(txt);return 0;}
  return sendChunks(head,body.split("\n"));
}

/* ── 撤销（Ctrl+Z · u0 4.9）：快照＝DATA.套 ＋ S.pick ── */
var UNDO=[];
function snapAll(){return JSON.stringify({t:DATA.套,p:S.pick});}
function pushUndo(){if(S.sent)return;try{UNDO.push(snapAll());}catch(e){return;}if(UNDO.length>30)UNDO.shift();}
function undo(){
  if(S.sent)return;
  if(!UNDO.length)return;
  var x;try{x=JSON.parse(UNDO.pop());}catch(e){return;}
  DATA.套=x.t;S.pick=x.p;S.done=false;
  closePop();render();
}
document.addEventListener('keydown',function(e){
  if(!(e.ctrlKey||e.metaKey))return;
  if(String(e.key).toLowerCase()!=='z')return;
  var ae=document.activeElement;
  if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'||ae.getAttribute('contenteditable')==='true'))return;
  e.preventDefault();undo();
});
/* ---------- 交互 ---------- */
var LJ={
  pop:function(el,key,ax,mx,idx){
    if(S.sent)return;
    POP.mode="a";POP.el=el;POP.key=key;POP.ax=ax;POP.mx=mx;POP.idx=(idx===undefined?-1:idx);
    POP.obj=objOf(key);POP.cur=null;POP.cat=0;   /* 两栏第一行恒为「推荐」 */
    drawOne(el);
  },
  popC:function(el,key,sub,i){
    if(S.sent)return;
    var obj=objOf(key),arr=colsAt(key,obj);
    POP.mode="c";POP.el=el;POP.key=key;POP.ax=sub;POP.mx=1;POP.idx=i;
    var _dk=(sub==="色系")?"系":sub;
    POP.obj=obj;POP.cur=(arr[i]&&arr[i][_dk])?arr[i][_dk]:null;POP.cat=0;   /* 两栏第一行恒为「推荐」 */
    drawOne(el);
  },
  gmore:function(){ drawWide(POP.el||pop); },
  gone:function(){ drawOne(POP.el||pop); },
  gpCat:function(i){
    POP.cat=i;
    var L=document.getElementById('ljPopL');
    if(L){L.innerHTML=catItems();L.scrollTop=0;}
    var cs=pop.querySelectorAll('.ljCat');
    for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===i?' on':'');
    fitWide();placePop(POP.el);
  },
  choose:function(v){pushUndo();
    var key=POP.key;
    if(POP.mode==="c"){
      var arr=colsAt(key,POP.obj).slice();
      if(!arr[POP.idx])arr[POP.idx]={系:"",色:""};
      arr[POP.idx][POP.ax==="色系"?"系":"色"]=v;
      S.pick[key]=arr;
    }else if(POP.mx<=1){
      S.pick[key]=v;
    }else{
      var a=asList(valOf(key)).slice();
      /* 空行（无值）：直接放第一格 */
      if(!a.length)a=[""];
      if(POP.idx>=0&&POP.idx<a.length&&a[POP.idx]!==v)a[POP.idx]=v;
      else if(POP.idx>=0&&POP.idx<a.length&&a[POP.idx]===v&&a.length>1)a.splice(POP.idx,1);
      else if(a.indexOf(v)<0){if(a.length>=POP.mx)a.shift();a.push(v);}
      S.pick[key]=normNone(a,v);
    }
    closePop();render();
  },
  cust:function(v){pushUndo();
    v=String(v||"").trim();if(!v)return;
    var key=POP.key;
    if(POP.mode==="c"){
      var arr=colsAt(key,POP.obj).slice();
      if(!arr[POP.idx])arr[POP.idx]={系:"",色:""};
      arr[POP.idx][POP.ax==="色系"?"系":"色"]=v;
      S.pick[key]=arr;
    }else if(POP.mx<=1){
      S.pick[key]=v;
    }else{
      var a=asList(valOf(key)).slice();
      if(POP.idx>=0&&POP.idx<a.length)a[POP.idx]=v;
      else{if(a.length>=POP.mx)a.shift();a.push(v);}
      S.pick[key]=normNone(a,v);
    }
    closePop();render();
  },
  /* ＋＝直接加一个「有内容」的换选项（取池里第一个未用的，不是 —） */
  add:function(key,ax,mx){pushUndo();
    var p=String(key).split("|");
    if(S.sent)return;
    var a=asList(valOf(key)).filter(function(x){return x!=="无";}).slice();
    if(a.length>=mx)return;
    var pool=AX[ax]||[],nx="";
    for(var i=0;i<pool.length;i++){if(pool[i]!=="无"&&a.indexOf(pool[i])<0){nx=pool[i];break;}}
    if(!nx){for(var j=0;j<pool.length;j++){if(pool[j]!=="无"){nx=pool[j];break;}}}
    a.push(nx);
    S.pick[key]=a;
    closePop();render();
  },
  /* －跟在每个追加项后面（首项无 －）：删掉那一条 */
  /* 单项轮换：① 推荐项里没轮过的 → ② 推荐轮完换池项 → ③ 全轮完重来（按槽位记） */
  /* 只改数据不渲染（行级随机复用） */
  reItemValue:function(key,ax,i){
    var raw=valOf(key);
    var isMulti=Object.prototype.toString.call(raw)==='[object Array]';
    var a=asList(raw).slice();
    var idx=(i<0)?0:i;
    if(idx>=a.length)return false;
    var cur=a[idx],cand=[],j,v;
    var rec=(REC[ax]&&REC[ax].length)?REC[ax]:[];
    var pool=AX[ax]||[];
    S.rot=S.rot||{};
    var used=S.rot[key]||(S.rot[key]=[]);
    var ok=function(x){return x&&x!=='无'&&x!==cur&&a.indexOf(x)<0&&used.indexOf(x)<0;};
    cand=rec.filter(ok);
    if(!cand.length)cand=pool.filter(ok);
    if(!cand.length){
      used.length=0;
      cand=rec.filter(function(x){return x&&x!=='无'&&x!==cur&&a.indexOf(x)<0;});
      if(!cand.length)cand=pool.filter(function(x){return x&&x!=='无'&&x!==cur;});
    }
    if(!cand.length)return false;
    var nv=cand[Math.floor(Math.random()*cand.length)];
    used.push(nv);
    if(isMulti){a[idx]=nv;S.pick[key]=a;}else{S.pick[key]=nv;}
    return true;
  },
  reItem:function(key,ax,i){pushUndo();
    if(S.sent)return;
    if(!this.reItemValue(key,ax,i)){toast('没有其它可换项');return;}
    closePop();render();
  },
  /* 行首骰子：只摇本行（收集本行所有 pop 槽，逐个换完再渲染一次） */
  reRow:function(scope){
    if(S.sent||!scope)return;
    var svs=scope.querySelectorAll('.ljSV'),list=[],cols=[],i,m,j;
    for(i=0;i<svs.length;i++){
      var oc=svs[i].getAttribute('onclick')||'';
      if((m=/LJ\.pop\(this,'([^']+)','([^']+)',\d+,(-?\d+)\)/.exec(oc))){list.push([m[1],m[2],+m[3]]);continue;}
      /* 颜色组：色系／色两轴走 popC，同一个 key 只整组重配一次 */
      if((m=/LJ\.popC\(this,'([^']+)','(?:色系|色)',\d+\)/.exec(oc))){
        var dup=false;
        for(j=0;j<cols.length;j++)if(cols[j]===m[1]){dup=true;break;}
        if(!dup)cols.push(m[1]);
      }
    }
    if(!list.length&&!cols.length)return;
    pushUndo();
    for(i=0;i<list.length;i++)this.reItemValue(list[i][0],list[i][1],list[i][2]);
    for(i=0;i<cols.length;i++)this.reColor(cols[i]);
    closePop();render();
  },
  /* 整组重配色（与整卡随机 fillC 同口径）：组数不变，每组的色系换一个、色名取该色系推荐色 */
  reColor:function(key){
    var obj=objOf(key),arr=colsAt(key,obj).slice(),n=arr.length||1,out=[],used={},i;
    var rnd=function(a){return a[Math.floor(Math.random()*a.length)];};
    var all=(AX["色系"]||[]).filter(function(x){return x&&x!=="无";});
    if(!all.length)return;
    for(i=0;i<n;i++){
      var tries=0,sx="";
      do{sx=rnd(all);tries++;}while((used[sx]||(arr[i]&&arr[i].系===sx))&&tries<14);
      used[sx]=1;
      var rec=(COLREC[sx]||[]).filter(function(x){return x&&x!==(arr[i]?arr[i].色:"");});
      out.push({系:sx,色:(rec.length?rnd(rec):rnd((AX["色"]||["黑"])))});
    }
    S.pick[key]=out;
  },
  rm:function(key,i){pushUndo();
    var p=String(key).split("|");
    if(S.sent)return;
    var a=asList(valOf(key)).slice();
    if(a.length<=1)return;
    if(i===undefined||i<0||i>=a.length)i=a.length-1;
    a.splice(i,1);
    S.pick[key]=a;
    closePop();render();
  },
  /* 颜色＋：追加一组「未用色系 ＋ 该色系推荐色」 */
  newC:function(key,mx){pushUndo();
    var p=String(key).split("|");
    if(S.sent)return;
    var a=colsAt(key,objOf(key)).slice();
    if(a.length>=mx)return;
    var used=a.map(function(c){return c&&c.系;});
    var xs=COLORD.filter(function(x){return used.indexOf(x)<0;});
    if(!xs.length)xs=(AX["色系"]||[]).filter(function(x){return x!=="无";});
    var sx=xs.length?xs[0]:((AX["色系"]||[])[0]||"");
    var rec=COLREC[sx]||[];
    a.push({系:sx,色:rec[0]||((AX["色"]||[])[0]||"")});
    S.pick[key]=a;
    closePop();render();
  },
  rmC:function(key,i){pushUndo();
    var p=String(key).split("|");
    if(S.sent)return;
    var a=colsAt(key,objOf(key)).slice();
    if(a.length<=1)return;
    if(i===undefined||i<0||i>=a.length)i=a.length-1;
    a.splice(i,1);
    S.pick[key]=a;
    closePop();render();
  },
  /* 整卡随机（只换本套 · 对应 E1 卡片右上角的 ⟳） */
  autoCard:function(si){pushUndo();
    if(S.sent)return;
    var s=suitOf(si);
    if(s.折)return;
    var rnd=function(a){return a[Math.floor(Math.random()*a.length)];};
    function fill(key,ax){
      var mx=maxOf(ax),cur=valOf(key),pool=(REC[ax]&&REC[ax].length)?REC[ax]:(AX[ax]||[""]);
      if(mx<=1){
        var nx=rnd(pool);
        if(pool.length>1&&nx===cur)nx=pool[(pool.indexOf(cur)+1)%pool.length];
        S.pick[key]=nx;return;
      }
      var n=1+Math.floor(Math.random()*Math.max(mx-1,1));n=Math.min(n,2);
      var out=[];
      while(out.length<n){var x=rnd(pool);if(out.indexOf(x)<0)out.push(x);}
      S.pick[key]=out;
    }
    function fillC(pk){
      var key=keyOf(si,pk,"颜色"),mx=(MAXS["色系"]||3);
      var n=Math.min(1+Math.floor(Math.random()*Math.max(mx-1,1)),2),out=[],used={};
      while(out.length<n){
        var sx=rnd(AX["色系"]);if(sx==="无"||used[sx])continue;used[sx]=1;
        var rec=COLREC[sx]||[];
        out.push({系:sx,色:rec.length?rec[Math.floor(Math.random()*rec.length)]:rnd(AX["色"])});
      }
      S.pick[key]=out;
    }
    DEF.forEach(function(d){
      if(!d.show(s))return;
      var on=d.toggle?!!s[d.toggle]:true;
      if(d.toggle&&!on)return;
      d.rows.forEach(function(row){row.forEach(function(f){
        if(f[1]==="@颜色"){fillC(d.k);return;}
        f[1].forEach(function(a){
          var ax=isArr(a)?a[0]:a, dk=isArr(a)?a[1]:a;
          fill(keyOf(si,d.k,dk),ax);
        });
      });});
    });
    ACC.forEach(function(a){fill(keyOf(si,"配件",a),a);});
    closePop();render();
  },
  /* 删减 / 恢复该套（对应 E1 卡片右上角的 －） */
  fold:function(si){pushUndo();
    if(S.sent)return;
    var s=suitOf(si);
    s.折=!s.折;
    closePop();render();
  },
  setName:function(si,v){
    suitOf(si).套用名=String(v==null?"":v).replace(/\s+/g," ").trim();
  },
  setType:function(si,t){pushUndo();
    if(S.sent)return;
    var s=suitOf(si);s.类型=t;
    ["连体","上衣","内搭","下衣","鞋"].forEach(function(k){if(!s[k])s[k]={};});
    if(!s.配件)s.配件={头饰:"无",挂件:"无",腰饰:"无",配饰:"无",袜子:"无"};
    seedSuit(si);
    closePop();render();
  },
  tog:function(si,k){pushUndo();
    if(S.sent)return;
    var s=suitOf(si);s[k]=!s[k];
    if(s[k]){var d=DEF.filter(function(x){return x.toggle===k;})[0];
      if(d&&d.show(s))seedPart(si,d.k,d.rows,s[d.k]||(s[d.k]={}));}
    closePop();render();
  },
  skip:function(){
    if(S.sent)return;
    if(typeof sendPrompt!=='function'&&typeof ljSay!=='function')return;
    ljSay("【服装卡·跳过】\n说明=不指定服装，由 AI 按风格与剧情自选；B4 角色行保留 AI 优选简述");
    S.sent=true;
  },
  up:function(){
    if(S.sent)return;
    if(typeof sendPrompt!=='function'&&typeof ljSay!=='function')return;
    sendChunk("【服装卡·上一级】回 B4 剧本面板｜按下列当前选中值重渲 B4（保持已选 · 不重置）\n"+buildAll(true));
  },
  confirm:function(){
    if(S.sent)return;
    if(typeof sendPrompt!=='function'&&typeof ljSay!=='function')return;
    if(hasPending()){sendPending();return;}
    S.done=true;
    document.getElementById("moB").innerHTML='<div class="ljOl">'+esc(buildAll(true))+'</div>';
    document.getElementById("ovl").classList.add("on");
  },
  submitAll:function(){
    if(S.sent)return;
    var n=sendChunk(buildAll(true));
    if(hasPending()){document.getElementById("ovl").classList.remove("on");toast('已发 '+n+' 条 · 再点「确认」继续');return;}
    S.sent=true;
    document.getElementById("ovl").classList.remove("on");
    render();
    toast('已提交回传'+(n>1?'（'+n+' 条）':''));
  },
  closeM:function(){document.getElementById("ovl").classList.remove("on");}
};
window.LJ=LJ;

/* 点空白收起（点值／＋／－ 不关） */
document.addEventListener('click',function(e){
  if(!pop.classList.contains('on'))return;
  if(!document.contains(e.target))return;
  if(pop.contains(e.target))return;
  if(e.target.closest&&e.target.closest('.ljSV,.ljAdd,.ljRm,.ljMini,.ljSw'))return;
  closePop();
});
window.addEventListener('resize',function(){closePop();});
bd.addEventListener('scroll',function(){closePop();});

/* 组装回传 */
function buildAll(usePick){
  var L=[];
  L.push("【服装卡·确认】");
  L.push("▪ 角色="+DATA.角色);
  L.push("▪ 风格="+DATA.风格);
  L.push("▪ 套数="+DATA.套.length);
  DATA.套.forEach(function(s,si){
    var C=String.fromCharCode(65+si);
    if(s.折){ L.push(C+"套｜已删减（本期不穿这套）"); return; }
    var head=C+"套｜"+(s.套用名||"未命名套装")+"｜类型="+s.类型;
    head+="｜风格="+(s.风格||DATA.风格||"未定");
    if(s.场次) head+="｜场次="+s.场次+"/"+(s.场次总||"?")+(s.简述?"："+s.简述:"");
    if(s.内搭开!==undefined) head+="｜内搭="+(s.内搭开?"开":"关");
    if(s.鞋开!==undefined) head+="｜鞋子="+(s.鞋开?"开":"关");
    L.push(head);
    function vOf(pk,dk){
      var key=keyOf(si,pk,dk);
      return (usePick&&S.pick[key]!==undefined)?S.pick[key]:((s[pk]||{})[dk]);
    }
    DEF.forEach(function(d){
      if(!d.show(s)) return;
      var on=d.toggle?!!s[d.toggle]:true;
      if(d.toggle&&!on) return;          /* 关＝收起，不回传内容 */
      var parts=[];
      d.rows.forEach(function(row){row.forEach(function(f){
        if(f[1]==="@颜色"){
          var key=keyOf(si,d.k,"颜色");
          var arr=(usePick&&S.pick[key]!==undefined)?S.pick[key]:colsOf(s[d.k]||{});
          var cs=asList(arr).map(colName).filter(function(x){return x;});
          var ek=keyOf(si,d.k,"颜色效果");
          var efx=(usePick&&S.pick[ek]!==undefined)?S.pick[ek]:(s[d.k]||{}).颜色效果;
          if(cs.length)parts.push("颜色 "+cs.map(function(x,i){return (i?"辅色 ":"主色 ")+x;}).join("/")+((efx&&efx!=="无")?"·"+efx:""));
          return;
        }
        f[1].forEach(function(a){
          var ax=isArr(a)?a[0]:a, dk=isArr(a)?a[1]:a;
          if(dk==="颜色效果") return;   /* 已并入「颜色」串 */
          var v=vOf(d.k,dk);
          if(v===undefined||v===""||(isArr(v)&&!v.length)) return;
          if(v==="无"||(isArr(v)&&v.length===1&&v[0]==="无")) return;
          parts.push(dk+" "+(isArr(v)?v.filter(function(x){return x!=="";}).join("/"):v));
        });
      });});
      if(parts.length) L.push("  "+d.name+"："+parts.join(" · "));
    });
    var ac=s.配件||{}, ap=[];
    ACC.forEach(function(a){
      var key=keyOf(si,"配件",a);
      var v=(usePick&&S.pick[key]!==undefined)?S.pick[key]:ac[a];
      if(v&&v!=="无") ap.push(a+" "+v);
    });
    if(!s.鞋开 && (ac.袜子==="无"||!ac.袜子)) ap.push("赤脚");
    L.push("  配件："+(ap.length?ap.join(" · "):"无"));
  });
  return L.join("\n");
}
seedAll();render();
})();
})();
