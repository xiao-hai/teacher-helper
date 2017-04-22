var app = getApp()
Page({
  bindBackBtnTap: function(){
      wx.navigateBack({
        delta: 1
      })
  },
  onShareAppMessage: function () {
    return {
      title: '洋葱数学教师助手',
      path: '/pages/intro/intro',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  }
})