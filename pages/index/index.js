//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindIntroTap: function() {
    wx.navigateTo({
      url: '../intro/intro'
    })
  },
  bindLoginTap: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  bindAddStudentTap: function() {
    wx.navigateTo({
      url: '../addStudent/addStudent'
    })
  },
  bindVideoTap: function() {
    wx.navigateTo({
      url: '../video/video'
    })
  },
  bindBindTap: function() {
    wx.navigateTo({
      url: '../bind/bind'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  }
})
