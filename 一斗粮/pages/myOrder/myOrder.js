Page({
   data: {
    tabs: [
      {
        title: '待付款',
        //badgeType: 'text',
        //badgeText: '6',
      },
      {
        title: '已付款',
      }
    ],
    activeTab: 0,
    paidOrder: [], //已支付订单
    waitOrder: [], //未支付订单
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
      
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
      
    });
  },

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
            var that = this
            console.log(this.activeTab)
            if(this.data.activeTab == 0){
              if(res.data.data[0]['orderStatus'] ==='待支付'){

                    that.setData({
                      paidOrder:res.data.data[0],
                    });
              }
            }else{
              if(res.data.data[0]['orderStatus'] === '已支付'){
                    that.setData({
                      waitOrder:res.data.data[0],
                    });
              }
            }
          
        
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
