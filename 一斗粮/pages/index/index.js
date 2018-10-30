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
		if (res.keys.length == 0) {
			my.getAuthCode({
				scopes: 'auth_user',
				success: (res) => {				
					// 将用户uid写入缓存
					my.setStorage({
						key: 'id',
						data: {
							"uid": res.authCode,
						},
					});
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


