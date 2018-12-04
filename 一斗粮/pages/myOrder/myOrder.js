Page({
  data: {},

  onLoad() {
    this.getOrderInfo();
  },

  getOrderInfo() {
    my.getStorage({
				key: 'id',
				success: (res) => {
					let consumerId = res.data.uid;
          my.httpRequest({
          url:'http://localhost:9090/api/order/' + consumerId,
          success: (res) => {
          this.setData({
            orderNum: res.data.data[0]['serialNumber'],
          orderStatus: res.data.data[0]['orderStatus'],
          createTime: res.data.data[0]['createTime'],
          payAmount: res.data.data[0]['payAmount'],
          orderItems: res.data.data[0]['orderInfoDetailDTOS']
          });
        
          console.log(res.data.data[0]['orderStatus']);
        },
        fail: () => {
								my.alert({
									title: '出错了',
									content: '远方服务异常',
									buttonText: '我知道了'
								});
							}
		});		
				},
			});
  }

});
