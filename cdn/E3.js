/* 自动生成，勿手改：源 ui/E3_场景卡.html
   用法：面板侧 window.LJ_DATA = {...} 后加载本文件 */
(function(){
var CSS = "\nhtml,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{font-family:-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;position:relative;overflow:hidden;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px}\n.ljP *{box-sizing:border-box;margin:0}\n.ljSr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ljHd{padding:48px 16px 10px;display:flex;align-items:center;flex:none}\n.ljTt{font-size:15px;font-weight:500;color:#E8EEF4}\n.ljHc{margin-left:auto;display:flex;gap:6px}\n.ljHb{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:6px;padding:4px 9px;cursor:pointer;font-family:inherit;transition:.15s}\n.ljHb:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljBd{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px 28px;background:#0F1317}\n.ljItem{background:#171C22;border:1px solid rgba(255,255,255,.06);border-radius:9px;padding:12px 14px 13px;margin-bottom:10px}\n.ljGRp{display:flex;align-items:center;gap:8px;font-size:11px;color:rgba(94,107,120,.85);letter-spacing:.5px;margin:9px 0 3px;user-select:none;-webkit-user-select:none}\n.ljItem>.ljGRp:first-of-type{margin-top:2px}\n.ljCorner{margin-left:auto;display:flex;align-items:center;gap:1px;flex:none}\n.ljIco{display:inline-flex;align-items:center;justify-content:center;width:19px;height:19px;border-radius:5px;cursor:pointer;opacity:.85;user-select:none;-webkit-user-select:none}\n.ljIco:hover{background:rgba(62,198,216,.12);opacity:1}\n.ljIco svg{display:block}\n.ljIco.ljDel svg{stroke:#D9574A}                 /* 折叠行「删除」＝红（需确认） */\n/* 删减后的折叠行（E2 同构）：`场 1 2 3 ｜ 已删减` ＋ 右侧 删除（红）／恢复 */\n.ljFoldItem{background:#141A20;border:1px dashed rgba(255,255,255,.12);border-radius:9px;padding:9px 14px;margin-bottom:10px;display:flex;align-items:center;font-size:12px;color:#7E8B99}\n.ljFoldItem .ljFS{color:#7E8B99}\n.ljFoldItem .ljItemCorner{margin-left:auto;display:flex;align-items:center;gap:2px}\n/* 删除确认弹框 */\n.ljCfm{width:80%}\n.ljCfmH{font-size:13.5px;font-weight:500;color:#E8EEF4;margin-bottom:9px;display:flex;align-items:center;gap:7px}\n.ljCfmB{font-size:12.5px;color:#9FADB9;line-height:1.75}\n.ljDelBtn{background:#3EC6D8;border-color:#3EC6D8;color:#0F1317}\n.ljDelBtn:hover{background:#63D6E4;border-color:#63D6E4;color:#0F1317}\n.ljMeta{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:14px;font-size:12px;color:#8A97A3;line-height:1.95}\n.ljCid{font-size:12px;color:#E8EEF4;letter-spacing:.4px}         /* 卡头＝该套唯一标识（单套＝场02 · 有覆盖段＝场 1 2 3） */\n.ljDv{color:#3C4652;font-size:11px;margin:0 1px}                 /* 卡头与简介之间的一道暗分隔 */\n.ljSty{font-size:12px;color:#9FADB9}\n.ljStl{font-size:11px;color:#5E6B78;margin-right:6px;letter-spacing:.5px}\n.ljDm{color:#66707A;white-space:normal}   /* 简介＝剧情简介 · 暗字（纯文本） */\n.ljHf{color:#9FADB9;white-space:normal}   /* 时代背景三值 · 半亮（纯文本） */\n.ljEd{color:#C9D4DE;border-bottom:1px dashed rgba(255,255,255,.2);padding-bottom:1px;outline:none;cursor:text;transition:.15s}\n.ljEd:hover,.ljEd:focus{color:#3EC6D8;border-bottom-color:rgba(62,198,216,.5)}\n.ljSRow{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:18px;min-height:25px;line-height:2.05}\n.ljFld{display:inline-flex;flex-wrap:wrap;align-items:baseline}\n.ljSL{font-size:12px;color:#8A97A3;margin-right:3px;white-space:nowrap}\n/* 二级标（形色/场景/定位/时节/氛围/环境物）字号参考 E2「版型：」观感 → 13px（与值同大）· 简介/时代背景等仍 12px */\n.ljSL2{font-size:13px}\n.ljSV{font-size:13px;color:#C9D4DE;cursor:pointer;border-bottom:1px dashed transparent;transition:.15s;white-space:nowrap;user-select:none;-webkit-user-select:none}   /* 可换选＝亮（本卡最亮一级） */\n.ljSV:hover{color:#3EC6D8;border-bottom-color:rgba(62,198,216,.5)}\n.ljX{color:#6C7A87;font-size:11px;margin:0 3px}\n.ljSep{color:#3C4652;font-size:11px;margin:0 3px}\n.ljRm{display:inline-block;color:#6A7683;cursor:pointer;padding:0 3px;margin:0 2px 0 0;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljRm:hover{color:#D9B75B}\n.ljAdd{display:inline-block;color:#3EC6D8;cursor:pointer;padding:0 3px;margin-left:-3px;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljIt{display:inline-block;white-space:nowrap}\n/* 二级标行首的骰子：15px 容器（居中 13px 图标）· align-self:center + 微调 top 与行标文字齐平 */\n.ljIco.ljIcoL{width:15px;height:15px;flex:none;margin:0 3px 0 0;vertical-align:-2px;position:relative;top:0;opacity:.88}\n.ljDice{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;margin:0 3px 0 1px;cursor:pointer;flex:none;vertical-align:-1px;opacity:.95;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljDice.gap{margin-left:8px}\n.ljDice:hover svg{stroke:#C9D4DE}\n.ljDice:hover svg circle{fill:#C9D4DE}\n.ljAdd:hover{color:#D9B75B}\n.ljFt{flex:none;display:flex;justify-content:flex-end;gap:8px;background:#0F1317;padding:11px 16px;border-top:1px solid rgba(255,255,255,.06)}\n.ljBtn{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#C9D4DE;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:7px;padding:6px 14px;cursor:pointer;font-family:inherit;transition:.15s}\n.ljBtn:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljPri{color:#3EC6D8;border-color:rgba(62,198,216,.55)}\n.ljPri:hover{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n/* ── 弹层（E2 同款：单列推荐 → 更多 → 两栏 · 宽度按内容实测）── */\n.ljPop{position:absolute;z-index:45;display:none;box-shadow:0 10px 26px rgba(0,0,0,.5);background:#1B2129;border:1px solid rgba(62,198,216,.35);border-radius:8px;padding:5px;min-width:120px;max-width:330px;max-height:300px;overflow:auto;overscroll-behavior:contain}\n.ljPop.on{display:block}\n.ljPc{display:flex;flex-direction:column;gap:2px;padding:5px 9px;border-radius:5px;cursor:pointer;font-size:12.5px;color:#C9D4DE;white-space:nowrap}\n.ljPc:hover{background:rgba(62,198,216,.1)}\n.ljPc.on{color:#3EC6D8}\n.ljPop.pickone{max-height:none}\n.ljColOne{display:flex;flex-direction:column;max-height:none}\n.ljColOne .ljOpts{flex:0 1 auto;min-height:0;max-height:208px;overflow-y:auto;padding:0}\n.ljColOne .ljOpts .ljPc{line-height:16px}\n.ljColOne .ljFixOne{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding-top:2px;margin-top:2px}\n.ljColOne .ljFixOne .ljPc{flex-direction:row;align-items:center;height:26px;padding:0 9px}\n.ljColOne .ljFixOne .ljMore{color:#7E8B99;font-size:11.5px}\n.ljPop.wide{width:auto;max-height:none;padding:0;overflow:hidden}\n.ljPop.wide.on{display:flex;flex-direction:column;height:268px}\n.ljSplit{display:flex;flex:1 1 auto;min-height:0;max-height:none}\n.ljOpts{flex:1 1 auto;min-width:0;overflow:auto;padding:5px 6px;overscroll-behavior:contain}\n.ljCats{flex:0 0 auto;width:54px;border-right:1px solid rgba(255,255,255,.07);padding:5px 4px;overflow:auto;background:rgba(0,0,0,.16);overscroll-behavior:contain}\n.ljCat{font-size:11.5px;color:#7E8B99;padding:5px 8px;border-radius:6px;cursor:pointer;text-align:left;user-select:none;-webkit-user-select:none;line-height:1.25}\n.ljCat:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljCat.on{color:#3EC6D8;background:rgba(62,198,216,.12)}\n.ljPop.wide .ljCats{width:54px;padding:4px;overflow-y:auto}\n.ljPop.wide #ljPopL .ljPc{height:25px;flex-direction:row;align-items:center;white-space:nowrap;padding:0 4px;gap:0}\n.ljPop.wide #ljPopL .ljPc.on{background:rgba(62,198,216,.14);color:#3EC6D8}\n.ljPop.wide .ljCats .ljCat{height:25px;display:flex;align-items:center;padding:0 3px;white-space:nowrap}\n.ljPop.wide .ljFix{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding:0 5px 4px}\n.ljPop.wide .ljFix .ljPc{height:26px;font-size:11.5px;color:#7E8B99;padding:0 9px;display:flex;flex-direction:row;align-items:center}\n.ljPop,.ljOpts,.ljCats{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.20) transparent}\n.ljPop::-webkit-scrollbar,.ljOpts::-webkit-scrollbar,.ljCats::-webkit-scrollbar{width:6px;height:6px}\n.ljPop::-webkit-scrollbar-thumb,.ljOpts::-webkit-scrollbar-thumb,.ljCats::-webkit-scrollbar-thumb{background:rgba(255,255,255,.16);border-radius:3px}\n.ljPop::-webkit-scrollbar-track,.ljOpts::-webkit-scrollbar-track,.ljCats::-webkit-scrollbar-track{background:transparent}\n.ljCst{background:transparent;border:none;border-bottom:1px dashed rgba(255,255,255,.22);outline:none;color:#C9D4DE;font-size:12.5px;width:100%;font-family:inherit;padding:3px 2px}\n.ljCst:focus{border-bottom-color:#3EC6D8}\n.ljOvl{position:absolute;inset:0;background:rgba(8,10,13,.78);display:none;align-items:center;justify-content:center;z-index:50}\n.ljOvl.on{display:flex}\n.ljMod{background:#171C22;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:86%;max-height:76%;display:flex;flex-direction:column;padding:14px 16px}\n.ljMoH{font-size:13.5px;font-weight:500;color:#E8EEF4;margin-bottom:9px}\n.ljMoB{overflow:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:6px}\n.ljOl{font-size:12.5px;color:#9FADB9;background:rgba(255,255,255,.03);border-radius:6px;padding:6px 9px;line-height:1.5;white-space:pre-wrap}\n.ljMoF{margin-top:10px;display:flex;justify-content:flex-end;gap:8px}\n.ljTst{position:absolute;left:50%;bottom:72px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12.5px;padding:7px 16px;border-radius:8px;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;z-index:60}\n.ljTst.on{opacity:1}\ninput::placeholder{color:#59636D!important;opacity:1}\n.ljBd,.ljPop{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar,.ljPop::-webkit-scrollbar{width:0;height:0}\nhtml.ljReady .ljBd,html.ljReady .ljPop{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar,html.ljReady .ljPop::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb,html.ljReady .ljPop::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\n@media (max-width:520px){.ljP{max-height:none}}\n";
var HTML = "<meta charset=\"utf-8\">\n<!-- ============================================================\n  【E3 · 场景卡】标准组件模板 —— 实现唯一源（B4 故事情节「场景」小标右边 高阶 ＝ 开 时展开 · **开几套就几张卡**）\n  使用方式：只替换下方「数据区」（DATA 对象 · `卡:[…]` 数组）→ 输出完整代码给 show_widget\n  ❌ 组件代码区一字不改（改交互 = 修改本文件一处，全库生效）\n  **一张卡＝B4 的一个「场景」套**（`DATA.卡` 一项一张 · 数组顺序＝B4 顺序 · 每张卡各自一套选值／各自整卡随机／各自回传）\n  **卡右上两键（E2 同构）**：**骰子**＝**整卡随机**（各轴只出推荐项 · Ctrl+Z 可撤销）｜`—`＝**删减该卡 → 回用 AI 优选／原设定**（收起为折叠行 `场 1 2 3 ｜已删减` · **可恢复**、选值原样带回）\n  **折叠行右两键**：`—`（红）＝**彻底删除该卡** → 弹确认框「⚠ 是否删除该卡？确认后将清除「<本卡标识>」的场景设定／情绪氛围／空间置景等一切资料，且不可恢复」→ `取消`／`删除`（**提示文字随卡不同**）｜`↺`（青）＝恢复该卡；**已删减＝不回传精修值**（回传写「已删减 · B5 用 B4 原串」）· **已删除＝整条不出现、不计入套数**\n  结构：基础信息（**卡头标识＝该套唯一一项**：单套（无覆盖段）→ `场01`；有覆盖段 → `场 1 2 3` —— ❌ 两项并排 ｜ `简介：…`〔🔴 **写这一场讲什么 · 表达什么情绪 · 温度感知**（三段 `·` 分隔，如 `纸袋塌底，蹲在玄关把旧物一件件捡起 · 失而复得的松快 · 指尖发凉，屋里微温`）· **不是场景描述** · 纯文本 · 非自由文本 · **暗字** `ljDm`〕 ／ **时代背景**〔B3 三值纯文本 `现代 南方 城市` · **半亮** `ljHf`〕 ／ 取景〔场景大类 · B3 故事设定该段右侧选的「取景」带入 · 决定 形式/样式/地方/气氛/环境物 五轴推荐〕 ／ 内外〔室内／室外／户外 · B3 该段三态带入 · 直接进场景串〕)\n  **亮度三级**：可换选（各轴值＋环境物）＝最亮 `#C9D4DE` ／ 时代背景·取景·内外＝半亮 `#9FADB9` ／ 简介＝暗 `#66707A`\n        场景设定（形色 形式×形色 ／ 场景 样式×地方 ／ 定位 落点×位置）\n        情绪氛围（时节 气节×时间 ／ 氛围 气氛×色调）\n        空间置景（环境物 · 多值 · **无上限**（`＋` 恒显示）· **`＋` ＝直接追加一个未用项**（E2 同款 · ❌ 不弹层）· 每项后 `－` 移除 · 格式＝色+形态+物；**每个环境物值前一枚小灰骰子（`#8A97A3` · 13px · `ljDice`）＝只随机换这一项**（推荐池轮完进池 · Ctrl+Z）；确认时随「环境物=」回传，供 B5 数据 `环境物` 数组逐条填）\n  回填格式（`场景=` 与 `回填B4·场景=` 同一串）：`时代 地理 背景 | 气节 时间 | 气氛 色调 | 内外 形式形色样式地方 落点位置`（段间 ` | ` · 段内空格 · 词组内连写）\n  换选：点值 → 单列＝AI 推荐项（REC[轴] · **取景大类优先 CATREC[本卡.取景]** · 5-8 项 · 池 ≤8 则全列）→ `更多...` → 两栏（左类右项 · 全池）\n        单列轴（落点 ／ 位置 ／ 色调）＝全池单列、不设两栏\n  回传：确认 → 回传预览弹层（收起 ／ 提交）→ 提交后按钮转「已提交」；自动分条（单条 ≤430 · 单轮 ≤18）\n============================================================   📌 本文件内的选项／推荐仅为示例：每期必须按本期材料重写 DATA 区与 REC，禁止直接沿用。\n-->\n<div class=\"ljP\">\n\n<h2 class=\"ljSr\">场景卡：形色／场景／定位／时节／氛围／环境物</h2>\n<div class=\"ljHd\">\n  <span class=\"ljTt\">场景卡</span>\n  <div class=\"ljHc\">\n    <button class=\"ljHb\" onclick=\"LJ.up()\" title=\"回 B4 剧本面板\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V6\"/><path d=\"M6 11l6-6 6 6\"/></svg>上一级</button>\n    <button class=\"ljHb\" onclick=\"LJ.skip()\" title=\"不细设场景，由 AI 按 B4 场景行自选\">跳过<svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 5l7 7-7 7\"/><path d=\"M13 5l7 7-7 7\"/></svg></button>\n  </div>\n</div>\n<div class=\"ljBd\" id=\"bd\"></div>\n<div class=\"ljOvl\" id=\"ovl\"><div class=\"ljMod\"><div class=\"ljMoH\">回传预览 · 确认后提交 AI</div><div class=\"ljMoB\" id=\"moB\"></div><div class=\"ljMoF\"><button class=\"ljBtn\" onclick=\"LJ.closeM()\" title=\"收起（返回面板继续调整）\">收起</button><button class=\"ljBtn ljPri\" onclick=\"LJ.submitAll()\" title=\"提交回传给 AI\">提交</button></div></div></div>\n<div class=\"ljOvl\" id=\"cfm\"><div class=\"ljMod ljCfm\"><div class=\"ljCfmH\"><span style=\"color:#D9B75B\">⚠</span><span>是否删除该卡？</span></div><div class=\"ljCfmB\" id=\"cfmB\"></div><div class=\"ljMoF\"><button class=\"ljBtn\" onclick=\"LJ.cfmNo()\" title=\"取消（不删除）\">取消</button><button class=\"ljBtn ljDelBtn\" onclick=\"LJ.cfmYes()\" title=\"删除该卡（不可恢复 · 不参与回传）\">删除</button></div></div></div>\n<div class=\"ljFt\">\n  <button class=\"ljBtn ljPri\" id=\"okb\" onclick=\"LJ.confirm()\" title=\"先看回传预览，再提交\">确认</button>\n</div>\n<div class=\"ljTst\" id=\"tst\"></div>\n</div>\n\n\n<script>\n(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}\nif(document.readyState==='complete')r();else window.addEventListener('load',r);})();\n</script>";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;
/* ==================== 数据区（每期只换这里） ==================== */
var DATA = window.LJ_DATA || {};
(function(){
var me=document.currentScript&&document.currentScript.closest?document.currentScript.closest('.ljP'):null;
var ROOT=me||Array.prototype.slice.call(document.querySelectorAll('.ljP')).pop();
if(!ROOT)return;
var bd=ROOT.querySelector('.ljBd'),ovl=ROOT.querySelector('.ljOvl'),moB=ROOT.querySelector('.ljMoB');
var cfm=ROOT.querySelector('#cfm'),cfmB=ROOT.querySelector('#cfmB');
var pop=document.createElement('div');pop.className='ljPop';ROOT.appendChild(pop);

function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function isArr(v){return Object.prototype.toString.call(v)==='[object Array]';}
function asList(v){return isArr(v)?v.slice():(v===undefined||v===null||v===''?[]:[v]);}
function maxOf(ax){return MAXS[ax]||1;}
/* ── 多卡：DATA.卡[]（B4 每套开高阶＝一张卡 · 开几套几张）；旧单卡 DATA 自动兜成一张 ── */
function cardsOf(d){
  var a=d&&d.卡;
  if(isArr(a)&&a.length)return a.slice();
  return [{场:d.场,取景:d.取景,内外:d.内外,简介:d.简介,时代:d.时代,设定:d.设定,环境物:d.环境物}];
}
var CARD=cardsOf(DATA);
var S={st:[],sent:false};
var CUR=0;
CARD.forEach(function(){S.st.push({pick:{},ed:{}});});
function cardOf(ci){return CARD[(ci==null?CUR:ci)]||CARD[0]||{};}
function stOf(ci){return S.st[(ci==null?CUR:ci)]||{pick:{},ed:{}};}
function rawOf(ax,ci){var c=cardOf(ci);return ax==='环境物'?c.环境物:(c.设定||{})[ax];}
function valOf(ax,ci){var s=stOf(ci);return (s.pick[ax]!==undefined)?s.pick[ax]:rawOf(ax,ci);}
function introOf(ci){var s=stOf(ci);return (s.ed['简介']!==undefined)?s.ed['简介']:cardOf(ci).简介;}
/* 卡头＝该套**唯一标识**：单套（无覆盖段）→ `场01`；有覆盖段 → `场 1 2 3`（❌ 两者并排） */
function headOf(c){
  var raw=String((c||{}).场||'场01').split('｜').map(function(x){return x.trim();}).filter(Boolean);
  var no=raw[0]||'场01',cov='';
  for(var i=1;i<raw.length;i++){
    var m=raw[i].match(/^(?:场景|场)\s*([\d\s]+)$/);
    if(m)cov='场 '+m[1].trim().split(/\s+/).join(' ');
  }
  return {no:no,cov:cov,id:cov||no};
}
/* 时代背景＝B3 三值纯信息（现代 南方 城市 · 半亮） */
function eraTxt(c){var a=(c||{}).时代||[];return a.length?a.join(' '):'—';}
/* 骰子＝「随机」统一图标（四宫格圆角方＋4 点 · 与 E1 角色名旁同形） */
var ICO_RND='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3EC6D8" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8.5" cy="8.5" r="1.3" fill="#3EC6D8" stroke="none"/><circle cx="15.5" cy="15.5" r="1.3" fill="#3EC6D8" stroke="none"/><circle cx="15.5" cy="8.5" r="1.3" fill="#3EC6D8" stroke="none"/><circle cx="8.5" cy="15.5" r="1.3" fill="#3EC6D8" stroke="none"/></svg>';
/* 二级标骰子（青 13px · 与值前灰骰子同尺寸）＝只摇换本行：形色 ／ 场景 ／ 定位 ／ 时节 ／ 氛围 各摇两轴，环境物摇一批 */
/* 二级标骰子：青 #35A9BA（比整卡骰子 #3EC6D8 稍暗一档）· 13px · 与灰骰子（ICO_IT）同尺寸 · 放在六个行标（形色／场景／定位／时节／氛围／环境物）开头 */
var ICO_GD='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#35A9BA" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.8" cy="8.8" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="15.2" cy="15.2" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="15.2" cy="8.8" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="8.8" cy="15.2" r="1.4" fill="#35A9BA" stroke="none"/></svg>';
/* 灰骰子（单项随机 · 11px · 灰 #7E8B99，hover 提亮） */
var ICO_IT='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#8A97A3" stroke-width="2"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.8" cy="8.8" r="1.5" fill="#8A97A3" stroke="none"/><circle cx="15.2" cy="15.2" r="1.5" fill="#8A97A3" stroke="none"/><circle cx="15.2" cy="8.8" r="1.5" fill="#8A97A3" stroke="none"/><circle cx="8.8" cy="15.2" r="1.5" fill="#8A97A3" stroke="none"/></svg>';
var ICO_MINUS='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3EC6D8" stroke-width="2.2" stroke-linecap="round"><path d="M4 12h16"/></svg>';
var ICO_BACK='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#3EC6D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h9a6 6 0 0 1 0 12H8"/></svg>';
var ICO_OK='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>';

/* ---------- 值槽（ci＝卡号） ---------- */
function slot(ax,ci){
  var mx=maxOf(ax);
  if(mx<=1){
    var v=valOf(ax,ci);
    return '<span class="ljSV" onclick="LJ.pop(this,\''+ax+'\',-1,'+ci+')" title="点击换选">'+(v?esc(v):'—')+'</span>';
  }
  var arr=asList(valOf(ax,ci)),h='';
  if(!arr.length)return '<span class="ljSV" onclick="LJ.pop(this,\''+ax+'\',-1,'+ci+')" title="点击选择">—</span>'
    +'<span class="ljAdd" onclick="LJ.add(\''+ax+'\','+ci+')" title="加一项（直接取一个未用项）">＋</span>';
  arr.forEach(function(x,i){
    h+='<span class="ljIt"><span class="ljDice'+(i?' gap':'')+'" onclick="LJ.reEnv(\''+ax+'\','+ci+','+i+')" title="随机换这一项">'+ICO_IT+'</span>';
    h+='<span class="ljSV" onclick="LJ.pop(this,\''+ax+'\','+i+','+ci+')" title="点击换选">'+esc(x)+'</span></span>';
    if(i===0&&arr.length<mx)h+='<span class="ljAdd" onclick="LJ.add(\''+ax+'\','+ci+')" title="加一项（直接取一个未用项）">＋</span>';
    else h+='<span class="ljRm" onclick="LJ.rm(\''+ax+'\','+i+','+ci+')" title="移除这一项">－</span>';
  });
  return h;
}
/* 一张卡：基础信息（卡头标识 ＋ 简介暗字 ／ 时代背景半亮 ＋ 取景·内外）→ 场景设定 → 情绪氛围 → 空间置景 */
/* 二级标行：行首一枚青骰子（13px · 与值前灰骰子同大）＝只摇换本行两个轴 */
function rowHTML(r,k,ci){
  return '<div class="ljSRow"><span class="ljFld">'
    +'<span class="ljSL ljSL2"><span class="ljIco ljIcoL" onclick="LJ.autoRow('+ci+','+k+')" title="摇换本行（'+r[0]+' · '+r[1]+'／'+r[2]+' · Ctrl+Z 可撤销）">'+ICO_GD+'</span>'+r[0]+'：</span>'+slot(r[1],ci)+'<span class="ljX">×</span>'+slot(r[2],ci)+'</span></div>';
}
function cardHTML(c,ci){
  var HP=headOf(c),h='<div class="ljItem">';
  h+='<div class="ljGRp">基础信息<span class="ljCorner">'
    +'<span class="ljIco" onclick="LJ.autoCard('+ci+')" title="整卡随机（各轴按池重选 · Ctrl+Z 可撤销）">'+ICO_RND+'</span>'
    +'<span class="ljIco" onclick="LJ.fold('+ci+')" title="删减该卡 → 回用 AI 优选／原设定（可恢复）">'+ICO_MINUS+'</span>'
    +'</span></div>';
  h+='<div class="ljMeta" style="align-items:baseline"><span class="ljCid">'+esc(HP.id)+'</span><span class="ljDv">｜</span>'
    +'<span class="ljFld"><span class="ljSL">简介：</span><span class="ljDm">'+esc(introOf(ci))+'</span></span></div>';
  h+='<div class="ljMeta"><span class="ljFld"><span class="ljSL">时代背景：</span><span class="ljHf">'+esc(eraTxt(c))+'</span></span>'
    +'<span class="ljSty" title="取景＝B3 该段选的场景大类 · 形式／样式／地方／气氛／环境物 的单列推荐随它走"><span class="ljStl">取景</span>'+esc(c.取景||'未定')+'<span class="ljStl" style="margin-left:12px">内外</span>'+esc(c.内外||'—')+'</span></div>';
  h+='<div class="ljGRp">场景设定</div>';
  ROWS.slice(0,3).forEach(function(r,k){
    h+=rowHTML(r,k,ci);
  });
  h+='<div class="ljGRp">情绪氛围</div>';
  ROWS.slice(3).forEach(function(r,k){
    h+=rowHTML(r,k+3,ci);
  });
  h+='<div class="ljGRp">空间置景</div>';
  h+='<div class="ljSRow"><span class="ljFld">'
    +'<span class="ljSL ljSL2"><span class="ljIco ljIcoL" onclick="LJ.autoEnv('+ci+')" title="摇换本行（环境物 · 取景推荐 6-8 件 · Ctrl+Z 可撤销）">'+ICO_GD+'</span>环境物：</span>'+slot('环境物',ci)+'</span></div>';
  return h+'</div>';
}
/* 删减后的折叠行：`场 1 2 3 ｜已删减` ＋ 右侧 删除（红 · 需确认）／恢复（青 · 选值原样带回） */
function foldHTML(c,ci){
  return '<div class="ljFoldItem"><span class="ljCid">'+esc(headOf(c).id)+'</span><span class="ljFS">｜已删减</span>'
    +'<span class="ljItemCorner">'
    +'<span class="ljIco ljDel" onclick="LJ.delAsk('+ci+')" title="彻底删除该卡（需确认 · 不可恢复）">'+ICO_MINUS+'</span>'
    +'<span class="ljIco" onclick="LJ.fold('+ci+')" title="恢复该卡（带回删减前的选值）">'+ICO_BACK+'</span>'
    +'</span></div>';
}
function render(){
  var h='';
  CARD.forEach(function(c,ci){
    var st=S.st[ci]||{};
    if(st.drop)return;
    h+=st.fold?foldHTML(c,ci):cardHTML(c,ci);
  });
  bd.innerHTML=h;
  var ok=document.getElementById('okb');if(!ok)return;
  if(S.sent){ok.innerHTML=ICO_OK+'<span>已提交</span>';ok.style.opacity='.55';}
  else{ok.innerHTML=ICO_OK+'<span>确认</span>';ok.style.opacity='';}
}
/* 环境物随机（本卡）：取景大类推荐项里取 6-8 件（不足才补全池）；整卡随机与「环境物」行首骰子共用 */
function randEnv(ci){
  /* 整批随机＝只从推荐项里挑 6-8 件（CATREC[取景] → REC → 池兜底） */
  var CR=CATREC[cardOf(ci).取景]||{};
  var rec=(CR['环境物']&&CR['环境物'].length)?CR['环境物'].slice():((REC['环境物']||[]).slice());
  var n=6+Math.floor(Math.random()*3),out=[];
  while(out.length<n&&rec.length){out.push(rec.splice(Math.floor(Math.random()*rec.length),1)[0]);}
  if(out.length<n){
    var pool=(AX['环境物']||[]).filter(function(x){return out.indexOf(x)<0;});
    while(out.length<n&&pool.length){out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);}
  }
  return out;
}

/* ---------- 弹层 ---------- */
var POP={el:null,ax:null,idx:-1,cat:0,ci:0};
var CFM={ci:null};
var _MW=null;
function measW(t,fs,ff){
  if(!_MW){_MW=document.createElement('span');_MW.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;pointer-events:none';document.body.appendChild(_MW);}
  _MW.style.fontSize=fs+'px';_MW.style.fontFamily=ff;_MW.textContent=t;return _MW.offsetWidth;
}
function placePop(el){
  if(!el||!el.getBoundingClientRect)return;
  if(!document.contains(el))el=ROOT;
  var r=el.getBoundingClientRect(),pr=ROOT.getBoundingClientRect();
  var W=pop.offsetWidth,H=pop.offsetHeight,L=r.left-pr.left;
  if(L+W>ROOT.clientWidth-8)L=Math.max(8,ROOT.clientWidth-W-10);
  pop.style.left=L+'px';
  var T=r.bottom-pr.top+6;
  if(T+H>ROOT.clientHeight-8){var up=r.top-pr.top-H-6;T=(up>=8)?up:Math.max(8,ROOT.clientHeight-H-8);}
  if(T+H>ROOT.clientHeight-8)T=Math.max(8,ROOT.clientHeight-H-8);
  pop.style.top=T+'px';
}
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
  POP.el=el||POP.el;pop.innerHTML=html;
  pop.classList.toggle('wide',!!wide);pop.classList.toggle('pickone',!wide);pop.classList.add('on');
  fitWide();placePop(POP.el);
}
function closePop(){pop.classList.remove('on');}
function curOn(v){
  var cur=valOf(POP.ax,POP.ci);
  return isArr(cur)?cur.indexOf(v)>=0:String(cur)===String(v);
}
function itemHTML(v){
  return '<div class="ljPc'+(curOn(v)?' on':'')+'" onclick="LJ.choose(\''+String(v).replace(/'/g,"\\'")+'\')"><span>'+esc(v)+'</span></div>';
}
/* 推荐：REC[轴]（5-8 项）→ 池 ≤8 项＝全列；当前值在推荐内才置顶 · 单列不掺池项 */
function recList(ax){
  var pool=AX[ax]||[],out=[];
  if(ONEONLY[ax])return pool.slice(0,12);
  if(pool.length<=8)return pool.slice();
  var _CR=(CATREC[cardOf(POP.ci).取景]||{})[ax];   /* 取景大类推荐优先（取景决定场景/空间），缺则回落 REC */
  (_CR||REC[ax]||[]).forEach(function(v){if(pool.indexOf(v)>=0&&out.indexOf(v)<0)out.push(v);});
  if(!out.length)out=pool.slice(0,6);
  var cur=asList(valOf(ax,POP.ci)).filter(function(x){return typeof x==='string'&&x;});
  cur.forEach(function(v){var i=out.indexOf(v);if(i>0){out.splice(i,1);out.unshift(v);}});
  return out.slice(0,8);
}
function catList(){
  var g=GRP[POP.ax]||[],out=[{name:'推荐',items:recList(POP.ax)}];
  if(g.length)g.forEach(function(c){out.push({name:c[0],items:c[1]});});
  else out.push({name:'全部',items:AX[POP.ax]||[]});
  return out;
}
function catHTML(){return catList().map(function(g,i){return '<div class="ljCat'+(POP.cat===i?' on':'')+'" onclick="LJ.gpCat('+i+')">'+esc(g.name)+'</div>';}).join('');}
function catItems(){var G=catList(),g=G[POP.cat]||G[0];return (g.items||[]).map(itemHTML).join('');}
function inpHTML(){return '<div class="ljPc" style="padding:3px 9px"><input class="ljCst" placeholder="自定义…（回车确定）" onkeydown="if(event.key===\'Enter\'){event.preventDefault();LJ.cust(this.value);}"></div>';}
function drawOne(el){
  var list=recList(POP.ax),html='<div class="ljColOne"><div class="ljOpts" id="ljPopL">'+list.map(itemHTML).join('')+'</div><div class="ljFixOne">';
  if(!ONEONLY[POP.ax]&&(AX[POP.ax]||[]).length>list.length)html+='<div class="ljPc ljMore" onclick="event.stopPropagation();LJ.gmore()">更多...</div>';
  html+=inpHTML()+'</div></div>';
  openPopAt(el,html,false);
}
function drawWide(el){
  openPopAt(el,'<div class="ljSplit"><div class="ljCats">'+catHTML()+'</div><div class="ljOpts" id="ljPopL">'+catItems()+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="event.stopPropagation();LJ.gone()" title="收回单列">收起</div>'+inpHTML()+'</div>',true);
}

/* ---------- 分条发送（全库唯一实现 · 单条 ≤430 · 单轮 ≤18） ---------- */
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
  b.forEach(function(c){_I++;sendPrompt(_H+' '+_I+'/'+_N+'\n'+c);n++;});
  toast(_Q.length?('已发 '+n+' 条 · 再点「确认」继续'):('已全部发送（'+_I+'/'+_N+'）'));
  return n;
}
function sendChunks(head,lines){
  if(hasPending())return sendPending();
  var cs=chunkText(lines);if(!cs.length)return 0;
  _H=head;_N=cs.length;_I=0;
  var first=cs.slice(0,18);_Q=cs.slice(18);
  first.forEach(function(c){_I++;sendPrompt(head+(_N>1?' '+_I+'/'+_N:'')+'\n'+c);});
  return first.length;
}
function toast(t){var e=document.getElementById('tst');if(!e)return;e.textContent=t;e.classList.add('on');clearTimeout(e._h);e._h=setTimeout(function(){e.classList.remove('on');},2200);}

/* ---------- 撤销（Ctrl+Z · u0 4.9） ---------- */
var UNDO=[];
function snapAll(){return JSON.stringify({st:S.st});}
function pushUndo(){if(S.sent)return;try{UNDO.push(snapAll());}catch(e){return;}if(UNDO.length>30)UNDO.shift();}
function undo(){if(S.sent||!UNDO.length)return;var x;try{x=JSON.parse(UNDO.pop());}catch(e){return;}
  if(x.st&&x.st.length)S.st=x.st;closePop();render();}
document.addEventListener('keydown',function(e){
  if(!(e.ctrlKey||e.metaKey))return;
  if(String(e.key).toLowerCase()!=='z')return;
  var ae=document.activeElement;
  if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'||ae.getAttribute('contenteditable')==='true'))return;
  e.preventDefault();undo();
});

/* ---------- 交互（每个操作带卡号 ci） ---------- */
var LJ={
  pop:function(el,ax,idx,ci){
    if(S.sent)return;
    POP.el=el;POP.ax=ax;POP.idx=(idx===undefined?-1:idx);
    POP.ci=(ci==null?0:ci);CUR=POP.ci;POP.cat=0;
    drawOne(el);
  },
  gmore:function(){drawWide(POP.el||pop);},
  gone:function(){drawOne(POP.el||pop);},
  gpCat:function(i){
    POP.cat=i;
    var L=document.getElementById('ljPopL');
    if(L){L.innerHTML=catItems();L.scrollTop=0;}
    var cs=pop.querySelectorAll('.ljCat');
    for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===i?' on':'');
    fitWide();placePop(POP.el);
  },
  choose:function(v){
    pushUndo();
    var ax=POP.ax,mx=maxOf(ax),st=stOf(POP.ci);
    if(mx<=1){st.pick[ax]=v;}
    else{
      var a=asList(valOf(ax,POP.ci)).slice();
      if(POP.idx>=0&&POP.idx<a.length&&a[POP.idx]!==v)a[POP.idx]=v;
      else if(POP.idx>=0&&POP.idx<a.length&&a[POP.idx]===v&&a.length>1)a.splice(POP.idx,1);
      else if(a.indexOf(v)<0){if(a.length>=mx)a.shift();a.push(v);}
      st.pick[ax]=a;
    }
    closePop();render();
  },
  cust:function(v){
    v=String(v||'').trim();if(!v)return;
    pushUndo();
    var ax=POP.ax,mx=maxOf(ax),st=stOf(POP.ci);
    if(mx<=1)st.pick[ax]=v;
    else{var a=asList(valOf(ax,POP.ci)).slice();if(POP.idx>=0&&POP.idx<a.length)a[POP.idx]=v;else{if(a.length>=mx)a.shift();a.push(v);}st.pick[ax]=a;}
    closePop();render();
  },
  /* ＋：直接追加一个未用项（E2 同款 · 不弹层 · 追加后立即渲染） */
  add:function(ax,ci){
    if(S.sent)return;
    var i=(ci==null?POP.ci:ci),st=stOf(i);
    var mx=maxOf(ax),a=asList(valOf(ax,i)).slice();
    if(a.length>=mx)return;
    var pool=AX[ax]||[],nx="";
    for(var k=0;k<pool.length;k++){if(pool[k]!=="无"&&a.indexOf(pool[k])<0){nx=pool[k];break;}}
    if(!nx)return;
    pushUndo();a.push(nx);st.pick[ax]=a;closePop();render();
  },
  rm:function(ax,idx,ci){
    var i=(ci==null?POP.ci:ci),st=stOf(i);
    pushUndo();
    var a=asList(valOf(ax,i)).slice();
    if(a.length<=1)return;
    if(idx===undefined||idx<0||idx>=a.length)idx=a.length-1;
    a.splice(idx,1);st.pick[ax]=a;closePop();render();
  },
  ed:function(k,v){stOf(CUR).ed[k]=v;},
  /* 整卡随机（本卡）：各轴按池重选（环境物 6-8 件） */
  autoCard:function(ci){
    if(S.sent)return;
    var i=(ci==null?0:ci),st=stOf(i);
    pushUndo();
    var CR=CATREC[cardOf(i).取景]||{};   /* 取景大类优先：随机也落该类推荐里 */
    var pick=function(ax){var a=(CR[ax]&&CR[ax].length)?CR[ax]:((REC[ax]&&REC[ax].length)?REC[ax]:(AX[ax]||['']));return a[Math.floor(Math.random()*a.length)];};
    ROWS.forEach(function(r){[r[1],r[2]].forEach(function(ax){st.pick[ax]=pick(ax);});});
    st.pick['环境物']=randEnv(i);
    closePop();render();
  },
  /* 只随机某一行（ROWS 第 k 行 ＝ 两个轴 · 不动其它行、不动环境物） */
  autoRow:function(ci,k){
    if(S.sent)return;
    var i=(ci==null?0:ci),st=stOf(i),r=ROWS[k];
    if(!r)return;
    pushUndo();
    var CR=CATREC[cardOf(i).取景]||{};
    var pick=function(ax){var a=(CR[ax]&&CR[ax].length)?CR[ax]:((REC[ax]&&REC[ax].length)?REC[ax]:(AX[ax]||['']));return a[Math.floor(Math.random()*a.length)];};
    [r[1],r[2]].forEach(function(ax){st.pick[ax]=pick(ax);});
    closePop();render();
  },
  /* 只随机「空间置景」的环境物（不动其它轴） */
  autoEnv:function(ci){
    if(S.sent)return;
    var i=(ci==null?0:ci),st=stOf(i);
    pushUndo();st.pick['环境物']=randEnv(i);closePop();render();
  },
  /* 单项轮换：① 推荐项里没轮过的 → ② 推荐轮完换池项 → ③ 全轮完重来（每卡每轴各自记） */
  reEnv:function(ax,ci,i){
    if(S.sent)return;
    var st=stOf(ci),arr=asList(valOf(ax,ci)).slice();
    if(i<0||i>=arr.length)return;
    var CR=CATREC[cardOf(ci).取景]||{};
    var rec=(CR[ax]&&CR[ax].length)?CR[ax].slice():((REC[ax]||[]).slice());
    var allp=(AX[ax]||[]).slice();
    var cur=arr[i];
    var rot=st.rot||(st.rot={});
    var used=rot[ax]||(rot[ax]=[]);
    var okv=function(v){return v&&v!=='无'&&v!==cur&&arr.indexOf(v)<0&&used.indexOf(v)<0;};
    var cand=rec.filter(okv);
    if(!cand.length)cand=allp.filter(okv);
    if(!cand.length){
      used.length=0;
      cand=rec.filter(function(v){return v&&v!=='无'&&v!==cur&&arr.indexOf(v)<0;});
      if(!cand.length)cand=allp.filter(function(v){return v&&v!=='无'&&v!==cur;});
    }
    if(!cand.length){toast('没有其它可换项');return;}
    var nv=cand[Math.floor(Math.random()*cand.length)];
    used.push(nv);
    pushUndo();
    arr[i]=nv;
    st.pick[ax]=arr;
    closePop();render();
  },
  /* 删减／恢复该卡（收起后可恢复 · 选值原样带回） */
  fold:function(ci){
    if(S.sent)return;
    var i=(ci==null?0:ci);
    pushUndo();stOf(i).fold=!stOf(i).fold;closePop();render();
  },
  /* 彻底删除该卡 → 先弹确认框（文字随卡不同） */
  delAsk:function(ci){
    if(S.sent)return;
    CFM.ci=(ci==null?0:ci);
    var HP=headOf(CARD[CFM.ci]||{});
    cfmB.textContent='确认后将清除「'+HP.id+'」的场景设定／情绪氛围／空间置景等一切资料，且不可恢复（该卡不再参与回传）。';
    cfm.classList.add('on');
  },
  cfmNo:function(){cfm.classList.remove('on');CFM.ci=null;},
  cfmYes:function(){
    var i=CFM.ci;cfm.classList.remove('on');CFM.ci=null;
    if(i==null||S.sent)return;
    pushUndo();stOf(i).drop=true;stOf(i).fold=false;render();
    toast('已删除该卡 · 不参与回传');
  },
  confirm:function(){
    if(S.sent)return;
    if(hasPending()){sendPending();return;}
    var out=buildAll();
    moB.innerHTML=out.map(function(l){return '<div class="ljOl">'+esc(l)+'</div>';}).join('');
    ovl.classList.add('on');
  },
  closeM:function(){ovl.classList.remove('on');},
  submitAll:function(){
    if(hasPending()){sendPending();return;}
    if(S.sent)return;
    if(typeof sendPrompt!=='function'){toast('当前环境不支持发送');return;}
    var l=buildAll(),cnt=sendChunks('【场景卡·确认】',l.slice(1));
    if(!cnt){toast('没有可提交的内容');return;}
    if(hasPending()){ovl.classList.remove('on');toast('已发 '+cnt+' 条 · 再点「确认」继续');return;}
    S.sent=true;ovl.classList.remove('on');render();toast('已提交回传'+(cnt>1?'（'+cnt+' 条）':''));
  },
  up:function(){
    if(S.sent)return;
    if(typeof sendPrompt!=='function'){toast('当前环境不支持发送');return;}
    var l=buildAll();l.unshift('指令=回 B4 剧本面板（故事情节·场景区），按下列当前值重渲（保持已选 · 不重置）');
    S.sent=true;sendChunks('【场景卡·上一级】',l);toast('已回上一级');
  },
  skip:function(){
    if(S.sent)return;
    if(typeof sendPrompt!=='function'){toast('当前环境不支持发送');return;}
    S.sent=true;
    var l=['指令=不细设场景，AI 按 B4 场景串（时代背景 ｜ 时节 ｜ 氛围 ｜ 内外·场景要素）自选各轴，直接进 B5 封标'];
    CARD.forEach(function(c,ci){
      if((S.st[ci]||{}).drop)return;
      l.push('▪ 场='+(c.场||'场01')+' ｜ 取景='+(c.取景||'')+' ｜ 场景='+sceneLine(ci));
    });
    sendChunks('【场景卡·跳过】',l);
    toast('已跳过 · 进 B5');
  }
};
window.LJ=LJ;
ROOT.addEventListener('click',function(e){
  if(e.target&&e.target.isConnected===false)return;   /* 弹层刚被重建 · 被点元素已脱离文档，不算点空白 */
  if(pop.classList.contains('on')&&!e.target.closest('.ljPop')&&!e.target.closest('.ljSV')&&!e.target.closest('.ljAdd')&&!e.target.closest('.ljRm'))closePop();
});
bd.addEventListener('scroll',function(){closePop();});
window.addEventListener('resize',function(){closePop();});

/* ---------- 组装回传 ---------- */
/* 场景串＝四段 ` | ` 分隔、段内空格：`时代 地理 背景 | 气节 时间 | 气氛 色调 | 内外 形式形色样式地方 落点位置`
   例：末日 废土 沙漠 | 深冬 夜里 | 午后阳光 斜光金 | 户外 落破深棕木质咖啡馆 院子转角处
   内外优先取 B3 该段的三态值；空则按「落点」兜底（院子／外／露台／天台＝户外 · 门／走廊＝半户外 · 其余＝室内）；词组内连写 */
function ioOf(ci){
  var c=cardOf(ci);
  if(c.内外)return c.内外;      /* B3 故事设定该段的「内外」——室内／室外／户外，优先；空则按落点兜底推理 */
  var p=valOf('落点',ci)||'';
  if(['外','露台','天台','院子'].indexOf(p)>=0)return '户外';
  if(['门','走廊'].indexOf(p)>=0)return '半户外';
  return '室内';
}
function sceneLine(ci){
  var c=cardOf(ci),era=(c.时代||[]).join(' ');
  var s2=(valOf('形式',ci)||'')+(valOf('形色',ci)||'')+(valOf('样式',ci)||'')+(valOf('地方',ci)||'');
  var pos=(valOf('落点',ci)||'')+(valOf('位置',ci)||'');
  var seg2=[ioOf(ci),s2,pos].filter(function(x){return x;}).join(' ');
  var t=[valOf('气节',ci),valOf('时间',ci)].filter(function(x){return x;}).join(' ');
  var a=[valOf('气氛',ci),valOf('色调',ci)].filter(function(x){return x;}).join(' ');
  return [era,t,a,seg2].filter(function(x){return x;}).join(' | ');
}
/* 单卡回传（每套一段 · 以 `▪ 场=` 起段区分卡） */
function cardLines(c,ci){
  var L=[];
  L.push('▪ 场='+(c.场||'场01')+' ｜ 取景='+(c.取景||'')+' ｜ 内外='+ioOf(ci));
  L.push('  简介：'+introOf(ci));
  L.push('  场景设定：形式 '+valOf('形式',ci)+' · 形色 '+valOf('形色',ci)+' · 样式 '+valOf('样式',ci)+' · 地方 '+valOf('地方',ci)+' · 落点 '+valOf('落点',ci)+' · 位置 '+valOf('位置',ci));
  L.push('  情绪氛围：气节 '+valOf('气节',ci)+' · 时间 '+valOf('时间',ci)+' · 气氛 '+valOf('气氛',ci)+' · 色调 '+valOf('色调',ci));
  L.push('  空间置景：'+asList(valOf('环境物',ci)).join(' · '));
  L.push('  环境物='+asList(valOf('环境物',ci)).join(' / '));
  L.push('  回填B4·场='+(c.场||'场01'));
  L.push('  回填B4·场景='+sceneLine(ci));
  return L;
}
function buildAll(){
  var live=[];
  CARD.forEach(function(c,ci){if(!(S.st[ci]||{}).drop)live.push(ci);});
  var L=['【场景卡·确认】（'+live.length+' 套 · 每套一张）'];
  live.forEach(function(ci){
    var c=CARD[ci],st=S.st[ci]||{};
    if(st.fold){L.push('▪ '+headOf(c).id+' ｜ 场='+(c.场||'场01')+' ｜ 已删减＝回用 AI 优选／原设定（本套不精修 · B5 用 B4 原串）');return;}
    cardLines(c,ci).forEach(function(x){L.push(x);});
  });
  return L;
}
render();
})();
})();
