var common = require('../../utils/common.js')
var app = getApp()

Page({
  data:{
    showDialog: false,
    addClass: false,
    showNewClass: false,
    showTips: false,
    inputValue: '新班级'
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
    this.setData({
      showDialog: !this.data.showDialog,
      showTips: false
    });
    wx.setStorage({
      key: "showTips",
      data: false
    });
    wx.showToast({
      title: '设置成功',
      icon: 'success',
      duration: 2000
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

  bindMaskTap: function() {
    this.setData({
      showDialog: false,
      addClass: false
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
    var that = this;
    common.authCheck();
    wx.getStorage({
        key: 'showTips',
        success: function(res) {
          if (res.data) {
            that.setData({
              showTips: true
            });
          }
          
        },
        fail: function () {
            that.setData({
              showTips: true
            });
        }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    common.authCheck();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
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