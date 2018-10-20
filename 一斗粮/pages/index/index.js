Page({
	data: {
		background: ['green', 'red', 'yellow'],
		indicatorDots: true,
		autoplay: true,
		interval: 3000,
	},

	open() {
		my.getAuthCode({
			scopes: 'auth_user',
			success: (res) => {
				my.alert({
					content: res.authCode,
				});
				my.scan({
					type: 'qr',
					success: (res) => {
						my.alert({ title: res.code });
					},
				});
			},
		});
	},
})
