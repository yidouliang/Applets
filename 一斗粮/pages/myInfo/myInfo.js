Page({

	data: {
		
	},

	onShow() {
		this.getInfo();
	},

	/**
	 * 获取用户信息
	 */
	getInfo() {
		let storage = my.getStorageInfoSync();
		if (storage.keys.length == 0) {
			my.alert({
			  title: '请授权登录',
			  content: "您还未授权登录，请先授权登录",
			  buttonText: '我知道了'
			});
		} else {
			my.getStorage({
				key: 'id',
				success: (res) => {
					let consumerId = res.data.uid;
					this.getInfoFromServer(consumerId);
				},
			});
		}
	},

	/**
	 * 从服务器端获取用户信息
	 */
	getInfoFromServer(consumerId) {
		my.httpRequest({
			url:'http://localhost:9090/api/consumer/' + consumerId,
		  success: (res) => {
			  this.setData({
				  nickName: res.data.data.name,
				telphone: res.data.data.telphone,
				avatar: res.data.data.avatar,
			  });
		  },
		});	
	},

	/**
	 * 用户绑定手机号
	 */
	bindPhone() {
		my.alert({
			title: '绑定手机',
			content: '授权绑定手机号，享受更多权益',
			buttonText: '确认授权',
			success: () => {
				my.alert({
					title: '授权成功',
				});
			},
		});
	}
})
