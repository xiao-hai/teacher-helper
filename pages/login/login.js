var common = require('../../utils/common.js')
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
  },
  bindAuthTap: function() {
    app.getUserInfo(function(userInfo){
        console.log('授权成功');
        wx.setStorage({
          key: "auth",
          data: "ok"
        });
        wx.navigateBack({
          delta: 10
        })
    })
    console.log('点击授权');
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log('商店水电费', res);
    //     wx.setStorage({
    //       key: "auth",
    //       data: "ok"
    //     });
    //     wx.navigateBack({
    //       delta: 10
    //     })
    //   },
    //   fail: function() {
    //     console.log('AAAAA');
    //   },
    //   complete: function() {
    //     console.log('BBBBB');
    //     // wx.navigateTo({
    //     //   url: '../index/index'
    //     // })
    //   },
    // })
  },
  onLoad:function(options){
      // 页面初始化 options为页面跳转所带来的参数
      // common.authCheck();
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
