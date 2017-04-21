var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindOnionTap: function() {
    wx.navigateTo({
      url: '../bind/bind'
    })
  }
})
