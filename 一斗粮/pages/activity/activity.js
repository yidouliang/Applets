
Page({
  data: {
    list3: [
      {
        icon: "/images/icon/cup.png",
        text: '会员优惠',
      },
      {
        icon: "/images/icon/buniess.png",
        text: '商户加盟',
      },
      {
        icon: "/images/icon/notice.png",
        text: '公告',
      },
      {
        icon: "/images/icon/discount.png",
        text: '折扣信息',
      },
      {
        icon: "/images/icon/share.png",
        text: '分享',
      }
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
    my.redirectTo({
      url: '../buniess/buniess'
    })
  },
});
