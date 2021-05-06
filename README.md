# my_little_airplay :airplane:

> 一个仿照 MOO v1.0 的 my little airpot 专属播放器，制作该播放器纯粹出于自己对 MLA 和 MOO 的喜爱，也方便自己在手机上听到 MLA 的歌曲。当前 **不太适配PC端** 且本项目仅限于学习！！！！！！！！！

## :hammer: 技术选型

* :lipstick: 【组件库】     使用`Vant`快速开发，实现轮播图、懒加载等功能；
* :alien: 【播放器】     使用`Vue-aplayer`播放组件
* :heavy_plus_sign: 【路由】         使用`Vue-router`进行路由管理；
* :heavy_plus_sign: 【组件状态】 使用订阅发布者模式进行数据传送；
* :heavy_plus_sign: 【脚手架】     使用`Vue-cli` + Airbnb代码规范

## :tada: 项目相关

* **资源**
  音乐资源来自QQ群（**my little airport 宇宙后援会**_可在网络搜索就不公开群号啦！_），图片源于Google搜索
  部分文案摘抄微信公众号「我的小机场」，真的感谢他们的无私奉献为我们乐迷提供了一片广阔天地！
* **功能**
  歌曲大部分**按专辑分类**，首页提供随机歌曲播放，借助vue-aplayer播放器实现了缓存、切换播放模式等主要音乐播放器的功能，*<u>搜索功能尚未完善</u>*

##  :factory: 待添加功能

1. 搜索框（防抖）
2. 保留常听歌曲（即登录功能）
3. MOO `v1.0` 中的滑动切换组件方法
4. 歌词展示（涉及歌词资源整理，需要耗费巨大的精力，因此近期内不太可能会实现）
5. 歌曲单页播放，即摆脱vue-aplayer实现自定制播放页

##  :car: 运行方法

```bash
cd '项目'
	
# 安装项目依赖
	yarn install
# 启动项目
	yarn serve
```

## 写在最后 :m:

> 有一大段我的狗屁，请随意跳过

**关于MOO**
之所以选择MOO是因为我本人实在是太喜欢这个音乐软件了，其体验感是我使用过的所有音乐软件里面最好的，我尤其喜欢其` V1.0` 版本中不依赖导航栏的使用方式，切换路由只需要轻轻一划，堪称完美的动作效果真的会让人上瘾！我曾经的发呆方法就是打开MOO然后到处滑滑滑，纵享丝滑。为什么要特意强调`v1.0`呢？因为MOO在我完成这个项目的基础布局时给我发来了`v2.0 Bate`邀请。。。在MOO`v2.0`添加了导航栏。。。而且滑动也无法很好地切换路由了。。。。我真的又开心又难过，这样的改动当然可以提升内容导向性，我相信这是MOO日益成熟所无法避免的改动，但这次改动后软件的体验感真的阶梯式下降，还是希望MOO能够在保留原先极致操作方式的基础上进行迭代。不过MOO终于要商业化赚大钱了，这还挺令我开心的！