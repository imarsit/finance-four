module.exports = {
	// 模版标识
	name: 'finance-foue',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '首页',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '我要理财',
			// 路径
			path: 'querydata',
			// 预览图
			thumbnail: 'querydata.png',
		},
		{
			name: '我要借款',
			// 路径
			path: 'borrowlist',
			// 预览图
			thumbnail: 'borrowlist.png',
		},
		{
			name: '关于我们',
			// 路径
			path: 'about',
			// 预览图
			thumbnail: 'about.png',
		}
	]
}
