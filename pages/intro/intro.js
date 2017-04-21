// pages/teach/teach.js

var app = getApp()

Page({
  data:{},

  bindVideoTap: function() {
    wx.navigateTo({
      url: '../video/video'
    })
  },

  bindStaticsTap: function() {
    wx.navigateTo({
      url: '../statics/statics'
    })
  },

  bindStartTap: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.navigateTo({
      url: '../login/login'
    })
    // app.getUserInfo(function(userInfo){
    //   wx.setStorage({
    //     key: "auth",
    //     data: "ok"
    //   })
    // })
  },

  onLoad:function(options){
    console.log('intro onLoad');
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    console.log('intro onReady');
    // 页面渲染完成
  },
  onShow:function(){
    console.log('intro onShow');
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})