var common = require('../../utils/common.js')
var app = getApp()
Page({

    bindBindTap: function(){

       wx.navigateTo({
         url: '../intro/intro'
       })

    },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数
    }
})