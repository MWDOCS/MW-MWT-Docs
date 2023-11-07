import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
      "/": [
        {
			text: "你好，舰长！",
			link: 'GO.md',
			icon: "home",
		},
		{
			text: "关于游戏",
			link: 'game-info.md',
			icon: "hot",
		},
		{
			text: "文档一览",
			link: 'JC.md',
			icon: "result",
		},
		/*{
			text: "玩家美术",
			link: 'drawing.md',
			icon: "selection",
		},*/
		{
			text: '游戏下载',
			icon: "play",
			collapsible: true,
			children: [
				'ZG.md',
				'sys.md',
				'app.md',
				'PC.md',
				'mod.md',
			],
		},
		{
			text: '游戏攻略',
			icon: "repo",
			collapsible: true,
			children: [
				'STAN-Bilibili.md',
			],
		},
		{
			text: '发布页面',
			icon: "code",
			collapsible: true,
			children: [
				'demo/info.md',
				'demo/cook/',
				'demo/markdown/',
				{
				text: 'Emoji 列表',
				collapsible: true,
				children: [
					'demo/cook/emoji/object.md',
					'demo/cook/emoji/place.md',
					'demo/cook/emoji/symbol.md',
					'demo/cook/emoji/nature.md',
					'demo/cook/emoji/people.md',
				],
			},
			],
		},
		/*{
			text: "玩家问答",
			link: 'fqa.md',
			icon: "network",
		},*/
		
		{
			text: '账号注册',
			icon: "geometry",
			collapsible: true,
			children: [
				'Google.md',
			],
		},
		{
			text: '常用解惑',
			icon: "context",
			collapsible: true,
			children: [
				'CYCT.md',
				'Game.md',
			],
		},
		{
			text: '官方解惑',
			icon: "advance",
			collapsible: true,
			children: [
				'ZH.md',
				'ZY.md',
				'ZB.md',
				'BS.md',
				'WF.md',
				'ZD.md',
				'SC.md',
				'JD.md',
				'YJ.md',
				'BP.md',
				'LT.md',
				'SD.md',
				'QT.md',
			],
		},
		{
			text: '官方文章',
			icon: "computer",
			collapsible: true,
			children: [
				'apkxa.md',
			],
		},
		{
			text: '诗文精选',
			icon: "study",
			collapsible: true,
			children: [
				'J25.md',
				'H18.md',
			],
		},
		{
			text: '游戏收录',
			icon: "folder",
			collapsible: true,
			children: [
				'mw68.md',
				'mw70.md',
				'ctto.md',
				'cn.md',
				'pan.md',
				'EGG.md',
				'news.md',
				'LJ.md',
				'musk.md',
				'ct.md',
				//'MWben.md',
			],
		},
		/*{
			text: '通用收录',
			icon: "box",
			collapsible: true,
			children: [
				'SMS.md',
				'qnsj.md',
			],
		},*/
		//'yuan.md',
		{
			text: '关于本站',
			icon: "selection",
			collapsible: true,
			children: [
				//'YS.md',
				'UP.md',
				'DE.md',
				'sitehelp.md',
				'md.md',
				//'ZS.md',
			],
		},
		//'APP.md',
		//'Log.md',
      ],
});
