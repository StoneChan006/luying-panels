cdn/ 说明（已可用 API 自动推送，无需手动上传）
=============================
引擎地址（锁版本）：
  https://esm.sh/gh/StoneChan006/luying-panels@v1/cdn/<码>.js

改了 ui/*.html 之后，两条命令同步：
  python tools/make_cdn.py
  python tools/gh_push.py --repo StoneChan006/luying-panels --dir cdn --prefix cdn --msg "改了什么" --tag v2

token：~/.workbuddy/github_token（600，只对该仓库 Contents 读写）
