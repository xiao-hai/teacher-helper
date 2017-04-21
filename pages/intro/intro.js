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

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})