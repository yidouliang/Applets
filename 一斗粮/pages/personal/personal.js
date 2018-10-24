Page({

  data: {
	  list2: [
		  {
			  icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
			  text: '我的信息'
		  },
		  {
			  icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
			  text: '我的订单'
		  },
		  {
			  icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
			  text: '我的收藏'
		  },
		  {
			  icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
			  text: '我的设置'
		  }
	  ],
	  imgUrl: getApp().avatar,
	  username: getApp().nickName,
  },

  test() {
	  var app = getApp();
	  console.log(app.nam);
	  var other = "sss";
	  app.nam = other;
	  console.log(app.nam);
  }

})