##############################################
# - Safari 内输入以下格式命令快速指定搜索引擎
# - 【命令+空格+关键词】或者【关键词+空格+命令】
# - 注：请先进入设置更改 Safari 默认搜索为 DuckDuckGO
# - 更新时间：2023-09-16
# - 墨鱼自用全能搜索V2.0(134)
# - 公众号墨鱼手记
# - 如需引用请注明出处-> https://t.me/ddgksf2021 谢谢合作！
# - https://github.com/ddgksf2013/Rewrite/raw/master/Html/Q-Search.conf
##############################################

hostname = duckduckgo.com

# p    xxx （快捷指令）
^https:\/\/duckduckgo.com\/\?q=p\+([^&]+).+ url 302 shortcuts://run-shortcut?name=Passwords&input=$1
# gaod  xxx （高德地图）
^https:\/\/duckduckgo.com\/\?q=gaod\+([^&]+).+ url 302 iosamap://poi?sourceApplication=applicationName&name=%s
# sptf    xxx   （spotify）
^https:\/\/duckduckgo.com\/\?q=sptf\+([^&]+).+ url 302 spotify://search/%s

#>>>>>>>>>>>>>>>>>>>>>>>翻译
# yd  xxx (有道词典)
^https:\/\/duckduckgo.com\/\?q=yd\+([^&]+).+ url 302 http://dict.youdao.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+yd.+ url 302 http://dict.youdao.com/search?q=$1
# trc xxx (Google 译至中)
^https:\/\/duckduckgo.com\/\?q=trc\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+trc.+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=zh-CN&text=$1
# tre xxx (Google 译至英)
^https:\/\/duckduckgo.com\/\?q=tre\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tre.+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=en&text=$1
# trj xxx (Google 译至日)
^https:\/\/duckduckgo.com\/\?q=trj\+([^&]+).+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+trj.+ url 302 https://translate.google.com/#view=home&op=translate&sl=auto&tl=ja&text=$1



#>>>>>>>>>>>>>>>>>>>>>>>社区
# xhs   xxxx（小红书）
^https:\/\/duckduckgo.com\/\?q=xhs\+([^&]+).+ url 302 xhsdiscover://search/result?keyword=$1
# tt    xxx (头条)
^https:\/\/duckduckgo.com\/\?q=tt\+([^&]+).+ url 302 https://so.toutiao.com/search?keyword=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tt.+ url 302 https://so.toutiao.com/search?keyword=$1
# db    xxx (豆瓣)
^https:\/\/duckduckgo.com\/\?q=db\+([^&]+).+ url 302 https://m.douban.com/search?query=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+db.+ url 302 https://m.douban.com/search?query=$1
# zh    xxx (知乎)
^https:\/\/duckduckgo.com\/\?q=zh\+([^&]+).+ url 302 http://www.zhihu.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+zh.+ url 302 http://www.zhihu.com/search?q=$1
# wb    xxx (微博)
^https:\/\/duckduckgo.com\/\?q=wb\+([^&]+).+ url 302 https://s.weibo.com/weibo/$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wb.+ url 302 https://s.weibo.com/weibo/$1
# wx    xxx (微信公众号)
^https:\/\/duckduckgo.com\/\?q=wx\+([^&]+).+ url 302 https://weixin.sogou.com/weixinwap?query=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wx.+ url 302 https://weixin.sogou.com/weixinwap?query=$1
# up xxx (Unsplash)
^https:\/\/duckduckgo.com\/\?q=up\+([^&]+).+ url 302 https://unsplash.com/s/photos/$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+up.+ url 302 https://unsplash.com/s/photos/$1
# sspai xxx (少数派站内搜索)
^https:\/\/duckduckgo.com\/\?q=sspai\+([^&]+).+ url 302 https://sspai.com/search/post/$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+sspai.+ url 302 https://sspai.com/search/post/$1
# ssp   xxx (Google 搜索少数派)
^https:\/\/duckduckgo.com\/\?q=ssp\+([^&]+).+ url 302 https://www.google.com/search?as_q=$1&as_sitesearch=sspai.com
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ssp.+ url 302 https://www.google.com/search?as_q=$1&as_sitesearch=sspai.com
# tw    xxx (Twitter)
^https:\/\/duckduckgo.com\/\?q=tw\+([^&]+).+ url 302 https://twitter.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tw.+ url 302 https://twitter.com/search?q=$1
# gh    xxx (GitHub)
^https:\/\/duckduckgo.com\/\?q=gh\+([^&]+).+ url 302 https://github.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gh.+ url 302 https://github.com/search?q=$1
# gu    xxx (GitHub User)
^https:\/\/duckduckgo.com\/\?q=gu\+([^&]+).+ url 302 https://github.com/search?q=$1&type=users
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gu.+ url 302 https://github.com/search?q=$1&type=users
# gc    xxx (GitHub Code)
^https:\/\/duckduckgo.com\/\?q=gc\+([^&]+).+ url 302 https://github.com/search?o=desc&q=$1&s=indexed&type=Code
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gc.+ url 302 https://github.com/search?o=desc&q=$1&s=indexed&type=Code
# so    xxx (Stack Overflow)
^https:\/\/duckduckgo.com\/\?q=so\+([^&]+).+ url 302 https://stackoverflow.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+so.+ url 302 https://stackoverflow.com/search?q=$1
# se    xxx (StackExchange)
^https:\/\/duckduckgo.com\/\?q=se\+([^&]+).+ url 302 https://stackexchange.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+se.+ url 302 https://stackexchange.com/search?q=$1
# wa    xxx (WolframAlpha)
^https:\/\/duckduckgo.com\/\?q=wa\+([^&]+).+ url 302 https://www.wolframalpha.com/input/?i=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wa.+ url 302 https://www.wolframalpha.com/input/?i=$1
# rd    xxx (Reddit)
^https:\/\/duckduckgo.com\/\?q=rd\+([^&]+).+ url 302 https://www.reddit.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+rd.+ url 302 https://www.reddit.com/search?q=$1



