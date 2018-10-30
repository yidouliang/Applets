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
  },

	/**
	 * 页面被加载
	 */
	onLoad() {
		 this.getUserInfo();
	},

	/**
	 * 获取用户的头像和昵称
	 */
	getUserInfo() {
		my.getAuthCode({
			scopes: 'auth_user',
			success: (res) => {
				// 获取用户的昵称和头像
				my.getAuthUserInfo({
					success: ({ nickName, avatar }) => {
						this.setData({
							nickName: nickName,
							avatar: avatar
						});

					}
				});
				
				// 将用户uid写入缓存
				my.setStorageSync({
					key: 'id',
					data: {
						"uid": res.authCode,
					},
				});
			}
		});
	}

})