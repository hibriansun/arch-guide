(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[543],{2464:(l,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>a});const a={key:"v-f6e31a70",path:"/rookie/transparent.html",title:"透明代理",lang:"zh-CN",frontmatter:{title:"透明代理",sidebarDepth:2,next:"/advanced/optional-cfg-1.md"},excerpt:"",headers:[{level:3,title:"🕊 纵使千山多万壑，犹有青鸾踏云间",slug:"🕊-纵使千山多万壑-犹有青鸾踏云间",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"1. 安装 Qv2ray 和 V2Ray / Xray 内核",slug:"_1-安装-qv2ray-和-v2ray-xray-内核",children:[]},{level:2,title:"2. 配置 Qv2ray",slug:"_2-配置-qv2ray",children:[]},{level:2,title:"3. 配置订阅",slug:"_3-配置订阅",children:[]},{level:2,title:"4. 通过系统代理方式尝试连接",slug:"_4-通过系统代理方式尝试连接",children:[]},{level:2,title:"5. 安装 cgproxy",slug:"_5-安装-cgproxy",children:[]},{level:2,title:"6. 配置 Qv2ray 透明代理设置",slug:"_6-配置-qv2ray-透明代理设置",children:[]},{level:2,title:"7. 配置 cgproxy",slug:"_7-配置-cgproxy",children:[]},{level:2,title:"8. 配置可用的 DNS 服务",slug:"_8-配置可用的-dns-服务",children:[]},{level:2,title:"9. 启动 cgproxy 服务",slug:"_9-启动-cgproxy-服务",children:[]},{level:2,title:"其它代理方法（非透明代理）",slug:"其它代理方法-非透明代理",children:[{level:3,title:"系统代理",slug:"系统代理",children:[]},{level:3,title:"应用自身的代理配置",slug:"应用自身的代理配置",children:[]},{level:3,title:"export",slug:"export",children:[]},{level:3,title:"proxychains-ng",slug:"proxychains-ng",children:[]}]}],filePathRelative:"rookie/transparent.md",git:{updatedTime:1625039827e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:7}]}}},405:(l,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>qe});var a=e(6252);const s=e.p+"assets/img/transparent_qv2ray.80b15094.png",m=e.p+"assets/img/transparent_cfg-1.1590b34f.png",r=e.p+"assets/img/transparent_cfg-2.f0dc98a3.png",t=e.p+"assets/img/transparent_cfg-3.7038c9ec.png",c=e.p+"assets/img/transparent_cfg-4.3417c442.png",u=e.p+"assets/img/transparent_cfg-5.66bbb60f.png",W=e.p+"assets/img/transparent_cfg-6.9dcf2a3b.png",i=e.p+"assets/img/transparent_connect-1.0493ef28.png",o=e.p+"assets/img/transparent_connect-2.de57acb4.png",p=e.p+"assets/img/transparent_connect-3.1d2ba67a.png",d=e.p+"assets/img/transparent_transparent-qv2ray-1.bd67535d.png",g=e.p+"assets/img/transparent_transparent-qv2ray-2.8e81e767.png",k=e.p+"assets/img/transparent_cgproxy.31f3edf1.png",h=e.p+"assets/img/transparent_system-cfg-1.09ee522c.png",U=e.p+"assets/img/transparent_system-cfg-2.8d626e88.png",y=e.p+"assets/img/transparent_system-cfg-3.afcb4d1f.png",b=e.p+"assets/img/transparent_cgproxy-start.a640f6e8.png",v=e.p+"assets/img/transparent_check.41b45a1e.png",x=e.p+"assets/img/firefox.f551ccf3.png",f=e.p+"assets/img/telegram-1.30ef4e3a.png",_=e.p+"assets/img/telegram-2.3774e3ad.png",Q=e.p+"assets/img/vscode.fbc49656.png",w=e.p+"assets/img/proxychains-1.834c05ee.png",q=e.p+"assets/img/proxychains-2.14721172.png",S=e.p+"assets/img/proxychains-3.8390b8aa.png",E=(0,a.Wm)("h1",{id:"archlinux-透明代理",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#archlinux-透明代理","aria-hidden":"true"},"#"),(0,a.Uk)(" archlinux 透明代理")],-1),R=(0,a.Wm)("blockquote",null,[(0,a.Wm)("h3",{id:"🕊-纵使千山多万壑-犹有青鸾踏云间",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🕊-纵使千山多万壑-犹有青鸾踏云间","aria-hidden":"true"},"#"),(0,a.Uk)(" 🕊 纵使千山多万壑，犹有青鸾踏云间")]),(0,a.Wm)("p",null,[(0,a.Uk)("全球化浪潮无法阻挡，我们常常有访问一些资料的客观需求。但有的时候因为一些因素往往导致无法正常访问（包括但不限于"),(0,a.Wm)("strong",null,"终端中下载文件特别慢、无法访问部分网站、部分应用无法正常使用"),(0,a.Uk)("等）。虽然前路千沟万壑，但无法阻挡我们前行的脚步。本节我们通过设置透明代理解决这一问题")])],-1),V=(0,a.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,a.Uk)(" 🔖 这一节将会讨论：")],-1),D={class:"custom-container details"},B=(0,a.Wm)("summary",null,"目录",-1),X={class:"table-of-contents"},C=(0,a.Uk)("# 🕊 纵使千山多万壑，犹有青鸾踏云间"),P=(0,a.Uk)("# 🔖 这一节将会讨论："),F=(0,a.Uk)("# 1. 安装 Qv2ray 和 V2Ray / Xray 内核"),N=(0,a.Uk)("# 2. 配置 Qv2ray"),A=(0,a.Uk)("# 3. 配置订阅"),T=(0,a.Uk)("# 4. 通过系统代理方式尝试连接"),O=(0,a.Uk)("# 5. 安装 cgproxy"),K=(0,a.Uk)("# 6. 配置 Qv2ray 透明代理设置"),L=(0,a.Uk)("# 7. 配置 cgproxy"),j=(0,a.Uk)("# 8. 配置可用的 DNS 服务"),G=(0,a.Uk)("# 9. 启动 cgproxy 服务"),I=(0,a.Uk)("# 其它代理方法（非透明代理）"),z=(0,a.Uk)("# 系统代理"),Y=(0,a.Uk)("# 应用自身的代理配置"),H=(0,a.Uk)("# export"),M=(0,a.Uk)("# proxychains-ng"),J=(0,a.Wm)("div",{class:"custom-container danger"},[(0,a.Wm)("p",{class:"custom-container-title"},"☢️ 警告"),(0,a.Wm)("p",null,[(0,a.Wm)("em",null,"第六条　计算机信息网络直接进行国际联网，必须使用邮电部国家公用电信网提供的国际出入口信道。")]),(0,a.Wm)("p",null,[(0,a.Wm)("em",null,"任何单位和个人不得自行建立或者使用其他信道进行国际联网。")]),(0,a.Wm)("p",null,"-- 中华人民共和国计算机信息网络国际联网管理暂行规定")],-1),Z=(0,a.Wm)("h2",{id:"_1-安装-qv2ray-和-v2ray-xray-内核",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_1-安装-qv2ray-和-v2ray-xray-内核","aria-hidden":"true"},"#"),(0,a.Uk)(" 1. 安装 Qv2ray 和 V2Ray / Xray 内核")],-1),$=(0,a.Uk)("通过以下命令安装 "),ll={href:"https://github.com/Qv2ray/Qv2ray",target:"_blank",rel:"noopener noreferrer"},nl=(0,a.Uk)("Qv2ray"),el=(0,a.Wm)("sup",null,"cn",-1),al=(0,a.Uk)(" 和 "),sl={href:"https://archlinux.org/packages/?sort=&q=v2ray&maintainer=&flagged=",target:"_blank",rel:"noopener noreferrer"},ml=(0,a.Uk)("V2Ray"),rl=(0,a.Uk)(" / "),tl={href:"https://github.com/XTLS/Xray-core",target:"_blank",rel:"noopener noreferrer"},cl=(0,a.Uk)("Xray"),ul=(0,a.Wm)("sup",null,"cn",-1),Wl=(0,a.Uk)(" 内核："),il=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" pacman -S qv2ray-dev-git v2ray\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ol=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" pacman -S qv2ray-dev-git xray\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),pl=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"若安装 V2Ray 核心时报错，请尝试更换镜像源。")],-1),dl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:s,alt:"Qv2ray"})],-1),gl=(0,a.Wm)("blockquote",null,[(0,a.Wm)("h4",{id:"📑-相关资料-qv2ray",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#📑-相关资料-qv2ray","aria-hidden":"true"},"#"),(0,a.Uk)(" 📑 相关资料：Qv2ray")]),(0,a.Wm)("p",null,"Qv2ray 是一个使用 Qt 编写的跨平台的 v2ray 图形前端。")],-1),kl=(0,a.Wm)("h2",{id:"_2-配置-qv2ray",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_2-配置-qv2ray","aria-hidden":"true"},"#"),(0,a.Uk)(" 2. 配置 Qv2ray")],-1),hl=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Uk)("打开 Qv2ray > 点击 "),(0,a.Wm)("code",null,"首选项"),(0,a.Uk)("：")])],-1),Ul=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:m,alt:"Qv2ray_config-1"})],-1),yl=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("在 "),(0,a.Wm)("code",null,"内核设置"),(0,a.Uk)(" 选项卡中，点击 "),(0,a.Wm)("code",null,"检查 V2Ray 核心设置"),(0,a.Uk)(" 以验证 V2Ray 核心设置：")])],-1),bl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:r,alt:"Qv2ray_config-2"})],-1),vl=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"若使用 Xray 内核，则先需修改："),(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Wm)("code",null,"V2Ray 核心可执行文件路径"),(0,a.Uk)(" 为 "),(0,a.Wm)("code",null,"/usr/bin/xray")])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Wm)("code",null,"V2Ray 资源目录"),(0,a.Uk)(" 为 "),(0,a.Wm)("code",null,"/usr/share/xray")])])])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("再点击 "),(0,a.Wm)("code",null,"检查 V2Ray 核心设置"),(0,a.Uk)(" 以验证 Xray 核心设置：")])])]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:t,alt:"Qv2ray_config-3"})])],-1),xl=(0,a.Wm)("h2",{id:"_3-配置订阅",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_3-配置订阅","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. 配置订阅")],-1),fl=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Uk)("在主窗口中点击 "),(0,a.Wm)("code",null,"分组"),(0,a.Uk)("：")])],-1),_l=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:c,alt:"Qv2ray_config-4"})],-1),Ql=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("修改 "),(0,a.Wm)("code",null,"分组名称"),(0,a.Uk)(" 的 "),(0,a.Wm)("code",null,"默认分组"),(0,a.Uk)(" 为自定义名称（通常为 ✈ 场名称）：")])],-1),wl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:u,alt:"Qv2ray_config-5"})],-1),ql=(0,a.Wm)("ol",{start:"3"},[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("切换到 "),(0,a.Wm)("code",null,"订阅设置"),(0,a.Uk)(" 选项卡并进行如下配置：")]),(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("勾选 "),(0,a.Wm)("code",null,"此组是一个订阅")])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("设置 "),(0,a.Wm)("code",null,"订阅地址"),(0,a.Uk)(" 为 ✈ 场提供的 "),(0,a.Wm)("code",null,"订阅链接")])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("点击 "),(0,a.Wm)("code",null,"更新订阅"),(0,a.Uk)(" 按钮并等待完成")])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("点击 "),(0,a.Wm)("code",null,"确定"),(0,a.Uk)(" 以应用设置并关闭对话框")])])])])],-1),Sl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:W,alt:"Qv2ray_config-6"})],-1),El=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("若使用 "),(0,a.Wm)("code",null,"qv2ray-dev-git"),(0,a.Wm)("sup",null,"cn"),(0,a.Uk)("，则需要注意的是最新的 "),(0,a.Wm)("code",null,"qv2ray-dev-git"),(0,a.Uk)(" 已经将机场的默认订阅类型改为规范 "),(0,a.Wm)("code",null,"SIP008"),(0,a.Uk)("。")]),(0,a.Wm)("p",null,[(0,a.Uk)("如果你的 ✈ 场订阅类型为 "),(0,a.Wm)("code",null,"base64"),(0,a.Uk)("，则需要在 "),(0,a.Wm)("code",null,"订阅设置"),(0,a.Uk)(" 面板 > "),(0,a.Wm)("code",null,"订阅类型"),(0,a.Uk)(" 中，将 "),(0,a.Wm)("code",null,"SIP008"),(0,a.Uk)(" 改为 "),(0,a.Wm)("code",null,"base64"),(0,a.Uk)("，否则你将拿不到订阅链接中的任何节点。")])],-1),Rl=(0,a.Wm)("h2",{id:"_4-通过系统代理方式尝试连接",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_4-通过系统代理方式尝试连接","aria-hidden":"true"},"#"),(0,a.Uk)(" 4. 通过系统代理方式尝试连接")],-1),Vl=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Uk)("双击分组中添加的订阅即可查看更新出的节点，右键并点击 "),(0,a.Wm)("code",null,"测试延迟"),(0,a.Uk)(" 可以测试分组或节点的延迟：")])],-1),Dl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:i,alt:"Qv2ray_connect-1"})],-1),Bl=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("右键需要连接的节点 > 点击 "),(0,a.Wm)("code",null,"连接到此服务器"),(0,a.Uk)(" 即可连接：")])],-1),Xl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:o,alt:"Qv2ray_connect-2"})],-1),Cl=(0,a.Wm)("ol",{start:"3"},[(0,a.Wm)("li",null,"打开不存在的网站验证连接：")],-1),Pl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:p,alt:"Qv2ray_connect-3"})],-1),Fl=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("Qv2ray 会自动配置系统代理。也可以点击托盘图标 > 在弹出菜单中，依次选择 "),(0,a.Wm)("code",null,"系统代理"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"启用 / 禁用系统代理"),(0,a.Uk)(" 以启用或禁用系统代理。")])],-1),Nl=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"GNOME 的系统代理设置非常有效。这是因为 GNOME 的系统代理设置得到了普遍的适配。"),(0,a.Wm)("p",null,"但是 KDE 的系统代理设置更像是一个玩具。甚至 KDE 系列应用程序本身也不会读取和使用那个配置。所以我们需要通过设置透明代理的方式解决这个问题。"),(0,a.Wm)("p",null,"同时这也可以使终端下的应用使用代理连接（如 git）。")],-1),Al=(0,a.Wm)("h2",{id:"_5-安装-cgproxy",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_5-安装-cgproxy","aria-hidden":"true"},"#"),(0,a.Uk)(" 5. 安装 cgproxy")],-1),Tl=(0,a.Uk)("通过以下命令安装 "),Ol={href:"https://github.com/springzfx/cgproxy",target:"_blank",rel:"noopener noreferrer"},Kl=(0,a.Uk)("cgproxy"),Ll=(0,a.Wm)("sup",null,"cn / aur",-1),jl=(0,a.Uk)("："),Gl=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" pacman -S cgproxy-git\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Il=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"yay -S aur/cgproxy\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),zl=(0,a.Wm)("h2",{id:"_6-配置-qv2ray-透明代理设置",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_6-配置-qv2ray-透明代理设置","aria-hidden":"true"},"#"),(0,a.Uk)(" 6. 配置 Qv2ray 透明代理设置")],-1),Yl=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Uk)("打开 Qv2ray > "),(0,a.Wm)("code",null,"首选项"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"入站设置"),(0,a.Uk)(" > 取消勾选 "),(0,a.Wm)("code",null,"设置系统代理"),(0,a.Uk)("：")])],-1),Hl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:d,alt:"Qv2ray_transparent-1"})],-1),Ml=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("勾选 "),(0,a.Wm)("code",null,"透明代理设置"),(0,a.Uk)("：")])],-1),Jl=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:g,alt:"Qv2ray_transparent-2"})],-1),Zl=(0,a.Wm)("p",null,[(0,a.Uk)("其它设置保持默认即可，"),(0,a.Wm)("code",null,"IPv4 端口"),(0,a.Uk)(" 可自定义为其它端口。")],-1),$l={class:"custom-container tip"},ln=(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),nn=(0,a.Wm)("p",null,[(0,a.Uk)("关于代理 "),(0,a.Wm)("code",null,"udp"),(0,a.Uk)(" 流量的设置稍微有一些复杂，配置有误便会导致无法上网。")],-1),en=(0,a.Uk)("本指南不对此展开介绍，如有需要可参考 "),an={href:"https://www.v2ray.com/chapter_02/04_dns.html",target:"_blank",rel:"noopener noreferrer"},sn=(0,a.Uk)("Project V 官方网站相关内容"),mn=(0,a.Uk)("。一般情况下不需要代理 "),rn=(0,a.Wm)("code",null,"udp",-1),tn=(0,a.Uk)(" 流量。"),cn=(0,a.Wm)("p",null,[(0,a.Uk)("而属于 "),(0,a.Wm)("code",null,"udp"),(0,a.Uk)(" 类型的 "),(0,a.Wm)("code",null,"dns"),(0,a.Uk)(" 流量，我们只需要在系统设置里设置一个可用的 DNS 服务器即可。")],-1),un=(0,a.Wm)("ol",{start:"3"},[(0,a.Wm)("li",null,[(0,a.Uk)("点击 "),(0,a.Wm)("code",null,"确定"),(0,a.Uk)(" 保存设置")])],-1),Wn=(0,a.Wm)("h2",{id:"_7-配置-cgproxy",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_7-配置-cgproxy","aria-hidden":"true"},"#"),(0,a.Uk)(" 7. 配置 cgproxy")],-1),on=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Uk)("通过 "),(0,a.Wm)("code",null,"vim"),(0,a.Uk)(" 编辑 "),(0,a.Wm)("code",null,"/etc/cgproxy/config.json"),(0,a.Uk)(" 文件：")])],-1),pn=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"vim"),(0,a.Uk)(" /etc/cgproxy/config.json\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),dn=(0,a.Wm)("p",null,"进行如下修改：",-1),gn=(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Uk)("在 "),(0,a.Wm)("code",null,"cgroup_proxy"),(0,a.Uk)(" 中括号里加上 "),(0,a.Wm)("code",null,'"/"'),(0,a.Uk)("（包含引号）")]),(0,a.Wm)("li",null,[(0,a.Uk)("将 "),(0,a.Wm)("code",null,"port"),(0,a.Uk)(" 改为 Qv2ray 首选项里的透明代理端口（默认是和 Qv2ray 默认对应的 "),(0,a.Wm)("code",null,"12345"),(0,a.Uk)("）")]),(0,a.Wm)("li",null,[(0,a.Uk)("将 "),(0,a.Wm)("code",null,"enable_dns"),(0,a.Uk)("、"),(0,a.Wm)("code",null,"enable_udp"),(0,a.Uk)("、"),(0,a.Wm)("code",null,"enable_ipv6"),(0,a.Uk)(" 改为 "),(0,a.Wm)("code",null,"false")]),(0,a.Wm)("li",null,[(0,a.Uk)("如果希望当本机作为网关设备时为连接到本机网关的其他设备（如连接到本机开设的 wifi 热点的设备）也提供透明代理，则将 "),(0,a.Wm)("code",null,"enable_gateway"),(0,a.Uk)(" 改为 "),(0,a.Wm)("code",null,"true")])],-1),kn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:k,alt:"cgproxy"})],-1),hn=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("cgproxy 默认配置是代理所有 "),(0,a.Wm)("code",null,"tcp"),(0,a.Uk)(" 和 "),(0,a.Wm)("code",null,"udp"),(0,a.Uk)("、"),(0,a.Wm)("code",null,"ipv4"),(0,a.Uk)(" 和 "),(0,a.Wm)("code",null,"ipv6"),(0,a.Uk)(" 的流量。")]),(0,a.Wm)("p",null,[(0,a.Uk)("如果不希望代理其中的某种（些）流量，则将对应的 "),(0,a.Wm)("code",null,"enable_xxx"),(0,a.Uk)(" 改为 "),(0,a.Wm)("code",null,"false"),(0,a.Uk)("。注意，这里的配置要和 Qv2ray 选项里的配置一致（例如 Qv2ray 选项里没有勾选 "),(0,a.Wm)("code",null,"udp"),(0,a.Uk)("，则这里务必把 "),(0,a.Wm)("code",null,"enable_udp"),(0,a.Uk)(" 改为 "),(0,a.Wm)("code",null,"false"),(0,a.Uk)("）")])],-1),Un=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("保存并退出 "),(0,a.Wm)("code",null,"vim")])],-1),yn=(0,a.Wm)("h2",{id:"_8-配置可用的-dns-服务",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_8-配置可用的-dns-服务","aria-hidden":"true"},"#"),(0,a.Uk)(" 8. 配置可用的 DNS 服务")],-1),bn=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Uk)("打开 "),(0,a.Wm)("code",null,"系统设置"),(0,a.Uk)(" > 点击侧栏 "),(0,a.Wm)("code",null,"连接"),(0,a.Uk)("：")])],-1),vn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:h,alt:"system-config_step-1"})],-1),xn=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("选择当前连接 > 点击 "),(0,a.Wm)("code",null,"ipv4"),(0,a.Uk)(" 选项卡：")])],-1),fn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:U,alt:"system-config_step-2"})],-1),_n=(0,a.Wm)("ol",{start:"3"},[(0,a.Wm)("li",null,[(0,a.Uk)("在 "),(0,a.Wm)("code",null,"其它 DNS 服务器"),(0,a.Uk)(" 中添加没有污染的 DNS 服务器：")])],-1),Qn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:y,alt:"system-config_step-3"})],-1),wn=(0,a.Wm)("ol",{start:"4"},[(0,a.Wm)("li",null,"保存并退出系统设置")],-1),qn=(0,a.Wm)("h2",{id:"_9-启动-cgproxy-服务",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#_9-启动-cgproxy-服务","aria-hidden":"true"},"#"),(0,a.Uk)(" 9. 启动 cgproxy 服务")],-1),Sn=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"在 Qv2ray 中连接一个节点")]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"在 Qv2ray 托盘菜单中关闭系统代理（如果已经启动）")]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"通过以下命令启动 cgproxy 服务：")])],-1),En=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl start cgproxy.service\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Rn=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"每次重启后都要重新命令启动 cgproxy 服务。"),(0,a.Wm)("p",null,"若要设为开机自启，请执行以下命令："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl "),(0,a.Wm)("span",{class:"token builtin class-name"},"enable"),(0,a.Uk)(" cgproxy.service\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("p",null,"若要关闭 cgproxy 服务，请执行以下命令："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl stop cgproxy.service\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])])],-1),Vn=(0,a.Wm)("ol",{start:"4"},[(0,a.Wm)("li",null,"通过以下命令检查 cgproxy 服务运行情况：")],-1),Dn=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"systemctl status cgproxy.service\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Bn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:b,alt:"cgproxy-start"})],-1),Xn=(0,a.Wm)("ol",{start:"5"},[(0,a.Wm)("li",null,"打开不存在的网站验证连接：")],-1),Cn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:v,alt:"check"})],-1),Pn=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"如果 cgproxy 不生效 😢，请尝试以下步骤："),(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,"观察 Qv2ray 日志，看流量是否被定向到了 Qv2ray"),(0,a.Wm)("li",null,"如果没有，请检查配置是否准确、cgproxy 服务是否开启等"),(0,a.Wm)("li",null,"如果还是没发现问题，尝试更换端口"),(0,a.Wm)("li",null,"使用以下命令尝试给核心文件加上相应的特权：")])],-1),Fn=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" setcap "),(0,a.Wm)("span",{class:"token string"},'"cap_net_admin,cap_net_bind_service=ep"'),(0,a.Uk)(" /usr/bin/v2ray\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Nn=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" setcap "),(0,a.Wm)("span",{class:"token string"},'"cap_net_admin,cap_net_bind_service=ep"'),(0,a.Uk)(" /usr/bin/xray\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),An=(0,a.Wm)("h2",{id:"其它代理方法-非透明代理",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#其它代理方法-非透明代理","aria-hidden":"true"},"#"),(0,a.Uk)(" 其它代理方法（非透明代理）")],-1),Tn=(0,a.Wm)("blockquote",null,[(0,a.Wm)("p",null,"虽然 cgproxy 很好，但有的时候就是会有诡异的 bug。本指南为了内容的全面性，介绍其它的代理方法。")],-1),On=(0,a.Wm)("h3",{id:"系统代理",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#系统代理","aria-hidden":"true"},"#"),(0,a.Uk)(" 系统代理")],-1),Kn=(0,a.Uk)("如步骤 "),Ln=(0,a.Uk)("4. 通过系统代理方式尝试连接"),jn=(0,a.Uk)(" 所述，但在很多应用不生效（主流浏览器已支持 KDE 的系统代理）。"),Gn=(0,a.Wm)("h3",{id:"应用自身的代理配置",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#应用自身的代理配置","aria-hidden":"true"},"#"),(0,a.Uk)(" 应用自身的代理配置")],-1),In=(0,a.Wm)("h4",{id:"firefox",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#firefox","aria-hidden":"true"},"#"),(0,a.Uk)(" Firefox")],-1),zn=(0,a.Wm)("p",null,"Firefox 可使用系统代理，也可手动配置：",-1),Yn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:x,alt:"Firefox"})],-1),Hn=(0,a.Wm)("h4",{id:"telegram",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#telegram","aria-hidden":"true"},"#"),(0,a.Uk)(" Telegram")],-1),Mn=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Uk)("点击 "),(0,a.Wm)("code",null,"Settings"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"Advanced"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"Connection type"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"Use custom proxy")])],-1),Jn=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:f,alt:"Telegram_step-1"})],-1),Zn=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("点击 "),(0,a.Wm)("code",null,"ADD PROXY"),(0,a.Uk)(" > 填写合适的类型和端口 > "),(0,a.Wm)("code",null,"SAVE"),(0,a.Uk)("：")])],-1),$n=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:_,alt:"Telegram_step-2"})],-1),le=(0,a.Wm)("h4",{id:"visual-studio-code-code-oss",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#visual-studio-code-code-oss","aria-hidden":"true"},"#"),(0,a.Uk)(" Visual Studio Code（code OSS）")],-1),ne=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("点击 "),(0,a.Wm)("code",null,"File"),(0,a.Uk)("（"),(0,a.Wm)("code",null,"文件"),(0,a.Uk)("） > "),(0,a.Wm)("code",null,"Preference"),(0,a.Uk)("（"),(0,a.Wm)("code",null,"首选项"),(0,a.Uk)("） > "),(0,a.Wm)("code",null,"Settings"),(0,a.Uk)("（"),(0,a.Wm)("code",null,"设置"),(0,a.Uk)("）")])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("搜索 "),(0,a.Wm)("code",null,"proxy"),(0,a.Uk)("，在其中填入 http 代理地址（"),(0,a.Wm)("code",null,"http://127.0.0.1:xxxx"),(0,a.Uk)("）即可：")])])],-1),ee=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:Q,alt:"vscode"})],-1),ae=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"其它应用请自行寻找代理设置。")],-1),se=(0,a.Wm)("h3",{id:"export",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#export","aria-hidden":"true"},"#"),(0,a.Uk)(" export")],-1),me=(0,a.Wm)("p",null,[(0,a.Uk)("通过以下 "),(0,a.Wm)("code",null,"export"),(0,a.Uk)(" 命令设置当前终端的代理方式：")],-1),re=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token builtin class-name"},"export"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token assign-left variable"},"https_proxy"),(0,a.Wm)("span",{class:"token operator"},"="),(0,a.Uk)("http://127.0.0.1:xxxx\n"),(0,a.Wm)("span",{class:"token builtin class-name"},"export"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token assign-left variable"},"http_proxy"),(0,a.Wm)("span",{class:"token operator"},"="),(0,a.Uk)("http://127.0.0.1:xxxx\n"),(0,a.Wm)("span",{class:"token builtin class-name"},"export"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token assign-left variable"},"all_proxy"),(0,a.Wm)("span",{class:"token operator"},"="),(0,a.Uk)("http://127.0.0.1:xxxx\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"3"),(0,a.Wm)("br")])],-1),te=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("不同终端命令所识别的环境变量名不同，如 "),(0,a.Wm)("code",null,"all_proxy"),(0,a.Uk)(" 对 "),(0,a.Wm)("code",null,"curl"),(0,a.Uk)(" 生效，而对 "),(0,a.Wm)("code",null,"wget"),(0,a.Uk)(" 则不生效，具体可查看各个命令的 "),(0,a.Wm)("code",null,"man page")])],-1),ce=(0,a.Wm)("h3",{id:"proxychains-ng",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#proxychains-ng","aria-hidden":"true"},"#"),(0,a.Uk)(" proxychains-ng")],-1),ue=(0,a.Wm)("p",null,[(0,a.Uk)("如果对于一个应用，KDE 系统代理不生效，在终端 "),(0,a.Wm)("code",null,"export"),(0,a.Uk)(" 了 "),(0,a.Wm)("code",null,"ALL_PROXY"),(0,a.Uk)(" 变量再用终端启动此应用代理也不生效，并且这个应用自身也没有配置代理的选项，此时可以尝试使用 proxychains-ng。")],-1),We=(0,a.Wm)("p",null,"它可以为单行命令配置代理。它是一个预加载的 hook，允许通过一个或多个 SOCKS 或 HTTP 代理重定向现有动态链接程序的 TCP 流量。",-1),ie=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,"通过以下命令安装 proxychains-ng 包：")],-1),oe=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" pacman -S proxychains-ng\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),pe=(0,a.Wm)("ol",{start:"2"},[(0,a.Wm)("li",null,[(0,a.Uk)("通过 "),(0,a.Wm)("code",null,"vim"),(0,a.Uk)(" 编辑 "),(0,a.Wm)("code",null,"/etc/proxychains.conf"),(0,a.Uk)(" 文件：")])],-1),de=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"vim"),(0,a.Uk)(" /etc/proxychains.conf\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ge=(0,a.Wm)("p",null,"把配置文件中最后两行改为 Qv2ray 代理的 ip 和端口：",-1),ke=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:w,alt:"proxychains_step-1"})],-1),he=(0,a.Wm)("p",null,[(0,a.Uk)("在 "),(0,a.Wm)("code",null,"proxy_dns"),(0,a.Uk)(" 一行前添加 "),(0,a.Wm)("code",null,"#"),(0,a.Uk)(" 注释掉此行，否则使用 "),(0,a.Wm)("code",null,"proxychains"),(0,a.Uk)(" 启动 yay 会报错：")],-1),Ue=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:q,alt:"proxychains_step-2"})],-1),ye=(0,a.Wm)("ol",{start:"3"},[(0,a.Wm)("li",null,[(0,a.Uk)("使用代理方式为在单一命令前添加 "),(0,a.Wm)("code",null,"proxychains"),(0,a.Uk)(" 前缀：")])],-1),be=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"proxychains %command%\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ve=(0,a.Wm)("p",null,"如使用 proxychains-ng 代理 yay:",-1),xe=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"proxychains yay -Syyu\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),fe=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:S,alt:"proxychains_step-3"})],-1),_e=(0,a.Wm)("p",null,"📔 本节参考资料：",-1),Qe={href:"https://qv2ray.net/lang/zh/",target:"_blank",rel:"noopener noreferrer"},we=(0,a.Uk)("Qv2ray"),qe={render:function(l,n){const e=(0,a.up)("RouterLink"),s=(0,a.up)("OutboundLink"),m=(0,a.up)("CodeGroupItem"),r=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.j4)(a.HY,null,[E,R,(0,a.Wm)("blockquote",null,[V,(0,a.Wm)("details",D,[B,(0,a.Wm)("nav",X,[(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#🕊-纵使千山多万壑-犹有青鸾踏云间"},{default:(0,a.w5)((()=>[C])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#🔖-这一节将会讨论"},{default:(0,a.w5)((()=>[P])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_1-安装-qv2ray-和-v2ray-xray-内核"},{default:(0,a.w5)((()=>[F])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_2-配置-qv2ray"},{default:(0,a.w5)((()=>[N])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_3-配置订阅"},{default:(0,a.w5)((()=>[A])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_4-通过系统代理方式尝试连接"},{default:(0,a.w5)((()=>[T])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_5-安装-cgproxy"},{default:(0,a.w5)((()=>[O])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_6-配置-qv2ray-透明代理设置"},{default:(0,a.w5)((()=>[K])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_7-配置-cgproxy"},{default:(0,a.w5)((()=>[L])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_8-配置可用的-dns-服务"},{default:(0,a.w5)((()=>[j])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#_9-启动-cgproxy-服务"},{default:(0,a.w5)((()=>[G])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#其它代理方法-非透明代理"},{default:(0,a.w5)((()=>[I])),_:1}),(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#系统代理"},{default:(0,a.w5)((()=>[z])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#应用自身的代理配置"},{default:(0,a.w5)((()=>[Y])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#export"},{default:(0,a.w5)((()=>[H])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(e,{to:"#proxychains-ng"},{default:(0,a.w5)((()=>[M])),_:1})])])])])])])]),J,Z,(0,a.Wm)("p",null,[$,(0,a.Wm)("a",ll,[nl,(0,a.Wm)(s)]),el,al,(0,a.Wm)("a",sl,[ml,(0,a.Wm)(s)]),rl,(0,a.Wm)("a",tl,[cl,(0,a.Wm)(s)]),ul,Wl]),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"V2Ray"},{default:(0,a.w5)((()=>[il])),_:1}),(0,a.Wm)(m,{title:"Xray"},{default:(0,a.w5)((()=>[ol])),_:1})])),_:1}),pl,dl,gl,kl,hl,Ul,yl,bl,vl,xl,fl,_l,Ql,wl,ql,Sl,El,Rl,Vl,Dl,Bl,Xl,Cl,Pl,Fl,Nl,Al,(0,a.Wm)("p",null,[Tl,(0,a.Wm)("a",Ol,[Kl,(0,a.Wm)(s)]),Ll,jl]),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"cn"},{default:(0,a.w5)((()=>[Gl])),_:1}),(0,a.Wm)(m,{title:"aur"},{default:(0,a.w5)((()=>[Il])),_:1})])),_:1}),zl,Yl,Hl,Ml,Jl,Zl,(0,a.Wm)("div",$l,[ln,nn,(0,a.Wm)("p",null,[en,(0,a.Wm)("a",an,[sn,(0,a.Wm)(s)]),mn,rn,tn]),cn]),un,Wn,on,pn,dn,gn,kn,hn,Un,yn,bn,vn,xn,fn,_n,Qn,wn,qn,Sn,En,Rn,Vn,Dn,Bn,Xn,Cn,Pn,(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"V2Ray"},{default:(0,a.w5)((()=>[Fn])),_:1}),(0,a.Wm)(m,{title:"Xray"},{default:(0,a.w5)((()=>[Nn])),_:1})])),_:1}),An,Tn,On,(0,a.Wm)("p",null,[Kn,(0,a.Wm)(e,{to:"/rookie/transparent.html#_4-%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E4%BB%A3%E7%90%86%E6%96%B9%E5%BC%8F%E5%B0%9D%E8%AF%95%E8%BF%9E%E6%8E%A5"},{default:(0,a.w5)((()=>[Ln])),_:1}),jn]),Gn,In,zn,Yn,Hn,Mn,Jn,Zn,$n,le,ne,ee,ae,se,me,re,te,ce,ue,We,ie,oe,pe,de,ge,ke,he,Ue,ye,be,ve,xe,fe,(0,a.Wm)("blockquote",null,[_e,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",Qe,[we,(0,a.Wm)(s)])])])])],64)}}}}]);