#>>>>>>>>>>>>>>>>>>>>>>>购物
# zdm xxx (什么值得买)
^https:\/\/duckduckgo.com\/\?q=zdm\+([^&]+).+ url 302 https://search.m.smzdm.com/?v=b&s=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+zdm.+ url 302 https://search.m.smzdm.com/?v=b&s=$1
# jd  xxx (京东)
^https:\/\/duckduckgo.com\/\?q=jd\+([^&]+).+ url 302 openapp.jdmobile://virtual?params={"des":"productList","keyWord":"$1","from":"search","category":"jump"}
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+jd.+ url 302 openapp.jdmobile://virtual?params={"des":"productList","keyWord":"$1","from":"search","category":"jump"}
# tb  xxx (淘宝)
^https:\/\/duckduckgo.com\/\?q=tb\+([^&]+).+ url 302 taobao://s.taobao.com?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tb.+ url 302 taobao://s.taobao.com?q=$1



#>>>>>>>>>>>>>>>>>>>>>>>视频
# ytb  xxx (YouTube)
^https:\/\/duckduckgo.com\/\?q=ytb\+([^&]+).+ url 302 https://www.youtube.com/results?search_query=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ytb.+ url 302 https://www.youtube.com/results?search_query=$1
# bl xxx (哔哩哔哩)
^https:\/\/duckduckgo.com\/\?q=bl\+([^&]+).+ url 302 https://m.bilibili.com/search?keyword=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+bl.+ url 302 https://m.bilibili.com/search?keyword=$1
# gd  xxx (Google 搜索 Google Drive 资源)
^https:\/\/duckduckgo.com\/\?q=gd\+([^&]+).+ url 302 https://www.google.com/search?q=%22Google+Drive%22+$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gd.+ url 302 https://www.google.com/search?q=%22Google+Drive%22+$1
# tgd xxx (t.me/gdurl 搜索 Google Drive 资源)
^https:\/\/duckduckgo.com\/\?q=tgd\+([^&]+).+ url 302 https://t.me/s/gdurl?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+tgd.+ url 302 https://t.me/s/gdurl?q=$1
# ph  xxx (PornHub)
^https:\/\/duckduckgo.com\/\?q=ph\+([^&]+).+ url 302 https://cn.pornhub.com/video/search?search=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ph.+ url 302 https://cn.pornhub.com/video/search?search=$1
# af  xxx (Acfun)
^https:\/\/duckduckgo.com\/\?q=af\+([^&]+).+ url 302 https://www.acfun.cn/search?keyword=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+af.+ url 302 https://www.acfun.cn/search?keyword=$1
# ys  xxx (茶杯狐cupfox)
^https:\/\/duckduckgo.com\/\?q=ys\+([^&]+).+ url 302 https://cupfox.app/search?key=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ys.+ url 302 https://cupfox.app/search?key=$1



