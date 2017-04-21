var common = require('../../utils/common.js')
var app = getApp()

Page({
  data:{
    showDialog: false,
    addClass: false,
    showNewClass: false,
    inputValue: ''
  },

  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  bindAddTap: function() {
    this.setData({
      addClass: true
    });
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

  bindAddCancelTap: function() {
    this.setData({
      addClass: false
    });
  },

  bindAddOkTap: function() {
    this.setData({
      addClass: false,
      showNewClass: true
    });
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

  // bindToggleAddSet:function() {
  //   this.setData({
  //     addClass: !this.data.addClass
  //   });
  // },

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
    common.authCheck();
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
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
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