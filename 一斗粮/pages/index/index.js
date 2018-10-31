Page({
	data: {
		background: ['green', 'red', 'yellow'],
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
	},

	/**
	 * 扫码开门
	 */
	openDoor() {

		let res = my.getStorageInfoSync();
		// if (res.keys.length == 0) {
			my.getAuthCode({
				scopes: 'auth_user',
				success: (res) => {	
					if (res.authCode) {
						// 发送请求，获取uid
						my.httpRequest({
							url: 'http://localhost:9090/api/alipay/auth', 
							data: {
								authCode: res.authCode
							},
						  success: (res) => {
							console.log("我已成功请求");
							console.log(res.data.data);
						  },
						  fail: () => {
							  console.log("服务异常");
						  }
						});
					}			
					// 将用户uid写入缓存
					my.setStorage({
						key: 'id',
						data: {
							"uid": res.authCode,
						},
					});
				},
			});
		// } else {
		// 	this.scanCode();
		// }
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


