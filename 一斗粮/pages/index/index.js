Page({
	data: {
		background: ['green', 'red', 'yellow'],
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
    clicktext: "\n扫码开门",
	},

	/**
	 * 扫码开门
	 */
	openDoor() {

		let res = my.getStorageInfoSync();
		if (res.keys.length == 0) {
			my.getAuthCode({
				scopes: 'auth_user',
				success: (res) => {	
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
				},
			});
		} else {
			this.scanCode();
		}
	},

	/**
	 * 调用摄像头进行扫码
	 */
	scanCode() {
		my.scan({
			type: 'qr',
			success: (res) => {
				// console.log(res.code);
			},
		});
	},
	
})


