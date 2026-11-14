/* 自动生成，勿手改：源 ui/B2_项目设计.html
   用法：面板侧 window.LJ_DATA = {...} 后加载本文件 */
(function(){
var CSS = "\nhtml,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{font-family:-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;position:relative;overflow:hidden;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px}\n.ljP *{box-sizing:border-box;margin:0}\n.ljSr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ljHd{padding:48px 16px 10px;display:flex;align-items:center;flex:none}\n.ljTt{font-size:15px;font-weight:500;color:#E8EEF4}\n.ljHc{margin-left:auto;display:flex;gap:6px}\n.ljHb{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:7px;padding:4px 11px;cursor:pointer;transition:.15s;font-family:inherit}\n.ljHb:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljBd{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px}\n.ljFt{display:flex;justify-content:flex-end;gap:8px;padding:11px 16px;border-top:1px solid rgba(255,255,255,.06);flex:none}\n.ljBtn{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#C9D4DE;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:7px;padding:5px 15px;cursor:pointer;transition:.18s;font-family:inherit}\n.ljBtn:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljPri{color:#3EC6D8;border-color:rgba(62,198,216,.55)}\n.ljPri:hover{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n.ljPri.gold{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n.ljOvl{position:absolute;inset:0;background:rgba(8,10,13,.78);display:none;align-items:center;justify-content:center;z-index:50}\n.ljOvl.on{display:flex}\n.ljMod{background:#171C22;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:86%;max-height:76%;display:flex;flex-direction:column;padding:14px 16px}\n.ljMoH{font-size:13.5px;font-weight:500;color:#E8EEF4;margin-bottom:9px}\n.ljMoB{overflow:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:6px}\n.ljOl{font-size:12.5px;color:#9FADB9;background:rgba(255,255,255,.03);border-radius:6px;padding:6px 9px;line-height:1.5}\n.ljMoF{margin-top:10px;display:flex;justify-content:flex-end}\n.ljTst{position:absolute;left:50%;bottom:72px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12.5px;padding:7px 16px;border-radius:8px;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;z-index:60}\n.ljTst.on{opacity:1}\n\n/* ── 区块与小标 ── */\n.ljSec{background:#171C22;border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:12px 14px;margin-bottom:10px;position:relative}\n.ljBox{border:1px solid rgba(255,255,255,.06);border-radius:9px;padding:9px 11px}\n.ljSecH{display:flex;align-items:center;gap:8px;margin-bottom:13px}\n.ljSt{font-size:12px;color:#8A949E;font-weight:400;letter-spacing:.3px;user-select:none;-webkit-user-select:none}\n.ljSt:before{content:\"\";display:inline-block;width:2px;height:10px;background:#3A4550;margin-right:6px;vertical-align:-1px}\n\n/* ── 基础信息：弱信息 · 非交互 ── */\n.ljBi{display:flex;gap:8px;align-items:flex-start;padding:3px 0;line-height:1.65}\n.ljBi+.ljBi{border-top:1px solid rgba(255,255,255,.09);margin-top:5px;padding-top:7px}\n.ljBiL{flex:none;width:56px;font-size:12px;color:#66707A;user-select:none;-webkit-user-select:none}\n.ljBiV{flex:1 1 auto;min-width:0;font-size:12.5px;color:#8A97A3;user-select:text;-webkit-user-select:text}\n\n/* ── 题材转换：一行一组（标 ＋ 勾选项 ＋ 自定义）── */\n.ljOp{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#C9D4DE;cursor:pointer;user-select:none;-webkit-user-select:none;padding:2px 2px;border-radius:4px;transition:color .15s;line-height:18px}\n.ljBx{width:13px;height:13px;border:1.5px solid #66707A;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex:none;transition:background .15s,border-color .15s}\n.ljOp.on .ljBx{background:#3EC6D8;border-color:#3EC6D8}\n.ljOp.on .ljBx:after{content:\"\";width:7px;height:4px;border-left:1.8px solid #0F1317;border-bottom:1.8px solid #0F1317;transform:rotate(-45deg) translate(0,-1px)}\n\n.ljOp.on{color:#E8EEF4}\ninput::placeholder{color:#59636D!important;opacity:1}\n\n/* ── 项目基调（三选一）── */\n.ljTogs{display:flex;gap:16px;align-items:center;padding:2px 0 6px}\n.ljTog{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;color:#9FADB9;cursor:pointer;user-select:none;-webkit-user-select:none}\n.ljTog:hover{color:#3EC6D8}\n.ljTog.on{color:#E8EEF4}\n.ljRad{width:12px;height:12px;border:1.5px solid #66707A;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;flex:none;transition:border-color .15s}\n.ljTog.on .ljRad{border-color:#3EC6D8}\n.ljTog.on .ljRad:after{content:\"\";width:6px;height:6px;border-radius:50%;background:#3EC6D8}\n.ljCard{border:1px solid rgba(255,255,255,.06);border-radius:9px;padding:9px 11px;margin-top:8px}\n.ljCdH{display:flex;align-items:center;gap:8px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:8px}\n.ljCdS{color:#3A4550;font-size:12px;line-height:1}\n/* 卡头副标（系列名 ／ 当期 ／ 当本期）：比主标小一号、明显压暗 */\n.ljCdN{font-size:11.5px;color:#6F7C89;letter-spacing:.2px}\n.ljCdT{font-size:12.5px;font-weight:500;color:#C9D4DE}\n/* ── 命题（三行：`□` 单选 ＋ 自由文本 · 未选行暗且禁写）── */\n.ljPR{display:flex;align-items:center;gap:9px;padding:3px 0}\n.ljPR>.ljOp{flex:none;min-width:0;padding:2px 0;white-space:nowrap}\n.ljPIn{flex:1 1 0;min-width:120px;background:transparent;border:none;border-bottom:1px solid rgba(255,255,255,.20);color:#E8EEF4;font-size:12.5px;line-height:20px;padding:1px 2px;outline:none;font-family:inherit;transition:color .15s,border-color .15s}\n.ljPIn:focus{border-bottom-color:rgba(62,198,216,.6)}\n.ljPIn::placeholder{color:#5E6B78}\n.ljPIn:disabled{color:#5E6B78;-webkit-text-fill-color:#5E6B78;border-bottom-color:rgba(255,255,255,.07);cursor:default}\n/* ── 核心母体 × 冲突模块 × 情绪主核 ── */\n.ljMR{display:flex;align-items:center;flex-wrap:wrap;gap:2px 6px;padding:7px 0 1px;margin-top:5px;border-top:1px dashed rgba(255,255,255,.05)}\n.ljMR>.ljSL{flex:none;font-size:12px;color:#8A97A3;line-height:22px}\n.ljMx{color:#5E6B78;font-size:11px;line-height:22px}\n.ljSltR{display:flex;align-items:flex-start;gap:8px;padding:2px 0;line-height:22px}\n.ljSltL{flex:none;width:56px;font-size:12px;color:#8A97A3;user-select:none;-webkit-user-select:none}\n.ljVals{flex:1 1 auto;min-width:0;display:flex;flex-wrap:wrap;align-items:center;gap:0 2px}\n/* 值＝B4 同款：常态浅字、无底线；hover 才转青 ＋ 出青色虚线（❌ 无底色块） */\n.ljVal{font-size:12.5px;color:#C9D4DE;cursor:pointer;padding:0 2px;border-bottom:1px dashed transparent;transition:.15s;user-select:none;-webkit-user-select:none;line-height:21px}\n.ljVal:hover{color:#3EC6D8;border-bottom-color:rgba(62,198,216,.5)}\n.ljVal.ph{color:#5E6B78}\n/* `＋／－` 与 E 系（E2／E3）同款：`＋` 恒青 15px ／ `－` 灰 12.5px · hover 金 */\n.ljAdd{display:inline-block;color:#3EC6D8;cursor:pointer;padding:0 3px;margin-left:-3px;transition:.15s;user-select:none;-webkit-user-select:none;font-size:15px;line-height:1}\n.ljAdd:hover{color:#D9B75B}\n.ljRm{display:inline-block;color:#6A7683;cursor:pointer;padding:0 3px;margin:0 2px 0 0;transition:.15s;user-select:none;-webkit-user-select:none;font-size:12.5px;line-height:1}\n.ljRm:hover{color:#D9B75B}\n.ljSerG{display:grid;grid-template-columns:1fr 1fr;gap:1px 18px}\n.ljSerR{display:flex;gap:8px;font-size:12px;line-height:1.75;min-width:0}\n.ljSerL{flex:none;width:58px;color:#66707A}\n.ljSerV{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.ljSerV{flex:1 1 auto;min-width:0;color:#9FADB9;user-select:text}\n/* 卡内两栏：左＝该口径的槽 ／ 右＝制式 · 画幅 · 尺寸 */\n.ljTwo{display:grid;grid-template-columns:1.25fr 1fr;gap:0 10px;align-items:start}\n@media (max-width:560px){.ljTwo{grid-template-columns:1fr;gap:0}}\n\n/* ── 弹层（E3 同款）：单列〔AI 推荐项 · 8 项封顶 · 定高 208〕→ `更多...` → 两栏（推荐 ＋ 大类 × 全池）── */\n.ljPop{position:absolute;z-index:45;display:none;box-shadow:0 10px 26px rgba(0,0,0,.5);background:#1B2129;border:1px solid rgba(62,198,216,.35);border-radius:8px;padding:5px;min-width:150px;max-width:330px;max-height:300px;overflow:auto;overscroll-behavior:contain}\n.ljPop.on{display:block}\n.ljPc{display:flex;flex-direction:column;gap:2px;padding:5px 9px;border-radius:5px;cursor:pointer;font-size:12.5px;color:#C9D4DE;white-space:nowrap;box-sizing:border-box}\n.ljPc:hover{background:rgba(62,198,216,.1)}\n.ljPc.on{color:#3EC6D8;background:rgba(62,198,216,.14)}\n/* 单列：先挂 pickone 再定位（否则量到换肤前的矮高 → 误判「下方够」而溢出面板底） */\n.ljPop.pickone{max-height:none}\n.ljColOne{display:flex;flex-direction:column;max-height:none}\n.ljColOne .ljOpts{flex:0 1 auto;min-height:0;max-height:208px;overflow-y:auto;overscroll-behavior:contain;padding:0}\n.ljColOne .ljOpts .ljPc{line-height:16px}\n.ljColOne .ljFixOne{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding-top:2px;margin-top:2px}\n.ljColOne .ljFixOne .ljPc{flex-direction:row;align-items:center;height:26px;padding:0 9px}\n.ljColOne .ljFixOne .ljMore{color:#7E8B99;font-size:11.5px}\n.ljColOne .ljFixOne .ljMore:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljColOne .ljFixOne .ljInp{cursor:text;padding:3px 9px;height:auto}\n.ljColOne .ljFixOne .ljCst{height:auto;padding:3px 2px}\n/* 两栏 */\n.ljPop.wide{min-width:0;max-width:330px;max-height:none;padding:0;overflow:hidden}\n.ljPop.wide.on{display:flex;flex-direction:column;height:268px;max-height:84vh}\n.ljPop.wide .ljSplit{display:flex;flex:1 1 auto;min-height:0;overflow:hidden}\n.ljPop.wide .ljCats{width:54px;flex:0 0 auto;padding:4px;overflow-y:auto;overscroll-behavior:contain;background:rgba(0,0,0,.16);border-right:1px solid rgba(255,255,255,.07);box-sizing:border-box}\n.ljPop.wide .ljCat{font-size:11.5px;color:#7E8B99;height:25px;display:flex;align-items:center;padding:0 3px;border-radius:6px;cursor:pointer;white-space:nowrap;box-sizing:border-box;user-select:none;-webkit-user-select:none}\n.ljPop.wide .ljCat:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljPop.wide .ljCat.on{color:#3EC6D8;background:rgba(62,198,216,.12)}\n.ljPop.wide .ljOpts{width:96px;flex:1 1 auto;min-width:0;padding:4px;overflow-y:auto;overscroll-behavior:contain;box-sizing:border-box}\n.ljPop.wide #ljPopL .ljPc{height:25px;min-height:25px;flex-direction:row;align-items:center;gap:0;padding:0 4px;white-space:nowrap;line-height:1;box-sizing:border-box}\n.ljPop.wide #ljPopL .ljPc.on{background:rgba(62,198,216,.14);color:#3EC6D8}\n.ljPop.wide .ljFix{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding:0 5px 4px}\n.ljPop.wide .ljFix .ljPc{height:26px;flex-direction:row;align-items:center;padding:0 9px;font-size:11.5px;color:#7E8B99;border-radius:5px;cursor:pointer}\n.ljPop.wide .ljFix .ljPc:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljPop.wide .ljFix .ljPc:last-child{color:#7E8B99;cursor:text}\n.ljPop.wide .ljFix .ljPc:last-child:hover{background:transparent;color:#9FADB9}\n.ljPop.wide .ljFix .ljCst{height:26px;padding:0 2px}\n.ljCst{background:transparent;border:none;border-bottom:1px dashed rgba(255,255,255,.22);outline:none;color:#C9D4DE;font-size:12.5px;width:100%;font-family:inherit;padding:3px 2px}\n.ljCst:focus{border-bottom-color:#3EC6D8}\n.ljPop,.ljPop .ljCats,.ljPop .ljOpts{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.20) transparent}\n\n/* 滚动条：渲染期不出条，成形后细条（弹层左右栏同款 · 去箭头按钮） */\n.ljBd,.ljPop,.ljCats,.ljOpts{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar,.ljPop::-webkit-scrollbar,.ljCats::-webkit-scrollbar,.ljOpts::-webkit-scrollbar{width:0;height:0}\n.ljCats::-webkit-scrollbar-button,.ljOpts::-webkit-scrollbar-button{width:0;height:0;display:none;background:transparent}\nhtml.ljReady .ljBd,html.ljReady .ljPop,html.ljReady .ljCats,html.ljReady .ljOpts{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar,html.ljReady .ljPop::-webkit-scrollbar,html.ljReady .ljCats::-webkit-scrollbar,html.ljReady .ljOpts::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb,html.ljReady .ljPop::-webkit-scrollbar-thumb,html.ljReady .ljCats::-webkit-scrollbar-thumb,html.ljReady .ljOpts::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb:hover,html.ljReady .ljPop::-webkit-scrollbar-thumb:hover,html.ljReady .ljCats::-webkit-scrollbar-thumb:hover,html.ljReady .ljOpts::-webkit-scrollbar-thumb:hover{background:rgba(62,198,216,.5)}\nhtml.ljReady .ljBd::-webkit-scrollbar-track,html.ljReady .ljPop::-webkit-scrollbar-track,html.ljReady .ljCats::-webkit-scrollbar-track,html.ljReady .ljOpts::-webkit-scrollbar-track{background:transparent}\nhtml.ljReady .ljCats::-webkit-scrollbar-button,html.ljReady .ljOpts::-webkit-scrollbar-button{width:0;height:0;display:none;background:transparent}\n";
var HTML = "<meta charset=\"utf-8\">\n<!-- ============================================================\n  【B2 · 项目设计】标准组件模板 —— 实现唯一源（UI 规范「B2」的落地实现）\n  使用方式：只替换下方「数据区」（DATA 对象）→ 输出完整代码给 show_widget\n  ❌ 组件代码区一字不改（改交互 = 修改本文件一处，全库生效）\n  🚫 禁止自绘／简化／合并控件：🔒锁定 ／ 自定义 ／ 信息框 ／ 勾选 ／ ＋－ ／ 弹层 缺任一＝违规 → 重读本文件重渲\n  四块：基础信息（热点话题／话题简介 · 弱信息非交互）\n        → 命题（三行：`□` 单选勾选 ＋ 自由文本；核心母体 × 冲突模块 × 情绪主核：\n                核心母体／情绪主核＝单列换选；冲突模块＝单列推荐→`更多...`→两栏（类×子项）＋ `＋／－` 上限 1）\n        → 项目基调（系列／影视／媒体 三选一：`系列卡`＝纯信息 ／ 影视卡 ／ 媒体卡；\n                    卡内两栏＝左 该口径槽 ｜ 右 制式 × 画幅 × 尺寸）\n        → 视觉风格（世界观 11 系 × 子项 · 单列→两栏 ／ 风格 7 类 70 项 · 只 1 项 · 不 ＋－）\n  换选＝两种：\n    · 弹层（B4／E3 同款两级）：点值 → 单列 AI 推荐项（上限 8）→ `更多...` → 两栏（推荐 ＋ 大类 × 全池）＋ `收起`；载体 = 单列全池（池小 · 不出 `更多...`）\n    · 无弹层换选（`ui:'cycle'` · 点一下换下一个 · 只转关联推荐项）：`时长`（随载体）／`画幅`（3 项）／`尺寸`（随画幅）\n  命题＝**单选**（勾选限 1 · 三行写满 ／ 选中那行亮可写 · 未选行暗且 disabled）\n============================================================   📌 本文件内的选项／候选池仅为示例：每期必须按本期材料重写 DATA 区，禁止直接沿用。\n-->\n<div class=\"ljP\">\n\n<h2 class=\"ljSr\">项目设计面板：基础信息 · 命题 · 项目基调 · 视觉风格</h2>\n<div class=\"ljHd\">\n<div class=\"ljTt\">项目设计</div>\n<div class=\"ljHc\">\n<button class=\"ljHb\" onclick=\"LJ.up()\" title=\"返回话题选择门（重选话题）\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V6\"/><path d=\"M6 11l6-6 6 6\"/></svg>上一级</button>\n<button class=\"ljHb\" onclick=\"LJ.skip()\" title=\"AI 按优选完成项目设计 · 直接推进故事本（p3）\">跳过<svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 5l7 7-7 7\"/><path d=\"M13 5l7 7-7 7\"/></svg></button>\n</div>\n</div>\n<div class=\"ljBd\"></div>\n<div class=\"ljFt\">\n<button class=\"ljBtn\" onclick=\"LJ.reset()\" title=\"还原初始呈现（AI 预选态）\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a8 8 0 1 0 2.34-5.66\"/><path d=\"M4 5v4h4\"/></svg>复位</button>\n<button class=\"ljBtn ljPri\" id=\"b2main\" onclick=\"LJ.confirm()\" title=\"采纳当前产出 · 定稿并推进\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7\"/></svg><span id=\"b2mainT\">确认</span></button>\n</div>\n<div class=\"ljOvl\"><div class=\"ljMod\"><div class=\"ljMoH\">回传预览 · 确认后提交 AI</div><div class=\"ljMoB\"></div><div class=\"ljMoF\"><button class=\"ljBtn\" onclick=\"LJ.closeM()\" title=\"收起（返回面板继续调整）\">收起</button><button class=\"ljBtn ljPri\" onclick=\"LJ.submit()\" title=\"将回传内容提交给 AI\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7\"/></svg>提交</button></div></div></div>\n<div class=\"ljTst\"></div>\n<div class=\"ljPop\"></div>\n\n</div>\n\n<!--HA_PREVIEW-->\n<script data-panel=\"B2_项目设计\">\n/* 通用回传预览（与 B5 同款）：字数 ／ 复制全文 ／ 存 .md —— 由 tools/inject_preview.py 注入 */\n(function(){\n var PANEL=(document.currentScript&&document.currentScript.getAttribute('data-panel'))||'面板';\n function ovl(){return document.querySelector('.ljOvl.on');}\n function linesOf(mod){return [].slice.call(mod.querySelectorAll('.ljOl')).map(function(e){\n   return (e.innerText||'').replace(/\\u00a0/g,' ').trim();}).filter(function(x){return x!=='';});}\n function headOf(mod){var h=mod.querySelector('.ljMoH');var t=h?(h.innerText||'').trim():'';return t||('【'+PANEL+'·回传】');}\n function copyTxt(t){\n  function fb(){var ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}document.body.removeChild(ta);return ok;}\n  try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){tip('已复制全文 '+t.length+' 字');},function(){tip(fb()?('已复制全文 '+t.length+' 字'):'复制被拦');});return;}}catch(e){}\n  tip(fb()?('已复制全文 '+t.length+' 字'):'复制被拦');\n }\n function saveMd(t){try{var b=new Blob([t],{type:'text/markdown;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=PANEL+'_回传.md';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},800);tip('已存 '+PANEL+'_回传.md');}catch(e){copyTxt(t);}}\n function tip(s){var d=document.createElement('div');d.textContent=s;d.style.cssText='position:fixed;left:50%;bottom:64px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.4);color:#C9D4DE;font:12px/1.6 -apple-system,PingFang SC,sans-serif;padding:6px 16px;border-radius:8px;z-index:9999';document.body.appendChild(d);setTimeout(function(){d.remove();},1800);}\n function mkBtn(label,fn){var b=document.createElement('button');b.type='button';b.textContent=label;\n  b.style.cssText='background:transparent;border:1px solid rgba(255,255,255,.18);color:#C9D4DE;font:12px/1 -apple-system,PingFang SC,sans-serif;padding:5px 10px;border-radius:6px;cursor:pointer';\n  b.onmouseenter=function(){b.style.borderColor='rgba(62,198,216,.55)';b.style.color='#3EC6D8';};\n  b.onmouseleave=function(){b.style.borderColor='rgba(255,255,255,.18)';b.style.color='#C9D4DE';};\n  b.onclick=fn;return b;}\n function enhance(){\n  var o=ovl();if(!o)return;\n  var mod=o.querySelector('.ljMod')||o;\n  var box=mod.querySelector('.ljMoB');if(!box)return;\n  var lines=linesOf(mod);if(!lines.length)return;\n  var txt=headOf(mod)+'\\n'+lines.join('\\n');\n  var sig=lines.length+':'+txt.length;\n  var bar=mod.querySelector('.haPv');\n  if(!bar){bar=document.createElement('div');bar.className='haPv';\n   bar.style.cssText='display:flex;align-items:center;gap:8px;margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);font:12px/1.6 -apple-system,PingFang SC,sans-serif;color:#8A97A3';\n   var f=mod.querySelector('.ljMoF');\n   if(f)mod.insertBefore(bar,f);else mod.appendChild(bar);}\n  if(bar.getAttribute('data-sig')===sig)return;\n  bar.setAttribute('data-sig',sig);bar.innerHTML='';\n  var info=document.createElement('span');info.textContent='共 '+lines.length+' 行 · '+txt.length+' 字';\n  var sp=document.createElement('span');sp.style.flex='1';\n  bar.appendChild(info);bar.appendChild(sp);\n  bar.appendChild(mkBtn('复制全文',function(){copyTxt(txt);}));\n  bar.appendChild(mkBtn('存 .md',function(){saveMd(txt);}));\n }\n var mo=new MutationObserver(function(){setTimeout(enhance,0);});\n try{mo.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});}catch(e){}\n try{mo.observe(document.documentElement,{subtree:true,childList:true});}catch(e){}\n setTimeout(enhance,300);setTimeout(enhance,1200);\n})();\n\n/* ---------- 指针提交（2026-11-15 · 与 B5 同源） ----------\n   面板把分条消息交给 window.__ljSend（由本块提供），本块在 40ms 内把同一批分条收拢成全文，\n   写剪贴板 + 存 <面板>_回传.txt，只发一行指针【面板·动作】#hash · N字。\n   ⚠️ 不再改写 window.sendPrompt —— 宿主可能在面板加载后才注入，改写会扑空；\n      改为面板显式调用 __ljSend，它在每次调用时才解析当前 sendPrompt。\n   ⚠️ 本段无反斜杠转义（regex 用 indexOf/charCode 手写）。 */\n(function(){\n var P='面板';\n var el=document.querySelector('script[data-panel]');\n if(el&&el.getAttribute('data-panel'))P=el.getAttribute('data-panel');\n var NL=String.fromCharCode(10),TAB=String.fromCharCode(9);\n var buf=[],act='确认',timer=null;\n function isNum(c){var n=c.charCodeAt(0);return n>=48&&n<=57;}\n function ltrim(s){var i=0;while(i<s.length&&(s.charAt(i)===' '||s.charAt(i)===TAB))i++;return s.slice(i);}\n function parse(msg){\n  var i=msg.indexOf(NL);if(i<0)return null;\n  var h=msg.slice(0,i),b=msg.slice(i+1);\n  if(h.charAt(0)!=='【')return null;\n  var e=h.indexOf('】');if(e<0)return null;\n  var a=h.slice(1,e),tail=ltrim(h.slice(e+1));\n  var d=a.lastIndexOf('·');if(d>=0)a=a.slice(d+1);\n  var n=tail.length,j=n;\n  while(j>0&&isNum(tail.charAt(j-1)))j--;\n  var chunk=false;\n  if(j<n&&j>0&&tail.charAt(j-1)==='/'){\n   var k=j-1;while(k>0&&isNum(tail.charAt(k-1)))k--;\n   if(k<j-1)chunk=true;\n  }\n  return {act:a,body:b,chunk:chunk,len:msg.length};\n }\n function fp(t){var h=2166136261;for(var i=0;i<t.length;i++){h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;}return ('0000000'+h.toString(16)).slice(-8);}\n function copy(t){\n  var ok=false,ta=document.createElement('textarea');\n  try{ta.value=t;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,t.length);ok=document.execCommand('copy');}catch(e){ok=false;}\n  if(ta.parentNode)ta.parentNode.removeChild(ta);\n  if(!ok){try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t);ok=true;}}catch(e){}}\n  return ok;\n }\n function save(t){try{var b=new Blob([t],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');\n  a.href=URL.createObjectURL(b);a.download=P+'_回传.txt';document.body.appendChild(a);a.click();document.body.removeChild(a);\n  setTimeout(function(){URL.revokeObjectURL(a.href);},1500);}catch(e){}}\n function raw(){return (typeof window.sendPrompt==='function')?window.sendPrompt:null;}\n function flush(){\n  var t=buf.join(NL);buf=[];timer=null;if(!t)return;\n  var sp=raw();if(!sp)return;\n  var ok=copy(t);save(t);\n  if(ok)sp('【'+P+'·'+act+'】#'+fp(t)+' · '+t.length+'字 · 见剪贴板／'+P+'_回传.txt');\n  else sp(t);\n }\n window.__ljSend=function(msg){\n  if(typeof msg!=='string'){var s0=raw();return s0?s0.apply(window,arguments):false;}\n  var p=parse(msg);\n  if(p&&(p.chunk||p.len>450)){act=p.act;buf.push(p.body);if(timer)clearTimeout(timer);timer=setTimeout(flush,40);return true;}\n  var sp=raw();return sp?sp(msg):false;\n };\n})();\n</script>\n\n<!--/HA_PREVIEW-->";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;
/* ==================== 数据区（每次渲染只改这里） ==================== */
/* base＝基础信息（弱信息 · 非交互 · 只展示 AI 从话题里抽的原文与内核）
   prop＝命题（三行写满 · 单选 pick；mother／conflict／emotion＝核心母体 × 冲突模块 × 情绪主核）
   look＝项目基调：mode＝单选态（系列／影视／媒体）；series＝系列本已存的项目基调（纯信息）；film／media／style 为当前项目的取値；
        world＝世界观（只写项名 · 11 系）；vstyle＝风格（视觉元素 · 只 1 项）；rec＝各槽 AI 推荐项
   POOL＝换选池（两栏：大类 × 子项；只有一组且组名为空＝单列平铺） */
var DATA = window.LJ_DATA || {};
/* 换选池：大类 × 子项（组名 '' ＝单列平铺） */
var POOL = {
  /* 剧情类型：12 类 × 子项；**子项只写项名、不挂类**（类只作两栏左栏分组名） */
  genre: [
    ['剧情',['家庭伦理','成长','职业','时代']],
    ['爱情',['甜宠','虐恋','暗恋','破镜']],
    ['喜剧',['反讽','黑色幽默','合家欢','闹剧']],
    ['动作',['打斗','枪战','追逃','竞技']],
    ['悬疑',['推理','反转','密室','心理']],
    ['惊恐',['神秘','灵异','怪兽','恐怖谷','灾难']],
    ['犯罪',['罪案','黑帮','诈骗','卧底']],
    ['历史',['年代','古装','战争','军事','谍战']],
    ['传记',['人物','群像','名人','传奇']],
    ['青春',['校园','初恋','热血','成长痛']],
    ['关系',['亲子','家族','婆媳','青少年向','婚姻']],
    ['社会',['规则','秩序','底层','边缘','议题','时政']]
  ],
  /* 命题档：核心母体 × 冲突模块 × 情绪主核（单列换选 · 三值相乘） */
  mother: [['',['破镜重圆','原生家庭','规则对抗','身份错位','背叛与信任','命运无常','爱而不得','野心与代价']]],
  /* 冲突模块：11 类 × 子项（**子项只写项名、不挂类** · 单列推荐 → `更多...` → 两栏 类 × 子项） */
  conflict: [
    ['反目系',['兄弟反目','挚友决裂','师徒翻脸','合伙人散伙','邻里成仇','同事构陷']],
    ['复仇系',['血债血偿','以牙还牙','替人复仇','迟到十年','复仇反噬','放下复仇']],
    ['生存系',['绝境求生','资源抢夺','生死抉择','荒野逃生','病痛缠身','断粮断供']],
    ['现实系',['房价压顶','裁员失业','彩礼婚房','医疗账单','学历门槛','户口迁移']],
    ['沟通系',['误会未解','语言不通','话留半句','消息错位','真相难言','沉默以对']],
    ['冷战系',['夫妻冷战','家庭对峙','职场孤立','断联数月','谁先低头','长期疏远']],
    ['规则系',['行业潜规则','单位明规则','乡土老规矩','制度漏洞','校规冲突','法律边界']],
    ['伦理系',['亲情绑架','代际冲突','血缘秘密','婚姻背叛','养育之争','道德困境']],
    ['欲望系',['金钱诱惑','权力争夺','名声焦虑','情欲越界','成瘾难戒','贪念失控']],
    ['身份系',['身世之谜','身份冒用','阶层跨越','顶替上学','隐瞒身份','认亲归位']],
    ['时限系',['倒计时催命','最后期限','限时抉择','错过即失','中年倒计时','临终托付']]
  ],
  emotion: [['',['爽','甜','虐','燃','怕','暖']]],
  /* 世界观（11 系 × 子项 · **子项只写项名、不挂系** · 单列推荐 → `更多...` → 两栏 系 × 子项） */
  world: [
    ['现实系',['都市现实','县城生活','职场现实','校园现实','家庭现实','边缘人群']],
    ['科幻系',['近未来都市','硬核太空','星际航行','赛博都市','废土末日','生物改造']],
    ['历史时空系',['古代王朝','民国年代','战争年代','八十年代','穿越错位','架空历史']],
    ['地域系',['南方水乡','北方县城','西北荒原','沿海渔村','异国街区','边疆小镇']],
    ['神话信仰系',['东方仙侠','东方志怪','民间信仰','希腊神话','北欧神话','宗教寓言']],
    ['梦境意识系',['梦境嵌套','记忆回溯','幻觉幻视','潜意识空间','濒死回望']],
    ['系统媒介系',['社交平台','直播现场','监控视角','游戏世界','AI 对话','虚拟现实']],
    ['制度乌托邦系',['极权秩序','反乌托邦','理想公社','等级社会','实验社会']],
    ['圈层职业系',['剧组行业','金融圈','医院','警队','电竞圈','娱乐圈']],
    ['封闭空间系',['孤岛','密室','高层电梯楼','地下掩体','列车车厢','荒野基站']],
    ['抽象规则系',['规则怪谈','时间循环','交换人生','命运赌局','概念拟人','寓言空间']]
  ],
  fcarrier: [['',['微短剧','短剧','剧情片','短片','微电影','电影','纪录片','传记','主旋律']]],
  mcarrier: [['',['病毒视频','短视频','中视频','长视频','专题片']]],
  dur: [
    ['秒级',['＜15s','15-30s','30s-60s','50s-90s']],
    ['分钟级',['1-2mins','2-3mins','3-5mins','5-10mins']],
    ['中长',['10-20mins','20-40mins','40-60mins']],
    ['长片',['90-120mins','＞120mins']]
  ],
  track: [
    ['生活日常',['生活','家居','萌宠','亲子','手工']],
    ['消费垂类',['美妆','时尚','数码','汽车','健康','财经']],
    ['内容文化',['人文','知识','影视','游戏','音乐','舞蹈','运动']],
    ['地域产业',['文旅','美食','三农','商业','职场','户外']]
  ],
  form: [
    ['分享',['推荐','随手拍','Vlog','体验','打卡','探访','访谈']],
    ['信息差',['测评','教程','科普','揭秘','对比','实验']],
    ['演绎',['剧情','情感','沉浸']],
    ['表现',['挑战','盘点','混剪','口播','治愈','开箱']],
    ['商务广告',['广告片','TVC','MV','实验片','形象片','宣传片']]
  ],
  style: [
    ['记录',['实拍']],
    ['国风',['国风写意','水墨','剪纸']],
    ['手绘',['手绘水彩','二次元','赛璐璐','卡通','拼贴']],
    ['三维',['3D动画','cg动画','游戏CG','粘土定格','像素']],
    ['设计',['极简','抽象']]
  ],
  orient: [['',['竖屏','横屏','方屏']]],
  size: [
    ['竖屏',['9:16','3:4','4:5','2:3']],
    ['横屏',['16:9','4:3','3:2','21:9','2.35:1']],
    ['方形',['1:1']]
  ],
  /* 视觉风格＝视觉元素（美术参考系：年代／电影运动／国别流派／作者签名／世界构建／机构质感／类型片美学）
     · 与制式（成像媒介）、B4 场景（空间置景）三层分工不重叠 */
  vstyle: [
    ['历史断代',['中世纪宗教','文艺复兴宫廷','都铎・伊丽莎白','巴洛克宫廷','洛可可','摄政・维多利亚英国','维多利亚暗黑','美国西部','美国南方哥特','民国上海','昭和日本','80 年代中国','苏联构成主义','冷战年代']],
    ['电影运动',['德国表现主义','意大利新现实主义','法国新浪潮','苏联蒙太奇','道格玛95','通心粉西部']],
    ['国别流派',['日式极简','香港黄金时代','台湾新电影','韩国类型片','东南亚民俗恐怖','北欧冷峻','地中海阳光','拉美魔幻现实主义','中东・北非','印度宝莱坞','美国好莱坞','藏风原野']],
    ['作者签名',['韦斯・安德森','蒂姆・波顿','大卫・林奇','王家卫','张艺谋','黑泽明','库布里克','塔可夫斯基','雷德利・斯科特','诺兰','赛博朋克']],
    ['世界构建',['硬科幻','太空歌剧','生物朋克','蒸汽朋克','柴油朋克','高魔奇幻','黑暗奇幻','东方仙侠','东方志怪','后启示录','巨构赛博']],
    ['当代与机构质感',['都市精英','都市青年','县域农村','工业厂房','实验室医疗','法庭机构','军警','时尚摄影']],
    ['类型片美学',['黑色电影','新黑色','哥特恐怖','心理恐怖','肢解恐怖','黑手党','音乐歌舞','文化戏剧']]
  ]
};
/* 卡槽定义：film／media／style／wd／vs；max＝该槽上限（＋－的界）；one＝单列换选（池小 · 不出 `更多...`） */
var SLOT = {
  /* `ui:'cycle'` ＝无弹层换选（点一下换下一个 · 候选只列关联推荐项） */
  film: [
    { k:'genre',   name:'剧情类型', max:2, pool:'genre' },
    { k:'carrier', name:'载体',     max:1, pool:'fcarrier', one:1 },
    { k:'dur',     name:'时长',     max:1, pool:'dur',   ui:'cycle' }
  ],
  media: [
    { k:'track',   name:'赛道类别', max:2, pool:'track' },
    { k:'form',    name:'记录类型', max:2, pool:'form' },
    /* 条件槽：`记录类型` 含该值时这一行才出现（不出现＝不渲染、不回传） */
    { k:'genre',   name:'剧情类型', max:2, pool:'genre', cond:['form','剧情'] },
    { k:'carrier', name:'载体',     max:1, pool:'mcarrier', one:1 },
    { k:'dur',     name:'时长',     max:1, pool:'dur',   ui:'cycle' }
  ],
  style: [
    { k:'style',   name:'制式',     max:1, pool:'style' },
    { k:'orient',  name:'画幅',     max:1, pool:'orient', ui:'cycle' },
    { k:'size',    name:'尺寸',     max:1, pool:'size',   ui:'cycle' }
  ],
  wd: [
    { k:'world',   name:'世界观',   max:1, pool:'world' }
  ],
  vs: [
    { k:'vstyle',  name:'风格',     max:1, pool:'vstyle' }
  ]
};
/* ==================== 数据区结束 · 以下组件代码固定 ==================== */
(function(){
var me=document.currentScript&&document.currentScript.closest?document.currentScript.closest('.ljP'):null;
var ROOT=me||Array.prototype.slice.call(document.querySelectorAll('.ljP')).pop();
if(!ROOT)return;
var bd=ROOT.querySelector('.ljBd'),ovl=ROOT.querySelector('.ljOvl'),moB=ROOT.querySelector('.ljMoB'),tst=ROOT.querySelector('.ljTst'),pop=ROOT.querySelector('.ljPop');
ROOT.querySelector('.ljTt').textContent=DATA.title;
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function escAttr(s){return esc(s).replace(/"/g,'&quot;');}
function jsq(s){return String(s==null?'':s).replace(/\\/g,'\\\\').replace(/'/g,"\\'");}
function cp(x){return JSON.parse(JSON.stringify(x));}

var MODES=['系列','影视','媒体'];
var S={prop:cp(DATA.prop),mode:'系列',look:{},undo:[]};
S.mode=DATA.look.mode||MODES[0];
/* 命题＝单选：pick 走数据；旧数据只有 rows[].on → 取首个 on · 缺省 0 */
(function(){var p=S.prop,rs=p.rows||[],n=rs.length||3;
  if(typeof p.pick!=='number'||p.pick<0||p.pick>=n){
    var k=-1;for(var i=0;i<rs.length;i++)if(rs[i]&&rs[i].on){k=i;break;}
    p.pick=k>=0?k:0;
  }})();
S.look={film:cp(DATA.look.film||{}),media:cp(DATA.look.media||{}),style:cp(DATA.look.style||{}),
  wd:{world:(DATA.look.world?[DATA.look.world]:[])},
  vs:{vstyle:cp(DATA.look.vstyle||[]).filter(function(v,i,a){return a.indexOf(v)===i;})}};
function slotDef(card,k){var a=SLOT[card]||[];for(var i=0;i<a.length;i++)if(a[i].k===k)return a[i];return null;}
/* 条件槽：`cond:['form','剧情']` ＝ 该卡的 form 里含 `剧情` 才显示（不显示＝不渲染、不回传、不参与随机） */
function slotOn(card,def){var c=def&&def.cond;if(!c)return true;return slotArr(card,c[0]).indexOf(c[1])>=0;}
function slotArr(card,k){var o=S.look[card]||(S.look[card]={});if(!Array.isArray(o[k]))o[k]=[];return o[k];}
function poolGroups(key){return POOL[key]||[];}
function poolFlat(key){var o=[];poolGroups(key).forEach(function(g){g[1].forEach(function(v){if(o.indexOf(v)<0)o.push(v);});});return o;}
/* 载体 → 时长 关联推荐项（时长＝无弹层换选，只在这几个里转；未选载体才退回全池） */
var DMAP = {
  '微短剧':['50s-90s','1-2mins','2-3mins'],
  '短剧':['1-2mins','2-3mins','3-5mins'],
  '剧情片':['10-20mins','20-40mins','40-60mins'],
  '短片':['3-5mins','5-10mins','10-20mins'],
  '微电影':['10-20mins','20-40mins'],
  '电影':['90-120mins','＞120mins'],
  '纪录片':['5-10mins','10-20mins','20-40mins','40-60mins','90-120mins','＞120mins'],
  '传记':['90-120mins','＞120mins'],
  '主旋律':['5-10mins','90-120mins'],
  '病毒视频':['＜15s','15-30s'],
  '短视频':['15-30s','30s-60s','50s-90s'],
  '中视频':['1-2mins','2-3mins','3-5mins'],
  '长视频':['5-10mins','10-20mins','20-40mins'],
  '专题片':['3-5mins','5-10mins','10-20mins']
};
/* 画幅 → 尺寸 关联推荐项 */
function sizeSet(o){var g=({'竖屏':0,'横屏':1,'方屏':2})[o];var s=POOL.size[g==null?0:g];return (s?s[1]:[]).slice();}
/* 该槽的可换选清单：时长／尺寸＝关联推荐项；其余＝池平铺 */
function slotOpts(card,k){
  var def=slotDef(card,k);if(!def)return [];
  if(k==='dur'){var c=slotArr(card,'carrier')[0]||'';return (DMAP[c]||poolFlat('dur')).slice();}
  if(k==='size'){return sizeSet(slotArr(card,'orient')[0]||'竖屏');}
  return poolFlat(def.pool);
}
/* ── 基础信息（弱信息 · 非交互）── */
function secBase(){
  var h='<div class="ljSec" data-sec="base"><div class="ljSecH"><span class="ljSt">基础信息</span></div><div class="ljBox">';
  (DATA.base||[]).forEach(function(b){h+='<div class="ljBi"><span class="ljBiL">'+esc(b.label)+'</span><span class="ljBiV">'+esc(b.value)+'</span></div>';});
  return h+'</div></div>';
}
/* ── 命题（三行写满 · `□` 单选：选中行亮且可写 · 未选行暗且禁写）── */
function propRowHTML(i){
  var r=(S.prop.rows||[])[i]||{text:''};
  var on=(S.prop.pick|0)===i;
  return '<div class="ljPR"><span class="ljOp'+(on?' on':'')+'" title="点选＝本条命题计入（三行只选一条）" onclick="LJ.propOn('+i+')"><span class="ljBx"></span></span>'
    +'<input class="ljPIn" placeholder="自由文本（点左侧方框切到本条）" value="'+escAttr(r.text||'')+'"'+(on?'':' disabled')+' oninput="LJ.propTxt('+i+',this.value)"></div>';
}
function mceHTML(){
  var m=S.prop;
  function one(lab,k){return '<span class="ljSL">'+lab+'</span><span class="ljVal'+(m[k]?'':' ph')+'" title="点击换选（单列 · 底部可自定义）" onclick="LJ.mce(\''+k+'\',this)">'+esc(m[k]||'未选')+'</span>';}
  /* 冲突模块＝类×子项两级 ＋ `＋／－`（上限 2 · 有 1 项时末尾是 `＋`，满 2 项才全变 `－`） */
  function cf(){
    var arr=m.conflict||[],h='<span class="ljSL">冲突模块</span>';
    if(!arr.length)h+='<span class="ljAdd" title="加一项（直接取推荐首项 · 不弹层）" onclick="LJ.cfAdd()">＋</span>';
    else arr.forEach(function(v,i){
      h+='<span class="ljVal" title="点击换选（单列推荐 → 更多 → 两栏 类×子项）" onclick="LJ.cfOpen('+i+',this)">'+esc(v)+'</span>';
      if(i===0&&arr.length<2)h+='<span class="ljAdd" title="再加一项（直接取下一个推荐项 · 不弹层）" onclick="LJ.cfAdd()">＋</span>';
      else h+='<span class="ljRm" title="移除该项" onclick="LJ.cfDel('+i+',event)">－</span>';
    });
    return h;
  }
  return '<div class="ljMR">'+one('核心母体','mother')+'<span class="ljMx">×</span>'
    +cf()+'<span class="ljMx">×</span>'+one('情绪主核','emotion')+'</div>';
}
function secProp(){
  var h='<div class="ljSec" data-sec="prop"><div class="ljSecH"><span class="ljSt">命题</span></div><div class="ljBox">';
  for(var i=0;i<3;i++)h+=propRowHTML(i);
  h+=mceHTML();
  return h+'</div></div>';
}
function propOn(i){if((S.prop.pick|0)===i)return;pushUndo();S.prop.pick=i;renderSec('prop');updMain();}
function propTxt(i,v){S.prop.rows[i].text=v;updMain();}
/* 核心母体 ／ 情绪主核：单列全池换选（不弹两栏 · 底部同款「自定义…（回车确定）」） */
var MCP={which:null,el:null};
function mce(which,el){
  var G=poolGroups(which),arr=(G[0]||[])[1]||[];
  if(!arr.length)return;
  MCP.which=which;MCP.el=el;
  var cur=S.prop[which]||'';
  var html='<div class="ljOpts" id="ljPopL">'+arr.map(function(v){
    return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.mceTake(\''+jsq(v)+'\')"><span>'+esc(v)+'</span></div>';
  }).join('')+'</div>';
  openPopAt(el,'<div class="ljColOne">'+html
    +'<div class="ljFixOne"><div class="ljPc ljInp"><input id="b2cst" class="ljCst" placeholder="自定义…（回车确定）" onkeydown="LJ.mceCust(event)"></div></div></div>',false);
}
function mceTake(v){v=String(v||'').trim();if(!MCP.which||!v)return;pushUndo();S.prop[MCP.which]=v;closePop();renderSec('prop');updMain();}
function mceCust(e){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();mceTake(e.target.value);}}

/* 冲突模块：池＝11 类 × 子项（值只写子项）· 单列推荐 → `更多...` → 两栏（推荐 ＋ 类 × 子项）· 上限 1 */
var CF={gi:0,el:null,G:null};
function cfGroups(){return poolGroups('conflict');}
function cfFlat(){return popFlatOf(cfGroups());}
function cfRec(){
  var r=(DATA.prop.rec&&DATA.prop.rec.conflict)||[],all=cfFlat(),out=[];
  (r||[]).forEach(function(v){if(all.indexOf(v)>=0&&out.indexOf(v)<0)out.push(v);});
  if(!out.length)out=all.slice(0,6);
  return out;
}
function cfItem(v){
  return '<div class="ljPc'+((S.prop.conflict||[]).indexOf(v)>=0?' on':'')+'" onclick="LJ.cfTake(\''+jsq(v)+'\')"><span>'+esc(v)+'</span></div>';
}
function cfOpen(idx,el){
  if(idx&&idx.stopPropagation)idx.stopPropagation();
  if(el&&el.stopPropagation)el.stopPropagation();
  CF.el=(typeof el==='object'?el:CF.el)||CF.el;CF.idx=(typeof idx==='number'?idx:-1);CF.gi=0;CF.G=null;
  var cur=(CF.idx>=0?((S.prop.conflict||[])[CF.idx]||''):''),list=cfRec().slice();
  if(cur&&list.indexOf(cur)>0){list.splice(list.indexOf(cur),1);list.unshift(cur);}
  var more=cfFlat().length>8?'<div class="ljPc ljMore" onclick="event.stopPropagation();LJ.cfMore()">更多...</div>':'';
  openPopAt(CF.el,'<div class="ljColOne"><div class="ljOpts" id="ljPopL">'+list.slice(0,8).map(cfItem).join('')+'</div>'
    +'<div class="ljFixOne">'+more
    +'<div class="ljPc ljInp"><input id="b2cst" class="ljCst" placeholder="自定义…（回车确定）" onkeydown="LJ.cfCust(event)"></div></div></div>',false);
}
function cfMore(){
  CF.gi=0;
  CF.G=[{n:'推荐',items:cfRec()}].concat(cfGroups().map(function(g){return {n:g[0],items:g[1]||[]};}));
  var G=CF.G;
  var cats=G.map(function(x,i){return '<div class="ljCat'+(i===0?' on':'')+'" onclick="LJ.cfCat('+i+')">'+esc(x.n)+'</div>';}).join('');
  pop.classList.remove('pickone');pop.classList.add('wide');
  pop.innerHTML='<div class="ljSplit"><div class="ljCats">'+cats+'</div><div class="ljOpts" id="ljPopL">'
    +(G[0].items||[]).map(cfItem).join('')+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="event.stopPropagation();LJ.cfBack()" title="收回单列（推荐项）">收起</div>'
    +'<div class="ljPc"><input id="b2cst" class="ljCst" placeholder="自定义…（回车确定）" onkeydown="LJ.cfCust(event)"></div></div>';
  fitWide();placePop(CF.el);
}
function cfCat(i){
  if(!CF.G)return;CF.gi=i;
  var g=CF.G[i]||CF.G[0],L=document.getElementById('ljPopL');
  if(L){L.innerHTML=(g.items||[]).map(cfItem).join('');L.scrollTop=0;}
  var cs=pop.querySelectorAll('.ljCat');
  for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===i?' on':'');
  scrCat(cs[i]);placePop(CF.el);
}
function cfBack(){cfOpen(CF.idx,CF.el||null);}
/* 取值：点某项时 idx 命中＝替换该项；`＋` 进入（idx=-1）＝追加，满 2 项挤掉最早那项 */
function cfTake(v){
  v=String(v||'').trim();if(!v)return;
  var arr=(S.prop.conflict||[]).slice(),i=(CF.idx==null?-1:CF.idx);
  pushUndo();
  if(i>=0&&i<arr.length){
    if(arr.indexOf(v)>=0&&arr.indexOf(v)!==i){closePop();return;}
    arr[i]=v;
  }else{
    if(arr.indexOf(v)>=0){closePop();return;}
    if(arr.length>=2)arr.shift();
    arr.push(v);
  }
  S.prop.conflict=arr;
  closePop();renderSec('prop');updMain();
}
function cfCust(e){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();cfTake(e.target.value);}}
/* `＋`＝直接追加一个未用的推荐项（与剧情类型同款 · ❌ 不弹层）；满 2 项不再追加 */
function cfAdd(){
  var arr=(S.prop.conflict||[]).slice();
  if(arr.length>=2)return;
  var cands=[];
  cfRec().concat(cfFlat()).forEach(function(v){if(v&&cands.indexOf(v)<0)cands.push(v);});
  for(var i=0;i<cands.length;i++){
    if(arr.indexOf(cands[i])<0){pushUndo();arr.push(cands[i]);S.prop.conflict=arr;closePop();renderSec('prop');updMain();return;}
  }
}
function cfDel(i,e){
  if(e&&e.stopPropagation)e.stopPropagation();
  var arr=(S.prop.conflict||[]).slice();
  if(i<0||i>=arr.length)return;
  pushUndo();arr.splice(i,1);S.prop.conflict=arr;closePop();renderSec('prop');updMain();
}
/* ── 项目基调（三选一）── */
function slotRow(card,k){
  var def=slotDef(card,k);if(!def)return '';
  var arr=slotArr(card,k),full=arr.length>=def.max,cyc=def.ui==='cycle';
  var h='<div class="ljSltR"><span class="ljSltL">'+esc(def.name)+'</span><span class="ljVals">';
  if(!arr.length){
    if(cyc)h+='<span class="ljVal ljCyc ph" data-c="'+card+'" data-k="'+k+'" data-i="-1" title="左键换选（无弹层）／右键弹列直接选" onclick="LJ.slotCyc(\''+card+'\',\''+k+'\',-1,event)" oncontextmenu="LJ.cycMenu(event)">—</span>';
    else h+='<span class="ljAdd" title="加一项（直接取一个未用项 · 不弹层）" onclick="LJ.slotAdd(\''+card+'\',\''+k+'\')">＋</span>';
  }else{
    arr.forEach(function(v,i){
      if(cyc){
        h+='<span class="ljVal ljCyc" data-c="'+card+'" data-k="'+k+'" data-i="'+i+'" title="左键换下一个（无弹层）／右键弹列直接选" onclick="LJ.slotCyc(\''+card+'\',\''+k+'\','+i+',event)" oncontextmenu="LJ.cycMenu(event)">'+esc(v)+'</span>';
      }else{
        h+='<span class="ljVal" title="点击换选（单列推荐 → 更多 → 两栏）" onclick="LJ.slotOpen(\''+card+'\',\''+k+'\','+i+',this)">'+esc(v)+'</span>';
        if(def.max>1){
          if(i===0&&!full)h+='<span class="ljAdd" title="加一项（直接取一个未用项 · 不弹层）" onclick="LJ.slotAdd(\''+card+'\',\''+k+'\')">＋</span>';
          else h+='<span class="ljRm" title="移除该项" onclick="LJ.slotDel(\''+card+'\',\''+k+'\','+i+',event)">－</span>';
        }
      }
    });
  }
  return h+'</span></div>';
}
function cardHTML(card,title,sub){
  var rows=SLOT[card]||[];
  var h='<div class="ljCard"><div class="ljCdH"><span class="ljCdT">'+esc(title)+'</span>'
    +(sub?'<span class="ljCdS">｜</span><span class="ljCdN">'+esc(sub)+'</span>':'')
    +'</div><div class="ljTwo">';
  h+='<div>';rows.forEach(function(d){if(slotOn(card,d))h+=slotRow(card,d.k);});h+='</div>';
  h+='<div>';SLOT.style.forEach(function(d){h+=slotRow('style',d.k);});h+='</div>';
  return h+'</div></div>';
}
function seriesCard(){
  var s=(DATA.look&&DATA.look.series)||{},sn=String(s.name||'').trim();
  var h='<div class="ljCard"><div class="ljCdH"><span class="ljCdT">系列卡</span>'
    +(sn?'<span class="ljCdS">｜</span><span class="ljCdN">'+esc(sn)+'</span>':'')
    +'</div><div class="ljSerG">';
  ((s.rows)||[]).forEach(function(r){h+='<div class="ljSerR"><span class="ljSerL">'+esc(r[0])+'</span><span class="ljSerV">'+esc(r[1])+'</span></div>';});
  return h+'</div></div>';
}
function secLook(){
  var h='<div class="ljSec" data-sec="look"><div class="ljSecH"><span class="ljSt">项目基调</span></div><div class="ljTogs">';
  MODES.forEach(function(m){h+='<span class="ljTog'+(S.mode===m?' on':'')+'" title="点选＝只走「'+m+'」这一条口径（三选一）" onclick="LJ.mode(\''+m+'\')"><span class="ljRad"></span>'+m+'</span>';});
  h+='</div>';
  if(S.mode==='系列')h+=seriesCard();
  if(S.mode==='影视')h+=cardHTML('film','影视卡','本期');
  if(S.mode==='媒体')h+=cardHTML('media','媒体卡','本期');
  h+='</div>';
  return h;
}
/* ── 视觉风格（世界观 11 系 × 子项 · 单列→两栏 ／ 风格 只 1 项 · 不 ＋－）── */
function secVs(){
  var h='<div class="ljSec" data-sec="vs"><div class="ljSecH"><span class="ljSt">视觉风格</span></div><div class="ljBox">';
  SLOT.wd.forEach(function(d){h+=slotRow('wd',d.k);});
  SLOT.vs.forEach(function(d){h+=slotRow('vs',d.k);});
  return h+'</div></div>';
}
function secOf(which){
  if(which==='base')return secBase();
  if(which==='prop')return secProp();
  if(which==='look')return secLook();
  return secVs();
}
function renderAll(){bd.innerHTML=secBase()+secProp()+secLook()+secVs();}
function renderSec(which){
  var el=bd.querySelector('.ljSec[data-sec="'+which+'"]');
  if(!el){renderAll();return;}
  var t=document.createElement('div');t.innerHTML=secOf(which);
  if(t.firstChild)el.parentNode.replaceChild(t.firstChild,el);
}

/* ── 状态与撤销 ── */
function snapshot(){return {prop:cp(S.prop),look:cp(S.look),mode:S.mode};}
function pushUndo(){S.undo.push(snapshot());if(S.undo.length>60)S.undo.shift();}
function setMode(m){if(S.mode===m)return;pushUndo();S.mode=m;renderSec('look');updMain();}

/* ── 卡槽换选（B4 同款两级：单列 AI 推荐 → `更多...` → 两栏「推荐」＋大类 × 全池）── */
var POP={card:null,row:null,idx:null,el:null,gi:0};
var _cv=document.createElement('canvas').getContext('2d');
function measW(t,fs,ff){_cv.font=fs+'px '+ff;try{_cv.font=fs+'px '+ff;}catch(e){}return _cv.measureText(String(t)).width;}
function fitWide(){
  if(!pop.classList.contains('wide'))return;
  var L=document.getElementById('ljPopL'),C=pop.querySelector('.ljCats');
  if(!L||!C)return;
  var elO=L.querySelector('.ljPc'),elC=C.querySelector('.ljCat');
  var fsO=elO?parseFloat(getComputedStyle(elO).fontSize):12.5;
  var fsC=elC?parseFloat(getComputedStyle(elC).fontSize):11.5;
  var ff=getComputedStyle(pop).fontFamily||sans();
  var wO=10*fsO,wC=5*fsC;
  [].forEach.call(L.querySelectorAll('.ljPc'),function(e){if(e.querySelector('input'))return;wO=Math.max(wO,measW(e.textContent,fsO,ff));});
  [].forEach.call(C.querySelectorAll('.ljCat'),function(e){wC=Math.max(wC,measW(e.textContent,fsC,ff));});
  var WC=Math.ceil(wC)+14,WO=Math.ceil(wO)+16;
  if(WC+WO+2>320)WO=Math.max(96,320-2-WC);
  C.style.width=WC+'px';L.style.width=WO+'px';pop.style.width=(WC+WO+2)+'px';
}
function sans(){return '-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif';}
function placePop(el){
  if(!el||!el.getBoundingClientRect)return;
  if(!document.contains(el))el=POP.el;
  if(!el||!el.getBoundingClientRect)return;
  var r=el.getBoundingClientRect(),pr=ROOT.getBoundingClientRect();
  var L=r.left-pr.left;if(L+pop.offsetWidth>ROOT.clientWidth-8)L=Math.max(8,ROOT.clientWidth-pop.offsetWidth-10);
  pop.style.left=L+'px';
  var o=pop.querySelector('.ljOpts');
  pop.style.height='';pop.style.maxHeight='';if(o)o.style.height='';
  var ph=pop.offsetHeight;
  var vTop=Math.max(pr.top,0),vBot=Math.min(pr.bottom,window.innerHeight||document.documentElement.clientHeight);
  var below=vBot-r.bottom-8,above=r.top-vTop-8,T=0;
  if(ph<=below)T=r.bottom-pr.top+6;                     /* 下方够：向下开 */
  else if(ph<=above)T=r.top-pr.top-ph-6;                /* 上方够：向上翻 */
  else{                                                 /* 上下都不够：压选项区高度＋贴边 */
    var room=Math.max(150,Math.max(below,above)-6);
    if(pop.classList.contains('wide')){var nw=Math.max(3,Math.floor((room-59)/25));pop.style.height=(nw*25+59)+'px';}
    else if(o){var ns=Math.max(3,Math.floor((room-67)/26));o.style.height=(ns*26)+'px';}
    ph=pop.offsetHeight;
    T=(above>=below)?(r.top-pr.top-ph-6):(r.bottom-pr.top+6);
    var lo=vTop-pr.top+8,hi=vBot-pr.top-ph-8;if(hi<lo)hi=lo;
    T=Math.min(Math.max(T,lo),hi);
  }
  pop.style.top=T+'px';
}
function closePop(){pop.classList.remove('on');POP.card=null;}
/* 单列形态：openPopAt 内先挂 pickone（定高 208 的单列皮肤）再定位 —— 否则量到换肤前的矮高，误判「下方够」而溢出面板底 */
function openPopAt(el,html,wide){
  pop.classList.remove('pickone');pop.innerHTML=html;
  pop.classList.toggle('wide',!!wide);pop.classList.toggle('pickone',!wide);pop.classList.add('on');
  if(wide){fitWide();}
  placePop(el);
}
function scrCat(c){if(!c)return;var box=pop.querySelector('.ljCats');if(!box)return;
  var cr=c.getBoundingClientRect(),br=box.getBoundingClientRect();
  if(cr.top<br.top+2)box.scrollTop-=Math.ceil(br.top-cr.top)+4;
  else if(cr.bottom>br.bottom-2)box.scrollTop+=Math.ceil(cr.bottom-br.bottom)+4;}

/* 池：尺寸随画幅收窄（画幅有值 → 只留该画幅那一组） */
function popGroups(){
  var d=slotDef(POP.card,POP.row);if(!d)return [];
  var G=poolGroups(d.pool);
  if(d.pool==='size'){
    var o=(S.look.style&&S.look.style.orient||[])[0],hit=null;
    G.forEach(function(g){if(g[0]===o)hit=g;});
    if(hit)return [hit];
  }
  return G;
}
function popFlatOf(G){var o=[];(G||[]).forEach(function(g){(g[1]||[]).forEach(function(v){if(o.indexOf(v)<0)o.push(v);});});return o;}
function popArr(){return slotArr(POP.card,POP.row);}
function popCur(){var a=popArr();return (POP.idx!=null&&POP.idx>=0&&POP.idx<a.length)?a[POP.idx]:'';}
/* 推荐项＝数据区 look.rec[card][row]（5-8 · 按本期推理）· 池内过滤 · ❌ 不拿池项凑数 */
function popRec(){
  var r=(DATA.look.rec&&DATA.look.rec[POP.card]&&DATA.look.rec[POP.card][POP.row])||[];
  var all=popFlatOf(popGroups()),out=[];
  (r||[]).forEach(function(v){if(all.indexOf(v)>=0&&out.indexOf(v)<0)out.push(v);});
  if(!out.length)out=all.slice(0,6);                 /* 数据没写 rec → 退回池前几项（属数据缺失） */
  return out;
}
function popAll(){return popFlatOf(popGroups());}
/* 单列：载体／画幅（one）或池 ≤8 → 全池；其余 → 推荐项（当前值在推荐内时置顶 · 上限 8） */
function popOneList(){
  var d=slotDef(POP.card,POP.row),all=popAll(),cur=popCur();
  if(d.one||all.length<=8)return all.slice();
  var out=popRec();
  if(cur&&out.indexOf(cur)>0){out.splice(out.indexOf(cur),1);out.unshift(cur);}
  return out.slice(0,8);
}
function popHasMore(){var d=slotDef(POP.card,POP.row);return !d.one&&popAll().length>8;}
/* 两栏组：首行 `推荐` ＋ 池分组（左栏 5 字宽 · 右栏该类全池） */
function popWideGroups(){
  return [{n:'推荐',items:popRec()}].concat(popGroups().map(function(g){return {n:g[0],items:g[1]||[]};}));
}
function popItemHTML(v){var on=popArr().indexOf(v)>=0;
  return '<div class="ljPc'+(on?' on':'')+'" onclick="LJ.slotTake(\''+jsq(v)+'\')"><span>'+esc(v)+'</span></div>';}
function drawSlotOne(el){
  var opts=popOneList().map(popItemHTML).join('');
  var more=popHasMore()?'<div class="ljPc ljMore" onclick="event.stopPropagation();LJ.slotMore()">更多...</div>':'';
  openPopAt(el,'<div class="ljColOne"><div class="ljOpts" id="ljPopL">'+opts+'</div><div class="ljFixOne">'+more
    +'<div class="ljPc ljInp"><input id="b2cst" class="ljCst" placeholder="自定义…（回车确定）" onkeydown="LJ.slotCust(event)"></div></div></div>',false);
}
/* 更多...＝就地改造弹层（❌ 重建：重建会让被点的 .ljMore 脱离文档 → ROOT 判「点空白」而关闭） */
function slotMore(){
  POP.gi=0;
  var G=popWideGroups(),g=G[0];
  var cats=G.map(function(x,i){return '<div class="ljCat'+(i===0?' on':'')+'" onclick="LJ.slotCat('+i+')">'+esc(x.n)+'</div>';}).join('');
  var items=(g.items||[]).map(popItemHTML).join('');
  pop.classList.remove('pickone');pop.classList.add('wide');
  pop.innerHTML='<div class="ljSplit"><div class="ljCats">'+cats+'</div><div class="ljOpts" id="ljPopL">'+items+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="event.stopPropagation();LJ.slotBack()" title="收回单列（推荐项）">收起</div>'
    +'<div class="ljPc"><input id="b2cst" class="ljCst" placeholder="自定义…（回车确定）" onkeydown="LJ.slotCust(event)"></div></div>';
  fitWide();placePop(POP.el);
}
function slotBack(){drawSlotOne(POP.el);}
function slotCat(i){
  if(!POP.card)return;POP.gi=i;
  var G=popWideGroups(),g=G[i]||G[0],L=document.getElementById('ljPopL');
  if(L){L.innerHTML=(g.items||[]).map(popItemHTML).join('');L.scrollTop=0;}
  var cs=pop.querySelectorAll('.ljCat');
  for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===i?' on':'');
  scrCat(cs[i]);
  placePop(POP.el);
}
function slotOpen(card,row,idx,el){
  var def=slotDef(card,row);if(!def)return;
  POP.card=card;POP.row=row;POP.idx=idx;POP.el=el||null;POP.gi=0;
  if(!popGroups().length)return;
  drawSlotOne(el);
}
function slotCust(e){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();slotTake(e.target.value);}}
/* 无弹层换选：点值＝换到该清单的下一项（清单＝载体关联的时长 ／ 画幅关联的尺寸 ／ 池平铺） */
function slotCyc(card,k,idx,e){
  if(e&&e.stopPropagation)e.stopPropagation();
  var opts=slotOpts(card,k),arr=slotArr(card,k);
  if(!opts.length)return;
  pushUndo();S.look[card].manual=S.look[card].manual||{};S.look[card].manual[k]=true;
  if(idx==null||idx<0||idx>=arr.length){arr.length=0;arr.push(opts[0]);}
  else{var i=opts.indexOf(arr[idx]);arr[idx]=opts[(i+1)%opts.length];}
  clampDep(card);   /* 画幅一换 → 尺寸立刻落到该画幅的关联项（不用再手点尺寸） */
  renderSec('look');updMain();
}
/* 右键弹列（时长／画幅／尺寸）：把「关联推荐项」整列摊开直接点选（左键仍是循环换下一个） */
var CYC={card:null,k:null,idx:-1,el:null};
function cycMenu(e){
  if(e){e.preventDefault();e.stopPropagation();}
  var el=(e&&(e.currentTarget||e.target))||null;if(!el)return false;
  var card=el.getAttribute('data-c'),k=el.getAttribute('data-k');
  if(!card||!k)return false;
  var idx=parseInt(el.getAttribute('data-i')||'-1',10);if(isNaN(idx))idx=-1;
  CYC.card=card;CYC.k=k;CYC.idx=idx;CYC.el=el;
  var opts=slotOpts(card,k),cur=(idx>=0?((slotArr(card,k)[idx])||''):'');
  if(!opts.length)return false;
  var html=opts.map(function(v){
    return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.cycSet(\''+jsq(v)+'\')"><span>'+esc(v)+'</span></div>';
  }).join('');
  openPopAt(el,'<div class="ljColOne"><div class="ljOpts" id="ljPopL">'+html+'</div></div>',false);
  return false;
}
function cycSet(v){
  v=String(v||'').trim();if(!v||!CYC.card)return;
  var card=CYC.card,k=CYC.k,arr=slotArr(card,k),i=CYC.idx;
  pushUndo();S.look[card].manual=S.look[card].manual||{};S.look[card].manual[k]=true;
  if(i>=0&&i<arr.length)arr[i]=v;else{arr.length=0;arr.push(v);}
  clampDep(card);closePop();renderSec('look');updMain();
}
/* 父槽一换，子槽不在新清单里 → 落到新清单首项 */
function clampDep(card){
  var d=slotArr(card,'dur');if(d.length){var o=slotOpts(card,'dur');if(o.length&&o.indexOf(d[0])<0)d[0]=o[0];}
  var z=slotArr(card,'size');if(z.length){var q=slotOpts(card,'size');if(q.length&&q.indexOf(z[0])<0)z[0]=q[0];}
}
function slotTake(v){
  if(!POP.card)return;
  v=String(v||'').trim();if(!v)return;
  var card=POP.card,row=POP.row,idx=POP.idx,def=slotDef(card,row),arr=slotArr(card,row);
  pushUndo();
  S.look[card].manual=S.look[card].manual||{};S.look[card].manual[row]=true;
  if(idx!=null&&idx>=0&&idx<arr.length){
    if(arr.indexOf(v)>=0&&arr.indexOf(v)!==idx){closePop();return;}
    arr[idx]=v;
  }
  else{
    if(arr.indexOf(v)>=0){closePop();return;}
    if(arr.length>=def.max)arr.shift();
    arr.push(v);
  }
  clampDep(card);
  closePop();renderSec((card==='vs'||card==='wd')?'vs':'look');updMain();
}
function slotDel(card,row,idx,e){
  if(e&&e.stopPropagation)e.stopPropagation();
  var arr=slotArr(card,row);if(idx<0||idx>=arr.length)return;
  pushUndo();S.look[card].manual=S.look[card].manual||{};S.look[card].manual[row]=true;arr.splice(idx,1);
  clampDep(card);
  renderSec((card==='vs'||card==='wd')?'vs':'look');updMain();
}
/* `＋` 直接追加一个未用项（E2／E3 同款 · 不弹层）；候选＝推荐项优先 → 全池 */
function slotAdd(card,row){
  var def=slotDef(card,row);if(!def)return;
  var arr=slotArr(card,row);
  if(arr.length>=def.max)return;
  var rec=(DATA.look.rec&&DATA.look.rec[card]&&DATA.look.rec[card][row])||[];
  var cands=[];
  rec.concat(poolFlat(def.pool)).forEach(function(v){
    if(v!=='无'&&v!==''&&cands.indexOf(v)<0)cands.push(v);
  });
  var nx='';
  for(var k=0;k<cands.length;k++){if(arr.indexOf(cands[k])<0){nx=cands[k];break;}}
  if(!nx)return;
  pushUndo();
  S.look[card].manual=S.look[card].manual||{};S.look[card].manual[row]=true;
  arr.push(nx);
  closePop();renderSec((card==='vs'||card==='wd')?'vs':'look');updMain();
}

function reset(){
  pushUndo();
  S.prop=cp(DATA.prop);
  S.mode=DATA.look.mode||MODES[0];
  S.look={film:cp(DATA.look.film||{}),media:cp(DATA.look.media||{}),style:cp(DATA.look.style||{}),
    wd:{world:(DATA.look.world?[DATA.look.world]:[])},
    vs:{vstyle:cp(DATA.look.vstyle||[])}};
  renderAll();updMain();}
function undo(){var ae=document.activeElement;if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'))return;if(!S.undo.length)return;
  var x=S.undo.pop();S.prop=cp(x.prop);S.look=cp(x.look);S.mode=x.mode;
  renderAll();updMain();}

/* ── 分条发送（全库唯一实现）：单条 ≤430 · 单轮 ≤18 条 ── */
var _Q=null,_H='',_N=0,_I=0;
function chunkText(lines){
  var MAX=430,cs=[],cur='';
  function fl(){if(cur){cs.push(cur);cur='';}}
  (lines||[]).forEach(function(l){
    l=String(l==null?'':l);
    var seg=(l.length>MAX)?(l.match(new RegExp('.{1,'+MAX+'}','g'))||[l]):[l];
    seg.forEach(function(p){if(cur&&cur.length+p.length+1>MAX)fl();cur+=(cur?'\n':'')+p;});
  });
  fl();return cs;
}
function hasPending(){return !!(_Q&&_Q.length);}
function sendPending(){
  if(!hasPending())return 0;
  var b=_Q.slice(0,18),n=0;_Q=_Q.slice(18);
  b.forEach(function(c){_I++;__ljSend(_H+' '+_I+'/'+_N+'\n'+c);n++;});
  toast(_Q.length?('已发 '+n+' 条 · 再点主按钮继续'):('已全部发送（'+_I+'/'+_N+'）'));
  return n;
}
function sendChunks(head,lines){
  if(hasPending()){return sendPending();}
  var cs=chunkText(lines);if(!cs.length)return 0;
  _H=head;_N=cs.length;_I=0;
  var first=cs.slice(0,18);
  _Q=cs.slice(18);
  first.forEach(function(c){_I++;__ljSend(head+(_N>1?' '+_I+'/'+_N:'')+'\n'+c);});
  return first.length;
}

/* ── 回传 ── */
function hasCustom(){
  var base=(DATA.prop&&DATA.prop.rows)||[],cur=(S.prop&&S.prop.rows)||[];
  for(var i=0;i<3;i++){
    var a=String((base[i]||{}).text||'').trim(),b=String((cur[i]||{}).text||'').trim();
    if(a!==b)return true;
  }
  return false;}
function updMain(){var mb=ROOT.querySelector('#b2main');if(!mb)return;var on=hasCustom();
  var ic=on?'<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>':'<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
  mb.innerHTML=ic+'<span id="b2mainT">'+(on?'优化':'确认')+'</span>';
  mb.title=on?'回传 AI 优化（旧内容 × 自定义内容）':'采纳当前产出 · 定稿并推进';
  if(on){mb.classList.add('gold');}else{mb.classList.remove('gold');}}
function slotLine(card,row){
  var def=slotDef(card,row),arr=slotArr(card,row);
  return arr.length?(def.name+'='+arr.join('／')):'';
}
var SENT=false,OUTLINES=[];
function confirmAll(){
  if(SENT)return;var out=[];
  (DATA.base||[]).forEach(function(b){if(b.value)out.push(b.label+'='+b.value);});
  /* 命题：三行单选 → 只回选中且非空的那一行 */
  var pick=(S.prop.pick|0),pr=(S.prop.rows||[])[pick],pt=String((pr&&pr.text)||'').trim();
  if(pt)out.push('命题'+(pick+1)+'='+pt);
  var _cf=((S.prop.conflict||[]).join('／')||'未选');
  out.push('命题矩阵=核心母体 '+(S.prop.mother||'未选')+' × 冲突模块 '+_cf+' × 情绪主核 '+(S.prop.emotion||'未选'));
  out.push('项目基调='+S.mode);
  if(S.mode==='系列'){
    var s0=(DATA.look&&DATA.look.series)||{};
    out.push('系列卡='+(s0.name||'')+'｜'+((s0.rows||[]).map(function(r){return r[0]+' '+r[1];}).join('｜')));
  }
  if(S.mode==='影视'){
    var f=[];SLOT.film.forEach(function(d){var l=slotLine('film',d.k);if(l)f.push(l.replace('=',' '));});
    out.push('影视卡='+f.join('｜'));
  }
  if(S.mode==='媒体'){
    var m=[];SLOT.media.forEach(function(d){if(!slotOn('media',d))return;var l=slotLine('media',d.k);if(l)m.push(l.replace('=',' '));});
    out.push('媒体卡='+m.join('｜'));
  }
  if(S.mode!=='系列'){
    var st=[];SLOT.style.forEach(function(d){var l=slotLine('style',d.k);if(l)st.push(l.replace('=',' '));});
    if(st.length)out.push('制式定调='+st.join('｜'));
  }
  var wd=slotArr('wd','world');
  if(wd.length)out.push('世界观='+wd.join('／'));
  var vs=slotArr('vs','vstyle');
  if(vs.length)out.push('视觉风格='+vs.join('／'));
  moB.innerHTML=out.map(function(l){return '<div class="ljOl">'+esc(l)+'</div>';}).join('');
  OUTLINES=out;ovl.classList.add('on');
}
function submit(){
  if(hasPending()){sendPending();return;}
  if(SENT)return;
  if(typeof sendPrompt!=='function'){toast('当前环境不支持发送 · 回传预览已保留');return;}
  SENT=true;ovl.classList.remove('on');
  var head='【项目设计·'+(hasCustom()?'优化':'确认')+'】';
  var n=sendChunks(head,OUTLINES);
  toast(hasPending()?('已发 '+n+' 条 · 再点「确认」继续'):('已提交回传'+(n>1?'（'+n+' 条）':'')));
}
function closeM(){ovl.classList.remove('on');}
function toast(t){tst.textContent=t;tst.classList.add('on');clearTimeout(tst._h);tst._h=setTimeout(function(){tst.classList.remove('on');},2200);}
function skip(){if(SENT)return;SENT=true;if(typeof sendPrompt==='function')__ljSend('【项目设计·跳过】AI 按优选完成项目设计，直接推进故事本（p3）');}
function up(){if(SENT)return;try{reset();}catch(e){}SENT=true;if(typeof sendPrompt==='function')__ljSend('【项目设计·上一级】返回话题选择门（B1）｜本面板已清空并初始化；待 B1 确认新话题后，按新内容重新做项目设计（重选话题）');}

renderAll();updMain();
ROOT.addEventListener('click',function(e){
  if(!e.target.closest('.ljPop')&&!e.target.closest('.ljVal')&&!e.target.closest('.ljAdd'))closePop();
});
ROOT.addEventListener('wheel',function(e){if(e.target.closest('.ljBd')||e.target.closest('.ljMoB')||e.target.closest('.ljPop'))return;e.preventDefault();},{passive:false});
if(window.__ljKH2)document.removeEventListener('keydown',window.__ljKH2);
window.__ljKH2=function(e){if((e.ctrlKey||e.metaKey)&&String(e.key).toLowerCase()==='z'){var ae=document.activeElement;if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'))return;e.preventDefault();undo();}
  if(e.key==='Escape')closePop();};
document.addEventListener('keydown',window.__ljKH2);
window.LJ={propOn:propOn,propTxt:propTxt,mce:mce,mceTake:mceTake,mceCust:mceCust,
  cfOpen:cfOpen,cfMore:cfMore,cfCat:cfCat,cfBack:cfBack,cfTake:cfTake,cfCust:cfCust,cfAdd:cfAdd,cfDel:cfDel,
  mode:setMode,slotOpen:slotOpen,slotCat:slotCat,slotTake:slotTake,slotDel:slotDel,slotAdd:slotAdd,slotCyc:slotCyc,
  slotMore:slotMore,slotBack:slotBack,slotCust:slotCust,cycMenu:cycMenu,cycSet:cycSet,
  reset:reset,undo:undo,confirm:confirmAll,submit:submit,closeM:closeM,skip:skip,up:up,closePop:closePop};
})();

/* 成形标记：load 后两帧置 ljReady —— 渲染中不挂滚动条 */
(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}
if(document.readyState==='complete')r();else window.addEventListener('load',r);})();
})();
