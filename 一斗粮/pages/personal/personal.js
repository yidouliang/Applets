Page({

  data: {
	  list2: [
		  {
        icon: "/images/icon/me.png",
			  text: '我的信息'
		  },
		  {
        icon: "/images/icon/order.png",
			  text: '我的订单'
		  },
		  {
        icon: "/images/icon/collect.png",
			  text: '我的收藏'
		  },
		  {
        icon: "/images/icon/set.png",
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
		let storage = my.getStorageInfoSync();
		my.getAuthCode({
			scopes: 'auth_user',
			success: (res) => {
				if (storage.keys.length == 0) {
					if (res.authCode) {
						// 发送请求，获取uid
						my.httpRequest({
							url: 'http://www.yidouliang.club/api/alipay/auth',
							data: {
								authCode: res.authCode
							},
							success: (res) => {
								// 将用户uid写入缓存
								my.setStorage({
									key: 'id',
									data: {
										"uid": res.data.data,
									},
								});
							},
							fail: () => {
								my.alert({
									title: '出错了',
									content: '远方服务异常',
									buttonText: '我知道了'
								});
							}
						});
					}
				}

				// 获取用户的昵称和头像
				my.getAuthUserInfo({
					success: ({ nickName, avatar }) => {
						this.setData({
							nickName: nickName,
							avatar: avatar
						});

					}
				});
			},
		});
	},

	/**
	 * 用户点击模块
	 */
	onItemClick(ev) {
		if (ev.detail.index == 0) {
			my.redirectTo({
				url: '../myInfo/myInfo'
			})
		}
	}

})