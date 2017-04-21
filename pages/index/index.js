// pages/teach/teach.js

var app = getApp()

Page({
  data:{
    showDialog: false
  },

  bindAddTap: function() {
    wx.navigateTo({
      url: '../add/add'
    })
  },

  bindCancelTap: function() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  bindOkTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },

  bindGoStaticsTap: function() {
    wx.navigateTo({
      url: '../statics/statics'
    })
  },

  bindToggleDialogSet:function() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  bindAddStudentTap: function() {
    wx.navigateTo({
      url: '../addStudent/addStudent'
    })
  },

  bindIntroTap: function() {
    wx.navigateTo({
      url: '../intro/intro'
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