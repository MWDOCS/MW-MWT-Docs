import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { fullTextSearchPlugin } from "vuepress-plugin-full-text-search2";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { getDirname, path } from "@vuepress/utils";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import { lightgalleryPlugin } from "vuepress-plugin-lightgallery";

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'MW & MWT 文档',
	head: [
		['link', { rel: 'icon', href: 'https://my-img.cc/i/2023/10/03/651b9c9a934a2.png' }],
	],
	shouldPrefetch: false,
	theme,
	plugins: [
	lightgalleryPlugin({
      plugins: ["pager", "share", "zoom", "thumbnail"],
	  delay: 200,
    }),
	removePWAPlugin({
    }),
		/*fullTextSearchPlugin({
			locales: {
				'/': {
					placeholder: '搜索',
				},
			},
		}),*/
		searchProPlugin({
			indexContent: true,
			autoSuggestions: true,
			worker: "docs-search.worker.js",
		}),
	],
});