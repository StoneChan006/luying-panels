cdn/ 使用说明
=============
1) 在 GitHub 新建一个【公开】仓库（例如 luying-panels）
2) 在本目录的上一级执行：
     git init
     git add cdn
     git commit -m "panels v1"
     git branch -M main
     git remote add origin https://github.com/<你的用户名>/luying-panels.git
     git push -u origin main
3) 打标签（让 CDN 锁版本，之后改引擎不影响老用户）：
     git tag v1 && git push origin v1
4) 面板引用地址（把 <用户名> 换成你的）：
     https://esm.sh/gh/<用户名>/luying-panels@v1/{file}
5) 用 panel_tool 构建时：
     python tools/panel_tool.py build 数据.json -o 面板.html --tpl ui/B3_故事设定.html --cdn https://esm.sh/gh/<用户名>/luying-panels@v1/B3.js
