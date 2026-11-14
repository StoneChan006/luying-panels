/* 自动生成，勿手改：源 ui/B4_剧本设定.html
   用法：面板侧 window.LJ_DATA = {...} 后加载本文件 */
(function(){
var CSS = "\nhtml,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{font-family:-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;position:relative;overflow:hidden;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px}\n.ljP *{box-sizing:border-box;margin:0}\n.ljSr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ljHd{padding:48px 16px 10px;display:flex;align-items:center;flex:none}\n.ljTt{font-size:15px;font-weight:500;color:#E8EEF4}\n.ljHc{margin-left:auto;display:flex;gap:6px}\n.ljHb{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:7px;padding:4px 11px;cursor:pointer;transition:.15s;font-family:inherit}\n.ljHb:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljBd{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px}\n.ljSc{background:#171C22;border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:12px 14px;margin-bottom:10px}\n.ljSh{display:flex;align-items:center;gap:8px;margin-bottom:4px}\n.ljSt{font-size:14.5px;font-weight:500;color:#E8EEF4}\n.ljItem{border-bottom:1px solid rgba(255,255,255,.05);padding:9px 0}\n.ljItem:last-child{border-bottom:none;padding-bottom:0}\n.ljItem[data-k=\"story\"] .ljIH,.ljItem[data-k=\"bgm\"] .ljIH,.ljItem[data-k=\"roles\"] .ljIH{display:none}\n.ljIH{display:flex;align-items:center;gap:8px;margin-bottom:6px}\n.ljIN{font-size:13.5px;font-weight:500;color:#C9D4DE}\n.ljBtb{margin-left:auto;display:inline-flex;align-items:center;font-size:11.5px;color:#66707A;background:transparent;border:none;border-radius:5px;padding:3px 8px;cursor:pointer;font-family:inherit;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljBtb:hover{color:#3EC6D8;background:rgba(62,198,216,.08)}\n.ljBtb.act{color:#3EC6D8;background:rgba(62,198,216,.1)}\n.ljBk2{margin-left:auto;display:inline-flex;cursor:pointer;padding:2px 4px;border-radius:4px}\n.ljBk2:hover{background:rgba(255,255,255,.06)}\n.ljFz{opacity:.55}\n.ljFz .ljW,.ljFz .ljSV,.ljFz .ljTab,.ljFz .ljEd,.ljFz .ljSw,.ljFz .ljPk{pointer-events:none;cursor:default}\n.ljTxb{white-space:pre-wrap;font-size:13px;color:#C9D4DE;line-height:1.7}\n.ljBtx{white-space:pre-wrap;font-size:13px;color:#E8EEF4;font-weight:500;line-height:1.7}\n.ljOld2{white-space:pre-wrap;font-size:12.5px;color:#66707A;line-height:1.7;margin-top:3px}\n.ljW{color:#A9DFE8;cursor:pointer;border-bottom:1px dashed rgba(62,198,216,.45);transition:.15s;user-select:none;-webkit-user-select:none}\n.ljW:hover{color:#3EC6D8;border-bottom-color:#3EC6D8}\n.ljEd{outline:none;cursor:text;border-bottom:1px dashed rgba(255,255,255,.14);transition:.15s;border-radius:2px;user-select:text;-webkit-user-select:text}\n.ljEd:hover{border-bottom-color:rgba(62,198,216,.35)}\n.ljEd:focus{border-bottom-color:rgba(62,198,216,.55);color:#E8EEF4;background:rgba(62,198,216,.04)}\n.ljTabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:9px}\n.ljTab{padding:3px 11px;border:1px solid rgba(255,255,255,.1);border-radius:99px;font-size:12.5px;color:#9FADB9;cursor:pointer;user-select:none;-webkit-user-select:none;transition:.15s}\n.ljTab:hover{color:#3EC6D8;border-color:rgba(62,198,216,.4)}\n.ljTab.act{color:#0F1317;background:#3EC6D8;border-color:#3EC6D8;font-weight:500}\n.ljSRow{line-height:2.1}\n/* 场景区（每场块底部）：小标 ＋ 高阶 ＋ 串 · 每套一组 */\n.ljScn{margin-top:9px;padding-top:8px;border-top:1px dashed rgba(255,255,255,.07)}\n.ljScnH{display:flex;align-items:center;gap:10px;line-height:1.9}\n.ljScnV{font-size:12.5px;color:#9FADB9;line-height:1.8;margin:1px 0 7px;word-break:break-word}\n.ljScn>.ljScnH:last-child+.ljScnV{margin-bottom:0}\n.ljS2{margin-top:8px;padding-top:9px;border-top:1px solid rgba(255,255,255,.07)}\n.ljTxt{font-size:12.5px;color:#C9D4DE;line-height:1.75;word-break:break-word}\n.ljSlot{display:inline-block;margin-right:16px}\n.ljSL{font-size:12px;color:#8A97A3;margin-right:3px}\n.ljPln{font-size:12.5px;color:#9FADB9;line-height:1.75;white-space:pre-wrap}\n.ljX{color:#3C4652;font-size:11px;margin:0 5px}\n.ljSum{font-size:12.5px;color:#C9D4DE;line-height:1.7}\n.ljFm{font-size:13px;color:#9FADB9}\n.ljWearSc{font-size:12px;color:#8A97A3;margin-right:2px;font-variant-numeric:tabular-nums}\n.ljSV{font-size:13px;color:#9FADB9;cursor:pointer;border-bottom:1px dashed transparent;transition:.15s}\n.ljSV:hover{color:#3EC6D8;border-bottom-color:rgba(62,198,216,.5)}\n.ljGp{border:1px solid rgba(255,255,255,.05);border-radius:8px;padding:8px 10px;margin-bottom:8px}\n.ljGp:last-child{margin-bottom:0}\n.ljGH{display:flex;align-items:center;gap:6px;margin-bottom:4px}\n.ljGH .ljEd{font-size:13px;color:#E8EEF4;font-weight:500}\n.ljTRow{display:grid;grid-template-columns:46px 1fr 216px;gap:8px;padding:6px 0;border-top:1px dashed rgba(255,255,255,.06);font-size:12.5px;line-height:1.65}\n.ljM{color:#7C8A96;font-size:12px}\n.ljLnIn{width:216px;background:transparent;border:none;border-bottom:1px dashed rgba(255,255,255,.22);color:#C9D4DE;font-size:12px;padding:1px 4px;outline:none;font-family:inherit}\n.ljLN{color:#9FADB9;border-left:1px solid rgba(255,255,255,.08);padding-left:8px}\n.ljLNbox{display:flex;flex-direction:column;gap:1px}\n.ljLNbox>.ljLN{border-left:1px solid rgba(255,255,255,.08);padding-left:8px}\n.ljSw{position:relative;display:inline-block;width:22px;height:13px;border-radius:99px;background:#2A3138;cursor:pointer;user-select:none;-webkit-user-select:none;transition:background .18s;vertical-align:middle;flex:none}\n.ljSwK{position:absolute;top:2px;left:2px;width:9px;height:9px;border-radius:50%;background:#66707A;transition:left .18s,background .18s}\n.ljSw.on{background:rgba(62,198,216,.35)}\n.ljSw.on .ljSwK{left:11px;background:#3EC6D8}\n/* 灰态（不可操作）：高阶层优先 / 无角色库设定图 —— 只调透明度与光标，不改状态色 */\n.ljSw.gray{filter:grayscale(1);opacity:.62;cursor:not-allowed}\n.ljSw.gray .ljSwK{background:#79838D}\n/* 灰态＝禁用：叠一条斜贯线（关态没有，一眼区分） */\n.ljSw.gray::after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;border-radius:99px;\nbackground:linear-gradient(to top right,transparent 43%,#C8D2DA 43%,#C8D2DA 57%,transparent 57%);opacity:.85}\n.ljPool{display:flex;flex-wrap:wrap;gap:5px 12px;margin-top:7px;max-width:100%}\n.ljPk{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;cursor:pointer;user-select:none;transition:.15s}\n.ljPk .ljBx{width:12px;height:12px;border:1.5px solid #66707A;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;flex:none;transition:.15s}\n.ljPkIn{flex:1 1 120px;min-width:96px;width:auto;background:transparent;border:none;border-bottom:1px dashed rgba(255,255,255,.28);color:#C9D4DE;font-size:12px;padding:1px 3px;outline:none;font-family:inherit}\n.ljPkIn:focus{border-bottom-color:#3EC6D8}\n.ljPk.on{color:#E8EEF4}\n.ljPk.on .ljBx{background:#3EC6D8;border-color:#3EC6D8}\n.ljPk.on .ljBx:after{content:\"\";width:6px;height:3.5px;border-left:1.8px solid #0F1317;border-bottom:1.8px solid #0F1317;transform:rotate(-45deg) translate(0,-1px)}\n.ljBgmF{display:flex;align-items:center;line-height:2.05;padding:0;min-height:28.6px}\n.ljBgmS{flex:none;width:58px;font-size:11px;color:#8A97A3;line-height:1;white-space:nowrap;user-select:none;-webkit-user-select:none}\n/* B4 BGM 分段表 */\n.ljBgmT{margin-top:4px}\n.ljBgB{display:flex;align-items:flex-start;padding:4px 10px 7px 0;border-bottom:1px solid rgba(255,255,255,.045);transition:background .15s}\n/* 折叠行：只有鼠标落在**留空区间**才整行提亮（.hov 由鼠标事件加 · 骰子／值／＋－／标 等交互与文字处不亮）· 无三角 */\n.ljBgB:nth-child(even){background:rgba(255,255,255,.016)}\n.ljBgB.hov{background:rgba(255,255,255,.03)}\n/* 段位列：段位＋情绪（同一行）· 人声勾选框已移到该行 BPM 骰子右侧 */\n.ljBgS{flex:none;width:58px;font-size:13px;color:#8A97A3;line-height:1.45;user-select:none;-webkit-user-select:none;white-space:nowrap;display:flex;align-items:baseline;justify-content:space-between}\n.ljBgS em{display:inline;font-style:normal;font-size:10px;color:#5E6B78;line-height:1.3;margin-left:4px;white-space:nowrap}\n.ljBgSE{display:inline-flex;align-items:baseline;white-space:nowrap}\n.ljBgSE em{margin-left:0}\n.ljBgSx{font-style:normal;font-size:10px;color:#4E5A66;margin-left:2px;vertical-align:1px}\n.ljBgM{flex:1 1 auto;min-width:0}\n/* 人声＝勾选框（BPM 骰子右侧 · 每段独立）：勾＝本段有声线五轴，空＝本段无 */\n.ljBgCk{display:inline-flex;align-items:center;gap:4px;margin-left:9px;font-size:11px;color:#7C8996;line-height:1.35;cursor:pointer;user-select:none;-webkit-user-select:none;white-space:nowrap;flex:none}\n.ljBgCk i{display:block;width:11px;height:11px;border:1px solid #4E5A66;border-radius:2px;position:relative;box-sizing:border-box;transition:border-color .12s,background .12s}\n.ljBgCk:hover i{border-color:#3EC6D8}\n.ljBgCk.on{color:#C9D4DE}\n.ljBgCk.on i{border-color:#3EC6D8;background:rgba(62,198,216,.16)}\n.ljBgCk.on i:after{content:'';position:absolute;left:2.5px;top:0.5px;width:3px;height:6px;border-right:1.5px solid #3EC6D8;border-bottom:1.5px solid #3EC6D8;transform:rotate(42deg)}\n.ljBgCk.ph{visibility:hidden}\n/* 人声锁：锁上＝该段人声整列冻结（声线五轴＋`人声`勾选框都不可点 · 内容转灰） */\n.ljBgLk{display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;flex:none;margin:3px 3px 0 7px;opacity:.62;cursor:pointer;user-select:none;-webkit-user-select:none}\n.ljBgLk:hover{opacity:1}\n.ljBgLk.on{opacity:1}\n.ljBgLk.ph{visibility:hidden}\n/* 整段同上：`☑人声` 右侧那枚 ditto —— 点开＝该段全部沿用上一段（整段转灰、所有轴冻结、回传 `X｜同上`） */\n.ljBgB.lk .ljBgS{opacity:.4}\n.ljBgB.lk .ljBgM{opacity:.38}\n/* 过渡行＝收在段块折叠内容里：`过渡` 占段位列（向左探 58px 对齐段位） */\n.ljBgTr{position:relative}\n.ljBgL{position:absolute;left:-58px;top:1px;width:58px;display:flex;align-items:baseline;justify-content:flex-end;font-size:11px;color:#6F7C89;white-space:nowrap}\n.ljBvR{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:18px;min-height:25px;line-height:2.05}\n/* 段行首行＝栅格：听感固定栏宽 → 各段 `节奏：` 竖向对齐（与听感词数无关）· BPM＋勾选贴右 */\n.ljBvG{display:grid;grid-template-columns:182px minmax(0,1fr) auto;column-gap:18px;align-items:baseline}\n.ljBvG .ljBvEnd{margin-left:0;justify-self:end}\n/* 折叠内容上下细间隔线：配器行上 ／ 声线行下（人声关时落在配器行下） */\n.ljBvTop{border-top:1px solid rgba(255,255,255,.09);padding-top:3px}\n.ljBvBot{border-bottom:1px solid rgba(255,255,255,.09);padding-bottom:3px}\n.ljBv{font-size:13px;color:#C9D4DE;cursor:default;user-select:text;-webkit-user-select:text;word-break:normal;overflow-wrap:anywhere}\n.ljBvL{white-space:nowrap;overflow-wrap:normal}\n/* 标＝E3 口径：一级标 13px（带骰子）· 二级标 12px；值 13px 最亮一级 · 手型只给值／＋／－ */\n.ljBv .ljSL{font-size:13px;color:#8A97A3;margin-right:4px;cursor:text;white-space:nowrap}\n.ljBv .ljSLs{font-size:12px;color:#8A97A3;margin-right:3px;cursor:text;white-space:nowrap}\n.ljBv .ljSV{font-size:13px;color:#C9D4DE;cursor:pointer;border-bottom:1px dashed transparent;transition:.15s;white-space:nowrap;user-select:none;-webkit-user-select:none}\n.ljBv .ljSV:hover{color:#3EC6D8;border-bottom-color:rgba(62,198,216,.5)}\n.ljBv .ljAdd,.ljBv .ljRm{cursor:pointer}\n/* 行首骰子（二级标 · 青 #35A9BA 13px · 与 E3 同款） */\n.ljBgD{display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;flex:none;margin:0 3px 0 0;vertical-align:-2px;opacity:.88;cursor:pointer;user-select:none;-webkit-user-select:none}\n.ljBgD:hover{opacity:1}\n/* BPM＝行最右一栏：值在前 · `BPM` 在后（无冒号 · 右端对齐，各段 `BPM` 竖成一列） */\n.ljBvEnd{margin-left:auto;flex:none;white-space:nowrap}\n.ljBvEnd .ljSL{margin:0 0 0 4px}\n.ljSep{color:#6C7A87;font-size:11px;margin:0 3px}\n.ljAdd{display:inline-block;color:#3EC6D8;cursor:pointer;padding:0 2px;margin-left:-1px;user-select:none;-webkit-user-select:none;white-space:nowrap}\n.ljAdd:hover{color:#D9B75B}\n.ljRm{display:inline-block;color:#6A7683;cursor:pointer;padding:0 1px;margin:0 0 0 1px;user-select:none;-webkit-user-select:none}\n.ljRm:hover{color:#D9B75B}\n.ljDot{color:#3C4652;font-size:11px;margin:0 3px}\n.ljBD{color:#66707A}\n.ljBmW{font-size:12.5px;color:#9FADB9;line-height:1.55}\n.ljBi{display:none;margin-top:7px;align-items:center;background:#12161B;border:1px solid rgba(62,198,216,.25);border-radius:7px;padding:0 6px 0 9px}\n.ljBi.on{display:flex}\n.ljBi input{flex:1;background:transparent;border:none;color:#E8EEF4;font-size:12.5px;padding:8px 6px 8px 0;outline:none;font-family:inherit}\n.ljBkey{display:inline-flex;cursor:pointer;padding:3px;border-radius:4px;color:#66707A;flex:none}\n.ljBkey.has{color:#3EC6D8}\n.ljBkey:hover{background:rgba(255,255,255,.06)}\n.ljPop{position:absolute;z-index:45;display:none;background:#1B2129;border:1px solid rgba(62,198,216,.35);border-radius:8px;padding:5px;min-width:230px;max-width:340px;max-height:240px;overflow:auto;overscroll-behavior:contain}\n.ljPop.on{display:block}\n.ljPc{display:flex;flex-direction:column;gap:2px;padding:6px 9px;border-radius:5px;cursor:pointer;font-size:12.5px;color:#C9D4DE;line-height:1.55}\n.ljCst{background:transparent;border:none;border-bottom:1px dashed rgba(255,255,255,.22);outline:none;color:#C9D4DE;font-size:12.5px;width:100%;font-family:inherit;padding:3px 2px}\n.ljCst:focus{border-bottom-color:#3EC6D8}\ninput::placeholder{color:#59636D!important;opacity:1}\n.ljPc:hover{background:rgba(62,198,216,.1)}\n.ljPc.on{color:#3EC6D8}\n.ljPc.dim{color:#5E6B78;cursor:default;font-size:12px}\n.ljPc.dim:hover{background:transparent}\n.ljFt{display:flex;justify-content:flex-end;gap:8px;padding:11px 16px;border-top:1px solid rgba(255,255,255,.06);flex:none}\n.ljBtn{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#C9D4DE;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:7px;padding:5px 15px;cursor:pointer;transition:.18s;font-family:inherit}\n.ljBtn:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljPri{color:#3EC6D8;border-color:rgba(62,198,216,.55)}\n.ljPri:hover{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n.ljPri.gold{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n.ljOvl{position:absolute;inset:0;background:rgba(8,10,13,.78);display:none;align-items:center;justify-content:center;z-index:50}\n.ljOvl.on{display:flex}\n.ljMod{background:#171C22;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:86%;max-height:76%;display:flex;flex-direction:column;padding:14px 16px}\n.ljMoH{font-size:13.5px;font-weight:500;color:#E8EEF4;margin-bottom:9px}\n.ljMoB{overflow:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:6px}\n.ljOl{font-size:12.5px;color:#9FADB9;background:rgba(255,255,255,.03);border-radius:6px;padding:6px 9px;line-height:1.5;white-space:pre-wrap}\n.ljMoF{margin-top:10px;display:flex;justify-content:flex-end;gap:8px}\n.ljTst{position:absolute;left:50%;bottom:72px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12.5px;padding:7px 16px;border-radius:8px;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;z-index:60}\n.ljTst.on{opacity:1}\ninput::placeholder,textarea::placeholder{color:#59636D!important;opacity:1}\n\n/* 滚动条：渲染期不出条，成形后细条（.ljBd 主滚动区 / .ljPop 弹层） */\n.ljBd,.ljPop{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar,.ljPop::-webkit-scrollbar{width:0;height:0}\nhtml.ljReady .ljBd,html.ljReady .ljPop{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar,html.ljReady .ljPop::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb,html.ljReady .ljPop::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb:hover,html.ljReady .ljPop::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.26)}\nhtml.ljReady .ljBd::-webkit-scrollbar-track,html.ljReady .ljPop::-webkit-scrollbar-track{background:transparent}\n/* ── 风格换选：两栏（左栏 5 字宽 ／ 右栏 10 字宽 · 超字按实测放宽 · 8 项高 · 首行「推荐」）── */\n.ljPop.wide{min-width:0;max-width:330px;max-height:none;padding:0;overflow:hidden}\n/* 高度＝8 项起（268），类数 >8 时按行撑高（左栏 9 类不藏项），超 84vh 才滚 */\n.ljPop.wide.on{display:flex;flex-direction:column;height:268px;max-height:84vh}\n.ljPop.wide .ljSplit{display:flex;flex:1 1 auto;min-height:0;overflow:hidden}\n.ljPop.wide .ljCats{width:54px;flex:0 0 auto;padding:4px;overflow-y:auto;background:rgba(0,0,0,.16);border-right:1px solid rgba(255,255,255,.07);box-sizing:border-box}\n.ljPop.wide .ljCat{font-size:11.5px;color:#7E8B99;height:25px;display:flex;align-items:center;padding:0 3px;border-radius:6px;cursor:pointer;white-space:nowrap;box-sizing:border-box;user-select:none;-webkit-user-select:none}\n.ljPop.wide .ljCat:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljPop.wide .ljCat.on{color:#3EC6D8;background:rgba(62,198,216,.12)}\n.ljPop.wide .ljOpts{width:96px;flex:1 1 auto;min-width:0;padding:4px;overflow-y:auto;overscroll-behavior:contain;box-sizing:border-box}\n.ljPop.wide #ljPopL .ljPc{height:25px;flex-direction:row;align-items:center;gap:0;padding:0 4px;white-space:nowrap;line-height:1;box-sizing:border-box}\n.ljPop.wide #ljPopL .ljPc.on{background:rgba(62,198,216,.14);color:#3EC6D8}\n.ljPop.wide .ljFix{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding:0 5px 4px}\n.ljPop.wide .ljFix .ljPc{height:26px;flex-direction:row;align-items:center;padding:0 9px;font-size:11.5px;color:#7E8B99;border-radius:5px;cursor:pointer}\n.ljPop.wide .ljFix .ljPc:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljPop.wide .ljFix .ljPc:last-child{color:#7E8B99}\n.ljPop.wide .ljFix .ljPc:last-child:hover{background:transparent;color:#9FADB9}\n.ljPop.wide .ljFix .ljCst{height:26px;padding:0 2px}\n.ljPop.wide,.ljPop.wide .ljCats,.ljPop.wide .ljOpts{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.20) transparent}\n/* ── 风格一级：单列＝AI 推荐项（8 项封顶 · 定高 208）→ 末行「更多...」→ 两栏全池 ── */\n.ljPop.stone{max-height:none;padding:0;min-width:230px}\n.ljPop.stone .ljOpts{height:auto;max-height:208px;overflow-y:auto;overscroll-behavior:contain;padding:0}\n.ljPop.stone .ljOpts .ljPc{height:26px;min-height:26px;flex-direction:row;align-items:center;padding:0 9px;box-sizing:border-box;line-height:1}\n.ljPop.stone .ljOpts .ljPc.on{background:rgba(62,198,216,.14);color:#3EC6D8}\n.ljPop.stone .ljFixTop{border-bottom:1px solid rgba(255,255,255,.09);padding:0 0 2px;margin-bottom:2px}\n.ljPop.stone .ljFixTop .ljPc{height:26px;min-height:26px;flex-direction:row;align-items:center;gap:0;padding:0 9px;font-size:11.5px;color:#D9B75B;line-height:1;box-sizing:border-box;border-radius:5px}\n.ljPop.stone .ljFixTop .ljPc:hover{background:rgba(217,183,91,.13);color:#E8C878}\n.ljPop.stone .ljFixTop .ljPc.on{background:rgba(217,183,91,.16);color:#E8C878}\n.ljPop.stone .ljFixTop .ljPcn{margin-left:auto;color:#7E8B99;font-size:11px}\n.ljPcw{color:#7E8B99;font-size:11px;margin-left:8px;max-width:210px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.ljPop.bsw{min-width:330px;max-width:400px}\n.ljPop.stone .ljFixOne{border-top:1px solid rgba(255,255,255,.07);padding:2px 0 0;margin-top:2px}\n.ljPop.stone .ljFixOne .ljMore{height:26px;display:flex;align-items:center;padding:0 9px;color:#7E8B99;font-size:11.5px;cursor:pointer;border-radius:5px}\n.ljPop.stone .ljFixOne .ljMore:hover{color:#C9D4DE;background:rgba(255,255,255,.05)}\n.ljPop.stone .ljFixOne .ljPc{height:26px;min-height:26px;flex-direction:row;align-items:center;padding:0 9px;box-sizing:border-box;cursor:text}\n.ljPop.stone .ljFixOne .ljCst{height:24px;padding:0 2px}\n";
var HTML = "<meta charset=\"utf-8\">\n<!-- ============================================================\n  【B4 · 剧本设定】标准组件模板 —— 实现唯一源（UI 规范「B4」的落地实现）\n  使用方式：只替换下方「数据区」（DATA 对象）→ 输出完整代码给 show_widget\n  ❌ 组件代码区一字不改（改交互 = 修改本文件一处，全库生效）\n  🚫 禁止自绘／简化／合并控件：🔒锁定 ／ 自定义 ／ 信息框 ／ 页签 ／ 开关 ／ 按钮 缺任一＝违规 → 重读本文件重渲\n  展示：故事 / 角色设计（角色横列点选 · 形象简名＝`主演 女 18-24 形象`（主演＝出演类型 · 纯信息） ＋ `高阶`→E1 ／ 风格＋`高阶`→E2；`高阶`右旁 `出图`（默认开 · 语义＝是否按描述重出服装图）：**高阶开时优先级 > 出图**（出图强制开 · 灰不可操作）；无角色库设定图时出图灰不可操作。四情形＝① 有图·出图关：沿用设定图服装（服装行收起 · B5 不写服装 · 不出图）／② 有图·出图开：服装行显示 · B5 不写服装 · 按描述出图／③ 无图·需生成设定图：服装描述写进角色生成提示词（B5 不写服装段）／④ 无图·不需生成：B5 写服装段）/ 故事情节（**场·镜表** · 🔴 **场头＝`场01 ｜ 段位 · 标题`**（两位编号）· **每场块底部＝场景区**：`场景` 小标 ＋ `高阶`〔**小标右边**·圆点开关〕＋ 串；**同一场有多套场景 → 每套一组（`场景1 2 3`／`场景4 5 6`），各带自己的高阶**）/ BGM设计（三套参数组——标题＝**类型质感**：基于故事设定「情绪走向」推理出三套不同类型质感，非同一风格复制）\n  场景区（故事情节 · 每场块**底部** · 镜表之后）：每套两行——**第 1 行＝小标 ＋ `高阶`**（单套小标＝`场景`；多套＝`场景1 2 3`／`场景4 5 6`，`高阶` 用同款小标文字，其后紧跟该套自己的圆点开关 · 点文字也可切换）；**第 2 行＝场景串**，四段 ` | `、段内空格：`时代 地理 背景 | 气节 时间 | 气氛 色调 | 内外 形式形色样式地方 落点位置`（例 `末日 废土 沙漠 | 深冬 夜里 | 午后阳光 斜光金 | 户外 落破深棕木质咖啡馆 院子转角处`）——`时代` 取本项 `era`（B3 时代背景三值）／`气节 时间`／`气氛 色调`／`内外…位置`＝E3 场景卡回填（套字段 `time`／`atm`／`s2`）。**`高阶`＝每套一个开关**：开＝收起**该套的串**（小标与开关保留 · **不显示＝不回传**）、本面板「确认」后按开着的套渲 E3 场景卡（**每套一张**）；关＝串照常显示。🔴 **B4 无独立「场景设计」块，也没有 `取景`／`空间` 两类行**——取景在 B3 故事设定段右侧选（8 大类 · 单列换选）、空间置景只在 E3，B5 前中后景由 AI 按 E3 推理／BGM（3 套参数组 · 「名（X套）」点选切换 ＋ 下展该套）\n  换选值：角色字段（服装 上装·下装·连体 互斥「无」）／ 故事情节·角色台词 ／ BGM 参数＝点值弹出候选换选\n  BGM 同上：承起 / 第 2 个过渡起，各弹层顶部固定行 `同上`＝该轴承接上一段（独占 · 不出 `＋／－`）\n  BGM 骰子／整段同上：单摇 BPM 走右键；段块最右一枚 ditto（`〃`）＝**该段整段同上**（整段转灰、所有轴与勾选冻结、回传该段只写 `承｜同上`；**起段不显示**；纯视图 · 不进 Ctrl+Z）；`声线`／`音区` 左键循环、右键单列全列\n  开关：BGM·附人声（开＝展开人声池点选 · 关＝池闭合）\n  可编辑文本：角色·简介·造型·个性·声音 ／ 场名（段位 · 标题）／ 每镜故事情节 ／ VO＝直接点击（光标）改文本\n  批改：块内纯文本项保留（本模板现无）\n  锁：块级**不设**；BGM 段块右上那枚是「整段同上」，不是锁\n  动作：底部「复位 ／ 确认」（批改锁定后变优化）／右上角「上一级」\n  回传链：确认/优化 → 回传预览 → 提交 → 自动分条发送（单条 ≤430 字符 · i/N 前缀 · 单轮 ≤18 条，超出再点确认续发）\n============================================================   📌 本文件内的选项／候选池仅为示例：每期必须按本期材料重写 DATA 区，禁止直接沿用。\n-->\n<div class=\"ljP\">\n\n<h2 class=\"ljSr\">剧本面板：故事情节·场景·角色设计·BGM设计与换选批改</h2>\n<div class=\"ljHd\">\n<div class=\"ljTt\">剧本</div>\n<div class=\"ljHc\">\n<button class=\"ljHb\" onclick=\"LJ.up()\" title=\"回故事设定面板（B3）\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V6\"/><path d=\"M6 11l6-6 6 6\"/></svg>上一级</button>\n<button class=\"ljHb\" onclick=\"LJ.skip()\" title=\"AI 按当前已选值补完剧本 · 成立剧本定稿并直接推进 p5 执行脚本\">跳过<svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 5l7 7-7 7\"/><path d=\"M13 5l7 7-7 7\"/></svg></button>\n</div>\n</div>\n<div class=\"ljBd\"></div>\n<div class=\"ljFt\">\n<button class=\"ljBtn\" onclick=\"LJ.reset()\" title=\"还原初始呈现（AI 预选态）\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a8 8 0 1 0 2.34-5.66\"/><path d=\"M4 5v4h4\"/></svg>复位</button>\n<button class=\"ljBtn ljPri\" id=\"b4main\" onclick=\"LJ.confirm()\" title=\"采纳当前产出 · 成立剧本定稿（随后进 p5 执行脚本）\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7\"/></svg><span id=\"b4mainT\">确认</span></button>\n</div>\n<div class=\"ljOvl\"><div class=\"ljMod\"><div class=\"ljMoH\">回传预览 · 确认后提交 AI</div><div class=\"ljMoB\"></div><div class=\"ljMoF\"><button class=\"ljBtn\" onclick=\"LJ.closeM()\" title=\"收起（返回面板继续调整）\">收起</button><button class=\"ljBtn ljPri\" onclick=\"LJ.submit()\" title=\"将回传内容提交给 AI\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7\"/></svg>提交</button></div></div></div>\n<div class=\"ljTst\"></div>\n\n</div>\n\n<!--HA_PREVIEW-->\n<script data-panel=\"B4_剧本设定\">\n/* 通用回传预览（与 B5 同款）：字数 ／ 复制全文 ／ 存 .md —— 由 tools/inject_preview.py 注入 */\n(function(){\n var PANEL=(document.currentScript&&document.currentScript.getAttribute('data-panel'))||'面板';\n function ovl(){return document.querySelector('.ljOvl.on');}\n function linesOf(mod){return [].slice.call(mod.querySelectorAll('.ljOl')).map(function(e){\n   return (e.innerText||'').replace(/\\u00a0/g,' ').trim();}).filter(function(x){return x!=='';});}\n function headOf(mod){var h=mod.querySelector('.ljMoH');var t=h?(h.innerText||'').trim():'';return t||('【'+PANEL+'·回传】');}\n function copyTxt(t){\n  function fb(){var ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy');}catch(e){}document.body.removeChild(ta);return ok;}\n  try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){tip('已复制全文 '+t.length+' 字');},function(){tip(fb()?('已复制全文 '+t.length+' 字'):'复制被拦');});return;}}catch(e){}\n  tip(fb()?('已复制全文 '+t.length+' 字'):'复制被拦');\n }\n function saveMd(t){try{var b=new Blob([t],{type:'text/markdown;charset=utf-8'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=PANEL+'_回传.md';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},800);tip('已存 '+PANEL+'_回传.md');}catch(e){copyTxt(t);}}\n function tip(s){var d=document.createElement('div');d.textContent=s;d.style.cssText='position:fixed;left:50%;bottom:64px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.4);color:#C9D4DE;font:12px/1.6 -apple-system,PingFang SC,sans-serif;padding:6px 16px;border-radius:8px;z-index:9999';document.body.appendChild(d);setTimeout(function(){d.remove();},1800);}\n function mkBtn(label,fn){var b=document.createElement('button');b.type='button';b.textContent=label;\n  b.style.cssText='background:transparent;border:1px solid rgba(255,255,255,.18);color:#C9D4DE;font:12px/1 -apple-system,PingFang SC,sans-serif;padding:5px 10px;border-radius:6px;cursor:pointer';\n  b.onmouseenter=function(){b.style.borderColor='rgba(62,198,216,.55)';b.style.color='#3EC6D8';};\n  b.onmouseleave=function(){b.style.borderColor='rgba(255,255,255,.18)';b.style.color='#C9D4DE';};\n  b.onclick=fn;return b;}\n function enhance(){\n  var o=ovl();if(!o)return;\n  var mod=o.querySelector('.ljMod')||o;\n  var box=mod.querySelector('.ljMoB');if(!box)return;\n  var lines=linesOf(mod);if(!lines.length)return;\n  var txt=headOf(mod)+'\\n'+lines.join('\\n');\n  var sig=lines.length+':'+txt.length;\n  var bar=mod.querySelector('.haPv');\n  if(!bar){bar=document.createElement('div');bar.className='haPv';\n   bar.style.cssText='display:flex;align-items:center;gap:8px;margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);font:12px/1.6 -apple-system,PingFang SC,sans-serif;color:#8A97A3';\n   var f=mod.querySelector('.ljMoF');\n   if(f)mod.insertBefore(bar,f);else mod.appendChild(bar);}\n  if(bar.getAttribute('data-sig')===sig)return;\n  bar.setAttribute('data-sig',sig);bar.innerHTML='';\n  var info=document.createElement('span');info.textContent='共 '+lines.length+' 行 · '+txt.length+' 字';\n  var sp=document.createElement('span');sp.style.flex='1';\n  bar.appendChild(info);bar.appendChild(sp);\n  bar.appendChild(mkBtn('复制全文',function(){copyTxt(txt);}));\n  bar.appendChild(mkBtn('存 .md',function(){saveMd(txt);}));\n }\n var mo=new MutationObserver(function(){setTimeout(enhance,0);});\n try{mo.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});}catch(e){}\n try{mo.observe(document.documentElement,{subtree:true,childList:true});}catch(e){}\n setTimeout(enhance,300);setTimeout(enhance,1200);\n})();\n\n/* ---------- 指针提交（2026-11-15 · 与 B5 同源） ----------\n   面板原有分条逻辑照旧跑，本包装器把同一批分条在 40ms 内收拢成全文，\n   写剪贴板 + 存 <面板>_回传.txt，只发一行指针【面板·动作】#hash · N字。\n   剪贴板写不进去时降级：整篇原样发出（旧行为，可能被截断，但至少不丢内容）。\n   ⚠️ 无反斜杠转义；sendPrompt 可能晚于本脚本就绪，故安装带重试。 */\n(function(){\n var P='面板';\n var el=document.querySelector('script[data-panel]');\n if(el&&el.getAttribute('data-panel'))P=el.getAttribute('data-panel');\n var NL=String.fromCharCode(10),TAB=String.fromCharCode(9);\n var buf=[],act='确认',timer=null;\n function isNum(c){var n=c.charCodeAt(0);return n>=48&&n<=57;}\n function ltrim(s){var i=0;while(i<s.length&&(s.charAt(i)===' '||s.charAt(i)===TAB))i++;return s.slice(i);}\n function parse(msg){\n  var i=msg.indexOf(NL);if(i<0)return null;\n  var h=msg.slice(0,i),b=msg.slice(i+1);\n  if(h.charAt(0)!=='【')return null;\n  var e=h.indexOf('】');if(e<0)return null;\n  var a=h.slice(1,e),tail=ltrim(h.slice(e+1));\n  var d=a.lastIndexOf('·');if(d>=0)a=a.slice(d+1);\n  var n=tail.length,j=n;\n  while(j>0&&isNum(tail.charAt(j-1)))j--;\n  var chunk=false;\n  if(j<n&&j>0&&tail.charAt(j-1)==='/'){\n   var k=j-1;while(k>0&&isNum(tail.charAt(k-1)))k--;\n   if(k<j-1)chunk=true;\n  }\n  return {act:a,body:b,chunk:chunk,len:msg.length};\n }\n function fp(t){var h=2166136261;for(var i=0;i<t.length;i++){h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;}return ('0000000'+h.toString(16)).slice(-8);}\n function copy(t){\n  var ok=false,ta=document.createElement('textarea');\n  try{ta.value=t;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(ta);ta.select();ta.setSelectionRange(0,t.length);ok=document.execCommand('copy');}catch(e){ok=false;}\n  if(ta.parentNode)ta.parentNode.removeChild(ta);\n  if(!ok){try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t);ok=true;}}catch(e){}}\n  return ok;\n }\n function save(t){try{var b=new Blob([t],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');\n  a.href=URL.createObjectURL(b);a.download=P+'_回传.txt';document.body.appendChild(a);a.click();document.body.removeChild(a);\n  setTimeout(function(){URL.revokeObjectURL(a.href);},1500);}catch(e){}}\n function flush(sp){\n  var t=buf.join(NL);buf=[];timer=null;if(!t)return;\n  var ok=copy(t);save(t);\n  if(ok)sp('【'+P+'·'+act+'】#'+fp(t)+' · '+t.length+'字 · 见剪贴板／'+P+'_回传.txt');\n  else sp(t);\n }\n function install(){\n  var sp=window.sendPrompt;\n  if(typeof sp!=='function'||sp.__ljPtr)return;\n  var w=function(msg){\n   if(typeof msg!=='string')return sp.apply(window,arguments);\n   var p=parse(msg);\n   if(p&&(p.chunk||p.len>450)){act=p.act;buf.push(p.body);if(timer)clearTimeout(timer);timer=setTimeout(function(){flush(sp);},40);return;}\n   return sp(msg);\n  };\n  w.__ljPtr=1;window.sendPrompt=w;\n }\n install();var iv=setInterval(install,300);setTimeout(function(){clearInterval(iv);},12000);\n})();\n</script>\n\n<!--/HA_PREVIEW-->";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;
/* ==================== 数据区（每次渲染只改这里） ==================== */
/* 元素写法：{s:'静态文本'} ／ {w:'键',v:'预选值',c:['候选…']}＝换选 ／ {e:'文本',k:'键'}＝可编辑文本
   item 标记：nb:1＝无批改 ／ ed:1＝整项可编辑（txt） ／ tabs＝角色横列卡 ／ groups＝场·镜表（场字段：no＝`场01` 两位编号／scenes＝场景套数组〔{label＝场次号如 `1 2 3`·空＝单套；s2·time·atm＝E3 回填的三段；hi＝该套高阶开关}〕） ／ bgm＝BGM 参数组 ／
   tabs 卡头：fm＝**形象简名**（五维组合名，如 `猫娘`／`普通人`；取系列本「3.1 系列级角色档案」，❌ 不是 E1 的五维串）
   tabs 字段：{label,ed:true,v}＝可编辑 ／ {label,v,c:[…]}＝换选 ／ {label,g:'style',v,rec:[…],recw:{风格:[{sc,sum}]}}＝服装风格（单列＝AI 推荐项 → 更多 → 两栏 · rec＝AI 推理首选 · recw＝每个推荐项自己的服装套，🔴 rec 有几项 recw 就要有几项） ／ {hx:'sex'|'age'}＝形象简名三槽 ／ {im:true}＝形象高阶 ／ {tx:'intro'|'look'|'pers'|'voice'}＝四行文本 ／ {g:'style'}＋{hi:true}＋{sum:true}＝服装组；{hx}/{im} 之外的字段 label 仅在回传里出现
   bgm 字段：styleDef（音乐风格）／ vOn（整首默认·兼容旧数据）／ segs[]{k,emo,listen,iMain,iRange,iSub,iNoise,rhythm,bpm,vLine,vTimbre,vRange,vLang,vStyle,**vOn＝该段人声独立开关**} ／ trans[]（同 segs 的 k/listen/rhythm/bpm） */
var DATA = window.LJ_DATA || {};
/* ==================== 数据区结束 · 以下组件代码固定 ==================== */
/* B4 BGM 池库（静态 · 唯一源）：值写进数据，池不进数据；换选／自定义均走这里。
   听感＝14 类情绪锚点（震感心灵／傲气苍穹／酷飒英气／刺激爽感／阴森恐怖／感人催泪／滑稽搞笑／古灵精怪／青春动感／都市烟火／古典雅致／旷远自然／性感撩人／异域风情；整行最多 2 词）；配器＝主色／辅色（乐器＋环境声）；节奏＝形式／过渡；
   BPM＝区间；人声＝声线／音色／音区／语言／唱法（多选）。 */
var BGM_POOL = {
  listen: [
    { k:'震感心灵', c:['澎湃','激昂','高亢','悲壮','神圣','庄严','壮阔','史诗','传奇','震撼'] },
    { k:'傲气苍穹', c:['傲气','苍穹','孤傲','睥睨','浩荡','凌云','凛然','王者','纵横','磅礴'] },
    { k:'酷飒英气', c:['酷飒','英气','飒爽','冷峻','痞帅','凌厉','潇洒','桀骜','利落','硬朗'] },
    { k:'刺激爽感', c:['炸裂','爆燃','重锤','狂飙','疾驰','追风','冲刺','撕裂','轰鸣','沸腾'] },
    { k:'阴森恐怖', c:['阴森','惊悚','诡异','不安','死寂','幽暗','压抑','寒栗','邪异','空洞','混乱','紧张'] },
    { k:'感人催泪', c:['温暖','温馨','催泪','心酸','哽咽','惆怅','怀旧','眷恋','失望','孤绝','平和','安详','沧桑'] },
    { k:'滑稽搞笑', c:['滑稽','诙谐','逗趣','夸张','荒诞','欢脱','憨态','蹦跳','俏皮','热闹'] },
    { k:'古灵精怪', c:['鬼马','精灵','童趣','童稚','灵动','梦幻','神秘','妖异','仙侠','赛博','空灵'] },
    { k:'青春动感', c:['青春','少年感','元气','热血','激情','活力','明亮','雀跃','明快','奔涌','律动','炽热'] },
    { k:'都市烟火', c:['都市','市井','家常','烟火气','慵懒','松弛','平淡','流动','疏朗','轻快','悠闲','惬意','朦胧','港风'] },
    { k:'古典雅致', c:['中式','日式','欧陆','巴洛克','复古','华丽','精致','雅致','贵族','宫廷','典雅','沉稳'] },
    { k:'旷远自然', c:['开阔','空旷','悠扬','辽远','苍凉','凛冽','清冷','素朴','清透','远场','留白','沉缓'] },
    { k:'性感撩人', c:['性感','暧昧','撩人','私密','贴耳','迷离','醇厚','低语','暗哑','微醺','魅惑','呢喃'] },
    { k:'异域风情', c:['异域','印度','南美','新疆','中东','东南亚','北欧','非洲'] }
  ],
  iMain: [
    { k:'无', c:['无'] },
    { k:'键盘', c:['钢琴','电钢琴','风琴','合成器 lead'] },
    { k:'弦乐', c:['大提琴','小提琴','中提琴','低音提琴','竖琴'] },
    { k:'管弦', c:['管弦铜管','圆号','小号','长号'] },
    { k:'民乐', c:['古筝','琵琶','二胡','唢呐','笛子','箫','扬琴','马头琴','笙','阮'] },
    { k:'管乐', c:['手风琴','口哨','口琴','单簧管','萨克斯','长笛'] },
    { k:'打击', c:['重底鼓','定音鼓','马林巴','木琴'] },
    { k:'电声', c:['工业电子','高频 synth','失真电吉他','subbass 低频嗡鸣','金属刮擦噪声','synth bass','琶音器'] }
  ],
  iRange: [
    { k:'无', c:['无'] },
    { k:'音区', c:['高音','中高音','中音','低中音','低音','极低音','高频刺耳音'] }
  ],
  iSub: [
    { k:'无', c:['无'] },
    { k:'铺底', c:['弦乐群铺底','合成器 pad','管风琴铺底','低音 drone'] },
    { k:'点缀', c:['铜管点缀','长笛','双簧管','单簧管','短笛'] },
    { k:'键盘', c:['钢琴高音颗粒','电子 arp','竖琴琶音','八音盒','钟琴','钢片琴'] },
    { k:'打击', c:['军鼓','镲片','沙锤','铃鼓','梆子','木鱼','三角铁','响板','手鼓'] },
    { k:'音色', c:['玻璃感高频泛音','手碟','水琴','音叉'] },
    { k:'民乐', c:['琵琶轮指','古筝刮奏','马头琴泛音'] }
  ],
  iNoise: [
    { k:'无', c:['无'] },
    { k:'自然', c:['细雨声','暴雨声','雷声','风声','海浪','河声','溪流声','滴水','火苗噼啪','树叶沙沙','草叶摩擦','雪落声','蝉鸣','虫鸣','鸟鸣','蛙鸣'] },
    { k:'城市', c:['城市低频交通轰鸣','车流鸣笛','地铁进站','施工敲打','远景人群嘈杂','人群低语','街道叫卖','机器运转'] },
    { k:'室内', c:['灯管电流嗡鸣','空调低频','冰箱低频','钟表滴答','心跳','呼吸','翻书声','瓷器碰撞','木地板吱呀','雨打窗'] },
    { k:'电噪', c:['耳鸣高频','电流爆音','磁带底噪','黑胶嘶声','无线电静电','信号干扰','数据故障音'] }
  ],
  rhythm: [
    { k:'无', c:['无'] },
    { k:'走向', c:['阶梯上行','平缓上扬','阶梯下行','缓慢下行','拖沓下沉','轻浮动','强拍推进','波浪推进','平行推进'] },
    { k:'起伏', c:['渐强','渐弱','忽高忽低','呼吸起伏','脉冲起伏'] },
    { k:'断点', c:['突起爆发','爆发炸点','断裂','突断','突变','骤停','静默','静默突爆','留白','抽帧断点'] },
    { k:'循环', c:['循环压迫','循环建立','循环渐入','循环衰减'] },
    { k:'变速', c:['变速','加速','渐快','渐慢','拉伸'] },
    { k:'收尾', c:['延长尾音','悬停收尾','淡出收尾'] },
    { k:'对切', c:['(A/B)情绪对切','双拍对切'] }
  ],
  rhythmT: [
    { k:'无', c:['无'] },
    { k:'硬切', c:['硬切','反打'] },
    { k:'渐变', c:['渐变换','同频变奏','同曲变奏','叠化过渡','同调转场'] },
    { k:'留白', c:['留白桥接','留白断点'] },
    { k:'跳跃', c:['跳跃桥接','拍点对齐'] }
  ],
  bpm: [
    { k:'无', c:['无'] },
    { k:'慢', c:['25-40','40-50','50-60'] },
    { k:'中', c:['60-76','76-108'] },
    { k:'快', c:['108-120','120-156','156-176','176-200','200+'] },
    { k:'特殊', c:['不规则'] }
  ],
  vLine:   [ { k:'声线', c:['男声','女声'] } ],
  vTimbre: [
    { k:'本声', c:['人声','清亮声','醇厚声','沙哑声','磁性声'] },
    { k:'年龄', c:['童声化','幼童声','青年声','成熟声','老者声'] },
    { k:'特效', c:['电子变声','兽人化','小黄人声','机械音','电话音','卡通音','妖异声','回声化','失真化'] }
  ],
  vRange:  [ { k:'音区', c:['低音','中音','高音'] } ],
  vLang: [
    { k:'无语系', c:['无语系'] },
    { k:'中文', c:['国语','粤语','川渝话','潮汕话','闽南语','上海话','东北话','客家话'] },
    { k:'外语', c:['英语','日语','韩语','俄语','法语','德语','西班牙语','意大利语','葡萄牙语','泰语','越南语','阿拉伯语','印语'] },
    { k:'民族', c:['维吾尔语','藏语','蒙语','彝语','哈萨克语'] },
    { k:'古典', c:['拉丁语','梵语'] }
  ],
  vStyle: [
    { k:'基础', c:['常规','随口唱','低声气声','真声','假声','气声'] },
    { k:'群体', c:['对唱','合唱','阿卡贝拉','多重叠混','轮唱','齐唱','和声'] },
    { k:'哼鸣', c:['哼唱','哼鸣','胸腔低鸣','闭口哼','鼻音哼'] },
    { k:'技巧', c:['天籁声','美声','嘶吼','夹音','滑音','颤音','力量感','元气活力','虚弱疲惫','泣腔','破音','烟嗓','戏腔','转音'] },
    { k:'语言化', c:['念白吟诵','半说半唱','Rap 念唱','念咒式'] }
  ]
};
/* ＋ 追加上限（含首项 → 该轴最多几项）：不带 ＋ 的轴＝单值，上限 1 */
var BGM_MAX = { listen:2, iMain:2, iSub:2, iNoise:2, rhythm:2, vLine:2, vStyle:3 };

/* 音乐风格池（BGM 专属 · 8 大类 × 5）：换选＝单列推荐 → 更多 → 双栏（左大类 · 右该类风格）
   选中风格所属大类的 BGM_STYREC ＝ 整套 BGM 各轴「单列推荐换选项」的来源（值不改，只换候选） */
var BGM_STYLE = [
  { k:'生活叙事', c:['生活流','治愈系','城市日常','成长回忆','旧物手作'] },
  { k:'都市情绪', c:['都市感','午夜霓虹','都会孤独','职场节奏','雨天窗前'] },
  { k:'东方国风', c:['国风','新民乐','古风宫廷','武侠写意','禅意空灵'] },
  { k:'复古年代', c:['复古胶片','旧时光','黑胶爵士','八十年代','老唱片'] },
  { k:'电子律动', c:['轻电子','Lo-fi 律动','Future Bass','氛围电子','实验噪音'] },
  { k:'管弦影像', c:['史诗管弦','电影配乐','悬念悬疑','悲怆弦乐','童话幻想'] },
  { k:'原声民谣', c:['木吉他民谣','手风琴叙事','钢琴独白','世界音乐','口哨小调'] },
  { k:'节奏放克', c:['City Pop','爵士放克','Bossa Nova','嘻哈节拍','迪斯科复古'] }
];
var BGM_STYLE_FLAT = BGM_STYLE.reduce(function(a,g){return a.concat(g.c);},[]);
/* 一级单列＝AI 推荐风格（8 项 · 当前值置顶 · 池只在「更多」两栏） */
var BGM_STYLE_REC = ['生活流','治愈系','城市日常','都市感','国风','复古胶片','轻电子','史诗管弦'];
/* 各大类的推荐换选项（值必须存在于 BGM_POOL，否则自动跳过） */
var BGM_STYREC = {
  '生活叙事':{ listen:['平和','温暖','素朴','惬意','市井','悠扬','悠闲'],
    iMain:['钢琴','口琴'], iRange:['中音','中高音'], iSub:['弦乐群铺底','钢琴高音颗粒'],
    iNoise:['空调低频','钟表滴答','远景人群嘈杂'], rhythm:['轻浮动','平缓上扬'], bpm:['60-76','76-108'],
    vLine:['女声'], vTimbre:['人声'], vLang:['国语'], vStyle:['随口唱','低声气声'], vRange:['中音'], rhythmT:['渐变换','同曲变奏'], vPat:[0,1,0,1,0,1] },
  '都市情绪':{ listen:['清冷','烟火气','都市','流动','松弛','贴耳','朦胧'],
    iMain:['钢琴','高频 synth'], iRange:['中高音','中音'], iSub:['合成器 pad','电子 arp'],
    iNoise:['城市低频交通轰鸣','远景人群嘈杂','灯管电流嗡鸣'], rhythm:['强拍推进','循环建立'], bpm:['76-108','108-120'],
    vLine:['女声'], vTimbre:['人声'], vLang:['国语','英语'], vStyle:['低声气声','念白吟诵'], vRange:['中音','高音'], rhythmT:['同频变奏','硬切'], vPat:[0,1,0,1,0,1] },
  '东方国风':{ listen:['中式','仙侠','素朴','悠扬','沉缓','留白','安详'],
    iMain:['古筝','二胡','琵琶'], iRange:['中音','高音'], iSub:['长笛','木鱼','梆子'],
    iNoise:['树叶沙沙','风声','滴水'], rhythm:['缓慢下行','留白'], bpm:['40-50','50-60','60-76'],
    vLine:['女声'], vTimbre:['人声','童声化'], vLang:['国语','粤语'], vStyle:['哼唱','天籁声','念白吟诵'], vRange:['中音','高音'], rhythmT:['留白桥接','渐变换'], vPat:[1,1,0,1,0,1] },
  '复古年代':{ listen:['复古','怀旧','温暖','雅致','朦胧','华丽'],
    iMain:['口琴','手风琴','钢琴'], iRange:['中音','低音'], iSub:['钢琴高音颗粒','弦乐群铺底'],
    iNoise:['黑胶嘶声','磁带底噪','钟表滴答'], rhythm:['轻浮动','延长尾音'], bpm:['60-76','76-108'],
    vLine:['男声','女声'], vTimbre:['人声','老者声'], vLang:['国语','英语'], vStyle:['随口唱','哼唱'], vRange:['中音','低音'], rhythmT:['同曲变奏','渐变换'], vPat:[0,1,0,1,1,1] },
  '电子律动':{ listen:['赛博','流动','疾驰','混乱','冷峻','贴耳','华丽'],
    iMain:['高频 synth','subbass 低频嗡鸣','工业电子'], iRange:['高频刺耳音','低中音'], iSub:['电子 arp','合成器 pad'],
    iNoise:['无线电静电','机器运转','耳鸣高频'], rhythm:['循环建立','强拍推进','变速'], bpm:['108-120','120-156','176-200'],
    vLine:['女声'], vTimbre:['电子变声'], vLang:['英语','无语系'], vStyle:['多重叠混','夹音'], vRange:['高音'], rhythmT:['硬切','跳跃桥接'], vPat:[0,1,0,1,1,0] },
  '管弦影像':{ listen:['激昂','澎湃','神圣','贵族','开阔','浩荡','悲壮'],
    iMain:['管弦铜管','大提琴','小提琴'], iRange:['低音','中音','低中音'], iSub:['铜管点缀','弦乐群铺底','军鼓'],
    iNoise:['风声','暴雨声','心跳'], rhythm:['渐强','突起爆发','延长尾音'], bpm:['76-108','120-156'],
    vLine:['男声','女声'], vTimbre:['人声'], vLang:['无语系','国语'], vStyle:['美声','合唱','力量感'], vRange:['低音','中音'], rhythmT:['反打','渐变换'], vPat:[0,0,0,1,1,1] },
  '原声民谣':{ listen:['素朴','温暖','悠扬','开阔','市井','日式','疏朗'],
    iMain:['口哨','口琴','手风琴'], iRange:['中音','中高音'], iSub:['竖琴琶音','手碟','长笛'],
    iNoise:['树叶沙沙','河声','火苗噼啪','蝉鸣'], rhythm:['轻浮动','平缓上扬'], bpm:['50-60','60-76','76-108'],
    vLine:['女声','男声'], vTimbre:['人声'], vLang:['国语','日语'], vStyle:['随口唱','哼唱','念白吟诵'], vRange:['中音'], rhythmT:['留白桥接','同曲变奏'], vPat:[0,1,0,1,0,1] },
  '节奏放克':{ listen:['华丽','流动','都市','港风','明亮','贴耳','律动'],
    iMain:['重底鼓','工业电子'], iRange:['低中音','中音'], iSub:['军鼓','镲片','沙锤','铃鼓'],
    iNoise:['远景人群嘈杂','城市低频交通轰鸣','无线电静电'], rhythm:['强拍推进','循环建立','(A/B)情绪对切'], bpm:['108-120','120-156','156-176'],
    vLine:['女声','男声'], vTimbre:['人声'], vLang:['英语','粤语'], vStyle:['元气活力','合唱','夹音'], vRange:['中音','高音'], rhythmT:['硬切','同频变奏'], vPat:[0,1,0,1,0,1] }
};

/* 每套方案的「六段用量表」（起承收放转合 · 每段 1 位数字 · 1＝单层 2＝双层 3＝三层）：
   预选严格照表铺项（❌ 不按上限一把铺满）——表里给 1 就是 1 项、给 2 就是 2 项；
   该轴方案里还有没用到的备选值才露 `＋`（点一下加方案里的下一项），备选用尽只留 `－`。
   值不得超 BGM_MAX（listen／iMain／iSub／iNoise／rhythm ≤2 · vStyle ≤3 · vLine 恒 1＝不参与 ＋） */
var BGM_N_DEF = { listen:'121212', iMain:'121211', iSub:'121212', iNoise:'121211', rhythm:'121212', vStyle:'122122', vLine:'111111' };
var BGM_N = {
  '生活叙事':{ listen:'121212', iMain:'121211', iSub:'121211', iNoise:'121211', rhythm:'121212', vStyle:'122122' },
  '都市情绪':{ listen:'121212', iMain:'121211', iSub:'122122', iNoise:'121212', rhythm:'121212', vStyle:'122122' },
  '东方国风':{ listen:'121212', iMain:'121211', iSub:'121212', iNoise:'121211', rhythm:'122122', vStyle:'122322' },
  '复古年代':{ listen:'121212', iMain:'121211', iSub:'121211', iNoise:'121211', rhythm:'121212', vStyle:'122122' },
  '电子律动':{ listen:'121212', iMain:'121211', iSub:'122122', iNoise:'121212', rhythm:'122122', vStyle:'122312' },
  '管弦影像':{ listen:'121212', iMain:'121211', iSub:'122122', iNoise:'121212', rhythm:'121212', vStyle:'122322' },
  '原声民谣':{ listen:'121212', iMain:'121211', iSub:'121211', iNoise:'121211', rhythm:'121212', vStyle:'122122' },
  '节奏放克':{ listen:'121212', iMain:'122122', iSub:'122122', iNoise:'121211', rhythm:'122122', vStyle:'122122' }
};

/* 无弹层换选（点一下换下一个）：声线 ／ 声音的音区 */
var BGM_NOPOP = { vLine:1, vRange:1 };
/* 小池轴：单列直接全列（池 ≤8 全列 · 不用「更多」两栏）——声线／音区 */
var BGM_ALLPOP = { vLine:1, vRange:1 };
/* BGM 行首骰子（青 #35A9BA 13px · 四宫格＋4 点，与 E3 行首骰同形同色）＝只摇换本行各轴 */
var ICO_BG='<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#35A9BA" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.8" cy="8.8" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="15.2" cy="15.2" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="15.2" cy="8.8" r="1.4" fill="#35A9BA" stroke="none"/><circle cx="8.8" cy="15.2" r="1.4" fill="#35A9BA" stroke="none"/></svg>';
/* 服装风格池（静态 · 全库唯一实现 · 8 类 71 项）：风格换选＝两栏，左栏「推荐」＋这 8 类，右栏该类全项。
   改池只改这里；❌ 不在 DATA 里重复候选。E2 卡头的「风格」只是显示 B4 选中的值。 */
var STYLE_POOL=[
  ["质感极简向",["简约质感系","极简禁欲系","清冷性冷淡风","高智感知识分子风","法式松弛感","韩式清冷","禅意素朴风","中式禅意"]],
  ["复古年代向",["复古 & 地域氛围感","美式复古","港风复古","昭和日系","古着 vintage","中世纪复古","西部牛仔","英伦贵族","嬉皮松弛风"]],
  ["潮流亚文化向",["街头 & 个性潮流风","甜酷亚文化","Y2K 千禧辣妹","朋克摇滚","暗黑哥特系","洛丽塔","马吉拉解构风"]],
  ["场景功能向",["学院 & 轻熟","户外 & 度假系","正装绅装","工装硬核风","机能战术风","谍战制式","荒原游牧风"]],
  ["国风民族向",["国风新中式","民族刺绣风","明制汉服","唐制汉服","宋制汉服","魏晋风","战国袍","汉元素改良古装"]],
  ["幻想特色向",["废土工业风","赛博轻科幻","芭蕾柔系","田园森系","冰雪清冷系","中世纪城堡贵族风","中世纪骑士甲胄风","中世纪平民古风","精灵仙羽风","巫师暗调长袍风","龙族鎏金鳞纹风","暗影魔族风","仙灵云纱风","矮人锻铁粗粝风","人鱼水泽氛围感","妖精野系松弛风","天使圣洁风","死灵枯寂丧系风"]],
  ["人物气质向",["甜妹软妹","御姐利落","温润书卷气","破碎感病弱","桀骜痞帅","沉稳时政老干部","邪魅诡谲","温柔白月光","少年感","慵懒贵气","凌厉杀伐感","软糯幼态","野性猎人感"]],
  ["兜底标签",["小众风格"]]
];
(function(){
var me=document.currentScript&&document.currentScript.closest?document.currentScript.closest('.ljP'):null;
var ROOT=me||Array.prototype.slice.call(document.querySelectorAll('.ljP')).pop();
if(!ROOT)return;
var bd=ROOT.querySelector('.ljBd'),ovl=ROOT.querySelector('.ljOvl'),moB=ROOT.querySelector('.ljMoB'),tst=ROOT.querySelector('.ljTst');
ROOT.querySelector('.ljTt').textContent=DATA.title;
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function escAttr(s){return esc(s).replace(/"/g,'&quot;');}
function cp(x){return JSON.parse(JSON.stringify(x));}
/* 语言全池：与 template/pool/b4_池.txt「人声·语言」同口径（去掉「无语系」）。
   推荐 6–8 项走单列（数据 ln.lc），更多…走双栏：左华语·方言／右外语 */
var LANG_POOL=[
 ["华语 · 方言",["国语","粤语","川渝话","潮汕话","闽南语","上海话","东北话","客家话","维吾尔语","藏语","蒙语","彝语","哈萨克语"]],
 ["外语",["英语","日语","韩语","俄语","法语","德语","西班牙语","意大利语","葡萄牙语","泰语","越南语","阿拉伯语","印语","拉丁语","梵语"]]
];
function cv(c){return (typeof c==='string')?c:(c.v||'');}
function oneLine(s){return String(s).replace(/\n/g,' ｜ ');}
var ITEMS={},W2={},WOWN={};
DATA.blocks.forEach(function(bl){bl.items.forEach(function(it){
ITEMS[it.k]=it;
if(it.seg){it.seg.forEach(function(x){if(x.w){W2[x.w]={c:x.c||null,v:x.v||''};WOWN[x.w]=it.k;}});}
if(it.tabs)it.tabs.list.forEach(function(ro,ri){ro.fields.forEach(function(f,fi){
if(f.g==='style'&&!f.c){var wk0='rf_'+it.k+'_'+ri+'_'+fi;W2[wk0]={c:[f.v||''],v:f.v||'',sty:1,rec:(f.rec||[]).slice(),recw:f.recw||null};WOWN[wk0]=it.k;f._wk=wk0;return;}
if(f.c&&f.c.length){var wk='rf_'+it.k+'_'+ri+'_'+fi;W2[wk]={c:f.c.slice(),base:f.c.slice(),v:f.v};WOWN[wk]=it.k;f._wk=wk;if(f.hx)W2[wk].hx=1;}});});
if(it.groups)it.groups.forEach(function(g,gi){g.rows.forEach(function(r,ri){
var _LS=(r.lines&&r.lines.length)?r.lines:(r.line?[r.line]:[]);
_LS.forEach(function(ln){
/* 角色候选＝本镜在场者；当前值不在候选里时并入首位（否则引擎会退回 rc[0]，把话安到别人头上） */
var _rc=(ln.rc&&ln.rc.slice)?ln.rc.slice():[];if(ln.rv&&_rc.indexOf(ln.rv)<0)_rc.unshift(ln.rv);
W2[ln.rw]={c:_rc.length?_rc:null,v:ln.rv||''};WOWN[ln.rw]=it.k;
W2[ln.lw]={c:ln.lc||null,v:ln.lv||'',lang:true};WOWN[ln.lw]=it.k;
W2[ln.tw]={c:(ln.byRole&&ln.byRole[ln.rv])||[ln.tv],v:ln.tv,roleV:ln.rv,roleKey:ln.rw,byRole:ln.byRole||{}};WOWN[ln.tw]=it.k;
 var _tk=ln.tw+'_t',_ak=ln.tw+'_a',_gk=ln.tw+'_g';
 W2[_tk]={c:['对白','画外音','内心VO','旁白','解说','VO','歌声'],v:(ln.tvType||'对白')};WOWN[_tk]=it.k;
 W2[_ak]={c:['轻淡','优雅','高能','狡猾','生活化','害羞','吞吐'],v:(ln.tvTone||'生活化')};WOWN[_ak]=it.k;
 W2[_gk]={c:['呐喊','低落','悲悯','喜乐','苦涩','愤怒','哽咽','怅然'],v:(ln.tvFeel||'低落')};WOWN[_gk]=it.k;});});});
if(it.bgm&&it.bgm.styleDef){var _sd=it.bgm.styleDef,_sl=[];
  if(_sd.v)_sl.push(_sd.v);
  (_sd.rec||[]).forEach(function(x){if(_sl.indexOf(x)<0)_sl.push(x);});
  (_sd.c||[]).forEach(function(x){if(_sl.indexOf(x)<0)_sl.push(x);});
  W2['bgmstyle']={c:_sl,v:_sd.v||'',noauto:1};WOWN['bgmstyle']=it.k;}

});});
var S={tx:{},pick:{},sty:{},rA:{},bA:{},bSw:{},bPk:{},bPc:{},bat:{},buf:{},ed:{},mw:{},lock:{},bgmLk:{},openB:null,undo:[]};
/* 场景区初值（复位还原）：每场的 scenes（含各套高阶开关与场景串三段）—— 就地写在 ITEMS 数据上，不还原就会「复位没反应」 */
var G0=(ITEMS['story']&&ITEMS['story'].groups)?cp(ITEMS['story'].groups.map(function(g){return {scenes:g.scenes||[]};})):null;

/* BGM 当期已落表（主选风格原值）：换到别的推荐项后再点回主选＝恢复这张表；不复原就会被预填一路覆盖 */
var BGM_AUTH=(ITEMS['bgm']&&ITEMS['bgm'].bgm)?{segs:cp(ITEMS['bgm'].bgm.segs||[]),trans:cp(ITEMS['bgm'].bgm.trans||[])}:null;

function initPicks(){for(var wk in W2){var w=W2[wk];
if(w.byRole){w.c=((w.byRole[w.roleV||''])||[w.v]).slice();}
var arr=w.c||[],idx=0;
for(var j=0;j<arr.length;j++){if(cv(arr[j])===w.v){idx=j;break;}}
S.pick[wk]=idx;}}
initPicks();
function initNovel(){if(!W2['bgmstyle'])W2['bgmstyle']={c:['生活流','治愈系','都市感','国风','复古胶片','轻电子'],v:'生活流'};S.rA={};S.bA={};S.bSw={};S.bPk={};S.bPc={};
DATA.blocks.forEach(function(bl){bl.items.forEach(function(it){
if(it.tabs)S.rA[it.k]=0;
if(it.bgm){S.bA[it.k]=0;}
});});}
initNovel();
DATA.blocks.forEach(function(bl){bl.items.forEach(function(it){S.bat[it.k]=null;S.lock[it.k]=false;});});
function wval(wk){var w=W2[wk];if(!w)return '';
if(w.sty)return (S.sty[wk]!=null&&S.sty[wk]!=='')?S.sty[wk]:w.v;if(w.c&&w.c.length){var i=S.pick[wk];if(i===undefined||w.c[i]===undefined){i=0;for(var j=0;j<w.c.length;j++){if(cv(w.c[j])===w.v){i=j;break;}}}return cv(w.c[i]);}return w.v;}
function edVal(fk,def){return (S.ed[fk]!=null)?S.ed[fk]:def;}
function gtitle(gi,def){return edVal('gt_'+gi,def);}
function rowText(gi,ri,def){var t=edVal('gr_'+gi+'_'+ri,def);return String(t==null?'':t);}
function roleHTML(it){var act=S.rA[it.k]||0,ro=it.tabs.list[act];
var W=ro.wear||(ro.wear={hi:false,out:true,sets:1,sum:''});
var H=ro.hero||(ro.hero={img:false});
/* 服装行显示条件：风格 ∈ AI 推荐项（选池里其他项 → 收起套 · 不显示即不回传） */
var _si=-1;ro.fields.forEach(function(f,i){if(f.label==='风格')_si=i;});
var _showWear=(_si<0)?true:styleInRec('rf_'+it.k+'_'+act+'_'+_si);
var _noWear=!!ro.noWear;   /* 角色库判定为无服装（不出镜）：第二组整组不出，避免误导 */
var h='<div class="ljTabs">';
it.tabs.list.forEach(function(r,i){h+='<span class="ljTab'+(act===i?' act':'')+'" onclick="LJ.rtab(\''+it.k+'\','+i+')">'+esc(r.label)+'</span>';});
h+='</div><div class="ljSRow">';
var g2=false;
ro.fields.forEach(function(f,fi){
var fk='rf_'+it.k+'_'+act+'_'+fi;
/* ⓐ 形象简名：行首 `主演`（＝出演类型 · 纯信息，取 ro.cast，不可改）＋ `女 18-24 形象` 一个整体单元（性别×年龄两槽可点 ＋ 尾缀「形象」；五维组合的简名在 E1 展开） */
if(f.hx){
  if(f.hx!=='sex')return;
  var fkS='rf_'+it.k+'_'+act+'_'+fi, fkA='rf_'+it.k+'_'+act+'_'+(fi+1);
  var _fm=String(ro.fm||'').trim();
  h+='<span class="ljSlot"><span class="ljSL" style="margin-right:6px" title="出演类型 · 纯信息（取角色档案，本面板不改）">'+esc(ro.cast||'主演')+'</span>'
   +'<span class="ljSV" data-rr="role" data-wk="'+fkS+'" onclick="LJ.sw(\''+fkS+'\',this)" title="性别：值取项库「一级角色信息栏·性别」｜右键＝随机换一个推荐值">'+esc(wval(fkS))+'</span>'
   +' <span class="ljSV" data-rr="role" data-wk="'+fkA+'" onclick="LJ.sw(\''+fkA+'\',this)" title="年龄：值取项库「一级角色信息栏·年龄」｜右键＝随机换一个（同青骰）">'+esc(wval(fkA))+'</span>'
   +(_fm?' <span class="ljFm">'+esc(_fm)+'</span>':'')
   +'</span>';
  return;}
/* ⓑ 高阶：只记状态（开＝四行收起）；不渲卡、不单独回传 —— B4「确认」回传后由回传值判定进 E1 */
if(f.im){
  h+='<span class="ljSlot"><span class="ljSL" style="margin-right:6px">高阶</span><span class="ljSw'+(H.img?' on':'')+'" onclick="LJ.rimg(\''+it.k+'\','+act+')" title="'+(H.img?'关闭 · 复原 简介／造型／个性／声音':'开启 · 四行收起，本面板「确认」后再展开 E1 角色卡')+'"><span class="ljSwK"></span></span></span>';
  return;}
/* ⓒ 简介 / 造型 / 个性 / 声音：独占一行，可点改 */
if(f.tx){
  if(H.img)return;   /* 形象高阶开＝这四行收起，内容在 E1 卡里（与服装高阶收起服装行同构） */
  var tk='rt_'+it.k+'_'+act+'_'+f.tx;
  h+='<span class="ljSlot" style="display:block;margin-right:0"><span class="ljSL">'+esc(f.label)+'：</span><span class="ljEd ljTxt" contenteditable="true" spellcheck="false" oninput="LJ.ed(\''+tk+'\',this.innerText)">'+esc(edVal(tk,f.v))+'</span></span>';
  return;}
/* ⓓ 风格：第二组起头（无服装角色整组不出：风格也不让选） */
if(_noWear)return;
if(f.g&&!g2){h+='</div><div class="ljSRow ljS2">';g2=true;}
/* ⓔ 服装简述：AI 优选一条。
   显示＝无角色库设定图（必须写描述）／有库图且 出图=开 且 高阶=关 且 风格在推荐内
   收起＝高阶开（描述进 E2）· 出图关（沿用设定图自带服装）· 风格不在推荐内 */
if(f.sum){
if(W.hi)return;   /* 服装高阶开＝服装串收起（与库图有无无关 · 不显示＝不回传） */
if(H.lib){ if(W.out===false)return; if(!_showWear)return; }
var _ls=(W.list&&W.list.length)?W.list:[{sc:'',sum:W.sum||''}];
if(_ls.length<=1){
h+='<span class="ljSlot" style="display:block;margin-right:0"><span class="ljSL">服装：</span><span class="ljSum">套 '+esc(_ls[0].sum||'（AI 按风格与剧情优选）')+'</span></span>';
}else{
_ls.forEach(function(x){
h+='<span class="ljSlot" style="display:block;margin-right:0"><span class="ljWearSc">场'+esc(x.sc||'—')+'</span><span class="ljSum"> ｜ 套 '+esc(x.sum||'（AI 按风格与剧情优选）')+'</span></span>';});
}
return;}
/* ⓕ 服装高阶 ＋ 出图：均只记状态（不渲卡、不单独回传）—— B4「确认」回传后判定
   高阶＝进 E2 精修；高阶开时优先级 > 出图（出图强制开、灰，不可操作）
   出图（默认开）＝是否按描述重出服装图；无角色库设定图时灰（没图可重出，描述写进角色生成提示词）
   出图 关＝沿用设定图自带服装（服装行收起 · B5 不写服装）／开＝按描述出图（服装行显示 · B5 不写服装） */
if(f.hi){
var _out=(W.out!==false);
var _gray=!!W.hi||!H.lib;
var _gTip=W.hi?'出图已锁定：服装高阶开启（高阶优先，默认出图）':(H.lib?'':'出图已锁定：角色库无设定图（描述直接进角色生成提示词，无图可重出）');
h+='<span class="ljSlot"><span class="ljSL" style="margin-right:6px">高阶</span><span class="ljSw'+(W.hi?' on':'')+'" onclick="LJ.rhi(\''+it.k+'\','+act+')" title="'+(W.hi?'关闭 · 回到 AI 优选简述':'开启 · 服装行让位，本面板「确认」后再展开 E2 服装卡（出图强制开）')+'"><span class="ljSwK"></span></span>';
h+='<span class="ljSL" style="margin:0 6px 0 16px">出图</span><span class="ljSw'+(_out?' on':'')+(_gray?' gray':'')+'" onclick="LJ.rout(\''+it.k+'\','+act+')" title="'+(W.hi?'出图已锁定：服装高阶开启（高阶优先，默认出图）':(H.lib?(W.out===false?'开 · 按服装描述重出服装图（B5 不写服装）':'关 · 沿用角色库设定图自带服装（B5 不写服装）'):'出图已锁定：角色库无设定图（描述直接进角色生成提示词，无图可重出）'))+'"><span class="ljSwK"></span></span>';
h+='</span>';
return;}
if(f.g==='style'){h+='<span class="ljSlot">'
+'<span class="ljSL">'+esc(f.label)+'：</span>'
+'<span class="ljSV" data-rr="role" data-wk="'+fk+'" onclick="LJ.sw(\''+fk+'\',this)" title="点击换选（左栏类 · 右栏风格项 · 首行推荐）｜右键＝随机换一个推荐风格（同青骰）">'+esc(wval(fk))+'</span></span>';}
else if(f.c&&f.c.length){h+='<span class="ljSlot"><span class="ljSL">'+esc(f.label)+'：</span><span class="ljSV" data-rr="role" data-wk="'+fk+'" onclick="LJ.sw(\''+fk+'\',this)" title="点击换选（末项可自定义）｜右键＝随机换一个（同青骰）">'+esc(wval(fk))+'</span></span>';}
else{h+='<span class="ljSlot"><span class="ljSL">'+esc(f.label)+'：</span><span>'+esc(f.v)+'</span></span>';}
});
h+='</div>';return h;}
function rolePlainOne(it,ri,ro){
var W=ro.wear||(ro.wear={hi:false,out:true,sets:1,sum:''});
var ps=[];
var _H=ro.hero||{img:false};
var _si=-1;ro.fields.forEach(function(f,i){if(f.label==='风格')_si=i;});
var _showWear=(_si<0)?true:styleInRec('rf_'+it.k+'_'+ri+'_'+_si);
ro.fields.forEach(function(f,fi){var fk='rf_'+it.k+'_'+ri+'_'+fi;
if(f.hx){if(f.hx==='sex')ps.push('形象='+wval(fk)+' '+wval('rf_'+it.k+'_'+ri+'_'+(fi+1))+((ro.fm&&String(ro.fm).trim())?' '+String(ro.fm).trim():''));return;}
if(f.im){ps.push('形象高阶='+(_H.img?'开（E1 角色卡）':'关'));return;}
if(f.tx){if(_H.img)return;ps.push(f.label+'='+edVal('rt_'+it.k+'_'+ri+'_'+f.tx,f.v));return;}
if(f.sum){
if(ro.noWear){ps.push('服装=无（角色库：无服装）');return;}
if(!W.hi && (_H.lib ? (W.out!==false&&_showWear) : true)){
var _l2=(W.list&&W.list.length)?W.list:[{sc:'',sum:W.sum||''}];
ps.push(_l2.length<=1?'服装=套 '+(_l2[0].sum||'（AI 优选）')
  :'服装='+_l2.map(function(x){return '场'+(x.sc||'—')+'｜套 '+(x.sum||'');}).join('；'));
}
return;}
if(f.hi){
if(ro.noWear)return;
var _o=W.hi?true:(W.out!==false);   /* 高阶开＝出图强制开（不沿用旧 out=false） */
/* 只回传「当前生效的那个开关」：高阶开＝写出图无意义（忽略不写）／高阶关＝出图关即不写高阶
   库图有无／复用与否＝判断信息（供四情形判定），❌ 不进回传 */
if(W.hi)ps.push('服装高阶=开（E2 服装卡 · 出图强制开）');
else if(_H.lib)ps.push('服装出图='+(_o?'开':'关'));
ps.push('B5服装='+(_H.lib
  ? (_o?'不写（按描述重出服装图）':'不写（沿用设定图自带服装）')
  : (_H.reuse?'不写（写进角色生成提示词）':'写（本镜角色描述带此服装）')));
return;}
if(f.g==='style'){ps.push('服装风格='+wval(fk));}   /* 回传用全名「服装风格」（面板标签仍简写「风格」） */
else if(f.c&&f.c.length){ps.push(f.label+'='+wval(fk));}
else ps.push(f.label+'='+f.v);});

return ps.join(' ｜ ');}
function storyHTML(it){var h='';
it.groups.forEach(function(g,gi){
h+='<div class="ljGp"><div class="ljGH"><span class="ljIN">'+esc(g.no)+'</span><span class="ljSL">｜</span><span class="ljEd" contenteditable="true" spellcheck="false" oninput="LJ.sed(\'gt_'+gi+'\',this.innerText)">'+esc(gtitle(gi,g.title))+'</span></div>';
g.rows.forEach(function(r,ri){
var tkey=it.k+'|'+gi+'_'+ri;var mm=r.m;
h+='<div class="ljTRow"><span class="ljM">'+esc(mm)+'</span><span class="ljEd" contenteditable="true" spellcheck="false" oninput="LJ.sed(\'gr_'+gi+'_'+ri+'\',this.innerText)">'+esc(rowText(gi,ri,r.t))+'</span>';
var _L=(r.lines&&r.lines.length)?r.lines:(r.line?[r.line]:[]);
if(_L.length>1){h+='<span class="ljLNbox">';_L.forEach(function(ln){h+='<span class="ljLN">'+lnh(ln)+'</span>';});h+='</span>';}
else if(r.line){var ln=r.line;
h+='<span class="ljLN">'+lnh(ln)+'</span>';}
else{var tkk=it.k+'|t'+gi+'_'+ri;h+='<input class="ljLnIn" value="'+escAttr(S.tx[tkk]||'')+'" placeholder="无台词/自定义" oninput="LJ.tline(\''+tkk+'\',this.value)">';}
h+='</div>';
});
/* 场景区（块底）：每套＝`场景` 小标 ＋ 高阶 ＋ 串；多套时小标带场次号 */
var scs=g.scenes||[];
if(scs.length){
h+='<div class="ljScn">';
scs.forEach(function(sc,si){
var lb=sc.label?('场景'+sc.label):'场景';
h+='<div class="ljScnH"><span class="ljSL">'+esc(lb)+'</span><span class="ljSL" style="cursor:pointer" onclick="LJ.ghi('+gi+','+si+')" title="点击切换场景高阶">高阶</span><span class="ljSw'+(sc.hi?' on':'')+'" onclick="LJ.ghi('+gi+','+si+')" title="'+(sc.hi?'关闭 · 本场景串回到纯文字':'开启 · 收起本场景串，本面板「确认」后按本场景渲 E3 场景卡')+'"><span class="ljSwK"></span></span></div>';
if(!sc.hi)h+='<div class="ljScnV">'+esc(scnLine(it,sc))+'</div>';
});
h+='</div>';}
h+='</div>';});
return h;}
function storyPlainLines(it){
var out=[];
it.groups.forEach(function(g,gi){
(g.scenes||[]).forEach(function(sc){
var lb=sc.label?('场景'+sc.label):'场景';
out.push('▪ '+g.no+' ｜ '+gtitle(gi,g.title)+' ｜ '+lb+' ｜ 场景高阶='+(sc.hi?'开（E3 场景卡）':'关')+' ｜ 场景='+(sc.hi?'（本套进 E3 精修 · 回填后补）':scnLine(it,sc)));});
g.rows.forEach(function(r,ri){
var _L2=(r.lines&&r.lines.length)?r.lines:(r.line?[r.line]:[]);
var say=_L2.map(function(ln){return wval(ln.rw)+'（'+wval(ln.tw+'_t')+'，'+wval(ln.lw)+'）：「'+String(wval(ln.tw)).replace(/[「」]/g,'')+'」';}).join('');
var ftx=S.tx[it.k+'|t'+gi+'_'+ri];out.push(g.no+'｜'+r.m+'｜'+rowText(gi,ri,r.t)+'｜'+(say?('台词='+say):(ftx?('自由文本='+ftx):'台词=无')));});
});
return out;}
function lnh(ln){return '<span class="ljW" onclick="LJ.sw(\''+ln.rw+'\',this)" title="选择角色（台词候选随角色切换）">'+esc(wval(ln.rw))+'</span><span class="ljSL">（</span><span class="ljW" onclick="LJ.sw(\''+ln.tw+'_t\',this)" title="台词类型：对白／画外音／内心VO／旁白／解说／VO／歌声">'+esc(wval(ln.tw+'_t'))+'</span><span class="ljSL">，</span><span class="ljW" onclick="LJ.sw(\''+ln.lw+'\',this)" title="选择语言（B5 分镜台词按此语言翻译）">'+esc(wval(ln.lw))+'</span><span class="ljSL">）：</span><span class="ljW" onclick="LJ.sw(\''+ln.tw+'\',this)" title="台词换选（候选随角色切换）">'+esc(wval(ln.tw))+'</span>';}
function tline(k,v){S.tx[k]=v;}
function join2(v,sep){if(v==null)return '—';if(Array.isArray(v)){var a=v.filter(function(x){return !!x;});return a.length?a.join(sep):'—';}return String(v)||'—';}
function bgmVoice(sg){
var a=[];
if((sg.vLine||[]).length)a.push(join2(sg.vLine,'／'));
if(sg.vTimbre)a.push(join2(sg.vTimbre,'／'));
if(sg.vRange)a.push(join2(sg.vRange,'／'));
if(sg.vLang)a.push(join2(sg.vLang,'／'));
if((sg.vStyle||[]).length)a.push(join2(sg.vStyle,'／'));
return a.length?a.join(' · '):'—';}
function bgmHTML(it){var b=it.bgm;
var h='<div class="ljBgmF" style="margin-bottom:5px">'
+'<span class="ljBgmS">音乐风格：</span>'
+'<span class="ljSV" data-rr="bsty" onclick="LJ.bsPick(this)" title="点击换选（单列推荐 → 更多 → 大类／风格两栏）｜右键＝随机换一个推荐风格（整套预设一起换）">'+esc(wval('bgmstyle'))+'</span></div>';
h+='<div class="ljBgmT">';
b.segs.forEach(function(sg,si){h+=bgmRow(b,si,sg,(b.trans||[])[si]);});
h+='</div>';return h;}
function escq(v){return String(v==null?'':v).replace(/'/g,"\\'");}
function chipHTML(sec,i,ax,idx,txt){
var np=BGM_NOPOP[ax];
var oc=np?('LJ.bmCycle(\''+sec+'\','+i+',\''+ax+'\','+idx+')')
        :('LJ.bmPick(\''+sec+'\','+i+',\''+ax+'\','+idx+',this,event)');
return '<span class="ljSV" data-rr="bgm" data-sec="'+sec+'" data-i="'+i+'" data-ax="'+ax+'" data-idx="'+idx+'" onclick="'+oc+'" title="'+(np?'点一下换下一个｜右键＝单列换选':'换选（单列 → 更多 → 双列）｜右键＝随机换一个（同青骰）')+'">'+esc(txt)+'</span>';}
function addHTML(sec,i,ax){
if(!canAdd(sec,i,ax))return '';
return '<span class="ljAdd" onclick="LJ.bmAdd(\''+sec+'\','+i+',\''+ax+'\',event)" title="加一项（先取推荐项 · 再用同轴未用项）">＋</span>';}
function rmHTML(sec,i,ax,idx){
return '<span class="ljRm" onclick="LJ.bmDel(\''+sec+'\','+i+',\''+ax+'\','+idx+',event)" title="移除这一项">－</span>';}
/* 单轴渲染：`标：值[A] ＋` → 点 ＋ 后＝`值[A] － 值[B]`（`－` 兼作分隔 · ❌ 再写 `／`）；听感＝`值[A] → 值[B] －`（`－` 落末项后）；max>2 的轴＝`值 － 值 － 值`（满额无 `＋`）
   标＝E3 口径：一级标 13px（cls='ljSL'，调用方自带 `：`）／二级标 12px（cls='ljSLs'）
   过渡行的听感＝**单项**（只 1 词 · ❌ 第二词、❌ `＋／－`，只可点值换选；旧数据为两词时只取首词） */
function slotHTML(sec,i,ax,val,lab,cls){
var arr=Array.isArray(val)?val.filter(function(x){return x!=null&&x!=='';}):(val?[String(val)]:[]);
var max=(sec==='trans')?(ax==='listen'?2:1):(BGM_MAX[ax]||1);
var fixed=(sec==='trans'&&ax==='listen');
if(fixed)arr=arr.slice(0,1);
var h=lab?'<span class="'+(cls||'ljSL')+'">'+lab+'</span>':'';
if(!arr.length)return fixed?h:h+addHTML(sec,i,ax);
h+=chipHTML(sec,i,ax,0,arr[0]);
if(fixed||arr.indexOf('无')>=0||arr.indexOf('同上')>=0)return h;
if(max===2){
  if(arr.length<2){h+=addHTML(sec,i,ax);return h;}
  /* 听感＝`值 → 值 －`（`－` 落在末项之后 · 删第二值）／其余 2 值轴＝`值 － 值`（`－` 兼作分隔） */
  if(ax==='listen')h+='<span class="ljSep">→</span>'+chipHTML(sec,i,ax,1,arr[1])+rmHTML(sec,i,ax,1);
  else h+=rmHTML(sec,i,ax,1)+chipHTML(sec,i,ax,1,arr[1]);
  return h;}
for(var k=1;k<arr.length;k++)h+=rmHTML(sec,i,ax,k)+chipHTML(sec,i,ax,k,arr[k]);
if(max>2&&arr.length<max)h+=addHTML(sec,i,ax);
return h;}
/* 骰子：青骰＝行首那一枚（听感：摇 听感＋节奏＋BPM ／ 配器：摇 主·区·辅·噪 ／ 人声：摇 五轴）· BPM 只走右键随机 */
function diceHTML(sec,i,wh){return '<span class="ljBgD" onclick="LJ.bmRand(\''+sec+'\','+i+',\''+wh+'\',event)" title="摇换 听感＋节奏＋BPM（Ctrl+Z 可撤销）">'+ICO_BG+'</span>';}
/* 段块＝折叠行：默认只露 ① 听感／节奏／BPM；点行区域（非控件）展开 ② 配器 ③ 声线 ④ 本段后的过渡行
   BOPEN 是展开态（纯视图 · 不影响回传）；鼠标移入整行提亮（行显）、不设三角 */
var BOPEN={};
/* 每段人声独立开关：`sg.vOn` 优先，未写则继承整首 `b.vOn`（向后兼容旧数据） */
function segOn(sg,b){return sg.vOn===undefined?(b.vOn!==false):!!sg.vOn;}
function bgmRow(b,si,sg,tr){
var op=!!BOPEN['segs'+si],on=segOn(sg,b),_lk=!!S.bgmLk[si];
var h='<div class="ljBgB'+(op?' op':'')+(_lk?' lk':'')+'" onclick="LJ.bmFold('+si+',event)" title="点击展开／收起：配器 · 声线 · 过渡">';
h+='<div class="ljBgS">'+esc(sg.k)+(sg.emo?'<span class="ljBgSE"><em>'+esc(sg.emo)+'</em><i class="ljBgSx">｜</i></span>':'')+'</div>';
h+='<div class="ljBgM">';
h+='<div class="ljBvR ljBvG">'
 +'<span class="ljBv">'+diceHTML('segs',si,'listen')+slotHTML('segs',si,'listen',sg.listen,'听感：')+'</span>'
 +'<span class="ljBv">'+slotHTML('segs',si,'rhythm',sg.rhythm,'节奏：')+'</span>'
 +'<span class="ljBv ljBvEnd">'+slotHTML('segs',si,'bpm',sg.bpm,'')+'<span class="ljSL">BPM</span>'+ckHTML(si,on)+'</span></div>';
if(op){
h+='<div class="ljBvR ljBvTop'+(on?'':' ljBvBot')+'"><span class="ljBv">'+diceHTML('segs',si,'inst')+instHTML(sg,'segs',si)+'</span></div>';
if(on)h+='<div class="ljBvR ljBvBot"><span class="ljBv">'+diceHTML('segs',si,'voice')+voiceHTML(sg,'segs',si)+'</span></div>';
if(tr)h+=transRow(tr,si);}
h+='</div>'+lkHTML(si)+'</div>';return h;}
/* 同上：`☑人声` 右侧那枚 ditto（`〃` 双斜线）——点开＝该段整段沿用上一段
   （整段转灰 · 所有轴与勾选冻结 · 回传 `承｜同上`）；纯视图状态，不进 undo；`复位` 清空 */
function dittoSvg(on){return '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="'+(on?'#D9B75B':'#66707A')+'" stroke-width="2" stroke-linecap="round"><path d="M9.5 5.5 7.5 18.5M16.5 5.5 14.5 18.5"></path></svg>';}
function lkHTML(si){if(si<1)return '<span class="ljBgLk ph">'+dittoSvg(0)+'</span>';   /* 起段没有上一段可承接：留同宽占位，让 ☑人声 与承段对齐 */
var lk=!!S.bgmLk[si];
return '<span class="ljBgLk'+(lk?' on':'')+'" onclick="LJ.bmLk('+si+',event)" title="'+(lk?'已同上 · 点击取消，恢复本段自有内容':'本段同上：整段沿用上一段（所有轴冻结 · 回传 同上）')+'">'+dittoSvg(lk)+'</span>';}
/* 人声勾选框（BPM 骰子右侧）：勾＝本段有声线五轴／空＝本段无；过渡行只放等宽占位保持 BPM 竖列对齐 */
function ckHTML(si,on){
return '<span class="ljBgCk'+(on?' on':'')+'" onclick="LJ.bmVoiceSeg('+si+',event)" title="'+(on?'取消勾选 · 本段无人生声（声线行收起）':'勾选 · 本段有人声（展开声线五轴）')+'"><i></i>人声</span>';}
function ckPH(){return '<span class="ljBgCk ph"><i></i>人声</span>';}
/* 过渡行（收在段块折叠内容里 · 点它不触发折叠）：`过渡` 占段位列 ＋ 听感（单项）＋ 节奏 ＋ BPM */
function transRow(tr,si){
return '<div class="ljBvR ljBvG ljBgTr" onclick="event.stopPropagation()">'
 +'<span class="ljBgL">过渡<i class="ljBgSx">｜</i></span>'
 +'<span class="ljBv">'+diceHTML('trans',si,'listen')+slotHTML('trans',si,'listen',tr.listen,'听感：')+'</span>'
 +'<span class="ljBv">'+slotHTML('trans',si,'rhythm',tr.rhythm,'节奏：')+'</span>'
 +'<span class="ljBv ljBvEnd">'+slotHTML('trans',si,'bpm',tr.bpm,'')+'<span class="ljSL">BPM</span>'+ckPH()+'</span></div>';}
function listenTxt(row){return join2(row.listen,' → ');}
/* 配器：主色 ＋ 音区 × 辅色 ＋ 底噪（主／辅／噪 可 ＋ 到 2 项） */
function instHTML(row,sec,i){
return '<span class="ljSL">配器：</span>'
 +slotHTML(sec,i,'iMain',row.iMain,'主','ljSLs')
 +'<span class="ljDot">·</span>'+slotHTML(sec,i,'iRange',row.iRange,'区','ljSLs')
 +'<span class="ljDot">·</span>'+slotHTML(sec,i,'iSub',row.iSub,'辅','ljSLs')
 +'<span class="ljDot">·</span>'+slotHTML(sec,i,'iNoise',row.iNoise,'噪','ljSLs');}
/* 声音：声线（无弹层） × 音色 × 音区（无弹层） ＋ 语言 ／ 唱法（唱法可 ＋ 到 3 项）
   行首不写「人声」二字（顶部开关已表明） · 声线＝本行一级标 */
function voiceHTML(row,sec,i){
return slotHTML(sec,i,'vLine',row.vLine,'声线：')
 +'<span class="ljDot">·</span>'+slotHTML(sec,i,'vTimbre',row.vTimbre,'音色','ljSLs')
 +'<span class="ljDot">·</span>'+slotHTML(sec,i,'vRange',row.vRange,'音区','ljSLs')
 +'<span class="ljDot">·</span>'+slotHTML(sec,i,'vLang',row.vLang,'语言','ljSLs')
 +'<span class="ljDot">·</span>'+slotHTML(sec,i,'vStyle',row.vStyle,'唱法','ljSLs');}
/* BGM 回传＝一行一内容（与故事情节同构）：音乐风格 ／ 每段＝首行·配器·人声 ／ 该段后的过渡行
   人声关＝不写该行（不显示＝不回传）；不再回传整首汇总的人声开/关（按段已自明）
   整段同上：该段只写 `承｜同上`（不再展开各轴，也不写过渡行） */
function bgmLines(it){var b=it.bgm,a=['音乐风格='+wval('bgmstyle')];
b.segs.forEach(function(sg,si){
if(S.bgmLk[si]){a.push(sg.k+'｜同上');return;}   /* 该段整段同上：一行只写 `承｜同上`，过渡行也一并沿用 */
var t=sg.k+'｜听感 '+listenTxt(sg)
 +'｜节奏 '+join2(sg.rhythm,'／')+'｜BPM '+join2(sg.bpm,'／')
 +'｜配器 主 '+join2(sg.iMain,'／')+'·区 '+join2(sg.iRange,'／')+'·辅 '+join2(sg.iSub,'／')+'·噪 '+join2(sg.iNoise,'／');
if(segOn(sg,b)&&bgmVoice(sg)!=='—')t+='｜人声 '+bgmVoice(sg);
a.push(t);
var tr=(b.trans||[])[si];
if(tr)a.push('过渡 '+tr.k+'｜听感 '+listenTxt(tr)+'｜节奏 '+join2(tr.rhythm,'／')+'｜BPM '+join2(tr.bpm,'／'));});
return a;}
function bgmPlain(it){return bgmLines(it).join(' ｜ ');}
/* ── 场景区（故事情节每场块底部 · 一套一组）：串＝`时代 地理 背景 | 气节 时间 | 气氛 色调 | 内外 形式形色样式地方 落点位置`
   era 取本项 `era`（B3 时代背景三值）；后两段＝E3 场景卡回填（套字段 time／atm／s2）；`内外`（室内／室外／户外）
   由 B3 故事设定对应段给出、写在 s2 首词。高阶（小标右边圆点 · 每套一个）＝开 → 收起该套串（不显示＝不回传）→ 该套进 E3 */
function scnLine(it,sc){var era=(it.era||[]).join(' ');
return [era,sc&&sc.time,sc&&sc.atm,sc&&sc.s2].filter(function(x){return !!x;}).join(' | ');}
function itemBody(it){
if(it.ed)return '<span class="ljEd" contenteditable="true" spellcheck="false" oninput="LJ.ed(\''+it.k+'__t\',this.innerText)">'+esc(edVal(it.k+'__t',it.txt))+'</span>';
if(it.tabs)return roleHTML(it);
if(it.groups)return storyHTML(it);
if(it.bgm)return bgmHTML(it);
if(it.seg!=null){var h='';it.seg.forEach(function(x){if(x.s!=null){h+=esc(x.s);return;}h+=esc(wval(x.w));});return h;}
return esc(it.txt);}
function itemPlain(it){
if(it.ed)return edVal(it.k+'__t',it.txt);
if(it.tabs)return it.tabs.list.map(function(ro,ri){return '角色·'+ro.label+'：'+rolePlainOne(it,ri,ro);}).join(' ； ');
if(it.groups)return storyPlainLines(it).join(' ； ');
if(it.bgm)return bgmPlain(it);
return it.txt;}
function itemHTML(it){var lk=S.bat[it.k];var il=!!S.lock[it.k];
var h='<div class="ljItem" data-k="'+it.k+'"><div class="ljIH"><span class="ljIN">'+esc(it.n)+'</span>';
if(!it.nb){
if(lk!=null){h+='<span class="ljBk2" onclick="LJ.unbat(\''+it.k+'\')" title="已锁定 · 点击解锁恢复">'+lockSvg(true)+'</span>';}
else{h+='<button class="ljBtb'+(S.openB===it.k?' act':'')+'" onclick="LJ.bat(\''+it.k+'\')" title="批改：在该项栏下方就地输入调整内容">批改</button>';}
}

h+='</div>';
if(lk!=null){h+='<div class="ljBtx">'+esc(lk)+'</div><div class="ljOld2">'+esc(oneLine(itemPlain(it)))+'</div>';}
else{h+='<div class="ljTxb'+(il?' ljFz':'')+'">'+itemBody(it)+'</div>';}
if(!it.nb){h+='<div class="ljBi'+(S.openB===it.k?' on':'')+'"><input placeholder="写入你想调整的内容" value="'+escAttr(S.buf[it.k]||'')+'" oninput="LJ.buf(\''+it.k+'\',this.value,this)" onkeydown="LJ.ek(event,\''+it.k+'\')"><span class="ljBkey'+(S.buf[it.k]?' has':'')+'" onclick="LJ.lockB(\''+it.k+'\')" title="锁定批改（回车同效）">'+keySvg()+'</span></div>';}
h+='</div>';return h;}
function renderAll(){var h='';DATA.blocks.forEach(function(bl){
h+='<div class="ljSc"><div class="ljSh"><span class="ljSt">'+esc(bl.name)+'</span>';
h+='</div>';
bl.items.forEach(function(it){h+=itemHTML(it);});
h+='</div>';});bd.innerHTML=h;}
function renderItem(k){var el=bd.querySelector('.ljItem[data-k="'+k+'"]');var it=ITEMS[k];if(el&&it)el.outerHTML=itemHTML(it);}
var pop=document.createElement('div');pop.className='ljPop';ROOT.appendChild(pop);
var POP={type:null,wk:null,ik:null,si:0,fi:0};
function measW(txt,fs,ff){
  if(!_MW){_MW=document.createElement('span');_MW.style.cssText='position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;pointer-events:none';ROOT.appendChild(_MW);}
  _MW.style.fontSize=fs+'px';_MW.style.fontFamily=ff;_MW.textContent=txt;return _MW.offsetWidth;
}
var _MW=null;
/* 两栏尺寸：左栏 5 字宽 ／ 右栏 10 字宽（超字按实测放宽 · 滚条不计入） */
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
function placePop(el){
if(!el||!el.getBoundingClientRect)return;
if(!document.contains(el))el=POP.el;
if(!el||!el.getBoundingClientRect)return;
var r=el.getBoundingClientRect(),pr=ROOT.getBoundingClientRect();
var L=r.left-pr.left;if(L+pop.offsetWidth>ROOT.clientWidth-8)L=Math.max(8,ROOT.clientWidth-pop.offsetWidth-10);
pop.style.left=L+'px';
/* 先还原高度，量自然高（单列选项区固定 208 / 两栏固定 268 都按内容区算） */
var o=pop.querySelector('.ljOpts');
pop.style.height='';pop.style.maxHeight='';if(o)o.style.height='';
var ph=pop.offsetHeight;
/* 可视上下界＝面板矩形 ∩ 视口（.ljP 最高 945px，嵌在小 iframe 里会超出视口，必须用视口兜底） */
var vTop=Math.max(pr.top,0),vBot=Math.min(pr.bottom,window.innerHeight||document.documentElement.clientHeight);
var below=vBot-r.bottom-8,above=r.top-vTop-8,T=0;
if(ph<=below)T=r.bottom-pr.top+6;                    /* 下方够：向下开 */
else if(ph<=above)T=r.top-pr.top-ph-6;               /* 上方够：向上翻 */
else{                                                 /* 上下都不够：压选项区高度＋贴边 */
  var room=Math.max(150,Math.max(below,above)-6);
  if(pop.classList.contains('wide')){var nw=Math.max(3,Math.floor((room-59)/25));pop.style.height=(nw*25+59)+'px';}
  else if(o){var ns=Math.max(3,Math.floor((room-57)/26));o.style.height=(ns*26)+'px';}
  ph=pop.offsetHeight;
  T=(above>=below)?(r.top-pr.top-ph-6):(r.bottom-pr.top+6);
  var lo=vTop-pr.top+8,hi=vBot-pr.top-ph-8;if(hi<lo)hi=lo;
  T=Math.min(Math.max(T,lo),hi);}
pop.style.top=T+'px';}
/* 左栏组名多于可视行数时把选中组滚进视野（听感 14 组 > 固定 8 行） */
function scrCat(c){
if(!c)return;var box=pop.querySelector('.ljCats');if(!box)return;
var cr=c.getBoundingClientRect(),br=box.getBoundingClientRect();
if(cr.top<br.top+2)box.scrollTop-=Math.ceil(br.top-cr.top)+4;
else if(cr.bottom>br.bottom-2)box.scrollTop+=Math.ceil(cr.bottom-br.bottom)+4;}
/* 单列形态：先挂 stone 类（换成定高 208 的单列皮肤）再定位 —— 否则 placePop 量到的是换肤前的矮高，会误判「下方够」而溢出面板底 */
function stonePop(el){pop.classList.remove('pickone');pop.classList.add('stone');placePop(el||POP.el);}
function openPopAt(el,html,wide){pop.classList.remove('stone');pop.classList.remove('bsw');pop.innerHTML=html;pop.classList.toggle('wide',!!wide);pop.classList.toggle('pickone',!wide);pop.classList.add('on');
if(wide){if(!el)el=POP.el;fitWide();}
placePop(el);}
function closePop(){pop.classList.remove('on');POP.type=null;}
function poolOf(){var w=W2[POP.wk]||{};return w.pool||STYLE_POOL;}
function styleFlat(){var o=[],P=poolOf();P.forEach(function(c){c[1].forEach(function(v){o.push(v);});});return o;}
/* 推荐：字段 rec（AI 依本块剧情／角色推理的首选）→ 当前值置顶 → 缺省按当前值所在类兜底 */
function styleRec(cur,rec){
  var P=poolOf(),all=styleFlat(),out=[];
  (rec||[]).forEach(function(v){if(all.indexOf(v)>=0&&out.indexOf(v)<0)out.push(v);});
  if(cur&&out.indexOf(cur)>0){out.splice(out.indexOf(cur),1);out.unshift(cur);}   /* 当前值在推荐内 → 置顶；不在推荐内 → 不进推荐栏（右栏其所属类里有高亮） */
  if(!out.length){var cat=null;P.forEach(function(c){if(c[1].indexOf(cur)>=0)cat=c;});
    out=(cat?cat[1]:all).slice(0,4);if(cur&&out.indexOf(cur)<0)out.unshift(cur);}
  return out.slice(0,6);
}
/* 风格是否属于 AI 推荐项（推荐项外＝服装行收起、不回传服装） */
function styleInRec(wk){
  var w=W2[wk];if(!w||!w.sty)return true;
  var rec=w.rec||[];if(!rec.length)return true;
  return rec.indexOf(wval(wk))>=0;
}
/* 一级单列＝AI 推荐项（rec · 只列推荐项，❌ 不拿池里其他项凑数）；当前值不在推荐内时置顶显示，最多 8 项 */
function styleOneList(){
  var w=W2[POP.wk]||{},cur=wval(POP.wk),all=styleFlat(),out=[];
  (w.rec||[]).forEach(function(v){if(all.indexOf(v)>=0&&out.indexOf(v)<0)out.push(v);});
  if(cur&&out.indexOf(cur)<0)out.unshift(cur);
  if(!out.length)out=all.slice(0,6);   /* 数据区没写 rec 时才退回池前几项 */
  return out.slice(0,8);
}
function drawStyleOne(el){
  var list=styleOneList(),cur=wval(POP.wk);
  var opts=list.map(function(v){return styleItemHTML(v,cur);}).join('');
  openPopAt(el||POP.el,'<div class="ljOpts" id="ljPopL">'+opts+'</div>'
    +'<div class="ljFixOne"><div class="ljMore" onclick="event.stopPropagation();LJ.stMore()">更多...</div>'
    +'<div class="ljPc"><input id="b4cst" placeholder="自定义…（回车确定）" class="ljCst" onkeydown="LJ.stCust(event)"></div></div>',false);
  stonePop(el||POP.el);
}
/* 更多...＝一级单列切两栏（左栏 推荐 ＋ 8 类 · 右栏该类全池）
   ⚠ 就地改造弹层，不重建：重建会让被点的 .ljMore 脱离文档 → ROOT 的 click 判「点空白」而关闭 */
function stMore(){
  POP.gi=0;
  var G=styleGroups(),g=G[0],cur=wval(POP.wk);
  var cats=G.map(function(x,i){return '<div class="ljCat'+(i===0?' on':'')+'" onclick="LJ.stCat('+i+')">'+esc(x.name)+'</div>';}).join('');
  var items=(g.items||[]).map(function(v){return styleItemHTML(v,cur);}).join('');
  pop.classList.remove('stone','pickone');pop.classList.add('wide');
  pop.innerHTML='<div class="ljSplit"><div class="ljCats">'+cats+'</div><div class="ljOpts" id="ljPopL">'+items+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="event.stopPropagation();LJ.stBack()" title="收回单列">收起</div>'
    +'<div class="ljPc"><input id="b4cst" placeholder="自定义…（回车确定）" class="ljCst" onkeydown="LJ.stCust(event)"></div></div>';
  fitWide();placePop(POP.el);
}
/* 收起＝两栏退回一级单列（推荐项） */
function stBack(){drawStyleOne(POP.el);}
function styleGroups(){var w=W2[POP.wk],cur=wval(POP.wk);
  return [{name:'推荐',items:styleRec(cur,w.rec)}].concat(poolOf().map(function(c){return {name:c[0],items:c[1]};}));}
function styleItemHTML(v,cur){var q=String(v).replace(/'/g,"\\'");
  return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.stPick(\''+q+'\')"><span>'+esc(v)+'</span></div>';}
/* 换类＝就地换右栏（不重建弹层：重建会让被点的 .ljCat 脱离文档，冒泡到 ROOT 时被判「点空白」而关闭） */
function stCat(i){
  POP.gi=i;
  var G=styleGroups(),g=G[i]||G[0],cur=wval(POP.wk),L=document.getElementById('ljPopL');
  if(L){L.innerHTML=(g.items||[]).map(function(v){return styleItemHTML(v,cur);}).join('');L.scrollTop=0;}
  var cs=pop.querySelectorAll('.ljCat');
  for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===i?' on':'');
  placePop(POP.el);
}
function stPick(v){v=String(v||'').trim();if(!v)return;
pushUndo();S.sty[POP.wk]=v;cascade(POP.wk);closePop();syncRoleLine(POP.wk);renderAll();}
function stCust(e){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();stPick(e.target.value);}}
function sw(wk,el){var w=W2[wk];if(!w)return;
POP.type='w';POP.wk=wk;
if(w.sty||w.two){POP.el=el;POP.gi=0;drawStyleOne(el);return;}
if(w.lang){POP.el=el;drawLangOne(el);return;}
if(!w.c)return;var list=w.c;var cur=wval(wk);
var html=list.map(function(c,i){return '<div class="ljPc'+(cv(c)===cur?' on':'')+'" onclick="LJ.psel('+i+')"><span>'+esc(cv(c))+'</span></div>';}).join('');
html+='<div class="ljPc"><input id="b4csw" placeholder="自定义…（回车选中）" style="background:transparent;border:none;outline:none;color:#C9D4DE;font-size:12.5px;width:100%;font-family:inherit" onkeydown="LJ.cswk(event)"></div>';
openPopAt(el,html);}
function cswk(e){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();var v=e.target.value.trim();if(v&&POP.type==='w'){var w=W2[POP.wk];if(!w)return;
w.c.push(v);pushUndo();S.pick[POP.wk]=w.c.length-1;closePop();renderAll();}}}

/* ===== 语言：推荐 6–8 项（单列）＋「更多语言…」（双栏 · 全池）＋ 自定义 =====
   预选＝数据 ln.lv（由角色库「主 X × 副 Y」推理，X 排首）；换选不改台词文本，p5 负责翻译 */
function langItemHTML(v,cur){var q=String(v).replace(/'/g,"\\'");
  return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.langPick(\''+q+'\')"><span>'+esc(v)+'</span></div>';}
function langRecs(){var w=W2[POP.wk]||{},out=[],cur=wval(POP.wk);
  (w.c||[]).forEach(function(v){var x=cv(v);if(x&&out.indexOf(x)<0)out.push(x);});
  if(cur&&out.indexOf(cur)<0)out.unshift(cur);
  return out;}
function drawLangOne(el){POP.type='w';
  var cur=wval(POP.wk),L=langRecs();
  var opts=L.map(function(v){return langItemHTML(v,cur);}).join('');
  openPopAt(el||POP.el,'<div class="ljOpts" id="ljPopL">'+opts+'</div>'
    +'<div class="ljFixOne"><div class="ljMore" onclick="event.stopPropagation();LJ.langMore()">更多语言...</div>'
    +'<div class="ljPc"><input id="b4csw" placeholder="自定义…（回车选中）" class="ljCst" onkeydown="LJ.cswk(event)"></div></div>',false);
  stonePop(el||POP.el);}
function langMore(){POP.gi=0;
  var G=LANG_POOL,cur=wval(POP.wk);
  var cats=G.map(function(x,i){return '<div class="ljCat'+(i===0?' on':'')+'" onclick="LJ.langCat('+i+')">'+esc(x[0])+'</div>';}).join('');
  var items=G[0][1].map(function(v){return langItemHTML(v,cur);}).join('');
  pop.classList.remove('stone','pickone');pop.classList.add('wide');
  pop.innerHTML='<div class="ljSplit"><div class="ljCats">'+cats+'</div><div class="ljOpts" id="ljPopL">'+items+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="event.stopPropagation();LJ.langBack()" title="收回单列">收起</div>'
    +'<div class="ljPc"><input id="b4csw" placeholder="自定义…（回车选中）" class="ljCst" onkeydown="LJ.cswk(event)"></div></div>';
  fitWide();placePop(POP.el);}
function langCat(i){POP.gi=i;
  var G=LANG_POOL,g=G[i]||G[0],cur=wval(POP.wk),L=document.getElementById('ljPopL');
  if(L)L.innerHTML=g[1].map(function(v){return langItemHTML(v,cur);}).join('');
  var cs=pop.querySelectorAll('.ljCat');
  for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===i?' on':'');}
function langBack(){drawLangOne(POP.el);}
function langPick(v){v=String(v||'').trim();if(!v)return;var w=W2[POP.wk];if(!w)return;
  pushUndo();var i=-1;for(var j=0;j<w.c.length;j++){if(cv(w.c[j])===v){i=j;break;}}
  if(i<0){w.c.push(v);i=w.c.length-1;}
  S.pick[POP.wk]=i;closePop();renderAll();}
var WRSUM={
'简约质感系':{list:[{sc:'',sum:'素白拾光套装 ｜ 米白宽松棉麻衬衫 ｜ 直筒深色休闲长裤 ｜ 白帆布便鞋'}]},
'复古 & 地域氛围感':{list:[
{sc:'1 5 6',sum:'靛蓝工坊套装 ｜ 靛蓝交领衫 ｜ 月白阔腿裤 ｜ 同布腰带 ｜ 深棕工装靴'},
{sc:'2 3 4',sum:'月白居家套装 ｜ 月白棉质罩衫 ｜ 同色系居家长裤 ｜ 布面软底鞋'}]},
'街头 & 个性潮流风':{list:[{sc:'',sum:'灰蓝街头套装 ｜ Oversize 灰蓝衬衫 ｜ 直筒深色休闲长裤 ｜ 旧布腰带 ｜ 帆布便鞋'}]},
'学院 & 轻熟':{list:[
{sc:'1 2 3',sum:'学院清冷套装 ｜ 藏青西装外套 ｜ 白衬衫 ｜ 藏青百褶裙 ｜ 深棕乐福鞋'},
{sc:'4 5 6',sum:'学院轻熟居家套装 ｜ 米白针织开衫 ｜ 同色系长裤 ｜ 布面软底鞋'}]},
'户外 & 度假系':{list:[{sc:'',sum:'微光轻旅套装 ｜ 短款黑色素T ｜ 月白阔腿裤 ｜ 腰间挎包 ｜ 细带凉鞋'}]},
'小众风格':{list:[
{sc:'1 2 4',sum:'诡谲灵狐暗纹仙履套装 ｜ 墨黑暗纹交领长款外披 ｜ 暗朱砂红紧身抹胸 ｜ 暗焰红高腰直筒阔腿裤 ｜ 黑色短靴'},
{sc:'3 5 6',sum:'玄金隐曜唐制套装 ｜ 玄黑暗纹褙子 ｜ 暗金腰封 ｜ 墨色直筒长裤 ｜ 玄色短靴'}]}};
/* 服装套来源：该推荐项自己的 recw → 通用 WRSUM → 无（数据缺失，面板留 AI 占位） */
function packOf(wk,sty){var w=W2[wk]||{},m=w.recw;
  if(m&&m[sty]){var v=m[sty];return Array.isArray(v)?{list:v}:v;}
  return WRSUM[sty]||null;}
function cascade(wk){var p=wk.split('_');if(p[0]!=='rf')return;
var k=p[1],ri=+p[2],fi=+p[3];var it=null;
for(var x in ITEMS){if(ITEMS[x].k===k){it=ITEMS[x];break;}}
if(!it)return;var ro=(it.tabs&&it.tabs.list&&it.tabs.list[ri])||null;if(!ro)return;
var fs=ro.fields||[];var si=-1;fs.forEach(function(f,idx){if(f.label==='风格')si=idx;});
if(si<0||fi!==si)return;
var wkS='rf_'+k+'_'+ri+'_'+si;var sty=wval(wkS);var pack=packOf(wkS,sty);
var W=ro.wear||(ro.wear={hi:false,out:true,sets:1,sum:''});
if(!pack){/* 新风格池 71 项 · 无预置简述的按风格名留待 AI 重出，❌ 不留上一套的旧简述 */
  var ph='（AI 按「'+sty+'」与剧情优选）';W.list=[{sc:'',sum:ph}];W.sets=1;W.sum=ph;return;}
W.list=pack.list;W.sets=pack.list.length;W.sum=pack.list[0].sum;}
/* 右键＝等价青骰（角色块）：性别／年龄 随机换一个（排除当前）；风格走 styDice（rec 随机） */
function swReroll(wk){
  var w=W2[wk];if(!w)return false;
  if(w.sty||w.two)return styDice(wk);
  if(!w.c||!w.c.length)return false;
  var cur=wval(wk),cand=[];
  w.c.forEach(function(c){var v=cv(c);if(v&&v!==cur&&cand.indexOf(v)<0)cand.push(v);});
  if(!cand.length)w.c.forEach(function(c){var v=cv(c);if(v&&cand.indexOf(v)<0)cand.push(v);});
  if(!cand.length)return false;
  var nv=cand[Math.floor(Math.random()*cand.length)],n=-1;
  w.c.forEach(function(c,j){if(cv(c)===nv)n=j;});
  if(n<0)return false;
  pushUndo();S.pick[wk]=n;S.mw[wk]=true;cascade(wk);syncRoleLine(wk);renderAll();return false;}
function psel(i){if(POP.type!=='w')return;var wk=POP.wk;pushUndo();
S.pick[wk]=i;S.mw[wk]=true;cascade(wk);closePop();syncRoleLine(wk);renderAll();}
function syncRoleLine(wk){
for(var tk in W2){var w=W2[tk];
if(w.roleKey&&w.roleKey===wk){var role=wval(wk);var arr=(w.byRole&&w.byRole[role])||[];
if(arr.length){w.c=arr.slice();S.pick[tk]=0;}}}}
function rtab(k,i){S.rA[k]=i;renderItem(k);}
function rhi(k,ri){var it=ITEMS[k];if(!it||!it.tabs)return;var ro=it.tabs.list[ri];if(!ro)return;
var W=ro.wear||(ro.wear={hi:false,out:true,sets:1,sum:''});pushUndo();W.hi=!W.hi;
if(W.hi)W.out=true;                       /* 高阶优先：开＝出图强制开（灰不可操作） */
renderItem(k);
/* 只记状态：不渲 E2、不单独回传 —— B4「确认」回传后按「服装高阶」值判定 */
toast(W.hi?'已开启服装高阶 ·「确认」后进 E2（出图强制开）':'已关闭服装高阶');}
/* 出图（默认开）：开＝按服装描述重出服装图（B5 不写服装）／关＝沿用设定图自带服装（衣服行收起 · B5 不写服装）
   灰不可操作＝服装高阶开启（高阶优先）／角色库无设定图（无图可重出） */
function rout(k,ri){var it=ITEMS[k];if(!it||!it.tabs)return;var ro=it.tabs.list[ri];if(!ro)return;
var H=ro.hero||(ro.hero={img:false});
if(H.img===undefined)H.img=false;
var W=ro.wear||(ro.wear={hi:false,out:true,sets:1,sum:''});
if(W.hi){toast('出图已锁定：服装高阶开启（高阶优先，默认出图）');return;}
if(!H.lib){toast('出图已锁定：角色库无设定图（描述直接进角色生成提示词）');return;}
pushUndo();W.out=(W.out===false);renderItem(k);
toast(W.out?'出图 开 · 按服装描述重出服装图':'出图 关 · 沿用设定图自带服装');}
function rimg(k,ri){var it=ITEMS[k];if(!it||!it.tabs)return;var ro=it.tabs.list[ri];if(!ro)return;
var H=ro.hero||(ro.hero={img:false});pushUndo();H.img=!H.img;renderItem(k);
/* 只记状态：不渲 E1、不单独回传 —— B4「确认」回传后按「形象高阶」值判定 */
toast(H.img?'已开启形象高阶 · 本面板「确认」后进 E1 角色卡':'已关闭形象高阶');}
function heroLine(k,ri,lab){var it=ITEMS[k],ro=it.tabs.list[ri],v='';
ro.fields.forEach(function(f,fi){if(f.label===lab)v=f.tx?edVal('rt_'+k+'_'+ri+'_'+f.tx,f.v):wval('rf_'+k+'_'+ri+'_'+fi);});return v;}
/* 场景高阶（每套一个 · 小标右边）：只记状态（不渲 E3、不单独回传 —— B4「确认」回传后按「场景高阶」值判定） */
function ghi(gi,si){var it=ITEMS['story'];var g=it&&it.groups[gi];var sc=g&&(g.scenes||[])[si];if(!sc)return;pushUndo();
sc.hi=!sc.hi;renderItem('story');updMain();}
/* B4 BGM 表交互：每项独立换选（单列 →「更多...」→ 双列）＋ ＋／－ 增删项 */
function bmRowOf(sec,i){var it=ITEMS['bgm'];var b=it&&it.bgm;if(!b)return null;return (b[sec]||[])[i]||null;}
function poolA(ax,sec){if(ax==='rhythm'&&sec==='trans')return BGM_POOL.rhythmT;return BGM_POOL[ax]||[];}
function poolFlat(ax,sec){var o=[];poolA(ax,sec).forEach(function(g){o=o.concat(g.c);});return o;}
function poolHas(ax,sec,v){return poolFlat(ax,sec).indexOf(v)>=0;}
/* 某轴某段该有几项＝方案用量表 BGM_N（无方案／单值轴／过渡行 → 回退 BGM_MAX 上限） */
/* 推荐项＝数据 `recs`（当期 B3 采样推理的 6-8 项）在前 ＋ 该音乐风格推荐值补位；单列与双列「推荐」组同一批
   只在池内取值（❌ 池外词、❌ `无`）· 8 项封顶 · 推荐只是预填候选，不改变 `＋／－` 交互 */
function bgmRecList(ax,sec){
  var it=ITEMS['bgm'],b=it&&it.bgm,k=recAxOf(ax,sec),out=[];
  if(bsRec().indexOf(wval('bgmstyle'))<0)return [];   /* 非本期推荐项：不给任何子值候选 */
  function add(v){if(v&&v!=='无'&&poolHas(ax,sec,v)&&out.indexOf(v)<0&&out.length<8)out.push(v);}
  (((b&&b.recs)||{})[k]||[]).forEach(add);
  (bgmRecOf(k)||[]).forEach(add);
  return out;}
/* 双列左栏分组：首行恒为 `推荐`（该轴推理推荐项），其后才是池的轴分组 */
function bmGroups(ax,sec){
  var rec=bgmRecList(ax,sec),A=poolA(ax,sec);
  return rec.length?[{k:'推荐',c:rec}].concat(A):A;}
function bgmSlots(ax,si,sec){
  var mx=bmMaxOf(ax,sec)||1,cat=bgmCatOf(wval('bgmstyle'));
  if(!cat||sec==='trans'||mx<=1)return mx;
  var t=(BGM_N[cat]||{})[ax]||BGM_N_DEF[ax]||'';
  var n=parseInt(t.charAt(si),10)||1;
  return Math.max(1,Math.min(n,mx));}
/* 「＋／－」只看上限 `BGM_MAX`（与推荐／预选无关）：未达上限恒有 `＋`，加了项才出 `－`
   推荐项只是预先填好值（预选态），不接管交互 —— ❌ 不许因为「方案已铺满」就把 `＋` 藏掉 */
function canAdd(sec,i,ax){
  var row=bmRowOf(sec,i);if(!row)return false;
  var arr=Array.isArray(row[ax])?row[ax].filter(function(x){return !!x;}):((row[ax]&&row[ax]!=='无')?[row[ax]]:[]);
  if(arr.indexOf('无')>=0||arr.indexOf('同上')>=0)return false;
  return arr.length<bmMaxOf(ax,sec);}
/* 单风格差异（只覆盖列出的轴 · 未列的轴继承大类）：一级单列里 8 个推荐项各有自己的换选项 */
var BGM_STYLE_OVER = {
  '生活流':  { iMain:['钢琴','口琴'],      rhythm:['轻浮动','平缓上扬'],        bpm:['60-76','76-108'] },
  '治愈系':  { iMain:['钢琴','小提琴'],    rhythm:['平缓上扬','轻浮动'],        bpm:['60-76'] },
  '城市日常':{ iMain:['口琴','手风琴'],    rhythm:['强拍推进','循环建立'],      bpm:['76-108'] },
  '都市感':  { iMain:['高频 synth','钢琴'],rhythm:['循环建立','强拍推进'],      bpm:['108-120'] },
  '国风':    { iMain:['古筝','二胡'],      rhythm:['缓慢下行','留白'],          bpm:['50-60','60-76'] },
  '复古胶片':{ iMain:['口琴','手风琴'],    rhythm:['延长尾音','轻浮动'],        bpm:['60-76'] },
  '轻电子':  { iMain:['高频 synth','subbass 低频嗡鸣'], rhythm:['变速','循环建立'], bpm:['120-156'] },
  '史诗管弦':{ iMain:['管弦铜管','大提琴'],rhythm:['渐强','延长尾音'],          bpm:['76-108','120-156'] }
};
/* 当前风格→该轴推荐值：单风格差异优先，否则取所属大类（含 vRange／rhythmT，覆盖过渡行） */
function bgmCatOf(v){for(var i=0;i<BGM_STYLE.length;i++){if(BGM_STYLE[i].c.indexOf(v)>=0||BGM_STYLE[i].k===v)return BGM_STYLE[i].k;}return '';}
/* 该轴可选子值：只有本期推荐项给（取数据 recs＝当期推理）；非推荐项一律空
   —— ❌ 不用面板里的 BGM_STYREC／BGM_STYLE_OVER 旧表冒充当期推荐 */
function bgmRecOf(ax){
  var st=wval('bgmstyle');
  if(bsRec().indexOf(st)<0)return [];
  var p=ITEMS['bgm']&&ITEMS['bgm'].bgm,r=(p&&p.recs&&p.recs[ax])||[];
  return r.slice();}
/* 过渡行的节奏＝`rhythmT`（节奏过渡轴），其余轴同名 */
function recAxOf(ax,sec){return (sec==='trans'&&ax==='rhythm')?'rhythmT':ax;}
function axisOf(ax,sec,v){var A=poolA(ax,sec);for(var i=0;i<A.length;i++){if(A[i].c.indexOf(v)>=0)return A[i].k;}return '';}
function arrAx(row,ax){return Array.isArray(row[ax]);}
function curOf(row,ax,idx){return arrAx(row,ax)?(((row[ax]||[])[idx])||''):(row[ax]||'');}
function bmPick(sec,i,ax,idx,el,e){if(e&&e.stopPropagation)e.stopPropagation();
  if((sec==='segs'||sec==='trans')&&S.bgmLk[i])return;   /* 该段（含过渡行）已同上 */
  var row=bmRowOf(sec,i);if(!row)return;
  POP.type='bmp';POP.bm={sec:sec,i:i,ax:ax,idx:idx,el:el};bmOne(el);}
function bmOne(el){
  var B=POP.bm,row=B&&bmRowOf(B.sec,B.i);if(!row)return;
  var cur=curOf(row,B.ax,B.idx),list=[];
  if(cur&&cur!=='同上')list.push(cur);
  /* 单列只列「推荐项」：当前音乐风格（或所属大类）给该轴的推荐值 —— 池里其余项只在「更多」两栏 */
  var _src=BGM_ALLPOP[B.ax]?poolFlat(B.ax,B.sec):bgmRecList(B.ax,B.sec);   /* 小池轴（声线／音区）单列全列 */
  _src.forEach(function(v){if(list.indexOf(v)<0&&list.length<8)list.push(v);});
  /* 同上：承及之后各段、第 2 个过渡起（`i>=1`）才有「上一段」可接 */
  var same=(B&&B.i>=1)?('<div class="ljFixTop"><div class="ljPc'+(cur==='同上'?' on':'')+'" onclick="event.stopPropagation();LJ.bmSame()" title="同上：延续上一段这一轴的值"><span>同上</span><span class="ljPcn">延续上一段</span></div></div>'):'';
  var html=same+'<div class="ljOpts" id="ljPopL">'+(list.length?list.map(function(v){
    return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.bmTake(\''+escq(v)+'\')"><span>'+esc(v)+'</span></div>';
  }).join(''):'<div class="ljPc dim"><span>（该音乐风格无推荐 · 点「更多...」选全池）</span></div>')+'</div>'
  +'<div class="ljFixOne">'+(BGM_ALLPOP[B.ax]?'':'<div class="ljMore" onclick="event.stopPropagation();LJ.bmMore()">更多...</div>')
  +'<div><input id="bmCst" placeholder="自定义…（回车选中）" class="ljCst" onkeydown="LJ.bmCst(event)"></div></div>';
  openPopAt(el||B.el,html);
  stonePop(el||B.el);}   /* 单列＝E3 同款（定高 208 ＋ 固定底栏） */
function bmMore(){
  var B=POP.bm,row=B&&bmRowOf(B.sec,B.i);if(!row)return;
  var cur=curOf(row,B.ax,B.idx),A=bmGroups(B.ax,B.sec);
  var cats=A.map(function(g,k){return '<div class="ljCat'+(k===0?' on':'')+'" onclick="LJ.bmCat('+k+')">'+esc(g.k)+'</div>';}).join('');
  var items=A[0].c.map(function(v){return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.bmTake(\''+escq(v)+'\')"><span>'+esc(v)+'</span></div>';}).join('');
  pop.classList.remove('stone','pickone');pop.classList.add('wide');
  pop.innerHTML='<div class="ljSplit"><div class="ljCats">'+cats+'</div><div class="ljOpts" id="ljPopL">'+items+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="event.stopPropagation();LJ.bmOne()" title="收回单列">收起</div>'
    +'<div class="ljPc"><input id="bmCst" placeholder="自定义…（回车确定）" class="ljCst" onkeydown="LJ.bmCst(event)"></div></div>';
  fitWide();placePop(B.el);}
function bmCat(k){
  POP.gi=k;
  var B=POP.bm,row=B&&bmRowOf(B.sec,B.i);if(!row)return;
  var cur=curOf(row,B.ax,B.idx),A=bmGroups(B.ax,B.sec),g=A[k]||A[0],L=document.getElementById('ljPopL');
  if(L){L.innerHTML=g.c.map(function(v){return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.bmTake(\''+escq(v)+'\')"><span>'+esc(v)+'</span></div>';}).join('');L.scrollTop=0;}
  var cs=pop.querySelectorAll('.ljCat');
  for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===k?' on':'');
  scrCat(cs[k]);
  placePop(B.el);}
/* 音乐风格换选（BGM 专属）：单列＝AI 推荐 8 →「更多...」→ 双栏（左 8 大类 · 右该类风格）＋收起＋自定义
   选中后：各轴单列推荐换选项＝该风格所属大类的 BGM_STYREC（值不改，只换候选 · Ctrl+Z 可撤） */
function bsPick(el){POP.type='bs';POP.el=el;POP.gi=0;drawBsOne(el);}
/* 本期推荐＝数据 styleDef.rec（当期 B3 推理）；缺 rec 才回退引擎固定表 */
function bsRec(){
  var it=ITEMS['bgm']||{},st=(it.bgm&&it.bgm.styleDef)||{};
  var r=(st.rec||[]).filter(function(v){return BGM_STYLE_FLAT.indexOf(v)>=0;});
  return r.length?r:BGM_STYLE_REC;}
function bsList(){
  var cur=wval('bgmstyle'),out=[],R=bsRec();
  if(cur&&BGM_STYLE_FLAT.indexOf(cur)>=0)out.push(cur);
  R.forEach(function(v){if(out.indexOf(v)<0&&out.length<8)out.push(v);});
  return out;}   /* 本期推荐给几项就列几项：❌ 拿池里别的风格凑数当推荐 */
function bsWhy(v){var sd=(ITEMS['bgm']&&ITEMS['bgm'].bgm&&ITEMS['bgm'].bgm.styleDef)||{};
  var t=(sd.tab||{})[v];return (t&&t.why)||'';}
function bsItem(v,cur){var q=String(v).replace(/'/g,"\\'"),wy=bsWhy(v);
  return '<div class="ljPc'+(v===cur?' on':'')+'" onclick="LJ.bsTake(\''+q+'\')"><span>'+esc(v)+'</span>'
    +(wy?'<span class="ljPcw">'+esc(wy)+'</span>':'')+'</div>';}
function drawBsOne(el){
  var cur=wval('bgmstyle'),list=bsList();
  openPopAt(el||POP.el,'<div class="ljOpts" id="ljPopL">'+list.map(function(v){return bsItem(v,cur);}).join('')+'</div>'
    +'<div class="ljFixOne"><div class="ljMore" onclick="event.stopPropagation();LJ.bsMore()">更多...</div>'
    +'<div><input id="bsCst" placeholder="自定义…（回车选中）" class="ljCst" onkeydown="LJ.bsCst(event)"></div></div>',false);
  stonePop(el||POP.el);pop.classList.add('bsw');}
/* 音乐风格双列：左栏首行同 `推荐`（8 个推荐风格），其后 8 大类 */
function bsGroups(){return [{k:'推荐',c:bsRec().slice(0,8)}].concat(BGM_STYLE);}
function bsMore(){
  POP.gi=0;var cur=wval('bgmstyle'),G=bsGroups(),g=G[0];
  var cats=G.map(function(x,i){return '<div class="ljCat'+(i===0?' on':'')+'" onclick="LJ.bsCat('+i+')">'+esc(x.k)+'</div>';}).join('');
  var items=g.c.map(function(v){return bsItem(v,cur);}).join('');
  pop.classList.remove('stone','pickone');pop.classList.add('wide');
  pop.innerHTML='<div class="ljSplit"><div class="ljCats">'+cats+'</div><div class="ljOpts" id="ljPopL">'+items+'</div></div>'
    +'<div class="ljFix"><div class="ljPc" onclick="event.stopPropagation();LJ.bsBack()" title="收回单列">收起</div>'
    +'<div class="ljPc"><input id="bsCst" placeholder="自定义…（回车确定）" class="ljCst" onkeydown="LJ.bsCst(event)"></div></div>';
  fitWide();placePop(POP.el);}
function bsCat(i){
  POP.gi=i;var G=bsGroups(),g=G[i]||G[0],cur=wval('bgmstyle'),L=document.getElementById('ljPopL');
  if(L){L.innerHTML=g.c.map(function(v){return bsItem(v,cur);}).join('');L.scrollTop=0;}
  var cs=pop.querySelectorAll('.ljCat');
  for(var j=0;j<cs.length;j++)cs[j].className='ljCat'+(j===i?' on':'');
  scrCat(cs[i]);
  placePop(POP.el);}
function bsBack(){drawBsOne(POP.el);}
/* 值前青骰（音乐风格）：从 8 个推荐风格里随机换一个 —— 复用 bsTake，整套预设一起换 */
function bsDice(e){
  if(e&&e.stopPropagation)e.stopPropagation();
  var cur=wval('bgmstyle'),list=BGM_STYLE_REC.filter(function(v){return v!==cur;});
  if(!list.length)return;
  bsTake(list[Math.floor(Math.random()*list.length)]);}
/* 值前青骰（服装风格）：从该角色的 AI 推荐项里随机换一个（无 rec 退回全池）；cascade 重挂服装套 */
function styDice(wk,e){
  if(e&&e.stopPropagation)e.stopPropagation();
  var w=W2[wk];if(!w)return;
  var cur=wval(wk),all=styleFlat(),rec=(w.rec||[]).filter(function(v){return all.indexOf(v)>=0;});
  var list=(rec.length?rec:all).filter(function(v){return v!==cur;});
  if(!list.length)return;
  pushUndo();S.sty[wk]=list[Math.floor(Math.random()*list.length)];
  cascade(wk);syncRoleLine(wk);renderAll();}
/* 右键＝等价灰骰（音乐风格）：按 8 个推荐风格顺序换下一个（整套预设一起换 · Ctrl+Z 可撤） */
function bsNext(){
  var cur=wval('bgmstyle'),L=BGM_STYLE_REC,k=L.indexOf(cur),n=L[(k+1)%L.length];
  if(!n||n===cur)return false;
  bsTake(n);return false;}
function bsTake(v){v=String(v||'').trim();if(!v)return;
  var w=W2['bgmstyle'];if(!w)return;
  var i=(w.c||[]).indexOf(v);pushUndo();
  if(i<0){w.c=w.c||[];w.c.push(v);i=w.c.length-1;}
  S.pick['bgmstyle']=i;S.mw['bgmstyle']=true;
  applyStyleDemo();            /* 直接演示：六段＋五过渡的每个槽都换成该风格推荐值 */
  BOPEN['segs0']=true;         /* 顺手展开「起」，配器／声线一眼看到 */
  closePop();renderAll();updMain();}
/* 音乐风格＝直接演示：选中即按该风格（单风格差异 → 大类）把六段＋五过渡的每个换选槽改成推荐值
   同轴按段序轮换取词（六段不会一模一样）；人声未勾的段不动声线；一次 pushUndo ＝ Ctrl+Z 全还原 */
/* 非本期推荐项：六段＋过渡全部子值清空（❌ 不留上面板旧表的值） */
function clearBgmAll(b){
  (b.segs||[]).forEach(function(sg){sg.listen=[];sg.rhythm=[];sg.iMain=[];sg.iRange='';sg.iSub=[];sg.iNoise=[];sg.bpm='';
    sg.vOn=false;sg.vLine=[];sg.vTimbre='';sg.vRange='';sg.vLang='';sg.vStyle=[];});
  (b.trans||[]).forEach(function(t){t.listen='';t.rhythm='';t.bpm='';});}
/* 选中风格＝换成本期为该风格准备好的六段表（数据 styleDef.tab[风格]）
   推荐项之外：子值全清空；推荐项缺表：不动（数据缺失，由 build 提示） */
function applyStyleDemo(){
  var it=ITEMS['bgm'],b=it&&it.bgm;if(!b)return;
  var st=wval('bgmstyle'),R=bsRec();
  var tab=(b.styleDef&&b.styleDef.tab||{})[st];
  if(!tab){
    if(R.indexOf(st)<0)clearBgmAll(b);
    return;}
  (b.segs||[]).forEach(function(sg,i){
    var s=(tab.segs||[])[i];if(!s)return;
    sg.listen=(s.listen||[]).slice();sg.rhythm=(s.rhythm||[]).slice();sg.bpm=s.bpm||'';
    sg.iMain=(s.iMain||[]).slice();sg.iRange=s.iRange||'';
    sg.iSub=(s.iSub||[]).slice();sg.iNoise=(s.iNoise||[]).slice();
    sg.vOn=false;sg.vLine=[];sg.vTimbre='';sg.vRange='';sg.vLang='';sg.vStyle=[];});
  (b.trans||[]).forEach(function(t,i){
    var s=(tab.trans||[])[i];if(!s)return;
    t.listen=s.listen||'';t.rhythm=s.rhythm||'';t.bpm=s.bpm||'';});}
/* 预选态：AI 已选值原样保留（❌ 不覆盖、❌ 不裁剪），只把「项数少于方案表」的多值轴按方案推荐补齐
   —— 面板一打开就是方案该有的层数（表给 2 项就补到 2 项），不用用户手动点 `＋` */
function presetFill(){
  var it=ITEMS['bgm'],b=it&&it.bgm;if(!b)return;
  if(!bgmCatOf(wval('bgmstyle')))return;
  function fillArr(sg,si,ax){
    if(!Array.isArray(sg[ax]))return;
    var cur=sg[ax].filter(function(x){return !!x;});
    if(cur.indexOf('无')>=0){sg[ax]=cur;return;}
    var n=bgmSlots(ax,si,'segs'),rec=bgmRecList(ax,'segs');
    for(var j=0;j<rec.length&&cur.length<n;j++){if(cur.indexOf(rec[j])<0&&poolHas(ax,'segs',rec[j]))cur.push(rec[j]);}
    sg[ax]=cur;}
  function fillOne(sg,si,ax){
    if(Array.isArray(sg[ax])||sg[ax])return;
    var rec=bgmRecList(ax,'segs'),v='';
    for(var j=0;j<rec.length&&!v;j++){if(poolHas(ax,'segs',rec[j]))v=rec[j];}
    if(v)sg[ax]=v;}
  (b.segs||[]).forEach(function(sg,si){
    /* 旧数据用空数组表示「本段无人声」：vLine 与 vStyle 都空 → 判该段人声关（否则声线行空着露 `＋`） */
    if(sg.vOn===undefined&&!(sg.vLine||[]).length&&!(sg.vStyle||[]).length)sg.vOn=false;
    fillArr(sg,si,'listen');
    fillArr(sg,si,'iMain');
    fillOne(sg,si,'iRange');
    fillArr(sg,si,'iSub');
    fillArr(sg,si,'iNoise');
    fillArr(sg,si,'rhythm');
    fillOne(sg,si,'bpm');
    if(segOn(sg,b)){
      fillArr(sg,si,'vLine');
      fillOne(sg,si,'vTimbre');
      fillOne(sg,si,'vRange');
      fillOne(sg,si,'vLang');
      fillArr(sg,si,'vStyle');}});}
function bsCst(e){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();bsTake(e.target.value);}}
function bmCycle(sec,i,ax,idx){if((sec==='segs'||sec==='trans')&&S.bgmLk[i])return;   /* 该段（含过渡行）已同上 */
  var row=bmRowOf(sec,i);if(!row)return;
  var all=poolFlat(ax,sec);if(!all.length)return;
  /* 无弹层轴（声线／声音音区）的循环顺序也跟音乐风格走：推荐值优先，其余接在后面 */
  var rec=bgmRecOf(recAxOf(ax,sec)),ord=[];
  rec.forEach(function(v){if(v!=='无'&&all.indexOf(v)>=0&&ord.indexOf(v)<0)ord.push(v);});
  all.forEach(function(v){if(ord.indexOf(v)<0)ord.push(v);});
  all=ord;
  var isArr=Array.isArray(row[ax]);
  var cur=isArr?((row[ax]||[])[idx]||''):(row[ax]||'');
  var k=all.indexOf(cur),nv=all[(k+1)%all.length];
  pushUndo();
  if(isArr){var a=(row[ax]||[]).slice();a[idx]=nv;row[ax]=a;}else row[ax]=nv;
  renderItem('bgm');updMain();}
/* 右键＝等价青骰：随机换这一项（只在**该轴推荐项**里轮动，❌ 不碰池项 · 排除当前与同槽已用值 · Ctrl+Z 可撤） */
function bmReroll(sec,i,ax,idx){if((sec==='segs'||sec==='trans')&&S.bgmLk[i])return;   /* 该段（含过渡行）已同上 */
  var row=bmRowOf(sec,i);if(!row)return false;
  var all=(bgmRecList(ax,sec)||[]).filter(function(v){return v&&v!=='无';});
  if(!all.length)return false;
  var isArr=Array.isArray(row[ax]);
  var cur=isArr?((row[ax]||[])[idx]||''):(row[ax]||'');
  var used=isArr?(row[ax]||[]).filter(function(v,j){return j!==idx;}):[];
  var cand=all.filter(function(v){return v!==cur&&used.indexOf(v)<0;});
  if(!cand.length)cand=all.filter(function(v){return v!==cur;});
  if(!cand.length)return false;
  var nv=cand[Math.floor(Math.random()*cand.length)];
  pushUndo();
  if(isArr){var a=(row[ax]||[]).slice();a[idx]=nv;row[ax]=a;}else row[ax]=nv;
  renderItem('bgm');updMain();return false;}
function bmTake(v){
  var B=POP.bm,row=B&&bmRowOf(B.sec,B.i);if(!row)return;
  pushUndo();
  if(arrAx(row,B.ax)){var arr=(row[B.ax]||[]).slice();while(arr.length<=B.idx)arr.push('');arr[B.idx]=v;row[B.ax]=arr;}
  else row[B.ax]=v;
  closePop();renderItem('bgm');updMain();}
/* 同上：该轴一键承接上一段的值（独占 · 与 `无` 同款：不出 `＋／－`）*/
function bmSame(){if(POP.bm&&S.bgmLk[POP.bm.i])return;
  var B=POP.bm,row=B&&bmRowOf(B.sec,B.i);if(!B||!row||B.i<1)return;
  pushUndo();
  if(arrAx(row,B.ax))row[B.ax]=['同上'];else row[B.ax]='同上';
  closePop();renderItem('bgm');updMain();}
function bmMaxOf(ax,sec){return (sec==='trans')?(ax==='listen'?2:1):(BGM_MAX[ax]||1);}
function bmAdd(sec,i,ax,e){if(e&&e.stopPropagation)e.stopPropagation();if((sec==='segs'||sec==='trans')&&S.bgmLk[i])return;   /* 该段（含过渡行）已同上 */
  var row=bmRowOf(sec,i);if(!row)return;
  var arr=Array.isArray(row[ax])?(row[ax]||[]).filter(function(x){return !!x;}):((row[ax]&&row[ax]!=='无')?[row[ax]]:[]);
  if(arr.length>=bmMaxOf(ax,sec))return;
  if(arr.indexOf('无')>=0||arr.indexOf('同上')>=0)return;
  var A=poolA(ax,sec),an=arr.length?axisOf(ax,sec,arr[0]):'',v='';
  var pick=function(list){for(var k=0;k<list.length;k++){if(list[k]!=='无'&&arr.indexOf(list[k])<0)return list[k];}return '';};
  /* `＋` 追加项同样跟音乐风格走：先取该风格推荐里还没用到的值 → 同轴未用项 → 全池
     节奏追加时跳过本段听感已用的词（避免同段 `留白` 重复） */
  var sib=(ax==='rhythm'&&Array.isArray(row.listen))?row.listen:[];
  var rec=(bgmRecList(ax,sec)||[]).filter(function(x){return sib.indexOf(x)<0;});
  /* 无推荐（非本期推荐项）：不代选 —— ❌ 不从同组／全池里替用户挑一个
     直接弹候选层（推荐为空，仍可从「更多...」进全池或自定义） */
  if(!rec.length){POP.type='bmp';POP.bm={sec:sec,i:i,ax:ax,idx:arr.length,el:null};bmOne(null);return;}
  if(rec.length)v=pick(rec);
  if(!v&&an)A.forEach(function(g){if(g.k===an&&!v)v=pick(g.c);});
  if(!v)v=pick(poolFlat(ax,sec));
  if(!v)return;pushUndo();arr.push(v);row[ax]=arr;renderItem('bgm');updMain();}
function bmDel(sec,i,ax,idx,e){if(e&&e.stopPropagation)e.stopPropagation();if((sec==='segs'||sec==='trans')&&S.bgmLk[i])return;   /* 该段（含过渡行）已同上 */
  var row=bmRowOf(sec,i);if(!row)return;if(!Array.isArray(row[ax]))return;var arr=(row[ax]||[]).slice();
  if(idx<0||idx>=arr.length)return;pushUndo();arr.splice(idx,1);row[ax]=arr;renderItem('bgm');updMain();}
function bmCst(e){if(e.key!=='Enter'&&e.keyCode!==13)return;e.preventDefault();
  var v=e.target.value.trim();if(!v)return;bmTake(v);}
function bmVoice(){var it=ITEMS['bgm'];var b=it&&it.bgm;if(!b)return;
pushUndo();b.vOn=!b.vOn;renderItem('bgm');updMain();}
/* 每段人声独立开关（只作用于本段声线行） */
function bmVoiceSeg(si,e){if(e&&e.stopPropagation)e.stopPropagation();if(S.bgmLk[si])return;   /* 锁上＝勾选框冻结 */
var it=ITEMS['bgm'];var b=it&&it.bgm;if(!b||!b.segs||!b.segs[si])return;
var sg=b.segs[si];pushUndo();sg.vOn=!segOn(sg,b);renderItem('bgm');updMain();}
function bgmLk(si,e){if(e&&e.stopPropagation)e.stopPropagation();S.bgmLk[si]=!S.bgmLk[si];renderItem('bgm');updMain();}
/* 行首骰子＝只摇换本行（同轴取词、避开 `无`、整行重取不追加）；Ctrl+Z 可撤销 */
function pickN(ax,sec,n){var pool=poolFlat(ax,sec).filter(function(v){return v&&v!=='无';}),o=[];
for(var k=0;k<n&&pool.length;k++)o.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);return o;}
function setAx(row,ax,vals,forceArr){if(forceArr||Array.isArray(row[ax]))row[ax]=vals.slice();else row[ax]=vals[0]||'';}
function bmRand(sec,i,wh,e){if(e&&e.stopPropagation)e.stopPropagation();if(S.bgmLk[i])return;   /* 该段已同上 */
var row=bmRowOf(sec,i);if(!row)return;pushUndo();
var put=function(a,n,fa){setAx(row,a,pickN(a,sec,n),fa);};
if(wh==='listen'){put('listen',sec==='trans'?1:2,true);put('rhythm',1,sec!=='trans');put('bpm',1,false);}
else if(wh==='bpm')put('bpm',1,false);
else if(wh==='inst'){put('iMain',1,true);put('iRange',1,false);put('iSub',1,true);put('iNoise',1,true);}
else if(wh==='voice'){put('vLine',1,true);put('vTimbre',1,false);put('vRange',1,false);put('vLang',1,false);put('vStyle',1,true);}
renderItem('bgm');updMain();}
/* 折叠行：点行区域展开／收起（点值／骰子／＋／－／标 不触发；有文字选区时也不触发）· 纯视图、不影响回传 */
function bmFold(si,e){
if(e&&e.target&&e.target.closest){
  if(e.target.closest('.ljSV')||e.target.closest('.ljAdd')||e.target.closest('.ljRm')||e.target.closest('.ljBgD')||e.target.closest('.ljSL')||e.target.closest('.ljSLs')||e.target.closest('.ljBgCk')||e.target.closest('.ljBgLk'))return;}
var sel=window.getSelection?String(window.getSelection()):'';
if(sel)return;
BOPEN['segs'+si]=!BOPEN['segs'+si];
renderItem('bgm');updMain();}
function sed(fk,v){S.ed[fk]=v;}
function ed(key,v){S.ed[key]=v;}
function snapshot(){return {pick:cp(S.pick),sty:cp(S.sty),rA:cp(S.rA),bA:cp(S.bA),bSw:cp(S.bSw),bPk:cp(S.bPk),bat:cp(S.bat),ed:cp(S.ed),mw:cp(S.mw),bgm:cp((ITEMS['bgm']||{}).bgm),gScn:cp((ITEMS['story']&&ITEMS['story'].groups||[]).map(function(g){return g.scenes||[];}))};}
function pushUndo(){S.undo.push(snapshot());if(S.undo.length>60)S.undo.shift();}
function undo(){var ae=document.activeElement;if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'))return;if(!S.undo.length)return;
var x=S.undo.pop();S.pick=cp(x.pick);S.sty=cp(x.sty||{});S.rA=cp(x.rA);S.bA=cp(x.bA);S.bSw=cp(x.bSw);S.bPk=cp(x.bPk);S.bat=cp(x.bat);S.ed=cp(x.ed);S.mw=cp(x.mw);if(x.gScn&&ITEMS['story'])ITEMS['story'].groups.forEach(function(g,i){g.scenes=cp(x.gScn[i]||[]);});if(x.bgm&&ITEMS['bgm'])ITEMS['bgm'].bgm=cp(x.bgm);S.openB=null;renderAll();updMain();}
function lockSvg(on){return '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="'+(on?'#D9B75B':'#66707A')+'" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';}
function keySvg(){return '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';}
function bat(k){if(S.bat[k]!=null)return;S.openB=(S.openB===k?null:k);renderAll();
if(S.openB!==null){var el=bd.querySelector('.ljItem[data-k="'+S.openB+'"] .ljBi input');if(el)setTimeout(function(){el.focus();},0);}}
function buf(k,v,el){S.buf[k]=v;var b=el.parentNode.querySelector('.ljBkey');if(b){if(v)b.classList.add('has');else b.classList.remove('has');}}
function lockB(k){if(S.bat[k]!=null)return;var v=S.buf[k];if(!v)return;pushUndo();S.bat[k]=v;S.buf[k]='';S.openB=null;renderItem(k);updMain();}
function ek(e,k){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();lockB(k);}}
function unbat(k){pushUndo();S.bat[k]=null;renderItem(k);updMain();}
function hasLocked(){for(var hk in S.bat){if(S.bat[hk])return true;}return false;}

function reset(){pushUndo();
S.sty={};initPicks();initNovel();
if(G0&&ITEMS['story'])ITEMS['story'].groups.forEach(function(g,i){g.scenes=cp((G0[i]||{}).scenes||[]);});
DATA.blocks.forEach(function(bl){bl.items.forEach(function(it){S.bat[it.k]=null;S.lock[it.k]=false;});});
S.bgmLk={};S.openB=null;S.ed={};S.mw={};
renderAll();updMain();}
function updMain(){var mb=ROOT.querySelector('#b4main');if(!mb)return;var on=hasLocked();
var ic=on?'<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>':'<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
mb.innerHTML=ic+'<span id="b4mainT">'+(on?'优化':'确认')+'</span>';
mb.title=on?'回传 AI 优化（旧内容 × 批改内容）':'采纳当前产出 · 成立剧本定稿（随后进 p5）';
if(on){mb.classList.add('gold');}else{mb.classList.remove('gold');}}
/* ── 分条发送（全库唯一实现）：单条 ≤430（含 head 前缀后仍 <450）· 行内超长硬切 · 单轮 ≤18 条；超出转待发队列，再点主按钮发下一批 ── */
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
  toast(_Q.length?('已发 '+n+' 条 · 再点主按钮继续'):('已全部发送（'+_I+'/'+_N+'）'));
  return n;
}
function sendChunks(head,lines){
  if(hasPending()){return sendPending();}
  var cs=chunkText(lines);if(!cs.length)return 0;
  _H=head;_N=cs.length;_I=0;
  var first=cs.slice(0,18);
  _Q=cs.slice(18);
  first.forEach(function(c){_I++;sendPrompt(head+(_N>1?' '+_I+'/'+_N:'')+'\n'+c);});
  return first.length;
}
var SENT=false,OUTLINES=[];
function sendLines(head,lines){return sendChunks(head,lines);}
function hasHi(kind){var r=false;DATA.blocks.forEach(function(bl){(bl.items||[]).forEach(function(it){
if(!it.tabs)return;it.tabs.list.forEach(function(ro){if(kind==='img'&&ro.hero&&ro.hero.img)r=true;if(kind==='hi'&&ro.wear&&ro.wear.hi)r=true;});});});return r;}
/* 场景高阶＝每套一个开关：返回开了高阶的套数（每套渲一张 E3 场景卡） */
function hiGroups(){var n=0,it=ITEMS['story'];if(it&&it.groups)it.groups.forEach(function(g){(g.scenes||[]).forEach(function(sc){if(sc.hi)n++;});});return n;}
function submit(){if(hasPending()){sendPending();return;}if(SENT)return;
if(typeof sendPrompt!=='function'){toast('当前环境不支持发送');return;}
var lines=OUTLINES.slice();
var _ng=hiGroups();
if(hasHi('img')||hasHi('hi')||_ng){
var _seq=[];if(hasHi('img'))_seq.push('E1 角色卡');if(hasHi('hi'))_seq.push('E2 服装卡');if(_ng)_seq.push('E3 场景卡（'+_ng+' 套 · 每套一张）');
lines.unshift('指令=剧本定稿已成立；本面板不渲子卡，按下列高阶开关判定并顺序渲染：'+_seq.join(' → ')+' → 再进 B5（顺序固定 E1→E2→E3 ／ 关的不渲）');}
var cnt=sendLines('【剧本·'+(hasLocked()?'优化':'确认')+'】',lines);
if(!cnt){toast('还没有选择内容，先选一项再提交');return false;}
if(hasPending()){ovl.classList.remove('on');toast('已发 '+cnt+' 条 · 再点「确认」继续');return true;}
SENT=true;ovl.classList.remove('on');
toast('已提交回传'+(cnt>1?'（'+cnt+' 条）':''));}
function skip(){if(SENT)return;
if(typeof sendPrompt!=='function'){toast('当前环境不支持发送');return;}
var lines=collect();
lines.unshift('指令=AI 按当前已选值补完剧本，成立剧本定稿，直接进 p5 执行脚本（保留已手动调整项）；跳过＝高阶不触发，E1／E2／E3 一律不渲（形象四行与服装简述按角色库 ＞ 剧情补全；各场场景串按 B3 时代背景＋该段内外取景＋剧情补全 · 前中后景由 AI 按 E3 空间置景逻辑推理）');
var cnt=sendLines('【剧本·跳过】',lines);
if(!cnt){toast('还没有内容可提交');return;}
SENT=true;toast('已跳过 · 进 p5'+(cnt>1?'（'+cnt+' 条）':''));}
function collect(){var out=[];
var PRI={'故事情节':0,'角色设计':1,'BGM设计':2};
DATA.blocks.slice().sort(function(a,b){return (PRI[a.name]===undefined?9:PRI[a.name])-(PRI[b.name]===undefined?9:PRI[b.name]);}).forEach(function(bl){
out.push('▪ '+bl.name);
bl.items.forEach(function(it){
if(it.groups){storyPlainLines(it).forEach(function(l){out.push(l);});return;}
if(it.tabs){it.tabs.list.forEach(function(ro,ri){out.push('角色·'+ro.label+'='+rolePlainOne(it,ri,ro));});return;}
if(it.bgm){bgmLines(it).forEach(function(l){out.push(l);});return;}
if(S.bat[it.k]!=null){out.push('【批改】'+it.n+' = '+S.bat[it.k]+'（原：'+oneLine(itemPlain(it))+'）');}
else{out.push(it.n+'='+oneLine(itemPlain(it)));}
});});
return out;}
function confirmAll(){if(hasPending()){sendPending();return;}if(SENT)return;var out=collect();
OUTLINES=out;
moB.innerHTML=out.map(function(l){return '<div class="ljOl">'+esc(l)+'</div>';}).join('');
ovl.classList.add('on');}
function closeM(){ovl.classList.remove('on');}
function toast(t){tst.textContent=t;tst.classList.add('on');clearTimeout(tst._h);tst._h=setTimeout(function(){tst.classList.remove('on');},2200);}
function up(){if(SENT)return;if(typeof sendPrompt!=='function'){toast('当前环境不支持发送');return;}
var vals=collect();vals.unshift('指令=回故事设定面板（B3），按下列当前选中值重渲（保持已选 · 不重置）');
SENT=true;sendLines('【剧本·上一级】',vals);}
presetFill();          /* 预选态：先按方案用量表把多值轴补齐（保留 AI 已选值），再渲染 */
renderAll();updMain();
ROOT.addEventListener('click',function(e){
if(pop.classList.contains('on')&&!e.target.closest('.ljPop')&&!e.target.closest('.ljW')&&!e.target.closest('.ljSV'))closePop();
if(S.openB!==null&&!e.target.closest('.ljBi')&&!e.target.closest('.ljBtb')&&!e.target.closest('.ljBk2')){var ok=S.openB;S.openB=null;renderItem(ok);}
});
/* 右键＝灰骰：鼠标停在任一换选值上，右键只换这一项（不弹换选层、不弹浏览器菜单 · Ctrl+Z 可撤） */
ROOT.addEventListener('contextmenu',function(e){
var el=e.target.closest?e.target.closest('[data-rr]'):null;
if(!el)return;
e.preventDefault();e.stopPropagation();
if(pop.classList.contains('on'))closePop();
var t=el.getAttribute('data-rr');
if(t==='bgm'){
  var _sc=el.getAttribute('data-sec'),_ii=parseInt(el.getAttribute('data-i'),10),_ax=el.getAttribute('data-ax'),_ix=parseInt(el.getAttribute('data-idx'),10);
  if(BGM_NOPOP[_ax])bmPick(_sc,_ii,_ax,_ix,el);   /* 声线／音区：右键＝单列换选（左键仍循环换下一个） */
  else bmReroll(_sc,_ii,_ax,_ix);}
else if(t==='role')swReroll(el.getAttribute('data-wk'));
else if(t==='bsty')bsDice();
return false;});
/* 行显只给留空区间：命中有内容（骰子／值／＋－／标／段位／分隔）就不亮，落在行内空白才亮 */
var BGHOT='.ljSV,.ljAdd,.ljRm,.ljBgD,.ljSL,.ljSLs,.ljBgS,.ljBgL,.ljDot,.ljSep,.ljBgCk,.ljBgLk';
function bgHov(e){
var row=e.target.closest?e.target.closest('.ljBgB'):null;
var on=ROOT.querySelectorAll('.ljBgB.hov');
for(var i=0;i<on.length;i++)if(on[i]!==row)on[i].classList.remove('hov');
if(!row)return;
var hot=e.target.closest&&e.target.closest(BGHOT);
row.classList.toggle('hov',!hot);}
ROOT.addEventListener('mouseover',bgHov);
ROOT.addEventListener('mouseleave',function(){var on=ROOT.querySelectorAll('.ljBgB.hov');for(var i=0;i<on.length;i++)on[i].classList.remove('hov');});
bd.addEventListener('scroll',function(){if(pop.classList.contains('on'))closePop();});
ROOT.addEventListener('wheel',function(e){if(e.target.closest('.ljBd')||e.target.closest('.ljMoB')||e.target.closest('.ljPop')||e.target.closest('.ljEd'))return;e.preventDefault();},{passive:false});
if(window.__ljKH)document.removeEventListener('keydown',window.__ljKH);
window.__ljKH=function(e){if((e.ctrlKey||e.metaKey)&&String(e.key).toLowerCase()==='z'){var ae=document.activeElement;if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'||ae.getAttribute('contenteditable')==='true'))return;e.preventDefault();undo();}};
document.addEventListener('keydown',window.__ljKH);
window.LJ={tline:tline,sw:sw,stCat:stCat,stPick:stPick,stCust:stCust,stMore:stMore,stBack:stBack,psel:psel,cswk:cswk,rtab:rtab,rhi:rhi,rout:rout,rimg:rimg,drawLangOne:drawLangOne,langMore:langMore,langCat:langCat,langBack:langBack,langPick:langPick,bmPick:bmPick,bmSame:bmSame,bmMore:bmMore,bmLk:bgmLk,bmCat:bmCat,bmOne:bmOne,bmTake:bmTake,bmCst:bmCst,bmAdd:bmAdd,bmDel:bmDel,bsPick:bsPick,bsMore:bsMore,bsCat:bsCat,bsBack:bsBack,bsTake:bsTake,bsCst:bsCst,bsDice:bsDice,styDice:styDice,bsNext:bsNext,bmReroll:bmReroll,swReroll:swReroll,bmCycle:bmCycle,bmVoice:bmVoice,bmVoiceSeg:bmVoiceSeg,bmRand:bmRand,bmFold:bmFold,sed:sed,ed:ed,bat:bat,buf:buf,lockB:lockB,ek:ek,unbat:unbat,reset:reset,undo:undo,ghi:ghi,confirm:confirmAll,submit:submit,closeM:closeM,up:up,skip:skip};
})();

/* 成形标记：load 后两帧置 ljReady —— 渲染中不挂滚动条 */
(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}
if(document.readyState==='complete')r();else window.addEventListener('load',r);})();
})();
