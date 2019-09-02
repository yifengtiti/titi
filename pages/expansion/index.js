//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let data = wx.getStorageSync('userInfo');
    this.setData({
      data: data,
      tempFilePaths: [data.avatarUrl]
    })
  },
  // notice
  //通知
  notice:function(e){
    wx.redirectTo({
      url: '/pages/notice/index?noticeState=' + e.currentTarget.dataset.state
    })
    
  },
  fsaf: function () {
    this.onShareAppMessage();
  },
  sInterested:function(){
    wx.navigateTo({
      url: '/pages/Interested/index'
    })
  },
  common:function(){
    wx.navigateTo({
      url: '/pages/charts/line/index?state=1'
    })
  },
  contBtn:function(){
    wx.navigateTo({
      url: '/pages/addedDirectly/index'
    })
    
  },
  onShareAppMessage: function () {

    return {

      title: '弹出分享时显示的分享标题',

      desc: '分享页面的内容',

      path: '/page/user?id=123' // 路径，传递参数到指定页面。

    }

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
