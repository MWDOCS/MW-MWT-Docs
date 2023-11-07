import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
{ text: "首页", icon: "return", link: "/"},
	{
        text: "国区社区",
        icon: "network",
        children: [
          {
            text: "文档官方反馈社区",
            children: [
              { text: "QQ群组", link: "https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=I_ROUWqbu7vHwWCtgD-JDlAIV6yzTrEk&authKey=TxK%2BKZLv4Aph%2FCCSbBWfqh1p%2BWIukBvWcTwR2A4gu9DnPWX%2B0kBPOqcAKbrStNsH&noverify=0&group_code=858040124"},
            ],
          },
		  {
            text: "现代战舰前沿新闻",
            children: [
              { text: "QQ群组", link: "https://qm.qq.com/q/JqVFw6yogI"},
            ],
          },
		  
		  {
            text: "现代战舰官方社区",
            children: [
              { text: "QQ频道", link: "https://pd.qq.com/s/f0oylihze"},
            ],
          },
		  {
            text: "现代战舰玩家社区",
            children: [
              { text: "QQ频道", link: "https://pd.qq.com/s/8otd5z76x"},
            ],
          },
        ],
      },
{
        text: "MW & MWT 文档",
        icon: "news",
        children: [
          {
            text: "现代战舰",
            children: [
              { text: "开始", link: "GO.html"},
            ],
          },
          {
            text: "现代战争：坦克",
            children: [
              { text: "切换", link: "./mwt"},
            ],
          },
        ],
      },
]);