#>>>>>>>>>>>>>>>>>>>>>>>苹果商店切换
#源链接爬虫于>>https://www.liangjianghu.com/searchads-appstore-switch
#Created by ddgksf2013，使用方法：输入区号，搜索即可
# cn  (切换至中国区)
^https:\/\/duckduckgo.com\/\?q=cn&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143465&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=cn&urlDesc=
# hk  (切换至香港区)
^https:\/\/duckduckgo.com\/\?q=hk&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143463&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=hk&urlDesc=
# tw  (切换至台湾区)
^https:\/\/duckduckgo.com\/\?q=tw&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143470&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tw&urlDesc=
# us  (切换至美国区)
^https:\/\/duckduckgo.com\/\?q=us&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143441&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=us&urlDesc=
# jp  (切换至日本区)
^https:\/\/duckduckgo.com\/\?q=jp&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143462&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=jp&urlDesc=
# kr  (切换至韩国区)
^https:\/\/duckduckgo.com\/\?q=kr&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143466&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=kr&urlDesc=
# tr  (切换至土耳其区)
^https:\/\/duckduckgo.com\/\?q=tr&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143480&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tr&urlDesc=
# sg  (切换至新加坡区)
^https:\/\/duckduckgo.com\/\?q=sg&.+ url 302 https://itunes.apple.com/WebObjects/MZStore.woa/wa/resetAndRedirect?dsf=143464&mt=8&url=/WebObjects/MZStore.woa/wa/viewSoftware?mt=8&id=1108187390&cc=tr&urlDesc=



#>>>>>>>>>>>>>>>>>>>>>>>搜索
# bd  xxx (百度搜索)
^https:\/\/duckduckgo.com\/\?q=bd\+([^&]+).+ url 302 https://www.baidu.com/s?wd=$1
^https:\/\/duckduckgo.com\/\?q=((.(?!bd))+)\+bd.+ url 302 https://www.baidu.com/s?wd=$1
# wk  xxx (维基搜索)
^https:\/\/duckduckgo.com\/\?q=wk\+([^&]+).+ url 302 https://zh.wikipedia.org/wiki/$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wk.+ url 302 https://zh.wikipedia.org/wiki/$1
# wz  xxx (无追搜索)
^https:\/\/duckduckgo.com\/\?q=wz\+([^&]+).+ url 302 https://www.wuzhuiso.com/s?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+wz.+ url 302 https://www.wuzhuiso.com/s?q=$1
# yh  xxx (油猴搜索)
^https:\/\/duckduckgo.com\/\?q=yh\+([^&]+).+ url 302 https://greasyfork.org/zh-CN/scripts?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+yh.+ url 302 https://greasyfork.org/zh-CN/scripts?q=$1 
# gi  xxx (Google 图片)
^https:\/\/duckduckgo.com\/\?q=gi\+([^&]+).+ url 302 https://www.google.com/search?&tbm=isch&q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+gi.+ url 302 https://www.google.com/search?&tbm=isch&q=$1
# gg  xxx (谷歌)
^https:\/\/duckduckgo.com\/\?q=by\+([^&]+).+ url 302 https://www.google.com/search?q=$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+by.+ url 302 https://www.google.com/search?q=$1
# ios  xxx (苹果应用搜索)
^https:\/\/duckduckgo.com\/\?q=ios\+([^&]+).+ url 302 https://www.qimai.cn/search/index/search/$1
^https:\/\/duckduckgo.com\/\?q=([^+]+)\+ios.+ url 302 https://www.qimai.cn/search/index/search/$1
#     xxx （无指令默认为 Bing）
^https:\/\/duckduckgo.com\/\?q=([^&]+).+ url 302 https://www.bing.com/search?q=$1
