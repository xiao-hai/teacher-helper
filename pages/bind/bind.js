var common = require('../../utils/common.js')
var app = getApp()
Page({
    bindBindTap: function(){
        console.log('绑定成功');
        wx.setStorage({
          key: "auth",
          data: "ok"
        });
        wx.navigateBack({
          delta: 10
        })
    },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
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