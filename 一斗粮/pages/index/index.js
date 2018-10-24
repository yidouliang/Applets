Page({
	data: {
		background: ['green', 'red', 'yellow'],
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
	},

	open() {
		var app = getApp();
		my.getAuthCode({
			scopes: 'auth_user',
			success: (res) => {
				my.getAuthUserInfo({
					success: ({nickName, avatar}) => {
						app.avatar = avatar;
						app.nickName = nickName;
					}
				});
				my.scan({
					type: 'qr',
					success: (res) => {
						// console.log(res.code);
					},
				});
			},
		});
	},
})
