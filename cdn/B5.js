/* 自动生成，勿手改：源 ui/B5_执行脚本.html
   用法：面板侧 window.LJ_DATA = {...} 后加载本文件 */
(function(){
var CSS = "\nhtml,body{background:#0F1317;margin:0;padding:0;overflow-x:hidden}body{padding:0}\n.ljP{font-family:-apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;background:#0F1317;border:1px solid rgba(255,255,255,.08);border-radius:12px;max-width:680px;margin:0 auto;color:#C9D4DE;position:relative;overflow:hidden;font-size:13px;display:flex;flex-direction:column;height:auto;max-height:945px}\n.ljP *{box-sizing:border-box;margin:0}\n.ljSr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.ljHd{padding:48px 16px 10px;display:flex;align-items:center;flex:none}\n.ljTt{font-size:15px;font-weight:500;color:#E8EEF4}\n.ljHc{margin-left:auto;display:flex;gap:6px}\n.ljHb{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;color:#9FADB9;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:7px;padding:4px 11px;cursor:pointer;transition:.15s;font-family:inherit}\n.ljHb:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljBd{flex:1 1 auto;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:0 16px}\n.ljSc{background:#171C22;border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:12px 14px;margin-bottom:10px}\n.ljClH{display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap}\n.ljIN{font-size:13.5px;font-weight:500;color:#C9D4DE}\n.ljLm{font-size:11.5px;color:#66707A}\n.ljBtb{margin-left:auto;display:inline-flex;align-items:center;font-size:11.5px;color:#66707A;background:transparent;border:none;border-radius:5px;padding:3px 8px;cursor:pointer;font-family:inherit;transition:.15s;user-select:none;-webkit-user-select:none}\n.ljBtb:hover{color:#3EC6D8;background:rgba(62,198,216,.08)}\n.ljBtb.act{color:#3EC6D8;background:rgba(62,198,216,.1)}\n.ljLk2{display:inline-flex;cursor:pointer;padding:2px 4px;border-radius:4px}\n.ljLk2:hover{background:rgba(255,255,255,.06)}\n.ljSegs{margin-top:2px}\n.ljSg{margin-bottom:8px}\n.ljSg:last-child{margin-bottom:0}\n.ljSgl{font-size:11.5px;color:#66707A;display:block;margin-bottom:2px}\n.ljSgx{font-size:12.5px;color:#C9D4DE;line-height:1.7;white-space:pre-wrap}\n.ljFz{opacity:.55}\n.ljFz .ljW,.ljFz .ljEd{pointer-events:none;cursor:default}\n.ljGray .ljSgx{color:#66707A}\n.ljW{color:#A9DFE8;cursor:pointer;border-bottom:1px dashed rgba(62,198,216,.45);transition:.15s;user-select:none;-webkit-user-select:none}\n.ljW:hover{color:#3EC6D8;border-bottom-color:#3EC6D8}\n.ljW0{display:inline-block;min-width:0;width:.5em;text-align:center;vertical-align:bottom}   /* 空槽＝约一个空格宽（不写「无」） */\n.ljEd{display:block;outline:none;cursor:text;border-bottom:1px dashed rgba(255,255,255,.12);transition:.15s;border-radius:2px;white-space:pre-wrap;user-select:text;-webkit-user-select:text}\n.ljEd:hover{border-bottom-color:rgba(62,198,216,.35)}\n.ljEd:focus{border-bottom-color:rgba(62,198,216,.55);color:#E8EEF4;background:rgba(62,198,216,.04)}\n.ljBtx{white-space:pre-wrap;font-size:13px;color:#E8EEF4;font-weight:500;line-height:1.7;margin-bottom:8px}\n.ljBi{display:none;margin-top:8px;align-items:center;background:#12161B;border:1px solid rgba(62,198,216,.25);border-radius:7px;padding:0 6px 0 9px}\n.ljBi.on{display:flex}\n.ljBi input{flex:1;background:transparent;border:none;color:#E8EEF4;font-size:12.5px;padding:8px 6px 8px 0;outline:none;font-family:inherit}\n.ljBkey{display:inline-flex;cursor:pointer;padding:3px;border-radius:4px;color:#66707A;flex:none}\n.ljBkey.has{color:#3EC6D8}\n.ljBkey:hover{background:rgba(255,255,255,.06)}\n.ljPop{position:absolute;z-index:45;display:none;box-shadow:0 10px 26px rgba(0,0,0,.5);background:#1B2129;border:1px solid rgba(62,198,216,.35);border-radius:8px;padding:5px;min-width:140px;max-width:330px;max-height:none;overflow:hidden;overscroll-behavior:contain}\n.ljPop.on{display:block}\n.ljPc{display:flex;flex-direction:column;gap:2px;padding:5px 9px;border-radius:5px;cursor:pointer;font-size:12.5px;color:#C9D4DE;line-height:1.5;white-space:normal;word-break:break-word}\n.ljPc:hover{background:rgba(62,198,216,.1)}\n.ljPc.on{color:#3EC6D8;background:rgba(62,198,216,.12)}\n.ljPcn{font-size:11.5px;color:#8A97A3}\n/* 换选＝单列推荐（E3 同构）：推荐 5-8 → 更多... → 全池 → 收起 */\n.ljColOne{display:flex;flex-direction:column;max-height:none}\n.ljColOne .ljOpts{flex:0 1 auto;min-height:0;max-height:208px;overflow-y:auto;padding:0}\n.ljColOne .ljOpts .ljPc{line-height:16px}\n/* 固定上列：清空（有值才出）· 常驻不随列表滚动 */\n.ljColOne .ljFixTop{flex:0 0 auto;border-bottom:1px solid rgba(255,255,255,.09);padding-bottom:3px;margin-bottom:3px}\n.ljColOne .ljFixTop .ljPc{flex-direction:row;align-items:center;height:30px;padding:0 9px;color:#D9B75B;font-size:12px}\n.ljColOne .ljFixTop .ljPc:hover{background:rgba(217,183,91,.13);color:#E8C878}\n.ljColOne .ljFixTop .ljPc .ljPcn{margin-left:auto;color:#7E8B99;font-size:11px}\n.ljColOne .ljFixOne{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.07);padding-top:3px;margin-top:3px}\n.ljColOne .ljFixOne .ljPc{flex-direction:row;align-items:center;height:30px;padding:0 9px}\n.ljColOne .ljFixOne .ljMore{color:#9FADB9;font-size:12px}\n.ljColOne .ljFixOne .ljMore:hover{color:#3EC6D8}\n.ljColOne .ljFixOne .ljCst{padding:0;height:30px}\n.ljColOne .ljFixOne .ljCst input{background:transparent;border:none;outline:none;color:#C9D4DE;font-size:12.5px;width:100%;font-family:inherit;padding:0 9px;height:30px}\n.ljFt{display:flex;justify-content:flex-end;gap:8px;padding:11px 16px;border-top:1px solid rgba(255,255,255,.06);flex:none}\n.ljBtn{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#C9D4DE;background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:7px;padding:5px 15px;cursor:pointer;transition:.18s;font-family:inherit}\n.ljBtn:hover{color:#3EC6D8;border-color:rgba(62,198,216,.5)}\n.ljPri{color:#3EC6D8;border-color:rgba(62,198,216,.55)}\n.ljPri:hover{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n.ljPri.gold{color:#D9B75B;border-color:rgba(217,183,91,.6)}\n.ljOvl{position:absolute;inset:0;background:rgba(8,10,13,.78);display:none;align-items:center;justify-content:center;z-index:50}\n.ljOvl.on{display:flex}\n.ljMod{background:#171C22;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:86%;max-height:76%;display:flex;flex-direction:column;padding:14px 16px}\n.ljMoH{font-size:13.5px;font-weight:500;color:#E8EEF4;margin-bottom:9px}\n.ljMoB{overflow:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:6px}\n.ljOl{font-size:12.5px;color:#9FADB9;background:rgba(255,255,255,.03);border-radius:6px;padding:6px 9px;line-height:1.5;white-space:pre-wrap}\n.ljMoF{margin-top:10px;display:flex;justify-content:flex-end;gap:8px}\n.ljTst{position:absolute;left:50%;bottom:72px;transform:translateX(-50%);background:rgba(23,28,34,.96);border:1px solid rgba(62,198,216,.35);color:#C9D4DE;font-size:12.5px;padding:7px 16px;border-radius:8px;opacity:0;transition:opacity .25s;pointer-events:none;white-space:nowrap;z-index:60}\n.ljTst.on{opacity:1}\ninput::placeholder,textarea::placeholder{color:#59636D!important;opacity:1}\n.ljTag{font-size:11px;color:#8A97A3;border:0.5px solid rgba(255,255,255,.16);border-radius:5px;padding:1px 6px;margin-left:8px;white-space:nowrap}\n.ljTag.ok{color:#71C08A;border-color:rgba(113,192,138,.45)}\n.ljBsd{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;margin-left:6px;border-radius:5px;color:#3EC6D8;border:0.5px solid rgba(62,198,216,.45);cursor:pointer;flex:none}\n.ljBsd:hover{background:rgba(62,198,216,.12)}\n\n/* 滚动条：渲染期不出条，成形后细条（.ljBd 主滚动区 / .ljLs I1 列表 / .ljPop 弹层） */\n.ljBd,.ljLs,.ljPop{scrollbar-width:none;-ms-overflow-style:none}\n.ljBd::-webkit-scrollbar,.ljLs::-webkit-scrollbar,.ljPop::-webkit-scrollbar{width:0;height:0}\nhtml.ljReady .ljBd,html.ljReady .ljLs,html.ljReady .ljPop{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.16) transparent}\nhtml.ljReady .ljBd::-webkit-scrollbar,html.ljReady .ljLs::-webkit-scrollbar,html.ljReady .ljPop::-webkit-scrollbar{width:5px;height:5px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb,html.ljReady .ljLs::-webkit-scrollbar-thumb,html.ljReady .ljPop::-webkit-scrollbar-thumb{background:rgba(255,255,255,.14);border-radius:3px}\nhtml.ljReady .ljBd::-webkit-scrollbar-thumb:hover,html.ljReady .ljLs::-webkit-scrollbar-thumb:hover,html.ljReady .ljPop::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,.26)}\nhtml.ljReady .ljBd::-webkit-scrollbar-track,html.ljReady .ljLs::-webkit-scrollbar-track,html.ljReady .ljPop::-webkit-scrollbar-track{background:transparent}\n";
var HTML = "<meta charset=\"utf-8\">\n<!-- ============================================================\n  【B5 · 执行脚本】标准组件模板 —— 实现唯一源（UI 规范「B5」的落地实现）\n  使用方式：**DATA 区由 `tools\\b5_panel.py build` 生成**（数据源＝`_temp\\B5_数据.json`；A3 后随产物移入 [当期]\\创作报告_out\\），❌ 手工填 DATA 区\n  单独打开：本文件**不含数据**（DATA 区＝5 行占位），故显示空态提示——**属正常，不是坏了**；看实际效果＝当期 `B5_面板.html`\n  升格回流：本文件头尾＝面板固定部分（逐字节）。若在某一期面板里改了样式/文案/交互，跑 `tools\\b5_panel.py promote <面板.html>` 看 diff，确认后 `--apply` 回写本文件（自动备份）。\n  ❌ 组件代码区一字不改（改交互 = 修改本文件一处，全库生效）\n  🚫 禁止自绘／简化／合并控件：🔒锁定 ／ 自定义 ／ 信息框 ／ 页签 ／ 开关 ／ 按钮 缺任一＝违规 → 重读本文件重渲\n  展示：逐 Clip 四段全文（【基础设定】【事件时序】【风格画风】【稳定约束】· 按 `分镜模版`「一」· 不折叠不摘要）；小字行＝时长 ｜ 合并决策 ｜ 尺寸；末尾＝BGM完整提示词区\n  换行：事件时序**逐镜分段**——一镜＝一 seg：首镜 `label=事件时序`、起行写 `0-Xs：`，其后每镜 `label` 留空、起行写 `切镜 X-Ys：`（**空行由该 seg 自身提供，❌ 再在 token 前插 `\\n\\n`，否则空两三行**）；**末镜之后同样空一行写「注意事项：最后延长缓冲继续渲染动态 1s…」（❌不写进【基础设定】）**；只换行不空行＝不合格；**一镜延续**（不切镜 · 只是运镜／焦点变）写在**画面描述内** `→X-Ys：运镜＋描述`，❌ 不新起 seg、❌ 不写 `切镜`——三问判定见 `分镜模版`「一」\n  每镜三行（`分镜模版`「一」· 段内 ` ｜ ` 分隔）：① `0-Xs：镜头… ｜ 焦段 ｜ 镜头视角 ｜ 景深，对焦：主体 ｜ 景别`（**对焦＝只写主体**（角色／道具／环境物／背景），❌ 不带角度）② `场景：… ｜ 构图 ｜ 超前景 ｜ 前景 ｜ 主体表演区 ｜ 背景` ③ `光影：面 角 ｜ 时空 ｜ 时节 ｜ 氛围`，其下 `画面描述：…`。**时空／时节／氛围／场景＝本 Clip《场景串》拆出**（B4 场场景串四段：段1→时空〔去空格〕· 段2→时节〔去空格〕· 段3→氛围〔空格换·〕· 段4→场景）；❌ 无【渲染调度】段\n  换选值：事件时序内全部结构字段＝点值弹出候选换选（预选＝AI 推理首选；**换选＝单列推荐 5-8 → `更多...` → 全池 → `收起`**；**超前景/前景＝`无`＋环境物**，值为「无」时后续括注不显示；**主体表演区／对焦主体＝角色＋道具＋环境物**〔四槽＝主体 ＋ 角度（`超前景角`／`前景角`／`主体角`／`背景角` · 池 16 项）；角色写**裸名**；**角色局部＝独立槽** `超前景部位`／`前景身段`／`主体身段`（主体是角色才出现，道具／环境物／`无` 时不显示也不回传）；`角色设定` 的 造型·声音·服装 串只作可选长描述（个性不进串；`不写服装` 者不出服装段（B4 出图判定））〕；**背景＝两池**：`背景`＝背景景（`[背景]` 推理池／`无`）· `背景主体`＝`无`／角色／道具／环境物——角色／道具／环境物**不进背景池**；**值为「无」不写字**（只留 ≈1 空格宽空槽 · 回传省略）；**「无」只给 `超前景`／`前景` 两槽**（`背景主体` 不设「无」· 有值时弹层**顶部固定列** `清空`〔常驻 · 不随列表滚动〕），其余不设；**环境物／道具一律「色+形态+物」**）；`位于画幅[位置]`／`占画幅比例[等级]`／`[虚焦／实焦]` 各自独立成槽\n  判定值：**模型／时长／合并决策／尺寸＝判定结果**，纯文本直书，❌ 换选槽、❌ 虚线。**模型不上面板**——B5 确认后按 Clip 时长判定（≤15s → `seedance_2.0_vip`；16–30s → `seedance_2.5`），A3 平台门前定，❌ 写进提示词（B5 已无【渲染调度】段）\n  场物：画面描述内非穿戴、非「」道具的可见物件一律做换选槽（候选＝同层同类 3–5 项），**每镜 ≥1 个**（该镜确无场物时不设）；带「」道具每次出现都写「名称」，❌ 简写裸名\n  素材块判定（建 DATA 之前做完）：**只 push「本期真要去生成」的块**——①内容 0 条 → 不出；②命中 `s3`「可引用资产」（角色库已有设定图 ／ 服装库同款 ／ 公共 BGM）→ **不出**，只登记引用路径。**该块连卡头一起不出现**，❌不写「本期无需生成道具」「已引用（不生成）」之类占位句、❌不进回传、❌不加 `tag` 装作说明。\n  道具：写名字直接放画面描述内（❌不入基础设定），句内只写名字不重述外观。**先按 `s3`「二·补」判出要出图的清单，只有清单内的名字才加「」**（＝固定文本、不可换选）；**判定不出图 ／ 临时道具 ／ 场景场物一律不加「」**（＝可换选，含「无」）。**一致性校验：道具块条目数 ＝ 全文「」道具种数，0 条 ⇒ 全文 0 个「」**；引述文字（便签／纸条上的字）不加「」\n  转场：**先判两问**（同一空间场景？场次已结束？），**任一为否 → 不设转场（值留空）**，段内连续演；判为转场才写——按 `phase\\p5_执行脚本.txt`「转场判定与写法」取池项锚，**转述为具象画面句**嵌在落点（遮挡＝前段末镜尾／入画＝后段首镜首）；**遮挡句三要素**：移动方向（从左向右／从右向左／从上向下）＋遮到占满画面（压满镜头／遮挡整个画面）＋与下一镜入画物同源同向；**入画句**＝`镜头前挡着画面的X向左／向右移出，Y 从X侧露出来`（自描述，❌「继续／随后」跨 Clip 指代——各 Clip 独立生成）；**落点顺序**＝画面描述 → 台词 → 转场句（转场句恒为镜内最后元素）；❌ 不设「转场：」标签、❌ 不写池内术语名、❌ 无方向的「挡住／移开」；**该句＝换选槽**（候选＝同池另一条／末尾一项空格＝取消转场，❌ 写「不转场」字样——写进提示词模型会照字面理解）\n  台词：`，角色（类型，语言，语气，语感，语速）：台词内容`——类型池＝对白／画外音／内心VO／旁白／解说／VO／歌声（选 画外音／内心VO／旁白／VO 自动加固定「，不动嘴」，对白／解说／歌声 不加）；台词按 B4 所选语言翻译；故事本选「全程VO」→ 台词模块整体不出现\n  BGM完整提示词：参考作品定调／风格类型／主副乐器／分段节奏变化·节拍·快慢·停顿·歌词等／各时段——可光标编辑\n  动作：🔒（锁定＝本 Clip 冻结 · 换选与批改暂停 · 内容转灰 · 灰→金）／批改（就地输入框＋锁定键）／上一级／确认（批改锁定后变优化）\n  回传链：确认/优化 → 回传预览 → 提交 → 自动分条发送（单条 ≤430 字符 · i/N 前缀 · 单轮 ≤18 条，超出按钮转「继续」）\n============================================================   📌 B5 资产位置（固化 · 全部在 `V0.2\\` 内，❌ 复制进系列库／创作目录）\n  模板  `ui\\B5_执行脚本.html`          本文件 · 组件唯一源（头＝CSS+骨架，尾＝组件 JS，中＝占位 DATA）\n  皮肤  `template\\skin\\B5_皮肤.css`    由本文件 `<style>` 标记抽取（`skin`），❌ 直接改皮肤\n  候选  `template\\pool\\b5_池.txt`      通用枚举；逐期枚举（角色／背景／场物）由脚本从数据累积，❌ 写进池\n  骨架  `template\\data\\B5_数据_模板.json` 复制到当期再填（`B5_数据.json`），❌ 直接改本文件\n  脚本  `tools\\b5_panel.py`            doctor／check／build／audit／preview／skin／promote／render\n  自检  `python tools\\b5_panel.py doctor`   ← 换会话第一件事\n  📌 本文件 DATA 区为 5 行占位，❌ 手工编辑；候选池不在此文件内。\n  📌 四槽换选：`超前景`＝无／角色／道具／环境物 ＋ `部位`（角色时·16 项）＋ 角度；`前景`＝无／角色／道具／环境物 ＋ `身段`（角色时·9 项）＋ 角度；`主体表演区`＝角色／道具／环境物 ＋ `身段`（角色时）＋ 角度；`背景`＝背景景／无 ＋ `背景主体`（无／角色／道具／环境物）＋ 角度（两池分开）。主体换回角色时部位／身段槽自动回来；值写成 `角色 手` 的旧数据渲染时自动拆两槽。数据漏写按景别补默认（部位`手`／身段 全景`全身`·中近`半身`·近特`胸像`·其余`上半身`）并随确认回传。角度池 16 项（正面／左右30·45·70°正侧／左右90°侧面／背面／左右30·45·70°背侧）。❌ 不写「主体」这类笼统值；对焦只写主体、不带角度。位置与占画幅比例为独立换选。\n-->\n<div class=\"ljP\">\n<!-- 画面描述＝最终呈现：以故事设定为锚、故事情节为线，逐镜转译成「镜头内可见」（姿势/眼神/行动/动作/表情/细节/事物互动/台词/VO/音效）；心理必须转为动作或声音。范式唯一源＝p4「画面描述创作范式」。人称：一律写角色名（❌我/她/他）；转场句落点按动作发生顺序锚定（遮挡＝前段末镜尾／出画＝离画后／入画＝后段首镜首／声光＝同步帧）；遮挡与入画必跨前后两段、成对补齐，见 p4「转场·落点锚」。 -->\n<!-- 分镜提示词脚本＝分镜＋角色＋服装＋道具＋BGM 五类提示词；按本期方案「有侧写、无侧不写」。 -->\n\n<h2 class=\"ljSr\">执行脚本面板：提示词分镜 + BGM/VO/角色/服装/道具提示词</h2>\n<div class=\"ljHd\">\n<div class=\"ljTt\">执行脚本</div>\n<div class=\"ljHc\">\n<button class=\"ljHb\" onclick=\"LJ.up()\" title=\"回上一级\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 19V6\"/><path d=\"M6 11l6-6 6 6\"/></svg>上一级</button>\n<button class=\"ljHb\" onclick=\"LJ.skip()\" title=\"AI 按优选直接采纳提交 · 不回预览\">跳过<svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 5l7 7-7 7\"/><path d=\"M13 5l7 7-7 7\"/></svg></button>\n</div>\n</div>\n<div class=\"ljBd\"></div>\n<div class=\"ljFt\">\n<button class=\"ljBtn\" onclick=\"LJ.reset()\" title=\"回到 AI 预选态\">复位</button>\n<button class=\"ljBtn ljPri\" id=\"b5main\" onclick=\"LJ.confirm()\" title=\"采纳当前产出 · 进入分镜提示词确认门（A4）\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7\"/></svg><span id=\"b5mainT\">确认</span></button>\n</div>\n<div class=\"ljOvl\"><div class=\"ljMod\"><div class=\"ljMoH\">回传预览 · 确认后提交 AI</div><div class=\"ljMoB\"></div><div class=\"ljMoF\"><button class=\"ljBtn\" onclick=\"LJ.closeM()\" title=\"收起（返回面板继续调整）\">收起</button><button class=\"ljBtn ljPri\" onclick=\"LJ.submit()\" title=\"将回传内容提交给 AI\"><svg viewBox=\"0 0 24 24\" width=\"13\" height=\"13\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.5l4.5 4.5L19 7\"/></svg>提交</button></div></div></div>\n<div class=\"ljTst\"></div>\n\n</div>";
var st = document.createElement('style');
st.textContent = CSS;
document.head.appendChild(st);
var root = document.getElementById('ljRoot');
(root || document.body).innerHTML = HTML;
/* ==================== 数据区（每次渲染只改这里） ==================== */
var ROLE_SW=(typeof DATA!=='undefined'&&DATA.roleSw)||{};  /* 角色台词开关：逐期由数据给（DATA.roleSw），❌ 本文件不写死角色名 */
function typesFor(r){var w=ROLE_SW[r];if(!w)return TYPEPOOL.slice();if(w.jm)return ['无台词'];var a=[];TYPEPOOL.forEach(function(t){if(t==='对白'){if(w.db)a.push(t);}else if(t==='VO'){if(w.vo)a.push(t);}else if(t==='画外音'){if(w.hw)a.push(t);}else if(t==='旁白'||t==='解说'){if(w.pb)a.push(t);}else if(t==='歌声'){if(w.gs)a.push(t);}else{a.push(t);}});return a;}
/* 字段元素写法：{s:'静态文本'} ／ {w:'键',v:'预选值(AI推理首选)',c:['候选...']}＝换选 ／ 带 n:'键' 的元素在该键值为「无」时隐藏
   bgm:1 的块＝BGM完整提示词（可编辑文本 · 不参与换选） */
var DATA = window.LJ_DATA || {};
/* ==================== 数据区结束 · 以下组件代码固定 ==================== */
(function(){
var me=document.currentScript&&document.currentScript.closest?document.currentScript.closest('.ljP'):null;
var ROOT=me||Array.prototype.slice.call(document.querySelectorAll('.ljP')).pop();
if(!ROOT)return;
var bd=ROOT.querySelector('.ljBd'),ovl=ROOT.querySelector('.ljOvl'),moB=ROOT.querySelector('.ljMoB'),tst=ROOT.querySelector('.ljTst');
ROOT.querySelector('.ljTt').textContent=DATA.title;
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function escAttr(s){return esc(s).replace(/"/g,'&quot;');}
function cp(x){return JSON.parse(JSON.stringify(x));}
function cv(c){return (typeof c==='string')?c:(c.v||'');}
function cd(c){return (typeof c==='string')?'':(c.d||'');}
function dsp(v){v=(v===null||v===undefined)?'':String(v);return v.trim()===''?'\u00a0':v;}
function lockSvg(on){return '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="'+(on?'#D9B75B':'#66707A')+'" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';}
function keySvg(){return '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';}
var W2={};
var NOVOICE={'VO':1,'内心VO':1,'画外音':1,'旁白':1};
var TYPEPOOL=['对白','画外音','内心VO','旁白','解说','VO','歌声'];
DATA.clips.forEach(function(cl){cl.segs.forEach(function(sg){if(sg.seg){sg.seg.forEach(function(x){if(x.w){var _cc=x.c||(x.p&&DATA.pools?DATA.pools[x.p]:null),_vv=x.v||'';if(x.role){_cc=typesFor(x.role);if(_cc.indexOf(_vv)<0)_vv=_cc[0];}W2[x.w]={c:_cc,v:_vv,r:(x.q!=null&&DATA.recs?DATA.recs[x.q]:null),clr:x.clr||0};}});}});});
var S={pick:{},pickv:{},cust:{},lock:{},bat:{},buf:{},bgt:null,openB:null,undo:[]};

for(var wk in W2){var arr=W2[wk].c||[],idx=-1;
for(var j=0;j<arr.length;j++){if(cv(arr[j])===W2[wk].v){idx=j;break;}}
/* 空值（`无`／未填）不预选 —— 否则会落到候选首项「无」，空槽就写不出空 */ 
if(idx<0&&String(W2[wk].v||'').trim()!=='')idx=0;
if(idx>=0)S.pick[wk]=idx;}
DATA.clips.forEach(function(cl,i){S.lock[i]=false;S.bat[i]=null;});
function isRoleW(v){var a=DATA.roles||[];return a.indexOf(String(v==null?'':v).trim())>=0;}
function wval(wk){var w=W2[wk];if(!w)return '';if(S.cust&&S.cust[wk]!=null&&S.cust[wk]!=='')return S.cust[wk];if(S.pickv&&S.pickv[wk]!=null)return S.pickv[wk];if(w.c&&w.c.length){return cv(w.c[S.pick[wk]]||w.v);}return w.v;}
function segHTML(segArr){var h='';
segArr.forEach(function(x){
if(x.n&&wval(x.n)==='无')return;
if(x.rc&&!isRoleW(wval(x.rc)))return;
if(x.s!=null){h+=esc((x.gap||'')+x.s);return;}
if(x.dm){var dv=wval(x.dm);if(NOVOICE[dv])h+='，不动嘴';return;}
var cur=wval(x.w);
var _cx=x.c||(x.p&&DATA.pools?DATA.pools[x.p]:null);if(_cx&&_cx.length){var _c=x.role?typesFor(x.role):_cx;var _v=x.role?( _c.indexOf(cur)>=0?cur:_c[0]):cur;if(x.role&&S.pick[x.w]===undefined&&_v!==cur){S.pick[x.w]=_c.indexOf(_v);}var _z=(String(_v).trim()==='');h+=(x.gap||'')+'<span class="ljW'+(_z?' ljW0':'')+'" onclick="LJ.sw(\''+x.w+'\',this)" title="点击换选（随角色开关）">'+esc(dsp(_v))+'</span>';}
else{h+=(x.gap||'')+'<span>'+esc(cur)+'</span>';}
});
return h;}
function segPlain(segArr){var h='';
segArr.forEach(function(x){if(x.n&&wval(x.n)==='无')return;if(x.rc&&!isRoleW(wval(x.rc)))return;if(x.w&&String(wval(x.w)||'').trim()==='')return;if(x.dm){var dv=wval(x.dm);if(NOVOICE[dv])h+='，不动嘴';return;}h+=(x.gap||'')+((x.s!=null)?x.s:wval(x.w));});
return h.replace(/··/g,'·');}
function secHTML(sg){return sg.txt!=null?esc(sg.txt):segHTML(sg.seg);}
function secPlain(sg){return sg.txt!=null?sg.txt:segPlain(sg.seg);}
function bgTxt(cl){return (S.bgt!=null&&!(cl.ast))?S.bgt:cl.segs[0].txt;}
function secBody(cl,sg){if(cl.bgm||cl.vo||cl.ast)return '<span class="ljEd" contenteditable="true" spellcheck="false" oninput="LJ.bged(this.innerText)">'+esc(bgTxt(cl))+'</span>';return secHTML(sg);}
function clipPlain(i){var cl=DATA.clips[i];if(cl.bgm||cl.vo)return bgTxt(cl);var a=[];cl.segs.forEach(function(sg){a.push(sg.label+'：'+secPlain(sg));});return a.join('；');}
function snapshot(){return {pick:cp(S.pick),pickv:cp(S.pickv||{}),cust:cp(S.cust),bat:cp(S.bat),bgt:S.bgt};}
function pushUndo(){S.undo.push(snapshot());if(S.undo.length>60)S.undo.shift();}
function undo(){var ae=document.activeElement;if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'))return;if(!S.undo.length)return;
var x=S.undo.pop();S.pick=cp(x.pick);S.pickv=cp(x.pickv||{});S.cust=cp(x.cust||{});S.bat=cp(x.bat);S.bgt=(x.bgt!=null?x.bgt:null);S.openB=null;renderAll();updMain();}
function clipHTML(cl,i){var lk=S.bat[i]!=null;var fl=!!S.lock[i];
var tip=lk?'已锁定 · 点击解锁恢复':(fl?'已锁定 · 点击解锁（内容冻结）':'锁定本 Clip（内容冻结 · 换选与批改暂停）');
var h='<div class="ljSc" data-k="'+i+'"><div class="ljClH"><span class="ljIN">'+esc(cl.n)+'</span>'+(cl.tag?'<span class="ljTag">'+esc(cl.tag)+'</span>':'');
h+=cl.ast?'':((cl.bgm||cl.vo)?(' <span class="ljLm">'+(cl.bgm?'｜ 供素材端 ④ · 分段节奏随剪辑对齐':'｜ 依故事设定「全程VO」· 供素材端 ⑤')+'</span>'):('<span class="ljLm">｜ '+esc(cl.dur)+' ｜ '+esc(cl.merge)+' ｜ '+esc(cl.size)+'</span>'));
h+='<span class="ljLk2" onclick="LJ.lk('+i+')" title="'+tip+'">'+lockSvg(lk||fl)+'</span>';
if(!lk&&!fl){h+='<button class="ljBtb'+(S.openB===i?' act':'')+'" onclick="LJ.bat('+i+')" title="批改：在本 Clip 下方就地输入调整内容">批改</button>';}
h+='</div>';
var cls='ljSegs'+(lk?' ljGray':(fl?' ljFz':''));
if(lk){h+='<div class="ljBtx">'+esc(S.bat[i])+'</div><div class="'+cls+'">';}
else{h+='<div class="'+cls+'">';}
cl.segs.forEach(function(sg){h+='<div class="ljSg"><span class="ljSgl">'+esc(sg.label)+'</span><div class="ljSgx">'+secBody(cl,sg)+'</div></div>';});
h+='</div>';
h+='<div class="ljBi'+(S.openB===i?' on':'')+'"><input placeholder="写入你想调整的内容" value="'+escAttr(S.buf[i]||'')+'" oninput="LJ.buf('+i+',this.value,this)" onkeydown="LJ.ek(event,'+i+')"><span class="ljBkey'+(S.buf[i]?' has':'')+'" onclick="LJ.lockB('+i+')" title="锁定批改（回车同效）">'+keySvg()+'</span>'+'<span class="ljBsd" onclick="LJ.sendB('+i+')" title="只回传本栏批改">'+sendSvg()+'</span></div>';
return h+'</div>';}
function astHas(cl){return !!(cl.segs&&cl.segs[0]&&String(cl.segs[0].txt||'').trim());}
function renderAll(){var h='';var cs=DATA.clips.filter(function(cl){return !cl.bgm&&!cl.vo&&!cl.ast;});DATA.clips.forEach(function(cl,i){if(cl.ast&&!astHas(cl))return;h+=clipHTML(cl,i);});if(!DATA.clips.length)h='<div style="padding:26px 2px;color:#66707A;font-size:12.5px;line-height:2">这里是 <span style="color:#9FADB9">组件模板</span>，当前无数据——空壳属正常，不是坏了。<br><span style="color:#3EC6D8">▸ 看完整样式</span>：打开 <a href="../_temp/B5_预览.html" style="color:#C9D4DE;text-decoration:underline;text-underline-offset:2px">_temp/B5_预览.html</a>（全量数据样张 · 跑 <span style="color:#9FADB9">preview</span> 可刷新）<br><span style="color:#3EC6D8">▸ 正式产物</span>：当期目录的 <span style="color:#9FADB9">B5_面板.html</span>（由 <span style="color:#9FADB9">build</span> 注入当期数据）</div>';bd.innerHTML=h;}
function renderItem(i){var el=bd.querySelector('.ljSc[data-k="'+i+'"]');var cl=DATA.clips[i];if(el&&cl)el.outerHTML=clipHTML(cl,i);}
var pop=document.createElement('div');pop.className='ljPop';ROOT.appendChild(pop);
var POPW=null,POPMORE=false,POPEL=null;
/* 单列两级（与 E3 单列推荐同构）：点值 → 推荐 5-8 项 → `更多...` → 全池 → `收起` ＋ 自定义 */
function sw(wk,el){var w=W2[wk];if(!w||!w.c)return;POPW=wk;POPMORE=false;POPEL=el;drawPop();}
function popRec(w){
var cur=wval(POPW),rec=((w.r&&w.r.length)?w.r:w.c).map(cv),out=[];
if(cur)out.push(cur);                                   /* 当前值置顶 */
rec.forEach(function(v){if(v&&out.indexOf(v)<0)out.push(v);});
if(out.length<5)w.c.forEach(function(c){var v=cv(c);if(out.length<5&&v&&out.indexOf(v)<0)out.push(v);});
return out.slice(0,8);}
function drawPop(){
var w=W2[POPW];if(!w)return;
var big=w.c.length>8,cur=wval(POPW);
var list=(big&&!POPMORE)?popRec(w):w.c.map(cv);
var h='<div class="ljColOne">';
if(w.clr&&String(cur||'')!=='')h+='<div class="ljFixTop"><div class="ljPc" data-v="" onclick="LJ.pk(this)" title="清空该项（不写「无」，回传省略该段）"><span>清空</span><span class="ljPcn">回传省略</span></div></div>';
h+='<div class="ljOpts">';
list.forEach(function(v){h+='<div class="ljPc'+(v===cur?' on':'')+'" data-v="'+escAttr(v)+'" onclick="LJ.pk(this)"><span>'+esc(dsp(v))+'</span></div>';});
h+='</div><div class="ljFixOne">';
if(big&&!POPMORE)h+='<div class="ljPc ljMore" onclick="LJ.pmore()">更多...</div>';
if(big&&POPMORE)h+='<div class="ljPc ljMore" onclick="LJ.pback()">收起</div>';
h+='<div class="ljPc ljCst"><input id="b5c" placeholder="自定义…（回车确定）" onkeydown="if(event.key===\'Enter\'){event.preventDefault();LJ.cust(this.value);}"></div>';
h+='</div></div>';
pop.innerHTML=h;pop.classList.add('on');placePop();}
function placePop(){var el=POPEL;if(!el)return;
var r=el.getBoundingClientRect(),pr=ROOT.getBoundingClientRect();
var L=r.left-pr.left;if(L+pop.offsetWidth>ROOT.clientWidth-8)L=Math.max(8,ROOT.clientWidth-pop.offsetWidth-10);
pop.style.left=L+'px';
var T=r.bottom-pr.top+6;
if(T+pop.offsetHeight>ROOT.clientHeight-8)T=Math.max(8,r.top-pr.top-pop.offsetHeight-6);
pop.style.top=T+'px';}
function pmore(){POPMORE=true;drawPop();}
function pback(){POPMORE=false;drawPop();}
function pk(el){if(POPW==null||!el)return;pushUndo();S.pickv[POPW]=el.getAttribute('data-v');delete S.cust[POPW];closePop();renderAll();}
function cust(v){v=(v||'').trim();if(!v||POPW==null)return;pushUndo();S.cust[POPW]=v;closePop();renderAll();}
function closePop(){pop.classList.remove('on');POPW=null;}
function lk(i){if(S.bat[i]!=null){pushUndo();S.bat[i]=null;S.openB=null;renderItem(i);updMain();}
else{S.lock[i]=!S.lock[i];renderItem(i);}}
function bat(i){if(S.bat[i]!=null)return;S.openB=(S.openB===i?null:i);renderAll();
if(S.openB!==null){var el=bd.querySelector('.ljSc[data-k="'+S.openB+'"] .ljBi input');if(el)setTimeout(function(){el.focus();},0);}}
function buf(i,v,el){S.buf[i]=v;var b=el.parentNode.querySelector('.ljBkey');if(b){if(v)b.classList.add('has');else b.classList.remove('has');}}
function lockB(i){if(S.bat[i]!=null)return;var v=S.buf[i];if(!v)return;pushUndo();S.bat[i]=v;S.buf[i]='';S.openB=null;renderItem(i);updMain();}
function ek(e,i){if(e.key==='Enter'||e.keyCode===13){e.preventDefault();lockB(i);}}
function hasBat(){for(var hk in S.bat){if(S.bat[hk]!=null)return true;}return false;}
function updMain(){var mb=ROOT.querySelector('#b5main');if(!mb)return;var on=hasBat();
var ic=on?'<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>':'<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
mb.innerHTML=ic+'<span id="b5mainT">'+(on?'优化':'确认')+'</span>';
mb.title=on?'回传 AI 优化（旧内容 × 批改内容）':'采纳当前产出 · 进入分镜提示词确认门（A4）';
if(on){mb.classList.add('gold');}else{mb.classList.remove('gold');}}
/* ── 分条切块（全库唯一实现）：单条 ≤430（含 head 前缀后仍 <450）· 行内超长硬切 ── */
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
var SENT=false,OUTLINES=[],PEND=[],BATCH=18;
function submit(){if(SENT)return;
if(typeof sendPrompt!=='function'){toast('当前环境不支持发送 · 回传预览已保留');return;}
ovl.classList.remove('on');
if(!PEND.length){
var head='【执行脚本·'+(hasBat()?'优化':'确认')+'】';
var chunks=chunkText(OUTLINES);
var n=chunks.length;
chunks.forEach(function(c,i){PEND.push(n<=1?(head+'\n'+c):(head+' '+(i+1)+'/'+n+'\n'+c));});}
var take=PEND.splice(0,BATCH);take.forEach(function(m){sendPrompt(m);});
var _bt=ROOT.querySelector('#b5mainT');
if(PEND.length){if(_bt)_bt.textContent='继续';toast('已发 '+take.length+' 条 · 余 '+PEND.length+' 条，再点「继续」发下一批');}
else{SENT=true;if(_bt)_bt.textContent='确认';toast('已提交回传（'+take.length+' 条）');}}
function confirmAll(){if(PEND.length){submit();return;}if(SENT)return;var out=[];
DATA.clips.forEach(function(cl,i){
if(cl.ast){if(!astHas(cl))return;out.push('▪ '+cl.n);out.push(cl.n+'='+String(cl.segs[0]&&cl.segs[0].txt||'').replace(/\n/g,' ｜ '));return;}
if(cl.bgm||cl.vo){out.push('▪ '+cl.n);out.push(cl.n+'='+String(bgTxt(cl)).replace(/\n/g,' ｜ '));return;}
out.push('▪ '+cl.n+' ｜ '+cl.dur+' ｜ '+cl.merge+' ｜ '+cl.size);
if(S.bat[i]!=null){out.push('【批改】'+cl.n+' = '+S.bat[i]+'（原：'+clipPlain(i)+'）');}
else{out.push(cl.n+'='+clipPlain(i));}
});
if(!out.length){toast('没有可提交的内容（本模板未注入数据）');return;}
OUTLINES=out;
moB.innerHTML=out.map(function(l){return '<div class="ljOl">'+esc(l)+'</div>';}).join('');
ovl.classList.add('on');}
function closeM(){ovl.classList.remove('on');}
function toast(t){tst.textContent=t;tst.classList.add('on');clearTimeout(tst._h);tst._h=setTimeout(function(){tst.classList.remove('on');},2200);}
function up(){if(SENT)return;try{resetAll();}catch(e){}SENT=true;if(typeof sendPrompt==='function')sendPrompt('【执行脚本·上一级】回上一级（剧本 B4）｜本面板已清空并初始化；待 B4 确认新剧本后，按新内容重新推导分镜提示词');}
renderAll();updMain();
ROOT.addEventListener('click',function(e){
if(e.target&&e.target.isConnected===false)return;   /* 弹层重绘后旧节点已脱离文档，别当「点空白」关掉 */
if(pop.classList.contains('on')&&!e.target.closest('.ljPop')&&!e.target.closest('.ljW'))closePop();
if(S.openB!==null&&!e.target.closest('.ljBi')&&!e.target.closest('.ljBtb')&&!e.target.closest('.ljLk2')){var ok=S.openB;S.openB=null;renderItem(ok);}
});
bd.addEventListener('scroll',function(){if(pop.classList.contains('on'))closePop();});
ROOT.addEventListener('wheel',function(e){if(e.target.closest('.ljBd')||e.target.closest('.ljMoB')||e.target.closest('.ljPop'))return;e.preventDefault();},{passive:false});
if(window.__ljKH)document.removeEventListener('keydown',window.__ljKH);
window.__ljKH=function(e){if((e.ctrlKey||e.metaKey)&&String(e.key).toLowerCase()==='z'){var ae=document.activeElement;if(ae&&(ae.tagName==='INPUT'||ae.tagName==='TEXTAREA'))return;e.preventDefault();undo();}};
document.addEventListener('keydown',window.__ljKH);
function bged(v){S.bgt=v;}
function skipAll(){if(SENT)return;confirmAll();if(!SENT)submit();}
function resetAll(){S.pick={};S.pickv={};S.bat={};S.buf={};S.openB=null;S.bgt=null;renderAll();if(typeof updMain==='function')updMain();}
function sendSvg(){return '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l16-8-6 16-2.5-6.5L4 12z"/></svg>';}
function sendB(i){var t=(S.buf[i]||'').trim();var nm=(DATA.clips[i]&&DATA.clips[i].n)||('Clip'+(i+1));
if(!t){toast('本栏还没有批改内容');return;}
if(typeof sendPrompt==='function'){sendPrompt('【B5·批改·'+nm+'】\n'+t);toast('已回传本栏批改');}
else{try{navigator.clipboard.writeText(t);toast('已复制本栏批改');}catch(e){toast('预览模式 · 无法回传');}}}
window.LJ={sendB:sendB,sw:sw,pk:pk,pmore:pmore,pback:pback,cust:cust,lk:lk,bat:bat,buf:buf,lockB:lockB,ek:ek,bged:bged,reset:resetAll,skip:skipAll,undo:undo,confirm:confirmAll,submit:submit,closeM:closeM,up:up};
})();

/* 成形标记：load 后两帧置 ljReady —— 渲染中不挂滚动条 */
(function(){function r(){requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('ljReady');});});}
if(document.readyState==='complete')r();else window.addEventListener('load',r);})();
})();
